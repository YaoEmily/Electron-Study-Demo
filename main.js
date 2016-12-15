const electron = require('electron');
//控制应用生命周期的模块
const app = electron.app;
//创建原生浏览器窗口的模块
const BrowserWindow = electron.BrowserWindow;
//保持其全局引用，不然JS被GC，windows自动关闭
var onlineStatusWindow;

//当Electron初始化完毕并准备创建浏览器窗口时
//这个方法就被调用
app.on('ready', function() {
  onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false });
  onlineStatusWindow.loadURL('file://' + __dirname + '/online-status.html');
});
