<template>
    <div>
        <h1>Uploader</h1>
        <p>文件异步上传组件，支持预览本地图片。</p>
        <div id="previewBox" v-html="preview"></div>
        <div id="progressBox">{{ progress }}</div>
        <nut-uploader url="" :preview="true" @start="uploadStart" @progress="uploadProgress" @success="uploadSuccess" @failure="uploadFailure" @preview="uploadPreview"></nut-uploader>
       

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
