<template>
    <div>
        <nut-demoheader
        :name="$route.name"
        ></nut-demoheader>
        <h5>示例</h5>
        <p>水平正向内容跑马灯</p>
        <nut-marquee class="demo1" :gap='gap' :speed="10">
            <template slot >
                <div v-for="(d, idx) in slotDatas" :key='idx' class="txt"><a>www.jd.com</a>{{d}}</div>
            </template>
        </nut-marquee>
        <p>水平逆向内容跑马灯</p>
        <nut-marquee class="demo1" :gap='gap' :reverse="true" :speed='30'>
            <template slot>
                <div class="txt">我是一个轮播图，我有好多数字，一个屏幕看不到，只能看到一部分，轮播开始了1</div>
            </template>
        </nut-marquee>
        <p>垂直正向内容跑马灯</p>
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
        <p>垂直逆向内容跑马灯</p>
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
    </div>    
</template>
<script>
export default {
    data() {
        return {
            h: '1.2rem',
            v: 'vertical',
            demo3Height: '4rem',
            gap: '.2rem',
            slotDatas: [
                '我是轮播图1',
                '我是轮播图2',
                '我是轮播图3',
                '我是轮播图4'
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
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

