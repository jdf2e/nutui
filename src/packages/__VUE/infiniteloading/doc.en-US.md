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
  <ul class="infiniteUl" id="scroll"  style='height: 300px;'>
    <nut-infiniteloading
        containerId = 'scroll'
        :use-window='false'
        :has-more="hasMore"
        @load-more="loadMore"
    >
        <li class="infiniteLi" v-for="(item, index) in defultList" :key="index">{{item}}</li>
    </nut-infiniteloading>
  </ul>
</template>

<script>
  import { ref,reactive,onMounted,toRefs} from 'vue';
  export default {
    setup(props) {
      const hasMore = ref(true);
      const data = reactive({
        defultList: []
      });
      const loadMore = done => {  
        setTimeout(() => {
          const curLen = data.defultList.length;
          for (let i = curLen; i < curLen + 10; i++) {
            data.defultList.push(`${i}`);
          }
          if (data.defultList.length > 30) hasMore.value = false;
          done()
        }, 500);
      };
      const init = () => {
        for (let i = 0; i < 10; i++) {
          data.defultList.push(`${i}`);
        }
      }
      onMounted(() => {
        init()
      });
      return { loadMore, hasMore, ...toRefs(data) };
    }
  }
</script>

<style>
.infiniteUl {
  height: 300px;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background:#eee
}
.infiniteLi {
  margin-top: 10px;
  font-size: 14px;
  color: rgba(100, 100, 100, 1);
  text-align: center;
}
</style>
```

:::

### Pull to refresh

:::demo

```html
<template>
  <ul class="infiniteUl" id="refreshScroll" style='height: 300px;'>
    <nut-infiniteloading
      pull-icon="JD"
      container-id="refreshScroll"
      :use-window="false"
      :is-open-refresh="true"
      :has-more="refreshHasMore"
      @load-more="refreshLoadMore"
      @refresh="refresh"
    >
      <li
        class="infiniteLi"
        v-for="(item, index) in refreshList"
        :key="index"
        >{{ item }}</li
      >
    </nut-infiniteloading>
  </ul>
</template>

<script>
  import { ref,reactive,onMounted,toRefs} from 'vue';
  import { Toast } from '@nutui/nutui';
  export default {
    setup(props) {
      const refreshHasMore = ref(true);
      const data = reactive({
        refreshList: []
      });
      const refreshLoadMore = done => {
        setTimeout(() => {
          const curLen = data.refreshList.length;
          for (let i = curLen; i < curLen + 10; i++) {
            data.refreshList.push(
              `${i}`
            );
          }
          if (data.refreshList.length > 30) refreshHasMore.value = false;
          done()
        }, 500);
      };

      const refresh = (done) => {
        setTimeout(()=>{
          Toast.success('Refresh success');
          done()
        },1000)
      }
      const init = () => {
        for (let i = 0; i < 10; i++) {
          data.refreshList.push(`${i}`);
        }
      }
      onMounted(() => {
        init()
      });
      return { refreshLoadMore, refreshHasMore, refresh, ...toRefs(data) };
    }
  }
</script>

<style>
.infiniteUl {
  height: 300px;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background:#eee
}
.infiniteLi {
  margin-top: 10px;
  font-size: 14px;
  color: rgba(100, 100, 100, 1);
  text-align: center;
}
</style>
```

:::

### Custom loading copywriting

:::demo

```html
<template>
  <ul class="infiniteUl" id="customScroll">
    <nut-infiniteloading
      load-txt="loading"
      load-more-txt="No more"
      container-id="customScroll"
      :use-window="false"
      :has-more="customHasMore"
      @load-more="customLoadMore"
    >
      <li class="infiniteLi" v-for="(item, index) in customList" :key="index">{{ item }}</li>
    </nut-infiniteloading>
  </ul>
</template>

<script>
  import { ref,reactive,onMounted,toRefs} from 'vue';
  export default {
    setup(props) {
      const customHasMore = ref(true);
      const data = reactive({
        customList: ['']
      });
      const customLoadMore = done => {
        setTimeout(() => {
          const curLen = data.customList.length;
          for (let i = curLen; i < curLen + 10; i++) {
            data.customList.push(`${i}`);
          }
          if (data.customList.length > 30) customHasMore.value = false;
          done()
        }, 500);
      };
      const init = () => {
        for (let i = 0; i < 10; i++) {
          data.customList.push(`${i}`);
        }
      }
      onMounted(() => {
        init()
      });
      return { customHasMore, customLoadMore,...toRefs(data) };
    }
  }
</script>

<style>
.infiniteUl {
  height: 300px;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background:#eee
}
.infiniteLi {
  margin-top: 10px;
  font-size: 14px;
  color: rgba(100, 100, 100, 1);
  text-align: center;
}
</style>
```

:::

## API

### Props

| Attribute        | Description                                                                                                        | Type    | Default          |
|------------------|--------------------------------------------------------------------------------------------------------------------|---------|------------------|
| has-more         | Has more data                                                                                                      | Boolean | `true`           |
| threshold        | The loadMore event will be Emitted when the distance between the scrollbar and the bottom is less than threshold   | Number  | `200`            |
| use-window       | Add the scroll listener to the window or the parent of the listening component                                     | Boolean | `true`           |
| use-capture      | Whether to use capture mode                                                                                        | Boolean | `false`          |
| container-id     | When useWindow is false, set the node ID by default                                                                | String  | `''`             |
| load-more-txt    | "No more" text                                                                                                     | String  | 'Oops, this is the bottom'|
| is-open-refresh  | Enable pull refresh                                                                                                | Boolean | `false`          |
| pull-icon        | Pull refresh[图标名称](#/icon)                                                                                       | String  | <img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width=40/>                |
| pull-txt         | Pull refresh text                                                                                                   | String  |`Loose to refresh`|
| load-icon        | Pull on loading[图标名称](#/icon)                                                                                    | String | <img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width=40 />                |
| load-txt         | Pull on loading text                                                                                                | String  | `Loading...`      |

### Events

| Event          | Description                         | Arguments      |
|----------------|-------------------------------------|----------------|
| load-more      | Emitted when continues to load      | done()         |
| scroll-change  | Real-time monitoring of roll height | height         |
| refresh        | Emitted when pull refresh           | done()         |

### Slots

| Attribute | Description  | 
|--------|----------------|
| loading  | Loading text |
| finished  | Finished text |