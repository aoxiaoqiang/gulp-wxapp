# 小程序 Gulp 开发脚手架

* sass 开发 wxss
* webfont 自动 base64 引入
* 支持 px2rpx
* es6/7 开发 js
* 支持生产环境打包
* 支持小程序云
* 支持小程序云函数、存储 mock
* 支持 watch 功能

## 使用

1. git clone 之后，进入文件夹，执行`npm i`安装依赖
2. 使用方法如下：

```bash
# 启动 gulp 编译 client 文件夹
npm run dev
# 启动 server，有nodemon，修改文件会自动重启
npm run server
# 上线打包
npm run build
# watch cloud functions 自动同步到 dist/cloud-functions
```
