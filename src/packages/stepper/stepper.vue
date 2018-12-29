<template>
    <div :class="{'nut-stepper': !simple, 'nut-stepper-simple': simple}">
        <span 
            @click="reduce()" 
            :class="{'nut-stepper-grey': num - step < min}"
            v-html="require('../../assets/svg/minus.svg')">
        </span>
        <input type="number" v-model="num" @input="numchange" :min="min" :max="max" :readonly="readonly" :style="{visibility:showNum? 'visible': 'hidden'}" />
        <div 
            :class="['nut-stepper-fake', showAddAnim? 'nut-stepper-transition': 'nut-stepper-none-transition']"
            :style="{
                visibility:showAddAnim? 'visible': 'hidden',
                'transform': 'translate(0,'+animTranslate_add+'%)',
                '-ms-transform': 'translate(0,'+animTranslate_add+'%)',
                '-moz-transform': 'translate(0,'+animTranslate_add+'%)',
                '-webkit-transform': 'translate(0,'+animTranslate_add+'%)',
                '-o-transform': 'translate(0,'+animTranslate_add+'%)'
            }">
            <div>{{animNum[0]}}</div>
            <div>{{animNum[1]}}</div>
        </div>
        <div 
            :class="['nut-stepper-fake-', showReduceAnim? 'nut-stepper-transition': 'nut-stepper-none-transition']"
            :style="{
                visibility:showReduceAnim? 'visible': 'hidden',
                'transform': 'translate(0,'+animTranslate_+'%)',
                '-ms-transform': 'translate(0,'+animTranslate_+'%)',
                '-moz-transform': 'translate(0,'+animTranslate_+'%)',
                '-webkit-transform': 'translate(0,'+animTranslate_+'%)',
                '-o-transform': 'translate(0,'+animTranslate_+'%)'
            }">
            <div>{{animNum[0]}}</div>
            <div>{{animNum[1]}}</div>
        </div>
        <span 
            @click="add()" 
            :class="{'nut-stepper-grey': max&&(Number(num) > max - step)}" 
            v-html="require('../../assets/svg/plus.svg')">
        </span>
    </div>
</template>
<script>
export default {
    name: 'nut-stepper',
    props: {
        simple: {
            type: Boolean,
            default: true,
        },
        init: {
            type: Number,
            default: 1,
        },
        min: {
            type: [Number, String],
            default: 0,
        },
        max: {
            type: [Number, String],
            default: Infinity,
        },
        step: {
            type: Number,
            default: 1
        },
        readonly: {
            type: Boolean,
            default: false
        },
        transition: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            num: this.init,
            showNum: true,
            showAddAnim: false,
            showReduceAnim: false,
            animNum: [this.init, this.init],
            animTranslate_add: 0,
            animTranslate_: -100
        }
    },
    methods: {
        numchange() {
            this.$emit('change', this.num);
        },
        add() {
            this.num = Number(this.num);
            if(this.num <= this.max - this.step && this.max > this.min) {
                let [n1, n2] = this.num.toString().split('.');
                let fixedLen = n2? n2.length: 0;
                this.num = parseFloat((Number(n1) + Number(this.step)) + (n2? '.'+n2: '')).toFixed(fixedLen);
                if(this.transition) {
                    this.showNum = false;
                    this.showAddAnim = true;
                    this.showReduceAnim = false;
                    this.animNum = [parseFloat(this.num - this.step).toFixed(fixedLen), this.num];
                    this.animTranslate_add = -100;
                    var f = this.$el.querySelector('.nut-stepper-fake');
                    f.addEventListener("webkitTransitionEnd", () => {
                        this.showNum = true;
                        this.showAddAnim = false;
                        this.animTranslate_add = 0;
                    });
                };
            }
            this.$emit('add', this.num);
            this.$emit('change', this.num); 
        },
        animEnd() {
            // unbind
            this.showNum = true;
        },
        reduce(){
            if(this.num - this.step >= this.min) {
                let [n1, n2] = this.num.toString().split('.');
                let fixedLen = n2? n2.length: 0;
                this.num = parseFloat((Number(n1) - this.step) + (n2? '.'+n2: '')).toFixed(fixedLen);
                if(this.transition) {
                    this.showNum = false;
                    this.showAddAnim = false;
                    this.showReduceAnim = true;
                    this.animNum = [this.num, this.num];
                    this.animTranslate_ = 0;
                    var f = this.$el.querySelector('.nut-stepper-fake-');
                    f.addEventListener("webkitTransitionEnd", () => {
                        this.showNum = true;
                        this.showReduceAnim = false;
                        this.animTranslate_ = -100;
                    }); 
                }    
            }
            this.$emit('reduce', this.num);
            this.$emit('change', this.num);
        },

    }
}
</script>
