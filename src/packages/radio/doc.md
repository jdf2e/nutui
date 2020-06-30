# Radio 单选按钮

所有 demo 展示的基本数据为

```javascript
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
      ]
    }
  }
};
```

## 1. 基本用法

默认的样式是 radio 

```html
<nut-cell>
  <span slot="title">
    <radio-group 
        :list="labelList"  
        :name="'test0'" 
        :effect-key = "'value'"
        :effect-text="'text'"
        v-model="labelReslut0"
      />
    </span>
</nut-cell>
<nut-cell>
    <span slot="title"> 选择结果 {{labelReslut0}}</span>
</nut-cell>   
```

## 2. label 类型的单选，默认选中第一个，输出结果为 text 值

```html
<nut-cell>
        <span slot="title">        
          <radio-group 
            :list="labelList"
            :name="'test'"
            :styleType="'label'"
            :effect-key = "'value'"
            :effect-text="'text'"
            :checkedIndex="1"   
            :reslout-attr="'text'"   
            v-model="labelReslut"  
          />
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title"> 选择结果 {{labelReslut}}</span>
      </nut-cell>
```

## 3. list 类型的单选 输出结果为 text 默认选中第一个，数组的第三个不可选

```html
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
      :disabled-value="2"   
      v-model="labelReslut2"                 
    />
  </span>
</nut-cell>
<nut-cell>
  <span slot="title"> 选择结果 {{resloutdemo1}}: {{labelReslut2}}</span>
</nut-cell>
```

## Prop



| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 选中结果动态输出 | 任意类型 | -
| styleType | 单选按钮的样式 | String | 'radio'
| list | 单选按钮依赖数据,最小长度为1，长度为0或其它类型不展示 | Array | []
| checkedIndex | 默认选中 | Number | -1  没有默认选中
| effectKey | radio 的 value 值获取数据字段 | String | - 必填
| resloutAttr | radio 对用户展示值获取数据字段 | String | - 必填
|name | radio 标签的名字，每一组都要不一样 | String| - 必填
|disabledValue | 禁止选择的标签项 | String, Number, Boolean,Array | -