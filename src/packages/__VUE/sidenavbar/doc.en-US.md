# SideNavBar

### Intro

For content selection and switching

### Install

``` javascript
import { createApp } from 'vue';
// vue
import { SideNavBar, SubSideNavBar, SideNavBarItem } from '@nutui/nutui';
// taro
import { SideNavBar, SubSideNavBar, SideNavBarItem } from '@nutui/nutui-taro';

const app = createApp();
app.use(SideNavBar);
app.use(SubSideNavBar);
app.use(SideNavBarItem);
```

### Basic Usage

:::demo

``` html
<template>
  <nut-cell @click="handleClick1">
    <span><label>right</label></span>
  </nut-cell>
  <nut-popup position="right" v-model:visible="show1" :style="{ width, height }">
    <nut-sidenavbar>
      <nut-subsidenavbar title="Intelligent City Ai" ikey="6">
        <nut-subsidenavbar title="Human body recognition 1" ikey="9">
          <nut-sidenavbaritem ikey="10" title="Human testing 1"></nut-sidenavbaritem>
          <nut-sidenavbaritem ikey="11" title="Fine grained portrait segment 1"></nut-sidenavbaritem>
        </nut-subsidenavbar>
        <nut-subsidenavbar title="Human body recognition 2" ikey="12">
          <nut-sidenavbaritem ikey="13" title="Human testing 2"></nut-sidenavbaritem>
          <nut-sidenavbaritem ikey="14" title="Fine grained portrait segment 2"></nut-sidenavbaritem>
        </nut-subsidenavbar>
      </nut-subsidenavbar>
    </nut-sidenavbar>
  </nut-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show1: false,
        width: '80%',
        height: '100%',
      });

      const handleClick1 = () => {
        state.show1 = true;
      };

      return {
        ...toRefs(state),
        handleClick1
      };
    }
  }
</script>
```

:::

### Nesting (up to three layers recommended)
> The miniProgram does not support asynchronous loading temporarily

:::demo

``` html
<template>
  <nut-cell @click="handleClick3">
    <span><label>show</label></span>
  </nut-cell>
  <nut-popup position="right" v-model:visible="show3" :style="{ width, height }">
    <nut-sidenavbar :show="show3">
      <nut-sidenavbaritem ikey="1" title="Face recognition" @click="handleClick4('Face recognition')"></nut-sidenavbaritem>
      <nut-sidenavbaritem ikey="2" title="natural language processing"></nut-sidenavbaritem>
      <nut-subsidenavbar title="image understanding" ikey="3" :open="false">
        <nut-sidenavbaritem ikey="4" title="Dish identification"></nut-sidenavbaritem>
        <nut-sidenavbaritem ikey="5" title="Photo shopping"></nut-sidenavbaritem>
      </nut-subsidenavbar>
      <nut-subsidenavbar title="Intelligent City Ai" ikey="6">
        <nut-sidenavbaritem ikey="7" title="Enterprise risk early warning model"></nut-sidenavbaritem>
        <nut-sidenavbaritem ikey="8" title="Water quality inspection"></nut-sidenavbaritem>
        <nut-subsidenavbar title="Human body recognition" ikey="9">
          <nut-sidenavbaritem ikey="10" title="Human testing"></nut-sidenavbaritem>
          <nut-sidenavbaritem ikey="11" title="Fine grained portrait segment"></nut-sidenavbaritem>
        </nut-subsidenavbar>
      </nut-subsidenavbar>
      <nut-subsidenavbar title="natural language processing" ikey="12">
        <nut-sidenavbaritem ikey="13" title="lexical analysis"></nut-sidenavbaritem>
        <nut-sidenavbaritem ikey="14" title="Syntactic analysis"></nut-sidenavbaritem>
      </nut-subsidenavbar>
      <nut-subsidenavbar v-for="item in navs" :key="item.id" :title="item.name" :ikey="item.id">
        <nut-sidenavbaritem v-for="citem in item.arr" :key="citem.id" :title="citem.name"></nut-sidenavbaritem>
      </nut-subsidenavbar>
    </nut-sidenavbar>
  </nut-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show3: false,
        width: '80%',
        height: '100%',
        navs: [] as any[]
      });

      const handleClick3 = () => {
        state.show3 = true;
        setTimeout(() => {
          state.navs = [
            {
              id: 16,
              name: 'asyc abc16',
              arr: [{ pid: 16, id: 17, name: 'abc16-id17' }]
            },
            {
              id: 17,
              name: 'asyc abc17',
              arr: [{ pid: 17, id: 18, name: 'abc17-id18' }]
            }
          ];
        }, 2000);
      };

      const handleClick4 = (msg: string) => {
        
      }

      return {
        ...toRefs(state),
        handleClick3,
        handleClick4
      };
    }
  }
</script>
```

:::

## API

### SideNavBar Props

| Attribute                   | Description                                                             | Type    | Default |
|------------------------|----------------------------------------------------------------|---------|------|
| offset                 | Navigation indent width                                                    | Number、String  | `15`

### SubSideNavBar Props

| Attribute                   | Description                                                             | Type    | Default |
|------------------------|----------------------------------------------------------------|---------|------|
| title                 | Navigation title                                                    | String  | ``
| ikey                 | Navigation unique identifier                                                    | String、Number  | ``
| open                 | Whether navigation is expanded by default                                                    | Boolean  | `true`

### SideNavBarItem Props

| Attribute                   | Description                                                             | Type    | Default |
|------------------------|----------------------------------------------------------------|---------|------|
| title                 | Navigation title                                                    | String  | `15`
| ikey                 | Navigation unique identifier                                                    | String、Number  | ``


### SubSideNavBar Events

| Event  | Description     | Arguments    |
|-------|----------|-------------|
| title-click | Navigation Click | - |

### SideNavBarItem Events

| Event  | Description     | Arguments    |
|-------|----------|-------------|
| click | Navigation Click | - |


