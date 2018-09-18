<template>
    <div id="mySwiperDemo">
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>

        <p>横向无缝切换</p>

        <nut-swiper
            :pagination-visible="true"
            direction="horizontal"
             ref="demo1"
             @slideChangeEnd="slideChangeEnd">
            <div v-for="item in dataItem" class="nut-swiper-slide" :key="item.name"><span>page{{item.name}}</span></div>

        </nut-swiper>

        <p>横向切换</p>

        <nut-swiper
            :pagination-visible="true"
            :performanceMode="true"
            direction="horizontal">
            <div class="nut-swiper-slide"><span>page 1</span></div>
            <div class="nut-swiper-slide"><span>page 2</span></div>
            <div class="nut-swiper-slide"><span>page 3</span></div>
        </nut-swiper>


        <p>横向循环切换</p>
         <nut-swiper
            :pagination-visible="true"
            :loop="true"
             @slideChangeEnd="slideChangeEnd"
             @slideChangeStart="slideChangeStart"
            direction="horizontal">
            <div class="nut-swiper-slide"><span>page 1</span></div>
            <div class="nut-swiper-slide"><span>page 2</span></div>
            <div class="nut-swiper-slide"><span>page 3</span></div>
        </nut-swiper>


        <p>竖向循环切换</p>
        <nut-swiper
            :pagination-visible="false"
            :autoPlay="5000"
            direction="vertical">
            <div class="nut-swiper-slide"><span>page 1</span></div>
            <div class="nut-swiper-slide"><span>page 2</span></div>
            <div class="nut-swiper-slide"><span>page 3</span></div>
        </nut-swiper>

        <p>竖向切换</p>

        <nut-swiper
            id="fullScreen"
            :pagination-visible="false"
             :performanceMode="true"
              @slideChangeEnd="slideChangeEnd"
               @slideChangeStart="slideChangeStart"
            direction="vertical">
            <div class="nut-swiper-slide"><span >page 1{{this.move}}</span></div>
            <div class="nut-swiper-slide"><span>page 2{{this.move}}</span></div>
            <div class="nut-swiper-slide"><span>page 3{{this.move}}</span></div>
        </nut-swiper>

        <p>多层切换</p>
        <nut-swiper
            :pagination-visible="true"
            direction="horizontal"
            id="nutSwiperMore">
            <div class="nut-swiper-slide">
              <div>page 1</div>
              <div>page 2</div>
              <div>page 3</div>
            </div>
            <div class="nut-swiper-slide">
              <div>page 4</div>
              <div>page 5</div>
              <div>page 6</div>
            </div>
            <div class="nut-swiper-slide">
              <div>page 7</div>
              <div>page 8</div>
              <div>page 9</div>
            </div>
        </nut-swiper>


        <p>lazyLoad切换</p>
        <nut-swiper
            :pagination-visible="false"
            direction="horizontal"
            id="nutSwiperLazyLoad"
            :lazyLoad="true"
            lazyLoadingUrl="//static.360buyimg.com/exploit/mplus/2.1.81/css/i/loading.gif"
            lazyLoaderrorUrl="">
            <div class="nut-swiper-slide">
              <div>
                <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t2029/269/1342378600/94347/c088416b/56581d53Ne97b6442.jpg" class="nut-swiper-lazyload"/>
                <p>牙膏牙膏吃牙膏</p>
              </div>
              <div>
                <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t5944/284/7637282290/291307/34ae9129/597ed721N4d9a0e73.jpg" class="nut-swiper-lazyload"/>
                <p>纯正白砂糖，味甜</p>
              </div>
              <div>
                <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t9604/129/1427755970/357543/ba77f0be/59e071fcN4a3e077d.jpg" class="nut-swiper-lazyload"/>
                <p>妙洁 保鲜袋背心型食品袋中号200只装 可提携易打结</p>
              </div>
            </div>
            <div class="nut-swiper-slide">
              <div>
                <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t3826/185/3277282028/320781/8fbf1015/587c2fcaNc3741a59.jpg" class="nut-swiper-lazyload"/>
                <p>全棉灭菌免换洗</p>
              </div>
              <div>
                <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t6028/28/1573357626/422743/9b98f679/5934c6c9N03afe631.jpg" class="nut-swiper-lazyload"/>
                <p>锁定厨房油污0</p>
              </div>
              <div>
                <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t4792/130/2443359129/122816/5f47cbd2/58ff20ecN49be8a01.jpg" class="nut-swiper-lazyload"/>
                <p>训练宝宝咀嚼力</p>
              </div>
            </div>
            <div class="nut-swiper-slide">
              <div>
                <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t13924/18/765396019/118800/71bda7ea/5a13878fN35292d9b.jpg" class="nut-swiper-lazyload"/>
                <p>得力(deli)S01黑色0.5mm经典办公按动中性笔水性笔子弹头签字笔 12支/盒</p>
              </div>
              <div>
                <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t4231/114/1373063995/311341/1feeaaad/58c1000cN5c448e8d.jpg" class="nut-swiper-lazyload"/>
                <p>台湾蛋黄味糙米卷</p>
              </div>
              <div>
                <img data-src="//img11.360buyimg.com/n3/s300x300_jfs/t2005/197/1846980340/247407/fcdbd278/56e0ceffN1d106bdb.jpg" class="nut-swiper-lazyload"/>
                <p>柔韧耐用，保鲜安全</p>
              </div>
            </div>

        </nut-swiper>


        <p>freeMode 不自动贴合</p>
        <nut-swiper
            direction="horizontal"
            :freeMode="true"
            id="nutSwiperFree"
            >
            <div class="nut-swiper-slide"><span>page 1</span></div>
            <div class="nut-swiper-slide"><span>page 2</span></div>
            <div class="nut-swiper-slide"><span>page 3</span></div>
            <div class="nut-swiper-slide"><span>page 4</span></div>
            <div class="nut-swiper-slide"><span>page 5</span></div>
            <div class="nut-swiper-slide"><span>page 6</span></div>

            <div class="nut-swiper-slide"><span>page 1</span></div>
            <div class="nut-swiper-slide"><span>page 2</span></div>
            <div class="nut-swiper-slide"><span>page 3</span></div>
            <div class="nut-swiper-slide"><span>page 4</span></div>
            <div class="nut-swiper-slide"><span>page 5</span></div>
            <div class="nut-swiper-slide"><span>page 6</span></div>
        </nut-swiper>


        <p>类似日历、地址，滚动范围超过一个slide 应该停留在当前手指停的地方，而不是只滚动一屏</p>
        <nut-swiper
            direction="horizontal"
            id="nutSwiperFree"
            type="multiple"
            >
            <div class="nut-swiper-slide"><span>page 1</span></div>
            <div class="nut-swiper-slide"><span>page 2</span></div>
            <div class="nut-swiper-slide"><span>page 3</span></div>
            <div class="nut-swiper-slide"><span>page 4</span></div>
            <div class="nut-swiper-slide"><span>page 5</span></div>
            <div class="nut-swiper-slide"><span>page 6</span></div>

            <div class="nut-swiper-slide"><span>page 1</span></div>
            <div class="nut-swiper-slide"><span>page 2</span></div>
            <div class="nut-swiper-slide"><span>page 3</span></div>
            <div class="nut-swiper-slide"><span>page 4</span></div>
            <div class="nut-swiper-slide"><span>page 5</span></div>
            <div class="nut-swiper-slide"><span>page 6</span></div>
        </nut-swiper>


    </div>


