<template>
  <div class="demo-list">
    <h4>1. 基本样式</h4>
    <nut-cell>
      <span slot="title">
        <radio-group 
            :list="labelList"
            :name="'test0'"
            :styleType="'radio'"
            :effect-key = "'value'"
            :effect-text="'text'"
            :checkedIndex="1"    
            :reslout-attr="'value'"   
            v-model="labelReslut0"                 
          />
      </span>
    </nut-cell>
    <nut-cell>
        <span slot="title"> 选择结果 value: {{labelReslut0}}</span>
      </nut-cell>
    <h4>2. 按钮单选组输出属性为 value 的值</h4>
    <nut-cell>
        <span slot="title">        
          <radio-group 
            :list="labelList"
            :name="'test'"
            :styleType="'label'"
            :effect-key = "'value'"
            :effect-text="'text'"
            :checkedIndex="1"    
            :reslout-attr="'value'"   
            v-model="labelReslut"                 
          />
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title"> 选择结果 value: {{labelReslut}}</span>
      </nut-cell>
      <h4>3. 按钮单选组输出属性为 text 的值</h4>
      <nut-cell>
        <span slot="title">        
          <radio-group 
            :list="labelList"
            :styleType="'label'"
            :name="'test2'"
            :effect-key = "'value'"
            :effect-text="'text'"
            :checkedIndex="0"    
            :reslout-attr="'text'"   
            v-model="labelReslut2"                 
          />
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title"> 选择结果 text: {{labelReslut2}}</span>
      </nut-cell>
      <h4>4. 列表单选组输出属性为 text 的值</h4>
      <nut-cell>
        <span slot="title">        
          <radio-group 
            :list="labelList"
            :style-type="'list'"
            :name="'test3'"
            :effect-key = "'value'"
            :effect-text="'text'"
            :reslout-attr="'text'"  
            :checkedIndex="0"   
            v-model="labelReslut3"                 
          />
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title"> 选择结果 text: {{labelReslut3}}</span>
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
      labelReslut3:""   
    };
  },
  components:{
    'radio-group':group
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
