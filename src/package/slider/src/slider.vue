<template>
    <div class="nut-slider">
    	<ul class="nut-number" :style="{width:lineWidth}">
    	    <li v-for="(item,index) in num+1" :class="{cur: index==numIndex}">{{index}}</li>
    	</ul>
    	<div class="nut-slider-wrapper">
    		<div class="nut-ruler">
    		    <span v-for="item in num"></span>
    		</div>
	    	<div class="nut-slider-wrap" @click.self="clickBar" ref="slider" :value="currentValue">
	    	    <template v-if="stepPoint">
	    	        <div class="nut-slider-stop" v-for="item in stops" :style="{ 'left': item + '%' }" @click.self="clickBar"></div>
	    	    </template>
	    	    <div class="nut-slider-bar" :style="barStyle" @click.self="clickBar"></div>
	    	    <div v-if="range"
                     class="nut-slider-button-wrap"
                     :style="{left: maxPosition + '%'}"
                     @touchstart="touchFun($event, 'max')"
                     @mousedown="touchFun($event, 'max')">
                     <div :class="buttonClassName"></div>
                </div>
                <div
	    	        class="nut-slider-button-wrap"
	    	        :style="{left: minPosition + '%'}"
	    	        @touchstart="touchFun($event, 'min')"
	    	        @mousedown="touchFun($event, 'min')">
	    	        <div :class="buttonClassName"></div>
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
        num: {
            type: Number,
            default: 10
        },
    	clickMore: {
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
        value: {
            type: [Number, Array],
            default: 0
        },
        disabled: {
            type: Boolean,
            default: false
        },
        stepPoint: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        }
    },
    data () {
        const val = this.checkLimits(Array.isArray(this.value) ? this.value : [this.value]);
        return {
        	numIndex: this.value/10,
            currentValue: val,
            dragging: false,
            pointerDown: '',
            startX: 0,
            currentX: 0,
            startPos: 0,
            newPos: null,
            oldValue: [this.value, this.value]
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
        buttonClassName () {
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
        sliderWidth () {
            return parseInt(this.getStyle(this.$refs.slider, 'width'), 10);
        },
    },
    methods: {
        touchFun (event, type) {
            if (this.disabled) return;
            event.preventDefault();
            this.pointerDown = type;
            this.touchStartFun(event);
            window.addEventListener('mousemove', this.touchMoveFun, false);
            window.addEventListener('touchmove', this.touchMoveFun, false);
            window.addEventListener('mouseup', this.touchEndFun, false);
            window.addEventListener('touchend', this.touchEndFun, false);
        },	
        touchStartFun (event) {
            this.dragging = false;
            this.startX = this.getPointerX(event);
            if(this.pointerDown == "min"){   //判断是哪一个按钮
            	this.startPos = parseInt(this.minPosition);
            }else if(this.pointerDown == "max"){
            	this.startPos = parseInt(this.maxPosition);
            }
        },
        touchMoveFun (event) {
            this.dragging = true;
            this.currentX = this.getPointerX(event);
            const diff = (this.currentX - this.startX) / this.sliderWidth * 100;
            this.newPos = this.startPos + diff;
            this.changeButtonPosition(this.newPos);
        },
        touchEndFun () {
            if (this.dragging) {
                this.dragging = false;
                this.changeButtonPosition(this.newPos);
            }
            this.pointerDown = '';
            window.removeEventListener('mousemove', this.touchMoveFun, false);
            window.removeEventListener('touchmove', this.touchMoveFun, false);
            window.removeEventListener('mouseup', this.touchEndFun, false);
            window.removeEventListener('touchend', this.touchEndFun, false);
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
                    this.$emit("touch-end", this.currentValue[0]);
                    this.changeValue(this.currentValue[0]);
                    this.dispatch('FormItem', 'on-form-change', exportValue);
                    this.oldValue[index] = this.currentValue[index];
                }
            }
        },
        clickBar: function (event) {
        	if (!this.clickMore) return;
            if (this.disabled) return;
            const currentX = this.getPointerX(event);
            const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
            const newPos = (currentX - sliderOffsetLeft) / this.sliderWidth * 100;
            if (!this.range || newPos <= this.minPosition) this.changeButtonPosition(newPos, 'min');
            else if (newPos >= this.maxPosition) this.changeButtonPosition(newPos, 'max');
            else this.changeButtonPosition(newPos, ((newPos - this.firstPosition) <= (this.secondPosition - newPos)) ? 'min' : 'max');
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
        changeValue(val){
            var index = parseInt(val/10);
            this.numIndex = index;
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
    .nut-slider-wrap {
        width: 100%;
        height: 4px;
        margin: 16px auto;
        background-color: #e9eaec;
        border-radius: 3px;
        vertical-align: middle;
        position: relative;
        cursor: pointer;
    }
}


.nut-slider-button-wrap {
    width: 18px;
    height: 18px;
    text-align: center;
    background-color: transparent;
    position: absolute;
    top: -5px;
    transform: translateX(-50%);
    .ivu-tooltip {
        display: block;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
}


.nut-slider-button {
    width: 12px;
    height: 12px;
    border: 2px solid #57a3f3;
    border-radius: 50%;
    background-color: #fff;
    transition: all .2s linear;
}

.nut-slider-button-dragging{
    border-color: #2d8cf0;
    //transform: scale(1.5);
}

.nut-slider-button:hover {
    cursor: -webkit-grab;
    cursor: grab;
    border-color: #2d8cf0;
    //transform: scale(1.5);
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
    height: 4px;
    background: #57a3f3;
    border-radius: 3px;
    position: absolute;
}

.nut-slider-stop {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #ccc;
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
	    margin-right: 100px;
	}
	.ivu-input-number {
	    float: right;
	    margin-top: -14px;
	}

} 
//demo1

.nut-slider{
    .nut-slider-wrapper{
        position: relative;
        height: 12px;
    }
    .nut-slider-wrap{
        width: 90%;
    }
    .nut-slider-button-dragging{
        border-color: #2d8cf0;
        //transform: scale(1)
    }
    .nut-slider-button:hover {
        cursor: -webkit-grab;
        cursor: grab;
        border-color: #2d8cf0;
        //transform: scale(1);
    }
    .nut-slider-button-wrap{
        top: -15px;
        transform: translateX(-110%);
    }
    .nut-slider-button{
        width: 36px;
        height: 36px;
        border: 2px solid #999;
    }
    .nut-slider-bar{
        background: #33C3F0;
        height: 12px;

    }
    .nut-slider-wrap{
        height: 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    .nut-number{
        list-style-type:none;
        margin:0;
        padding:0;
        display: flex;
        margin-bottom:29px;
        li{
            flex:1;
            margin:0;
            padding:0;
            text-align:center;
        }
        .cur{
            color: #33C3F0;
        }
    }   
}

</style>