</template>

<script>
export default {
    data(){
        return{
          
         dataItem:null,
         move:1,
        }
    },
    methods:{
     slideChangeStart:function(currentPage,el,type){
      console.log(type);

     },
     slideChangeEnd:function(currentPage,el){
        console.log(currentPage);
     },

    },
    mounted:function(){


      setTimeout(()=>{
        this.dataItem=[{"name":1},{"name":2},{"name":3},{"name":4},{"name":5},{"name":6}];
        this.$refs.demo1.updateSlidesBindEvent(2);
      },300);
    }
}
</script>

<style lang="scss">
#mySwiperDemo{ ///只为了不影响 依赖nut-swiper 的样式  实际项目中可以不加这个id
  .nut-swiper-slide{
    color:#fff;
    font-size:24px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color:gray;
  }
  .nut-swiper-slide:nth-child(2n){
    background-color: red;
  }
  .nut-swiper-slide:nth-child(2n+1){
    background-color: green;
  }
  #nutSwiperMore{
    .nut-swiper-slide>div{

      background-color:#fff;
      width:30%;
      margin:0 1.6%;
      color:#333;
      height:70%;
      justify-content: center;
      align-items:center;
      display: flex;

    }
  }
  #nutSwiperLazyLoad{
    .nut-swiper-slide>div{
      //flex:1;
      //height:70%;
      background-color:#fff;
      color:#333;
      width:30%;
      margin:0 1.6%;

      img{
        max-width: 100%;
      }
      p{
        font-size: 12px;
        line-height: 18px;
        height:36px;
        overflow: hidden;
      }
    }

  }
  #nutSwiperFree{

    .nut-swiper-slide{
      width:100px;
      font-size: 12px;
      background-color:#ccc;
      margin-right:10px;

    }
  }

  #fullScreen
  {
    height:600px;
    .nut-swiper-slide{
      height:100%;
      width:100%;
    }
  }

}

</style>
