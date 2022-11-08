# TimeSelect

### Intro

For delivery time selection

### Install

``` javascript
import { createApp } from 'vue';
// vue
import { TimeSelect, TimePannel, TimeDetail, Popup, Icon, OverLay } from '@nutui/nutui';
// taro
import { TimeSelect, TimePannel, TimeDetail, Popup, Icon, Overlay } from '@nutui/nutui-taro';

const app = createApp();
app.use(TimeSelect);
app.use(TimePannel);
app.use(TimeDetail);
app.use(Popup);
app.use(Icon);
app.use(Overlay);
```

### Basic Usage

:::demo

``` html
<template>
  <nut-cell @click="handleClick1">
    <span><label>Please select the delivery time</label></span>
  </nut-cell>
  <nut-timeselect v-model:visible="visible1" height="50%" :current-key="currentKey1" :current-time="currentTime1" @select="handleSelected1">
    <template #pannel>
      <nut-timepannel name="February 23rd(Today)" pannel-key="0" @change="handleChange1"></nut-timepannel>
      <nut-timepannel name="February 24th(Wednesday)" pannel-key="1" @change="handleChange1"></nut-timepannel>
    </template>
    <template #detail>
      <nut-timedetail :times="times1" @select="selectTime1"></nut-timedetail>
    </template>
  </nut-timeselect>
</template>
<script lang="ts">
  import { reactive, toRefs, getCurrentInstance, onMounted } from 'vue';
  export default {
    props: {},
    setup() {
      const { proxy } = getCurrentInstance() as any;
      const state = reactive({
        visible1: false,
        currentKey1: 0,
        currentTime1: [] as any[],
        times1: [
          {
            key: 0,
            list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
          },
          {
            key: 1,
            list: ['9:00-10:00', '10:00-11:00']
          },
        ],
      });

      const handleChange1 = (pannelKey: number) => {
        state.currentKey1 = pannelKey;
        state.currentTime1 = [];
        state.currentTime1.push({
          key: state.currentKey1,
          list: []
        });
      };

      const handleClick1 = () => {
        state.visible1 = true;
      };

      const selectTime1 = (item: string) => {
        let curTimeIndex = state.currentTime1[0]['list'].findIndex((time: string) => time === item);
        if(curTimeIndex === -1) {
          state.currentTime1[0]['list'].push(item);
        } else {
          state.currentTime1[0]['list'].splice(curTimeIndex, 1);
        }
      };

      const handleSelected1 = (obj: any) => {
        proxy.$toast.text(`Your choose：${JSON.stringify(obj)}`);
      };

      onMounted(() => {
        state.currentTime1.push({
          key: state.currentKey1,
          list: []
        });
      });

      return { 
        ...toRefs(state), 
        handleChange1,
        handleSelected1,
        selectTime1,
        handleClick1, 
      };
    }
  };
</script>
```

:::

### Multiple dates and times can be selected

:::demo

``` html
<template>
  <nut-cell @click="handleClick2">
    <span><label>Please select the delivery time</label></span>
  </nut-cell>
  <nut-timeselect v-model:visible="visible2" height="50%" :current-key="currentKey2" :current-time="currentTime2" @select="handleSelected2">
    <template #pannel>
      <nut-timepannel name="February 23rd(Today)" pannel-key="0" @change="handleChange2"></nut-timepannel>
      <nut-timepannel name="February 24th(Wednesday)" pannel-key="1" @change="handleChange2"></nut-timepannel>
    </template>
    <template #detail>
      <nut-timedetail :times="times2" @select="selectTime2"></nut-timedetail>
    </template>
  </nut-timeselect>
</template>
<script lang="ts">
  import { reactive, toRefs, getCurrentInstance, onMounted } from 'vue';
  export default {
    props: {},
    setup() {
      const { proxy } = getCurrentInstance() as any;
      const state = reactive({
        visible2: false,
        currentKey2: 0,
        currentTime2: [] as any[],
        times2: [
          {
            key: 0,
            list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
          },
          {
            key: 1,
            list: ['9:00-10:00', '10:00-11:00']
          },
        ]
      });

      const handleChange2 = (pannelKey: number) => {
        state.currentKey2 = pannelKey;
        let curTime = state.currentTime2.find((item: any) => item.key == pannelKey);
        if(!curTime) {
          state.currentTime2.push({
            key: pannelKey,
            list: []
          });
        }
      };

      const handleClick2 = () => {
        state.visible2 = true;
      };

      const selectTime2 = (item: string) => {
        let findIndex = state.currentTime2.findIndex((item: any) => item.key == state.currentKey2);
        let curTimeIndex = state.currentTime2[findIndex]['list'].findIndex((time: string) => time === item);
        if(curTimeIndex === -1) {
          state.currentTime2[findIndex]['list'].push(item);
        } else {
          state.currentTime2[findIndex]['list'].splice(curTimeIndex, 1);
        }
      };

      const handleSelected2 = (obj: any) => {
        proxy.$toast.text(`Your choose：${JSON.stringify(obj)}`);
      };

      onMounted(() => {
        state.currentTime2.push({
          key: state.currentKey2,
          list: []
        });
      });

      return { 
        ...toRefs(state), 
        handleChange2,
        handleSelected2,
        selectTime2,
        handleClick2, 
      };
    }
  };
</script>
```

