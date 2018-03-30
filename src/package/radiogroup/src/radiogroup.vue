<template>
    <div class="nut-radiogroup">
    	<div class="radio-item" :style="{'display':inline?'inline-block':'block'}" v-for="(radio,index) in data" :key="radio.id">
    		<nut-radio :name="radio.name" :class="{'choose':radio.checked}" :value="radio.value" :id="radio.id" :checked="radio.checked" :disabled="radio.disabled" @input-check="updateInput(radio,index,$event)"></nut-radio>
    		<label :for="radio.id">{{ radio.label || radio.value }}</label> 
    	</div>
    </div>
</template>
<script>
export default {
    name:'nut-radiogroup',
    props: {
    	data:{
    		type: Array, 
            required:true,
        },
        inline:{
            type:Boolean,
            default:false
        } 
    },
    data() {
        return {
        };
    },
    methods: {
    	updateInput(item,index,event) {
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
    margin-right: 20px;
    .nut-radio,label{
    	margin:0;
    	display:inline-block;
        vertical-align: middle;
    }
    label{
        margin-left:5px;
    }
}
</style>