<template>
    <div class="nut-checkboxgroup">
    	<div class="checkbox-item" :style="{'display':inline?'inline-block':'block'}" v-for="(checkbox,index) in data" :key="checkbox.id">
    		<nut-checkbox :name="checkbox.name" :class="{'choose':checkbox.checked}" :value="checkbox.value" :id="checkbox.id" :checked.sync="checkbox.checked" :disabled="checkbox.disabled" @change="updateInput(data,checkbox,index,$event)"></nut-checkbox>
    		<label :for="checkbox.id">{{ checkbox.label || checkbox.value }}</label> 
    	</div>
    </div>
</template>
<script>
export default {
    name:'nut-checkboxgroup',
    props: {
    	data:{
    		type: Array, 
            required:true,
            default(){
                return [];
            }
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
    	updateInput(data,item,index,event) {
            this.$emit('change',data,item,index,event); 
        }
    }
}
</script>
<style lang="scss">
.checkbox-item{
	height:30px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    .nut-checkbox,label{
    	display:inline-block;
        margin:0;
        vertical-align: middle;
    }
    label{
        padding-left:5px;
    }
}
</style>