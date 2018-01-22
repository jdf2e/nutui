<template>
    <div class="nut-radiogroup">
    	<div class="radio-item" :class="className" v-for="(radio,index) in radiosData">
    		<nut-radio :name="radio.name" :class="{'choose':index == thisIdx}" :value="radio.value" :id="radio.id" :disabled="radio.disabled" @input-check="updateInput(radio,index,$event)"></nut-radio>
    		<label :for="radio.id">{{ radio.value }}</label> 
    	</div>
    </div>
</template>
<script>
export default {
    name:'nut-radiogroup',
    props: {
    	radiosData:{
    		type: Array, 
            required:true,
    	},
        className: { 
        	type: String, 
            default:'',
        }, 
        /*id: { 
        	type: [String,Number], 
            default:0,
        },*/ 
        
    },
    data() {
        return {
        	thisIdx:-1
        };
    },
    methods: {
    	updateInput(item,index,event) {
    		this.thisIdx = index;
            this.$emit('radio-check',item,index,event); 
        }
    }
}
</script>
<style lang="scss">
.radio-item{
	height:30px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    input,label{
    	margin:0;
    	display:inline-block;
    }
}
</style>