:::

### Change Title

:::demo

``` html
<template>
  <nut-cell @click="handleClick2">
    <span><label>Please select the delivery time</label></span>
  </nut-cell>
  <nut-timeselect v-model:visible="visible2" height="50%" :current-key="currentKey2" :current-time="currentTime2" @select="handleSelected2">
    <template #title>
      <div class="timeselect-title">
        <p class="title">It is title</p>
        <p class="subtitle">It is subtitle</p>
      </div>
    </template>
    <template #pannel>
      <nut-timepannel name="February 23rd(Today)" pannel-key="0" @change="handleChange2"></nut-timepannel>
      <nut-timepannel name="February 24th(Wednesday)" pannel-key="1" @change="handleChange2"></nut-timepannel>
    </template>
    <template #detail>
      <nut-timedetail :times="times2" @select="selectTime2"></nut-timedetail>
    </template>
  </nut-timeselect>
</template>
<script lang="ts">
  import { reactive, toRefs, getCurrentInstance, onMounted } from 'vue';
  export default {
    props: {},
    setup() {
      const { proxy } = getCurrentInstance() as any;
      const state = reactive({
        visible2: false,
        currentKey2: 0,
        currentTime2: [] as any[],
        times2: [
          {
            key: 0,
            list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
          },
          {
            key: 1,
            list: ['9:00-10:00', '10:00-11:00']
          },
        ]
      });

      const handleChange2 = (pannelKey: number) => {
        state.currentKey2 = pannelKey;
        let curTime = state.currentTime2.find((item: any) => item.key == pannelKey);
        if(!curTime) {
          state.currentTime2.push({
            key: pannelKey,
            list: []
          });
        }
      };

      const handleClick2 = () => {
        state.visible2 = true;
      };

      const selectTime2 = (item: string) => {
        let findIndex = state.currentTime2.findIndex((item: any) => item.key == state.currentKey2);
        let curTimeIndex = state.currentTime2[findIndex]['list'].findIndex((time: string) => time === item);
        if(curTimeIndex === -1) {
          state.currentTime2[findIndex]['list'].push(item);
        } else {
          state.currentTime2[findIndex]['list'].splice(curTimeIndex, 1);
        }
      };

      const handleSelected2 = (obj: any) => {
        proxy.$toast.text(`Your Choose ：${JSON.stringify(obj)}`);
      };

      onMounted(() => {
        state.currentTime2.push({
          key: state.currentKey2,
          list: []
        });
      });

      return { 
        ...toRefs(state), 
        handleChange2,
        handleSelected2,
        selectTime2,
        handleClick2, 
      };
    }
  };
</script>
<style lang="scss" scoped>
.timeselect-title {
  height: 50px;
  p {
    line-height: 1;
    padding: 0;
    margin: 0;
    &.title {
      margin: 10px 0;
      font-size: 16px;
      font-weight: bold;
    }
    &.subtitle {
      color: #999;
    }
  }
}
</style>
```

:::

## API

### TimeSelect Props

| Attribute                   | Description                                                             | Type    | Default |
|------------------------|----------------------------------------------------------------|---------|------|
| visible                 | Whether to display elastic layer                                                    | Boolean  | `false`
| height                 | Height of bomb layer                                                    | String  | `20%`
| title                 | Bomb layer title                                                    | String  | `Pickup Time`
| current-key                 | Unique identification                                                    | String、Number  | `0`
| current-time                 | The currently selected time, the array element contains:key: string; list: string[]      | Array  | `[]`
| lock-scroll            | Whether the background is locked                         | Boolean        | `false`       |

### Slots

| Attribute                   | Description                                                             |
|------------------------|----------------------------------------------------------------|
| title                 | Change Title                                                    |
| pannel                 | List for left                                                    |
| detail                 | Detail Content for right                                                    |

### TimePannel Props

| Attribute                   | Description                                                             | Type    | Default |
|------------------------|----------------------------------------------------------------|---------|------|
| name                 | Name of display                                                    | String  | ``
| pannel-key           | Unique ID, which identifies the currently selected day together with `current-key`                      | Number、String  | `0`

### TimeDetail Props

| Attribute                   | Description                                                             | Type    | Default |
|------------------------|----------------------------------------------------------------|---------|------|
| times                 | Selectable time, the same as array elements `current-time`                              | Array  | `[]`


### TimeSelect Events

| Event | Description                  | Arguments   |
|-------|----------|-------------|
| select | Callback after closing mask | key: string | number, list: [] |

### TimePannel Event

| Event | Description                  | Arguments   |
|-------|----------|-------------|
| change | Click the callback of the content | pannelKey: string ｜ number |

### TimeDetail Event

| Event | Description                  | Arguments   |
|-------|----------|-------------|
| select | Callback of click time | time: string |


