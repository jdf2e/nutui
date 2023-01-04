#  Signature autograph

### Intro
    
Signature component based on canvas.

### Install

``` javascript
import { createApp } from 'vue';
import { Signature} from '@nutui/nutui';

const app = createApp();
app.use(Signature);

```
    



### Basic usage

:::demo

```html
<template>
  <nut-signature  
    @confirm="confirm" 
    @clear="clear"
  ></nut-signature>
  <p class="demo-tips demo">Tips: click the confirm button, and the signature image is displayed below</p>
</template>
<script>
export default {
    props: {},
    setup() {
        const confirm = (canvas, data) => {
            let img = document.createElement('img');
            img.src = data;
            document.querySelector('.demo').appendChild(img);
        };
        const clear = () => {
            let img = document.querySelector('.demo img'); 
            if (img) {
                img.remove();
            }
        }
        return { confirm, clear };
    }
}
</script>
<script>
import { reactive } from 'vue';
export default {
  props: {},
  setup() {
    const confirm = (canvas, data) => {
        let img = document.createElement('img');
        img.src = data;
        document.querySelector('.demo').appendChild(img);
    };
    const clear = () => {
        let img = document.querySelector('.demo img'); 
        if (img) {
            img.remove();
        }
    }
    return { confirm, clear };
  }
};
</script>
```
:::
### Modify color and signature thickness

:::demo

```html
<template>
  <nut-signature  
    :lineWidth="lineWidth" 
    :strokeStyle="strokeStyle"
    @confirm="confirm" 
    @clear="clear"
  ></nut-signature>
  <p class="demo-tips demo">Tips: click the confirm button, and the signature image is displayed below</p>
</template>
<script>
import { reactive } from 'vue';
export default {
  props: {},
  setup() {
    const state = reactive({
      lineWidth: 4,
      strokeStyle: 'green'
    });
    const confirm = (canvas, data) => {
        let img = document.createElement('img');
        img.src = data;
        document.querySelector('.demo').appendChild(img);
    };
    const clear = () => {
        let img = document.querySelector('.demo img'); 
        if (img) {
            img.remove();
        }
    }
    return { ...state, confirm, clear };
  }
};
</script>

```
:::  
## API
    
### Props
 | parameter | description | type | default
|----- | ----- | ----- | -----
| custom-class | custom `class` | string | `-`
| line-width | line width | number | `3`
| stroke-style | drawing stroke color | string | `#000`
| type | image format | string | `png`
| un-support-tpl | Display copy when Canvas is not supported | string | `Sorry, the current browser does not support Canvas, so this control cannot be used! `

### Events

| field | description | callback parameter
|----- | ----- | -----
| start | Signature start callback function (refers to the start of a certain stroke) | `-`
| signing | The callback function that is signing (referring to a certain stroke in progress) | `event`
| end | Signature end callback function (referring to the end of a certain stroke) | `-`
| confirm | Click the confirm button to trigger the event callback function | `canvas and signature image display data URI`
| clear | Click the re-sign button to trigger the event callback function | `-`