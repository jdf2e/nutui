<template>
    <img :src="iSrc" class="nut-image">
</template>
<script>
export default {
    name:'nut-image',
    props: {
        'imgSrc':{
            type:String,
            default:'',
        },
        'webp':{
            type:Boolean,
            default:false,
        },
        'loadingImg':{
            type:String,
            default:'../../../asset/img/loading.gif',
        },
        'errorImg':{
            type:String,
            default:'../../../asset/img/default.png',
        }
    },
    data() {
        return {
            'iSrc':'',
            'useWebp':false,
            'errorCount':0,
        };
    },
    methods: {
        loadImg(noWebp){
            let img = new Image();
            let oSrc = '';
            if(typeof(noWebp)==='undefined' && this.useWebp && !/\.webp$/.test(this.imgSrc)){
                oSrc = this.imgSrc + '.webp';
            }else{
                oSrc = this.imgSrc;
            }
            img.src = oSrc;
            this.$emit('image-load-start',img); 
            img.onload = ()=>{
                this.iSrc = oSrc;
                this.$emit('image-loaded',img); 
                this.$emit('image-load-complete',img,'success'); 
            };
            img.onerror = ()=>{
                if(!this.useWebp || this.errorCount){
                    this.iSrc = this.errorImg;
                    this.$emit('image-load-fail',img);
                    this.$emit('image-load-complete',img,'fail'); 
                }else{
                   this.errorCount++;
                   this.$emit('webp-load-fail',img);
                   //请求非webp格式图片
                   this.loadImg(true); 
                }
            };
        },
        webpSupport(){
            if(!localStorage) return false;
            switch(localStorage.getItem('supportWebp')){
                case 'true':
                    return true;
                case 'false':
                    return false;
                default:
                    try{
                        if(document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp')==0){
                            document.body.classList.add('webp');
                            localStorage.setItem('supportWebp','true');
                            return true;
                        }else{
                            localStorage.setItem('supportWebp','false');
                            return false;
                        }
                    }catch(e){
                        localStorage.setItem('supportWebp','false');
                        return false;
                    }
            }
        }
    },
    created(){
        this.iSrc = this.loadingImg;
        this.useWebp = this.webp && this.webpSupport();
    },
    mounted(){
        if(!this.imgSrc) return;
        this.loadImg();
    }
}
</script>
<style lang="scss">
</style>