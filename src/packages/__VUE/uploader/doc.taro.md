# Uploader 上传

### 介绍

用于将本地的图片或文件上传至服务器。

### 安装

``` javascript
import { createApp } from 'vue';
import { Uploader,Icon,Progress } from '@nutui/nutui-taro';

const app = createApp();
app.use(Uploader);
app.use(Icon);
app.use(Progress);
```


### 基本用法

``` html
<nut-uploader :url="uploadUrl"></nut-uploader>
```
### 上传状态

``` html
<nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" maximum="3" multiple></nut-uploader>
```
### 基础用法-上传列表展示

``` html
<nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" maximum="10" multiple list-type='list'>
  <nut-button type="success" size="small">上传文件</nut-button>
</nut-uploader>
```

### 自定义上传样式

``` html
<nut-uploader :url="uploadUrl">
  <nut-button type="success" size="small">上传文件</nut-button>
</nut-uploader>
```
### 自定义上传使用默认进度条

``` html
<nut-uploader :url="uploadUrl" @progress="onProgress">
  <nut-button type="success" size="small">上传文件</nut-button>
</nut-uploader>
<br />
<nut-progress :percentage="progressPercentage"
  stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
  :status="progressPercentage==100?'':'active'">
</nut-progress>
```

### 直接调起摄像头 camera
    
``` html
<nut-uploader :url="uploadUrl" :source-type="['camera']" ></nut-uploader>
```
### 限制上传数量5个

``` html
<nut-uploader :url="uploadUrl" multiple maximum="5"></nut-uploader>
```
### 限制上传大小（每个文件最大不超过 50kb）

``` html
<nut-uploader :url="uploadUrl" multiple :maximize="1024 * 50" @oversize="onOversize"></nut-uploader>
```

### 自定义 FormData headers

``` html
<nut-uploader :url="uploadUrl" :data="formData" :headers="formData" :with-Credentials="true"></nut-uploader>
```

### 自定义上传方式(before-xhr-upload)

:::demo
```html
<template>
  <nut-uploader url="https://xxxx" @before-xhr-upload="beforeXhrUpload"></nut-uploader>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    // source file https://github.com/jdf2e/nutui/blob/next/src/packages/__VUE/uploader/uploader.ts#L6
    const beforeXhrUpload = (taroUploadFile: any, options: any) => {
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
        success(response: { errMsg: any; statusCode: number; data: string }) {
          if (options.xhrState == response.statusCode) {
            options.onSuccess?.(response, options);
          } else {
            options.onFailure?.(response, options);
          }
        },
        fail(e: any) {
          options.onFailure?.(e, options);
        }
      });
      options.onStart?.(options);
      uploadTask.progress((res: { progress: any; totalBytesSent: any; totalBytesExpectedToSend: any }) => {
        options.onProgress?.(res, options);
        // console.log('上传进度', res.progress);
        // console.log('已经上传的数据长度', res.totalBytesSent);
        // console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
      });
      // uploadTask.abort(); // 取消上传任务
    };
     return {
      beforeXhrUpload
    };
  }
}
</script>
```
:::


### 选中文件后，通过按钮手动执行上传
    
``` html 
<nut-uploader :url="uploadUrl" maximum="5" :auto-upload="false" ref="uploadRef"></nut-uploader>
<br />
<nut-button type="success" size="small" @click="submitUpload">执行上传</nut-button>
```

### 禁用状态

``` html
<nut-uploader disabled></nut-uploader>
```

``` javascript
import { ref } from 'vue';
setup() {
  const uploadUrl = 'http://服务器地址';
  const progressPercentage = ref<string | number>(0);
  const formData = {
    custom: 'test'
  };
  const defaultFileList = ref([
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
  const onOversize = (files: File[]) => {
    console.log('oversize 触发 文件大小不能超过 50kb', files);
  };
  const onDelete = (obj: any) => {
    console.log('delete 事件触发', obj);
  };
  const onProgress = ({ event, options, percentage }: any) => {
    progressPercentage.value = percentage;
    console.log('progress 事件触发', percentage);
  };
  const uploadRef = ref<any>(null);
  const submitUpload = () => {
    uploadRef.value.submit();
  };
  return {
    onOversize,
    onDelete,
    onProgress,
    progressPercentage,
    uploadUrl,
    defaultFileList,
    formData,
    uploadRef,
    submitUpload
  };
}
```

