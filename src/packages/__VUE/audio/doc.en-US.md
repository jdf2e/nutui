# Audio

### Intro

Audio Playing

### Install

```js
import { createApp } from 'vue'
import { Audio } from '@nutui/nutui'

const app = createApp()
app.use(Audio)
```

### Basic Usage

> demo: audio basic

### Voice Playing

> demo: audio play

### Progress

> demo: audio progress

### Custom Control

> demo: audio control

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| url | Audio URL | string | `''` |
| muted | Whether to be muted | boolean | `false` |
| autoplay | Whether to autoplay | boolean | `false` |
| loop | Whether to loop playback | boolean | `false` |
| preload | Whether to proload audio | string | `auto` |
| type | Show type | String | `progress` |

### Events

| Attribute | Description | CallBack |
| --- | --- | --- |
| fast-back | Emitted when audio back | play time（millisecond） |
| forward | Emitted when audio forward | play time（millisecond） |
| play | Emitted when audio play or pause | play status |
| ended | Emitted when audio ended | —— |
| mute | Emitted when audio mute | —— |
| change-progress | Emitted when audio progress change | play time（millisecond） |
| can-play | Emitted when the user agent can play the media | `event: Event` |
