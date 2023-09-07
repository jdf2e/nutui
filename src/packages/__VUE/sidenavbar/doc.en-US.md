# SideNavbar

### Intro

For content selection and switching

### Install

```js
import { createApp } from 'vue';
import { SideNavbar, SubSideNavbar, SideNavbarItem } from '@nutui/nutui';

const app = createApp();
app.use(SideNavbar);
app.use(SubSideNavbar);
app.use(SideNavbarItem);
```

### Basic Usage

The left and right display can be controlled by setting `'position'`

:::demo

```vue
<template>
  <nut-cell @click="handleClick">
    <span><label>right</label></span>
  </nut-cell>
  <nut-popup position="right" v-model:visible="show" style="width: 80%; height: 100%">
    <nut-side-navbar>
      <nut-sub-side-navbar title="Intelligent City Ai" ikey="6">
        <nut-sub-side-navbar title="Human body recognition 1" ikey="9">
          <nut-side-navbar-item ikey="10" title="Human testing 1"></nut-side-navbar-item>
          <nut-side-navbar-item ikey="11" title="Fine grained portrait segment 1"></nut-side-navbar-item>
        </nut-sub-side-navbar>
        <nut-sub-side-navbar title="Human body recognition 2" ikey="12">
          <nut-side-navbar-item ikey="13" title="Human testing 2"></nut-side-navbar-item>
          <nut-side-navbar-item ikey="14" title="Fine grained portrait segment 2"></nut-side-navbar-item>
        </nut-sub-side-navbar>
      </nut-sub-side-navbar>
    </nut-side-navbar>
  </nut-popup>
</template>
<script setup>
import { ref } from 'vue';
const show = ref(false);
const handleClick = () => {
  show.value = true;
};
</script>
```

:::

### Nesting (up to three layers recommended)

:::demo

```vue
<template>
  <nut-cell @click="handleClick">
    <span><label>show</label></span>
  </nut-cell>
  <nut-popup position="right" v-model:visible="show" style="width: 80%; height: 100%">
    <nut-side-navbar :show="show">
      <nut-side-navbar-item ikey="1" title="Face recognition"></nut-side-navbar-item>
      <nut-side-navbar-item ikey="2" title="natural language processing"></nut-side-navbar-item>
      <nut-sub-side-navbar title="image understanding" ikey="3" :open="false">
        <nut-side-navbar-item ikey="4" title="Dish identification"></nut-side-navbar-item>
        <nut-side-navbar-item ikey="5" title="Photo shopping"></nut-side-navbar-item>
      </nut-sub-side-navbar>
      <nut-sub-side-navbar title="Intelligent City Ai" ikey="6">
        <nut-side-navbar-item ikey="7" title="Enterprise risk early warning model"></nut-side-navbar-item>
        <nut-side-navbar-item ikey="8" title="Water quality inspection"></nut-side-navbar-item>
        <nut-sub-side-navbar title="Human body recognition" ikey="9">
          <nut-side-navbar-item ikey="10" title="Human testing"></nut-side-navbar-item>
          <nut-side-navbar-item ikey="11" title="Fine grained portrait segment"></nut-side-navbar-item>
        </nut-sub-side-navbar>
      </nut-sub-side-navbar>
      <nut-sub-side-navbar title="natural language processing" ikey="12">
        <nut-side-navbar-item ikey="13" title="lexical analysis"></nut-side-navbar-item>
        <nut-side-navbar-item ikey="14" title="Syntactic analysis"></nut-side-navbar-item>
      </nut-sub-side-navbar>
      <nut-sub-side-navbar v-for="item in navs" :key="item.id" :title="item.name" :ikey="item.id">
        <nut-side-navbar-item v-for="citem in item.arr" :key="citem.id" :title="citem.name"></nut-side-navbar-item>
      </nut-sub-side-navbar>
    </nut-side-navbar>
  </nut-popup>
</template>
<script setup>
import { ref } from 'vue';
const show = ref(false);
const navs = ref([]);
const handleClick = () => {
  show.value = true;
  setTimeout(() => {
    navs.value = [
      {
        id: 16,
        name: 'async1',
        arr: [{ pid: 16, id: 17, name: 'async-id17' }]
      },
      {
        id: 17,
        name: 'async2',
        arr: [{ pid: 17, id: 18, name: 'async-id18' }]
      }
    ];
  }, 2000);
};
</script>
```

:::

## API

### SideNavbar Props

| Attribute | Description             | Type             | Default |
| --------- | ----------------------- | ---------------- | ------- |
| offset    | Navigation indent width | number \| string | `15`    |

### SubSideNavbar Props

| Attribute | Description                               | Type             | Default |
| --------- | ----------------------------------------- | ---------------- | ------- |
| title     | Navigation title                          | string           | ``      |
| ikey      | Navigation unique identifier              | number \| string | ``      |
| open      | Whether navigation is expanded by default | boolean          | `true`  |

### SideNavbarItem Props

| Attribute | Description                  | Type             | Default |
| --------- | ---------------------------- | ---------------- | ------- |
| title     | Navigation title             | string           | `15`    |
| ikey      | Navigation unique identifier | number \| string | ``      |

### SubSideNavbar Events

| Event       | Description      | Arguments |
| ----------- | ---------------- | --------- |
| title-click | Navigation Click | -         |

### SideNavbarItem Events

| Event | Description      | Arguments |
| ----- | ---------------- | --------- |
| click | Navigation Click | -         |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                        | Default Value                |
| ------------------------------------------- | ---------------------------- |
| --nut-sidenavbar-content-bg-color           | _var(--nut-white)_           |
| --nut-sidenavbar-sub-title-border-color     | _#f6f6f6_                    |
| --nut-sidenavbar-sub-title-bg-color         | _#f6f6f6_                    |
| --nut-sidenavbar-sub-title-font-size        | _var(--nut-font-size-large)_ |
| --nut-sidenavbar-sub-title-radius           | _0_                          |
| --nut-sidenavbar-sub-title-border           | _0_                          |
| --nut-sidenavbar-sub-title-width            | _100%_                       |
| --nut-sidenavbar-sub-title-height           | _40px_                       |
| --nut-sidenavbar-sub-title-text-line-height | _40px_                       |
| --nut-sidenavbar-sub-title-text-color       | _var(--nut-title-color)_     |
| --nut-sidenavbar-item-title-color           | _#333_                       |
| --nut-sidenavbar-item-title-bg-color        | _var(--nut-white)_           |
| --nut-sidenavbar-item-height                | _40px_                       |
| --nut-sidenavbar-item-line-height           | _40px_                       |
| --nut-sidenavbar-item-font-size             | _16px_                       |
