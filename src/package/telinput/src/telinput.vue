<template>
    <div class="nut-telinput">
    	<div class="nut-telinput-box" :style="{width:telBorderWidth+'rem',height:telBorderHeight+'rem'}">
	    	<input ref="input" type="tel" name="tel" class="nut-telnum" :placeholder="placeText" v-model="telNumber"
	    	v-on:keydown="preNumFun(telNumber)"
	    	v-on:keyup="currNumFun(telNumber)"
	    	maxLength="13"
	    	/>
	    	<b :class="['nut-clear',{'tel-hide':telhide}]" v-on:click="clearNum()" v-if="clearPic"><svg>
  <use xlink:href="#close3"></use>
</svg></b>
    	</div>
    	<i :class="['nut-tips',{'tel-info':telinfo}]" v-if="tipsFlag && tipsPosition=='left'">{{tipsInfo}}</i>
    	<div :class="['nut-tips',{'tel-info':telinfo}]" v-if="tipsFlag && tipsPosition== 'bottom'">{{tipsInfo}}</div>
    </div>
</template>
<script>
import closeIcon from '../../../asset/img/svg/close3.svg';

export default {
    name:'nut-telinput',
    props: {
    	gapone:{
    		type:Number,
    		default:3,
    	},
    	gapsec:{
    		type:Number,
    		default:7,
    	},
    	tipsInfo:{
    		type:String,
    		default:'请输入正确的电话号码',
    	},
    	telWidth:{
    		type:String,
    		default:'4',
    	},
    	telHeight:{
    		type:String,
    		default:'1',
    	},
    	clearPic:{
    		type:Boolean,
    		default:false,
    	},
    	placeText:{
    		type:String,
    		default:'请输入电话号码',
    	},
        tipsPosition:{
            type:String,
            default:'left',
        },
    },
    data() {
        return {
        	telNumber:null,
        	preNum:null,
        	tipsFlag:false,
        	firstVer:true,
            telhide:true,
            telinfo:true,
        };
    },
    computed:{
        telBorderWidth:function(){
           let telWidth;
           if(this.telWidth.indexOf('%') == -1) {
                telWidth = this.telWidth;
           }else{
                telWidth = this.telWidth;
           }
           return telWidth;
        },
        telBorderHeight:function(){
           let telHeight;
           if(this.telHeight.indexOf('%') == -1) {
        
                telHeight = this.telHeight;
           }else{
   
                telHeight = this.telHeight;
           }
           return telHeight;
        },

    },
    methods: {
    	clearNum:function(){
    		this.telNumber='';
    		this.tipsFlag=false;
            this.telhide = true;
            this.$refs.input.focus();
    		this.$emit('clear');
    	},
    	preNumFun:function(value){
    		this.preNum=value;
    	},
    	currNumFun:function(value){
    		if(value){
                this.telinfo = true;
    			let preNumed = this.preNum == null?null:this.preNum.replace(/\s/g,"");
	    		let currNumed = value.substring(0,13).replace(/\s/g,"");
	    		let telTest = /^(\+86)?\s?0?(13|14|15|18|17)[0-9]{9}$/.test(currNumed);
	    		let gapNum = this.devideNum(preNumed,currNumed,value,this.gapone,this.gapsec).substring(0,13);
		    	this.telNumber=gapNum;
	    		if(telTest){
	    			if(this.firstVer){
	    				this.firstVer=false;
	    				this.tipsFlag=false;
		    			this.$emit('pass-test',gapNum);

	    			}
	    		}else{
	    				this.firstVer=true;
	    				this.tipsFlag=true;
                        if(this.telNumber.length == 13){
                            this.telinfo = false;
                        }else{
                            this.$emit('error-tel',gapNum);
                        }

	    		}
	    		this.telhide = false;
    		}else{
    			this.tipsFlag=false;
                this.telhide = true;
    		}
    	},
    	devideNum:function(preNumed,currNumed,currNum,num1,num2){
    			let preNumedLength = preNumed==null?0:preNumed.length;
	    		let currNumedLength = currNumed.length;
	    		let telNumNew;
	    		if(currNumedLength>preNumedLength){//增加
	    			if(currNumedLength<num1){
	    				telNumNew = currNumed;
	    			}else{
	    				if(currNumedLength<this.gapsec){
	    					telNumNew = currNumed.substring(0,num1)+' '+currNumed.substring(num1,currNumedLength);
	    				}else{
							telNumNew=currNumed.substring(0,num1)+' '+currNumed.substring(num1,num2)+' '+currNumed.substring(num2,currNumedLength);
	    				}
	    			}
	    		}else{//删除
	    			telNumNew=currNum.replace(/(\s*$)/g,"");
                    this.telinfo=true;
	    		}
    			return telNumNew;
    	}
    }
}
</script>
<style lang="scss">
.nut-telinput{
	.nut-telinput-box{
		display: inline-block;
		position: relative;
		vertical-align: middle;
	}
    .nut-telnum{
        width:100%;
        height:1rem;
        padding-right:0.6rem;
        padding: 0.12rem 0.2rem;
        background-color: #fff;
        border: 1px solid #D1D1D1;
        border-radius: 0.08rem;
		vertical-align: top;
        box-shadow: none;
        box-sizing: border-box;
    }
    .nut-clear{
        width: 0.4rem;
        height: 0.4rem;
        position: absolute;
        right: 0.2rem;
        top:50%;
        cursor: pointer;
        transform: translateY(-50%);
		svg{
			width:100%;
			color:#999;
			height:100%;
			vertical-align: top;
		}
    }
    .tel-hide{
        display:none;
    }
	.nut-tips{
		font-style:normal;
		color:red;
		padding:.1rem 0;
        font-size: 0.24rem;
		vertical-align: middle;
	}
    .tel-info{
        display:none;
    }
}
</style>
