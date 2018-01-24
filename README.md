<p align="center">
  <a href="http://nutui.jd.com">
    <img alt="whistle logo" src="http://nutui.jd.com/asset/img/nutui-logo.png">
  </a>
</p>
# NutUI
[![version](https://img.shields.io/badge/version-1.0-blue.svg)](http://nutui.jd.com/)
[![license](https://img.shields.io/badge/license-MIT-yellow.svg)](http://nutui.jd.com/)

> 基于Vue 2.0的移动端轻量级UI组件库

# 安装

``` bash
1、 使用npm安装nutui
npm install nutui --save
```

#### 引用完整组件库
``` bash
1、 在入口文件（如app.js）中引入
import NutUI from 'nutui'

2、 初始化
NutUI.install(Vue)
```


#### 按需引用
``` bash
import Mask from 'nutui/src/package/mask/index'

export default {
    data(){
    },
    components: {
        'nut-mask':Mask
    },
    methods:{
    }
}
```
###### 按需引用需要注意，这种方式使用的是未编译的组件源码：
* 需要自行处理组件的依赖关系，将其依赖的组件先行引入
* 需要在自己的项目里使用babel对ES6编译
* 如果该组件用到了SCSS，则需要使用者自行处理vue单文件中的SCSS编译

# 组件用法
###### 组件从使用方法上大致分为两类。
*  一类是扩展 HTML 元素，典型的Vue组件形式，使用方式类似原生HTML元素。
``` bash
如遮罩层（Mask）组件，直接使用nut-mask标签即可
<nut-mask :visible="true"><nut-mask>
```
*  另一类是Vue构造器的扩展组件，使用方式类似jQuery/Zepto方法。
``` bash
如对话框（Dialog）组件
this.$dialog(options);
提示框（Toast）组件
this.$toast(msg,during);
```
每个组件的使用方式请参考具体组件[文档](http://nutui.jd.com/index.html#/intro)。

# License
[MIT](https://github.com/jdf2e/nutui/blob/master/LICENSE)