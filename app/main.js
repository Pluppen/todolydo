const {app, BrowserWindow, Menu, ipcMain} = require('electron');
let mainWindow = null;
const isMac = process.platform === 'darwin'

// Array used to keep track of the themes. Used in menu.
const themesAvailable = [
    "standardTheme",
    "pluppensNeonTheme"
];

function createWindow () {
    const win = new BrowserWindow({
        width: 495,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
            devTools: true
        }
    })

    win.loadFile('index.html');

    win.webContents.on('did-finish-load', () => {
        mainWindow = win;
    });
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

function updateTheme(newTheme) {
    mainWindow.webContents.send("update_theme", newTheme);
}

const template = [
  // { role: 'appMenu' }
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
    ]
  },
  // Themes   
  {
      label: 'Themes',
      submenu: themesAvailable.map(currTheme => (
          {
              label: currTheme,
              click: () => updateTheme(currTheme)
          }
      ))
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)