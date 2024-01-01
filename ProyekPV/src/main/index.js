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

  ipcMain.handle("loadkomen",function (evt){
    return pool.query(`select * from videos`)
  })

  ipcMain.handle("loadfavorite",function (evt,user){
    return pool.query(`select * from videos v 
    join favorite f on v.video_id = f.video_id 
    join users u on u.user_username = f.user_username
    where f.user_username = '${user}'`)
  })

  ipcMain.handle("search",function (evt, nama){
    return pool.query(`select * from videos where video_name like '%${nama}%'`)
    })

  ipcMain.handle('register', function(evt,nama,email,notelp,pass){
    return pool.query(`INSERT INTO users(user_username,user_pfp,user_phone,user_password,user_email)
    VALUES('${nama}',"...","${notelp}","${pass}","${email}");`)
  })

  ipcMain.handle('addfavorite', function(evt,nama,video_id){
    return pool.query(`INSERT INTO favorite(user_username,video_id)
    VALUES('${nama}',${video_id})`)
  })
  
  ipcMain.handle('unfavorite', function(evt,video_id){
    return pool.query(`DELETE FROM FAVORITE where video_id = ${video_id}`)
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
