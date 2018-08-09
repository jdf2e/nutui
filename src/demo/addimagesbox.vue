<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
    <h5>1.基本功能：添加图片并显示</h5>
        <ul class="img-box">
            <li v-for="(img,key) in imgs1" :key="key">
                <img :src="img" alt="">
            </li>
        </ul>
        <nut-addimagesbox :icon="icon" class="btn"  @imgMsg="addimg1"     
        ></nut-addimagesbox>
        <h5>限制图片大小及张数</h5>
        <ul class="img-box">
            <li v-for="(img,key) in imgs" :key="key">
                <img :src="img" alt="">
            </li>
        </ul>
        <nut-addimagesbox  class="btn"
        :icon="icon" 
        :size="8000" 
        :maxImg="6"
        :isUpload="true"
        :ajax="option"           
        @imgMsg="addimg"     
        ></nut-addimagesbox>
        <h5>图片删除,提供了delete接口可以直接选取要删除的图片,单击图片删除</h5>
        <ul class="img-box">
            <li v-for="(img,key) in imgs3" :key="key" @click="deleteImg(key)">
                <img :src="img" alt="">
            </li>
        </ul>
        <nut-addimagesbox class="btn"  
        :icon="icon" 
        :delete="delete3"
        @imgMsg="addimg3"     
        ></nut-addimagesbox>
        <h5>提供图片大图预览功能</h5>
        <p>该功能主要结合nut-pictureview组件一起使用,代码示例:</p>        
        <ul class="img-box">
            <li v-for="(img,key) in imgs5" :key="key"  @click="setPicShow(key)">
                <img :src="img" alt="">
            </li>
        </ul>
        <nut-addimagesbox id="pictureView"         
        :visible.sync="picShow" 
        :bgColor="coverColor" 
        :imgArr="imgs5" 
        :initNum="picShowNum" 
        :pagination="showPage" 
        @close-pic="closeDo">
        </nut-addimagesbox>
        <nut-addimagesbox class="btn" 
        :icon="icon" 
         @imgMsg="addimg5"     
        ></nut-addimagesbox>    
  </div>
</template>

<script>
export default {
    data(){
        return{ 
            icon:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M4375.3,1752.6V739.1H3361.7H2348.2V112.5V-514h1013.5h1013.5v-1013.5v-1013.5h626.6h626.6v1013.5V-514h1013.5h1013.5v626.5v626.6H6641.9H5628.4v1013.5v1013.5h-626.6h-626.6V1752.6z" style="fill:#FFFFFF"></path></g></g></svg>',
            imgs1:[],
            imgs3:[],
            imgs5:[],          
            imgs:[],
            option:{
                url:"http://localhost:8080/#/Uploader",
                method:"POST"
            },
            delete3:'',
            picShow:false,
            picShowNum:1,
            showPage:true,
            coverColor:'rgba(0,0,0,.7)',
            demo1:'<ul class="img-box"><li v-for="(img,key) in imgs5" :key="key"  @click="setPicShow(key)"><img :src="img" alt=""></li></ul><nut-pictureview :visible.sync="picShow" :bgColor="coverColor" :imgArr="imgs5" :initNum="picShowNum" :pagination="showPage" @close-pic="closeDo"></nut-pictureview><nut-addimagesbox class="btn"  @imgMsg="addimg5"></nut-addimagesbox>'
        }
    },
    methods:{
        addimg1(data){
            let that = this;
            if(data.code == 3) {
                that.imgs1 = data.msg.imgs;
            }            
        },
        addimg3(data){
            let that = this;
            if(data.code == 3) {
                that.imgs3 = data.msg.imgs;
            }            
        },
        addimg5(data){
             let that = this;
            if(data.code == 3) {
                that.imgs5 = data.msg.imgs;
            }  
        },
        addimg(data){
            console.log("图片信息：",data)
            let that = this;
            if(data.code == 3) {
                that.imgs = data.msg.imgs;
            }
        },
        deleteImg(key){
            console.log(key)
            let that = this;
            //增加时间戳
            let times = Number(new Date())
            that.delete3 = key +'-'+ times;
            console.log(that.delete3)
        },
        setPicShow(key){
            this.picShowNum = key+1;
            this.picShow = true;
        }

    }
}
</script>

<style lang="scss">
.btn{
    width: .8rem;
    height: .8rem;
    border-radius: 6px; 
    background: rgb(38, 136, 202);
    svg{
        max-height:100%;
        transform: scale(.7);
        color: #fff;

    }
}
.img-box{
    min-height: 110px;
    line-height: 100px;
    padding-top:10px;
    background: #f2f2f2;
    li{
        float: left;
        list-style: none;
        width: 100px;
        height: 100px;
        margin-right: 10px;
        border:1px solid #ddd;   
        text-align: center;  
        overflow: hidden;   
        img{
           
           
            max-height: 100%;
        }
    }
    &:after{
        content: '';
        display: block;
        clear: both;
    }
}
#pictureView{
    .nut-swiper{
        width: 750px;        
        img{
            width: 750px;
            height: 750px;
        }
    }
    .pv-con .nut-swiper{
        height: auto;
    }
}
</style>
