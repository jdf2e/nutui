<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="跑马灯-支持文字以及内容的横向纵向轮播(当内容过少时不启动轮播)" 
        :showQrCode="true"></nut-docheader>
        <h5>示例</h5>
        <h6>水平正向内容跑马灯</h6>
        <nut-marquee class="demo1" :gap='gap' :speed="10">
            <template slot >
                <div v-for="(d, idx) in slotDatas" :key='idx' class="txt"><a>www.jd.com</a>{{d}}</div>
            </template>
        </nut-marquee>
        <nut-codebox :code="demo1"></nut-codebox>

        <h6>水平逆向内容跑马灯</h6>
        <nut-marquee class="demo1" :gap='gap' :reverse="true" :speed='30'>
            <template slot>
                <div class="txt">我是一个轮播图，我有好多数字，一个屏幕看不到，只能看到一部分，轮播开始了1,前提是我必须超过屏幕容器的宽度才可以哦，这么长的文字都没有超过</div>
            </template>
        </nut-marquee>
        <nut-codebox :code="demo2"></nut-codebox>

        <h6>垂直正向内容跑马灯</h6>
       <nut-marquee class="demo1" 
            :speed='30' 
            :height="demo3Height" 
            :direction='v'
            :gap="gap">
            <div class="txt1">我是垂直轮播图1</div>
            <div class="txt1">我是垂直轮播图2</div>
            <img class="img" src='//nutui.jd.com/asset/img/nutui-logo-2.png'/>
            <div class="txt1">我是垂直轮播图3</div>
        </nut-marquee>
        <nut-codebox :code="demo3"></nut-codebox>

        <h6>垂直逆向内容跑马灯</h6>
        <nut-marquee class="demo1" 
            :speed='10' 
            :gap= 'gap'
            :height="demo3Height" 
            :direction='v'
            :reverse="true">
            <div class="txt1">我是垂直轮播图1</div>
            <div class="txt1">我是垂直轮播图2</div>
            <img class="img" src='//nutui.jd.com/asset/img/nutui-logo-2.png'/>
            <div class="txt1">我是垂直轮播图3</div>
            <div class="txt1">我是垂直轮播图4</div>
        </nut-marquee>
        <nut-codebox :code="demo4"></nut-codebox>

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
              <td>用来控制轮播方向</td>
              <td>String</td>
              <td>horizontal</td>
              <td>horizontal/vertical</td>
            </tr>
            <tr>
              <td>speed</td>
              <td>轮播的速率-移动1px的时间，单位为ms</td>
              <td>Number</td>
              <td>30</td>
              <td>--</td>
            </tr>
            <tr>
              <td>height</td>
              <td>direction设置为horizontal时，用来控制外层容器高度的</td>
              <td>Number</td>
              <td>auto</td>
              <td>--</td>
            </tr>
            <tr>
              <td>reverse</td>
              <td>是否为逆向，正向指的是：从右向左，从下向上。</td>
              <td>Boolean</td>
              <td>false</td>
              <td>--</td>
            </tr>
            <tr>
              <td>gap</td>
              <td>2个元素之间的间距，仅支持rem或者px，如0.2rem或20px,必须指明单位。</td>
              <td>String</td>
              <td>0</td>
              <td>--</td>
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
            h: '1.2rem',
            v: 'vertical',
            demo3Height: '8rem',
            gap: '.2rem',
            slotDatas: [
                '我是轮播图1',
                '我是轮播图2',
                '我是轮播图3',
                '我是轮播图4',
                '我是轮播图6',
                '我是轮播图7',
                '我是轮播图8',
                '我是轮播图9',
                '我是轮播图10'
            ],
          demo1: `<nut-marquee class="demo1" :gap='gap' :speed="10">
    <template slot >
        <div v-for="(d, idx) in slotDatas" :key='idx' class="txt"><a>www.jd.com</a>{{d}}</div>
    </template>
</nut-marquee>`,
          demo2: `<nut-marquee class="demo1" :gap='gap' :reverse="true" :speed='30'>
    <template slot>
        <div class="txt">我是一个轮播图，我有好多数字，一个屏幕看不到，只能看到一部分，轮播开始了1,前提是我必须超过屏幕容器的宽度才可以哦，这么长的文字都没有超过</div>
    </template>
</nut-marquee>`,
          demo3: `<nut-marquee class="demo1" 
    :speed='30' 
    :height="demo3Height" 
    :direction='v'
    :gap="gap">
    <div class="txt1">我是垂直轮播图1</div>
    <div class="txt1">我是垂直轮播图2</div>
    <img class="img" src='//nutui.jd.com/asset/img/nutui-logo-2.png'/>
    <div class="txt1">我是垂直轮播图3</div>
</nut-marquee>`,
          demo4: `<nut-marquee class="demo1" 
    :speed='10' 
    :gap= 'gap'
    :height="demo3Height" 
    :direction='v'
    :reverse="true">
    <div class="txt1">我是垂直轮播图1</div>
    <div class="txt1">我是垂直轮播图2</div>
    <img class="img" src='//nutui.jd.com/asset/img/nutui-logo-2.png'/>
    <div class="txt1">我是垂直轮播图3</div>
    <div class="txt1">我是垂直轮播图4</div>
</nut-marquee>`
        }
    },
    methods:{
      showMask(){
        this.maskShow = true;
      },
      hideMask(){
        this.maskShow = false;
      }
    }
}
</script>

<style>
    .item {
        display: inline-block;
    }
    .demo1 {
        background: #fefad8;

    }
    .img {
        width: 80%;
    }
    .txt {
        line-height: .4rem;
        white-space: nowrap;
    }
</style>
