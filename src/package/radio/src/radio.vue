<template>
	<input  class="nut-radio" type="radio" :disabled="disabled"
      :value="value"
      :checked="checked" :id="id" @change="inputCheck" /> 
</template>
<script>
export default {
    name:'nut-radio',
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
    data(){
        return {
            
        }
    },
    methods: { 
        inputCheck: function(event) {
            /*console.log(event.target.checked);*/
            this.$emit('input-check',event); 
        }
    } 
}
</script>
<style lang="scss" scoped>
    
    input[type=radio] {
	    -webkit-appearance: none;
	    -webkit-border-radius: 0;
	    -webkit-transition: all 0.2s ease;
	    transition: all 0.2s ease;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	    width: 16px;
	    height: 16px;
	    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAVFBMVEUAAADJycnX19fJyc7JycrJycrIyMrKyszIyMnJycrIyMvLy8vKysrOzs7Z2dnIyMrIyMnJycnKysrJycvKysrJyczIyM7JycnJycrJycrJycnIyMn/93OUAAAAG3RSTlMA4gocievNOdqdYlhFIgao85iUhIFQKhPBqcKywT4rAAABuklEQVRYw5yU67KDIAyE1wjewdparfX93/NMIuOMHqXA91O5ZHcTcEvejn2R6XXVWdGPbY5IuqFaT1RDh2Byla2XZCqsFlOvHmqDX5DaV39VU5rZ2tmUjfrunxXBy9tJeNTdaSV19cPJeeMe+3TONYQLqHEeP+2tjcV2S4tb2q3K4sbWafv98mql13bNhAtKzf90CQ/+dZM+V+jXq6d/30XFQgiAFtFyus3KyQqBKKn4mIuk2SOYRbI9dJScSgiGpOo3doiN0DkiyDXbQUdpJaIoD+YZ6ShEIj1msFG7muIQ9bWTxce1iKblffnuRIUEqt0NLqhBAg0bIC8tvzCEBIjfoA7AIK6kIDkMTlGHFERA5fIgJEGSiUTzQSIfaYfRM+RBQz+i3yNNjLVHcZyw+FkrpLEMEjHSXDz3MxKZ+Z0B52KRiOXdf63YUQoAEBBFUTvgE/tfqJIkH1JnNqAwM+/eScWP8ItEPKd/akRpeYFbm/XZZt7sPnJiBp+PXw8BjyIPRI/lEDhwRHFQcly7obEJNDq6boDOfwCdF0AzxrtMuNK4WLnesWR+q249Vbe+VdeF27Xflw++AhlFREzaW5pIRQAAAABJRU5ErkJggg==') no-repeat;
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
    input[type=radio]:checked{
    	background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAllBMVEUAAADzMDD2NTXzMDDzMTHyMDDyMTHzMDDyMDDyMTHzMTH0MTHzMTHzMDDyMTH0MTHzMTHzMTHyMzP0MTHzMTH4MjL/QED/SUn2NDTyMDD////++/v2enr5oqL5oKD2dHT3hob+9/f939/4m5v1a2vyNTX96en7xMT6tbX5qKj4l5f4k5P3gID0UlLzQkL+8vL809P7zMzv5SM5AAAAGXRSTlMA+hzjze3s5N/aqJyYlIyIgVhQQyokDAc2HVLVvgAAAdBJREFUWMO1mOlWwjAQRieLpRu0BVG/ogi4L6C+/8vpaREIkJJk9P7uuWfazGRmSlZkVaY6joSIYp2WlSRPRnmCPZJ8RM7IQuEoqnCLZZwJWBHZmE5xMRDoRAwuqJNhDyfpDcnOZR9O9C/JgtRwRFs+67mCM+qcjnB1Bg/Oro7E0Bg8HAdxSAVPlNw7Cw1vtHkufQTQNzIKQQx3srqHIHrbXB8gkMGmNgW8uH9+entoa+63bjN4Ma1/+GwdGTVIvyBu6oZZG0abHEWIoX5GQ9EoVIihnqJBNTdtkGG+RMuIiPIQw+Qaa3IiSlgGJESSZwAkVUwDKiqZBpSUwuTB04CUNHa5XdSPMy8DNMVGATVPvfgYEFOEHb7q1uFhQERGjT3WLTfuBghT8VQbDhcDhPkiy4lRRS4GRBSbJ7Jx3GHNtNuAmDRsDjcDNKWwOV6dDEgPE/x663AxoKQKdsebgwEVSXQ4HAyQR6+cdw9DYrn43p0NyG3X78zVgJG1CcwcDaqjFd3OW8PHPboouhriarqYzBd3K3QhpNGWQ8iM4SAEMeaPKH8xKPHHNf7QyB9d+QM0f4znLxP8lYa/WPHXO/aSyV912Qs3e+3/p58P/F8g30WpTqn4uuxKAAAAAElFTkSuQmCC') no-repeat;
	    border-radius: 50%;
	    background-size: cover;
    }
    input[type=radio]:disabled{
        background: #ddd url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAVFBMVEUAAADJycnX19fJyc7JycrJycrIyMrKyszIyMnJycrIyMvLy8vKysrOzs7Z2dnIyMrIyMnJycnKysrJycvKysrJyczIyM7JycnJycrJycrJycnIyMn/93OUAAAAG3RSTlMA4gocievNOdqdYlhFIgao85iUhIFQKhPBqcKywT4rAAABuklEQVRYw5yU67KDIAyE1wjewdparfX93/NMIuOMHqXA91O5ZHcTcEvejn2R6XXVWdGPbY5IuqFaT1RDh2Byla2XZCqsFlOvHmqDX5DaV39VU5rZ2tmUjfrunxXBy9tJeNTdaSV19cPJeeMe+3TONYQLqHEeP+2tjcV2S4tb2q3K4sbWafv98mql13bNhAtKzf90CQ/+dZM+V+jXq6d/30XFQgiAFtFyus3KyQqBKKn4mIuk2SOYRbI9dJScSgiGpOo3doiN0DkiyDXbQUdpJaIoD+YZ6ShEIj1msFG7muIQ9bWTxce1iKblffnuRIUEqt0NLqhBAg0bIC8tvzCEBIjfoA7AIK6kIDkMTlGHFERA5fIgJEGSiUTzQSIfaYfRM+RBQz+i3yNNjLVHcZyw+FkrpLEMEjHSXDz3MxKZ+Z0B52KRiOXdf63YUQoAEBBFUTvgE/tfqJIkH1JnNqAwM+/eScWP8ItEPKd/akRpeYFbm/XZZt7sPnJiBp+PXw8BjyIPRI/lEDhwRHFQcly7obEJNDq6boDOfwCdF0AzxrtMuNK4WLnesWR+q249Vbe+VdeF27Xflw++AhlFREzaW5pIRQAAAABJRU5ErkJggg==') no-repeat;
        border-radius: 50%;
        background-size: cover;
    }
    
</style>