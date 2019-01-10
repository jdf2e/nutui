<template>
	<div class="s-bar demo-list">
		<h4>基本用法</h4>
		<div class="demo1">
    		<nut-searchbar></nut-searchbar>
    	</div>
		<p>右侧搜索按钮可根据需要进行配置</p>
    	<div class="demo1">
    		<nut-searchbar
		        placeText="请输入自定义文案"
		        :hasSearchButton="false"
	        ></nut-searchbar>
    	</div>
    	<p>可配置输入框前面是否显示搜索图标、右侧是否显示文字按钮、显示文字、自定义 class</p>
    	<div class="demo1">
    		<nut-searchbar
		        placeText="ERP/姓名/邮箱"
		        :hasIcon="true"
		        :hasTextButton="true"
		        customClass="search_demo"
	        ></nut-searchbar>
    	</div>
        <h4>事件</h4>
        <div class="demo1">
            <nut-searchbar
		        placeText="请输入自定义文案"
		        @focus="focusFun"
		        @input="inputFun"
		        @blur="blurFun"
		        @submit="submitFun"
	        ></nut-searchbar>
        </div>
    </div>
</template>
<script>
	export default {
	    methods:{
	    	focusFun() {
	    		console.log('获取焦点操作！');
	    	},
	    	inputFun(value) {
	    		console.log(value);
	    		console.log('您正在输入...');
	    	},
	    	blurFun(value) {
	    		console.log(value);
	    		console.log('您已失去焦点！');
	    	},
            submitFun(value) {
            	console.log(value);
                console.log('默认提交操作！');
            }
	    }
	}
</script>
<style lang="scss" scoped>
	.demo1 {
		padding: 10px;
		background: #fff;
	}
</style>