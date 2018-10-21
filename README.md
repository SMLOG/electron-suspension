## 声明
该项目只是学习使用 项目中使用的百度的UI以及百度的LOGO只为学习目的,如果侵犯了百度的权益,请百度联系我们删除

## 效果预览图
![Image text](https://github.com/lihaotian0607/electron-suspension/blob/master/screenshot/1.gif?raw=true)
![Image text](https://github.com/lihaotian0607/electron-suspension/blob/master/screenshot/2.pngf?raw=true)
![Image text](https://github.com/lihaotian0607/electron-suspension/blob/master/screenshot/3.pngf?raw=true)

## 联系我们
Email: haotian0607@gmail.com
QQ群: [点击加入](https://shang.qq.com/wpa/qunwpa?idkey=68670d406ff42150f78000829448ebf700c3a92617025155f9864366c3d04654)

## 遗留问题
在软件关闭之后重启会导致悬浮窗口的位置重置 也曾尝试在主进程中使用store.js  但是不能用!
如果想解决这个问题 可以在渲染进程中将拖动的最后坐标保存到storejs中
在渲染进程给主进程发送异步消息的时候将坐标携带进去  也可以使用nedb在主进程中存储坐标!


``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build
```
