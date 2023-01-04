# ActionSheet

### Intro
Action menu panel that pops up from the bottom.

### Install

``` javascript
import { createApp } from 'vue';
import { ActionSheet } from '@nutui/nutui';

const app = createApp();
app.use(ActionSheet);
```

### Basic Usage

:::demo
``` html
<template>
  <nut-cell
      :show-icon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible')"
     
    >
      <span><label>Basic Usage</label></span>
      <div v-html="state.val"></div>
    </nut-cell>
     <!-- demo Basic Usage -->
    <nut-action-sheet
      v-model:visible="state.isVisible"
      :menu-items="menuItems"
      @choose="chooseItem"
    >
    </nut-action-sheet>
</template>
<script>
import { reactive } from 'vue';
export default {
  setup() {
  const state = reactive({
      isVisible: false,
      val: '',
    });
     const menuItems = [
      {
        name: 'option one'
      },
      {
        name: 'option two'
      },
      {
        name: 'option three'
      }
    ];
    const switchActionSheet = ( param ) => {
      state.isVisible = !state.isVisible;
    };
      const chooseItem = (itemParams) => {
      state.val = itemParams.name;
    };
    return {
      state,
      switchActionSheet,
      menuItems,
      chooseItem,
    };
  }
}
 </script>
```
:::

### Show Cancel Button
:::demo
``` html
<template>
  <nut-cell
      :show-icon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible')"
    >
      <span><label>Show Cancel Button</label></span>
      <div v-html="state.val"></div>
    </nut-cell>
     <!-- demo Show Cancel Button -->
    <nut-action-sheet
      v-model:visible="state.isVisible"
      :menu-items="menuItems"
      cancel-txt="cancel"
      @choose="chooseItem"
    >
    </nut-action-sheet>
</template>
<script>
import { reactive } from 'vue';
export default {
  setup() {
  const state = reactive({
      isVisible: false,
      val: '',
    });
     const menuItems = [
       {
        name: 'option one'
      },
      {
        name: 'option two'
      },
      {
        name: 'option three'
      }
    ];
    const switchActionSheet = ( param ) => {
      state.isVisible = !state.isVisible;
    };
      const chooseItem = (itemParams) => {
      state.val = itemParams.name;
    };
    return {
      state,
      switchActionSheet,
      menuItems,
      chooseItem,
    };
  }
}
 </script>
```
:::
### Show Description
:::demo
``` html
<template>
  <nut-cell
      :show-icon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible')"
    >
      <span><label>Show Description</label></span>
      <div v-html="state.val"></div>
    </nut-cell>
     <!-- demo Show Description -->
    <nut-action-sheet
      v-model:visible="state.isVisible"
      cancel-txt="cancel"
      description="This is a presentation"
      :menu-items="menuItems"
      @choose="chooseItem"
    >
    </nut-action-sheet>
</template>
<script>
import { reactive } from 'vue';
export default {
  setup() {
  const state = reactive({
      isVisible: false,
      val: '',
    });
     const menuItems = [
          {
        name: 'option one'
      },
      {
        name: 'option two'
      },
      {
        name: 'option three',
        subname: 'Description'
      }
    ];
    const switchActionSheet = ( param ) => {
      state.isVisible = !state.isVisible;
    };
      const chooseItem = (itemParams) => {
      state.val = itemParams.name;
    };
    return {
      state,
      switchActionSheet,
      menuItems,
      chooseItem,
    };
  }
}
 </script>
```
:::

### Option Status

:::demo
``` html
<template>
  <nut-cell
      :show-icon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible')"
     
    >
      <span><label>Option Status</label></span>
      <div v-html="state.val"></div>
    </nut-cell>
     <!-- demo Option Status -->
    <nut-action-sheet
      v-model:visible="state.isVisible"
      :menu-items="menuItems"
      choose-tag-value="Shading Options"
      @choose="chooseItem"
       cancel-txt="cancel"
    >
    </nut-action-sheet>
</template>
<script>
import { reactive } from 'vue';
export default {
  setup() {
  const state = reactive({
      isVisible: false,
      val: '',
    });
     const menuItems = [
      {
        name: 'Shading Options'
      },
      {
        name: 'Disable option',
        disable: true
      }
    ];
    const switchActionSheet = ( param ) => {
      state.isVisible = !state.isVisible;
    };
      const chooseItem = (itemParams) => {
      state.val = itemParams.name;
    };
    return {
      state,
      switchActionSheet,
      menuItems,
      chooseItem,
    };
  }
}
 </script>
```
:::

### Custom Content

:::demo
``` html
<template>
  <nut-cell
      :show-icon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible')"
     
    >
      <span><label>Custom Content</label></span>
    </nut-cell>
     <nut-action-sheet v-model:visible="state.isVisible" title="title">
      <div class="custom-content">Custom Content</div>
    </nut-action-sheet>
</template>
<script>
import { reactive } from 'vue';
export default {
  setup() {
  const state = reactive({
      isVisible: false,
      val: '',
    });
    const switchActionSheet = ( param ) => {
      state.isVisible = !state.isVisible;
    };
    return {
      state,
      switchActionSheet,
    };
  }
}
 </script>
 <style lang="scss" scoped>
.custom-content {
  padding: 10px 10px 160px;
}
</style>

```
:::
## API
### Props

| Attribute            | Description               | Type   | Default  |
|------------------|----------------------------------------|---------|-----------|
| v-model:visible       | Whether to show ActionSheet	                             | Boolean | false|
| menu-items       | Options                                 | Array   | [ ]       |
| option-tag       | Custom Options tag key                 | String  | 'name'    |
| option-sub-tag   | Custom Options subtag key                 | String  | 'subname' |
| choose-tag-value | Set the value of the selected item | String  | ''        |
| color            | selected item color，when choose-tag-value == option-tag   | String  | '#ee0a24' |
| title            | set list item title                         | String  | ''        |
| description      | set list item description                | String  | ''        |
| cancel-txt       | Text of cancel button                               | String  | 'cancel'   |
| close-abled      | Whether the mask layer can be closed                       | Boolean | true      |

### MenuItems

| Attribute            | Description               | Type   |
|--------|--------------------|-----------------------------------|
| name | Title      | String    |
| subname | Subtitle | String          |
| color | Text color（Check Item Color Hierarchy > Option Font Color） | String          |
| loading | Whether to be loading status | Boolean          |
| disable | Whether to be disabled | Boolean       |

### Events

| Event | Description                  | Arguments    |
|--------|--------------------|-----------------------------------|
| choose | Triggered after selection       | item, index |
| cancel | Triggered when cancel copy is clicked | -                              |
| close | Triggered when the mask layer is clicked | event: Event                              |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component]()。

| Name                                    | Default Value                     | Description |
| --------------------------------------- | -------------------------- | ---- |
| --nut-actionsheet-light-color           | _#f6f6f6_                  | -    |
| --nut-actionsheet-item-border-bottom     | _none_                     | -    |
|  --nut-actionsheet-item-font-size        | _var(--nut-font-size-2)_   | -    |
|  --nut-actionsheet-item-subdesc-font-size| _var(--nut-font-size-1)_   | -    |
|  --nut-actionsheet-item-cancel-border-top| _1px solid var(--nut-actionsheet-light-color)_ | -    |
|  --nut-actionsheet-item-line-height      | _24px_                     | -    |
|   --nut-actionsheet-item-font-color       | _var(--nut-title-color)_   | -    |
