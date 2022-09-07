# ImagePreview 图片预览

### 介绍
    
支持全屏预览视频和图片，可函数式调用

### 安装

```javascript
import { createApp, reactive, toRefs } from 'vue';

import { ImagePreview } from '@nutui/nutui';


const app = createApp();
app.use(ImagePreview);
```

### 基础用法
:::demo
```html
<template>
    <nut-imagepreview :show="showPreview" :images="imgData" @close="hideFn"/>
    <nut-cell isLink title="展示图片预览" :showIcon="true" @click="showFn"></nut-cell>
</template>

<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
        const resData = reactive({
            showPreview: false,
            imgData: [
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
                },
            ]
        });

        const showFn = () => {
            resData.showPreview = true;
        }

        const hideFn = () => {
            resData.showPreview = false;
        }
        
        return {
            ...toRefs(resData),
            showFn,
            hideFn
        };
    }
  };
</script>
```
:::

### 设置初始页码
:::demo
```html
<template>
    <nut-imagepreview :show="showPreview" :images="imgData" :content-close="true" :init-no="3" @close="hideFn"/>
    <nut-cell isLink title="设置初始页码的图片预览" :showIcon="true" @click="showFn"></nut-cell>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
        const resData = reactive({
            showPreview: false,
            imgData: [
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
                },
            ]
        });

        const showFn = () => {
            resData.showPreview = true;
        }

        const hideFn = () => {
            resData.showPreview = false;
        }
        
        return {
            ...toRefs(resData),
            showFn,
            hideFn
        };
    }
  };
</script>
```
:::

### 设置轮播指示器及颜色
:::demo
```html
<template>
    <nut-imagepreview
        :show="showPreview"
        :images="imgData"
        :pagination-visible="true"
        pagination-color="red"
        @close="hideFn"
    />
    <nut-cell isLink title="设置轮播指示器及颜色" :showIcon="true" @click="showFn"></nut-cell>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
        const resData = reactive({
            showPreview: false,
            imgData: [
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
                },
            ]
        });

        const showFn = () => {
            resData.showPreview = true;
        }

        const hideFn = () => {
            resData.showPreview = false;
        }
        
        return {
            ...toRefs(resData),
            showFn,
            hideFn
        };
    }
  };
</script>
```
:::

### 视频、图片预览
#### taro 场景暂不支持视频预览功能

:::demo
```html
<template>
    <nut-imagepreview
        :show="showPreview"
        :images="imgData"
        :videos="videoData"      
        @close="hideFn"
    />
    <nut-cell isLink title="视频、图片预览" :showIcon="true" @click="showFn"></nut-cell>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
        const resData = reactive({
            showPreview: false,
            imgData: [
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
                },
            ],
            videoData: [
                {
                    source: {
                        src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
                        type: 'video/mp4'
                    },
                    options: {
                        muted: true,
                        controls: true
                    }
                },
                {
                    source: {
                        src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
                        type: 'video/mp4'
                    },
                    options: {
                        muted: true,
                        controls: true
                    }
                }
            ],
        });

        const showFn = () => {
            resData.showPreview = true;
        }

        const hideFn = () => {
            resData.showPreview = false;
        }
        
        return {
            ...toRefs(resData),
            showFn,
            hideFn
        };
    }
  };
</script>
```
:::
                
### 函数式调用
#### taro 场景暂不支持此功能

:::demo
```html
<template>
    <nut-cell isLink title="函数式调用的图片预览" :showIcon="true" @click="fnShow"></nut-cell>
</template>

<script lang="ts">
  import { ImagePreview } from '@nutui/nutui';
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
        const resData = reactive({
            imgData: [
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
                },
                {
                    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
                },
            ]
        });

        const onClose = () => {
        console.log('imagepreview closed');
        };

        const fnShow = () => {
        ImagePreview({
            show: true,
            images: resData.imgData,
            onClose
        })
        };
        
        return {
            ...toRefs(resData),
            fnShow
        };
    }
  };
</script>
```
:::
    
### Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| show | 是否展示预览图片 | Boolean | false
| videos | 预览的视频数组（视频自动放到图片之前、taro场景暂不支持） | Array<`Object`> | []
| images | 预览图片数组 | { src: String }[] | []
| autoplay | 自动轮播时长，0表示不会自动轮播 | Number、String  | 3000  |
| init-no | 初始页码 | Number | 1
| pagination-visible | 分页指示器是否展示    | Boolean | false |
| pagination-color   | 分页指示器选中的颜色    | String  | '#fff'  |
| content-close   | 点击图片可以退出预览    | Boolean  | false  |
| show-index`v3.1.22`  | 是否显示页码    | Boolean  | true  |
| closeable`v3.1.22`  | 是否显示关闭图标    | Boolean  | false  |
| close-icon`v3.1.22`   | 关闭图片名称或图片链接    | String  | ‘circle-close’  |
| close-icon-position`v3.1.22`   | 关闭图标位置，可选值：top-left   | String  | ‘top-right’  |  
| before-close`v3.1.22`  | 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise   | (active: number) => boolean | Promise<`boolean`>  | -  | 
| max-zoom`v3.1.23`  | 手势缩放时，最大缩放比例`小程序暂不支持`   | Number  | 3  | 
| min-zoom`v3.1.23`  | 手势缩放时，最小缩放比例`小程序暂不支持`   | Number  | 1/3  | 

### Events

|字段|说明|回调参数|
|--|--|--|
|close|点击遮罩关闭图片预览时触发|无|
|change`v3.1.22`|切换图片时触发| index:当前图片索引|
    