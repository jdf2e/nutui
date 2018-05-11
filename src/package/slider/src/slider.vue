<template>
    <div class="nut-slider">
        <div class="nut-slider-box">
            
           
            <div class="nut-slider-wrapper">
               
                <template>
                    <ul class="nut-number" :style="{width:lineWidth}">
                        <li v-for="(item,index) in rulerNums"
                        :class="{cur: index==numIndex}" 
                        :key="index"
                         :style="{ 'left': item + '%' }">{{index}}</li>
                    </ul>
                    <!-- <div class="nut-slider-stop" v-for="(item,index) in stops" :style="{ 'left': item + '%' }" @click.self="sliderClick" :key="index"></div> -->
                </template>
                
                <div class="nut-slider-wrap" ref="slider" @click.self="sliderClick">
                    <input type="hidden" :name="name" :value="currentValue">
                    <template v-if="showStops">
                        <div class="nut-slider-stop" v-for="(item,index) in stops" :style="{ 'left': item + '%' }" @click.self="sliderClick" :key="index"></div>
                    </template>
                    <div class="nut-slider-bar" :style="barStyle" @click.self="sliderClick"></div>
                    <div
                        class="nut-slider-button-wrap"
                        :style="{left: minPosition + '%'}"
                        @touchstart="onPointerDown($event, 'min')"
                        @mousedown="onPointerDown($event, 'min')">
                        <div :class="buttonClasses"></div>  
                    </div>
                    <div v-if="range"
                         class="nut-slider-button-wrap"
                         :style="{left: maxPosition + '%'}"
                         @touchstart="onPointerDown($event, 'max')"
                         @mousedown="onPointerDown($event, 'max')">
                         <div :class="buttonClasses"></div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>

