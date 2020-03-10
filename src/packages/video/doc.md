# Video 视频

视频播放器

## 基本用法

```html
<nut-video :sources="sources" :options="options"></nut-video>
```

```javascript
export default {
  methods: {
    data() {
        return {
            sources: [
                {
                    src:
                        'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
                    type: 'video/mp4'
                }
            ],
            options: {
                controls: true
            },

    },
  }
};
```

## 自动播放

```html
<nut-video :sources="sources" :options="options2"></nut-video>
```

```javascript
export default {
  methods: {
    data() {
        return {
            options2: {
                autoplay: true,
                volume: 0.6,
                poster: ''
            },

    },
  }
};
```

## 初始化静音

```html
<nut-video :sources="sources" :options="options3"></nut-video>
```

```javascript
export default {
  methods: {
    data() {
        return {
            options3: {
                controls: true,
                volume: 0.6,
                poster: '',
                muted: true
            },

    },
  }
};
```

## 视频背景图

行内展示，自动播放，循环播放，不可操作，静音

```html
<nut-video :sources="sources" :options="options4"></nut-video>
```

```javascript
export default {
  methods: {
    data() {
        return {
            options4: {
                autoplay: true,
                volume: 0.6,
                poster: '',
                muted: true,
                disabled: true,
                playsinline: true,
                loop: true
            },

    },
  }
};
```

## Prop

| 字段                | 说明                                       | 类型    | 默认值   |
| ------------------- | ------------------------------------------ | ------- | -------- |
| sources             | 视频地址和类型设置                         | Array   | -        |
| options             | 控制视频播放属性                           | Object  | required |
| options.autoplay    | 是否自动播放                               | Boolean | false    |
| options.poster      | 海报设置                                   | String  | -        |
| options.loop        | 是否循环播放                               | Boolean | false    |
| options.controls    | 是否展示操作栏                             | Boolean | true     |
| options.muted       | 是否静音                                   | Boolean | false    |
| options.disabled    | 是否自动播放                               | Boolean | false    |
| options.playsinline | 是否设置为行内播放元素（解决安卓兼容问题） | Boolean | false    |
