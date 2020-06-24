# Uploader 上传

文件上传组件

## 通用方法

模版部分如下：要说的一点就是 `img-cell` 是为了 `demo` 展示而临时写的一个模块，所以不能直接使用，需要使用
下面的模版。

```html
<div class="preview-img-box">
  <transition name="fade">
      <div class="img-list" v-if="previewImg">
        <img-cell v-for="(item,index) in previewImg" 
                  :key="index"   
                  :src="item"
                  :clear="()=>{clearImg(index)}"
                    /> 
      </div>
  </transition>
  <nut-uploader
        class="demo-1"
        :name="name"
        :url="url"
        :xhrState="stateNum"
        :acceptType="['image/jpeg', 'image/png', 'image/gif', 'image/bmp']"
        :isPreview="true"
        @preview="preview"
        @success="onSuccess"
        @failure="onFail"
        @start="onStart"
        @showMsg="showMsgFn"
        :multiple="true"
  >+</nut-uploader> 
</div>
```

主要使用了 `@preview` 、 `@success` 、`@failure`、 ` @start`、 `@showMsg` 5个 事件监听上传的整个过程，代码部分如下：

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
      preview(file) {
        this.previewImg = file;
      },
      showMsgFn(msg){
        alert(msg);
      },
  }
```

img-cell 模版代码如下：

```html
<template>
    <div class="img-outbox">  
        <i class="close" @click="close"></i>      
        <img class="img-box" v-if="src" :src="src" alt />        
    </div>
</template>
<script>
export default {
    name:"img-cell",
    props:['src','clear'],
    methods:{
        close(){
            if(Object.prototype.toString.apply(this.clear) === '[object Function]'){
                this.clear()
            }            
        }
    }
}
</script>
<style lang="scss" scoped>
    .img-outbox{
        width: 76px;
        height: 76px;
        border-radius: 3px;
        position: relative;
        display: inline-flex;
        align-items: center;
        margin-right: 14px;
        .close{
            position: absolute;
            display: block;
            background: url(./../../assets/img/img-clear.png) no-repeat;
            background-size: cover;;
            width: 18px;
            height: 18px;       
            top:-9px;
            right:-9px;    
            cursor: pointer;
        }
        .img-box{
            width: 100%;
        }
    }
</style>
```


## 其它用法

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
  <nut-button size="small">上传</nut-button>
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
  <nut-button size="small">上传</nut-button>
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
预览上传图片
```html
 <nut-uploader
    :name="name"
    :url="url"
    :xhrState="stateNum"
    :isPreview="true"
    @success="demoSuccess"
    @fail="demoFail"
    @preview="preview"
    @showMsg="showMsg1"
  >
    <nut-button size="small">上传</nut-button>
  </nut-uploader>
```
```js
preview(file) {
  this.previewImg = file;
},
```

上传图片前处理图片内容

```html
 <nut-uploader
    :beforeUpload="test"
    :name="name"
    :url="url"
    :xhrState="stateNum"
    :acceptType = "['image/jpeg', 'image/png', 'image/gif', 'image/bmp']"
    @success="demo1Success"
    @failure="demo1Fail"
    @start="demo1UploadStart"
    @showMsg="showMsg"
  ><nut-button size="small">上传图片前处理图片内容</nut-button></nut-uploader>
```
```js
test($ev){   
  console.log($ev,'可以处理input选择的内容')  
  return {
    event:$ev,
    data:''
  }
},
```

自定义增加上传图片数据
```html
<nut-uploader
    :selfData="selfData"          
    :name="name"
    :url="url"
    :xhrState="stateNum"
    :acceptType = "['image/jpeg', 'image/png', 'image/gif', 'image/bmp']"
    @success="demo1Success"
    @failure="demo1Fail"
    @start="demo1UploadStart"
    @showMsg="showMsg"
  ><nut-button size="small">自定义增加上传图片数据</nut-button></nut-uploader>

```



## Prop

| 字段             | 说明                                                        | 类型     | 默认值                                                |
| ---------------- | ----------------------------------------------------------- | -------- | ----------------------------------------------------- |
| name             | input name的名称                                            | String   | ""                                                    |
| url              | 上传服务器的接口地址                                        | String   | -                                                     |
| is-preview       | 是否需要预览                                                | Boolean  | false                                                 |
| clear-input      | 是否需要清空input内容，设为 true 支持重复选择上传同一个文件 | Boolean  | false                                                 |
| max-size         | 可以设定最大上传文件的大小（字节）                          | Number   | 5242880                                               |
| accept-type      | 可以上传文件的类型                                          | Array    | ['image/jpeg', 'image/png', 'image/gif', 'image/bmp'] |
| attach           | 附加上传的信息formData                                      | Object   | {}                                                    |
| headers          | 自定义headers                                               | Object   | {}                                                    |
| xhr-state        | 接口响应的成功状态（status）值                              | Number   | 200                                                   |
| type-error       | 文件类型错误提示文案                                        | String   | "不支持上传该类型文件"                                |
| limit-error      | 文件大小超过限制提示文案                                    | String   | "文件大小超过限制"                                    |
| xml-error        | 浏览器不支持本组件时的提示文案                              | String   | "对不起，您的浏览器不支持本组件！"                    |
| with-credentials | 支持发送 cookie 凭证信息                                    | Boolean  | fasle                                                 |
| before-upload    | 上传前的函数需要返回一个对象                                | Function | {event:$event} $event为点击事件必传                   |
| self-data        | 自定义增加上传的数据                                        | Object   | {}                                                    |

## Event

| 名称     | 说明                                                          | 回调参数                         |
| -------- | ------------------------------------------------------------- | -------------------------------- |
| start    | 文件上传开始                                                  | -                                |
| progress | 文件上传的进度                                                | 上传文件、已上传数据量、总数据量 |
| preview  | isPreview为true时可通过此方法获文件的Base64编码，一般用于预览 | 文件的Base64编码                 |
| success  | 上传成功                                                      | 文件、responseText               |
| failure  | 上传失败                                                      | 文件、responseText               |
| showMsg  | 组件抛出信息的处理函数                                        | 组件抛出的提示信息               |

## tips

使用 beforeUpload 一定要返回一个JSON 对象且 event 为必传字段
```js
beforeUpload($e){
  return {
    event:$e
  }
}
```
