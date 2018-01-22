<template>
    <div>
        <h1>Handle</h1>
        <p>项目中用到过相关处理处理的方法这个是vue的过滤器，也可以单独用里面的函数过滤。</p>       
        <!-- DEMO代码 -->
        <pre>
          <code v-highlight>//直接用
var b=[1,7,9,3,4,5,6];
nut_handle(b).min()//数组最小值
//当指令用
&lt;span
  message2 | nut_handle({
    name:'like',
    option:{
      key:'name',
      value:'l',
      replaceStr:'李'
      }
  }) 
&gt;
&lt;/span&gt;</code>
        </pre>
        <h5>Options</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>函数</th>
              <th>说明</th>
              <th>参数类型</th>
              <th>默认值</th>
              <th>可选值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>isJson</td>
              <td>用来判断是不是json 对象或者json 的字符串</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>min</td>
              <td>返回最小值</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>max</td>
              <td>返回最大值</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>         
            <tr>
              <td>arySortMin</td>
              <td>数组排列从小到大</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>           
            <tr>
              <td>arySortMax</td>
              <td>数组排序从大到小</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>objSortMin</td>
              <td>json数组对象关键字从小到大排序</td>
              <td>string</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>objSortMax</td>
              <td>json数组对象关键字从大到小排序</td>
              <td>string</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>arycutRepeat</td>
              <td>数组去重</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>objCutRepeat</td>
              <td>json数组对象根据指定属性名去重</td>
              <td>string</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>find</td>
              <td>在json数组中找到指定的对象所在数组的属性</td>
              <td>string</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>like</td>
              <td>模糊查询，可以配置查询关键字，常用来做搜索及高亮关键词</td>
              <td>obj</td>
              <td>-</td>
              <td>obj.key属性名<br>
                  obj.value模糊查询的值<br>
                  obj.replaceStr如何设置可以替换匹配的字符
                  obj.type true返回对象，不写返回数组<br>
              </td>
            </tr>
            <tr>
              <td>clone</td>
              <td>对象的克隆</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div>例子1：{{message}}</div>
        <br>
        <span >最小值：{{message | 
          nut_handle({
            name:'min'
          })  
        }}</span>
        <br>
        <span>去重：{{message | 
          nut_handle({
            name:'arycutRepeat'
          })
        }}</span>
        <div>例子2：{{message2}}</div>
        <br>
        <span>模糊匹配{{message2 | nut_handle({
          name:'like',
          option:{
            key:'name',
            value:'l',
            replaceStr:'李'
           }
        })}}</span>
  </div>
  
   <!--  //-->

</template>
      
<script>
 import D_ from '../package/handle/index.js';
 export default {
    data(){
        return{
        message:[1,2,2,3,3,4,6,7],
        message2: [{
          name:"lilinsen",
          value:1
        },{
          name:"yanglei",
          value:1
        },{
          name:"wangnan",
          value:1
        },{
          name:"shoujun",
          value:1
        },{
          name:"文文",
          value:1
        },{
          name:"曹晋",
          value:1
        },
        ]
        }
    },
    methods:{
    }
}
var a = [{
  name:'aa',
  key:'test',
  value:'1'
},{
  name:'aa',
  key:'test',
  value:'2'
},{
  name:'aa',
  key:'test',
  value:'3'
},{
  name:'aa',
  key:'test',
  value:'4'
},{
  name:'aa',
  key:'test',
  value:'5'
}];
var b=[1,7,9,3,4,5,6];
var c = ['1','a','b','c'];
var d = [['1','2','3'],['a','b','c']];
var g = [{
  pirce:5
},
{
  pirce:2
},
{
  pirce:4
},
{
  pirce:3
},
{
  pirce:1
}]
var h=[1,1,2,3,3,2]
var i =[{
  name:'xiaoming',
  value:1
},{
  name:'xiaoming',
  value:1
},{
  name:'xiaoming',
  value:1
},{
  name:'xiaoming1',
  value:1
},{
  name:'xiaoming2',
  value:1
}]
/* console.log(D_(i).objCutRepeat('value'),'json数组对象去重')
 console.log(D_(a).find('3'),D_(b).find(1),D_(c).find('1'),D_(d).find('1'),"数组或对象找到指定的值返回位置和和所在的对象或这个值")
 console.log(D_(b).min(),'数组最小值')
 console.log(D_(b).max(),'数组最大值')
 console.log(D_(b).arySortMin(),'数组排序小大')
 console.log(D_(b).arySortMax(),'数组排序大小')
 console.log(D_(g).objSortMin('pirce'),'对象按照指定的参数排序小大')
 console.log(D_(g).objSortMax('pirce'),'对象按照指定的参数排序大小')
console.log(D_(h).arycutRepeat(),'数组取重') */
</script>

<style>

</style>
