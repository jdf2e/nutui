<template>
    <div class="nut-telinput">
    	<div class="nut-telinput-box" :style="{width:telBorderWidth,height:telBorderHeight}">
	    	<input type="tel" name="tel" class="nut-telnum" :placeholder="placeText" v-model="telNumber" 
	    	v-on:keydown="preNumFun(telNumber)" 
	    	v-on:keyup="currNumFun(telNumber)"
	    	maxLength="13"
	    	/>
	    	<b :class="['nut-clear',{'tel-hide':telhide}]" v-on:click="clearNum()" v-if="clearPic"></b>
    	</div>
    	<i :class="['nut-tips',{'tel-info':telinfo}]" v-if="tipsFlag && tipsPosition=='left'">{{tipsInfo}}</i>
    	<div :class="['nut-tips',{'tel-info':telinfo}]" v-if="tipsFlag && tipsPosition== 'bottom'">{{tipsInfo}}</div>
    </div>
</template>
<script>
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
    		default:'195',
    	},
    	telHeight:{
    		type:String,
    		default:'38',
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
                telWidth = this.telWidth + 'px';
           }else{
                telWidth = this.telWidth;
           }
           return telWidth;
        },
        telBorderHeight:function(){
           let telHeight;
           if(this.telHeight.indexOf('%') == -1) {
                telHeight = this.telHeight + 'px';
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
<style lang="scss" scoped>
	.nut-telinput-box{
		display: inline-block;
		position: relative;
	}
    .nut-telnum{
        width:100%;
        height:100%;
        padding-right:30px;
        padding: 6px 10px;
        background-color: #fff;
        border: 1px solid #D1D1D1;
        border-radius: 4px;
        box-shadow: none;
        box-sizing: border-box;
    }
    .nut-clear{
        width:20px;
        height: 20px;
        position: absolute;
        right: 10px;
        top:50%;
        cursor: pointer;
        transform: translate(0,-50%);
        background-size:90%,90%;
        background-repeat: no-repeat;
        background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMmaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0M0JBNDMzNkFFN0IxMUU3QTQwMkNDOEQzRUIyNjE1MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0M0JBNDMzN0FFN0IxMUU3QTQwMkNDOEQzRUIyNjE1MiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQkE0MzM0QUU3QjExRTdBNDAyQ0M4RDNFQjI2MTUyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQzQkE0MzM1QUU3QjExRTdBNDAyQ0M4RDNFQjI2MTUyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m3Kv8AAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAB4UExURUxpcc3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1M3O1P///9HS2Pf3+PX199DR19HR1/Hy89bX3OHi5uLj5ora9soAAAAddFJOUwBYBq1M6YDqAxCW+eiSlFeTBcXs+Mb6kceBxOtN/OaQ6wAAAPRJREFUKM+F09kWgiAQBuDRQLK03NqbXLJ8/zdMY0DGrP4r5Dt4BhgATFJx2EVFEe0OIoVpwkChzSUIuXoRskSeg8sVfmS1tLrAmSyMJzibjdYtfsn2XbP8xnKoP6CPZ2mmm/ahBwGAT/vtbhV5U99aPVI+CFpSVuS91neaFBAjd1cxgTMyZ4oZOEc9OFNUsEbmTHHNuP+zrZ9YMa0r5goypveSeTZujGpmnthjsTty/Qp+rketrXn0/lDNlTzaxtlfZ65k7kLLp14c/mwHasfNz2b614p/Gnl4BpP6pDd5RKd8xPwUfryyVMRHud/LYyx8O/kCftBPhGhpEogAAAAASUVORK5CYII=');
    }
    .tel-hide{
        display:none;
    }
	.nut-tips{
		font-style:normal;
		color:red;
        font-size: 12px;
	}
    .tel-info{
        display:none;
    }

</style>