<template>
    <div>
        <nut-demoheader
        :name="$route.name"
        ></nut-demoheader>

        <!-- DEMO代码 -->
        <p>基本动画</p>
        <div>
            <button class="v-nut-animate-btn" @click="add()">插入一条</button>
            <button class="v-nut-animate-btn" @click="remove()">清空</button>
        </div>
        <div>
        </div>
        <ul class="v-nut-animate-demo">
            <li v-for="(item, index) of data" v-nut-animate="animateObj" :key="index">{{item.title}}</li>
        </ul>

        <p>点击动画</p>
        <div class="v-nut-animate-btn v-nut-animate-btn1" v-nut-animate.click="animateObj1">提交</div>
        <p>hover动画</p>
        <img src="https://m.360buyimg.com/n1/s130x130_jfs/t21931/35/369311285/662639/a0ffb732/5b0bc432N260ff21d.jpg!q70.jpg.dpg" alt="" v-nut-animate.hover="animateObj2">
        <p>自定义旋转动画</p>
        <div class="loader" v-nut-animate="animateObj3">
            <svg viewBox="25 25 50 50" class="circular">
                <circle cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" class="path"></circle>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:[
                {title: '测试动画数据'}
            ],
            animateObj: {
                name: 'slideInUp'
            },
            animateObj1: {
                name: 'pulse'
            },
            animateObj2: {
                name: 'zoomIn'
            },
            animateObj3: {
                customAnimations:['rotate'],
                name: 'bounceIn',
                duration: 1500,
                iterationCount: 'infinite',
            },
            animations: ['animated','bounce','flash','pulse','rubberBand','shake','headShake','swing','tada','wobble','jello','bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp','bounceOut','bounceOutDown','bounceOutLeft','bounceOutRight','bounceOutUp','fadeIn','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight','fadeInRightBig','fadeInUp','fadeInUpBig','fadeOut','fadeOutDown','fadeOutDownBig','fadeOutLeft','fadeOutLeftBig','fadeOutRight','fadeOutRightBig','fadeOutUp','fadeOutUpBig','flipInX','flipInY','flipOutX','flipOutY','lightSpeedIn','lightSpeedOut','rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight','rotateOut','rotateOutDownLeft','rotateOutDownRight','rotateOutUpLeft','rotateOutUpRight','hinge','jackInTheBox','rollIn','rollOut','zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp','zoomOut','zoomOutDown','zoomOutLeft','zoomOutRight','zoomOutUp','slideInDown','slideInLeft','slideInRight','slideInUp','slideOutDown','slideOutLeft','slideOutRight','slideOutUp']
        }
    },

    methods:{
        add: function() {
            !this.animateObj.firstDisable && (this.animateObj.firstDisable = true);
            this.data.unshift({title: '测试动画数据1'});
        },
        remove: function() {
            this.data.splice(0);
        },
        modify: function(ele, item) {
            this.animateObj.name = ele.target.value;
            this.add();
        }
    }
}
</script>

<style lang="scss" scoped>
.v-nut-animate-btn{
    background-color: #33C3F0;
    color: #fff;
    padding: 0.1rem 0.2rem;
    margin: 0.1rem 0.1rem 0 0;
    font-size: 0.24rem;
    border-radius: 2px;
    border: none;
    outline: none;
}
.v-nut-animate-btn1{
    width: 60px;
    text-align:center;
}
.v-nut-animate-demo{
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin: 0.2rem auto;
    padding: 0.2rem;
    list-style: none;
    background-color: #fff;
    overflow: hidden;
    li{
        height: 0.8rem;
        padding: 0 0.1rem;
        margin-bottom: 0.1rem;
        border: 1px solid #eee;
        line-height: 0.8rem;
        font-size: 0.24rem;
        color: #33C3F0;
    }
}
.demo-test{
    height: 2rem;
    width: 2rem;
    margin: 0 auto;
    background-color: #33C3F0;
}
.loader {
    width: 30px;
    height: 30px;
    position: relative;
    margin: 0 auto;
    animation-name: rotate;
    .circular {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      margin: auto;
  }
  .path{
        stroke-dasharray: 89,200;
        stroke-dashoffset: -35;
        stroke: #33C3F0;
        stroke-linecap: round;
        animation-name: dash;
  }
}

@keyframes rotate{
    from {
        transform-origin: center;
        transform: rotate3d(0, 0, 1, 0turn);
    }
    to {
        transform-origin: center;
        transform: rotate3d(0, 0, 1, 1turn);
    }
}
</style>
