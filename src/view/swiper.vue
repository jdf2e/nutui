<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="轮播组件，支持滑动。" 
        :showQrCode="true"></nut-docheader>

        <h5>示例</h5>
        
        <h6>横向切换</h6>
        <nut-codebox :code="demo1" ></nut-codebox>
        <h6>纵向切换</h6>
        <nut-codebox :code="demo2" ></nut-codebox>
        <h6>无缝切换</h6>
        <nut-codebox :code="demo3" ></nut-codebox>
        <h6>循环切换</h6>
        <nut-codebox :code="demo4" ></nut-codebox>
        <h6>自动切换</h6>
        <nut-codebox :code="demo5" ></nut-codebox>
        <h6>懒加载切换</h6>
        <nut-codebox :code="demo6" ></nut-codebox>
        <h6>事件</h6>
         <nut-codebox :code="demoEvent" ></nut-codebox>
        <h5>Props</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
              <th>可选值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>direction</td>
              <td>swiper滑动方向</td>
              <td>String</td>
              <td>"vertical"</td>
              <td>"vertical"/"horizontal"</td>
            </tr>
            <tr>
              <td>paginationVisible</td>
              <td>分页显示与否</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>paginationClickable</td>
              <td>分页是否可以点击</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>loop</td>
              <td>是否循环</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>speed</td>
              <td>过渡动画执行时间</td>
              <td>Number</td>
              <td>500</td>
              <td>--</td>
            </tr>
            <tr>
              <td>autoPlay</td>
              <td>自动轮播，轮播默认是循环模式</td>
              <td>Boolean</td>
              <td>0</td>
              <td>--</td>
            </tr>
            <tr>
              <td>lazyLoad</td>
              <td>图片是否支持lazyload加载，默认是 不lazyload</td>
              <td>Boolean</td>
              <td>false</td>
              <td>flase/true</td>
            </tr>
            <tr>
              <td>lazyLoadingurl</td>
              <td>loading图片url</td>
              <td>String</td>
              <td>'STATIC/loading.gif'</td>
              <td>--</td>
            </tr>
            <tr>
              <td>lazyLoaderrorUrl</td>
              <td>loading图片出错时候垫底图</td>
              <td>String</td>
              <td>''</td>
              <td>--</td>
            </tr>
            <tr>
              <td>freeMode</td>
              <td>自由切换模式</td>
              <td>Boolean</td>
              <td>false</td>
              <td>flase/true</td>
            </tr>
            <tr>
              <td>initPage</td>
              <td>设置初始时候显示的页</td>
              <td>Number</td>
              <td>1</td>
              <td>--</td>
            </tr>
            <tr>
              <td>type</td>
              <td>切换的模式，单个切换，还是自由切换（自动贴合）</td>
              <td>String</td>
              <td>'single'</td>
              <td>'single/multiple'</td>
            </tr>
          </tbody>
        </table>
        </div>
        <h5>Methods</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>方法名</th>
              <th>说明</th>
              <th>参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>next</td>
              <td>去下一页</td>
              <td>--</td>
            </tr>
            <tr>
              <td>prev</td>
              <td>去上一页</td>
              <td>--</td>
            </tr>
            <tr>
              <td>setPage</td>
              <td>设置显示当前页码页</td>
              <td>pageNumber</td>
            </tr>
            <tr>
              <td>updateSlidesBindEvent</td>
              <td>如果动态更新slides，可以重新调用updateSlidesEvent 绑定事件,在异步函数赋值之后，重新绑定，绑定的方法：在nut-swiper上加一个ref="demo1",在函数中用this.$refs.demo1.updateSlidesBindEvent(pageSize) 重新绑定事件 ,pageSize 可以在更新bind后，重新设置pageSize</td>
              <td>pageSize</td>
            </tr>
          </tbody>
        </table>
        </div>
        <h5>Events</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>slideChangeStart</td>
              <td>改变页开始时回调函数</td>
              <td>pageNumber,el</td>
            </tr>
            <tr>
              <td>slideChangeEnd</td>
              <td>改变页时回调函数</td>
              <td>pageNumber,el</td>
            </tr>
            <tr>
              <td>slideRevertStart</td>
              <td>拖动没有改变页时开始时回调函数</td>
              <td>pageNumber,el</td>
            </tr>
            <tr>
              <td>slideRevertEnd</td>
              <td>拖动没有改变页结束时回调函数</td>
              <td>pageNumber,el</td>
            </tr>
            <tr>
              <td>slideMove</td>
              <td>拖动过程中的回调函数</td>
              <td>offset,el</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>


</template>

<script>
export default {
    data(){
        return{
          demo1:
`<nut-swiper
   :pagination-visible="true"
   direction="horizontal"
   :performanceMode="true"
   ref="demo1"
   @slideChangeEnd="slideChangeEnd">
    <div v-for="item in dataItem" class="nut-swiper-silde"><span>page{{item.name}}</span></div>
</nut-swiper>`,
          demo2:
`<nut-swiper
    :pagination-visible="false"
    :performanceMode="true"
    direction="vertical">
    <div class="nut-swiper-silde"><span>page 1</span></div>
    <div class="nut-swiper-silde"><span>page 2</span></div>
    <div class="nut-swiper-silde"><span>page 3</span></div>
</nut-swiper>`,
          demo3:
`<nut-swiper
    :pagination-visible="true"
    @slideChangeEnd="slideChangeEnd"
    @slideChangeStart="slideChangeStart"
    direction="horizontal">
    <div class="nut-swiper-silde"><span>page 1</span></div>
    <div class="nut-swiper-silde"><span>page 2</span></div>
    <div class="nut-swiper-silde"><span>page 3</span></div>
</nut-swiper>`,
          demo4:
`<nut-swiper
    :pagination-visible="true"
    :loop="true"
    direction="horizontal">
    <div class="nut-swiper-silde"><span>page 1</span></div>
    <div class="nut-swiper-silde"><span>page 2</span></div>
    <div class="nut-swiper-silde"><span>page 3</span></div>
</nut-swiper>`,
          demo5:
`<nut-swiper
    :pagination-visible="false"
    :autoPlay="1000"
    direction="vertical">
    <div class="nut-swiper-silde"><span>page 1</span></div>
    <div class="nut-swiper-silde"><span>page 2</span></div>
    <div class="nut-swiper-silde"><span>page 3</span></div>
</nut-swiper>`,
          demo6:
`<nut-swiper
    :pagination-visible="false"
    direction="horizontal"
    id="nutSwiperLazyLoad"
    :lazyLoad="true"
    lazyLoadingUrl="//static.360buyimg.com/exploit/mplus/2.1.81/css/i/loading.gif"
    lazyLoaderrorUrl="">
    <div class="nut-swiper-silde">
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
    <div class="nut-swiper-silde">
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
    <div class="nut-swiper-silde">
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

</nut-swiper>`,
  demoEvent:
`export default {
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
}`,
        }
    },
    methods:{
     
    },
    mounted:function(){

    }
}
</script>

<style lang="scss">
</style>
