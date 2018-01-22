<template>
    <div class="nut-textbox">
        <div class="txt-area" :class="{'error':errorState}" :style="{background:textBgColor}">
            <textarea :placeholder="placeText" :style="{height:txtAreaHeight+'px'}" v-model="textInfo" @input="txtIptLength" :switchMax="switchMax" :maxlength="iptMaxlength"></textarea>
            <span>{{txtNum}}/{{maxNum}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'nut-textbox',
    props: {
    	maxNum:{
    		type:Number,
    		default:50,
    	},
    	placeText:{
    		type:String,
    		default:'请您在此输入',
    	},
    	txtAreaH:{
    		type:[String,Number],
    		default:50,
    	},
    	switchMax:{
    		type:Boolean,
    		default:false,
    	},
        textBgColor:{
            type:String,
            default:'#fff'
        },
        
    },
    data() {
        return {
        	textInfo:'',
            errorState:false,
            txtNum:0,
        };
    },
    computed:{
        txtAreaHeight:function(){
           let txtAreaH;
           txtAreaH = this.txtAreaH;
                
           return txtAreaH;
        },
        iptMaxlength(){
        	let maxlength;
        	if (this.switchMax) {
        		maxlength = this.maxNum
        	}
        	return maxlength
        },
    },
    methods: {
        txtIptLength(){
            let txtVal = this.textInfo.length;
            this.txtNum = txtVal;  
            if(txtVal > this.maxNum) {
                this.errorState = true;
                this.$emit('errorFunc'); 
           	}else{
                this.errorState = false;
           	}
        }
    }
}
</script>
<style lang="scss" scoped>
.nut-textbox{
	background:#fff;
    .txt-area{
        border: 1px solid #ececee;
	    padding: 5px 10px 30px;
	    position: relative;
        textarea{
            resize: none;
		    width: 100%;
		    /* min-height: 50px; */
		    border: none;
		    outline: none;
		    margin: 0;
		    padding: 0px;
		    background: transparent;
            display:block;
        }
        span{
            color: #666;
		    position: absolute;
		    right: 10px;
		    bottom: 5px;
		    font-size:12px;
        }
        &.error{
        	border:1px solid #e2231a;
        	span{
        		color:#e2231a;
        	}
        }
    }
}
</style>