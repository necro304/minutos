const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

app.commandLine.appendSwitch('ignore-certificate-errors', 'true');
let win

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    win.setMenuBarVisibility(false)



    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

