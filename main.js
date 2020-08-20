const {app, BrowserWindow} = require('electron');

function createWindow () {
    const win = new BrowserWindow({
        width: 495,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
            devTools: false
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})