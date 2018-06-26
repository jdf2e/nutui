<template>
    <div class="nut-progress">
        <div :class="['nut-progress-cont', showText !== 'out'? 'nut-progress-in': 'nut-progress-out']" :style="{height}">
            <div class="nut-progress-bar" :style="{background: color, width: per}">
                <div class="nut-progress-text" :style="{lineHeight: height}" v-if="showText !== 'out'">{{per}}</div>
            </div>
        </div>
        <div class="nut-progress-text" :style="{lineHeight: height}" v-if="showText === 'out'">{{per}}</div>
    </div>
</template>
<script>
export default {
    name:'nut-progress',
    props: {
        percent: {
            type: [String, Number],
            default: '0'
        },
        color: {
            type: String,
            default: '#f23030'
        },
        height: {
            type: String,
            default: '.06rem'
        },
        showText: {
            type: String,
            default: 'in'
        }
    },
    computed: {
        per() {
            let per = String(this.percent);
            if(per.lastIndexOf('%') == per.length - 1) {
                per = parseFloat(per.slice(0, -1));
            }else{
                per = parseFloat(per);
            }
            return Math.min(per, 100) + '%';
        }
    },
    data() {
        return {
            
        };
    },
    methods: {
    }
}
</script>
<style lang="scss">
.nut-progress-cont{
    border-radius: 100px;
    background-color: #ebeef5;
    overflow: hidden;
    position: relative;
}
.nut-progress-bar{
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
}
.nut-progress-text{
    float: right;
    font-size: .14rem;
    color: #fff;
}
.nut-progress-in{
    .nut-progress-text{
        margin-right: 5px;
    }
}
.nut-progress-out{
    margin-right: 50px;
    &+.nut-progress-text{
        width: 50px;
    }
}
</style>