<template>
    <div class="nut-addimagesbox">
        <div v-html="icon"></div>
        <input  @change="addImg" class="addImgs" type="file" name="files" multiple="multiple" accept="image/*">
    </div>
</template>
<script>
export default {
    name:'nut-addimagesbox',
    props: {
        size:{
            type:Number,
            default:''
        },
        maxImg:{
            type:Number,
            default:''
        },
        moreImg:{
            type:String,
            default:"您添加的图片数量超过限制"
        },
        isUpload:{
            type:Object,
            default:{}
        },
        delete:{
            type:String,
            default:''
        },
        icon:{
            type:String,
            default:''
        }        
    },
    data() {
        return {
            titles: this.$route.meta.title,
                actId: this.$route.query.actId,
                text: '',
                imgArr: [],
                fileUp:[],
                disabled: false
        };
    },
    watch:{
        delete(val){
            let vals = val.split('-')[0];
            console.log("监控",vals)
            let that = this;
            let imgArr = that.imgArr; 
            imgArr.splice(vals,1)
            that.imgArr = imgArr;
            let fileUp =  that.fileUp;
            fileUp.splice(vals,1)
            that.fileUp = fileUp; 
            that.$emit('imgMsg',{
                    code:3,
                    msg:{
                        imgs:that.imgArr,
                        fileUp:that.fileUp
                    }                     
            });
        }
    },
    methods: {
         addImg(node){
             //获取路径
                let that = this;
                var file = node.target.files;  
                let nowLength = that.imgArr.length;
                console.log(file)
                let upImgLeng = that.maxImg ? (that.maxImg - nowLength):file.length;
                //限制图片上传数量                
                if ( that.maxImg && (that.maxImgLeng(file.length) || upImgLeng ===0 )) {     
                    that.$emit('imgMsg',{
                        code:1,
                        msg:that.moreImg
                    });               
                    return false;
                };
                let fileLength = file.length > upImgLeng ? upImgLeng : file.length;                
                for(let i=0;i<fileLength;i++){  
                    //限制图片大小   
                    let thatFile = file[i]; 
                    if( !that.size || thatFile.size < that.size){
                        that.preview(thatFile);
                        that.fileUp.push(thatFile);   
                    } else{
                        that.$emit('imgMsg',{
                            code:2,
                            msg:thatFile
                        });  
                    }                                        
                }                
                                   
        },
         preview(data){
                let that = this;
                const reader = new FileReader();
                reader.readAsDataURL(data);  
                reader.onload = function(e){
                    that.imgArr.push(this.result);  
                    //图片信息      
                    that.$emit('imgMsg',{
                        code:3,
                        msg:{
                            imgs:that.imgArr,
                            fileUp:that.fileUp
                        }                     
                    });                  
                }
        },
        maxImgLeng(msg){
            return  msg <= this.maxImg ? false : true; 
        },
        uploadImg(){
            let that = this;
            let options = that.options;
            const xhr = new XMLHttpRequest();
            let formData = that.fileUp;
            if (xhr.upload) {
                xhr.upload.addEventListener('progress', (e) => {
                    triggerFunc.call(that.options, that.options.onProgress)(formData, e.loaded, e.total);
                }, false);

                xhr.onreadystatechange = (e) => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            triggerFunc.call(that.options, that.options.onSuccess)(formData, xhr.responseText);
                        } else {
                            triggerFunc.call(that.options, that.options.onFailure)(formData, xhr.responseText);
                        }
                    }
                };

                xhr.withCredentials = true;

                xhr.open('POST', that.url, true);
                triggerFunc.call(that.options, that.options.onStart)();
                xhr.send(formData);
            } else {
                this.showMsg('对不起，您的浏览器不支持本组件！')
            }
        }
    }
}
</script>
<style lang="scss">
.nut-addimagesbox{
    position: relative;
    input{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        top:0;
        left: 0;
        z-index: 2;
    }
}
</style>