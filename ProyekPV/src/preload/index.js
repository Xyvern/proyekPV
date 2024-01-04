import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  login: () => ipcRenderer.invoke('login'),
  loadVideo: () => ipcRenderer.invoke('loadvideo'),
  loadKomen: (id) => ipcRenderer.invoke('loadkomen',id),
  search: (nama) => ipcRenderer.invoke('search',nama),
  removefavorite: (id) => ipcRenderer.invoke('unfavorite',id),
  loadfavorite: (user) => ipcRenderer.invoke('loadfavorite',user),
  comment: (isikomen, user) => ipcRenderer.invoke('favorite',isikomen, user),
  addfavorite: (nama, id) => ipcRenderer.invoke('addfavorite',nama, id),
  addkomen: (nama, id,isikomen) => ipcRenderer.invoke('addkomen',nama, id,isikomen),
  register: (user,email, notelp,password) => ipcRenderer.invoke('register', user,email,notelp,password),
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
