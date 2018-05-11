<template>
    <input 
        class="nut-checkbox" 
        type="checkbox" 
        :disabled="disabled"
        :checked="checked"
        @change="inputCheck" 
    /> 
</template>
<script>
export default {
    name:'nut-checkbox',
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
    data() {
        return {};
    },
    methods: {
    	inputCheck(event) {
            this.$emit('update:checked', event.target.checked);
            this.$emit('change',event); 
        }
    }
}
</script>
<style lang="scss" >
    .nut-checkbox {
	    -webkit-appearance: none;
	    border-radius: 0;
	    transition: all 0.2s ease;
	    -webkit-font-smoothing: antialiased;
	    width: 16px;
	    height: 16px;
	    /* background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAJFBMVEUAAADPz8/IyMnJycnJycnKysrKysrJycvKysrV1dXJycnIyMkWKVURAAAAC3RSTlMAFvPj1ZSPWSsGvTShVOcAAAB/SURBVEjH7dYhEkBgFMTxFYzRzAguoEmypiqqG5hRuISiKE6hYYyxl+MC3veS9Db/+v4BjCW/l7Z4t1BeA4Srw9wzfLpWY+I+4HtJwQsdc0iLeaJiL5qABzJGovG4gYQ80owZM2bMmDHzj9F8t6YBNC2haRJN22gaSdNammZ7AOMIcfIoNnGwAAAAAElFTkSuQmCC') no-repeat; */
        border:1px solid #ccc;
	    border-radius: 10%;
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
    .nut-checkbox:checked{
        background: #F23030 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Cline x1='2' y1='5' x2='5' y2='7' stroke='%23fff'%3E%3C/line%3E%3Cline x1='4' y1='7' x2='9' y2='2' stroke='%23fff'%3E%3C/line%3E%3C/svg%3E") no-repeat center;
        border:1px solid #F23030;
	    border-radius: 10%;
	    background-size: cover;
    }
    .nut-checkbox:disabled{
        background: #ebebeb;
        border:1px solid #ccc;
        border-radius: 10%;
        background-size: cover;
    }
</style>