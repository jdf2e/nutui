# Uploader 上传

文件上传组件

## 基本用法

```html
<nut-uploader
    name="uploader-demo"
    :url="url"
    :isPreview="true"
    :acceptType = "['image/jpeg', 'image/png', 'image/gif', 'image/bmp']"
    @start="onStart"
    @success="onSuccess"
    @fail="onFail"
    @progress="onProgress"
    @preview="onPreview"
    @showMsg="showMsgFn"
    typeError="对不起，不支持上传该类型文件！"
    limitError="对不起，文件大小超过限制！"
>
上传
</nut-uploader>   
```

```javascript
export default { 
  data() {
    return {
      url:'https://my-json-server.typicode.com/linrufeng/demo/posts',    
    };
  },
  methods:{
      onStart(){
        console.log('上传开始');
      },
      onSuccess(file,res){
        alert('上传成功！');
      },
      onFail(file,res){
        alert('上传失败！');
      },
      onProgress(file, loaded, total) {
        console.log('上传进度:'+parseInt((100 * loaded) / total)+'%');
      },
      onPreview(file) {
        this.previewImg = file;
      },
      showMsgFn(msg){
        alert(msg);
      },
  }
```

## 高级用法

与吐司 **Toast** 组件结合使用

```html
<nut-uploader
    name="uploader-demo"
    :url="url"
    @success="onSuccess"
    @fail="onFail"
    @showMsg="showMsgFn"
>
上传
</nut-uploader>   
```

```javascript
export default { 
  data() {
    return {
      url:'https://my-json-server.typicode.com/linrufeng/demo/posts',    
    };
  },
  methods:{
      onSuccess(file,res){
        this.$toast.success('上传成功');
      },
      onFail(file,res){
        this.$toast.fail('上传失败！');
      },
      showMsgFn(msg){
        this.$toast.text(msg);
      },
  }

```

与按钮 **Button** 组件结合使用

```html
<nut-uploader
  :name="name"
  :url="url"    
  >
  <nut-button small>上传</nut-button>
</nut-uploader>   
```

自定义 headers & formData 使用
```html
<nut-uploader
  :name="name"
  :url="url"
  :headers="headers"
  :attach="formData"
  >
  <nut-button small>上传</nut-button>
</nut-uploader>   
```
```javascript
export default { 
  data() {
    return {
      url:'https://my-json-server.typicode.com/linrufeng/demo/posts', 
      name:'testname',
      headers:{
        token:'test'
      },
      formData:{
        f1:'test',
        f2:'test1'
      },
    };
  },
}
```

与进度条组件 **Progress** 结合使用

```html
<nut-uploader
    :name="name"
    :url="url"
    @progress="progress"    
    > 上传
</nut-uploader>  
<nut-progress :percentage="progressNum" :showText="false" strokeWidth="24"/>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| name | input name的名称 | String | ""
| url | 上传服务器的接口地址 | String | -
| isPreview | 是否需要预览 | Boolean | false
| clearInput | 是否需要清空input内容，设为true支持重复选择上传同一个文件 | Boolean | false
| maxSize | 可以设定最大上传文件的大小（字节） | Number | 5242880
| acceptType | 可以上传文件的类型 | Array | ['image/jpeg', 'image/png', 'image/gif', 'image/bmp']
| attach | 附加上传的信息formData | Object | {}
| headers | 自定义headers | Object | {}
| xhrState | 接口响应的成功状态（status）值 | Number | 200
| typeError | 文件类型错误提示文案 | String | "不支持上传该类型文件"
| limitError | 文件大小超过限制提示文案 | String | "文件大小超过限制"
| xmlError | 浏览器不支持本组件时的提示文案 | String | "对不起，您的浏览器不支持本组件！"
| withCredentials | 支持发送 cookie 凭证信息 | Boolean | fasle

## Event

| 名称 | 说明 | 回调参数 
|----- | ----- | ----- 
| start | 文件上传开始 | -
| progress | 文件上传的进度 | 上传文件、已上传数据量、总数据量
| preview | isPreview为true时可通过此方法获文件的Base64编码，一般用于预览 | 文件的Base64编码
| success | 上传成功 | 文件、responseText
| failure | 上传失败 | 文件、responseText
| showMsg | 组件抛出信息的处理函数 | 组件抛出的提示信息
