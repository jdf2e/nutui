<template>
    <!-- <a class="nut-uploader" href="javascript:;" @click="upload">{{ btnTxt }}</a> -->
    <input type="file" @change="upload($event)" class="uploader">
</template>
<script>
import Uploader from './uploader.js';
export default {
    name:'nut-uploader',
    props: {
        'url':{
            type:String,
            default:''
        },
        'preview':{
            type:Boolean,
            default:false
        },
        'maxSize':{
            type:Number,
            default:5242880
        },
        'acceptType':{
            type:Array,
            default(){
                return ['image/jpeg', 'image/png', 'image/gif', 'image/bmp'];
            }
        },
        'attach':{
            type:Object,
            default(){
                return {};
            }
        },
        'changeEvtCallback':{
            type:Function
        }
    },
    data() {
        return {};
    },
    methods: {
        createUploaderOpts(){
            const _this = this;
            return {
                 $el: {},
                 url: this.url, //图片上传地址
                 formData: null,
                 isPreview: this.preview, //是否开启本地预览
                 previewData:null,
                 maxSize: this.maxSize, //允许上传的文件最大字节
                 acceptType: this.acceptType, //允许上传的文件类型
                 onStart() {
                    _this.$emit('start');
                 },
                 onProgress(file, loaded, total) {
                    _this.$emit('progress',file,loaded,total);
                 },
                 onPreview(previewFile) {
                    _this.$emit('preview',previewFile);
                 },
                 onSuccess(file, responseTxt) {
                    _this.$emit('success',file, responseTxt);
                 },
                 onFailure(file, responseTxt) {
                    _this.$emit('failure',file, responseTxt);
                 }
             };
        },
        upload($event){
            const tar = $event.target;
            if(!this.url) {
                alert('请先配置上传url！');
                this.$emit('afterChange',tar,$event);
                return;
            }

            const formData = new FormData;
            const opt = this.createUploaderOpts();
            if(this.preview) opt.previewData = tar.files[0];
            formData.append(tar.name, tar.files[0]);
            for(let key of Object.keys(this.attach)){
                formData.append(key, this.attach[key]);
            }
            opt.formData = formData;

            opt.showMsgFn = (msg)=>{
                this.$emit('showMsg',msg); 
                console.log(msg);
            }
            new Uploader(opt);

            this.$emit('afterChange',tar,$event);
        }
    }
}
</script>
<style lang="scss">
</style>