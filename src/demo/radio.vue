<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <!-- DEMO区域 -->
        <!-- <nut-switch :height="30" :width="60" @switch-on="switchOn" @switch-off="switchOff"></nut-switch> -->
        <h5>示例</h5>
        <p>默认用法</p>
        <nut-radio></nut-radio>
        <p>点击触发回调</p>
        <nut-radio @input-check="inputCheck"></nut-radio>
        <p>禁用选项</p>
        <nut-radio :disabled="true"></nut-radio>
        <nut-radio></nut-radio>
        
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    data(){
        return{            
        }
    },
    components: {
    },
    methods:{
        inputCheck(){
            alert('checked');
            console.log(event.target.checked);
        }
    }
}
</script>

<style>

</style>
