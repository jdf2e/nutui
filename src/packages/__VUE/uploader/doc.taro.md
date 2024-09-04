# Uploader 上传

### 介绍

用于将本地的图片或文件上传至服务器。

### 安装

```js
import { createApp } from 'vue'
import { Uploader } from '@nutui/nutui-taro'

const app = createApp()
app.use(Uploader)
```

### 基础用法

```vue
<template>
  <nut-uploader url="https://xxxx"></nut-uploader>
</template>
```

### 上传状态

```vue
<template>
  <nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" maximum="3" multiple></nut-uploader>
</template>
```

### 基础用法-上传列表展示

```vue
<template>
  <nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" maximum="10" multiple list-type="list">
    <nut-button type="success" size="small">上传文件</nut-button>
  </nut-uploader>
</template>
```

### 自定义上传样式

```vue
<template>
  <nut-uploader :url="uploadUrl">
    <nut-button type="success" size="small">上传文件</nut-button>
  </nut-uploader>
</template>
```

### 自定义上传使用默认进度条

```vue
<template>
  <nut-uploader :url="uploadUrl" @progress="onProgress">
    <nut-button type="success" size="small">上传文件</nut-button>
  </nut-uploader>
  <br />
  <nut-progress
    :percentage="progressPercentage"
    stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
    :status="progressPercentage == 100 ? '' : 'active'"
  >
  </nut-progress>
</template>
```

### 直接调起摄像头 camera

```vue
<template>
  <nut-uploader :url="uploadUrl" :source-type="['camera']"></nut-uploader>
</template>
```

### 使用前摄像头拍摄 3s 视频并上传(仅支持微信小程序)

```vue
<template>
  <nut-uploader :max-duration="3" :source-type="['camera']" camera="front" :url="uploadUrl"></nut-uploader>
</template>
```

### 限制上传数量 5 个

```vue
<template>
  <nut-uploader :url="uploadUrl" multiple maximum="5"></nut-uploader>
</template>
```

### 限制上传大小（每个文件最大不超过 50kb）

```vue
<template>
  <nut-uploader :url="uploadUrl" multiple :maximize="1024 * 50" @oversize="onOversize"></nut-uploader>
</template>
```

### 自定义数据 FormData headers

```vue
<template>
  <nut-uploader :url="uploadUrl" :data="formData" :headers="formData" :with-Credentials="true"></nut-uploader>
</template>
```

### 自定义上传方式(before-xhr-upload)

:::demo

```vue
<template>
  <nut-uploader url="https://xxxx" :before-xhr-upload="beforeXhrUpload"></nut-uploader>
</template>

<script setup>
import { ref } from 'vue';
    // source file https://github.com/jdf2e/nutui/blob/v4/src/packages/__VUE/uploader/uploader.ts#L6
    const beforeXhrUpload = (taroUploadFile, options) => {
      //taroUploadFile  是 Taro.uploadFile ， 你也可以自定义设置其它函数
      const uploadTask = taroUploadFile({
        url: options.url,
        filePath: options.taroFilePath,
        fileType: options.fileType,
        header: {
          'Content-Type': 'multipart/form-data',
          ...options.headers
        }, //
        formData: options.formData,
        name: options.name,
        success(response: { errMsg; statusCode; data }) {
          if (options.xhrState == response.statusCode) {
            options.onSuccess?.(response, options);
          } else {
            options.onFailure?.(response, options);
          }
        },
        fail(e) {
          options.onFailure?.(e, options);
        }
      });
      options.onStart?.(options);
      uploadTask.progress((res) => {
        options.onProgress?.(res, options);
        // console.log('上传进度', res.progress);
        // console.log('已经上传的数据长度', res.totalBytesSent);
        // console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
      });
      // uploadTask.abort(); // 取消上传任务
    };
</script>
```

:::

### 选中文件后，通过按钮手动执行上传

```vue
<template>
  <nut-uploader :url="uploadUrl" maximum="5" :auto-upload="false" ref="uploadRef"></nut-uploader>
  <br />
  <nut-button type="success" size="small" @click="submitUpload">手动执行上传</nut-button>
  <nut-button type="success" size="small" @click="clearUpload">手动清空上传</nut-button>
</template>
```

### 禁用状态

```vue
<template>
  <nut-uploader disabled></nut-uploader>
</template>
```

