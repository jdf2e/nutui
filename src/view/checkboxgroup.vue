<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="复选按钮组。" 
        :showQrCode="true"></nut-docheader>
        
        <h5>示例</h5>
        <h6>默认用法</h6>
        <nut-checkboxgroup :data="data1"></nut-checkboxgroup>
        <nut-codebox :code="demo1"></nut-codebox>
        <nut-codebox :code="demo11"></nut-codebox>
        <!-- <pre><code v-highlight v-text="demo1"></code></pre> -->
        <h6>回调事件</h6>
        <nut-checkboxgroup :data="data2" @change="checkboxgroupChange"></nut-checkboxgroup>
        <nut-codebox :code="demo2"></nut-codebox>        
        <nut-codebox :code="demo22"></nut-codebox>        
        <!-- <pre><code v-highlight v-text="demo2"></code></pre> -->
        <h6>禁用选项</h6>
        <nut-checkboxgroup :inline="true" :data="data3"></nut-checkboxgroup>
        <nut-codebox :code="demo3"></nut-codebox>        
        <nut-codebox :code="demo33"></nut-codebox>        
        <nut-codebox :code="demo333"></nut-codebox>        
        <!-- <pre><code v-highlight v-text="demo3"></code></pre> -->
        
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
              <td>data</td>
              <td>数据源，对象数组(必传)</td>
              <td>Array</td>
              <td>[]</td>
              <td></td>
            </tr>
            <tr>
              <td>inline</td>
              <td>是否在一行展示</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
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
              <td>change</td>
              <td>选择时触发回调函数change(item,index,event)</td>
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
            demo1:`<nut-checkboxgroup :data="data1"></nut-checkboxgroup>`,
            demo11:`export default {
    data(){
        return{
            data1:[
                {id:1,name:'test1',value:1},
                {id:2,name:'test1',value:2},
                {id:3,name:'test1',value:3},
                {id:4,name:'test1',value:4},
                {id:5,name:'test1',value:5}
            ]
        }
    }
}`,
            demo2:`<nut-checkboxgroup 
:data="data2" 
@change="test1">
</nut-checkboxgroup>`,
            demo22:`export default {
    data(){
        return{
            data2:[
                {id:10,name:'test',value:'是',label:'是',checked:true},
                {id:12,name:'test',value:'否',label:'否',checked:false},
            ]
        }
    },
    methods:{
        test1(item){
            alert(item.value+'checked:'+event.target.checked);
        }
    }
}`,
            demo3:`<nut-checkboxgroup 
:data="data3" 
@change="change">
</nut-checkboxgroup>`,
            demo33:`export default {
    data(){
        return{
            data3:[
                {id:11,name:'test2',value:'足球',},
                {id:22,name:'test2',value:'篮球',checked:false},
                {id:33,name:'test2',value:'羽毛球',checked:false},
                {id:44,name:'test2',value:'乒乓球',disabled:true,checked:false},
                {id:55,name:'test2',value:'排球',checked:true}
            ]
        }
    },
    methods:{
        change(item,index){
            console.log(index,event.target.value,event.target.checked);
        }
    }
}`,         demo333:`.nut-checkboxgroup .checkboxlist{
    display: inline-block;
    width: 100px;
}`
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