function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}
export default {
    name:'nut-slider',
    props: {
        clickMore: {
            type: Boolean,
            default: false
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        step: {
            type: Number,
            default: 1
        },
        range: {
            type: Boolean,
            default: false
        },
        value: {
            type: [Number, Array],
            default: 0
        },
        disabled: {
            type: Boolean,
            default: false
        },
        
        showStops: {
            type: Boolean,
            default: true
        },
        tipFormat: {
            type: Function,
            default (val) {
                return val;
            }
        },
        showTip: {
            type: String,
            default: 'hover',
            validator (value) {
                return oneOf(value, ['hover', 'always', 'never']);
            }
        },
        name: {
            type: String
        },
        rateData:{
            type:Object,
        },
        questionId:{
            type:Number,
        },
        idx:{
            type:Number,
        }
    },
    data () {
        const val = this.checkLimits(Array.isArray(this.value) ? this.value : [this.value]);
        
        return {
            num: 10,
            numIndex:12,
            currentValue: val,
            dragging: false,
            pointerDown: '',
            startX: 0,
            currentX: 0,
            startPos: 0,
            newPos: null,
            oldValue: val
        };
    },
    watch: {
        value (val) {
            val = this.checkLimits(Array.isArray(val) ? val : [val]);
            if (val[0] !== this.currentValue[0] || val[1] !== this.currentValue[1]) {
                this.currentValue = val;
            }
        },
        currentValue (val) {
           
            const exportValue = this.range ? val : val[0];
            
        }
    },
    computed: {
        lineWidth(){
            return this.rateWidth+'px';
        },
        buttonClasses () {
            return [
                'nut-slider-button',
                {
                    ['nut-slider-button-dragging']: this.pointerDown === 'min'
                }
            ];
        },
        minPosition () {
            const val = this.currentValue;
            
            return (val[0] - this.min) / (this.max - this.min) * 100;
        },
        maxPosition: function () {
            const val = this.currentValue;

            return (val[1] - this.min) / (this.max - this.min) * 100;
        },
        barStyle () {

            const style = {
                width: (this.currentValue[0] - this.min) / (this.max - this.min) * 100 + '%'
            };

            if (this.range) {
                style.left = (this.currentValue[0] - this.min) / (this.max - this.min) * 100 + '%';
                style.width = (this.currentValue[1] - this.currentValue[0]) / (this.max - this.min) * 100 + '%';
            }

            return style;
        },
        stops () {
            let stopCount = (this.max - this.min) / this.step;
            let result = [];
            let stepWidth = 100 * this.step / (this.max - this.min);
            for (let i = 1; i < stopCount; i++) {
                result.push(i * stepWidth);
            }
            
            return result;
        },
        rulerNums () {
            let count = (this.max - this.min) / this.step;
            let result = [];
            let stepWidth = 100 * this.step / (this.max - this.min);
            for (let i = 0; i <= count; i++) {
                result.push(i * stepWidth);
            }
    
            return result;
        },
        sliderWidth () {
            return parseInt(this.getStyle(this.$refs.slider, 'width'), 10);
        },
        tipDisabled () {
            return this.tipFormat(this.currentValue[0]) === null || this.showTip === 'never';
        }
    },
    methods: {
        changeValue(val){
            var index = parseInt(val/10-1);
            this.numIndex = index+1;
            /*document.querySelector(".nut-number .cur").classList.remove("cur");
            document.querySelectorAll(".nut-number li")[index].classList.add("cur");*/
        },
        getPointerX (e) {
            return e.type.indexOf('touch') !== -1 ? e.touches[0].clientX : e.clientX;
        },
        checkLimits ([min, max]) {
            min = Math.max(0, min);
            min = Math.min(100, min);

            max = Math.max(0, min, max);
            max = Math.min(100, max);
            return [min, max];
        },
        onPointerDown (event, type) {
            if (this.disabled) return;
            event.preventDefault();
            this.pointerDown = type;

            this.onPointerDragStart(event);
            window.addEventListener('mousemove', this.onPointerDrag, false);
            window.addEventListener('touchmove', this.onPointerDrag, false);
            window.addEventListener('mouseup', this.onPointerDragEnd, false);
            window.addEventListener('touchend', this.onPointerDragEnd, false);
        },  
        onPointerDragStart (event) {
            this.dragging = false;
            this.startX = this.getPointerX(event);
            if(this.pointerDown == "min"){   //判断是哪一个按钮
                this.startPos = parseInt(this.minPosition);
            }else if(this.pointerDown == "max"){
                this.startPos = parseInt(this.maxPosition);
            }
        },
        onPointerDrag (event) {
            this.dragging = true;
            
            this.currentX = this.getPointerX(event);

            const diff = (this.currentX - this.startX) / this.sliderWidth * 100;
            this.newPos = this.startPos + diff;
            this.changeButtonPosition(this.newPos);
        },
        onPointerDragEnd () {
            if (this.dragging) {
                this.dragging = false;
               
                this.changeButtonPosition(this.newPos);
                this.$emit("aftertouch", this.currentValue[0],this.questionId,this.idx,this.rateData);
                this.changeValue(this.currentValue[0]);
            }

            this.pointerDown = '';
            window.removeEventListener('mousemove', this.onPointerDrag, false);
            window.removeEventListener('touchmove', this.onPointerDrag, false);
            window.removeEventListener('mouseup', this.onPointerDragEnd, false);
            window.removeEventListener('touchend', this.onPointerDragEnd, false);
            
        },
        changeButtonPosition (newPos, forceType) {

            const type = forceType || this.pointerDown;
            const index = type === 'min' ? 0 : 1;
            if (type === 'min') newPos = this.checkLimits([newPos, this.maxPosition])[0];
            else newPos = this.checkLimits([this.minPosition, newPos])[1];

            const lengthPerStep = 100 / ((this.max - this.min) / this.step);
            const steps = Math.round(newPos / lengthPerStep);

            const value = this.currentValue;
            value[index] = Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min);
            this.currentValue = [...value];

            if (!this.dragging) {
                if (this.currentValue[index] !== this.oldValue[index]) {
                    const exportValue = this.range ? this.currentValue : this.currentValue[0];
                    this.$emit('on-change', exportValue);
                    this.dispatch('FormItem', 'on-form-change', exportValue);
                    this.oldValue[index] = this.currentValue[index];
                }
            }
        },


        sliderClick: function (event) {
            if (!this.clickMore) return;
            if (this.disabled) return;
            const currentX = this.getPointerX(event);

            const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
            const newPos = (currentX - sliderOffsetLeft) / this.sliderWidth * 100;

            if (!this.range || newPos <= this.minPosition) this.changeButtonPosition(newPos, 'min');
            else if (newPos >= this.maxPosition) this.changeButtonPosition(newPos, 'max');
            else this.changeButtonPosition(newPos, ((newPos - this.firstPosition) <= (this.secondPosition - newPos)) ? 'min' : 'max');
        },

        handleInputChange (val) {
            this.currentValue = [val, this.currentValue[1]];
            const exportValue = this.range ? this.currentValue : this.currentValue[0];
            this.$emit('on-change', exportValue);
            this.dispatch('FormItem', 'on-form-change', exportValue);
        },
        
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },


        camelCase(name) {
            const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
            const MOZ_HACK_REGEXP = /^moz([A-Z])/;
            return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
                return offset ? letter.toUpperCase() : letter;
            }).replace(MOZ_HACK_REGEXP, 'Moz$1');
        },
        getStyle (element, styleName) {

            if (!element || !styleName) return null;
            styleName = this.camelCase(styleName);
            if (styleName === 'float') {
                styleName = 'cssFloat';
            }
            try {
                const computed = document.defaultView.getComputedStyle(element, '');
                return element.style[styleName] || computed ? computed[styleName] : null;
            } catch(e) {
                return element.style[styleName];
            }
        }
    }
}
</script>
<style lang="scss">

