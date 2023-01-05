# Table

### Intro

Used to display the basic table

### Install

```javascript
import { createApp } from 'vue';
import { Table } from '@nutui/nutui';

const app = createApp();
app.use(Table);
```

### Basic Usage

:::demo

```html
<template>
  <nut-table :columns="columns" :data="data"></nut-table>
</template>
<script lang="ts">
  import { reactive, toRefs, h } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        columns: [
          {
            title: 'name',
            key: 'name',
            stylehead: 'font-size:20px;color:red;font-weight:bolder;',
            stylecolumn: 'font-size:10px;color:blue;'
          },
          {
            title: 'sex',
            key: 'sex',
            render: (record) => {
              return h(
                'span',
                {
                  style: {
                    color: record.sex === 'woman' ? 'blue' : 'green'
                  }
                },
                record.sex
              );
            }
          },
          {
            title: 'education',
            key: 'record'
          }
        ],
        data: [
          {
            name: 'Tom',
            sex: 'man',
            record: 'primary school'
          },
          {
            name: 'Lucy',
            sex: 'woman',
            record: 'undergraduate'
          },
          {
            name: 'Jack',
            sex: 'man',
            record: 'high school'
          }
        ]
      });
      return {
        ...toRefs(state)
      };
    }
  };
</script>
```

:::

### Whether to display border and align text

:::demo

```html
<template>
  <nut-table :columns="columns" :data="data" :bordered="bordered"></nut-table>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        bordered: false,
        columns: [
          {
            title: 'name',
            key: 'name',
            align: 'center'
          },
          {
            title: 'sex',
            key: 'sex'
          },
          {
            title: 'education',
            key: 'record'
          }
        ],
        data: [
          {
            name: 'Tom',
            sex: 'man',
            record: 'primary school'
          },
          {
            name: 'Lucy',
            sex: 'woman',
            record: 'undergraduate'
          },
          {
            name: 'Jack',
            sex: 'man',
            record: 'high school'
          }
        ]
      });
      return {
        ...toRefs(state)
      };
    }
  };
</script>
```

:::

### Show summary bar

:::demo

```html
<template>
  <nut-table :columns="columns" :data="data" :summary="summary"></nut-table>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        columns: [
          {
            title: 'name',
            key: 'name'
          },
          {
            title: 'sex',
            key: 'sex'
          },
          {
            title: 'education',
            key: 'record'
          },
          {
            title: 'age',
            key: 'age'
          },
          {
            title: 'address',
            key: 'address'
          }
        ],
        data: [
          {
            name: 'Tom',
            sex: 'man',
            record: 'primary school',
            age: 13,
            address: 'beijing'
          },
          {
            name: 'Lucy',
            sex: 'woman',
            record: 'undergraduate',
            age: 34,
            address: 'shanghai'
          },
          {
            name: 'Jack',
            sex: 'man',
            record: 'high school',
            age: 4,
            address: 'hangzhou'
          }
        ],
        summary: () => {
          return {
            value: 'This is the summary column',
            colspan: 5
          };
        }
      });
      return {
        ...toRefs(state)
      };
    }
  };
</script>
```

:::

### Stripes, alternating light and shade

:::demo

```html
<template>
  <nut-table :columns="columns3" :data="data2" :striped="striped"></nut-table>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        striped: true,
        columns3: [
          {
            title: 'name',
            key: 'name'
          },
          {
            title: 'sex',
            key: 'sex'
          },
          {
            title: 'education',
            key: 'record'
          },
          {
            title: 'age',
            key: 'age'
          },
          {
            title: 'address',
            key: 'address'
          }
        ],
        data2: [
          {
            name: 'Tom',
            sex: 'man',
            record: 'primary school',
            age: 13,
            address: 'beijing'
          },
          {
            name: 'Lucy',
            sex: 'woman',
            record: 'undergraduate',
            age: 34,
            address: 'shanghai'
          },
          {
            name: 'Jack',
            sex: 'man',
            record: 'high school',
            age: 4,
            address: 'hangzhou'
          }
        ]
      });
      return {
        ...toRefs(state)
      };
    }
  };
</script>
```

:::

### No data is displayed by default, and customization is supported

:::demo

```html
<template>
  <nut-table :columns="columns" :data="data"></nut-table>
  <nut-table :columns="columns3" :data="data3">
    <template #nodata>
      <div class="no-data"> Here is the custom display </div>
    </template>
  </nut-table>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        columns: [
          {
            title: 'name',
            key: 'name'
          },
          {
            title: 'sex',
            key: 'sex'
          },
          {
            title: 'education',
            key: 'record'
          },
          {
            title: 'age',
            key: 'age'
          },
          {
            title: 'address',
            key: 'address'
          }
        ],
        data: [],
        columns3: [
          {
            title: 'name',
            key: 'name'
          },
          {
            title: 'sex',
            key: 'sex'
          },
          {
            title: 'education',
            key: 'record'
          },
          {
            title: 'age',
            key: 'age'
          },
          {
            title: 'address',
            key: 'address'
          }
        ],
        data3: []
      });
      return {
        ...toRefs(state)
      };
    }
  };
</script>
```

:::

### Custom cell

:::demo

