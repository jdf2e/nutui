# Swiper

### Intro

Often used in a group of pictures or card rotation.

### Install

```javascript
import { createApp } from 'vue';
//vue
import { Swiper,SwiperItem } from '@nutui/nutui';
//taro
import { Swiper,SwiperItem } from '@nutui/nutui-taro';

const app = createApp();
app.use(Swiper).use(SwiperItem);
```

### Basic Usage

`auto-play` Duration of automatic rotation
`init-page` Initial index value
`pagination-visible` Show paging indicator
`pagination-color` Indicator color customization

:::demo

```html
<template>
  <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page: 2,
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
```

:::

### Asynchronous loading

:::demo

```html
<template>
  <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
     <nut-swiper-item v-for="item in list" :key="item">
        <img :src="item" alt="" />
      </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs, onMounted } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page: 2,
        list: [] as string[]
      });
      onMounted(() => {
        setTimeout(() => {
          state.list = [
            'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
            'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
            'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
            'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
          ];
        }, 3000);
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
```

:::

### Dynamic loading

Support dynamic addition / deletion of pictures

:::demo

```html
<template>
  <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
     <nut-swiper-item v-for="item in list" :key="item">
        <img :src="item" alt="" />
      </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs, onMounted } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page: 2,
        list: [
          'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        ]
      });
      onMounted(() => {
        setTimeout(() => {
          state.list.splice(1, 1);
        }, 3000);
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
```

:::

### Custom size

`width` Custom rotation size

:::demo

```html
<template>
  <nut-swiper :init-page="page2" :loop="false" width="300">
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page2: 2,
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
```

:::

### Custom paging indicator

`v-slot:page` Represents a custom indicator

:::demo

```html
<template>
  <nut-swiper :init-page="page3" :loop="true" @change="change">
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
      </nut-swiper-item>
      <template v-slot:page>
        <div class="page"> {{ current }}/4 </div>
      </template>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page3: 0,
        current: 1
      });
      const change = (index: number) => {
        state.current = index + 1;
      };
      return { ...toRefs(state), change };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .page {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 46px;
    height: 22px;
    background: rgba(0, 0, 0, 0.33);
    border-radius: 22px;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
</style>
```

:::

### Manual switching

You can manually switch through `api` (`prev`, `next`)

:::demo

```html
<template>
  <view class="demo-box">
    <nut-swiper :init-page="page" :loop="true" ref="swiper">
      <nut-swiper-item v-for="item in list" :key="item">
        <img :src="item" alt="" />
      </nut-swiper-item>
    </nut-swiper>
    <view class="nut-swiper-btns">
      <span class="nut-swiper-btns__left" @click="handlePrev">
        <nut-icon name='left'></nut-icon>
      </span>
      <span class="nut-swiper-btns__left" @click="handleNext">
        <nut-icon name='right'></nut-icon>
      </span>
    </view>
  </view>
</template>
<script lang="ts">
  import { reactive, toRefs, ref, Ref } from 'vue';
  export default {
    setup() {
      const swiper = ref(null) as Ref;
      const state = reactive({
        page: 2,
        list: [
          'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        ],
      });
      const handlePrev = () => {
        swiper.value.prev();
      };
      const handleNext = () => {
        swiper.value.next();
      };
      
      return { ...toRefs(state), swiper, handlePrev, handleNext };
    }
  };
</script>
<style lang="scss" scoped>
  .demo-box{
    position: relative;
  }
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nut-swiper-btns{
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    display: flex;
    justify-content: space-between;
    span{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 30px;
      background-color: rgba(0,0,0,.2);
    }
  }
</style>
```

:::

### Vertical direction

`direction` Custom rotation direction

:::demo

```html
<template>
  <nut-swiper :init-page="page4" :loop="true" auto-play="3000" direction="vertical" height="150" :pagination-visible="true" style="height: 150px">
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page4: 0
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
    ::v-deep(.nut-swiper-pagination-vertical) {
      i{
        width: 6px;
        height: 6px;
        border-radius: 50%;
        &.active{
          height: 18px;
          border-radius: 5px;
        }
      }
    }
  }
</style>
```

:::

### Horizontal center display

`is-center` means that it can be centered and must be passed to `width` at the same time

:::demo

```html
<template>
  <nut-swiper :init-page="page" :loop="false" width="280" height="150" :is-center="true" style="height: 150px">
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page: 0
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
```

:::

### Vertically centered display

`is-center` means that it can be centered and must be passed to `height` at the same time

:::demo

```html
<template>
  <nut-swiper :init-page="page" :loop="false" direction="vertical" height="220" :is-center="true" style="height: 300px">
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page: 0
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 300px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
```

:::


## API

### Props

| Attribute                   | Description                                                        | Type           | Default      |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| width                   | Width of rotation card           | Number、String        | window.innerWidth       |
| height                | Height of rotation card                                                    | String、Number | 0        |
| direction               | Rotation direction, optional value：`horizontal`,`vertical`     | String | 'horizontal'         |
| pagination-visible          | Is the paging indicator displayed                                           | Boolean         | false           |
| pagination-color         | The color selected by the pagination indicator                                              | String  | '#fff'           |
| loop           | Whether to rotate                                             | Boolean        | true       |
| duration                | Animation duration（Unit ms）                            | Number、String        | 500        |
| auto-play | Automatic rotation duration, 0 means no automatic rotation                                          | Number、String        | 0        |
| init-page               | Initialize index value                   | Number、String         | 0    |
| touchable             | if touchable to slide                                                      | Boolean         | true          |
| is-preventDefault                  | Disable default events during sliding                                              | Boolean  | true           |
| is-stopPropagation               | Is bubbling prohibited during sliding                    | Boolean         | true    |
| is-center| The corresponding `width` and `height` must be passed to determine whether to display in the middle`  | Boolean   | false    |



### Events

| Event           | Description                   | Arguments     |
| ---------------- | ---------------------- | ------------ |
| change            | Callback after sliding        |  Current index value |



### API

| Event           | Description                   | Arguments     |
| ---------------- | ---------------------- | ------------ |
| prev            | Switch to previous page         | - |
| next            | Switch to next page         | - |
| to            | Switch to the specified rotation         | index:number |