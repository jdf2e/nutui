<template>
    <div>
        <h1>RadioGroup</h1>
        <p>单项选择数组，多用于单选题</p>
        
        <h5>示例</h5>
        <p>默认用法</p>
        <nut-radiogroup :radiosData="data1"></nut-radiogroup>
        
        <p>回调事件</p>
        <nut-radiogroup :radiosData="data2" @radio-check="test1"></nut-radiogroup>
        
        <p>禁用选项</p>
        <nut-radiogroup :className="'radiolist'" :radiosData="data3" @radio-check="change"></nut-radiogroup>
        
        
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    data(){
        return{
            data2:[
                {id:10,name:'test',value:'是'},
                {id:12,name:'test',value:'否'},
            ],
            data1:[
                {id:1,name:'test1',value:1},
                {id:2,name:'test1',value:2},
                {id:3,name:'test1',value:3},
                {id:4,name:'test1',value:4},
                {id:5,name:'test1',value:5}
            ],
            data3:[
                {id:11,name:'test2',value:'足球'},
                {id:22,name:'test2',value:'篮球'},
                {id:33,name:'test2',value:'羽毛球'},
                {id:44,name:'test2',value:'乒乓球',disabled:true},
                {id:55,name:'test2',value:'排球'}
            ],
        }
    },
    components: {
    },
    methods:{
        test1(item){
            alert(item.value+'checked');
        },
        change(item,index){
            console.log(index,event.target.name,event.target.checked,);
        }
    }
}
</script>

<style>
.nut-radiogroup .radiolist{
    display: inline-block;
    width: 100px;
}
</style>
