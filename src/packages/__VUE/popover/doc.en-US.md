# Popover

### Intro

Click or hover over the element to pop up the bubble card overlay.

### Install

```javascript

import { createApp } from 'vue';
// vue
import { Popover, Popup } from '@nutui/nutui';
// taro
import { Popover, Popup } from '@nutui/nutui-taro';

const app = createApp();

app.use(Popup);
app.use(Popover);

```


### Basic Usage

Popover supports both light and dark styles. The default is light style. Set the theme property to `dark` to switch to dark style.

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
        icon: 'my2'
      },{
        name: 'option2',
        icon: 'cart2'
      },{
        name: 'option3',
        icon: 'location2'
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
          <nut-icon :name="item.name" size="15"></nut-icon>
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
        name: 'service',
        desc: 'option1'
      },
      {
        name: 'notice',
        desc: 'option2'
      },
      {
        name: 'location',
        desc: 'option3'
      },
      {
        name: 'category',
        desc: 'option4'
      },
      {
        name: 'scan2',
        desc: 'option5'
      },
      {
        name: 'message',
        desc: 'option6'
      }
    ]);

    return {
      visible,
      selfContent,
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
```
New since `v3.1.21`
```
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


## API
### Props  

| Attribute | Description | Type | Default |
|----------------|---------------------------------|---------|------------|
| list          | list of options                          | List[]   | []        |
| visible      | whether to show                 | boolean  | false     |
| theme          | Theme style, can be set to `dark` `light`          | string   | `light`   |
| location       | pop-up location  | string   | `bottom`  |
| offset `v3.1.21`       | the offset of the occurrence position  | [number, number]   | [0, 12]  |
| show-arrow `v3.1.21`       | whether to show small arrows  | boolean  | true  |
| custom-class `v3.1.21`       | custom class   | string  | ''  |

### List data structure  

The List property is an array of objects, each object in the array is configured with a column, and the object can contain the following values:

| Key            | Description                 | Type      | Default  |
|----------------|----------------------|----------|--------|
| name           | option text               | string   | -      |
| icon           | `nut-icon` name      | string   | -      |
| disabled       | whether to disable          | boolean  | false  | 
| className `v3.1.21`      | Add extra class names for corresponding options          | string/Array/object  | -  | 


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