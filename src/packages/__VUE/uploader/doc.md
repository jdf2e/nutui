# Uploader 上传

### 介绍

用于将本地的图片或文件上传至服务器。

### 安装

``` javascript
import { createApp } from 'vue';
import { Uploader,Icon,Progress } from '@nutui/nutui';

const app = createApp();
app.use(Uploader);
app.use(Icon);
app.use(Progress);

```


### 基础用法

:::demo
```html
<template>
  <nut-uploader url="https://xxxx"></nut-uploader>
</template>
```
:::
### 上传状态

:::demo
```html
<template>
  <nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" maximum="3" multiple></nut-uploader>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
     const uploadUrl = 'https://xxxxx';
     const defaultFileList = reactive([
      {
        name: '文件1.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'success',
        message: '上传成功',
        type: 'image'
      },
      {
        name: '文件2.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'error',
        message: '上传失败',
        type: 'image'
      },
      {
        name: '文件3.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'uploading',
        message: '上传中...',
        type: 'image'
      }
    ]);
     return {
      uploadUrl,
      defaultFileList
    };
  }
}
</script>
```
:::
### 基础用法-上传列表展示

:::demo
```html
<template>
  <nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" maximum="10" multiple list-type='list'>
    <nut-button type="success" size="small">上传文件</nut-button>
  </nut-uploader>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
     const uploadUrl = 'https://xxxxx';
     const defaultFileList = reactive([
      {
        name: '文件1.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'success',
        message: '上传成功',
        type: 'image'
      },
      {
        name: '文件2.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'error',
        message: '上传失败',
        type: 'image'
      },
      {
        name: '文件3.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'uploading',
        message: '上传中...',
        type: 'image'
      }
    ]);
     return {
      uploadUrl,
      defaultFileList
    };
  }
}
</script>
```
:::

### 自定义上传样式

:::demo
```html
<template>
  <nut-uploader url="https://xxxx">
    <nut-button type="success" size="small">上传文件</nut-button>
  </nut-uploader>
</template>
```
:::
### 自定义上传使用默认进度条

:::demo
```html
<template>
  <nut-uploader :url="uploadUrl" @progress="onProgress">
    <nut-button type="success" size="small">上传文件</nut-button>
  </nut-uploader>
  <br />
  <nut-progress :percentage="progressPercentage"
    stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
    :status="progressPercentage==100?'':'active'">
  </nut-progress>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
     const uploadUrl = 'https://xxxxx';
     const progressPercentage = ref<string | number>(0);
     const onProgress = ({ event, options, percentage }: any) => {
        progressPercentage.value = percentage;
        console.log('progress 事件触发', percentage);
     };
     return {
      uploadUrl,
      onProgress,
      progressPercentage,
    };
  }
}
</script>
```
:::

### 直接调起摄像头（移动端生效）
    
:::demo
```html
<template>
  <nut-uploader url="https://xxxx" capture></nut-uploader>
</template>
```
:::
### 限制上传数量5个

:::demo
```html
<template>
  <nut-uploader url="https://xxxx" multiple maximum="5"></nut-uploader>
</template>
```
:::

### 限制上传大小（每个文件最大不超过 50kb）

:::demo
```html
<template>
  <nut-uploader :url="uploadUrl" multiple :maximize="1024 * 50" @oversize="onOversize"></nut-uploader>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
      const uploadUrl = 'https://xxxxx';
      const onOversize = (files: File[]) => {
        console.log('oversize 触发 文件大小不能超过 50kb', files);
      };
     return {
      uploadUrl,
      onOversize,
    };
  }
}
</script>
```
:::
### 图片压缩（在 beforeupload 钩子中处理）

