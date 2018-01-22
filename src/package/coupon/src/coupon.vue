<template>
    <div class="nut-coupon" :class="beanType" @click="isSwitch ? switchUse() : immediateUse()">
        <div class="nut-coupon-l">
            <template v-if="datas.couponType != 2 ">
                <div class="nut-fore1"><em>&yen;</em><span>{{datas.discount}}</span></div>
                <div class="nut-fore2">满{{datas.quota}}元可用</div>
            </template>
             <template v-else>
                <p class="nut-fore3">可抵扣运费</p>
                <p class="nut-fore4">除偏远山区、极速达</p>
            </template>
        </div>
        <div class="nut-coupon-r">
            <span class="nut-badge" v-if="isBadge"><slot></slot></span>
            <span class="nut-switch-use" v-if="isSwitch" :class="{'nut-switch-use-active': switchActive, 'nut-switch-use-unused': !datas.isUsed}"></span>
            <span class="nut-immediate-use" v-else>立即使用</span>
            <div class="nut-fore1">
                <em>{{['京券', '东券', '运费'][datas.couponType]}}</em><span>{{datas.couponLimitInfo}}</span>
            </div>
            <div class="nut-fore2">{{datas.beginTime}} - {{datas.endTime}}</div>
            <div class="nut-fore3"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nut-coupon',
    props: {
        'datas':{
            type: Object,
            default: null
        },
        'isSwitch': {
            type: Boolean,
            default: false
        },
        'isBadge': {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            switchActive: false
        }
    },
    created(){

    },
    watch:{
        switchActive(newVal){
            this.switchActive = newVal;
        }
    },
    computed: {
        beanType: function() {
            return this.datas.isUsed ? ['nut-coupon-jbean', 'nut-coupon-dbean', 'nut-coupon-ybean'][this.datas.couponType] : 'nut-coupon-unbean';
        }
    },
    methods: {
        immediateUse() {
            if (!this.datas.isUsed) {
                return false;
            }
            this.$emit('immediate-use', this.datas);
        },
        switchUse() {
            if(!this.datas.isUsed) {
                return false;
            }
            this.switchActive = !this.switchActive;
            this.$emit('switch-use', this.datas, this.switchActive);
        }
    }
}
</script>
<style lang="scss" scoped>
$dBeanColor: #478dd4;
$jBeanColor: #ff7f7e;
$yBeanColor: #42cac0;
$unBeanColor: #c2c2c2;
.nut-coupon{
    height: 2rem;
    overflow: hidden;
    .nut-coupon-l{
        float: left;
        width: 2.5rem;
        height: 2rem;
        color: #fff;
        text-align: center;
        background-size: 100% 100%;
        .nut-fore1{
            height: 1.14rem;
            padding-top: 0.16rem;
            em{
                margin-right: 0.01rem;
                font-size: 0.4rem;
                font-style: normal;
            }
            span{
                font-size: 0.88rem;
                font-weight: bold;
            }
        }
        .nut-fore2{
            font-size: 0.24rem;
            line-height: 0.44rem;
        }
        .nut-fore3{
            height: 0.58rem;
            padding-top: 0.44rem;
            padding-bottom: 0.28rem;
            margin: 0;
            font-size: 0.38rem;
        }
        .nut-fore4{
            margin: 0;
            font-size: 0.22rem;
            line-height: 0.44rem;
        }
    }
    .nut-coupon-r{
        height: 1.78rem;
        margin-left: 2.5rem;
        padding: 0.2rem 0.22rem 0;
        background-color: #fff;
        overflow: hidden;
        border: 0.01rem solid #eaeaea;
        border-left: 0 none;
        border-radius: 0 3px 3px 0;
        position: relative;
        .nut-fore1{
            font-size: 0.24rem;
            color: #666;
            height: 0.6rem;
            em{
                display: inline-block;
                height: 0.3rem;
                width: 0.72rem;
                border-radius: 3px;
                margin-right: 0.06rem;
                line-height: 0.3rem;
                font-style: normal;
                text-align: center;
                font-size: 0.2rem;
                color: #fff;
            }
            em, span{
                vertical-align: middle;
            }
            span{
                line-height: 0.3rem;
                color: #686868;
            }
        }
        .nut-fore2{
            margin-top: 0.23rem;
            line-height: 0.24rem;
            color: #a5a5a5;
            font-size: 0.2rem;
        }
        .nut-fore3{
            margin-top: 0.21rem;
            height: 0.02rem;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAABBAMAAAD+7JlOAAAAD1BMVEXo6ewAAADo6ezo6ezo6ewCHzOeAAAABXRSTlOZAKRNLlkNiusAAAAOSURBVAjXY2BgMhR0AAABAwCFcSSoVwAAAABJRU5ErkJggg==) repeat-x left bottom;
        }
        .nut-immediate-use{
            position: absolute;
            right: 0.22rem;
            top: 0.92rem;
            height: 0.4rem;
            border-radius: 24px;
            width: 1.2rem;
            font-size: 0.22rem;
            line-height: 0.4rem;
            text-align: center;
            border-style: solid;
            border-width: 0.02rem;
        }
        .nut-switch-use{
            position: absolute;
            right: 0.2rem;
            top: 0.8rem;
            height: 0.36rem;
            width: 0.36rem;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAS1BMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkI0+mmAAAAGXRSTlMAB+vFTRTYpc6f+t+FaV9ZNCEOyZqqREUWnEOPaQAAAMxJREFUOMuV1FcOxCAMBNAxnfRCyv1PutISZaOEgPd9jwQY27gaW+tEVQln2xFpvRS+GzSRHjovZI+n1UhFOJGSZr1FKNQKN6oOhAs9LxMepmXWl4xpkNSYM0VzzKRSMyEKC17ZcLyrnvBqquMbjUKGMrGGyPpWVSpkKQmMgpBFYkTrUeBb2A4FnYUbUDA4CI0CLVARCqhihVjHsS7OKgGrmKxv4Xwwq1U4Tcdp3+24vsUr65kjxR9OYHfpMXc7e2H8bM/Vs/21xFjr8APAmghUy7RYjQAAAABJRU5ErkJggg==) no-repeat;
            background-size: 100% 100%;
            &.nut-switch-use-active{
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAZlBMVEXyMDD//////Pz1T0/6rq/6q6vzPz//9/f+7e33d3f7xsb5m5v1XV30ODj6t7f3gYH3eXn1WFj0Vlb939/8zc36qKjyNjb94+P5np71X1/8yMj6tLT5n5/3g4P81dX7wcH4k5P2c3PfDnT+AAAA8ElEQVQ4y5XU25aCMAyF4U2rLTBYToMOOp7e/yWNq7haE6D6X3Z9d02CLKofis4ApiuGPn4PSJ0qRFUnJVGpwdIlQ7bGTLWNUd5itjYPKNdYSOcvZCsstlETqpfNT2Y9KlcMicsTKb1qNloRcusGcITGhMGY4ZAyILLF1NDf5w2RBj5DX1wE8xcMkQ5TR6+kQQuDqd2vV8IQ2YMpYYh4FFQD/JPZIkYGXHFDpANTGTdo0eBNHaUhwh52V2GI8G/Z385gHcQHy0Y5KjInhk6mlRhfWSkWQXb+YKUq++lyptc8fTC+Pz2Ucu9HzLEjljqHDx1/Cd1fgsHtAAAAAElFTkSuQmCC);
            }
            &.nut-switch-use-unused{
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAATlBMVEUAAADCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsK+rZcAAAAAGnRSTlMAB+vFTRTYpZ/634VpX1k0IQ7PyZqqRM1FFsgqZ+gAAADTSURBVDjLndRXDsQgDATQMT29t/tfdLVLlEQJAWvftyXA2IOrtrSLyDKx2LJFWC2FqxpNpJvKCVnjaTZSEQ6kpJlvJTTmCjcqHwkXepg6PHTToC81pkBQYY4qGnxNqGogeOOEV3bc35V3eNXl/o1GIUIZ30NE/boqFaKUBFpBiCLRonRIcCVshYTKom+Q0PQQGglaICMkUMYqYh3HujirBaxmsr6F88GsUeEMHWd81/36Fq+sY64UfzmBbQmv+bKxA+O0PqNn/SPEzjjsv3HY3+LwAwiBCH9qjVynAAAAAElFTkSuQmCC);
            }
        }
    }
    .nut-badge{
        position: absolute;
        right: 0;
        top: 0;
        height: 0.72rem;
        width: 0.94rem;
        background-size: 100% 100%;
    }
}
@mixin beanStatus($img,$BeanColor) {
    .nut-coupon-l{
        background-image: url('/asset/img/coupon/#{$img}');
    }
    .nut-coupon-r{
        .nut-fore1{
            em{
                background-color: $BeanColor;
            }
        }
        .nut-immediate-use{
            border-color: $BeanColor;
            color: $BeanColor;
        }
    }
}
.nut-coupon.nut-coupon-dbean{
    @include beanStatus('q-blue.png', $dBeanColor);
}
.nut-coupon.nut-coupon-jbean{
    @include beanStatus('q-red.png', $jBeanColor);
}
.nut-coupon.nut-coupon-ybean{
    @include beanStatus('q-green.png', $yBeanColor);
}
.nut-coupon.nut-coupon-unbean{
    @include beanStatus('q-grey.png', $unBeanColor);
}
</style>