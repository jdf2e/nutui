<template>
    <div class="nut-sideslipbutton">
    	<div class="transform-wrap" :style="{transition: 'all '+during+'s ease',transform: 'translate3d('+left+',0, 0)'}">
    		<div @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
	    		<slot name="slidedom"></slot>
	    	</div>
	    	<slot name="slideoper"></slot>
    	</div>
    	
    </div>
</template>
<script>
export default {
    name:'nut-sideslipbutton',
    props: {
    	'during':{
            type: [Number,String],
            default: 1
        },
        'isClickRestore':{
        	type: [Boolean],
            default: true
        }
    },
    data() {
        return {
        	left: 0,
        	buttonWidth: 0
        };
    },
    mounted () {
    	let left = this;
        left.$nextTick(() => {
        	for(var slot of left.$slots.slideoper) {
        		left.buttonWidth = left.buttonWidth + slot.elm.offsetWidth;
        	}
        })
    },
    methods: {
    	touchStart(e) {
			let self = this;
			self.startY = e.targetTouches[0].pageY;
			self.startX = e.targetTouches[0].pageX;
		},
		touchMove(e) {
			let self = this;
			let endX = e.touches[0].pageX;
			let endY = e.touches[0].pageY;
			let Y = endY - self.startY;
			let X = endX - self.startX;
			if(Math.abs(X) > Math.abs(Y) && X < 0) {
				self.isShowOper = true;
				if(Math.abs(X) > self.buttonWidth/2 ) {
					self.left = (- self.buttonWidth) + 'px';
				} else {
					self.left = X + 'px';
				}
			}
		},
		touchEnd(e) {
			let self = this;
			let endX = e.changedTouches[0].pageX;
			let endY = e.changedTouches[0].pageY;
			let Y = endY - self.startY;
			let X = endX - self.startX;
			//判断从右往左划
			if(Math.abs(X) > Math.abs(Y) && X < 0 ) {
				if(Math.abs(X) > self.buttonWidth/2) {
					self.$emit('slide-left');
				} else {
					self.restore();
				}
				
			} else if(Math.abs(X) > Math.abs(Y) && X > 0) {
				self.$emit('slide-right');
				self.restore();
			} else if(X == 0 && Y == 0) {
				self.$emit('slide-no');//触发点击事件
				if(self.isClickRestore) {
					self.restore();
				}
			}
		},
		restore() {
			let self = this;
			self.left = 0;
		}

    }
}
</script>
<style lang="scss">

</style>