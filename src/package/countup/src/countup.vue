<template>
    <div class="nut-countup">{{current}}</div>
</template>
<script>
export default {
    name:'nut-countup',
    props: {
    	'initNum':{
            type:Number,
            required:true,
        },
        'endNum':{
        	type:Number,
            required:true,
        },
        'speed':{
        	type:Number,
            default:2,
        },
        'toFixed':{
        	type:Number,
            default:0,
        },
        'during':{
        	type:Number,
            default:200,
        },
        'startFlag':{
        	type:Boolean,
            default:true,
        }
    },
    data() {
        return {
        	current:this.initNum,
        };
    },
    mounted(){
    	if(this.startFlag){
	    	this.countChange();
	    }
    },
    watch:{
    	startFlag:function(){
    		if(this.startFlag){
	    		this.countChange();
	    	}
    	}
    },
    methods: {
    	countChange(){
            let {endNum, initNum, speed, toFixed} = this;
    		let countTimer = setInterval(()=>{
    			if(initNum > endNum){//减少
    				if(this.current <= endNum || this.current <= speed){//数字减小，有可能导致current小于speed
	    				this.current = endNum.toFixed(toFixed);
	    				clearInterval(countTimer);
					}else{
                        this.current = (parseFloat(this.current) - parseFloat(speed)).toFixed(toFixed);
					}
    			}else{//增加
    				if(this.current >= endNum){
    					this.current = endNum.toFixed(toFixed);
	    				clearInterval(countTimer);
    				}else{
    					this.current = (parseFloat(this.current) + parseFloat(speed)).toFixed(toFixed);
    				}
    			}
    		},this.during);
    	}
    }
}
</script>
<style lang="scss">
.nut-countup{
    display:inline-block;
    padding:5px;
	color:red;
	font-size:0.8rem;
	font-weight:bold;
	text-align:center;
    margin-bottom:10px;
    border-radius:6px;
}
</style>