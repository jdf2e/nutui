# Popover

### Intro

Click or hover over the element to pop up the bubble card overlay.

### Install

```javascript

import { createApp } from 'vue';
import { Popover } from '@nutui/nutui';

const app = createApp();
app.use(Popover);
```


### Basic Usage

Popover supports both light and dark styles. The default is light style. Set the `theme` property to `dark` to switch to dark style.

:::demo
```html
<template>
  <nut-row type="flex">
    <nut-col :span="8" style='margin-left:20px'>
      <nut-popover v-model:visible="visible.lightTheme" :list="iconItemList" location="bottom-start" @choose="chooseItem">
        <template #reference>
          <nut-button type="primary" shape="square">Light</nut-button>
        </template>
      </nut-popover>
    </nut-col>
    <nut-col :span="8" style='margin-left:20px'>
      <nut-popover v-model:visible="visible.darkTheme" theme="dark" location="bottom-start" :list="iconItemList">
        <template #reference>
          <nut-button type="primary" shape="square">Dark</nut-button>
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
      { name: 'option1' },
      { name: 'option2' },
      { name: 'option3' }
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

### Option Configuration

In the list array, an option can be disabled via the `disabled` field.

:::demo
```html
<template>
  <nut-row type="flex">
     <nut-col :span="8" style='margin-left:20px'>
        <nut-popover v-model:visible="visible.showIcon" theme="dark" :list="itemList">
          <template #reference>
            <nut-button type="primary" shape="square">Show Icon</nut-button>
          </template>
        </nut-popover>
      </nut-col>
      <nut-col :span="8" style='margin-left:20px'>
        <nut-popover v-model:visible="visible.disableAction" :list="itemListDisabled" location="right">
          <template #reference>
            <nut-button type="primary" shape="square">Disabled</nut-button>
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
        name: 'option1',
        disabled: true
      },{
        name: 'option2',
        disabled: true
      },{
        name: 'option3'
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


### Custom Content

Customize the content in the slot named content.

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

### Placement

Use the location property to control where the bubble pops up. optional value

```
top           # Top middle 
left          # Left middle 
right         # Right middle 
bottom        # Bottom middle 
top-start     # Top left
top-end       # Top right 
left-start    # Left top
left-end      # Left bottom
right-start   # Right top
right-end     # Right bottom
bottom-start  # Bottom left
bottom-end    # Bottom right
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


### custom target 

Popover provides the 'targetId' attribute to match the target element by adding the corresponding id value to the target element

:::demo
```html
<template>
  <nut-button type="primary" shape="square" id="popid" @click="clickCustomHandle">custom target</nut-button>
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

### Custom Color

:::demo
```html
<template>
  <nut-popover v-model:visible="visible.customColor" :list="itemList" location="right-start" bgColor="#f00" theme="dark">
      <template #reference>
        <nut-button type="primary" shape="square" >Custom Color</nut-button>
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

| Attribute | Description | Type | Default |
|----------------|---------------------------------|---------|------------|
| list          | list of options                          | List[]   | `[]`        |
| visible      | whether to show                 | boolean  | `false`     |
| theme          | Theme style, can be set to `dark` `light`          | string   | `light`   |
| location       | pop-up location  | string   | `bottom`  |
| offset        | the offset of the occurrence position  | number \| string   | `[0, 12]`  |
| show-arrow        | whether to show small arrows  | boolean  | `true`  |
| custom-class        | custom class   | string  | `''`  |
| duration        | Transition duration，Unit second  |  number \| string  | `0.3`  |
| overlay        | Whether to show overlay  | boolean  | `false`  |
| overlay-class        | Custom overlay class | string  | `''`  |
| overlay-style        | Custom overlay style  | string  | `''`  |
| close-on-click-overlay        | Whether to close when clicking overlay  | boolean  | `true`  |
| close-on-click-action        | Whether to close when clicking action  | boolean  | `true` |
| close-on-click-outside        | Whether to close when clicking outside | boolean  | `true`  |
| bg-color        | Custom color | string  | `-`  |
| target-id        | Custom target id | string  | `-`  |
| arrow-offset        | the offset of the arrow | number  | `0`  |

### List data structure  

The List property is an array of objects, each object in the array is configured with a column, and the object can contain the following values:

| Key            | Description                 | Type      | Default  |
|----------------|----------------------|----------|--------|
| name           | option text               | string   | `-`      |
| icon           | @nutui/icons-vue name      | VNode   | `-`      |
| disabled       | whether to disable          | boolean  | `false`  | 
| className       | Add extra class names for corresponding options          | string \| Array \| object  | `-`  | 


### Slots

| Name   | Description           |
|---------|--------------|
| content | Customize Bubble Component Menu Content |
| reference | The content of the element that triggers the Popover to display |

### Events

| Event     | Description    | 
|---------|--------------|
| choose | Triggered when an option is clicked |
| open   | Triggered when the menu is opened |
| close  | Fired when the menu is closed |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --------------------------------------- | -------------------------- |
|  --nut-popover-white-background-color| _rgba(255, 255, 255, 1)_  |
|  --nut-popover-dark-background-color| _rgba(75, 76, 77, 1)_  |
|  --nut-popover-border-bottom-color| _rgba(229, 229, 229, 1)_  |
|  --nut-popover-primary-text-color| _rgba(51, 51, 51, 1)_  |
|  --nut-popover-disable-color| _rgba(154, 155, 157, 1)_  |
|  --nut-popover-menu-item-padding| _8px 0_  |
|  --nut-popover-menu-item-margin| _0 8px_  |
|  --nut-popover-menu-name-line-height| _normal_  |