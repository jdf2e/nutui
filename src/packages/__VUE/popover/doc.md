# Popover 气泡弹出框

### 介绍

点击或在元素上悬停鼠标，弹出气泡卡片浮层。

### 安装

```javascript

import { createApp } from 'vue';
import { Popover } from '@nutui/nutui';

const app = createApp();
app.use(Popover);
```


### 基础用法

Popover 支持明朗和暗黑两种风格，默认为明朗风格，将 `theme` 属性设置为 `dark` 可切换为暗黑风格。

:::demo
```html
<template>
  <nut-row type="flex">
    <nut-col :span="8" style='margin-left:20px'>
      <nut-popover v-model:visible="visible.lightTheme" :list="iconItemList" location="bottom-start" @choose="chooseItem">
        <template #reference>
          <nut-button type="primary" shape="square">明朗风格</nut-button>
        </template>
      </nut-popover>
    </nut-col>
    <nut-col :span="8" style='margin-left:20px'>
      <nut-popover v-model:visible="visible.darkTheme" theme="dark" location="bottom-start" :list="iconItemList">
        <template #reference>
          <nut-button type="primary" shape="square">暗黑风格</nut-button>
        </template>
      </nut-popover>
    </nut-col>
  </nut-row>
</template>
<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const visible = ref({
      darkTheme: false,
      lightTheme: false,
    });
    const iconItemList = reactive([
      { name: '选项一' },
      { name: '选项二' },
      { name: '选项三' }
    ]);
    return {
        visible,
        iconItemList,
      };
    }
}
</script>

<style>
  .nut-popover-content {
    width: 120px;
  }
</style>
```
:::

### 选项配置

在 list 数组中，可以通过 disabled 字段来禁用某个选项。

:::demo
```html
<template>
  <nut-row type="flex">
     <nut-col :span="8" style='margin-left:20px'>
        <nut-popover v-model:visible="visible.showIcon" theme="dark" :list="itemList">
          <template #reference>
            <nut-button type="primary" shape="square">展示图标</nut-button>
          </template>
        </nut-popover>
      </nut-col>
      <nut-col :span="8" style='margin-left:20px'>
        <nut-popover v-model:visible="visible.disableAction" :list="itemListDisabled" location="right">
          <template #reference>
            <nut-button type="primary" shape="square">禁用选项</nut-button>
          </template>
        </nut-popover>
      </nut-col>
    </nut-row>
</template>

<script>
import { reactive, ref,h } from 'vue';
import { Location,Cart2, My2 } from '@nutui/icons-vue';
export default {
  setup() {
    const visible = ref({
      showIcon: false,
      disableAction: false,
    });

    const itemList = reactive([
      {
        name: 'option1',
        icon: ()=>{
          return h(My2,{
            width:'14px',
            color:'rgba(250, 44, 25, 1)'
          })
        }
      },
      {
        name: 'option2',
        icon: Cart2
      },
      {
        name: 'option3',
        icon: Location
      }
    ]);

    const itemListDisabled = reactive([
      {
        name: '选项一',
        disabled: true
      },{
        name: '选项二',
        disabled: true
      },{
        name: '选项三'
      }
    ]);

    return {
        itemList,
        visible,
        itemListDisabled,
      };
    }
}
</script>

<style>
.nut-popover-content {
    width: 120px;
}
.nut-icon{
  width:14px
}
</style>
```
:::


### 自定义内容

在名为 content 插槽中自定义内容。

