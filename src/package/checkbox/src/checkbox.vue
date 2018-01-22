<template>
    <input  class="nut-checkbox" type="checkbox" :disabled="disabled" :value="value" :id="id" :checked="checked"  @change="inputCheck" /> 
</template>
<script>
export default {
    name:'nut-checkbox',
    props: {
        disabled:{
            type: Boolean,  
            default: false 
        },
        id: { 
            type: [String,Number], 
            default:'',
        }, 
        value: { 
            type: [String,Number], 
            default:'',
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
    	inputCheck: function(e) {
            this.$emit('input-check',event); 
        }
    }
}
</script>
<style lang="scss" scoped>
 input[type=checkbox] {
	    -webkit-appearance: none;
	    -webkit-border-radius: 0;
	    -webkit-transition: all 0.2s ease;
	    transition: all 0.2s ease;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	    width: 16px;
	    height: 16px;
	    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAJFBMVEUAAADPz8/IyMnJycnJycnKysrKysrJycvKysrV1dXJycnIyMkWKVURAAAAC3RSTlMAFvPj1ZSPWSsGvTShVOcAAAB/SURBVEjH7dYhEkBgFMTxFYzRzAguoEmypiqqG5hRuISiKE6hYYyxl+MC3veS9Db/+v4BjCW/l7Z4t1BeA4Srw9wzfLpWY+I+4HtJwQsdc0iLeaJiL5qABzJGovG4gYQ80owZM2bMmDHzj9F8t6YBNC2haRJN22gaSdNammZ7AOMIcfIoNnGwAAAAAElFTkSuQmCC') no-repeat;
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
    input[type=checkbox]:checked{
    	background: #F23030 url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAllBMVEUAAADzMDD2NTXzMDDzMTHyMDDyMTHzMDDyMDDyMTHzMTH0MTHzMTHzMDDyMTH0MTHzMTHzMTHyMzP0MTHzMTH4MjL/QED/SUn2NDTyMDD////++/v2enr5oqL5oKD2dHT3hob+9/f939/4m5v1a2vyNTX96en7xMT6tbX5qKj4l5f4k5P3gID0UlLzQkL+8vL809P7zMzv5SM5AAAAGXRSTlMA+hzjze3s5N/aqJyYlIyIgVhQQyokDAc2HVLVvgAAAdBJREFUWMO1mOlWwjAQRieLpRu0BVG/ogi4L6C+/8vpaREIkJJk9P7uuWfazGRmSlZkVaY6joSIYp2WlSRPRnmCPZJ8RM7IQuEoqnCLZZwJWBHZmE5xMRDoRAwuqJNhDyfpDcnOZR9O9C/JgtRwRFs+67mCM+qcjnB1Bg/Oro7E0Bg8HAdxSAVPlNw7Cw1vtHkufQTQNzIKQQx3srqHIHrbXB8gkMGmNgW8uH9+entoa+63bjN4Ma1/+GwdGTVIvyBu6oZZG0abHEWIoX5GQ9EoVIihnqJBNTdtkGG+RMuIiPIQw+Qaa3IiSlgGJESSZwAkVUwDKiqZBpSUwuTB04CUNHa5XdSPMy8DNMVGATVPvfgYEFOEHb7q1uFhQERGjT3WLTfuBghT8VQbDhcDhPkiy4lRRS4GRBSbJ7Jx3GHNtNuAmDRsDjcDNKWwOV6dDEgPE/x663AxoKQKdsebgwEVSXQ4HAyQR6+cdw9DYrn43p0NyG3X78zVgJG1CcwcDaqjFd3OW8PHPboouhriarqYzBd3K3QhpNGWQ8iM4SAEMeaPKH8xKPHHNf7QyB9d+QM0f4znLxP8lYa/WPHXO/aSyV912Qs3e+3/p58P/F8g30WpTqn4uuxKAAAAAElFTkSuQmCC') no-repeat;
	    border-radius: 10%;
	    background-size: cover;
    }
    input[type=checkbox]:disabled{
        background: #ddd url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAJFBMVEUAAADPz8/IyMnJycnJycnKysrKysrJycvKysrV1dXJycnIyMkWKVURAAAAC3RSTlMAFvPj1ZSPWSsGvTShVOcAAAB/SURBVEjH7dYhEkBgFMTxFYzRzAguoEmypiqqG5hRuISiKE6hYYyxl+MC3veS9Db/+v4BjCW/l7Z4t1BeA4Srw9wzfLpWY+I+4HtJwQsdc0iLeaJiL5qABzJGovG4gYQ80owZM2bMmDHzj9F8t6YBNC2haRJN22gaSdNammZ7AOMIcfIoNnGwAAAAAElFTkSuQmCC') no-repeat;
        border-radius: 10%;
        background-size: cover;
    }
</style>