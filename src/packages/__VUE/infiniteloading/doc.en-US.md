# InfiniteLoading

### Intro

Scrolling to the bottom of the list automatically loads more data.

### Install

```javascript
import { createApp } from 'vue';
import { InfiniteLoading } from '@nutui/nutui';

const app = createApp();
app.use(InfiniteLoading);
```

### Basic Usage

:::demo

```html
<template>
  <nut-tabs v-model="tabsValue" animatedTime="0" >
    <nut-tab-pane title="Basic Usage">
        <ul class="infiniteUl">
           <nut-infinite-loading
                v-model="infinityValue"
                :has-more="hasMore"
                @load-more="loadMore"
            >
                <div class="infiniteLi" v-for="(item, index) in defultList" :key="index">{{item}}</div>
            </nut-infinite-loading>
        </ul>
    </nut-tab-pane>
  </nut-tabs>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      let cycle = 0;
      const tabsValue = ref(0)
      const infinityValue = ref(false)
      const hasMore = ref(true);
      const letter = ['A','B','C','D','E','F','G', 'H','IJ','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
      const defultList = ref(letter);
      const loadMore = done => {  
        setTimeout(() => {

          defultList.value = defultList.value.concat(letter);
          cycle++;
          if (cycle > 2) hasMore.value = false;
          infinityValue.value = false;
        }, 1000); 
      };
      
      return {tabsValue, loadMore, hasMore, defultList, infinityValue };
    }
  }
</script>

<style lang="scss">
  .nut-tab-pane {
    padding: 0 !important;
    padding-left: 16px !important;
  }
  .infiniteUl {
    width: 100%;
    height: calc(100vh - 120px);
    padding: 0;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .infiniteLi {
    font-size: 14px;
    color: #333;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }
</style>
```

:::
### Custom loading copywriting

:::demo

```html
<template>
  <nut-tabs v-model="tabsValue" animatedTime="0" >
    <nut-tab-pane title="Custom loading copywriting">
        <ul class="infiniteUl">
          <nut-infinite-loading
              v-model="infinityValue"
              load-txt="Loading..."
              load-more-txt="No more ~"
              :has-more="hasMore"
              @load-more="loadMore"
            >
              <li class="infiniteLi" v-for="(item, index) in defultList" :key="index">{{ item }}</li>
            </nut-infinite-loading>
        </ul>
    </nut-tab-pane>
  </nut-tabs>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      let cycle = 0;
      const tabsValue = ref(0)
      const infinityValue = ref(false)
      const hasMore = ref(true);
      const letter = ['A','B','C','D','E','F','G', 'H','IJ','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
      const defultList = ref(letter);
      const loadMore = done => {  
        setTimeout(() => {

          defultList.value = defultList.value.concat(letter);
          cycle++;
          if (cycle > 2) hasMore.value = false;
          infinityValue.value = false;
        }, 1000); 
      };
      
      return {tabsValue, loadMore, hasMore, defultList, infinityValue };
    }
  }
</script>

<style lang="scss">
  .nut-tab-pane {
    padding: 0 !important;
    padding-left: 16px !important;
  }
  .infiniteUl {
    width: 100%;
    height: calc(100vh - 120px);
    padding: 0;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .infiniteLi {
    font-size: 14px;
    color: #333;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }
</style>
```

:::

## API

### Props

| Attribute        | Description                                                                                                        | Type    | Default          |
|------------------|--------------------------------------------------------------------------------------------------------------------|---------|------------------|
| v-model          | Loading status                                                                                                     | boolean | `false`           |
| has-more         | Has more data                                                                                                      | boolean | `true`           |
| threshold        | The loadMore event will be Emitted when the distance between the scrollbar and the bottom is less than threshold   | number  | `200`            |
| use-capture      | Whether to use capture mode                                                                                        | boolean | `false`          |
| load-more-txt    | "No more" text                                                                                                     | string  | `Oops, this is the bottom`|
| load-txt         | Pull on loading text                                                                                                | string  | `Loading...`      |

### Events

| Event          | Description                         | Arguments      |
|----------------|-------------------------------------|----------------|
| load-more      | Emitted when continues to load      | -         |
| scroll-change  | Real-time monitoring of roll height | height         |

### Slots

| Name | Description  | 
|--------|----------------|
| default  | Custom content |
| loading  | Loading text |
| loadingIcon  | Custom loading icon |
| finished  | Finished text |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value | 
| --------------------------------------- | -------------------------- | 
| --nut-infiniteloading-bottom-color       | _#c8c8c8_        | 