:::demo
```html
<template>
  <nut-popover v-model:visible="visible.customized" location="top-start" custom-class="customClass">
     <template #reference>
       <nut-button type="primary" shape="square">自定义内容</nut-button>
     </template>

     <template #content>
       <div class="self-content">
         <div class="self-content-item" v-for="(item, index) in selfContent" :key="index">
           <Service></Service>
           <div class="self-content-desc">{{ item.desc }}</div>
         </div>
       </div>
     </template>
   </nut-popover>
</template>

<script>
import { reactive, ref } from 'vue';
import { Service } from '@nutui/icons-vue';
export default {
  components: { Service },
 setup() {
   const visible = ref({
     customized: false,
   });
   const selfContent = reactive([
     {
       desc: 'option1'
     },
     {
       desc: 'option2'
     },
     {
       desc: 'option3'
     },
     {
       desc: 'option4'
     },
     {
       desc: 'option5'
     },
     {
       desc: 'option6'
     }
   ]);

   return {
     visible,
     selfContent
   };
 }
}
</script>

<style lang="scss">
#app{
  padding-top: 200px;
}
.self-content {
 width: 195px;
 display: flex;
 flex-wrap: wrap;
 &-item {
   margin-top: 10px;
   margin-bottom: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
 }
 &-desc {
   margin-top: 5px;
   width: 60px;
   font-size: 10px;
   text-align: center;
 }
}
</style>
```
:::

### 位置自定义

通过 location 属性来控制气泡的弹出位置。可选值
```
top           # 顶部中间位置
left          # 左侧中间位置
right         # 右侧中间位置
bottom        # 底部中间位置
top-start     # 顶部左侧位置
top-end       # 顶部右侧位置 
left-start    # 左侧上方位置
left-end      # 左侧下方位置
right-start   # 右侧上方位置
right-end     # 右侧下方位置
bottom-start  # 底部左侧位置
bottom-end    # 底部右侧位置
```


:::demo
```html
<template>
  <nut-cell title="点击查看更多方向" @click="handlePicker"></nut-cell>
  <nut-popup position="bottom" v-model:visible="showPicker">
      <nut-picker
        :columns="columns"
        title=""
        @change="change"
        :swipe-duration="500"
        @confirm="closePicker"
        @close="closePicker"
      >
        <template #top>
          <div class="brickBox">
            <div class="brick" id="pickerTarget"></div>
          </div>
        </template>
      </nut-picker>
    </nut-popup>

    <nut-popover
      v-model:visible="customPositon"
      targetId="pickerTarget"
      :location="curPostion"
      theme="dark"
      :list="positionList"
    >
    </nut-popover>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
export default {
  setup() {
    const showPicker = ref(false);
    const customPositon = ref(false);
    const curPostion = ref('top');
    const positionList = reactive([
      {
        name: 'option1'
      },
      {
        name: 'option2'
      }
    ]);
    const closePicker = () => {
      customPositon.value = false;
      showPicker.value = false;
    };

    const change = ({ selectedValue }) => {
      curPostion.value = selectedValue[0];
      if (showPicker.value) customPositon.value = true;
    };

    const handlePicker = () => {
      showPicker.value= true;
      setTimeout(() => {
        customPositon.value = true;
      }, 0);
    };

     const columns = ref([
      { text: 'top', value: 'top' },
      { text: 'top-start', value: 'top-start' },
      { text: 'top-end', value: 'top-end' },
      { text: 'right', value: 'right' },
      { text: 'right-start', value: 'right-start' },
      { text: 'right-end', value: 'right-end' },
      { text: 'bottom', value: 'bottom' },
      { text: 'bottom-start', value: 'bottom-start' },
      { text: 'bottom-end', value: 'bottom-end' },
      { text: 'left', value: 'left' },
      { text: 'left-start', value: 'left-start' },
      { text: 'left-end', value: 'left-end' }
    ]);

      return {
        positionList,
        showPicker,
        customPositon,
        curPostion,
        closePicker,
        change,
        handlePicker,
        columns
      };
    }
};
</script>

<style lang="scss">

.nut-popover-content {
    width: 120px;
}

.brickBox {
  margin: 80px 0;
  display: flex;
  justify-content: center;
  .brick {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #fa2c19 0%, #fa6419 100%);
    border-radius: 10px;
  }
}
</style>
```
:::

### 自定义目标元素

Popover 提供了 `targetId` 属性，用于匹配目标元素，在目标元素上添加对应的 id 值即可

