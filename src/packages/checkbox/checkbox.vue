<template>
	<label :class="['nut-checkbox','nut-checkbox-size-'+size]" >
	    <input 
	    type="checkbox"
	    :name="name" 
	    :class="{'nut-checkbox-ani':animation}"
	    :disabled="disabled"
	    :checked.prop="isChecked"
	    :value="submittedValue"
	    @change="changeEvt"
	    >
	   	<span class="nut-checkbox-label" v-if="label">
	   		{{label}}
	   	</span>
	   	<span class="nut-checkbox-label" v-else>
	   		<slot></slot>
	   	</span>
	   
	</label>
</template>
<script>
export default {
    name:'nut-checkbox',
  	props: {
	    name:{
	    	type: String
	    },
	    size: {
	      	type: [String, Number, Boolean],
	      	default: 'base'
	    },
	    label:{
	      	type: String,
	      	default: ''
	    },
	    value:{
	    	required:true
	    },
	    trueValue: {
            default: true
        },
        falseValue: {
            default: false
        },
	    submittedValue: {
            type: String,
            default: 'on' // HTML default
        },
	    checked: {
	      	type: Boolean,
	      	default: false
	    },
	    disabled: {
	      	type: Boolean,
	      	default: false
	    },
	    animation: {
	      	type: Boolean,
	      	default: true
	    },

  	},
  	watch:{
  		value(){
  			this.isChecked = this.looseEqual(this.value,this.trueValue)
		},
	    checked(newValue,oldValue){
			this.isChecked = newValue;
		}
  	},
	data() {
		
	    return {
	    	isChecked:(this.value == this.trueValue)  || this.checked
	    };
	},
	
	mounted(){
		this.$emit('update:checked',this.isChecked ? this.trueValue : this.falseValue,this.label);
		this.$emit('input', this.isChecked ? this.trueValue : this.falseValue,this.label);
	},
	methods: {
		isObject(obj) {
		    return obj !== null && typeof obj === 'object';
		},
		looseEqual(a, b) {
		    return a == b || (
		       this.isObject(a) && this.isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false
		    );
		},
	    changeEvt(event) {
	    	const isCheckedPrevious = this.isChecked;
            const isChecked = event.target.checked;
            
            this.$emit('input', isChecked ? this.trueValue : this.falseValue, this.label, event);
            if (isCheckedPrevious !== isChecked) {
                this.$emit('change', isChecked ? this.trueValue : this.falseValue, this.label, event);
            }
	    }
	}
}
</script>