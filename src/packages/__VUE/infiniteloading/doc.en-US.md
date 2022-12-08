# InfiniteLoading

### Intro

Scrolling to the bottom of the list automatically loads more data.

### Install

```javascript
  import { createApp } from 'vue';
  import { InfiniteLoading,Icon } from '@nutui/nutui';

  const app = createApp();
  app.use(InfiniteLoading);
  app.use(Icon);
```

### Basic Usage

:::demo

```html
<template>
  <nut-infiniteloading
      v-model="infinityValue"
      :has-more="hasMore"
      @load-more="loadMore"
  >
      <div class="infiniteLi" v-for="(item, index) in defultList" :key="index">{{item}}</div>
  </nut-infiniteloading>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      let cycle = 0;
      const infinityValue = ref(false)
      const hasMore = ref(true);
      const defultList = ref([]);
      const loadMore = done => {  
        setTimeout(() => {
          data.defultList = data.defultList.concat(letter);
          cycle++;
          if (cycle > 2) hasMore.value = false;
          data.infinityValue = false;
        }, 1000); 
      };
      
      return { loadMore, hasMore, infinityValue };
    }
  }
</script>
```

:::
### Custom loading copywriting

:::demo

```html
<template>
  <nut-infiniteloading
    v-model="infinityValue2"
    load-txt="Loading..."
    load-more-txt="No more ~"
    :has-more="hasMore"
    @load-more="loadMore"
  >
    <li class="infiniteLi" v-for="(item, index) in defultList" :key="index">{{ item }}</li>
  </nut-infiniteloading>
</template>

<script>
  import { ref,reactive,onMounted,toRefs} from 'vue';
  import { Toast } from '@nutui/nutui';
  export default {
    setup(props) {
      let cycle = 0;
      const infinityValue2 = ref(false)
      const hasMore = ref(true);
      const defultList = ref([]);
      const loadMore = done => {  
        setTimeout(() => {
          data.defultList = data.defultList.concat(letter);
          cycle++;
          if (cycle > 2) hasMore.value = false;
          data.infinityValue2 = false;
        }, 1000); 
      };
      
      return { loadMore, hasMore, infinityValue2 };
    }
  }
</script>
```

:::

## API

### Props

| Attribute        | Description                                                                                                        | Type    | Default          |
|------------------|--------------------------------------------------------------------------------------------------------------------|---------|------------------|
| v-model          | Loading status                                                                                                     | Boolean | `false`           |
| has-more         | Has more data                                                                                                      | Boolean | `true`           |
| threshold        | The loadMore event will be Emitted when the distance between the scrollbar and the bottom is less than threshold   | Number  | `200`            |
| use-capture      | Whether to use capture mode                                                                                        | Boolean | `false`          |
| load-more-txt    | "No more" text                                                                                                     | String  | 'Oops, this is the bottom'|
| load-icon        | Pull on loading[图标名称](#/zh-CN/component/icon)                                                                                    | String | ''    |
| load-txt         | Pull on loading text                                                                                                | String  | `Loading...`      |

### Events

| Event          | Description                         | Arguments      |
|----------------|-------------------------------------|----------------|
| load-more      | Emitted when continues to load      | -         |
| scroll-change  | Real-time monitoring of roll height | height         |

### Slots

| Attribute | Description  | 
|--------|----------------|
| loading  | Loading text |
| finished  | Finished text |