:::demo
```html
<template>
  <nut-uploader :url="uploadUrl" multiple :before-upload="beforeUpload"></nut-uploader>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
      const uploadUrl = 'https://xxxxx';
      const fileToDataURL = (file: Blob): Promise<any> => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = (e) => resolve((e.target as FileReader).result);
          reader.readAsDataURL(file);
        });
      };
      const dataURLToImage = (dataURL: string): Promise<HTMLImageElement> => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.src = dataURL;
        });
      };
      const canvastoFile = (canvas: HTMLCanvasElement, type: string, quality: number): Promise<Blob | null> => {
        return new Promise((resolve) => canvas.toBlob((blob) => resolve(blob), type, quality));
      };
      const beforeUpload = async (file: File[]) => {
        let fileName = file[0].name;
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;
        const base64 = await fileToDataURL(file[0]);
        const img = await dataURLToImage(base64);
        canvas.width = img.width;
        canvas.height = img.height;

        context.clearRect(0, 0, img.width, img.height);
        context.drawImage(img, 0, 0, img.width, img.height);

        let blob = (await canvastoFile(canvas, 'image/jpeg', 0.5)) as Blob; //quality:0.5可根据实际情况计算
        const f = await new File([blob], fileName);
        return [f];
      };
     return {
      uploadUrl,
      beforeUpload,
    };
  }
}
</script>
```
:::

### 自定义 FormData headers

:::demo
```html
<template>
  <nut-uploader :url="uploadUrl" :data="formData" :headers="formData" :with-credentials="true"></nut-uploader>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const uploadUrl = 'https://xxxxx';
    const formData = {
      custom: 'test'
    };
    return {
      uploadUrl,
      formData
    };
  }
}
</script>
```
:::

### 自定义上传方式(before-xhr-upload)

:::demo
```html
<!-- 当上传方式为put时，直接上传源文件file流 -->
<template>
  <nut-uploader url="https://xxxx" method="put" :before-xhr-upload="beforeXhrUpload"></nut-uploader>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    // source file https://github.com/jdf2e/nutui/blob/next/src/packages/__VUE/uploader/uploader.ts#L51
     const beforeXhrUpload=(xhr:XMLHttpRequest,options:any)=>{
        if (options.method.toLowerCase() == 'put') {
          xhr.send(options.sourceFile);
        }else{
          xhr.send(options.formData);
        }
     }
     return {
      beforeXhrUpload
    };
  }
}
</script>
```
:::

### 选中文件后，通过按钮手动执行上传
    
:::demo
```html
<template>
  <nut-uploader :url="uploadUrl" maximum="5" :auto-upload="false" ref="uploadRef"></nut-uploader>
  <br />
  <nut-button type="success" size="small" @click="submitUpload">手动执行上传</nut-button>
  <nut-button type="danger" size="small" @click="clearUpload">手动清空上传</nut-button>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const uploadUrl = 'https://xxxxx';
    const uploadRef = ref<any>(null);
    const submitUpload = () => {
      uploadRef.value.submit();
    };
    const clearUpload = () => {
      uploadRef.value.clearUploadQueue();
    };
    return {
      uploadUrl,
      uploadRef,
      submitUpload,
      clearUpload
    };
  }
}
</script>
```
:::

### 禁用状态

:::demo
```html
<template>
  <nut-uploader disabled></nut-uploader>
</template>
```
:::
## API
### Props

