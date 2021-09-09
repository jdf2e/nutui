# Swiper 轮播

### 介绍

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

### 安装

```javascript
import { createApp } from 'vue';
import { Swiper,SwiperItem } from '@nutui/nutui';

const app = createApp();
app.use(Swiper);
app.use(SwiperItem);
```

## 代码演示

### 基础用法

`auto-play` 自动轮播的时长
`init-page` 初始索引值
`pagination-visible` 是否显示分页指示器
`pagination-color` 指示器颜色自定义

```html
<nut-swiper :init-page="state.page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
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
```

### 自定义大小

`width` 自定义轮播大小

```html
<nut-swiper :init-page="state.page2" :loop="false" width="300">
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
```

### 自定义分页指示器

`v-slot:page` 表示自定义指示器

```html
<nut-swiper :init-page="state.page3" :loop="true" @change="change">
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
    <div class="page"></div>
  </template>
</nut-swiper>
```

### 垂直方向

`direction` 自定义轮播方向


```html
<nut-swiper :init-page="state.page4" :loop="true" auto-play="3000" direction="vertical" height="150" :pagination-visible="true" style="height: 150px">
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
```


## API

### Props

| 参数                   | 说明                                                        | 类型           | 默认值      |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| width                   | 轮播卡片的宽度           | Number、String        | window.innerWidth       |
| height                | 轮播卡片的高度                                                    | String、Number | 0        |
| direction               | 轮播方向,可选值`horizontal`,`vertical`     | String | 'horizontal'         |
| pagination-visible          | 分页指示器是否展示                                              | Boolean         | false           |
| pagination-color         | 分页指示器选中的颜色                                              | String  | '#fff'           |
| loop           | 是否循环轮播                                                | Boolean        | true       |
| duration                | 动画时长（单位是ms）                                                | Number、String        | 500        |
| auto-play | 自动轮播时长，0表示不会自动轮播                                          | Number、String        | 0        |
| init-page               | 初始化索引值                   | Number、String         | 0    |
| touchable             | 是否可触摸滑动                                                      | Boolean         | true          |
| is-preventDefault                  | 滑动过程中是否禁用默认事件                                              | Boolean  | true           |
| is-stopPropagation               | 滑动过程中是否禁止冒泡                    | Boolean         | true    |



### Events

| 事件名           | 说明                   | 回调参数     |
| ---------------- | ---------------------- | ------------ |
| change            | 滑动之后的回调         | 当前索引值index |



### API

| 事件名           | 说明                   | 参数     |
| ---------------- | ---------------------- | ------------ |
| prev            | 切换到上一页         | - |
| next            | 切换到下一页         | - |
| to            | 切换到指定轮播         | index:number |