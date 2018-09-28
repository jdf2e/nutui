<template>
	<div id="nut-dropdown" class="nut-dropdown" tabIndex='-1' @blur="handleBlur" ref="dropdown">
		<div class="default-select" @click="handleToggleShowOptions">
			<input v-show="inputShow" v-model="searchText" @click.stop="handleInputClick" type="text" placeholder="请输入过滤条件" class="search-input">
			<span v-show="!inputShow" class="selected">{{showSelected}}</span>
			<img :class='["arrow", optionsShow ? "up" : ""]' src='./img/arrow.png' @click.stop="handleToggleShowOptions"/>
		</div>
		<div v-show="optionsShow" class='select-options'>
			<div class='option' v-for="(option, index) in showOptions" :key='index' @click="handleItemClick(option)">
				<i :class="[isSelected(option) ? 'active' : '']"></i>  <span>{{ optionKey ? option[optionKey] :option}}</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name:'nut-dropdown',
	props: {
		// 默认选中的option
		defaultSelected: {
			// type: String,
			// default: '请选择'
		},
		// options，必须是数组，必传
		options: {
			type: Array,
			required: true
		},
		// option 展示的数据类型，适用于option是对象的时候 展示内容即为option对象key的值
		optionKey: {
			type: String
		},
		// 是否支持多选
		multiple: {
			type: Boolean,
			default: false
		},
		// 是否支持搜索
		search: {
			type: Boolean,
			default: false
		}

	},
	data() {
		return {
			optionsShow: false,
			// showSelected: this.defaultSelected,
			selected: '',
			inputShow: false,
			multipleSelected: [],
			searchText: ''
		};
	},
	computed: {
		showSelected() {
			let _txt = ''
			if (this.optionKey) {
				if (this.multiple) {
					_txt = this.multipleSelected.map(item => item[this.optionKey]).join('、')
				}	else {
					_txt = this.selected[this.optionKey]
				}	
			} else {
				if (this.multiple) {
					_txt = this.multipleSelected.join('、')
				} else {
					_txt = this.selected
				}
			}
			return _txt || '请选择'
		},
		showOptions() {
			let _options = this.options
			// 支持搜索的同时处于搜索状态
			if (this.search && this.inputShow) {
				if (this.optionKey) {
					_options = this.options.filter(item => item[this.optionKey].includes(this.searchText))
				} else {
					_options = this.options.filter(item => item.includes(this.searchText))
				}
			}
			return _options
		}
	},
	methods: {
		handleBlur() {
			if (this.inputShow) return
			if (this.optionsShow) {
				this.optionsShow = false
			}
			if (this.inputShow) {
				this.inputShow = false
			}
		},
		
		handleToggleShowOptions() {
			if (this.search) {
				if (this.inputShow) {
					this.optionsShow = false
					this.inputShow = false
					this.searchText = ''
					return
				}
				this.inputShow = true
				this.optionsShow = true
				return
			}
			this.optionsShow = !this.optionsShow
		},

		handleInputClick() {
			// console.log(111)
		},
	
		handleItemClick(option) {
			if (this.multiple) {
				if (this.optionKey) {
					if(this.multipleSelected.some(item => item[this.optionKey] === option[this.optionKey])){
						this.multipleSelected = this.multipleSelected.filter(item => item[this.optionKey] !== option[this.optionKey])
					} else {
						this.multipleSelected.push(option)
					}
				} else {
						if(this.multipleSelected.includes(option)){
						this.multipleSelected = this.multipleSelected.filter(item => item !== option)
					} else {
						this.multipleSelected.push(option)
					}
				}
				this.$emit('selectedChange', this.multipleSelected);
			} else {
				this.selected = option
				this.handleToggleShowOptions()
				this.$emit('selectedChange', this.selected);
			}
		},
		isSelected(option) {
			let _selected = false
			if (this.optionKey) {
				if (this.multiple) {
					_selected = this.multipleSelected.some(item => item[this.optionKey] === option[this.optionKey])
				} else {
					_selected = this.selected[this.optionKey] === option[this.optionKey]
				}
			} else {
				if (this.multiple) {
					_selected = this.multipleSelected.includes(option)
				} else {
					_selected = this.selected === option
				}
			}
			return _selected
		}
	},
	mounted() {
		if (this.defaultSelected) {
			if (this.multiple) {
				this.multipleSelected = this.defaultSelected
			} else {
				this.selected = this.defaultSelected
			}
		} else {
			if (this.optionKey) {
				this.selected = {}
			}
		}
	}
}
</script>
<style lang="scss" scoped>
* {
	box-sizing: border-box;
}
.nut-dropdown{
	outline: none;
	width: 200px;
	height: 30px;
	background: #409eff;
	border-radius: 5px;
	position: relative;
	.default-select {
		width: 100%;
		height: 100%;
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.selected {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.search-input {
			width: 100%;
			height: 100%;
			outline: none;
			border: none;
			padding: 0;
			transform: translateY(9px);
			background: transparent;
		}
		.arrow {
			width: 14px;
			height: 8px;
			transform: rotateX(180deg);
			transform-origin: 50% 50%;
			transition: transform 0.4s;
			&.up {
					transform: rotateX(0deg);
			}
		}
	}
	.select-options {
		position: absolute;
		z-index: 999;
		top: 100%;
		// height: 200px;
		left: 0;
		width: 100%;
		padding: 10px 0;
		background: #ffffff;
		border: 1px solid #d7d7d7;
		border-radius: 5px;

		.option {
			display: flex;
			align-items: center;
			line-height: 30px;
			font-size: 14px;
			padding: 0 20px;
			cursor: pointer;
			&:hover {
				background: #ecf5ff;
			}
			i {
				width: 16px;
				height: 16px;
				border: 1px solid #d7d7d7;
				margin-right: 8px;
				&.active {
						border: none;
						background: url(./img/complate.png) #409eff no-repeat center center;
				}
			}
		}
	}
}
</style>