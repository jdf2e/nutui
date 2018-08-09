<template>
    <div class="nut-searchbar">
    	<div class="search-input" :style="{height:searchHeight}">
	    	<form action="" id="input-form" @submit="submitFun">
	    		<i v-if="hasIcon" :style="{'background-image':searchBgIcon}"></i>
	    		<input type="text" :placeholder="placeText" :style="{height:searchHeight}"
	    		@focus="focusFun"
	    		@input="inputFun"
	    		@blur="blurFun"
	    		>
	    	</form>
    	</div>
    	<a href="javascript:;" class="btn-search" v-if="hasSearchButton" 
    	:style="{height:searchHeight,
    	'line-height':searchHeight,
    	width:searchWidth,
    	color:searchColor}">
    		<span v-if="hasTextButton">{{textInfo}}</span>
    		<b v-else :style="{'background-image':searchBgIcon}"></b>
    	</a>
    </div>
</template>
<script>
export default {
    name:'nut-searchbar',
    props: {
    	height: {
    		type: String,
    		default: '0.6'
    	},
    	width: {
    		type: String,
    		default: '0.6'
    	},
    	color: {
    		type: String,
    		default: '#222'
    	},
    	icon: {
    		type: String,
    		default: ''
    	},
    	hasIcon: {
    		type: Boolean,
    		default: false
    	},
    	placeText: {
    		type: String,
    		default: '请输入内容...'
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
    		type: String,
    		default:'搜索',
    	}
    },
    data() {
        return {
			defaultIcon:`data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23BDBDBD' d='M15.504 13.616l-3.79-3.223c-.392-.353-.811-.514-1.149-.499a6 6 0 1 0-.672.672c-.016.338.146.757.499 1.149l3.223 3.79c.552.613 1.453.665 2.003.115s.498-1.452-.115-2.003zM6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z'/%3E%3C/svg%3E`,
        }
    },
    computed: {
    	searchHeight() {
    		let height;
	        if(this.height) {
	            height = this.height + 'rem';
	        }else{
	            height = this.height;
	        }
	        return height;
    	},
    	searchWidth() {
    		let width;
	        if(this.width) {
	            width = this.width + 'rem';
	        }else{
	            width = this.width;
	        }
	        return width;
    	},
    	searchColor() {
	        return this.color;
    	},
    	searchBgIcon() {
    		let icon;
    		icon = 'url("'+(this.icon||this.defaultIcon)+'")';
    		return icon;
    	}
    },
    methods: {
    	focusFun: function() {
    		this.$emit('focus');
    	},
    	inputFun: function() {
    		this.$emit('input');
    	},
    	blurFun: function() {
    		this.$emit('blur');
    	},
        submitFun: function() {
            this.$emit('submit');
        }
    }
}
</script>
<style lang="scss">
	.nut-searchbar {
		display: flex;
		flex-flow:row;
		.search-input {
			flex: 1;
			padding-left: 0.1rem;
		    border-radius: 0.04rem;
		    background-color: #f3f3f3;
		    i {
		    	display: inline-block;
		    	width: .26rem;
		    	height: .26rem;
	    	    margin: 0 -5px 0 .1rem; 
	    	    background-repeat: no-repeat;
    			background-size: .26rem .26rem;
    			vertical-align: middle;
		    }
		    input {
	    	    min-width: 85%;
			    flex: 1;
			    font-size: 0.24rem;
			    padding: 0 .1rem;
			    border-radius: 0.04rem;
			    background-color: #f3f3f3;
			    border-color: transparent;
			    outline: none;
                border-width: 0;
		    }
		}
		.btn-search {
			display: inline-block;
			text-align: center;
		    font-size: .28rem;
    		b {
    			display: inline-block;
    			width: .4rem;
		    	height: .4rem;
		    	background-repeat: no-repeat;
    			background-size: .4rem .4rem;
    			vertical-align: middle;
    		}
		}
		a {
			text-decoration: none;
		}
	}
</style>