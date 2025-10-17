import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'node:path'
import { randomBytes } from 'node:crypto'
import keytar from 'keytar'
const isDev = !app.isPackaged
const SERVICE = 'PasswordVault', ACCOUNT = 'vault-key'
async function getOrCreateKey(){ let key = await keytar.getPassword(SERVICE, ACCOUNT); if(!key){ key = randomBytes(32).toString('base64'); await keytar.setPassword(SERVICE, ACCOUNT, key)} return key }
async function createWindow(){ const win = new BrowserWindow({ width: 1100, height: 740, title: 'Password Vault', backgroundColor: '#000', webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false } }); if(isDev) await win.loadURL('http://localhost:5173'); else await win.loadFile(path.join(__dirname, '../dist/index.html')) }
app.whenReady().then(()=>{ ipcMain.handle('vault:getKey', async ()=> await getOrCreateKey()); createWindow(); app.on('activate', ()=>{ if(BrowserWindow.getAllWindows().length===0) createWindow() })})
app.on('window-all-closed', ()=>{ if(process.platform!=='darwin') app.quit() })