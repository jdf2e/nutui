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
    		default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCOTgzOEJFRkQzMzExMUU3OEQxN0RFREM1OENBQjQ1OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCOTgzOEJGMEQzMzExMUU3OEQxN0RFREM1OENBQjQ1OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI5ODM4QkVERDMzMTExRTc4RDE3REVEQzU4Q0FCNDU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI5ODM4QkVFRDMzMTExRTc4RDE3REVEQzU4Q0FCNDU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+N/65fwAAAedJREFUeNq81s1LVFEcxvG5viQIES4yzfoL2gRujFqYOqsSqWDCCFw0mki0yl3WZsCtQQsFU8gJQwZqkpABGSUQhKKFMIi0KpnM6WVlBOHc/B54BmKYOfeOd+oHn8VwX557z7nn/MZJpVKh/1E1lmP1iOAZPuAn9vEJ87iBI0GDrmITcTRhGlHcwiSOYgZbuO4nqK7ody3GcQ9P8BCfy1zbggd6ux4MI+83yITc1ZAlPB7yC0awhOdwcdvP0JnhGtUQJSqY50X0YxA3vYLMpD7CU81LpfUKU4ihwRZ0DSc05oetmOYtYgu6jGV8DBCU1T16bUHn8aYK63IV52xBbdiuQlBWU+CUC3K0EwStP15f3Q5aqxB0CrulAgtB7zRPQasTG7Y3eokwTgcIMXPTjaQtaAE/MBYgyKzB75izBf3SRhott+A8Kqx97r7uZd1UTd+5gFmdvOgzpE/X7uG13350R+0hqb5z0hJgtpvHeKH2cAwrOO6nTeTVJtYxgQG1gTUtAVeLuwOX1HWHtKmmcUZhF/H17xs7lv8MjWrXV3AWzXqwb3irt44rLKTjhbAMupDzE1RcjriWc8qG1VS4vbge5+R084zC0gqvKMhvFYct/augQpj5IN7jd6mvrpplvrr2wo8DAQYAy31vGZhb+/0AAAAASUVORK5CYII='
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
    		icon = 'url(' + this.icon + ')';
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