.nut-slider {
    line-height: normal;
    margin-top: 15px;
}
.nut-slider-wrapper{
    margin-top: 1.2rem;
}
.nut-slider-wrap {
    width: 100%;
    height: 0.08rem;
    -webkit-tap-highlight-color: transparent;
    background-color: #e9eaec;
    border-radius: 0.06rem;
    vertical-align: middle;
    position: relative;
    cursor: pointer;
}

.nut-slider-button-wrap {
    width: 0.36rem;
    height: 0.36rem;
    text-align: center;
    background-color: transparent;
    position: absolute;
    top: -0.10rem;
    transform: translateX(-50%);
    .ivu-tooltip {
        display: block;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
}
.nut-slider-box{
    height: 2.06rem;
    background: #fff;
    padding: 0.25rem 0.32rem;
    h2{
        font-size: 0.3rem;
        margin-bottom: 0.23rem
    }
}
.box-grey{
    background: #F8F8F8;
}

.nut-slider-button {
    width: 0.24rem;
    height: 0.24rem;
    border: 2px solid #57a3f3;
    border-radius: 50%;
    background-color: #fff;
    transition: all .2s linear;
}

.nut-slider-button-dragging{
    border-color: #2d8cf0;
    
}

.nut-slider-button:hover {
    cursor: -webkit-grab;
    cursor: grab;
    border-color: #2d8cf0;
    
}

.nut-slider-button-dragging{
    cursor: -webkit-grabbing;
    cursor: grabbing;
    &:hover {
        cursor: -webkit-grabbing;
        cursor: grabbing;
    }
}

.nut-slider-bar {
    height: 0.08rem;
    background: #57a3f3;
    border-radius: 0.06rem;
    position: absolute;
    top: 0;
}

.nut-slider-stop {
    position: absolute;
    width: 1px;
    height: 100%;
    
    border-left: 1px solid #ccc;
    transform: translateX(-50%);
}

.nut-slider-disabled {
    cursor: not-allowed;
    .nut-slider-wrap {
        background-color: #ccc;
        cursor: not-allowed;

    }
    .nut-slider-bar {
        background-color: #ccc;
    }
    .nut-slider-button {
        border-color: #ccc;
    
    }
    .nut-slider-button-dragging {
        border-color: #ccc;
    }
    .nut-slider-button:hover {
        border-color: #ccc;
    }
    .nut-slider-button-dragging{
        cursor: not-allowed;
    }
    .nut-slider-button-dragging:hover,.nut-slider-button:hover{
        cursor: not-allowed;
    }
}


.nut-slider-input{
    .nut-slider-wrap {
        width: auto;
        margin-right: 2rem;
        -webkit-tap-highlight-color: transparent;
    }
    .ivu-input-number {
        float: right;
        margin-top: -0.28rem;
    }

} 
//demo1


.nut-number{
    list-style-type:none;
    margin:0;
    padding:0;
    position: relative;
    width: 100%;

    //margin-bottom:0.6rem;
    font-size: 0.21rem;
    li{
        position: absolute;
        margin:0;
        padding:0;
        top: -30px;
        transform: translateX(-50%);
    }
    .cur{
        color: #5aa5f3;
    }
}   
</style>