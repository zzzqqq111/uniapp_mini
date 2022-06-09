# 萤火商城V2.0开源版 [uni-app端]

#### 项目介绍
* 登录， 定位,打开地图(完成)
* 选择城市
* 发送短信，语音功能
* 支付（只能点击一次）
* 上传文件，打开拍照功能 （已完成）
* 列表，下拉刷新，上拉加载
* 分享
* 直播
*


#### px转为rpx
> 750 * 元素在设计稿中的宽度 / 设计稿基准宽度
> 你需要固定高度，则应该使用 px 
> 
```
若设计稿宽度为 750px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 uni-app 里面的宽度应该设为：750 * 100 / 750，结果为：100rpx。
若设计稿宽度为 640px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 uni-app 里面的宽度应该设为：750 * 100 / 640，结果为：117rpx。
若设计稿宽度为 375px，元素 B 在设计稿上的宽度为 200px，那么元素 B 在 uni-app 里面的宽度应该设为：750 * 200 / 375，结果为：400rpx。
```


#### 如何使用uni-app端

##### 一、导入uniapp项目
    1. 首先下载HBuilderX并安装，地址：https://www.dcloud.io/hbuilderx.html
    2. 打开HBuilderX -> 顶部菜单栏 -> 文件 -> 导入 -> 从本地目录导入 -> 选择uniapp端项目目录
    3. 找到config.js文件，找到里面的apiUrl项，填入已搭建的后端url地址
    4. 打开manifest.json文件，选择微信小程序配置，填写小程序的appid

##### 二、本地调试

    1. 打开HBuilderX -> 顶部菜单栏 -> 运行 -> 运行到浏览器 -> Chrome
    2. 如果请求后端api时 提示跨域错误，可安装Chrome插件：【Allow CORS: Access-Control-Allow-Origin】，地址：https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf

##### 三、打包发行（H5）

    1. 打开HBuilderX -> 顶部菜单栏 -> 发行 -> 网站H5-手机版
    2. 打包后的文件路径：/unpackage/dist/build/h5
    3. 将打包完成的所有文件 复制到商城后端/pulic目录下，全部替换

##### 四、打包发行（微信小程序）

    1. 下载微信开发者工具并安装，地址：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
    2. 打开HBuilderX -> 顶部菜单栏 -> 发行 -> 小程序-微信
    3. 打包后的文件路径：/unpackage/dist/build/mp-weixin
    5. 打开微信开发者工具 导入 打包完成的项目
    6. 检查没有运行错误，在右上方上传小程序、


##### 注意事項：
* @click 改爲@tap
* 首页使用nvue在manifest里配置fast模式，启动速度大概在1秒，其他页面可以使用vue   
* nvue使用场景：  
	* 左右拖动+吸顶的长列表，比如新闻列表
	* 软键盘右下角按钮文字改为“发送”
	* 做复杂的下拉刷新nvue的refresh组件
	* 抖音式视频滑动切换用vue

