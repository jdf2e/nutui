# Comment

### Intro

Used to display the comment list

### Install

```javascript

import { createApp } from 'vue';
// vue
import { Comment,Icon,Rate } from '@nutui/nutui';
// taro
import { Comment,Icon,Rate } from '@nutui/nutui-taro';

const app = createApp();
app.use(Comment);
app.use(Icon);
app.use(Rate);

```

### Single Line Image

By default, images of reviews for individual items are displayed in a single slide

:::demo
```html
<template>
<nut-comment
    :images="cmt.images"
    :videos="cmt.videos"
    :info="cmt.info"
    :labels="labels"
    @click="handleclick"
    @clickImages="clickImages"
    :operation="['replay']"
  >
    <template #comment-labels>
      <img
        class="nut-comment-header__labels--item"
        src="https://img11.360buyimg.com/imagetools/jfs/t1/211858/17/4258/12101/618e6f78Ed0edcadc/e83a673555edf59f.jpg"
      />
    </template>
</nut-comment>
</template>
<script>
import { reactive, ref,onMounted } from 'vue';
export default {
  setup() {
    let cmt = ref({});
    const labels = () => {
      return '<nut-icon name="dongdong" color="#fa2c19"></nut-icon>';
    };
    onMounted(()=>{
      fetch('//storage.360buyimg.com/nutui/3x/comment_data.json')
        .then((response) => response.json())
        .then((res) => {
          cmt.value = res.Comment;
        }) 
        .catch((err) => console.log('Oh, error', err)); 
    })
    const handleclick = (info: any) => {
      console.log('进行跳转', info);
    };
    const clickImages = (imgs)=>{
      console.log('进行图片展示',imgs)
    }
    return {
      cmt,
      labels,
      handleclick,
      clickImages
    };
  }
}

```
:::

### Multi Line Image

The value of `headerType` allows you to set the image to be displayed in multiple lines

:::demo 
```html
<template>
<nut-comment
  headerType="complex"
  imagesRows="multi"
  :images="cmt.images"
  :videos="cmt.videos"
  :info="cmt.info"
  ellipsis="6"
  @clickImages="clickImages"
>
  <template #comment-labels>
    <img
      class="nut-comment-header__labels--item"
      src="https://storage.360buyimg.com/imgtools/78925d9440-f9e874d0-e93d-11eb-8e5c-0da9e18a13b1.png"
      style="height: 12px"
    />
  </template>

  <template #comment-shop-reply>
    <div class="nut-comment-shop">
      <span>京东美妆国际：</span
      >尊敬的客户您好，非常抱歉给您带来不愉快的购物体验，关于过敏，什么成分都不存在个别性和普遍性。
    </div>
  </template>
</nut-comment>

</template>
<script>
import { reactive, ref,onMounted } from 'vue';
export default {
  setup() {
    let cmt = ref({});
    onMounted(()=>{
      fetch('//storage.360buyimg.com/nutui/3x/comment_data.json')
        .then((response) => response.json())
        .then((res) => {
          cmt.value = res.Comment;
        }) 
        .catch((err) => console.log('Oh, error', err)); 
    })
    const clickImages = (imgs)=>{
      console.log('进行图片展示',imgs)
    }
    return {
      cmt,
      clickImages
    };
  }
}

```
:::

### Additional Review

:::demo 
```html
<template>
<nut-comment
  imagesRows="multi"
  :images="cmt.images"
  :videos="cmt.videos"
  :info="cmt.info"
  :follow="cmt.follow"
  @clickImages="clickImages"
></nut-comment>

</template>
<script>
import { reactive, ref,onMounted } from 'vue';
export default {
  setup() {
    let cmt = ref({});
    onMounted(()=>{
      fetch('//storage.360buyimg.com/nutui/3x/comment_data.json')
        .then((response) => response.json())
        .then((res) => {
          cmt.value = res.Comment;
        }) 
        .catch((err) => console.log('Oh, error', err)); 
    })
    const clickImages = (imgs)=>{
      console.log('进行图片展示',imgs)
    }
    return {
      cmt,
      clickImages
    };
  }
}

```
:::
## API

### Props

| Attribute            | Description               | Type   | Default  |
|--------------|----------------------------------|--------|------------------|
| headerType         | Header type      | String | default               |
| imagesRows         | Comment picture shows type of lines    | String | one               |
| ellipsis        | Ellipsis number       | [String,Number] | 2               |
| videos         | Videos data | Array | []              |
| images | Images data    | Array | [] |
| info     | Comment data                      | Object | {}             |
| follow     | Additional review data                      | Object | {}             |
| operation | Bottom button   | Array | ["replay", "like", "more"] |

### Events

| Attribute            | Description               | Arguments   |
|--------|----------------|--------------|
| click-operate  | Emitted when to click bottom button | type |
| click  | Emitted when to click comment | type |
| click-images | Emitted when to click images or videos | {type,index,value}|

### Slots

Slots are defined in some areas and can be replaced as required

| Attribute            | Description               |
|--------|----------------|
| comment-labels  | Comment user label | 
| comment-shop-reply  | At the bottom of the comment is the display of the merchant's response | 

### images Data

```javascript
const images = [{
    "smallImgUrl": '', // Small picture, used for table presentation
    "bigImgUrl": '', // Big picture, big picture display use
    "imgUrl": "", // Out figure
}]
```

### videos Data

```javascript
const videos = [{
    "mainUrl": "", // Video mask image
    "videoUrl": "", // Video url
}]
```

### info Data

```javascript
const info = [{
  "content": "",  // Comment on the details
  "nickName": "", // The name of the reviewer
  "score": 5, // Number of comment stars
  "avatar": "",  // The avatar of the reviewer
  "time": "", // Comment time
  "size": "", // Comment good size
  "replay":23, // Number of replies to this comment
  "like":1, // Number of likes for this comment
}]
```
