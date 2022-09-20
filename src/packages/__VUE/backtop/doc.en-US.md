# BackTop

### Intro

Provides a quick return to the top function for long pages.

### Install

```javascript

import { createApp } from 'vue';
import { BackTop,Icon } from '@nutui/nutui';

const app = createApp();
app.use(BackTop);
app.use(Icon);

```

### Basic Usage

:::demo
```html

<template>
  <div class="demo" id="elId">
    <div class="text-data">test data1</div>
    <div class="text-data">test data2</div>
    <div class="text-data">test data3</div>
    <div class="text-data">test data4</div>
    <div class="text-data">test data5</div>
    <div class="text-data">test data6</div>
    <div class="text-data">test data7</div>
    <div class="text-data">test data8</div>
    <div class="text-data">test data9</div>
    <div class="text-data">test data10</div>
    <div class="text-data">test data11</div>
    <div class="text-data">test data12</div>
    <div class="text-data">test data13</div>
    <div class="text-data">test data14</div>
    <div class="text-data">test data15</div>
    <div class="text-data">test data16</div>
    <div class="text-data">test data17</div>
    <div class="text-data">test data18</div>
    <div class="text-data">test data19</div>
    <div class="text-data">test data20</div>
    <div class="text-data">test data21</div>
    <div class="text-data">test data22</div>
    <div class="text-data">test data23</div>
    <div class="text-data">test data24</div>
    <nut-backtop @click="handleClick" ></nut-backtop>
  </div>
</template>
<script>
  export default {
    setup() {
      const handleClick = () => {
        console.log('backtop');
      };

      return {
        handleClick
      };
    }
  };
</script>
<style lang="scss" scoped>
.demo {
  .text-data {
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 20px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 46px;
    background: rgba(255, 255, 255, 1);
    border-radius: 7px;
    box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
    line-height: 19px;
    font-size: 13px;
    color: rgba(102, 102, 102, 1);
  }
}
</style>

```
:::

### Distance

:::demo
```html
<template>
  <div class="demo" id="elId">
    <div class="text-data">test data1</div>
    <div class="text-data">test data2</div>
    <div class="text-data">test data3</div>
    <div class="text-data">test data4</div>
    <div class="text-data">test data5</div>
    <div class="text-data">test data6</div>
    <div class="text-data">test data7</div>
    <div class="text-data">test data8</div>
    <div class="text-data">test data9</div>
    <div class="text-data">test data10</div>
    <div class="text-data">test data11</div>
    <div class="text-data">test data12</div>
    <div class="text-data">test data13</div>
    <div class="text-data">test data14</div>
    <div class="text-data">test data15</div>
    <div class="text-data">test data16</div>
    <div class="text-data">test data17</div>
    <div class="text-data">test data18</div>
    <div class="text-data">test data19</div>
    <div class="text-data">test data20</div>
    <div class="text-data">test data21</div>
    <div class="text-data">test data22</div>
    <div class="text-data">test data23</div>
    <div class="text-data">test data24</div>
    <nut-backtop :distance="200" ></nut-backtop>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  .text-data {
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 20px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 46px;
    background: rgba(255, 255, 255, 1);
    border-radius: 7px;
    box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
    line-height: 19px;
    font-size: 13px;
    color: rgba(102, 102, 102, 1);
  }
}
</style>
```
:::

### Custom Style

:::demo
```html
<template>
  <div class="demo" id="elId">
    <div class="text-data">test data1</div>
    <div class="text-data">test data2</div>
    <div class="text-data">test data3</div>
    <div class="text-data">test data4</div>
    <div class="text-data">test data5</div>
    <div class="text-data">test data6</div>
    <div class="text-data">test data7</div>
    <div class="text-data">test data8</div>
    <div class="text-data">test data9</div>
    <div class="text-data">test data10</div>
    <div class="text-data">test data11</div>
    <div class="text-data">test data12</div>
    <div class="text-data">test data13</div>
    <div class="text-data">test data14</div>
    <div class="text-data">test data15</div>
    <div class="text-data">test data16</div>
    <div class="text-data">test data17</div>
    <div class="text-data">test data18</div>
    <div class="text-data">test data19</div>
    <div class="text-data">test data20</div>
    <div class="text-data">test data21</div>
    <div class="text-data">test data22</div>
    <div class="text-data">test data23</div>
    <div class="text-data">test data24</div>
    <nut-backtop @click="handleClick" :distance="100" :bottom="90" ><div>无</div></nut-backtop>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  .text-data {
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 20px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 46px;
    background: rgba(255, 255, 255, 1);
    border-radius: 7px;
    box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
    line-height: 19px;
    font-size: 13px;
    color: rgba(102, 102, 102, 1);
  }
}
</style>
```
:::
### API

### Props

| Attribute            | Description                 | Type    | Default  |
|-----------------|------------------------------------------|---------|---------|
| el-id           | Get the parent element of the listening element         | String | -       |
| bottom         | Distance from bottom of page    | Number  | `20`       |
| right        | Distance from the right side of the page      | Number |  `10`  |
| distance     | How high to scroll the page vertically   | Number  | `200`      |
| z-index         | Set the component z-index   | Number  | `10`       |  
| is-animation         | Whether there is animation, mutually exclusive with the duration parameter   | Boolean  | `true`       |  
| duration         | Set animation duration   | Number  | `1000`       |                                          

### Events
| Event  | Description     | Arguments    |
|-------|----------|-------------|
| click | Emitted when component is clicked | event: MouseEvent |

### Slots

| Name    | Description         |
|---------|--------------|
| default | 	The default slot is used to customize the content |