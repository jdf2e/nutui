# Table 表格

### 介绍

用于展示基础表格

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { Table } from '@nutui/nutui';
// taro
import { Table } from '@nutui/nutui-taro';

const app = createApp();
app.use(Table);
```

## 代码演示

### 基础使用


```html
<nut-table :columns="columns" :data="data"></nut-table>
```
```ts
setup() {
    const state = reactive({
        columns: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '性别',
          key: 'sex'
        },
        {
          title: '学历',
          key: 'record'
        }
      ],
      data: [
        {
          name: 'Tom',
          sex: '男',
          record: '小学'
        },
        {
          name: 'Lucy',
          sex: '女',
          record: '本科'
        },
        {
          name: 'Jack',
          sex: '男',
          record: '高中'
        }
      ],
    });
    return {
        ...toRefs(state),
    };
}
```

### 是否显示边框，文字对齐


```html
<nut-table :columns="columns" :data="data" :bordered="bordered"></nut-table>
```
```ts
setup() {
    const state = reactive({
        bordered: false,
        columns: [
        {
          title: '姓名',
          key: 'name',
          align: 'center'
        },
        {
          title: '性别',
          key: 'sex'
        },
        {
          title: '学历',
          key: 'record'
        }
      ],
      data: [
        {
          name: 'Tom',
          sex: '男',
          record: '小学'
        },
        {
          name: 'Lucy',
          sex: '女',
          record: '本科'
        },
        {
          name: 'Jack',
          sex: '男',
          record: '高中'
        }
      ],
    });
    return {
        ...toRefs(state),
    };
}
```

### 显示总结栏


```html
<nut-table :columns="columns" :data="data" :summary="summary"></nut-table>
```
```ts
setup() {
    const state = reactive({
        columns: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '性别',
          key: 'sex'
        },
        {
          title: '学历',
          key: 'record'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data: [
        {
          name: 'Tom',
          sex: '男',
          record: '小学',
          age: 13,
          address: '北京'
        },
        {
          name: 'Lucy',
          sex: '女',
          record: '本科',
          age: 34,
          address: '上海'
        },
        {
          name: 'Jack',
          sex: '男',
          record: '高中',
          age: 4,
          address: '杭州'
        }
      ],
      summary: () => {
        return {
          value: '这是总结栏',
          colspan: 5
        }
      }
    });
    return {
        ...toRefs(state),
    };
}
```

### 条纹、明暗交替


```html
<nut-table :columns="columns3" :data="data2" :striped="striped"></nut-table>
```
```ts
setup() {
    const state = reactive({
      ...,
      striped: true,
    });
    return {
        ...toRefs(state),
    };
}
```

### 无数据默认展示，支持自定义

```html
<nut-table :columns="columns" :data="data"></nut-table>

<nut-table :columns="columns3" :data="data3">
    <template #nodata>
    <div class="no-data">
        这里是自定义展示
    </div>
    </template>
</nut-table>
```
```ts
setup() {
    const state = reactive({
      columns: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '性别',
          key: 'sex'
        },
        {
          title: '学历',
          key: 'record'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data: [],
      striped: true,
    });
    return {
        ...toRefs(state),
    };
}
```

### 自定义单元格

```html
<nut-table :columns="columns" :data="data">
```
```ts
setup() {
    const state = reactive({
      columns: [
        {
          title: '姓名',
          key: 'name',
          align: 'center'
        },
        {
          title: '性别',
          key: 'sex'
        },
        {
          title: '学历',
          key: 'record'
        },
        {
          title: '操作',
          key: 'render'
        }
      ],
      data: [
          {
          name: 'Tom',
          sex: '男',
          record: '小学',
          render: () => {
            return h(
              Button,
              {
                onClick: () => {
                  (Toast as any).text('hello');
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
          sex: '女',
          record: '本科',
          render: () => {
            return h(Icon, { name: 'dongdong', size: '14px' });
          }
        },
        {
          name: 'Jack',
          sex: '男',
          record: '高中',
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
              '跳转到京东'
            );
          }
        }
      ]
    });
    return {
        ...toRefs(state),
    };
}
```

### 支持异步渲染

```html
<nut-table :columns="columns" :data="data">
```
```ts
setup() {
    const state = reactive({
      data: [],
      data1: [
        {
          name: 'Tom',
          sex: '男',
          record: '小学',
          age: 13,
          address: '北京'
        },
        {
          name: 'Lucy',
          sex: '女',
          record: '本科',
          age: 34,
          address: '上海'
        },
        {
          name: 'Jack',
          sex: '男',
          record: '高中',
          age: 4,
          address: '杭州'
        }
      ]
    });
    onMounted(() => {
        setTimeout(() => {
            state.data = state.data1.slice();
        }, 5000);
    });
    return {
        ...toRefs(state),
    };
}
```

### 支持排序

```html
<nut-table :columns="columns" :data="data" @sorter="handleSorter">
```
```ts
setup() {
    const state = reactive({
      columns: [
        {
          title: '姓名',
          key: 'name',
          align: 'center',
          sorter: true
        },
        {
          title: '性别',
          key: 'sex',
        },
        {
          title: '学历',
          key: 'record'
        },
        {
          title: '年龄',
          key: 'age',
          sorter: (row1: any, row2: any) => { return row1.age - row2.age }
        }
      ],
      data: [
        {
          name: 'Tom',
          sex: '男',
          record: '小学',
          age: 10
        },
        {
          name: 'Lucy',
          sex: '女',
          record: '本科',
          age: 30
        },
        {
          name: 'Jack',
          sex: '男',
          record: '高中',
          age: 4
        }
      ]
    });
    
    const handleSorter = (item: TableColumnProps) => {
      (Toast as any).text(`${JSON.stringify(item)}`);
    }

    return {
        ...toRefs(state),
    };
}
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| bordered         | 是否显示边框 | Boolean |`true`         |
| columns         | 表头数据 | TableColumnProps[] |`[]`         |
| data         | 表格数据 | Object[] |`[]`         |
| summary         | 是否显示简介 | Function | -         |
| striped         | 条纹是否明暗交替 | Boolean |`false` |

### TableColumnProps

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| key         | 列的唯一标识 | String |``  |
| title         | 表头标题 | String |``         |
| align         | 列的对齐方式，可选值`left`,`center`,`right` | String |`left`         |
| sorter         | 排序，可选值有 `true`,`function`, `default`, 其中 `default`表示点击之后可能会依赖接口, `function`可以返回具体的排序函数, `default`表示采用默认的排序算法 | Boolean、Function、String |-|

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| sorter  | 点击排序按钮触发 | item: 当前点击的表头的数据 |

