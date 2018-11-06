<template>
    <div>
        <nut-demoheader
        :name="$route.name"
        ></nut-demoheader>
        <h5>示例</h5>
        <p>普通文字横向跑马灯-默认速度</p>
        <nut-marquee class="demo1" :gap='gap'>
            <template slot>
                <div class="txt">我是一个轮播图1</div>
                <div class="txt">我是一个轮播图2</div>
                <div class="txt">我是一个轮播图2</div>
                <div class="txt">我是一个轮播图2</div>
                <div class="txt">我是一个轮播图2</div>
                <div class="txt">我是一个轮播图2</div>
                <div class="txt">我是一个轮播图2</div>
            </template>
        </nut-marquee>
        <p>横向反向</p>
        <nut-marquee class="demo1" :gap='gap' :reverse="true">
            <template slot>
                <div class="txt">我是一个轮播图，我有好多数字，一个屏幕看不到，只能看到一部分，轮播开始了</div>
            </template>
        </nut-marquee>
        <p>纵向内容跑马灯</p>
        <nut-marquee class="demo1" 
            :speed='20' 
            :height="demo3Height" 
            :direction='v'>
            <div class="txt1">我是一个轮播图，我有好多数字，一个屏幕看不到，只能看到一部分，轮播开始了1</div>
            <div class="txt1">我是一个轮播图，我有好多数字，一个屏幕看不到，只能看到一部分，轮播开始了2</div>
            <img class="img" src='//nutui.jd.com/asset/img/nutui-logo-2.png'/>
            <div class="txt1">我是一个轮播图，我有好多数字，一个屏幕看不到，只能看到一部分，轮播开始了3</div>
            <div class="txt1">我是一个轮播图，我有好多数字，一个屏幕看不到，只能看到一部分，轮播开始了4</div>
        </nut-marquee>
    </div>    
</template>
<script>
export default {
    data() {
        return {
            h: '1.2rem',
            v: 'vertical',
            demo3Height: '1.2rem',
            gap: '.4rem'
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
        display: inline;
        line-height: .4rem;
        // margin-right: .4rem;
        white-space: nowrap;
    }
    .txt1 {
        padding: .1rem;
    }
</style>

