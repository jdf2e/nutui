<template>
    <div class="nut-signature">
    	<div class="nut-signature-inner" ref="wrap">
            <canvas ref="canvas" :height="cHeight" :width="cWidth" v-if="isCanvasSupported"></canvas>
            <p class="nut-signature-unsopport" v-else>{{unSupportTpl}}</p>
        </div>
        <slot></slot>
        <button class="bui-button bui-button-m" @click="clear()">重签</button>
        <button class="bui-button bui-button-m" @click="confirm()">确认</button>
    </div>
</template>
<script>
export default {
    name:'nut-signature',
    props: {
	    lineWidth:  {
            type: Number,
            default: 2
        },
	    strokeStyle:   {
            type: String,
            default: '#000'
        },
	    type: {
            type: String,
            default: 'png'
        },
	    unSupportTpl: {
            type: String,
            default: '对不起，当前浏览器不支持Canvas，无法使用本控件！'
        }
    },
    data() {
        return {
        	cWidth: 0,
            cHeight: 0,
            ctx: null,
            isSupportTouch : ('ontouchstart' in window),
            events: ('ontouchstart' in window) ? ['touchstart', 'touchmove', 'touchend'] : ['mousedown', 'mousemove', 'mouseup']
        };
    },
    computed: {
		isCanvasSupported() {
	        let elem = document.createElement('canvas');
	        return !!(elem.getContext && elem.getContext('2d'));
	    },
    },

    methods: {
	    addEvent() {
	        let _this = this;
	        _this.startEventHandler =  _this.startEventHandler.bind(_this),
	        _this.$refs.canvas.addEventListener(_this.events[0], _this.startEventHandler, false);
	    },

	    startEventHandler(event) {
	        event.preventDefault();

	        let _this = this;
	        _this.ctx.beginPath();
	        _this.ctx.lineWidth = _this.lineWidth;
	        _this.ctx.strokeStyle = _this.strokeStyle;

	        _this.moveEventHandler=  _this.moveEventHandler.bind(_this),
	        _this.endEventHandler= _this.endEventHandler.bind(_this)
	        _this.$refs.canvas.addEventListener(_this.events[1], _this.moveEventHandler, false);
	        _this.$refs.canvas.addEventListener(_this.events[2], _this.endEventHandler, false);

	    },

	    moveEventHandler(event) {
	        event.preventDefault();

	        let _this = this;
	        let evt = _this.isSupportTouch ? event.touches[0] : event;
	        let coverPos = _this.$refs.canvas.getBoundingClientRect();
	        let mouseX = evt.clientX  - coverPos.left;
	        let mouseY = evt.clientY  - coverPos.top;

	        _this.ctx.lineTo(
	            mouseX,
	            mouseY
	        );
	        _this.ctx.stroke();
	    },

	    endEventHandler(event) {
	        event.preventDefault();

	        let _this = this;
	        _this.$refs.canvas.removeEventListener(_this.events[1], _this.moveEventHandler, false);
	        _this.$refs.canvas.removeEventListener(_this.events[2], _this.endEventHandler, false);
	    },

	    clear() {
	        let _this = this;
	        _this.ctx.clearRect(0, 0, _this.cWidth, _this.cHeight);
	    },

	    confirm() {
	        this.onSave(this.$refs.canvas);
	    },

	    onSave(canvas) {
	        let _this = this;
	        let dataurl;
	        switch(_this.type) {
	            case 'png':
	                dataurl = canvas.toDataURL('image/png');
	                break;
	            case 'jpg':
	                dataurl = canvas.toDataURL('image/jpeg', 0.8);
	                break;
	        }
	        this.$emit('confirm', canvas, dataurl);
    	}
    },

    mounted(){
    	let _this = this;
    	if(_this.isCanvasSupported) {
    		_this.ctx = _this.$refs.canvas.getContext('2d');
	        _this.cWidth = _this.$refs.wrap.offsetWidth;
	        _this.cHeight= _this.$refs.wrap.offsetHeight,
			_this.addEvent();
    	}
    }
}
</script>
<style lang="scss">

</style>