| 字段                      | 说明                                                                                                                                                                                   | 类型                              | 默认值           |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|------------------|
| auto-upload               | 是否在选取文件后立即进行上传，false 时需要手动执行 ref submit 方法进行上传                                                                                                             | Boolean                           | true             |
| name                      | `input` 标签 `name` 的名称，发到后台的文件参数名                                                                                                                                       | String                            | "file"           |
| url                       | 上传服务器的接口地址                                                                                                                                                                   | String                            | -                |
| v-model:file-list         | 默认已经上传的文件列表                                                                                                                                                                 | FileItem[]                        | []               |
| is-preview                | 是否上传成功后展示预览图                                                                                                                                                               | Boolean                           | true             |
| is-deletable              | 是否展示删除按钮                                                                                                                                                                       | Boolean                           | true             |
| method                    | 上传请求的 http method                                                                                                                                                                 | String                            | "post"           |
| list-type                 | 上传列表的内建样式，支持两种基本样式 picture、list                                                                                                                                     | String                            | "picture"        |
| capture                   | 图片[选取模式](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture)，直接调起摄像头                                                                     | String                            | false            |
| maximize                  | 可以设定最大上传文件的大小（字节）                                                                                                                                                     | Number丨String                    | Number.MAX_VALUE |
| maximum                   | 文件上传数量限制                                                                                                                                                                       | Number丨String                    | 1                |
| clear-input               | 是否需要清空`input`内容，设为`true`支持重复选择上传同一个文件                                                                                                                          | Boolean                           | true             |
| accept                    | 允许上传的文件类型，[详细说明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | String                            | *                |
| headers                   | 设置上传的请求头部                                                                                                                                                                     | Object                            | {}               |
| data                      | 附加上传的信息 formData                                                                                                                                                                | Object                            | {}               |
| upload-icon               | 上传区域[图标名称](#/icon)或图片链接                                                                                                                                                   | String                            | "photograph"     |
| upload-icon-size          | 上传区域[图标尺寸](#/icon)大小，如 `20px` `2em` `2rem`                                                                                                                                 | String or Number                  | -                |
| xhr-state                 | 接口响应的成功状态（status）值                                                                                                                                                         | Number                            | 200              |
| with-credentials          | 支持发送 cookie 凭证信息                                                                                                                                                               | Boolean                           | false            |
| multiple                  | 是否支持文件多选                                                                                                                                                                       | Boolean                           | false            |
| disabled                  | 是否禁用文件上传                                                                                                                                                                       | Boolean                           | false            |
| timeout                   | 超时时间，单位为毫秒                                                                                                                                                                   | Number丨String                    | 1000 * 30        |
| before-upload             | 上传前的函数需要返回一个`Promise`对象                                                                                                                                                  | Function                          | null             |
| before-xhr-upload`v3.2.1` | 执行 XHR 上传时，自定义方式                                                                                                                                                            | Function(xhr，option)             | null             |
| before-delete             | 除文件时的回调，返回值为 false 时不移除。支持返回一个 `Promise` 对象，`Promise` 对象 resolve(false) 或 reject 时不移除                                                                 | Function(file,fileList): boolean 丨Promise | -                |

> 注意：accept、capture 和 multiple 为浏览器 input 标签的原生属性，移动端各种机型对这些属性的支持程度有所差异，因此在不同机型和 WebView 下可能出现一些兼容性问题。

### FileItem

| 名称     | 说明                                            | 默认值                          |
|----------|-------------------------------------------------|---------------------------------|
| status   | 文件状态值，可选'ready,uploading,success,error' | "ready"                         |
| uid      | 文件的唯一标识                                  | new Date().getTime().toString() |
| name     | 文件名称                                        | ""                              |
| url      | 文件路径                                        | ""                              |
| type     | 文件类型                                        | "image/jpeg"                    |
| formData | 上传所需的data                                  | new FormData()                  |

### Events

| 名称            | 说明                   | 回调参数                       |
|-----------------|------------------------|--------------------------------|
| start           | 文件上传开始           | options                        |
| progress        | 文件上传的进度         | {event,option,percentage}      |
| oversize        | 文件大小超过限制时触发 | files                          |
| success         | 上传成功               | {responseText,option,fileItem} |
| failure         | 上传失败               | {responseText,option,fileItem} |
| change          | 上传文件改变时的状态   | {fileList,event}               |
| delete          | 文件删除事件           | {files,fileList,index}         |
| file-item-click | 文件上传成功后点击触发 | {fileItem}                     |

### Methods

通过 [ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs) 可以获取到 Uploader 实例并调用实例方法

| 方法名           | 说明                                                       | 参数  | 返回值 |
|------------------|------------------------------------------------------------|-------|--------|
| submit           | 手动上传模式，执行上传操作                                 | -     | -      |
| clearUploadQueue | 清空已选择的文件队列（该方法一般配合在手动模式上传时使用） | index | -      |