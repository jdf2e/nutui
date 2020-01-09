<template>
    <div>
        <h5>示例</h5>
        <h6>默认用法</h6>
        <nut-textbox > </nut-textbox>
        <h6>自定义高度:100px</h6>
        <nut-textbox :txtAreaH="100" :maxNum="300"></nut-textbox>

        <h6>自定义提示语</h6>
        <nut-textbox :placeText="'请填写详细情况请填写详细情况'"></nut-textbox>
        

        <h6>自定义字数限制</h6>
        <nut-textbox :maxNum="100"></nut-textbox>
        

        <h6>限制字数不可超出</h6>
        <nut-textbox :switchMax="true" :maxNum="10" :txtAreaH="100" textBgColor="#efefef"></nut-textbox>
        

        <h6>字数超出报错</h6>
        <nut-textbox :maxNum="10" :txtAreaH="100"  @errorFunc="overLength" ></nut-textbox>
        

        <h6>自定义文本框背景色</h6>
        <nut-textbox :switchMax="true" :maxNum="10" :txtAreaH="100" textBgColor="#feefef"></nut-textbox>

        <h6>不显示字数限制</h6>
        <nut-textbox :limitShow="false" :maxNum="10" ></nut-textbox>
       
        <h6>输入回调返回文字</h6>
        <nut-textbox  :maxNum="10" txtAreaH="100" @inputFunc="inputText" ></nut-textbox>
    </div>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
    methods:{
        overLength(){
            alert("字数超出");
        },
        inputText(val){
           alert(val);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>