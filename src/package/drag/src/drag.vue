<template>
	<div id="nut-drag" class="nut-drag" @touchstart.prevent="touchStart($event)">
		<slot><div class="touch-dom">拖动我</div></slot>
	</div>
</template>
<script>
export default {
	name:'nut-drag',
	props: {
		'isSide':{ 
			type: Boolean,
			default: true
		},
		'unit': { 
			type: String,
			default: 'px'
		},
		'direction': {
			type: String,
			default: 'h'
		},
		'width': { 
			type: [Number,String],
			default: 50
		},
		'height': {
			type: [Number,String],
			default: 50
		},
		'zIndex': {
			type: [Number,String],
			default: 11
		},
		'opacity': { 
			type: [Number,String],
			default: 1
		},
		'boundary':{ 
			type: Object,
			default: function(){
				return  { 
					top:0,
					left:0,
					right:0,
					bottom:0
				}
			}
		},
		'callback':{
			type: Function,
			default: function(){
				return function(){}
			}
		},
		'href':{ //调转链接
			type: String
		}
	},
	data() {
		return {
			elWidth: 0,
			elHeight: 0,
			screenWidth: 0,
			screenHeight: 0,
			startTime: null,
			endTime: null,
			startTop: 0,
			startLeft: 0,
		};
	},
	methods: {
		getElementInfo(){ 
			let el = document.querySelector('.nut-drag');
			let domElem = document.documentElement;
			this.elWidth = el.offsetWidth;
			this.elHeight = el.offsetHeight;
			this.screenWidth = domElem.clientWidth;
			this.screenHeight = domElem.clientHeight;
			let distance = this.screenWidth - this.elWidth - el.offsetLeft;
			el.style.zIndex = this.zIndex;
			el.style.opacity = this.opacity;
			el.style.width = this.width + this.unit;; 
			el.style.height = this.height + this.unit;; 
			if (this.boundary.left != 0) {
				el.style.left = this.boundary.left + this.unit;
			}else{
				el.style.right = this.boundary.right + this.unit;
			}
			if (this.boundary.top != 0) {
				el.style.top = this.boundary.top + this.unit;
			}else{
				el.style.bottom = this.boundary.bottom + this.unit;
			}		
		},
		touchStart(e){ 
			let target = e.currentTarget;
			this.startTime = new Date();
			this.startTop = target.offsetTop;
			this.startLeft = target.offsetLeft;
			target.addEventListener('touchmove', this.touchMove, false);
			target.addEventListener('touchend', this.touchEnd, false);
		},
		touchMove(e){  
			e.preventDefault();
			let target = e.currentTarget;
			if (e.targetTouches.length == 1) {
				let touch = e.targetTouches[0]; 
				let currX = touch.clientX;
				let currY = touch.clientY;
				let rightLocation = this.screenWidth - this.elWidth - this.boundary.right;
				if(Math.abs(currX)> rightLocation){
					currX = rightLocation;
				}else if(currX <= this.boundary.left){
					currX = this.boundary.left;
				}
				if(currY < this.elHeight/2 + this.boundary.top){
					currY  = this.elHeight/2 + this.boundary.top;
				}else if(currY > this.screenHeight - this.elHeight - this.boundary.bottom){
					currY = this.screenHeight - this.elHeight/2 - this.boundary.bottom;
				}
				if(this.direction!='h'){
					target.style.left = currX  + this.unit;
				}
				if(this.direction!='v'){
					target.style.top = currY - this.elHeight/2 + this.unit;
				}	
			}
		},
		touchEnd(e){ 
			e.preventDefault();
			let target = e.currentTarget;
			this.endTime = new Date();
			let touch = e.changedTouches[0];
			let currX = touch.clientX;
			let currY = touch.clientY;
			let distanceTime = this.endTime - this.startTime;
			let distanceX = currX - this.startLeft;
			let distanceY = currY - this.startTop;
			if(distanceTime > 20  &&  distanceTime < 200 ){
				if(this.href && this.href != ""){
					this.$router.push({path: this.href})
				}
				return false;
			}
			let rightLocation = this.screenWidth - this.elWidth - this.boundary.right;
			if(this.isSide){
				if(currX > rightLocation){
					currX = rightLocation;
				}else if(currX < this.boundary.left){
					currX = this.boundary.left;
				}else {
					currX = (currX < (this.screenWidth/2 + this.elWidth/2))?this.boundary.left:rightLocation;
				}
				if(currY < this.elHeight/2 + this.boundary.top){
					currY  = this.elHeight/2 + this.boundary.top;
				}else if(currY > this.screenHeight - this.elHeight - this.boundary.bottom){
					currY = this.screenHeight - this.elHeight/2 - this.boundary.bottom;
				}
			}else{
				if(currX > rightLocation){
					currX = rightLocation;
				}else if(currX < this.boundary.left){
					currX = this.boundary.left;
				}
				if(currY < this.elHeight/2 + this.boundary.top){
					currY  = this.elHeight/2+ this.boundary.top;
				}else if(currY > this.screenHeight - this.elHeight - this.boundary.bottom){
					currY = this.screenHeight - this.elHeight/2 - this.boundary.bottom;
				}
			}
			if(this.direction!='h' && Math.abs(distanceX)>20){
				target.style.left = currX  + this.unit;  
			}
			if(this.direction!='v' && Math.abs(distanceY)>20){
				target.style.top = currY - this.elHeight/2 + this.unit;
			}  
		}
	},
	mounted(){
		this.$nextTick( () => {
			this.getElementInfo();
		})		
	}
}
</script>
<style lang="scss">
.nut-drag{
	position: fixed;
	display: inline;
	top: 0;
	right: 0;
	z-index: 10;
	overflow: hidden;
	.touch-dom{
		height: 50px;
		width: 50px;
		line-height: 50px;
		text-align: center;
		color: #fff;
		background: red;
		overflow: hidden;
	}
}
</style>