:::demo
```html
<template>
  <nut-button type="primary" shape="square" id="popid" @click="clickCustomHandle">自定义目标元素</nut-button>
    <nut-popover v-model:visible="visible.customTarget" targetId="popid" :list="itemList" location="top-start"></nut-popover>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const visible = reactive({
      customTarget:false
    });

    const itemList = reactive([
      {name: 'option1'},
      {name: 'option2'},
      {name: 'option3'}
    ]);

    const clickCustomHandle = () => {
      visible.customTarget = !visible.customTarget;
    };

    return {
        itemList,
        visible,
        clickCustomHandle,
      };
    }
}
</script>
<style>
#app{
  margin-top:300px
}
.nut-popover-content {
  width: 120px;
}
</style>
```
:::

### 自定义颜色

Popopver 提供了 2 种主题色，同样可以通过 `bgColor` 属性改变背景色

:::demo
```html
<template>
  <nut-popover v-model:visible="visible.customColor" :list="itemList" location="right-start" bgColor="#f00" theme="dark">
      <template #reference>
        <nut-button type="primary" shape="square" >自定义颜色</nut-button>
      </template>
    </nut-popover>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const visible = reactive({
      customColor:false
    });

    const itemList = reactive([
      {name: 'option1'},
      {name: 'option2'},
      {name: 'option3'}
    ]);

    return {
        itemList,
        visible
      };
    }
}

</script>
<style>
#app{
  margin-top:300px
}
.nut-popover-content {
  width: 120px;
}
</style>
```
:::

## API
### Props  

| 参数            | 说明                            | 类型     | 默认值      |
|----------------|---------------------------------|---------|------------|
| list          | 选项列表                          | List[]   | `[]`       |
| visible      | 是否展示气泡弹出层                 | boolean  | `false`     |
| theme          | 主题风格，可选值为 `dark`            | string   | `light`   |
| location       | 弹出位置  | string   | `bottom`  |
| offset        | 出现位置的偏移量  | number \| string   | `[0, 12]`  |
| show-arrow        | 是否显示小箭头  | boolean  | `true`  |
| custom-class        | 自定义 class 值  | string  | `''`  |
| duration        | 动画时长，单位秒  |  number \| string  | `0.3`  |
| overlay        | 是否显示遮罩层  | boolean  | `false`  |
| overlay-class        | 自定义遮罩层类名 | string  | `''`  |
| overlay-style        | 自定义遮罩层样式  | string  | `''`  |
| close-on-click-overlay        | 是否在点击遮罩层后关闭菜单  | boolean  | `true`  |
| close-on-click-action        | 是否在点击选项后关闭  | boolean  | `true` |
| close-on-click-outside        | 是否在点击外部元素后关闭菜单 | boolean  | `true`  |
| bg-color        | 自定义背景色 | string  | `-`  |
| target-id        | 自定义目标元素 id | string  | `-`  |
| arrow-offset        | 小箭头的偏移量 | number  | `0`  |

### List 数据结构  

List 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名            | 说明                 | 类型      | 默认值  |
|----------------|----------------------|----------|--------|
| name           | 选项文字               | string   | `-`      |
| icon           | @nutui/icons-vue 图标       | VNode   | `-`      |
| disabled       | 是否为禁用状态          | boolean  | `false`  | 
| className       | 为对应选项添加额外的类名          | string \| Array \| object  | `-`  | 


### Slots

| 名称    | 说明         |
|---------|--------------|
| content | 自定义气泡组件菜单内容 |
| reference | 触发 Popover 显示的元素内容 |

### Events

| 事件名    | 说明         |
|---------|--------------|
| choose | 点击选项时触发 |
| open   | 打开菜单时触发 |
| close  | 关闭菜单时触发 |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                    | 默认值                     |
| --------------------------------------- | -------------------------- |
|  --nut-popover-white-background-color| _rgba(255, 255, 255, 1)_  |
|  --nut-popover-dark-background-color| _rgba(75, 76, 77, 1)_  |
|  --nut-popover-border-bottom-color| _rgba(229, 229, 229, 1)_  |
|  --nut-popover-primary-text-color| _rgba(51, 51, 51, 1)_  |
|  --nut-popover-disable-color| _rgba(154, 155, 157, 1)_  |
|  --nut-popover-menu-item-padding| _8px 0_  |
|  --nut-popover-menu-item-margin| _0 8px_  |
|  --nut-popover-menu-name-line-height| _normal_  |