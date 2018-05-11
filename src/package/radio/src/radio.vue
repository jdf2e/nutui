<template>
	<input class="nut-radio" 
        type="radio" 
        :disabled="disabled"
        :checked="checked" 
        @change="inputCheck" /> 
</template>
<script>
export default {
    name:'nut-radio',
    props: { 
        disabled:{
            type: Boolean,  
            default: false 
        },
        
        checked: { 
        	type: Boolean,  
        	default: false 
        }, 
    }, 
    data(){
        return {
        }
    },
    methods: { 
        inputCheck: function(event) {
            this.$emit('update:checked', event.target.checked);
            this.$emit('input-check',event.target.checked,event.target.value,event); 
        }
    }
}
</script>
<style lang="scss">
    
    .nut-radio {
	    -webkit-appearance: none;
	    -webkit-border-radius: 0;
	    -webkit-transition: all 0.2s ease;
	    transition: all 0.2s ease;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	    width: 16px;
	    height: 16px;
        border:1px solid #ccc;
	    border-radius: 50%;
	    background-size: cover;
       	display: inline-block;
        margin-right:10px;
        &:focus {
            outline: 0;
        }
        &:active {
            outline: none;
        }
        &:hover {
            outline: none;
        }
        
    }
    .nut-radio:checked{
        background: #F23030 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Cline x1='2' y1='5' x2='5' y2='7' stroke='%23fff'%3E%3C/line%3E%3Cline x1='4' y1='7' x2='9' y2='2' stroke='%23fff'%3E%3C/line%3E%3C/svg%3E") no-repeat center;
        border:1px solid #f23333;
	    border-radius: 50%;
	    background-size: cover;
    }
    .nut-radio:disabled{
        background: #ebebeb;
        border:1px solid #ccc;
        border-radius: 50%;
        background-size: cover;
    }
    
</style>