# Video 视频

视频播放器

## 基本用法

```html
<nut-video :sources="sources" :options="options" @play="play" @pause="pause" @playend="playend"> </nut-video>
```

> source 属性：设置视频地址和格式类型，可设置多种视频文件格式以便支持不同浏览器的解析支持，一般采用：MP4、webm、ogv 等格式

> options 属性：设置视频的播放参数，如：autoplay、controls、poster、loop、volume 等

```javascript
export default {
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
		}
    },
    methods: {
        play(elm){
            console.log('play',elm)
        },
        pause(e){
            console.log('pause')
        },
        playend(e){
            alert('播放结束')
        }
    }
  
};
```

## 自动播放

autoplay 属性设置视频自动播放

```html
<nut-video :sources="sources" :options="options2"></nut-video>
```

```javascript
export default {
  
    data() {
        return {
            options2: {
                autoplay: true,
                volume: 0.6,
                poster: ''
            },
		}
    },
  
};
```

## 初始化静音

muted 属性设置视频初始化静音

```html
<nut-video :sources="sources" :options="options3"></nut-video>
```

```javascript
export default {
    data() {
        return {
            options3: {
                controls: true,
                muted: true
            },
		}
    },
  
};
```

## 视频封面海报设置

poster 属性设置视频海报

```html
<nut-video :sources="sources" :options="options4"></nut-video>
```

```javascript
export default {
    data() {
        return {
            options4: {
                controls: true,
                poster: 'https://img10.360buyimg.com/ling/s640x356_jfs/t1/96045/31/13848/43886/5e5e35ffE68170c74/861a6394e38810f0.png',
            },
		}
    },
};
```

## 行内播放

playsinline 属性设置移动端视频行内播放，阻止新打开页面播放（兼容 ios，兼容部分安卓机）

```html
<nut-video :sources="sources" :options="options5"></nut-video>
```

```javascript
export default {
    data() {
        return {
            options5: {
                playsinline: true,
                controls: true,
            },
		}
    },
};
```

## 视频背景图

当设置视频为背景图时需要将 muted 静音、 disabled 禁止操作、loop 循环播放、autoplay 自动播放设置为 true，移动端需要设置 playsinline 行内展示

```html
<nut-video :sources="sources" :options="options5"></nut-video>
```

```javascript
export default {
    data() {
        return {
            options6: {
                autoplay: true,
                volume: 0.6,
                poster: '',
                muted: true,
                disabled: true,
                playsinline: true,
                loop: true
            },
		}
    }
};
```

## 视频切换

当视频地址发生变化时，重置视频

```html
  	<div class="video-con" >
		<nut-video :sources="sources1" :options="options"></nut-video>
	</div>
```

```javascript
export default {
    data() {
        return {
            sources1: [
                {
                    src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
                    type: 'video/mp4'
                }
            ],
            options: {
                controls: true
            },

    	},
  	}
	methods: {
        changeVideo() {
			this.sources1 = [
				{
					src: 'http://vjs.zencdn.net/v/oceans.mp4',
					type: 'video/mp4'
				}
			]
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
| options.volume      | 音量控制                                   | Number  | 0.5      |
| options.disabled    | 禁用操作（如循环播放的背景图，禁止操作）   | Boolean | false    |
| options.playsinline | 是否设置为行内播放元素（解决安卓兼容问题） | Boolean | false    |

### Event

| 事件名称 | 说明         | 回调参数 |
| -------- | ------------ | -------- |
| play     | 播放         | --       |
| pause    | 暂停         | --       |
| playend  | 播放完成回调 | --       |
