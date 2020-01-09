<template>
    <div class="nut-textbox">
        <div class="txt-area" :class="{'error':errorState,'num-none':limitShow == false}" :style="{background:textBgColor}">
            <textarea :placeholder="placeText" :style="{height:txtAreaHeight+'px'}" v-model="textInfo" @input="txtIptLength" :switchMax="switchMax" :maxlength="iptMaxlength"></textarea>
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
    		default:"50",
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
