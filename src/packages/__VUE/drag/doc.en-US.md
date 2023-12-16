# Drag

### Intro

Implement draggable arbitrary elements

### Install

```js
import { createApp } from 'vue';
import { Drag } from '@nutui/nutui';

const app = createApp();
app.use(Drag);
```

### Basic Usage

> demo: drag basic

### Limit Direction

> demo: drag direction

### Attract

> demo: drag attract

### Limit Boundary

> demo: drag boundary

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| attract | Whether to enable automatic edge suction | boolean | `false` |
| direction | The drag direction limit of the dragged element `x`, `y`, `all` | string | `'all' ` |
| boundary | The drag boundary of the dragged element | object | `{top: 0,left: 0,right: 0,bottom: 0}` |