```vue
<script setup>
import { ref, reactive } from 'vue'
const uploadUrl = 'http://服务器地址'
const progressPercentage = ref(0)
const formData = {
  custom: 'test'
}
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
])
const fileToDataURL = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onloadend = (e) => resolve(e.target.result)
    reader.readAsDataURL(file)
  })
}
const dataURLToImage = (dataURL) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.src = dataURL
  })
}
const canvastoFile = (canvas, type, quality) => {
  return new Promise((resolve) => canvas.toBlob((blob) => resolve(blob), type, quality))
}
const onOversize = (files) => {
  console.log('oversize 触发 文件大小不能超过 50kb', files)
}
const onDelete = (obj) => {
  console.log('delete 事件触发', obj)
}
const onProgress = ({ event, options, percentage }) => {
  progressPercentage.value = percentage
  console.log('progress 事件触发', percentage)
}
const uploadRef = ref(null)
const submitUpload = () => {
  uploadRef.value.submit()
}
const clearUpload = () => {
  uploadRef.value.clearUploadQueue()
}
</script>
```

## API

### Props

| [object Object] | [object Object] | [object Object] | [object Object] |
| --- | --- | --- | --- |
| [object Object] | [object Object]`false`[object Object] | [object Object] | `true` |
| [object Object] | [object Object] | [object Object] | `file` |
| [object Object] | [object Object] | [object Object] | `-` |
| [object Object] | [object Object] | [object Object] | `[]` |
| [object Object] | [object Object] | [object Object] | `true` |
| [object Object] | [object Object] | [object Object] | `true` |
| [object Object] | [object Object] | [object Object] | `post` |
| [object Object] | [object Object]`picture`[object Object]`list` | [object Object] | `picture` |
| [object Object] | [object Object] | [object Object] | `Number.MAX_VALUE` |
| [object Object] | [object Object] | [object Object] | `1` |
| [object Object] | [[object Object]](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html) | [object Object] | `['album','camera']` |
| [object Object]`仅支持WEAPP` | [object Object]`source-type`[object Object]`camera`[object Object] | [object Object] | `back` |
| [object Object] | [[object Object]](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html) | [object Object] | `['original','compressed']` |
| [object Object]`仅支持WEAPP` | [[object Object]](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html) | [object Object] | `['image', 'video', 'mix']` |
| [object Object]`仅支持WEAPP` | [object Object] | [object Object] | [object Object] |
| [object Object] | [object Object] | [object Object] | `{}` |
| [object Object] | [object Object] | [object Object] | `{}` |
| [object Object] | [object Object] | [object Object] | `200` |
| [object Object] | [object Object] | [object Object] | `false` |
| [object Object] | [object Object] | [object Object] | `true` |
| [object Object] | [object Object] | [object Object] | `1000 * 30` |
| [object Object] | [object Object]`Promise`[object Object] | [object Object] | `null` |
| [object Object] | [object Object]`Taro.uploadFile`[object Object] | [object Object] | `null` |
| [object Object]`v4.1.1 仅支持小程序` | [object Object] | [object Object] | `aspectFit` |

### FileItem

| [object Object] | [object Object] | [object Object] |
| --- | --- | --- |
| [object Object] | [object Object]`ready`[object Object]`uploading`[object Object]`success`[object Object]`error` | `ready` |
| [object Object] | [object Object] | `new Date().getTime().toString()` |
| [object Object] | [object Object] | [object Object] |
| [object Object] | [object Object] | [object Object] |
| [object Object] | [object Object] | `{}` |
| [object Object] | [object Object] | `0` |

### Events

| [object Object] | [object Object] | [object Object] |
| --- | --- | --- |
| [object Object] | [object Object] | `options` |
| [object Object] | [object Object] | `{event,option,percentage}` |
| [object Object] | [object Object] | `files` |
| [object Object] | [object Object] | `{data,option,fileItem}` |
| [object Object] | [object Object] | `{data,option,fileItem}` |
| [object Object] | [object Object] | `{fileList,event}` |
| [object Object] | [object Object] | `{files,fileList,index}` |
| [object Object] | [object Object] | `{fileItem}` |

### Uploader Slots

| [object Object] | [object Object] |
| --- | --- |
| [object Object] | [object Object] |
| [object Object] | [object Object]`icon`[object Object] |
| [object Object] | [object Object] |

### Methods

通过 [ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs) 可以获取到 Uploader 实例并调用实例方法

| [object Object] | [object Object] | [object Object] | [object Object] |
| --- | --- | --- | --- |
| [object Object] | [object Object] | [object Object] | `-` |
| [object Object] | [object Object] | [object Object] | [object Object] |
| [object Object] | [object Object] | [object Object] | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| [object Object] | [object Object] |
| --- | --- |
| [object Object] | _[object Object]_ |
| [object Object] | _[object Object]_ |
| [object Object] | _[object Object]_ |
