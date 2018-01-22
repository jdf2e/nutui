<template>
    <div>
        <h1>RadioGroup</h1>
        <p>单项选择数组，多用于单选题</p>
        
        <h5>示例</h5>
        <p>默认用法</p>
        <nut-radiogroup :radiosData="data1"></nut-radiogroup>
        <pre><code v-highlight v-text="demo1"></code></pre>
        <p>回调事件</p>
        <nut-radiogroup :radiosData="data2" @radio-check="test1"></nut-radiogroup>
        <pre><code v-highlight v-text="demo2"></code></pre>
        <p>禁用选项</p>
        <nut-radiogroup :className="'radiolist'" :radiosData="data3" @radio-check="change"></nut-radiogroup>
        <pre><code v-highlight v-text="demo3"></code></pre>
        
        <h5>Props</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
              <th>可选值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>radiosData</td>
              <td>单选数组的数据，此项为必填项,渲染整个单选组件</td>
              <td>Array</td>
              <td>''</td>
              <td>required</td>
            </tr>
            <tr>
              <td>className</td>
              <td>可自定义单选组样式名</td>
              <td>String</td>
              <td>''</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        </div>

        
        <h5>Events</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>radio-check</td>
              <td>选择时触发回调函数radio-check(item,index,event)</td>
              <td>item,index,event</td>
            </tr>
          </tbody>
        </table>
        </div>
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
            demo1:`<nut-radiogroup :radiosData="data1"></nut-radiogroup>
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
            demo2:`<nut-radiogroup 
:radiosData="data2" 
@radio-check="test1">
</nut-radiogroup>
methods:{
    data(){
        return{
            data2:[
                {id:10,name:'test',value:'是'},
                {id:12,name:'test',value:'否'},
            ],
        }
    },
    test1(item){
        alert(item.value+'checked');
    },
}`,
            demo3:`<nut-radiogroup 
:className="'radiolist'" 
:radiosData="data3" 
@radio-check="change">
</nut-radiogroup>
methods:{
    data(){
        return{
            data3:[
                {id:11,name:'test2',value:'足球'},
                {id:22,name:'test2',value:'篮球'},
                {id:33,name:'test2',value:'羽毛球'},
                {id:44,name:'test2',value:'乒乓球',disabled:true},
                {id:55,name:'test2',value:'排球'}
            ],
        }
    },
}

<style>
.nut-radiogroup .radiolist{
    display: inline-block;
    width: 100px;
}
</style>`,     
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