### Prop

| 字段              | 说明                                                                                                                   | 类型                              | 默认值                    |
|-------------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------|---------------------------|
| auto-upload       | 是否在选取文件后立即进行上传，false 时需要手动执行 ref submit 方法进行上传                                             | Boolean                           | true                      |
| name              | 发到后台的文件参数名                                                                                                   | String                            | "file"                    |
| url               | 上传服务器的接口地址                                                                                                   | String                            | -                         |
| v-model:file-list | 默认已经上传的文件列表                                                                                                 | FileItem[]                        | []                        |
| is-preview        | 是否上传成功后展示预览图                                                                                               | Boolean                           | true                      |
| is-deletable      | 是否展示删除按钮                                                                                                       | Boolean                           | true                      |
| method            | 上传请求的 http method                                                                                                 | String                            | "post"                    |
| list-type         | 上传列表的内建样式，支持两种基本样式 picture、list                                                                     | String                            | "picture"                 |
| source-type       | [选择图片的来源](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)                 | String                            | ['album','camera']        |
| maximize          | 可以设定最大上传文件的大小（字节）                                                                                     | Number丨String                    | 9                         |
| maximum           | 文件上传数量限制                                                                                                       | Number丨String                    | 1                         |
| size-type         | 选择图片的来源，[详细说明](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)       | String                            | ['original','compressed'] |
| headers           | 设置上传的请求头部                                                                                                     | Object                            | {}                        |
| data              | 附加上传的信息 formData                                                                                                | Object                            | {}                        |
| upload-icon       | 上传区域[图标名称](#/icon)或图片链接                                                                                   | String                            | "photograph"              |
| upload-icon-size  | 上传区域[图标尺寸](#/icon)大小，如 `20px` `2em` `2rem`                                                                 | String or Number                  | -                         |
| xhr-state         | 接口响应的成功状态（status）值                                                                                         | Number                            | 200                       |
| disabled          | 是否禁用文件上传                                                                                                       | Boolean                           | false                     |
| timeout           | 超时时间，单位为毫秒                                                                                                   | Number丨String                    | 1000 * 30                 |
| before-upload     | 上传前的函数需要返回一个`Promise`对象                                                                                                                                                  | Function                          | null             |
| before-xhr-upload`v3.2.1` | 执行 Taro.uploadFile 上传时，自定义方式                                                                                                                                                                          | Function(Taro.uploadFile，option)                          | null             |
| before-delete     | 除文件时的回调，返回值为 false 时不移除。支持返回一个 `Promise` 对象，`Promise` 对象 resolve(false) 或 reject 时不移除 | Function(file): boolean 丨Promise | -                         |



### FileItem

| 名称     | 说明                                            | 默认值                          |
|----------|-------------------------------------------------|---------------------------------|
| status   | 文件状态值，可选'ready,uploading,success,error' | "ready"                         |
| uid      | 文件的唯一标识                                  | new Date().getTime().toString() |
| name     | 文件名称                                        | ""                              |
| url      | 文件路径                                        | ""                              |
| formData | 上传所需的data                                  | {}                              |

### Event

| 名称            | 说明                   | 回调参数                  |
|-----------------|------------------------|---------------------------|
| start           | 文件上传开始           | options                   |
| progress        | 文件上传的进度         | {event,option,percentage} |
| oversize        | 文件大小超过限制时触发 | files                     |
| success         | 上传成功               | {data,option,fileItem}    |
| failure         | 上传失败               | {data,option,fileItem}    |
| change          | 上传文件改变时的状态   | {fileList,event}          |
| delete          | 文件删除事件     | {files,fileList,index}          |
| file-item-click | 文件上传成功后点击触发 | {fileItem}                |


### Methods

通过 [ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs) 可以获取到 Uploader 实例并调用实例方法

| 方法名           | 说明                                                       | 参数 | 返回值 |
|------------------|------------------------------------------------------------|------|--------|
| submit           | 手动上传模式，执行上传操作                                 | -    | -      |
| clearUploadQueue | 清空已选择的文件队列（该方法一般配合在手动模式上传时使用） | -    | -      |