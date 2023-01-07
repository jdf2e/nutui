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
  <nut-popover v-model:visible="visible.lightTheme" :list="iconItemList">
    <template #reference>
      <nut-button type="primary" shape="square">Light</nut-button>
    </template>
  </nut-popover>

  <nut-popover v-model:visible="visible.darkTheme" theme="dark" :list="iconItemList">
    <template #reference>
      <nut-button type="primary" shape="square">Dark</nut-button>
    </template>
  </nut-popover>
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
```
:::

### Option Configuration

In the list array, an option can be disabled via the `disabled` field.

:::demo
```html
<template>
  <nut-popover v-model:visible="visible.showIcon" theme="dark" :list="itemList">
    <template #reference>
      <nut-button type="primary" shape="square">Show Icon</nut-button>
    </template>
  </nut-popover>

  <nut-popover v-model:visible="visible.disableAction" :list="itemListDisabled">
    <template #reference>
      <nut-button type="primary" shape="square">Disabled</nut-button>
    </template>
  </nut-popover>
</template>

<script>
import { reactive, ref } from 'vue';
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
      },{
        name: 'option2',
        icon:  ()=>{
          return h(Cart2,{
            width:'14px'
          })
        }
      },
      {
        name: 'option3',
        icon: ()=>{
          return h(Location,{
            width:'14px'
          })
        }
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
```
:::


### Custom Content

Customize the content in the slot named content.

:::demo
```html
<template>
  <nut-popover v-model:visible="visible.Customized">
    <template #reference>
      <nut-button type="primary" shape="square">custom content</nut-button>
    </template>

    <template #content>
      <div class="self-content">
        <div class="self-content-item" v-for="(item, index) in selfContent" :key="index">
          <component :is="renderIcon(item.name)"></component>
          <div class="self-content-desc">{{ item.desc }}</div>
        </div>
      </div>
    </template>
  </nut-popover>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const visible = ref({
      Customized: false,
    });
    const selfContent = reactive([
      {
        name: Service,
        desc: 'option1'
      },
      {
        name: Notice,
        desc: 'option2'
      },
      {
        name: Location,
        desc: 'option3'
      },
      {
        name: Category,
        desc: 'option4'
      },
      {
        name: Scan2,
        desc: 'option5'
      },
      {
        name: Message,
        desc: 'option6'
      }
    ]);
    const renderIcon = (icon: Component, props?: any) => {
      if (icon) return h(icon, props);
      return '';
    };


    return {
      visible,
      selfContent,
      renderIcon
    };
  }
}
</script>

<style lang="scss">
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
  <nut-popover v-model:visible="visible" location="top" theme="dark" :list="iconItemList">
    <template #reference>
      <div class="brick"></div>
    </template>
  </nut-popover>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
export default {
  setup() {
    const visible = ref(false);

    const iconItemList = reactive([
        {
          name: 'option1'
        },
        {
          name: 'option2'
        }]);

      return {
        iconItemList,
        visible,
      };
    }
};
</script>
```
:::


### custom target 

Popover provides the 'targetId' attribute to match the target element by adding the corresponding id value to the target element

:::demo
```html
<template>
  <nut-button type="primary" shape="square" id="popid" @click="clickCustomHandle">custom target</nut-button>
    <nut-popover v-model:visible="customTarget" targetId="popid" :list="itemList" location="top-start"></nut-popover>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const visible = ref({
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
```
:::

### Custom Color

:::demo
```html
<template>
  <nut-popover v-model:visible="customColor" :list="itemList" location="right-start" bgColor="#f00" theme="dark">
      <template #reference>
        <nut-button type="primary" shape="square" >Custom Color</nut-button>
      </template>
    </nut-popover>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const visible = ref({
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
| offset        | the offset of the occurrence position  | [number, number]   | `[0, 12]`  |
| show-arrow        | whether to show small arrows  | boolean  | `true`  |
| custom-class        | custom class   | string  | `''`  |
| duration        | Transition duration  |  [number, number]  | `0.3`  |
| iconPrefix        | Icon className prefix | string  | `nut-icon`  |
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
| icon           | @nutui/icons-vue name      | string   | `-`      |
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