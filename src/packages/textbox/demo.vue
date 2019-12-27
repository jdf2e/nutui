<template>
    <div>
        <h5>示例</h5>
        <p>默认用法</p>
        <nut-textbox > </nut-textbox>
        <p>自定义高度:100px</p>
        <nut-textbox :txtAreaH="100" :maxNum="300"></nut-textbox>

        <p>自定义提示语</p>
        <nut-textbox :placeText="'请填写详细情况请填写详细情况'"></nut-textbox>
        

        <p>自定义字数限制</p>
        <nut-textbox :maxNum="100"></nut-textbox>
        

        <p>限制字数不可超出</p>
        <nut-textbox :switchMax="true" :maxNum="10" :txtAreaH="100" textBgColor="#efefef"></nut-textbox>
        

        <p>字数超出报错</p>
        <nut-textbox :maxNum="10" :txtAreaH="100"  @errorFunc="overLength" ></nut-textbox>
        

        <p>自定义文本框背景色</p>
        <nut-textbox :switchMax="true" :maxNum="10" :txtAreaH="100" textBgColor="#feefef"></nut-textbox>

        <p>不显示字数限制</p>
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