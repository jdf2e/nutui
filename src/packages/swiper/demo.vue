<template>
    <div id="vueSwiper">
        <h4>横向无缝切换</h4>
        <nut-swiper
            :paginationVisibile="true"
            direction="horizontal"
            ref="demo1"
            
        >
            <div  v-for="(item,index) in dataItem" :key="index"  class="nut-swiper-slide">
                <span>page{{item.name}}</span>
            </div>

        </nut-swiper>

        <h4>横向切换</h4>
        <nut-swiper
            :paginationVisibile="true"
            direction="horizontal"
            ref="demo2"
            :canDragging="false"
            :paginationVisible="true"
            
        >
            <div  v-for="(item,index) in dataItem" :key="index"  class="nut-swiper-slide">
                <span>page{{item.name}}</span>
            </div>

        </nut-swiper>

         <h4>横向循环切换</h4>
         <nut-swiper
            :paginationVisibile="true"
            direction="horizontal"
            ref="demo3"
            :loop="true"
            :canDragging="false"
            :paginationVisible="true"
            
        >
            <div  class="nut-swiper-slide gray" >
                <span>page 1</span>
            </div>
            <div  class="nut-swiper-slide gray_1" >
                <span>page 2</span>
            </div>
            <div  class="nut-swiper-slide gray" >
                <span>page 3</span>
            </div>
            <div  class="nut-swiper-slide gray_1" >
                <span>page 4</span>
            </div>


        </nut-swiper>

         <h4>纵向自动播放</h4>
          <nut-swiper
            direction="vertical"
            ref="dem4"
            :autoPlay="3000"
            id="dome4"
        >
            <div  class="nut-swiper-slide gray" >
                <span>page 1</span>
            </div>
            <div  class="nut-swiper-slide gray_1" >
                <span>page 2</span>
            </div>
            <div  class="nut-swiper-slide gray" >
                <span>page 3</span>
            </div>
            <div  class="nut-swiper-slide gray_1" >
                <span>page 4</span>
            </div>
        </nut-swiper>

        <h4>滑动懒加载图片</h4>
        <nut-swiper
            direction="horizontal"
            ref="demo4"
            :lazyLoad="true"
             :paginationVisible="true"
        >
             <div  v-for="(item,index) in dataImgItem" :key="index"  class="nut-swiper-slide ">
                <img :data-src="item.imgSrc"   style="max-width:100%; max-height:100%" class="nut-img-lazyload"/> 
            </div>

        </nut-swiper>

        
  
    </div>

</template>
<script>
    export default{
        data(){
            return{
                dataItem:null,
                dataImgItem:[],
            }
        },
        mounted(){
            setTimeout(()=>{
                this.dataItem = [{
                    name:1
                },{
                    name:2
                },{
                    name:3
                },{
                    name:4
                }]

                this.dataImgItem = [
                    {
                        imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t19441/80/1577112624/568821/1ee9b683/5ad064f1Nf41a94b4.jpg'
                    },
                    {
                        imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t16798/338/1617130854/542623/4c197f4d/5ad064f1Nce5f69e2.jpg'
                    },
                    {
                        imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t22123/348/720079801/233727/23c4c0a4/5b162d64Nc5883413.jpg'
                    },
                    {
                        imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t1/27233/9/354/82863/5c090a0eEe2a350d8/aaa6686ce133e364.jpg'
                    }
                ];
                
                this.$refs.demo1.updateEvent(1);
                this.$refs.demo2.updateEvent();

                this.$refs.demo4.updateEvent();

            },300)
        }
    }
</script>
<style lang="scss">
    #vueSwiper{
        .nut-swiper-slide{
           
            font-size:24px;
            justify-content: center;
            align-items: center;
            display: flex;
        }
        .nut-swiper-slide:nth-child(1), .nut-swiper-slide:nth-child(3){
            color:#fff;
            background:#848689;
        }   
        .nut-swiper-slide:nth-child(2), .nut-swiper-slide:nth-child(4){
            color:#333;
            background:#ccc;
        }
        .gray{
             color:#fff !important;
            background:#848689 !important;
        }
        .gray_1{
             color:#333 !important;
            background:#ccc !important;
        }
    }

    #dome4{
        height:100px;
    }

</style>