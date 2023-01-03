#  Countup Digital scrolling

### Intro

Digital scrolling component, which is used to display the dynamic effect of digital

### Install


``` javascript
import { createApp } from 'vue';
import { Countup } from '@nutui/nutui';

const app = createApp();
app.use(Countup);
```


### Basic Usage
:::demo

```html
<template>
    <nut-countup :init-num='0' :end-num='200'></nut-countup>
    <nut-countup :init-num='150.00' :end-num='0.00' :speed='2.62' :to-fixed='2'></nut-countup>
    <nut-countup :init-num='1000.00' :end-num='0.00' :speed='50' :to-fixed='2'></nut-countup>
</template>
```

:::
### Digital scrolling
:::demo

```html
<template>
    <nut-countup :scrolling="true" :init-num='17.618' :during="600"></nut-countup>
</template>
```

:::

### Custom scrolling picture display
:::demo

```html
<template>
    <nut-countup
        :custom-change-num="customNumber"
        :custom-bg-img="bgImage"
        :custom-spac-num="11"
        :num-width="33"
        :num-height="47"
        :during="5000"
    >
    </nut-countup>
</template>
<script>
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const customNumber = ref(618);
        const bgImage = ref('https://img10.360buyimg.com/imagetools/jfs/t1/133024/3/2251/2646/5ee7549aE8dc02d7e/de6901b6c72db396.png');
        const run = () => {
            let timer = null;
            timer = setInterval(() => {
                customNumber.value = Math.floor(Math.random() * (700 - 100 + 1) + 100);
            }, 5000)
        };
        onMounted(() => {
            run();
        });
        return {
            customNumber,
            bgImage
        }
    }
};
</script>
```
:::

### luck draw
:::demo

```html
<template>
    <nut-countup
        ref="countupMachineDom"
        type="machine"
        :machine-num="machineNum"
        :machine-prize-num="5"
        :machine-prize-level="prizeLevel"
        :custom-bg-img="bgImage"
        :num-width="100"
        :num-height="100"
        :during="3000"
        @scroll-end="scrollAniEnd"
    >
    </nut-countup>
    <nut-button @click="startRole" :disabled="startFlag">luck draw</nut-button>
</template>
<script>
import { ref, onMounted } from 'vue';
export default {
    setup() {
        const countupMachineDom = ref(null);
        const startFlag = ref(false);
        const machineNum = ref(3);
        const bgImage = ref('https://img10.360buyimg.com/imagetools/jfs/t1/121466/20/6784/28830/5f06e7f2Edbb8998c/9bdd9e7b24dff9fe.png');
        const prizeLevel = ref(0);
        const startRole = () => {
            prizeLevel.value = Math.floor(Math.random() * 5 + 1);
            startFlag.value = true;
            countupMachineDom.value.machineLuck();
        };

        const scrollAniEnd = () => {
            console.log('Congratulations on winning the prize!!!');
            setTimeout(() => {
                startFlag.value = false;
            }, 300);
        }

        return {
            countupMachineDom,
            startFlag,
            machineNum,
            bgImage,
            prizeLevel,
            startRole,
            scrollAniEnd
        }
    }
};
</script>
```
:::

## API
### Props

| Field | Description | Type | Default
|----- | ----- | ----- | -----
| init-num | initial number | number | `0`
| end-num | end number | number | `0`
| speed | interval number, currently only supports basic usage | number | `1`
| to-fixed | retain the number of decimal places | number | `subject to the number passed in`
| start-flag | flag to trigger number scrolling | boolean | `true`
| during | rolling time to run | number | `1000`
| num-width | Number width, often used to customize seamless scrolling | number | `20`
| num-height | Number height, often used to customize seamless scrolling (required for lottery function) | number | `20`
| scrolling | used for numeric scrolling display | boolean | `false`
| custom | for custom image scrolling | boolean | `false`
| custom-change-num | The number to change (for custom pictures, initNum and endNum are invalid here) | number | `1`
| custom-bg-img | Custom image (it is recommended to use Sprite image, and Sprite image must be used to use the lottery function) | - | `-`
| custom-spac-num | There may be space between numbers in the image | number | `0`
| type | "machine" must be passed when using the lottery function | string | `''`
| machine-prize-num | Number of prizes, how many prizes in total, must be passed | number | `4`
| machine-num | lottery position, that is, how many times to roll, must pass | number | `3`
| machine-prize-level | The winning icon, the position of the icon in the sprite image | number | `0`
| machine-turn-more | number of turns | number | `0`

> Note: The lottery function needs to be calculated in conjunction with the position of the icon, so the height num-height of a single icon in the sprite image needs to be passed in; the winning prize is positioned according to the number of prizes in the sprite image, from 1 to N;


### Events

| field | description | callback parameter
|----- | ----- | -----
| scroll-end | callback function after scrolling ends | `-`
    