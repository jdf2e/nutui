# ConfigProvider

### Intro

It is used to globally configure nutui components and provides dark mode.

### Install

```javascript

import { createApp } from 'vue';
import { ConfigProvider } from '@nutui/nutui';

const app = createApp();
app.use(ConfigProvider);

```

### dark mode

Dark mode can be enabled by setting the `theme` property of the ConfigProvider component to `dark`.

Dark mode takes effect globally, making all NutUI components on the page dark.

:::demo

```html
<template>
  <nut-config-provider :theme="theme">
      <nut-cell title="Switch Dark Mode">
        <template v-slot:link>
          <nut-switch v-model="switchChecked" @change="switchChange" />
        </template>
      </nut-cell>
      <nut-cell title="Title" sub-title="Subtitle Description" desc="Description"></nut-cell>
  </nut-config-provider>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const switchChecked = ref(false);
      const theme = ref('');
      const switchChange = (v: boolean) => {
        theme.value = v ? 'dark' : '';
      };

      return { translate, switchChecked, switchChange, theme };
    }
  };
</script>
```

:::

## API

### Props

| Attribute | Description                                                          | Type   | Default |
|-----------|----------------------------------------------------------------------|--------|---------|
| theme     | Theme style, set to `dark` to enable dark mode, take effect globally | String | -       |
| tag       | HTML Tag of root element                                             | String | div     |