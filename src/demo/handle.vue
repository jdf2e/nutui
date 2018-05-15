<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <!-- DEMO区域 -->
        <!-- <nut-switch :height="30" :width="60" @switch-on="switchOn" @switch-off="switchOff"></nut-switch> -->
        
        <!-- DEMO代码 -->
        

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
/* var a = [{
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
console.log(D_(i).objCutRepeat('value'),'json数组对象去重')
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
