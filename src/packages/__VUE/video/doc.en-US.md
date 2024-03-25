# Video

### Intro

Video player implemented by native video

### Install

```js
import { createApp } from 'vue'
import { Video, Button } from '@nutui/nutui'

const app = createApp()
app.use(Video)
```

### Basic Usage

> demo: video basic

### Auto play

`autoplay` Property to set video autoplay

> demo: video autoplay

### Video cover poster settings

The `poster` property sets the video poster

> demo: video poster

### play inline

The `playsinline` property sets the mobile terminal video to play in line and prevents the newly opened page from playing (compatible with IOS and some Android machines)

> demo: video playsinline

### Set video as background

When setting the video as the background image, it is necessary to set `muted`, `disabled`, `operation prohibited`, `loop`, `loop` and `autoplay` to `true`, and the mobile terminal needs to set `playinline` for in-line display

> demo: video background

### Ref Methods v4.1.6

> demo: video methods

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| source | Video url and type settings | VideoSource | {} |
| options | Control video playback properties | VideoOptions | {} |

### VideoSource 数据结构

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| src | Video Src | boolean |
| type | Video Type | string |

### VideoOptions 数据结构

| key | Description | Type | Default |
| --- | --- | --- | --- |
| autoplay | Auto play | boolean | `false` |
| poster | Poster settings | string | - |
| loop | Poster loop | boolean | `false` |
| controls | Show operation control | boolean | `true` |
| muted | Mute | boolean | `false` |
| volume | Volume control | number | `0.5` |
| disabled | Disable operation (e.g. background image of circular playback, prohibit operation) | boolean | `false` |
| playsinline | Whether to set as inline playback element (solve Android compatibility problem) | boolean | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| play | play event | - |
| pause | pause event | - |
| playend | Playback completion callback | - |
| time | Triggered when playing(current is the current playback time，total is the total time) | (current:string,total:string) |

### Ref v4.1.6

| Event | Description |
| --- | --- |
| play | play |
| pause | pause |
| stop | stop |
| muted | muted |
| unmuted | unmuted |
