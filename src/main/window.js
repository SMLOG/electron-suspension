import {BrowserWindow, ipcMain, screen, Menu, shell, app, webContents} from 'electron'

var win = null;
const window = BrowserWindow.fromWebContents(webContents.getFocusedWebContents());
const winURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080/#/suspension` : `file://${__dirname}/index.html/#/suspension`;
ipcMain.on('showSuspensionWindow', () => {
    if (win) {
        if (win.isVisible()) {
            createSuspensionWindow();
        } else {
            win.showInactive();
        }
    } else {
        createSuspensionWindow();
    }

});

ipcMain.on('createSuspensionMenu', (e) => {
    const rightM = Menu.buildFromTemplate([
        {label: '开始全部任务', enabled: false},
        {label: '暂停全部任务', enabled: false},
        {label: '本次传输完自动关机'},
        {type: 'separator'},
        {
            label: '隐藏悬浮窗',
            click: () => {
                window.webContents.send('hideSuspension', false);
                win.hide()
            }
        },
        {type: 'separator'},
        {
            label: '加入qq群',
            click: () => {
                shell.openExternal('tencent://groupwpa/?subcmd=all&param=7B2267726F757055696E223A3831343237303636392C2274696D655374616D70223A313533393531303138387D0A');
            }
        },
        {
            label: 'GitHub地址',
            click: () => {
                shell.openExternal('https://github.com/lihaotian0607/auth');
            }
        },
        {
            label: '退出软件',
            click: () => {
                app.quit();
            }
        },
    ]);
    rightM.popup({});
});

function createSuspensionWindow() {
    win = new BrowserWindow({
        width: 107, //悬浮窗口的宽度 比实际DIV的宽度要多2px 因为有1px的边框
        height: 27, //悬浮窗口的高度 比实际DIV的高度要多2px 因为有1px的边框
        type: 'toolbar',    //创建的窗口类型为工具栏窗口
        frame: false,   //要创建无边框窗口
        resizable: false, //禁止窗口大小缩放
        show: false,    //先不让窗口显示
        webPreferences: {
            devTools: false //关闭调试工具
        },
        transparent: true,  //设置透明
        alwaysOnTop: true,  //窗口是否总是显示在其他窗口之前
    });
    const size = screen.getPrimaryDisplay().workAreaSize;   //获取显示器的宽高
    const winSize = win.getSize();  //获取窗口宽高

    //设置窗口的位置 注意x轴要桌面的宽度 - 窗口的宽度
    win.setPosition(size.width - winSize[0], 100);
    win.loadURL(winURL);

    win.once('ready-to-show', () => {
        win.show()
    });

    win.on('close', () => {
        win = null;
    })
}

ipcMain.on('hideSuspensionWindow', () => {
    if (win) {
        win.hide();
    }
});