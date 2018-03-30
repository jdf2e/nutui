<template>
    <div>
        <h1>Checkbox</h1>
        <p>复选框</p>
        <!-- DEMO区域 -->
        <!-- <nut-switch :height="30" :width="60" @switch-on="switchOn" @switch-off="switchOff"></nut-switch> -->
        <!-- DEMO代码 -->
        <h5>示例</h5>
        <p>默认用法</p>
        <nut-checkbox></nut-checkbox>

        <p>点击触发事件</p>
        <nut-checkbox :checked="checked" @input-check="inputCheck"></nut-checkbox>
        <p>禁用选项</p>
        <nut-checkbox :name="'test2'" :checked="checked2" :disabled="true"></nut-checkbox>
        <nut-checkbox :name="'test2'" :checked="checked2"></nut-checkbox>

    </div>
</template>

<script>
export default {
    data(){
        return{
             checked:false,
             checked2:false
        }
    },
    methods:{
        inputCheck(){
            this.checked = !this.checked
            alert(this.checked);
            console.log(event.target.checked);
        }
    }
}
</script>

<style lang="scss">
.nut-checkbox{
    display:inline-block;
    margin-bottom:0;
}
</style>
