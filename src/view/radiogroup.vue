<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="单选按钮组。" 
        :showQrCode="true"></nut-docheader>
        
        <h5>示例</h5>
        <h6>默认用法</h6>
        <nut-radiogroup :data="data1"></nut-radiogroup>
        <nut-codebox :code="demo1"></nut-codebox>        
        <nut-codebox :code="demo11"></nut-codebox>        
        <!-- <pre><code v-highlight v-text="demo1"></code></pre> -->
        <h6>回调事件</h6>
        <nut-radiogroup :data="data2" :inline="true" @radio-check="radioChecked"></nut-radiogroup>
        <nut-codebox :code="demo2"></nut-codebox>        
        <nut-codebox :code="demo22"></nut-codebox>        
        <!-- <pre><code v-highlight v-text="demo2"></code></pre> -->
        <h6>禁用选项</h6>
        <nut-radiogroup :className="'radiolist'" :data="data3" @radio-check="radioChecked2"></nut-radiogroup>
        <nut-codebox :code="demo3"></nut-codebox>
        <nut-codebox :code="demo33"></nut-codebox>
        
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
              <td>单选数组的数据，此项为必填项，渲染整个单选组件</td>
              <td>Array</td>
              <td>''</td>
              <td>checked属性值为true默认选中，disabled属性值为true禁用选项</td>
            </tr>
            <tr>
              <td>inline</td>
              <td>展示成一行</td>
              <td>Boolean</td>
              <td>false</td>
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
              <td>选择时触发回调函数</td>
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
                {id:10,name:'test',value:'是',checked:true},
                {id:12,name:'test',value:'否'},
            ],
            data3:[
                {id:11,name:'test2',value:'足球'},
                {id:22,name:'test2',value:'篮球',checked:true},
                {id:33,name:'test2',value:'羽毛球'},
                {id:44,name:'test2',value:'乒乓球',disabled:true},
                {id:55,name:'test2',value:'排球'}
            ],
            demo1:`<nut-radiogroup :data="data1"></nut-radiogroup>`,
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
            demo2:`<nut-radiogroup 
:data="data2" 
:inline="true"
@radio-check="radioChecked">
</nut-radiogroup>`,
            demo22:`export default {
    data(){
        return{
            data2:[
                {id:10,name:'test',value:'是',checked:true},
                {id:12,name:'test',value:'否'},
            ]
        }
    },
    methods:{
        radioChecked(item,index,event){
            alert(item.value);
        }
    }
}`,
            demo3:`<nut-radiogroup 
:className="'radiolist'" 
:data="data3" 
@radio-check="radioChecked2">
</nut-radiogroup>`,         
            demo33:`export default {
    data(){
        return{
            data3:[
                {id:11,name:'test2',value:'足球'},
                {id:22,name:'test2',value:'篮球',checked:true},
                {id:33,name:'test2',value:'羽毛球'},
                {id:44,name:'test2',value:'乒乓球',disabled:true},
                {id:55,name:'test2',value:'排球'}
            ]
        }
    },
    methods:{
        radioChecked2(item,index,event){
            console.log(item,index,event);
        }
    }
}`
        }
    },
    components: {
    },
    methods:{
        radioChecked(item,index,event){
            alert(item.value);
        },
        radioChecked2(item,index,event){
            console.log(item,index,event);
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
