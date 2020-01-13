<template>
    <div id="vueSwiper">
        <h4>横向无缝切换</h4>
        <nut-swiper
            :paginationVisibile="true"
            direction="horizontal"
            :swiperData="dataImgItem"
        >
           <div  v-for="(item,index) in dataImgItem" :key="index"  class="nut-swiper-slide ">
                <img :src="item.imgSrc"   style="max-width:100%;"/> 
            </div>

        </nut-swiper>

        <h4>横向切换</h4>
        <nut-swiper
            :paginationVisibile="true"
            direction="horizontal"
            :swiperData="dataImgItem"
            :canDragging="false"
            :paginationVisible="true"
        >
             <div  v-for="(item,index) in dataImgItem" :key="index"  class="nut-swiper-slide ">
                <img :src="item.imgSrc"   style="max-width:100%;" /> 
            </div>

        </nut-swiper>

         <h4>横向循环切换</h4>
         <nut-swiper
            :paginationVisibile="true"
            direction="horizontal"
            :swiperData="dataImgItem"
            :loop="true"
            :canDragging="false"
            :paginationVisible="true"
        >
             <div  v-for="(item,index) in dataImgItem" :key="index"  class="nut-swiper-slide ">
                <img :src="item.imgSrc"   style="max-width:100%;" /> 
            </div>


        </nut-swiper>

         <h4>纵向自动播放</h4>
          <nut-swiper
            direction="vertical"
            :autoPlay="3000"
            :swiperData="dataImgItem"
        >
             <div  v-for="(item,index) in dataImgItem" :key="index"  class="nut-swiper-slide ">
                <img :src="item.imgSrc"   style="max-width:100%;" /> 
            </div>
        </nut-swiper>

        <h4>滑动懒加载图片</h4>
        <nut-swiper
            direction="horizontal"
            :paginationClickable="true"
            :swiperData="dataImgItem"
            :lazyLoad="true"
             :paginationVisible="true"
             @slideChangeEnd="slideChangeEnd"
             @slideMove="slideMove"
             @slideChangeStart="slideChangeStart"
        >
             <div  v-for="(item,index) in dataImgItem" :key="index"  class="nut-swiper-slide ">
                <img :data-src="item.imgSrc"  style="max-width:100%;" class="nut-img-lazyload"/> 
            </div>

        </nut-swiper>

        
  
    </div>

</template>
<script>
    export default{
        data(){
            return{
                dataItem:[],
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
                        imgSrc:'//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
                    },
                    {
                        imgSrc:'//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
                    },
                    {
                        imgSrc:'//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
                    },
                    {
                        imgSrc:'//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
                    }
                ];
                
            },300)
        },
        methods:{
            slideChangeEnd(page){
                console.log(page);
            },
            slideMove(page){
                console.log(page);
            },
            slideChangeStart(page){
                console.log(page);
            }
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
        // .nut-swiper-slide:nth-child(1), .nut-swiper-slide:nth-child(3){
        //     color:#fff;
        //     background:#848689;
        // }   
        // .nut-swiper-slide:nth-child(2), .nut-swiper-slide:nth-child(4){
        //     color:#333;
        //     background:#ccc;
        // }
       
    }

    

</style>