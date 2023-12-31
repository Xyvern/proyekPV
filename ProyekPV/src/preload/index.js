import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  login: () => ipcRenderer.invoke('login'),
  loadVideo: () => ipcRenderer.invoke('loadvideo'),
  loadRating: () => ipcRenderer.invoke('loadrating'),
  loadKomen: (id) => ipcRenderer.invoke('loadkomen',id),
  search: (nama) => ipcRenderer.invoke('search',nama),
  removefavorite: (id) => ipcRenderer.invoke('unfavorite',id),
  hitungrate: (id) => ipcRenderer.invoke('hitungrating',id),
  loadfavorite: (user) => ipcRenderer.invoke('loadfavorite',user),
  comment: (isikomen, user) => ipcRenderer.invoke('favorite',isikomen, user),
  addfavorite: (nama, id) => ipcRenderer.invoke('addfavorite',nama, id),
  addkomen: (nama, id,isikomen) => ipcRenderer.invoke('addkomen',nama, id,isikomen),
  addrating: (name,id,rating) => ipcRenderer.invoke('addrating',name,id,rating),
  editrating: (name,id,rating) => ipcRenderer.invoke('editrating',name,id,rating),
  register: (user,email, notelp,password) => ipcRenderer.invoke('register', user,email,notelp,password),
  hasilfilter: (genre,category,sort) => ipcRenderer.invoke('hasilfilter', genre,category,sort),
  handlepfp: (nama,path) => ipcRenderer.invoke('handlepfp', nama, path),
  handlechange: (nama,newemail,newphone,code) => ipcRenderer.invoke('handlechange', nama, newemail,newphone,code)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
