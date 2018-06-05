<template>
    <div :class="['nut-sideslipbutton' ,customClass ? customClass : '']">
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
        },
        'customClass': {
        	type: String,
        	default: ''
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
<style>
.nut-sideslipbutton {
    position: relative;
    overflow: hidden;
    
}
.slidedom {
    padding: .2rem;
    position: relative;
    overflow: hidden;
    display: flex;
    border: 1px solid #d8d8d8;
    background: #fff;
    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 200%;
        height: 0;
        box-sizing: border-box;
        transform: scale(0.5);
        transform-origin: left bottom;
        border-bottom: 1px solid #ececee;
    }
    .addr-wrap {
        display: flex;
        position: relative;
        width: 100%;
    }
    .addr {
        flex: 1;
    }
    .addr-edit {
        display: flex;
        width: .7rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAAGXLeQ2AAAAAXNSR0IArs4c6QAAAdFJREFUSA2tVTFuAjEQtNF1KBIvoEEiD+CkVHRX0CaPgG9Aly9ADwVFaO8LkeABeUVOAWqys7k5+Xw+zkixdF7v7ux4vWuDMe5Yr9c3jOPxeOvRMZlMuDRGEEtDCKTFBP9ms9HpBwYOECmZGJ7IcjqdDEghe9baAx21nWhsyMvlQnqVSFpBrpUnqTloBBCOKndFlZMkZHt5nrs2c71eVbdyyrFEf9W8pTKfz3WFc+GTsULB3Lxqa1QGfkgMRCSY/EFGFIi7aL0FGAwAsK2aVWP9Xdr0ZLFYoCofkuJrG0j8Z/nSNn/QLodfoqTfwjwIIRqHBZDGUACrAszdg7pAELWCfWArOASErcFc3o2qk+45Gt38t0420nC39dcK5qX3ndTxSKTlh0Sm591uh0tcPXKCKAGUprxZGKQsYxHv8mX3goDlCHWd76LErHCX9JYOh0MznU5Nv99nfLT0SPUdpWlqE8lUr/9sNosmIzBE6j7QRt8ZeE92kTL2IfIYUl51bBBFXhSF2e/3TEhr6h6/cniLKHL5+VTC0WhkBoPg74hH+6dGkWdZFgzuMj703LrIfD/+Nc8wdj1RPzCkk4OcKEsqyud2u40vZoi5tAlXIcsXqL8z/jqozhCfMwAAAABJRU5ErkJggg==) no-repeat center center;
        background-size: .46rem .46rem;
    }
    .name-mobile {
        font-size: .3rem;
        color: #333;
    }
    .full-addr {
        font-size: .28rem;
        color: #666;
        margin-top: .2rem;
        line-height: .4rem;
        height: .8rem;
    }
}
.slideoper {
    position: absolute;
    right: -2rem;
    top: 0;
    width: 2rem;
    height: 100%;
    font-size: .3rem;
    background: #7352d5;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>