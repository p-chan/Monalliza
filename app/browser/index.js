'use strict';

import app from 'app';
import BrowserWindow from 'browser-window';
import path from 'path';

let mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    transparent: true,
    frame: false
  });
  mainWindow.loadURL('file://' + path.resolve(__dirname, '../renderer/index.html'));
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
