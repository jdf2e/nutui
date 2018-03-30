<template>
    <div>
        <h1>CheckboxGroup</h1>
        <p>复选按钮组，多用于多项选择</p>
        
        <p>默认用法</p>
        <nut-checkboxgroup :data="data1"></nut-checkboxgroup>

        <p>回调事件</p>
        <nut-checkboxgroup :data="data2" @change="checkboxgroupChange"></nut-checkboxgroup>

        <p>禁用选项</p>
        <nut-checkboxgroup :inline="true" :data="data3"></nut-checkboxgroup>
        
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    data(){
        return{
            data1:[
                {id:1,name:'test1',value:1},
                {id:2,name:'test1',value:2},
                {id:3,name:'test1',value:3},
                {id:4,name:'test1',value:4},
                {id:5,name:'test1',value:5}
            ],
            data2:[
                {id:10,name:'test',value:'是',label:'是',checked:true},
                {id:12,name:'test',value:'否',label:'否',checked:false},
            ],
            data3:[
                {id:11,name:'test2',value:'足球',},
                {id:22,name:'test2',value:'篮球',checked:false},
                {id:33,name:'test2',value:'羽毛球',checked:false},
                {id:44,name:'test2',value:'乒乓球',disabled:true,checked:false},
                {id:55,name:'test2',value:'排球',checked:true}
            ],
            demo1:`<nut-checkboxgroup :data="data1"></nut-checkboxgroup>
data(){
    return{
        data1:[
            {id:1,name:'test1',value:1},
            {id:2,name:'test1',value:2},
            {id:3,name:'test1',value:3},
            {id:4,name:'test1',value:4},
            {id:5,name:'test1',value:5}
        ],
    }
},`,
            demo2:`<nut-checkboxgroup 
:data="data2" 
@change="test1">
</nut-checkboxgroup>
data(){
  return{
      data2:[
          {id:10,name:'test',value:'是',label:'是',checked:true},
          {id:12,name:'test',value:'否',label:'否',checked:false},
      ],
  }
},
methods:{
    
    test1(item){
        alert(item.value+'checked:'+event.target.checked);
    },
}`,
            demo3:`<nut-checkboxgroup 
:data="data3" 
@change="change">
</nut-checkboxgroup>
data(){
    return{
        data3:[
            {id:11,name:'test2',value:'足球',},
            {id:22,name:'test2',value:'篮球',checked:false},
            {id:33,name:'test2',value:'羽毛球',checked:false},
            {id:44,name:'test2',value:'乒乓球',disabled:true,checked:false},
            {id:55,name:'test2',value:'排球',checked:true}
        ],
    }
},
methods:{
  change(item,index){
      console.log(index,event.target.value,event.target.checked,);
  }
}

<style>
.nut-checkboxgroup .checkboxlist{
    display: inline-block;
    width: 100px;
}
</style>`,     
        }
    },
    components: {
    },
    methods:{
        checkboxgroupChange(data,item,index,event){
            alert(item.label+'： '+event.target.checked);
        }
    }
}
</script>

<style>
.nut-checkboxgroup .checkboxlist{
    display: inline-block;
    width: 100px;
}
</style>
