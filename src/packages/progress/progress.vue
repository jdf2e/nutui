<template>
    <div class="nut-progress">
        <div class="nut-progress-outer" :class="[showText && !textInside ? 'nut-progress-outer-part' :'','nut-progress-'+size]" :style="{height: strokeWidth + 'px'}">
            <div :class="['nut-progress-inner',status=='active' ? 'nut-active' : '']" :style="bgStyle">
                <div class="nut-progress-text" :style="{lineHeight:strokeWidth + 'px'}" v-if="showText && textInside"> {{percentage}}%</div>
            </div>
        </div>
        <div class="nut-progress-text" :style="{lineHeight:strokeWidth + 'px'}" v-if="showText && !textInside">
            <slot>
                <template v-if="status=='text' || status=='active'" >
                     {{percentage}}%
                </template>
                <template v-else-if="status=='success' || 'wrong'">
                    <i :class="statusIcon"></i>
                </template>
            </slot>
        </div>
    </div>

</template>
<script>
export default {
    name:'nut-progress',
    props: {
        percentage: {
            type: [Number,String],
            default: 0,
            required: true
        },
        size: {
            type: String,
            default: ''
        },
        status: {
            type: String,
            default: 'text'
        },
        strokeWidth: {
            type:[Number,String],
            default: ''
        },
        textInside: {
            type: Boolean,
            default: false
        },
        showText: {
            type: Boolean,
            default: true
        },
        strokeColor: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            currentStatus: this.status,
        };
    },
    computed:{
        bgStyle () {
            const style = {};
            style.width = this.percentage + '%';
            style.backgroundColor = this.strokeColor || '';
            return style;
        },
        statusIcon () {
            return  this.status==='success' ? 'nut-icon-success' :  this.status==='wrong' ? 'nut-icon-fail' : '';
        }
    },
    methods: {
    }
}
</script>