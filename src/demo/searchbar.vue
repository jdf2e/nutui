<template>
	<div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <h5>示例用法</h5>
        <p>默认用法</p>
        <nut-searchbar  
        placeText="请输入自定义文案"
        ></nut-searchbar>        

        <p>右侧搜索按钮可根据需要进行配置</p>
        <nut-searchbar  
        placeText="请输入自定义文案"
        :hasSearchButton="false"
        ></nut-searchbar>

        <p>可配置输入框前面是否显示搜索图标（图标可配置）、输入框高度、右侧是否显示文字按钮以及文字按钮宽度、显示文字、文字颜色</p>
        <nut-searchbar  
        placeText="ERP/姓名/邮箱"
        :hasIcon="true"
        :hasTextButton="true"
        textInfo="搜索"
        width="1"
        height="1"
        color="#f23030"
        ></nut-searchbar>

        <p>可配置获取输入框焦点事件、输入事件、失去焦点事件、默认提交事件</p>
        <nut-searchbar  
        placeText="请输入自定义文案"
        @focus="focusFun"
        @input="inputFun"
        @blur="blurFun"
        @submit="submitFun"
        ></nut-searchbar>

    </div>
</template>
<script>
	export default {
	    data() {
	        return {
	            demo1: `<nut-searchbar  placeText="请输入自定义文案"></nut-searchbar>`,
	            demo2: `<nut-searchbar  placeText="请输入自定义文案" :hasSearchButton="false"></nut-searchbar>`,
	            demo3: `<nut-searchbar  
  placeText="ERP/姓名/邮箱"
  :hasIcon="true"
  :hasTextButton="true"
  textInfo="搜索"
  width="1"
  height="1"
  color="#f23030"
></nut-searchbar>`,
				demo4: `<nut-searchbar  
  placeText="请输入自定义文案"
  @focus="focusFun"
  @input="inputFun"
  @blur="blurFun"
  @submit="submitFun"
></nut-searchbar>`
	        }
	    },
	    methods:{
	    	focusFun() {
	    		console.log('获取焦点操作！');
	    	},
	    	inputFun() {
	    		alert('您正在输入...');
	    	},
	    	blurFun() {
	    		console.log('您已失去焦点！');
	    	},
            submitFun() {
                console.log('默认提交操作！');
            }
	    }
	}
</script>
<style lang="scss">
</style>