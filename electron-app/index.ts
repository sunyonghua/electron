const { app, BrowserWindow } = require('electron')

function createWindow() {
  const main = new BrowserWindow({
    /** 窗口大小 */
    width: 800,
    height: 600,
    /** 开启node */
    webPreferences: {
      nodeIntegration: true,
    },
  })

  /** 加载html */
  main.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
