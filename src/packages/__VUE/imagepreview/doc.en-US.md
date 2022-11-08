# ImagePreview

### Intro

Support full screen preview videos and images, support functional call.

### Install

```javascript
import { createApp, reactive, toRefs } from 'vue';
//vue
import { ImagePreview, Overlay, Popup, Swiper, SwiperItem } from '@nutui/nutui';
//taro
import { ImagePreview, Overlay, Popup, Swiper, SwiperItem } from '@nutui/nutui-taro';

const app = createApp();
app.use(ImagePreview);


const app = createApp();
app.use(ImagePreview);
```

### Basic Usage
:::demo
```html
<template>
    <nut-imagepreview :show="showPreview" :images="imgData" @close="hideFn"/>
    <nut-cell isLink title="Show preview" :showIcon="true" @click="showFn"></nut-cell>
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

### With Init No
:::demo
```html
<template>
    <nut-imagepreview :show="showPreview" :images="imgData" :content-close="true" :init-no="3" @close="hideFn"/>
    <nut-cell isLink title="With init no" :showIcon="true" @click="showFn"></nut-cell>
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

### With Pagination
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
    <nut-cell isLink title="With pagination" :showIcon="true" @click="showFn"></nut-cell>
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

### With Videos
#### Preview videos not support in taro.

:::demo
```html
<template>
    <nut-imagepreview
        :show="showPreview"
        :images="imgData"
        :videos="videoData"      
        @close="hideFn"
    />
    <nut-cell isLink title="With videos" :showIcon="true" @click="showFn"></nut-cell>
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
                
### Functional Call
#### Functional call not support in taro.

:::demo
```html
<template>
    <nut-cell isLink title="Functional call" :showIcon="true" @click="fnShow"></nut-cell>
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

| Attribute | Description | Type | Default
|----- | ----- | ----- | ----- 
| show | Whether to show preview | Boolean | false
| videos | Videos Array(Videos are before images, not support in taro) |  VideoArray[] | []
| images | Images array | ImageArray[] | []
| autoplay | Autoplay time, zero means not autoplay | Number、String  | 3000  |
| init-no | Init no | Number | 1
| pagination-visible | Whether to show pagination    | Boolean | false |
| pagination-color   | Pagination color    | String  | '#fff'  |
| content-close   | Click image to exit preview    | Boolean  | false  |
| show-index`v3.1.22`   | Whether to show index    | Boolean  | true  |
| closeable`v3.1.22`   | Whether to show close icon    | Boolean  | false  |
| close-icon`v3.1.22`   | Close icon name    | String  | ‘circle-close’  |
| close-icon-position`v3.1.22`   |  Close icon position,can be set to `top-left`   | String  | ‘top-right’  |  
| before-close`v3.1.22`  | Callback function before close   | (active: number) => boolean | Promise<`boolean`>  | -  | 
| max-zoom`v3.1.23`  | Max zoom`Taro isn't supported`   | Number  | 3  | 
| min-zoom`v3.1.23`  | Min zoom`Taro isn't supported`   | Number  | 1/3  | 
| is-Loop`v3.2.5`  | Whether to loop   | Boolean  | `true`  | 

### Data Structure of ImageArray 

| Key | Description | Type | 
|----- | ----- | ----- | 
| src | img url | String | 

### Data Structure of VideoArray

| Key | Description | Type | 
|----- | ----- | ----- | 
| source | Video url and type settings | Object | 
| options | Control video playback properties| Object | 
    
### Events

|Event|Description|Arguments|
|--|--|--|
|close|Emitted when closing ImagePreview|-|
|change`v3.1.22`|Emitted when current image changed|无|
    