```html
<template>
  <nut-table :columns="columns" :data="data"></nut-table>
</template>
<script lang="ts">
  import { reactive, toRefs, h } from 'vue';
  import { Button } from '@nutui/nutui';
  import { Dongdong } from '@nutui/icons-vue';
  export default {
    setup() {
      const state = reactive({
        columns: [
          {
            title: 'name',
            key: 'name',
            align: 'center'
          },
          {
            title: 'sex',
            key: 'sex'
          },
          {
            title: 'education',
            key: 'record'
          },
          {
            title: 'operation',
            key: 'render'
          }
        ],
        data: [
          {
            name: 'Tom',
            sex: 'man',
            record: 'primary school',
            render: () => {
              return h(
                Button,
                {
                  onClick: () => {
                    showToast.text('hello');
                  },
                  size: 'small',
                  type: 'primary'
                },
                'Hello'
              );
            }
          },
          {
            name: 'Lucy',
            sex: 'woman',
            record: 'undergraduate',
            render: () => {
              return h(Dongdong, {  width: '14px',height:'14px' });
            }
          },
          {
            name: 'Jack',
            sex: 'man',
            record: 'high school',
            render: () => {
              return h(
                Button,
                {
                  type: 'success',
                  size: 'small',
                  onClick: () => {
                    window.open('https://www.jd.com');
                  }
                },
                'Jump to Jingdong'
              );
            }
          }
        ]
      });
      return {
        ...toRefs(state)
      };
    }
  };
</script>
```

:::

### Support asynchronous rendering

:::demo

```html
<template>
  <h2>Support asynchronous rendering(See the effect after 5S)</h2>
  <nut-table :columns="columns" :data="data"></nut-table>
</template>
<script lang="ts">
  import { reactive, toRefs, onMounted } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        columns: [
          {
            title: 'name',
            key: 'name'
          },
          {
            title: 'sex',
            key: 'sex'
          },
          {
            title: 'education',
            key: 'record'
          },
          {
            title: 'age',
            key: 'age'
          },
          {
            title: 'address',
            key: 'address'
          }
        ],
        data: [],
        data1: [
          {
            address: 'beijing',
            name: 'Tom',
            sex: 'man',
            record: 'primary school',
            age: 13
          },
          {
            record: 'undergraduate',
            name: 'Lucy',
            sex: 'woman',
            age: 34,
            address: 'shanghai'
          },
          {
            name: 'Jack',
            sex: 'man',
            record: 'high school',
            age: 4,
            address: 'hangzhou'
          }
        ]
      });
      onMounted(() => {
        setTimeout(() => {
          state.data = state.data1.slice();
        }, 5000);
      });
      return {
        ...toRefs(state)
      };
    }
  };
</script>
```

:::

### Support sorting

:::demo

```html
<template>
  <nut-table :columns="columns" :data="data" @sorter="handleSorter"></nut-table>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style'; 
  export default {
    setup() {
      const state = reactive({
        columns: [
          {
            title: 'name',
            key: 'name',
            align: 'center',
            sorter: true
          },
          {
            title: 'sex',
            key: 'sex'
          },
          {
            title: 'education',
            key: 'record'
          },
          {
            title: 'age',
            key: 'age',
            sorter: (row1: any, row2: any) => {
              return row1.age - row2.age;
            }
          }
        ],
        data: [
          {
            name: 'Tom',
            sex: 'man',
            record: 'primary school',
            age: 10
          },
          {
            name: 'Lucy',
            sex: 'woman',
            record: 'undergraduate',
            age: 30
          },
          {
            name: 'Jack',
            sex: 'man',
            record: 'high school',
            age: 4
          }
        ]
      });

      const handleSorter = (item: TableColumnProps) => {
        showToast.text(`${JSON.stringify(item)}`);
      };

      return {
        ...toRefs(state),
        handleSorter
      };
    }
  };
</script>
```

:::

## API

### Props

| Attribute     | Description             | Type               | Default  |
| -------- | ---------------- | ------------------ | ------- |
| bordered | Show border     | boolean            | `true`  |
| columns  | Header data         | TableColumnProps[] | `[]`    |
| data     | Table data         | object[]           | `[]`    |
| summary  | Show profile    | Function           | -       |
| striped  | Whether the stripes alternate light and dark | boolean            | `false` |

### TableColumnProps

| Attribute   | Description                                                                                                                                                     | Type                      | Default |
| ------ | ------------------------------------------------------------------ | ------------------------- | ------ |
| key    | Unique identification of the column                                          | string                    | ``     |
| title  | Header title                                                                                                                                                 | string                    | ``     |
| stylehead  | Header style                                                                                                                                                 | string                    | ``     |
| stylecolumn  | Column style                                                                                                                                                 | string                    | ``     |
| align  | Alignment of columns, optional values`left`,`center`,`right`                                                                                                              | string                    | `left` |
| sorter | sort，optional values `true`,`function`, `default`, Where `default` means that you may depend on the interface after clicking, `function` you can return a specific sorting function, `default` indicates that the default sorting algorithm is adopted | boolean \| Function \| string | -      |
| render | Custom render column data, high priority                                                                                                                               | Function(record)          | -      |

### Events

| Event | Description             | Arguments                   |
| ------ | ---------------- | -------------------------- |
| sorter | Click the sort button to trigger | item: Data of the currently clicked header |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --------------------------------------- | -------------------------- | ---- |
| --nut-table-border-color| _#ececec_  | -  |
| --nut-table-cols-padding| _10px_  | -  |
| --nut-table-tr-even-bg-color| _#f3f3f3_  | -  |
| --nut-table-tr-odd-bg-color| _var(--nut-white)_  | -  |
