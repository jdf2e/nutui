<template>
    <div :class="{'nut-stepper': !simple, 'nut-stepper-simple': simple}">
        <span 
            @click="reduce()" 
            :class="{'nut-stepper-grey': isGray}"
            v-html="require('../../assets/svg/minus.svg')">
        </span>
        <input 
         type="number" 
         :min="minNum" 
         :max="max" 
         :readonly="readonly" 
         :value="num | maxv(minNum, max)" 
         :style="{visibility:showNum? 'visible': 'hidden'}"
         @input="numchange" 
         @keyup="checknum"
         @focus="focus"
         @blur="blur" />
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
        min: {
            type: [Number, String],
            default: 0,
        },
        max: {
            type: [Number, String],
            default: Infinity,
        },
        step: {
            type: [Number, String],
            default: 1
        },
        readonly: {
            type: Boolean,
            default: false
        },
        transition: {
            type: Boolean,
            default: true
        },
        value: {
            type: [String, Number],
            required: true
        },
        decimalPlaces: {
            type: Number,
            default: 0
        } 
    },
    data() {
        return {
            tempNum: '',
            focusing: false,
            num: this.value,
            minNum: this.min,
            showNum: true,
            showAddAnim: false,
            showReduceAnim: false,
            animNum: [this.value, this.value],
            animTranslate_add: 0,
            animTranslate_: -100
        }
    },
    filters: {
        maxv(v, min, max) {
            let val = v;
            if(val > max) val = max;
            if(val < min) val = min;
            return val;
        }
    },
    watch: {
        value: {
            handler(v, ov) {
                if(v > this.max) v = this.max;
                if(v < this.minNum) v = this.minNum;
                this.num = v > 0? this.fixedDecimalPlaces(v): v;
                this.$emit('change', this.num);
            },
            immediate: true
        }
    },
    computed: {
        isGray() {
            return (this.focusing? this.tempNum: this.num) - this.step < this.min;
        }
    },
    methods: {
        focus(e) {
            if(this.readonly) return;
            // clear val temporary when focus, e...s
            const v = this.num;
            this.tempNum = v;
            this.minNum = '';
            // this.num = '';
            this.focusing = true;
            this.$emit('focus', e, this.num);
        },
        blur(e) {
            if(this.readonly) return this.$emit('blur', e, this.num);
            let v = e.target.value;
            this.minNum = this.min;
            this.focusing = false;
            if(v) {
                if(v > this.max) v = this.max;
                if(v < this.minNum) v = this.minNum;
                this.num = v;
            }else{
                this.num = this.tempNum;
            }
            this.$emit('blur', e, this.num);
        },
        checknum(e) {
            let v = e.target.value;
            // this.minNum = this.min;
            this.focusing = false;
            if(v > this.max) v = this.max;
            if(v < this.minNum) v = this.minNum;
            e.target.value = v;
            this.num = v;
        },
        numchange(e) {
            let v = e.target.value;
            
            if(v > this.max) v = this.max;
            if(v < this.minNum) v = this.minNum;
            e.target.value = v;
            this.num = v;
            this.$emit('update:value', this.num);
            this.$emit('change', this.num);
        },
        fixedDecimalPlaces(v) {
            return Number(v).toFixed(this.decimalPlaces);
            // .replace(/(\d+\.[^0]*)0+$/, '$1').replace(/\.$/, '')
        },
        add() {
            this.num = Number(this.num);
            if(this.num <= this.max - this.step && this.max > this.minNum) {
                let [n1, n2] = this.fixedDecimalPlaces(this.num + Number(this.step)).split('.');
                let fixedLen = n2? n2.length: 0;
                this.num = parseFloat(n1 + (n2? '.'+n2: '')).toFixed(fixedLen);
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
                this.$emit('update:value', this.num);
                this.$emit('add', this.num); 
                this.$emit('change', this.num); 
            }
            
        },
        animEnd() {
            // unbind
            this.showNum = true;
        },
        reduce(){
            if(this.num - this.step >= this.minNum) {
                let [n1, n2] = this.fixedDecimalPlaces(this.num - Number(this.step)).split('.');
                let fixedLen = n2? n2.length: 0;
                this.num = parseFloat(n1 + (n2? '.'+n2: '')).toFixed(fixedLen);
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
                this.$emit('update:value', this.num);
                this.$emit('reduce', this.num);
                this.$emit('change', this.num);
            }
            
        },

    }
}
</script>
