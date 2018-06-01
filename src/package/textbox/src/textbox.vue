<template>
    <div class="nut-textbox">
        <div class="txt-area" :class="{'error':errorState,'num-none':limitShow == false}" :style="{background:textBgColor}">
            <textarea :placeholder="placeText" :style="{height:txtAreaHeight+'rem'}" v-model="textInfo" @input="txtIptLength" :switchMax="switchMax" :maxlength="iptMaxlength"></textarea>
            <span v-show="limitShow">{{txtNum}}/{{maxNum}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'nut-textbox',
    props: {
    	maxNum:{
    		type:[String,Number],
    		default:50,
    	},
    	placeText:{
    		type:String,
    		default:'请您在此输入',
    	},
    	txtAreaH:{
    		type:[String,Number],
    		default:1,
    	},
    	switchMax:{
    		type:Boolean,
    		default:false,
    	},
        textBgColor:{
            type:String,
            default:'#fff'
        },
        limitShow:{
            type:Boolean,
            default:true,
        }
       
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
            this.$emit('inputFunc',this.textInfo);

        }
    }
}
</script>
<style lang="scss">
.nut-textbox{
	background:#fff;
    .txt-area{
        border: 1px solid #ececee;
	    padding: 0.1rem 0.2rem 0.5rem;
	    position: relative;
        &.num-none{
            padding: 0.1rem 0.2rem;
        }
        textarea{
            resize: none;
		    width: 100%;
		    border: none;
		    outline: none;
		    margin: 0;
		    padding: 0;
		    background: transparent;
            display:block;
        }
        span{
            color: #666;
		    position: absolute;
		    right: 0.1rem;
		    bottom: 0.05rem;
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