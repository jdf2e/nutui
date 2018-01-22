<template>
    <div>
        <h1>TextBox</h1>
        <p>带有字数提示的输入框，超出最大字数提示超出错误</p>
       
        <h5>示例</h5>
        <p>默认用法</p>
        <nut-textbox></nut-textbox>
        

        <p>自定义高度:100px</p>
        <nut-textbox :txtAreaH="100" :maxNum="300"></nut-textbox>
       

        <p>自定义提示语</p>
        <nut-textbox :placeText="'请填写详细情况请填写详细情况'"></nut-textbox>
        

        <p>自定义字数限制</p>
        <nut-textbox :maxNum="100"></nut-textbox>
        

        <p>限制字数不可超出</p>
        <nut-textbox :switchMax="true" :maxNum="10" :txtAreaH="20" textBgColor="#efefef"></nut-textbox>
        

        <p>字数超出报错</p>
        <nut-textbox :maxNum="10" :txtAreaH="20"  @errorFunc="overLength" ></nut-textbox>
        

        <p>自定义文本框背景色</p>
        <nut-textbox :switchMax="true" :maxNum="10" :txtAreaH="20" textBgColor="#feefef"></nut-textbox>
       
        
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    data(){
        return{
            demo1:`<nut-textbox></nut-textbox>`,
            demo2:`<nut-textbox :txtAreaH="100"></nut-textbox>`,
            demo3:`<nut-textbox :placeText='"请填写详细情况请填写详细情况"'></nut-textbox>`,
            demo4:`<nut-textbox :maxNum="100"></nut-textbox>`,
            demo5:`<nut-textbox :switchMax="true" :maxNum="10" :txtAreaH="20"></nut-textbox>`,
            demo6:`<nut-textbox :maxNum="10" txtAreaH="20"  @errorFunc="overLength" ></nut-textbox>
methods:{
    overLength(){
        alert("字数超出");
    }
}`,
            demo7:`<nut-textbox 
:switchMax="true" 
:maxNum="10" 
:txtAreaH="20" 
textBgColor="#feefef">
</nut-textbox>`,
        }
    },
    methods:{
        overLength(){
            alert('字数超出');
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
