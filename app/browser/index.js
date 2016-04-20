'use strict';

import app from 'app';
import BrowserWindow from 'browser-window';
import path from 'path';
const ipcMain = require('electron').ipcMain;

let mainWindow = null;
let forceQuit = false;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('will-quit', function() {
  mainWindow = null;
})

app.on('browser-window-blur', function() {
  console.log('blured');
});

app.on('browser-window-focus', function() {
  console.log('focused');
});

ipcMain.on('close', function() {
  mainWindow.hide();
});

ipcMain.on('minimize', function() {
  mainWindow.minimize();
});

ipcMain.on('maximize', function(e) {
  if (mainWindowOptions.fullscreenable) {
    mainWindow.setFullScreen(true);
  } else {
    mainWindow.maximize();
  }
});

const mainWindowOptions = {
  width: 800,
  height: 600,
  minWidth: 800,
  minHeight: 600,
  fullscreenable: false,
  transparent: true,
  shaddow: true,
  frame: false
}

app.on('activate', function(){
  mainWindow.show();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow(mainWindowOptions);
  mainWindow.loadURL('file://' + path.resolve(__dirname, '../renderer/index.html'));
  mainWindow.on('close', function(e) {
    if (!forceQuit) {
      e.preventDefault();
      mainWindow.hide();
    }
  });
  app.on('before-quit', function() {
    forceQuit = true;
  });
});
