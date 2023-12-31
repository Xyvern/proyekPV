import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import {createPool} from 'mysql2/promise'
const pool = createPool({
  host: "localhost",
  database: "db_proyekpv",
  user: "root",
  password: "",
});

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    // width: 900,
    // height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.maximize()
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')
  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })
  ipcMain.handle("login",function (evt){
    return pool.query(`select * from users`)
  })

  ipcMain.handle("loadvideo",function (evt){
    return pool.query(`select * from videos`)
  })

  ipcMain.handle("loadkomen",function (evt, id){
    return pool.query(`select * from comments where video_id = ${id} ORDER BY comment_date DESC`)
  })

  ipcMain.handle("loadfavorite",function (evt,user){
    return pool.query(`select * from videos v 
    join favorite f on v.video_id = f.video_id 
    join users u on u.user_username = f.user_username
    where f.user_username = '${user}'`)
  })

  ipcMain.handle("hasilfilter",function (evt, genre, category,sort){
    console.log(genre);
    console.log(category);
    console.log(sort);
    // return pool.query(`select * from videos where video_genre like '%${genre}%' and video_category like '%${category}%' order by video_name ${sort}`)
    if (genre == null && category == null) {
      return pool.query(`select * from videos order by video_name ${sort}`)
    }
    else if (genre == null && sort == null) {
      return pool.query(`select * from videos where video_category like '%${category}%'`)
    }
    else if (category == null && sort == null) {
      return pool.query(`select * from videos where video_genre like '%${genre}%'`)
    }
    else if (genre == null){
      return pool.query(`select * from videos where video_category like '%${category}%' order by video_name ${sort}`)
    }
    else if (category == null){
      return pool.query(`select * from videos where video_genre like '%${genre}%' order by video_name ${sort}`)
    }
    else if (sort == null){
      return pool.query(`select * from videos where video_genre like '%${genre}%' and video_category like '%${category}%'`)
    }
    else{
      return pool.query(`select * from videos where video_genre like '%${genre}%' and video_category like '%${category}%' order by video_name ${sort}`)
    }
    })


  ipcMain.handle("search",function (evt, nama){
    // console.log(nama);
    return pool.query(`select * from videos where video_name like '%${nama}%'`)
    })

  ipcMain.handle("loadrating",function (evt){
    return pool.query(`select * from ratings`)
  })
  
  ipcMain.handle("addrating",function (evt,name,id,rating){
    return pool.query(`INSERT INTO ratings(user_username,video_id,rating)
    VALUES('${name}',${id},${rating})`)
  })

  ipcMain.handle("editrating", function(evt,name,id,rating){
    return pool.query(`update ratings set rating = ${rating} where video_id = ${id} and user_username = '${name}'`)
  })

  ipcMain.handle("hitungrating",function (evt,id){
    return pool.query(`select ROUND(AVG(rating), 1) rata from ratings where video_id = ${id} group by video_id`)
    })

  ipcMain.handle('register', function(evt,nama,email,notelp,pass){
    return pool.query(`INSERT INTO users(user_username,user_pfp,user_phone,user_password,user_email)
    VALUES('${nama}',"/src/assets/pfp/1.png","${notelp}","${pass}","${email}");`)
  })

  ipcMain.handle('addfavorite', function(evt,nama,video_id){
    return pool.query(`INSERT INTO favorite(user_username,video_id)
    VALUES('${nama}',${video_id})`)
  })
  
  ipcMain.handle('addkomen', function(evt,nama,video_id,isikomen){
    return pool.query(`INSERT INTO comments(user_username,video_id,comment_content)
    VALUES('${nama}',${video_id},'${isikomen}')`)
  })

  ipcMain.handle('unfavorite', function(evt,video_id){
    return pool.query(`DELETE FROM FAVORITE where video_id = ${video_id}`)
  })

  ipcMain.handle('handlepfp', function(evt,nama,path){
    console.log(nama,path);
    return pool.query(`update users set user_pfp = "${path}" where user_username = "${nama}"`)
  })

  ipcMain.handle('handlechange', function(evt,nama,newemail,newphone,code){
    console.log(nama,newemail,newphone,code);
    if (code==1){
      return pool.query(`update users set user_email = "${newemail}", user_phone = "${newphone}" where user_username = "${nama}"`)
    }else if (code==2){
      return pool.query(`update users set user_email = "${newemail}" where user_username = "${nama}"`)
    }else if (code==3){
      return pool.query(`update users set user_phone = "${newphone}" where user_username = "${nama}"`)
    }
    
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
