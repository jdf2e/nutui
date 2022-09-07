# Uploader

### Intro

Used to upload local pictures or files to the server.

### Install

``` javascript
import { createApp } from 'vue';
import { Uploader,Icon,Progress } from '@nutui/nutui';

const app = createApp();
app.use(Uploader);
app.use(Icon);
app.use(Progress);

```


### Basic Usage

:::demo
```html
<template>
  <nut-uploader url="https://xxxx"></nut-uploader>
</template>
```
:::
### Upload status

:::demo
```html
<template>
  <nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" maximum="3" multiple></nut-uploader>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
     const uploadUrl = 'https://xxxxx';
     const defaultFileList = ref([
      {
        name: 'file 1.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'success',
        message: 'upload success',
        type: 'image'
      },
      {
        name: 'file 2.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'error',
        message: 'upload error',
        type: 'image'
      },
      {
        name: 'file 3.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'uploading',
        message: 'uploading...',
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
### Basic usage - upload list display

:::demo
```html
<template>
  <nut-uploader :url="uploadUrl" v-model:file-list="defaultFileList" maximum="10" multiple list-type='list'>
    <nut-button type="success" size="small">Upload files</nut-button>
  </nut-uploader>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
     const uploadUrl = 'https://xxxxx';
     const defaultFileList = ref([
      {
        name: 'file 1.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'success',
        message: 'upload success',
        type: 'image'
      },
      {
        name: 'file 2.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'error',
        message: 'upload error',
        type: 'image'
      },
      {
        name: 'file 3.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'uploading',
        message: 'uploading...',
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

### Custom upload style

:::demo
```html
<template>
  <nut-uploader url="https://xxxx">
    <nut-button type="success" size="small">Upload files</nut-button>
  </nut-uploader>
</template>
```
:::
### Custom upload uses default progress bar

:::demo
```html
<template>
  <nut-uploader :url="uploadUrl" @progress="onProgress">
    <nut-button type="success" size="small">Upload files</nut-button>
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

### Directly activate the camera (effective on the mobile terminal)
    
:::demo
```html
<template>
  <nut-uploader url="https://xxxx" capture></nut-uploader>
</template>
```
:::
### Limit the number of uploads to 5

:::demo
```html
<template>
  <nut-uploader url="https://xxxx" multiple maximum="5"></nut-uploader>
</template>
```
:::

### Limit upload size (up to 50kb per file)

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
        console.log('oversize limit upload size (up to 50kb per file)', files);
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
### Image compression (handled in the beforeupload hook)

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

### Custom data FormData , headers

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

### Customize XHR upload(before-xhr-upload）

:::demo
```html
<!-- When the upload method is put, upload the source file stream directly -->
<template>
  <nut-uploader url="https://xxxx" method="put" @before-xhr-upload="beforeXhrUpload"></nut-uploader>
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

### Once the file is selected, manually perform the upload via the button
    
:::demo
```html
<template>
  <nut-uploader :url="uploadUrl" maximum="5" :auto-upload="false" ref="uploadRef"></nut-uploader>
  <br />
  <nut-button type="success" size="small" @click="submitUpload">Perform upload</nut-button>
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
    return {
      uploadUrl,
      uploadRef,
      submitUpload
    };
  }
}
</script>
```
:::

### Disabled state

:::demo
```html
<template>
  <nut-uploader disabled></nut-uploader>
</template>
```
:::

### Prop

| Attribute         | Description                                                                                                                                      | Type                              | Default          |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|------------------|
| auto-upload       | Whether to upload the file immediately after selecting it, if false, you need to manually execute the ref submit method to upload                | Boolean                           | true             |
| name              | The name of the `input` tag `name`, the file parameter name sent to the background                                                               | String                            | "file"           |
| url               | The interface address of the upload server                                                                                                       | String                            | -                |
| v-model:file-list | List of uploaded files by default                                                                                                                | FileItem[]                        | []               |
| is-preview        | Whether to display the preview image after the upload is successful                                                                              | Boolean                           | true             |
| is-deletable      | Whether to display the delete button                                                                                                             | Boolean                           | true             |
| method            | The http method of upload request                                                                                                                | String                            | "post"           |
| list-type         | Built-in stylesheets, support for three types: `picture`、`list`                                                                                 | String                            | "picture"        |
| capture           | Capture, can be set to [camera](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture)，turn on the camera directly | String                            | false            |
| maximize          | You can set the maximum upload file size (bytes)                                                                                                 | Number丨String                    | Number.MAX_VALUE |
| maximum           | File upload limit                                                                                                                                | Number丨String                    | 1                |
| clear-input       | Whether to clear the `input` content, set to `true` to support repeated selection and upload of the same file                                    | Boolean                           | true             |
| accept            | File types that can be accepted. See [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)       | String                            | *                |
| headers           | Set request headers                                                                                                                              | Object                            | {}               |
| data              | Uploading extra params or function which can return uploading extra params                                                                       | Object                            | {}               |
| upload-icon       | Upload area [icon name](#/icon) or image link                                                                                                    | String                            | "photograph"     |
| upload-icon-size  | Upload area [icon size] (#/icon) size, such as `20px` `2em` `2rem`                                                                               | String or Number                  | -                |
| xhr-state         | The success status (status) value of the interface response                                                                                      | Number                            | 200              |
| with-credentials  | The ajax upload with cookie sent                                                                                                                 | Boolean                           | false            |
| multiple          | Whether to support multiple file selection                                                                                                       | Boolean                           | false            |
| disabled          | Whether to disable file upload                                                                                                                   | Boolean                           | false            |
| timeout           | timeout, in milliseconds                                                                                                                         | Number丨String                    | 1000 * 30        |
| before-upload     | Hook before reading the file, return false to stop reading the file, can return Promise                                                          | Function                          | null             |
| before-xhr-upload`v3.2.1` | Customize the method when uploading XHR                                                                                                                                                                          | Function(xhr，option)                          | null             |
| before-delete     | Hook before delete the file, return false to stop reading the file, can return Promise                                                           | Function(file): boolean 丨Promise | -                |



### FileItem

| Attribute | Description                                                 | Default                         |
|-----------|-------------------------------------------------------------|---------------------------------|
| status    | File status value, optional 'ready,uploading,success,error' | "ready"                         |
| uid       | Unique ID of the file                                       | new Date().getTime().toString() |
| name      | File name                                                   | ""                              |
| url       | File path                                                   | ""                              |
| type      | File type                                                   | "image/jpeg"                    |
| formData  | Upload the required data                                    | new FormData()                  |

### Event

| Event           | Description                                              | Arguments                      |
|-----------------|----------------------------------------------------------|--------------------------------|
| start           | File upload starts                                       | options                        |
| progress        | The progress of the file upload                          | {event,option,percentage}      |
| oversize        | Triggered when the file size exceeds the limit           | files                          |
| success         | Uploaded successfully                                    | {responseText,option,fileItem} |
| failure         | Upload failed                                            | {responseText,option,fileItem} |
| change          | The state when the uploaded file changes                 | {fileList,event}               |
| delete          | File delete event                                        | {files,fileList,index}         |
| file-item-click | Click to trigger after the file is uploaded successfully | {fileItem}                     |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs) to get Uploader instance and call instance methods.

| Name             | Description                                                                                 | Arguments | Return value |
|------------------|---------------------------------------------------------------------------------------------|-----------|--------------|
| submit           | Manual upload mode, perform upload operation                                                | -         | -            |
| clearUploadQueue | Empty the selected file queue (this method is generally used when uploading in manual mode) | -         | -            |