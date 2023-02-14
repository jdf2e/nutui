# vant
基础 48 个 业务 4 个

## 样式覆盖

样式隔离：https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB

### 外部样式类

外部传入的样式类， 通过 设置 Component 中的 externalClasses 

小程序有普通样式类和外部样式类。普通样式类则在 自定义组件 wxss 中设置的，外部样式类则在调用组件时改变自定义组件样式的


在 vant-weapp 中默认的外部样式类为  custom-class


### slot

multipleSlots: true 设置一个页面中可以有多个slot，用 不同的 name 来进行区分
