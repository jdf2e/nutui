# ImagePreview 图片预览

展示一组图片全屏预览效果。

## 基本用法


```html
<nut-cell isLink title="展示图片预览" :showIcon="true" @click.native="showPreview = true"></nut-cell>
<nut-imagepreview v-model="showPreview" :images="dataImgItem" @close="showPreview = false"/>
```

JS 代码

```js
  data() {
    return {
      dataImgItem: [
      {
        imgSrc: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
      },
      {
        imgSrc: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
      },
      {
        imgSrc: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
      },
      {
        imgSrc: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
      }
    ];,
      showPreview: true
    };
  },
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| value | 左侧主标题 | Boolean | false
| images | 左侧副标题 | Array`<String>` | []

## Event

|字段|说明|回调参数|
|--|--|--|
|close|点击返回 icon 触发事件回调函数|无|