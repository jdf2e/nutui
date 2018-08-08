<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <div id="previewBox" v-html="preview"></div>
        <div id="progressBox">{{ progress }}</div>
        <nut-uploader url="" :preview="true" @start="uploadStart" @progress="uploadProgress" @success="uploadSuccess" @failure="uploadFailure" @preview="uploadPreview" @showMsg="errTip" @afterChange="clearInput"></nut-uploader>
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
      },
      clearInput(input,event){
        //change事件触发后，清空value值，选相同文件时可再次触发change事件
        input.value = '';
      },
      errTip(msg){
        alert(msg);
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
