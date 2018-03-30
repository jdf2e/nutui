<template>
    <div :class="classes">
       
        <div class="nut-slider-wrap" ref="slider" @click.self="sliderClick">
            <input type="hidden" :name="name" :value="exportValue">
            <template v-if="showStops">
                <div class="nut-slider-stop" v-for="item in stops" :style="{ 'left': item + '%' }" @click.self="sliderClick"></div>
            </template>
            <template v-if="showNums">
                <ul class="nut-number" :style="{width:lineWidth}">
                    <li v-for="(item,index) in rulerNums"
                    :class="{cur: index==numIndex}" 
                    :key="index"
                     :style="{ 'left': item + '%' }">{{index}}</li>
                </ul>
            </template>
            <div class="nut-slider-bar" :style="barStyle" @click.self="sliderClick"></div>
            <template v-if="range">
                <div
                    class="nut-slider-button-wrap"
                    :style="{left: firstPosition + '%'}"
                    @mousedown="onFirstButtonDown">
                    
                        <div class="nut-slider-button"></div>

                </div>
                <div
                    class="nut-slider-button-wrap"
                    :style="{left: secondPosition + '%'}"
                    @mousedown="onSecondButtonDown">
                        <div class="nut-slider-button"></div>
                </div>
            </template>
            <template v-else>
                <div
                    class="nut-slider-button-wrap"
                    :style="{left: singlePosition + '%'}"
                    @mousedown="onFirstButtonDown">
                        <div class="nut-slider-button"></div>
                </div>
            </template>
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
    name: 'nut-slider',

    
    props: {
        showNums: {
            type: Boolean,
            default: true
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
        clickMore: {
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
        showInput: {
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
        }
    },
    data () {
        return {
   
            dragging: false,
            firstDragging: false,
            secondDragging: false,
            startX: 0,
            currentX: 0,
            numIndex: 112,
            startPos: 0,
            newPos: null,
            oldSingleValue: this.value,
            oldFirstValue: this.value[0],
            oldSecondValue: this.value[1],
            singlePosition: (this.value - this.min) / (this.max - this.min) * 100,
            firstPosition: (this.value[0] - this.min) / (this.max - this.min) * 100,
            secondPosition: (this.value[1] - this.min) / (this.max - this.min) * 100
        };
    },
    computed: {
        classes () {
            return [
                `nut-slider`,
                {
                    [`nut-slider-input`]: this.showInput && !this.range,
                    [`nut-slider-range`]: this.range,
                    [`nut-slider-disabled`]: this.disabled
                }
            ];
        },
        
        barStyle () {
            let style;
            if (this.range) {
                style = {
                    width: (this.value[1] - this.value[0]) / (this.max - this.min) * 100 + '%',
                    left: (this.value[0] - this.min) / (this.max - this.min) * 100 + '%'
                };
            } else {
                style = {
                    width: (this.value - this.min) / (this.max - this.min) * 100 + '%'
                };
            }
            return style;
        },
        stops() {
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
            return this.tipFormat(this.value[0]) === null || this.showTip === 'never';
        }
    },
    watch: {
        value (val) {
            
            this.updateValue(val);
            this.$emit('on-input', this.value);
        },
        exportValue (values) {
            this.updateValue(val);
            this.$emit('on-input', value);
        }
    },
    methods: {
        ready () {
            if (this.range) {
                const isArray = Array.isArray(this.value);
                if (!isArray || (isArray && this.value.length != 2) || (isArray && (isNaN(this.value[0]) || isNaN(this.value[1])))) {
                    this.value = [this.min, this.max];
                } else {
                    this.updateValue(this.value, true);
                }
            } else {
                if (typeof this.value !== 'number') {
                    this.value = this.min;
                }
                this.updateValue(this.value);
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
        updateValue (val, init = false) {
            if (this.range) {
                let value = [...val];
                if (init) {
                    if (value[0] > value[1]) {
                        value = [this.min, this.max];
                    }
                } else {
                    if (value[0] > value[1]) {
                        value[0] = value[1];
                    }
                }
                if (value[0] < this.min) {
                    value[0] = this.min;
                }
                if (value[0] > this.max) {
                    value[0] = this.max;
                }
                if (value[1] < this.min) {
                    value[1] = this.min;
                }
                if (value[1] > this.max) {
                    value[1] = this.max;
                }
                if (this.value[0] === value[0] && this.value[1] === value[1]) return;
                this.value = value;
                this.setFirstPosition(this.value[0]);
                this.setSecondPosition(this.value[1]);
            } else {
                if (val < this.min) {
                    this.value = this.min;
                }
                if (val > this.max) {
                    this.value = this.max;
                }
                this.setFirstPosition(this.value);
            }
        },
        sliderClick (event) {
            
            if (this.disabled) return;
            if (!this.clickMore) return;
            const currentX = event.clientX;
            const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
            const newPos = (currentX - sliderOffsetLeft) / this.sliderWidth * 100;
            if (this.range) {
                let type = '';
                if (newPos <= this.firstPosition) {
                    type = 'First';
                } else if (newPos >= this.secondPosition) {
                    type = 'Second';
                } else {
                    if ((newPos - this.firstPosition) <= (this.secondPosition - newPos)) {
                        type = 'First';
                    } else {
                        type = 'Second';
                    }
                }
                this[`change${type}Position`](newPos);
            } else {
                this.changeSinglePosition(newPos);
            }
        },
        // for single use
        onFirstButtonDown (event) {
            if (this.disabled) return;
            event.preventDefault();
            this.onSingleDragStart(event);
            window.addEventListener('mousemove', this.onSingleDragging);
            window.addEventListener('mouseup', this.onSingleDragEnd);
        },
        onSingleDragStart (event) {
            this.dragging = true;
            this.startX = event.clientX;
            this.startPos = parseInt(this.singlePosition, 10);
        },
        onSingleDragging (event) {
            if (this.dragging) {
                
                this.currentX = event.clientX;
                const diff = (this.currentX - this.startX) / this.sliderWidth * 100;
                this.newPos = this.startPos + diff;
                this.changeSinglePosition(this.newPos);
            }
        },
        onSingleDragEnd () {
            if (this.dragging) {
                this.dragging = false;
            
                this.changeSinglePosition(this.newPos);
                window.removeEventListener('mousemove', this.onSingleDragging);
                window.removeEventListener('mouseup', this.onSingleDragEnd);
            }
        },
        changeSinglePosition (newPos) {
            if (newPos >= 0 && (newPos <= 100)) {
                const lengthPerStep = 100 / ((this.max - this.min) / this.step);
                const steps = Math.round(newPos / lengthPerStep);
                this.value = Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min);
                this.setFirstPosition(this.value);
                if (!this.dragging) {
                    if (this.value !== this.oldSingleValue) {
                        this.$emit('on-change', this.value);
                        this.$emit('touch-end', this.value);
                        this.dispatch('on-form-change', this.value);
                        this.oldSingleValue = this.value;
                    }

                    //this.$emit('touch-end', this.value);
                }
            }
        },
        setFirstPosition (val) {
            this.singlePosition = (val - this.min) / (this.max - this.min) * 100;
        },
        handleInputChange (val) {

            this.value = val;
            this.setFirstPosition(val);
            this.$emit('on-change', this.value);
            this.dispatch('on-form-change', this.value);
        },
        // for range use first
        onFirstButtonDown (event) {
            if (this.disabled) return;
            event.preventDefault();
            this.onFirstDragStart(event);
            window.addEventListener('mousemove', this.onFirstDragging);
            window.addEventListener('mouseup', this.onFirstDragEnd);
        },
        onFirstDragStart (event) {
            this.firstDragging = true;
            this.startX = event.clientX;
            this.startPos = parseInt(this.firstPosition, 10);
        },
        onFirstDragging (event) {
            if (this.firstDragging) {
               
                this.currentX = event.clientX;
                const diff = (this.currentX - this.startX) / this.sliderWidth * 100;
                this.newPos = this.startPos + diff;
                this.changeFirstPosition(this.newPos);
            }
        },
        onFirstDragEnd () {
            if (this.firstDragging) {
                this.firstDragging = false;
                
                this.changeFirstPosition(this.newPos);
                window.removeEventListener('mousemove', this.onFirstDragging);
                window.removeEventListener('mouseup', this.onFirstDragEnd);
            }
        },
        changeFirstPosition (newPos) {
            if (newPos >= 0 && (newPos <= this.secondPosition)) {
                const lengthPerStep = 100 / ((this.max - this.min) / this.step);
                const steps = Math.round(newPos / lengthPerStep);
                this.value = [Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min), this.value[1]];
                this.setFirstPosition(this.value[0]);
                if (!this.firstDragging) {
                    if (this.value[0] !== this.oldFirstValue) {
                        this.$emit('on-change', this.value);
                        this.$emit('touch-end', this.value);
                        this.dispatch('on-form-change', this.value);
                        this.oldFirstValue = this.value[0];
                    }
                }
                
            }
        },
        setFirstPosition (val) {
            this.firstPosition = (val - this.min) / (this.max - this.min) * 100;
        },
        // for range use second
        onSecondButtonDown (event) {
            if (this.disabled) return;
            event.preventDefault();
            this.onSecondDragStart(event);
            window.addEventListener('mousemove', this.onSecondDragging);
            window.addEventListener('mouseup', this.onSecondDragEnd);
        },
        onSecondDragStart (event) {
            this.secondDragging = true;
            this.startX = event.clientX;
            this.startPos = parseInt(this.secondPosition, 10);
        },
        onSecondDragging (event) {
            if (this.secondDragging) {
                
                this.currentX = event.clientX;
                const diff = (this.currentX - this.startX) / this.sliderWidth * 100;
                this.newPos = this.startPos + diff;
                this.changeSecondPosition(this.newPos);
            }
        },
        onSecondDragEnd () {
            if (this.secondDragging) {
                this.secondDragging = false;
                
                this.changeSecondPosition(this.newPos);
                window.removeEventListener('mousemove', this.onSecondDragging);
                window.removeEventListener('mouseup', this.onSecondDragEnd);
            }
        },
        changeSecondPosition (newPos) {
            if (newPos >= this.firstPosition && (newPos <= 100)) {
                const lengthPerStep = 100 / ((this.max - this.min) / this.step);
                const steps = Math.round(newPos / lengthPerStep);
                this.value = [this.value[0], Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min)];
                this.setSecondPosition(this.value[1]);
                if (!this.secondDragging) {
                    if (this.value[1] !== this.oldSecondValue) {
                        this.$emit('on-change', this.value);
                        this.$emit('touch-end', this.value);
                        this.dispatch('on-form-change', this.value);
                        this.oldSecondValue = this.value[1];
                    }
                    //this.$emit('touch-end', this.value);
                }
            }
        },
        setSecondPosition (val) {
            this.secondPosition = (val - this.min) / (this.max - this.min) * 100;
        }
    },
    


    mounted () {
        
    }
};
</script>
<style lang="scss">
.nut-slider {
    line-height: normal;
    padding-top: 30px;
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
            color: #3895ff;
        }
    }  
    .nut-slider-wrap {
        width: 100%;
        height: 0.08rem;
        background-color: #e9eaec;
        border-radius: 0.06rem;
        vertical-align: middle;
        position: relative;
        cursor: pointer;
        width: 90%;
        margin: 0 auto;
    }

    .nut-slider-button-wrap {
        width: 0.36rem;
        height: 0.36rem;
        text-align: center;
        background-color: transparent;
        position: absolute;
        top: -0.10rem;
        transform: translateX(-50%);
        
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
        width: 0.3rem;
        height: 0.3rem;
        border: 2px solid #57a3f3;
        border-radius: 50%;
        background-color: #fff;
        transition: all .2s linear;
    }



    .nut-slider-button:hover {
        cursor: -webkit-grab;
        cursor: grab;
        border-color: #2d8cf0;
        
    }
    .nut-slider-bar {
        height: 0.08rem;
        background: #57a3f3;
        border-radius: 0.06rem;
        position: absolute;
    }

    .nut-slider-stop {
        position: absolute;
        width: 1px;
        height: 100%;
        
        border-left: 1px solid #ccc;
        transform: translateX(-50%);
    }

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
    
    .nut-slider-button:hover {
        border-color: #ccc;
    }
    
    .nut-slider-button:hover{
        cursor: not-allowed;
    }
}


.nut-slider-input{
    .nut-slider-wrap {
        width: auto;
        margin-right: 2rem;
    }
    .ivu-input-number {
        float: right;
        margin-top: -0.28rem;
    }

} 

//demo1
.nut-slider-wrapper{
    margin: 40px 15px 0;
    height: 0.24rem;
    border: 1px solid #ccc;
    border-radius: 2px;
    position: relative;
}
.nut-slider{
    margin-bottom: 0.5rem;
    .nut-slider-wrap{
        border: 1px solid #ccc;
    }
   
    .nut-slider-button:hover {
        cursor: -webkit-grab;
        cursor: grab;
        
    }
    .nut-slider-button-wrap{
        top: -0.06rem;
    }
    
    .nut-slider-bar{
        background: #3895ff;
        height: 0.2rem;
        height: 100%;
    }
    .nut-slider-wrap{
        height: 0.24rem;
        background: transparent;
        
    }
}

</style>