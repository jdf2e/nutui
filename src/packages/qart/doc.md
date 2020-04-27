# Qart 二维码

## 基本用法
``` html
<template>
    <div class="qartDemo">
        <vue-qr :text="codeValue" :size="300"></vue-qr>
    </div>
</template>
```
``` javascript
<script>
export default {
    data() {
        return {
            imageUrl: require("./../../assets/img/logo.png"), 
            codeValue: "nutui.jd.com/"
        };
    },
};
</script>

```
## 背景图
``` html
<template>
    <div class="qartDemo">
        <vue-qr :bgSrc="imageUrl" :text="codeValue" :size="300"></vue-qr>
    </div>
</template>
```
``` javascript
<script>
export default {
    data() {
        return {
            imageUrl: require("./../../assets/img/logo.png"), 
            codeValue: "nutui.jd.com/"
        };
    },
};
</script>

```

## logo图
``` html
<template>
    <div class="qartDemo">
       <vue-qr :logoSrc="imageUrl" :text="codeValue" :logoScale="0.5" :size="300"></vue-qr>
    </div>
</template>
```
``` javascript
<script>
export default {
    data() {
        return {
            imageUrl: require("./../../assets/img/logo.png"), 
            codeValue: "nutui.jd.com/"
        };
    },
};
</script>

```
## logo图+背景颜色
``` html
<template>
    <div class="qartDemo">
         <vue-qr
            :logoSrc="imageUrl"
            :text="codeValue"
            :logoScale="0.5"
            :size="300"
            backgroundColor="#F2140C"
        ></vue-qr>
    </div>
</template>
```
``` javascript
<script>
export default {
    data() {
        return {
            imageUrl: require("./../../assets/img/logo.png"),
            codeValue: "nutui.jd.com/"
        };
    },
};
</script>

```

## callback函数
``` html
<template>
    <div class="qartDemo">
        <vue-qr text="Hello world!" :callback="test" qid="testid"></vue-qr>
    </div>
</template>
```
``` javascript
<script>
export default {
    methods: {
        test(dataUrl, id) {
            console.log(dataUrl, id, "hello");
        }
    }
};
</script>

```


## Prop

| 字段                | 说明                                                                                                                                             | 类型     | 默认值  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------- |
| text                | Contents to encode. 欲编码的内容                                                                                                                 | String   | 必传值  |
| size                | 提前加载高度（数字 1 表示 1 屏的高度）                                                                                                           | Number   | 必传值  |
| correctLevel        | Correct Level 0-3 容错级别 0-3                                                                                                                   | String   | -       |
| margin              | 二维码图像的外边距, 默认 20px                                                                                                                    | String   | 20px    |
| colorDark           | 实点的颜色                                                                                                                                       | String   | #000000 |
| colorLight          | 空白区的颜色                                                                                                                                     | String   | #ffffff |
| bgSrc               | 欲嵌入的背景图地址                                                                                                                               | String   | -       |
| backgroundColor     | 背景色                                                                                                                                           | String   | -       |
| backgroundDimming   | 叠加在背景图上的颜色, 在解码有难度的时有一定帮助                                                                                                 | String   | -       |
| logoSrc             | 嵌入至二维码中心的 LOGO 地址                                                                                                                     | String   | -       |
| logoScale           | 用于计算 LOGO 大小的值, 过大将导致解码失败, LOGO 尺寸计算公式 logoScale*(size-2*margin)                                                          | Number   | 0.2     |
| logoMargin          | LOGO 标识周围的空白边框                                                                                                                          | Number   | 0       |
| logoBackgroundColor | Logo 背景色,需要设置 logo margin                                                                                                                 | String   | -       |
| logoCornerRadius    | 标识及其边框的圆角半径                                                                                                                           | Number   | 0       |
| whiteMargin         | 背景图外将绘制白色边框                                                                                                                           | Boolean  | true    |
| dotScale            | 数据区域点缩小比例(0 < scale < 1.0)                                                                                                              | Number   | 0.35    |
| autoColor           | 背景图的主要颜色将作为实点的颜色                                                                                                                 | Boolean  | true    |
| binarize            | 图像将被二值化处理, 未指定阈值则使用默认值                                                                                                       | Boolean  | true    |
| binarizeThreshold   | 二值化处理的阈值(0 < threshold < 255)                                                                                                            | Number   | 128     |
| callback            | 生成的二维码 Data URI 可以在回调中取得,第一个参数为二维码 data URL, 第二个参数为 props 传过来的 qid(因为二维码生成是异步的,所以加个 id 用于排序) | Function | —       |
| bindElement         | 指定是否需要自动将生成的二维码绑定到HTML上                                                                                                       | Boolean  | true    |
> 更多内容请参照：[vue-qr 官方文档](https://github.com/Binaryify/vue-qr)