<template>
    <div class="nut-rate">
    	<ul class="nut-rate-box">
            <li v-if="index<isActive" 
            @click="touchEvn(index)" 
            :style="{backgroundImage: 'url('+activeUrl+')',backgroundSize:picSize}"
            class='nut-list'
            v-for="(value,index) in num"></li>
            <li v-else 
            @click="touchEvn(index)" 
            class="nut-list" 
            :style="{backgroundImage: 'url('+originalUrl+')',backgroundSize:picSize}"></li>
    	</ul>
    	<div class="clr"></div>
    </div>
</template>
<script>
export default {
    name:'nut-rate',
    props: {
    	num:{
    		type:Number,
    		default:5,
    	},
    	originalPath:{
    		type:String,
    		default:'none'
    	},
        activePath:{
            type:String,
            default:'none'
        },
    	picWidth:{
    		type:Number,
    		default:0.32
    	},
    	picHeight:{
    		type:Number,
    		default:0.31
    	},
        currValue:{
            type:Number,
            default:0
        }
    },
    data() {
        return {
        	isActive:this.currValue,
        };
    },
    computed:{
        originalUrl(){
            if(this.originalPath == 'none'){
                return 'data:image/png;base64,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'
            }else{
                return this.originalPath;
            }
        },
        activeUrl(){
            if(this.activePath == 'none'){
                return 'data:image/png;base64,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';
            }else{
                return this.activePath;
            }
        },
        picSize(){
            return this.picWidth+'rem '+this.picHeight+'rem';
        }
    },
    methods: {
    	touchEvn(index){
    		this.isActive = index + 1;
            this.$emit('change-rate',index)
    	},
    }
}
</script>
<style lang="scss">
	.nut-rate-box{
		list-style-type:none;
		margin:0;
		padding: 0.4rem 0.3rem;
		.nut-list{
			float:left;
			width:0.32rem;
			height:0.32rem;
			margin-right:0.32rem; 
            background-repeat:no-repeat;
            &:last-child{
                margin-right:0; 
            }
		}
	}
	.clr{
		clear: both;
	}
</style>