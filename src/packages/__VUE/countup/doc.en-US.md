# Countup Digital scrolling

### Intro

Digital scrolling component, which is used to display the dynamic effect of digital

### Install

```js
import { createApp } from 'vue'
import { Countup } from '@nutui/nutui'

const app = createApp()
app.use(Countup)
```

### Basic Usage

> demo: countup basic

### Custom scrolling picture display

> demo: countup custom

### luck draw(simulated rolling draw)

> demo: countup scroll

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| init-num | initial number | number | `0` |
| end-num | end number | number | `0` |
| speed | interval number, currently only supports basic usage | number | `1` |
| to-fixed | retain the number of decimal places | number | `0` |
| start-flag | flag to trigger number scrolling | boolean | `true` |
| during | rolling time to run | number | `1000` |
| num-width | Number width, often used to customize seamless scrolling | number | `20` |
| num-height | Number height, often used to customize seamless scrolling (required for lottery function) | number | `20` |
| custom-change-num | The number to change (for custom pictures, initNum and endNum are invalid here) | number | `1` |
| custom-bg-img | Custom image (it is recommended to use Sprite image, and Sprite image must be used to use the lottery function) | string | - |
| custom-spac-num | There may be space between numbers in the image | number | `0` |
| type | lottery function pass machine, the optional value is `machine` `' '` | string | `''` |
| machine-prize-num | Number of prizes, how many prizes in total, must be passed | number | `0` |
| machine-num | lottery position, that is, how many times to roll, must pass | number | `3` |
| machine-prize-level | The winning icon, the position of the icon in the sprite image | number | `0` |
| machine-turn-more | number of turns | number | `0` |

> Note: The lottery function needs to be calculated in conjunction with the position of the icon, so the height num-height of a single icon in the sprite image needs to be passed in; the winning prize is positioned according to the number of prizes in the sprite image, from 1 to N;

### Events

| Event | description | callback parameter |
| --- | --- | --- |
| scroll-end | callback function after scrolling ends | - |
