<template>
  <div class="demo-list">    
     <nut-cell>
      <span slot="title">
         <h2>radio 全局设置</h2>
          输出结果类型选择 :
     </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">
        <radio-group 
            :list="resloutType"
            :name="'resloutType'"
            :styleType="'radio'"
            :effect-key = "'value'"
            :effect-text="'name'"
            :checkedIndex="0"    
            :reslout-attr="'value'"   
            v-model="resloutdemo1"                 
          />
       </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">
          禁用：可以传数字、数组、字符串all/no、布尔true/false， 
          <br>
          注意：匹配结果为 false 为不禁用
          <br>
          0,1,2 代表数组
          <br>
          <nut-textinput 
              v-model="disableVal"
              label="可以输入下上面的类型看下效果："
              placeholder="请输入内容"
              :clearBtn="true"
              :disabled="false"
          />
     </span>
    </nut-cell>
    <nut-cell>
      <span slot="title">
    输入结果 {{radioDisable}}
     </span>
    </nut-cell>
    <h4>1. styleType= "radio" 基本样式输出属性为 {{resloutdemo1}} 的值</h4>
    <nut-cell>
      <span slot="title">
        <radio-group 
            :list="labelList"
            :name="'test0'"
            :styleType="'radio'"
            :effect-key = "'value'"
            :effect-text="'text'"            
            :reslout-attr="resloutdemo1"  
            :disabled-value="radioDisable" 
            v-model="labelReslut0"                 
          />
      </span>
    </nut-cell>
    <nut-cell>
        <span slot="title"> 选择结果 {{resloutdemo1}}: {{labelReslut0}}</span>
    </nut-cell>   
    <h4>2. styleType= "label" 按钮单选组输出属性为 {{resloutdemo1}} 的值</h4>
    <nut-cell>
        <span slot="title">        
          <radio-group 
            :list="labelList"
            :name="'test'"
            :styleType="'label'"
            :effect-key = "'value'"
            :effect-text="'text'"
            :checkedIndex="1"    
            :disabled-value="radioDisable" 
            :reslout-attr="resloutdemo1"   
            v-model="labelReslut"                 
          />
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title"> 选择结果 {{resloutdemo1}}: {{labelReslut}}</span>
      </nut-cell>
      <h4>3. styleType= "list" 列表单选组输出属性为 {{resloutdemo1}} 的值</h4>      
      <nut-cell>
        <span slot="title">        
          <radio-group 
            :list="labelList"
            :style-type="'list'"
            :name="'test3'"
            :effect-key = "'value'"
            :effect-text="'text'"
            :reslout-attr="resloutdemo1"  
            :checkedIndex="0" 
            :disabled-value="radioDisable"   
            v-model="labelReslut2"                 
          />
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title"> 选择结果 {{resloutdemo1}}: {{labelReslut2}}</span>
      </nut-cell>
  </div>
</template>

<script>
import group from './index.vue';
export default {
  data() {
    return {      
      labelList:[
        {
          name:'test',
          value:1,
          text:'亚瑟'
        },
        {
          name:'test',
          value:2,
          text:'廉颇'
        },
        {
          name:'test',
          value:3,
          text:'东皇太一'
        },
        {
          name:'test',
          value:4,
          text:'吕布'
        },
        {
          name:'test',
          value:5,
          text:'黑切'
        },
        {
          name:'test',
          value:6,
          text:'冰心'
        }
      ],
      labelReslut0:"",
      labelReslut:"",
      labelReslut2:"",
      resloutType:[
        {
          value:'value',
          name:'value'
        },
        {
          value:'text',
          name:'text'
        }
      ],
      resloutdemo1:"",
      disableVal:"false",
      radioDisable:false,
    };
  },  
  components:{
    'radio-group':group
  },
  watch:{
    disableVal(val){
      if(!isNaN(val)){
        this.radioDisable = parseInt(val)
      }else{
        if(val.split(',').length>1){          
          this.radioDisable = val.split(',').map(item=>{            
            return !isNaN(item)?parseInt(item):''
          })          
        }else if(val === 'true'){
          this.radioDisable = true;
        }else if(val === 'false'){
          this.radioDisable = false;
        }else{
          this.radioDisable = val;
        }
      }
    }
  }
};
</script>

<style lang="scss">
.nut-radio.my-radio {
	input:checked {
		background-image: radial-gradient(circle, #fff 0%, #fff 50%, $primary-color 60%);
		background-size: 50% 50%;
		border: none;
	}
}
</style>
