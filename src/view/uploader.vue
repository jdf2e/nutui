<template>
    <div>
        <h1>Uploader</h1>
        <p>文件异步上传组件，支持预览本地图片。</p>
        <div id="previewBox" v-html="preview"></div>
        <div id="progressBox">{{ progress }}</div>
        <nut-uploader url="" :preview="true" @start="uploadStart" @progress="uploadProgress" @success="uploadSuccess" @failure="uploadFailure" @preview="uploadPreview"></nut-uploader>
        <pre><code v-highlight v-text="demo"></code></pre>
        <pre><code v-highlight>export default {
    methods:{
      uploadStart(){
        console.log('start');
      },
      uploadProgress(file, loaded, total){
        this.progress = '上传进度：'+loaded/total*100+'%';
      },
      uploadPreview(previewFile){
        this.preview ='本地预览图：<img src="'+previewFile+'" alt=""/>';
      },
      uploadSuccess(file, responseTxt){
        alert('上传成功！');
      },
      uploadFailure(file, responseTxt){
        alert('上传失败！');
      }
    }
}</code></pre>
        <h5>Props</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
              <th>可选值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>url</td>
              <td>上传地址</td>
              <td>String</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>preview</td>
              <td>是否开启预览</td>
              <td>Boolean</td>
              <td>false</td>
              <td>预览的是本地图片</td>
            </tr>
            <tr>
              <td>maxSize</td>
              <td>上传最大限制(字节)</td>
              <td>Number</td>
              <td>5242880(5M)</td>
              <td></td>
            </tr>
            <tr>
              <td>acceptType</td>
              <td>支持上传的文件类型</td>
              <td>Array</td>
              <td>['image/jpeg', 'image/png', 'image/gif', 'image/bmp']</td>
              <td></td>
            </tr>
            <tr>
              <td>attach</td>
              <td>附加上传的信息</td>
              <td>Object</td>
              <td>{}</td>
              <td>需要随图片一起通过Request Payload发送的参数及值</td>
            </tr>
          </tbody>
        </table>
        </div>
        <h5>Events</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>start</td>
              <td>上传开始时触发</td>
              <td>--</td>
            </tr>
            <tr>
              <td>progress</td>
              <td>上传进度</td>
              <td>file:文件；loaded:已上传字节；total:总字节</td>
            </tr>
            <tr>
              <td>preview</td>
              <td>预览回调</td>
              <td>previewFile:预览的文件内容(base64)</td>
            </tr>
            <tr>
              <td>success</td>
              <td>上传完成</td>
              <td>file:文件；responseTxt:服务端响应内容。注意：数据传输完毕(xhr.status === 200)即触发此函数，业务逻辑层面有没有上传成功，可能还需要根据responseTxt相关字段判断，具体由接口决定</td>
            </tr>
            <tr>
              <td>failure</td>
              <td>上传进度</td>
              <td>file:文件；responseTxt:服务端响应内容。注意：数据传输层面失败(xhr.status !== 200)时触发此函数，业务逻辑层面的失败需要在success回调中根据相关字段判断，具体由接口决定</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
          demo:`<nut-uploader url="" :preview="true" @start="uploadStart" @progress="uploadProgress"
 @success="uploadSuccess" @failure="uploadFailure" @preview="uploadPreview"></nut-uploader>`,
          preview:'',
          progress:''
        }
    },
    methods:{
      uploadStart(){
        console.log('start');
      },
      uploadProgress(file, loaded, total){
        this.progress = '上传进度：'+loaded/total*100+'%';
      },
      uploadPreview(previewFile){
        this.preview ='本地预览图：<img src="'+previewFile+'" alt=""/>';
      },
      uploadSuccess(file, responseTxt){
        alert('上传成功！');
      },
      uploadFailure(file, responseTxt){
        alert('上传失败！');
      }
    }
}
</script>

<style lang="scss">
#previewBox{
  width:100%;
  img{
    max-width:60%;
  }
}
</style>
