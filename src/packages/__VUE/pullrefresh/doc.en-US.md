#  PullRefresh

### Intro

Used to provide interactive operations for pull-down refresh.

### Install

```javascript
  import { createApp } from 'vue';
  import { PullRefresh,Icon } from '@nutui/nutui';

  const app = createApp();
  app.use(PullRefresh);
  app.use(Icon);

```

### Basic Usage

The refresh event will be Emitted when pull refresh, you should set v-model to false to reset loading status after process refresh event.

:::demo

```html
<template>
  <nut-pullrefresh v-model="refresh" @refresh="refreshFun">
    <div class="pull-block">向下拉试试吧！</div>
  </nut-pullrefresh>
</template>

<script>
  import { ref,reactive,onMounted,toRefs} from 'vue';
  export default {
    setup(props) {
      const refresh = ref(false);
      const refreshFun = () => {  
        setTimeout(() => {
          refresh.value = false;
        }, 3000);
      };
      return { refresh, refreshFun };
    }
  }
</script>

```
:::
### Custom Tips

The pull-down refresh has four states:`'loading' | 'loosing' | 'pulling' | 'complete'`，respectively corresponding to the attribute `pullingTxt、loosingTxt、loadingTxt、completeTxt` ，Complex styles can be implemented through slots。

:::demo

```html
<template>
  <nut-pullrefresh
    v-model="refresh2"
    loosingTxt="松开吧"
    loadingTxt="玩命加载中..."
    completeTxt="好啦"
    @refresh="refreshFun"
  >
    <template #pullingTxt>
      <div>用力拉</div>
    </template>
    <div class="pull-block">向下拉试试吧！</div>
  </nut-pullrefresh>
</template>

<script>
  import { ref,reactive,onMounted,toRefs} from 'vue';
  import { Toast } from '@nutui/nutui';
  export default {
    setup(props) {
      const refresh2 = ref(false);
      const refreshFun = () => {  
        setTimeout(() => {
          refresh2.value = false;
        }, 3000);
      };
      return { refresh, refreshFun };
    }
  }
</script>

```
:::
### Customize the listener

The trigger conditions for PullRefresh are: The parent position of the scroll bar at the top of the rolling Element, the parent of rolling Element to determine whether through the parent set ` overflowY: scroll | auto | overlay `, if the parent Element for ` `, trigger conditions for ` Element. The scrollTop ` = = = 0.

:::demo

```html
<template>
  <div class="parentpage">
    <nut-pullrefresh v-model="refresh" @refresh="refreshFun">
      <div class="pull-letter" v-for="item in refreshList2">
        <div>{{item}}</div>
      </div>
    </nut-pullrefresh>
  </div>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      setup(props) {
      const refresh = ref(false);
      const refreshFun = () => {  
        setTimeout(() => {
          refresh.value = false;
        }, 3000);
      };
      return { refresh, refreshFun };
    }
    }
  }
</script>

<style>
.parentpage {
  height: 600px;
  overflow: auto;
}
</style>
```
:::

## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| v-model        | Loading status               | Boolean | `false`                |
| pull-distance         | The distance to trigger the pull refresh | number \| string | `50`               |
| head-height | Height of head     | number \| string | `50`  |
| loading-icon         | Loading icon      | String | `loading`            |
| pulling-txt         | Text to show when pulling                       | String | `Pull to refresh...`            |
| loosing-txt         | Text to show when loosing                       | String | `Loose to refresh...`            |
| loading-txt        | Text to show when loading                         | String | `Loading...`                |
| complete-txt        | Text to show when complete                       | String | ''           |
| duration       | Animation duration                         | Number | 0.3                |

### Events

| Event | Description           | Arguments     |
|--------|----------------|--------------|
| change  | Emitted when draging or status changed | {status:string,distance:number} |
| refresh  | Emitted after pulling refresh | - |

### Slots

| Attribute | Description           | 
|--------|----------------|
| pulling  | Content of head when at pulling |
| loosing  | Content of head when at loosing |
| loading  | Content of head when at loading |
| complete  | Content of head when at complete |
| default  | 	Default slot |
