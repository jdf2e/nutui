#  CountUp Digital scrolling

### Intro

Digital scrolling component, which is used to display the dynamic effect of digital

### Install


``` javascript
import { createApp } from 'vue';
// vue
import { CountUp } from '@nutui/nutui';
// taro
import { CountUp } from '@nutui/nutui-taro';

const app = createApp();
app.use(CountUp);
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

| Attribute | Description | Type   | Default |
|----- | ----- | ----- | ----- 
| init-num | Initial number | Number | 0
| end-num | End number | Number | 0
| speed | Interval number. At present, only basic usage is supported | Number | 1
| to-fixed | Keep several decimal places | Number | The incoming number shall prevail
| start-flag | Identification that triggers digital scrolling | Boolean | true
| during | Scroll one run time | Number | 1000
| num-width | Digital width, often used to customize seamless scrolling | Number | 20
| num-height | Digital height, commonly used to customize seamless scrolling (lottery function is required) | Number | 20
| scrolling | For digital scrolling display | Boolean | false
| custom | Digital scrolling for custom pictures | Boolean | false
| custom-change-num | Number to change (for custom pictures, initnum \ endnum is invalid here) | Number | 1
| custom-bg-img | Custom picture (it is recommended to use sprite chart, and Sprite chart must be used when using lottery function) | - | -
| custom-spac-num | There may be a gap between the numbers in the picture | Number | 0
| type | "Machine" must be passed when using the lottery function | string | ''
| machine-prize-num | The number of prizes and the total number of prizes must be passed on | number | 4
| machine-num | Lucky draw, that is, rolling a few, must be passed | number | 3
| machine-prize-level | Winning icon, the position of the icon in sprite chart | number | 0
| machine-turn-more | Number of rolling turns | number | 0

> Note: the lottery function needs to be calculated in combination with the icon position, so the height num height of a single icon in sprite chart needs to be input; The winning prize is located according to the number of prize digits in sprite chart, from 1 to n；





### Events

| Event | Description   | Arguments   |
|----- | ----- | -----
| scroll-end | Callback function after scrolling | - 
    