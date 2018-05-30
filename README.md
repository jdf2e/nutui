<p align="center">
  <a href="http://nutui.jd.com">
    <img alt="nutui logo" src="http://nutui.jd.com/asset/img/nutui-logo.png">
  </a>
</p>

# NutUI

[![version](https://img.shields.io/badge/version-1.2-blue.svg?style=flat-square)](http://nutui.jd.com/)
[![license](https://img.shields.io/badge/license-MIT-yellow.svg?style=flat-square)](http://nutui.jd.com/)

> 基于Vue 2.0的移动端轻量级UI组件库

<p align="center">
    <img alt="" src="http://nutui.jd.com/asset/img/erweima.jpg">
</p>

# 安装

``` bash
推荐使用npm安装NutUI
npm install @nutui/nutui --save
```

#### 引用完整组件库
``` bash
1，在webpack入口文件（如app.js或main.js）中引入
import NutUI from '@nutui/nutui'

2，初始化
NutUI.install(Vue)
```
通过以上步骤即可完成整个NutUI组件库的安装。

#### 自定义构建（按需引用）
本组件库支持自定义构建（1.1.0版本以上），您可以根据需要只打包部分组件。
``` bash
1，在NutUI项目目录下执行
npm install

2，执行自定义构建命令
npm run custom

3，在出现的组件列表中，选择所有您需要打包的组件，然后按下回车键即开始构建

4，片刻之后，自定义构建出的nutui.js文件会出现在dist目录下

5，在项目中引入和初始化的操作同上
```

# 组件用法
###### 组件从使用方法上大致分为两类。
*  一类是扩展 HTML 元素，典型的Vue组件形式，使用方式类似原生HTML元素。
``` bash
如遮罩层（Mask）组件，直接使用nut-mask标签即可
<nut-mask :visible.sync="maskShow"><nut-mask>
```
*  另一类是挂在Vue.prototype上的实例方法，在需要的地方调用即可。
``` bash
如对话框（Dialog）组件
this.$dialog(options);
提示框（Toast）组件
this.$toast(msg,during);
```
每个组件的使用方式请参考具体组件[文档](http://nutui.jd.com/index.html#/intro)。

# 联系我们
[nutui@jd.com](mailto:nutui@jd.com)

# License
[MIT](https://github.com/jdf2e/nutui/blob/master/LICENSE)