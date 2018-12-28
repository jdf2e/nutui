<template>
    <div :class="['nut-searchbar',customClass ? customClass : '']">
    	<div class="search-input" :class="[animation ? 'nut-search-ani':'',inputFocusAnimation?'focus':'']">
	    	<form action="" id="input-form" @submit="submitFun">
	    		<nut-icon type="search" v-if="hasIcon" width="20" height="20"></nut-icon>
	    		<input type="text"
	    		v-model="value"
	    		:placeholder="placeText || nutTranslate('lang.searchbar.placeText')"
	    		@focus="focusFun"
	    		@input="inputFun"
	    		@blur="blurFun"
	    		>
	    		<span class="close-icon" :class="hasCloseIcon ? 'show':''"
	    		@click="clearInput">
	    			<nut-icon type="circle-cross" width="15" height="15"></nut-icon>
	    		</span>
	    	</form>
    	</div>
    	<a href="javascript:;" class="btn-search" v-if="hasSearchButton">
    		<span v-if="hasTextButton">{{textInfo || nutTranslate('lang.searchbar.textInfo')}}</span>
    		<nut-icon type="search" v-else width="20" height="20"></nut-icon>
    	</a>
    </div>
</template>
<script>

import nuticon from "../icon/icon.vue";
import locale from "../../mixins/locale";
export default {
	name:'nut-searchbar',
	mixins: [locale],
    props: {
    	hasIcon: {
    		type: Boolean,
    		default: false
    	},
    	placeText: {
			type: String
		},
    	hasSearchButton: {
    		type: Boolean,
    		default: true
    	},
    	hasTextButton: {
    		type: Boolean,
    		default: false
    	},
    	textInfo: {
    		type: String
    	},
    	animation: {
	      	type: Boolean,
	      	default: true
	    },
	    customClass: {
    		type: String,
    		default:'',
    	}
    },
    components: {
        [nuticon.name]: nuticon
    },
    data() {
        return {
        	value: '', //输入值
        	hasCloseIcon: false,
        	inputFocusAnimation: false
        }
    },
    computed: {

    },
    methods: {
    	//清空 input 输入
    	clearInput: function() {
    		this.value = '';
    		this.hasCloseIcon = false;
    	},
    	focusFun: function() {
    		this.inputFocusAnimation = true;
    		this.$emit('focus');
    	},
    	inputFun: function() {
    		this.hasCloseIcon = this.value ? true:false;
    		this.$emit('input', this.value);
    	},
    	blurFun: function() {
    		this.inputFocusAnimation = false;
    		this.$emit('blur', this.value);
    	},
        submitFun: function() {
            this.$emit('submit', this.value);
        }
    }
}
</script>