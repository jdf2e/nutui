# Uploader 上传

### 介绍

用于将本地的图片或文件上传至服务器。

### 安装

``` javascript
import { createApp } from 'vue';
import { Uploader,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Uploader);
app.use(Icon);

```


### 基本用法

``` html
<nut-uploader url="http://服务器地址"></nut-uploader>
```


### 自定义上传样式

``` html
<nut-uploader url="http://服务器地址">
  <nut-button type="primary" icon="uploader">上传文件</nut-button>
</nut-uploader>
```

### 直接调起摄像头 camera
    
``` html
<nut-uploader url="http://服务器地址" :source-type="['camera']" ></nut-uploader>
```
### 限制上传数量5个

``` html
<nut-uploader url="http://服务器地址" multiple maximum="5"></nut-uploader>
```
### 限制上传大小（每个文件最大不超过 50kb）

``` html
<nut-uploader url="http://服务器地址" multiple :maximize="1024 * 50"  @oversize="onOversize"></nut-uploader>
```

``` javascript
setup() {
    const formData = {
      custom: 'test'
    };
    const onOversize = (files: File[]) => {
      console.log('oversize 触发 文件大小不能超过 50kb', files);
    };

   
    return {
      onOversize,
      formData
    };
}
```

### 自定义 FormData headers

``` html
<nut-uploader url="http://服务器地址" :data="formData" :headers="formData"></nut-uploader>
```

``` javascript
setup() {
    const formData = {
      custom: 'test'
    };
    const onOversize = (files: File[]) => {
      console.log('oversize 触发 文件大小不能超过 50kb', files);
    };
   
    return {
      onOversize,
      formData
    };
}
```

### 手动上传
    
``` html 
<nut-uploader url="http://服务器地址" maximum="5" :auto-upload="false" ref="uploadRef"></nut-uploader>
<nut-button type="success" size="small" @click="submitUpload">执行上传</nut-button>
```

``` javascript
import { ref } from 'vue';
setup() {
    const uploadRef = ref<any>(null);
    const submitUpload = () => {
      uploadRef.value.submit();
    };
    return {
      uploadRef,
      submitUpload
    };
}
```

### 禁用状态

``` html
<nut-uploader disabled></nut-uploader>
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
| before-delete     | 除文件时的回调，返回值为 false 时不移除。支持返回一个 `Promise` 对象，`Promise` 对象 resolve(false) 或 reject 时不移除 | Function(file): boolean 丨Promise | -                         |



### FileItem

| 名称     | 说明                                                    | 默认值                          |
|----------|---------------------------------------------------------|---------------------------------|
| status   | 文件状态值，可选'ready,uploading,success,error,removed' | "ready"                         |
| uid      | 文件的唯一标识                                          | new Date().getTime().toString() |
| name     | 文件名称                                                | ""                              |
| url      | 文件路径                                                | ""                              |
| formData | 上传所需的data                                          | {}                              |

### Event

| 名称     | 说明                   | 回调参数         |
|----------|------------------------|------------------|
| start    | 文件上传开始           | options          |
| progress | 文件上传的进度         | event,options    |
| oversize | 文件大小超过限制时触发 | files            |
| success  | 上传成功               | response,options |
| failure  | 上传失败               | response,options |
| change   | 上传文件改变时的状态   | fileList,event   |
| delete   | 文件删除之前的状态     | files,fileList   |


### Methods

通过 [ref](https://v3.cn.vuejs.org/api/special-attributes.html#key) 可以获取到 Uploader 实例并调用实例方法

| 方法名           | 说明                                                       | 参数 | 返回值 |
|------------------|------------------------------------------------------------|------|--------|
| submit           | 手动上传模式，执行上传操作                                 | -    | -      |
| clearUploadQueue | 清空已选择的文件队列（该方法一般配合在手动模式上传时使用） | -    | -      |