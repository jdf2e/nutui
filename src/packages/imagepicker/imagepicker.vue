<template>
    <div class="nut-imagepicker">
        <div class="img-list">
            <transition-group :name="animation?'nutEase':''">
                <div class="img-item"
                        v-for="item in this.imgList"
                        :key="item.id"
                        :style="{'width':width + 'px','height':height + 'px','marginRight':margin + 'px'}"
                        @click="delMode == 'tap' ? deleteImg(item.id) : preview(item.id)"
                        @touchstart="delMode == 'longtap' ? touchStart(item.id) : ''"
                        @touchmove="delMode == 'longtap' ? touchMove(item.id) : ''"
                        @touchend="delMode == 'longtap' ? touchEnd(item.id) : ''"
                >
                <a href="javascript:;"><img :src="item.src" alt=""></a>
                </div>
            </transition-group>
            <div class="add-icon" :style="{'width':width + 'px','height':height + 'px'}" v-show="this.imgList.length < this.max">
                <nut-icon type="plus" color="#F0250F"></nut-icon>
                <input type="file" name="files" :multiple="!ismultiple ? multiple : ''" :accept="accept"  @change="addImg" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nut-imagepicker',
    props: {
        animation:{
            type:[Boolean],
            default:true
        },
        width:{
            type:[String,Number],
            default:100
        },
        height:{
            type:[String,Number],
            default:100
        },
        margin:{
            type:[String,Number],
            default:5
        },
        max:{//允许上传的最大数量
            type:[Number,String],
            default:9
        },
        accept:{
            type:[String],
            default:"image/*"
        },
        ismultiple:{//是否开启多图片上传
            type:[Boolean],
            default:false
        },
        delMode:{//删除图片的方式，支持tap、longtap
            type:[String],
            default:'tap'
        },
        autoUpload:{//选择完图片之后是否自动完成上传
            type:[Boolean,String],
            default:false
        },
        imgList:{
            type:Array,
            default:() => {
                return [

                ];
            }
        }
    },
    data() {
        return {
            timeOutEvent:0
        };
    },
    mounted() {
    },
    methods: {
        addImg(event){
            let self = this;
            //限制图片上传数量
            let file = event.target.files;

            let fileArr = Array.from(file);

            if (file.length > self.max - self.imgList.length) {

                fileArr = fileArr.filter((item,index) => index < self.max - self.imgList.length);
            }

            if (self.autoUpload) {//自动上传
                self.$emit('imgMsg',{
                    code:1,
                    msg:fileArr
                });
            } else {
                fileArr.forEach((item,index) => {
                    let reader = new FileReader();
                    reader.onload = function(evt) {
                        self.imgList.push({
                            id:Math.random(),
                            src:evt.target.result
                        });
                        event.target.value = '';
                        self.$emit('imgMsg',{
                            code:2,
                            msg:fileArr
                        });
                    }
                    reader.readAsDataURL(item);
                });
            }
        },
        preview(id) {
            this.$emit('imgMsg',{
                code:4,
                msg:id
            });
        },
        deleteImg(id) {
            this.imgList = this.imgList.filter(item => item.id != id);
            this.$emit('imgMsg',{
                code:3,
                msg:id
            });
        },
        touchStart(id) {
            this.timeOutEvent = setTimeout(() => {
                this.deleteImg(id);
            },500);
            return false;
        },
        touchMove(id) {
            clearTimeout(this.timeOutEvent);

            return false;
        },
        touchEnd(id) {
            clearTimeout(this.timeOutEvent);//清除定时器
            this.timeOutEvent = 0;
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
