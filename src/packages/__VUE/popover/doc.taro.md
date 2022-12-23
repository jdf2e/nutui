# Popover 气泡弹出框

### 介绍

点击或在元素上悬停鼠标，弹出气泡卡片浮层。

### 安装

```javascript

import { createApp } from 'vue';
import { Popover, Popup } from '@nutui/nutui-taro';

const app = createApp();

app.use(Popup);
app.use(Popover);

```


### 基础用法

Popover 支持明朗和暗黑两种风格，默认为明朗风格，将 theme 属性设置为 dark 可切换为暗黑风格。

:::demo
```html
<template>
  <nut-popover v-model:visible="visible.lightTheme" :list="iconItemList">
    <template #reference>
      <nut-button type="primary" shape="square">明朗风格</nut-button>
    </template>
  </nut-popover>

  <nut-popover v-model:visible="visible.darkTheme" theme="dark" :list="iconItemList">
    <template #reference>
      <nut-button type="primary" shape="square">暗黑风格</nut-button>
    </template>
  </nut-popover>
</template>
<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const visible = ref({
      darkTheme: false,
      lightTheme: false,
    });
    const iconItemList = reactive([
      { name: '选项一' },
      { name: '选项二' },
      { name: '选项三' }
    ]);
    return {
        visible,
        iconItemList,
      };
    }
}
</script>

```
:::

### 选项配置

在 list 数组中，可以通过 disabled 字段来禁用某个选项。

:::demo
```html
<template>
  <nut-popover v-model:visible="visible.showIcon" theme="dark" :list="itemList">
    <template #reference>
      <nut-button type="primary" shape="square">展示图标</nut-button>
    </template>
  </nut-popover>

  <nut-popover v-model:visible="visible.disableAction" :list="itemListDisabled">
    <template #reference>
      <nut-button type="primary" shape="square">禁用选项</nut-button>
    </template>
  </nut-popover>
</template>

<script>
import { reactive, ref } from 'vue';
import { Location,Cart2, My2 } from '@nutui/icons-vue';
export default {
  setup() {
    const visible = ref({
      showIcon: false,
      disableAction: false,
    });

    const itemList = reactive([
      {
        name: 'option1',
        icon: ()=>{
          return h(My2,{
            width:'14px',
            color:'rgba(250, 44, 25, 1)'
          })
        }
      },
      {
        name: 'option2',
        icon: Cart2
      },
      {
        name: 'option3',
        icon: Location
      }
    ]);

    const itemListDisabled = reactive([
      {
        name: '选项一',
        disabled: true
      },{
        name: '选项二',
        disabled: true
      },{
        name: '选项三'
      }
    ]);

    return {
        itemList,
        visible,
        itemListDisabled,
      };
    }
}
</script>


```
:::


### 自定义内容

在名为 content 插槽中自定义内容。

:::demo
```html
<template>
  <nut-popover v-model:visible="visible.Customized">
    <template #reference>
      <nut-button type="primary" shape="square">自定义内容</nut-button>
    </template>

    <template #content>
      <div class="self-content">
        <div class="self-content-item" v-for="(item, index) in selfContent" :key="index">
          <component :is="renderIcon(item.name)"></component>
          <div class="self-content-desc">{{ item.desc }}</div>
        </div>
      </div>
    </template>
  </nut-popover>
</template>


<script>
import { reactive, ref } from 'vue';
import { Service,Notice,Location,Category,Scan2,Message,Cart2, My2 } from '@nutui/icons-vue';
export default {
  setup() {
    const visible = ref({
      Customized: false,
    });
    const selfContent = reactive([
      {
        name: Service,
        desc: 'option1'
      },
      {
        name: Notice,
        desc: 'option2'
      },
      {
        name: Location,
        desc: 'option3'
      },
      {
        name: Category,
        desc: 'option4'
      },
      {
        name: Scan2,
        desc: 'option5'
      },
      {
        name: Message,
        desc: 'option6'
      }
    ]);
    const renderIcon = (icon: Component, props?: any) => {
      if (icon) return h(icon, props);
      return '';
    };

    return {
      visible,
      selfContent,
      renderIcon
    };
  }
}
</script>

<style lang="scss">
.self-content {
  width: 195px;
  display: flex;
  flex-wrap: wrap;
  &-item {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &-desc {
    margin-top: 5px;
    width: 60px;
    font-size: 10px;
    text-align: center;
  }
}
</style>


```
:::

### 位置自定义

通过 location 属性来控制气泡的弹出位置。可选值
```
top           # 顶部中间位置
left          # 左侧中间位置
right         # 右侧中间位置
bottom        # 底部中间位置
top-start     # 顶部左侧位置
top-end       # 顶部右侧位置 
left-start    # 左侧上方位置
left-end      # 左侧下方位置
right-start   # 右侧上方位置
right-end     # 右侧下方位置
bottom-start  # 底部左侧位置
bottom-end    # 底部右侧位置
```


:::demo
```html
<template>
  <nut-popover v-model:visible="visible" location="top" theme="dark" :list="iconItemList">
    <template #reference>
      <div class="brick"></div>
    </template>
  </nut-popover>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
export default {
  setup() {
    const visible = ref(false);

    const iconItemList = reactive([
        {
          name: '选项一'
        },
        {
          name: '选项二'
        }]);

      return {
        iconItemList,
        visible,
      };
    }
};
</script>

```
:::

### 自定义目标元素

Popover 提供了 `targetId` 属性，用于匹配目标元素，在目标元素上添加对应的 id 值即可

:::demo
```html
<template>
  <nut-button type="primary" shape="square" id="popid" @click="clickCustomHandle">自定义目标元素</nut-button>
    <nut-popover v-model:visible="customTarget" targetId="popid" :list="itemList" location="top-start"></nut-popover>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const visible = ref({
      customTarget:false
    });

    const itemList = reactive([
      {name: 'option1'},
      {name: 'option2'},
      {name: 'option3'}
    ]);

    const clickCustomHandle = () => {
      visible.customTarget = !visible.customTarget;
    };

    return {
        itemList,
        visible,
        clickCustomHandle,
      };
    }
}
</script>


```
:::

### 自定义颜色

Popopver 提供了 2 种主题色，同样可以通过 `bgColor` 属性改变背景色

:::demo
```html
<template>
  <nut-popover v-model:visible="customColor" :list="itemList" location="right-start" bgColor="#f00" theme="dark">
      <template #reference>
        <nut-button type="primary" shape="square" >自定义颜色</nut-button>
      </template>
    </nut-popover>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const visible = ref({
      customColor:false
    });

    const itemList = reactive([
      {name: 'option1'},
      {name: 'option2'},
      {name: 'option3'}
    ]);

    return {
        itemList,
        visible
      };
    }
}
</script>

```
:::

## API
### Props  

| 字段            | 说明                            | 类型     | 默认值      |
|----------------|---------------------------------|---------|------------|
| list          | 选项列表                          | List[]   | []        |
| visible      | 是否展示气泡弹出层                 | boolean  | false     |
| theme          | 主题风格，可选值为 dark            | string   | `light`   |
| location       | 弹出位置  | string   | `bottom`  |
| offset        | 出现位置的偏移量  | [number, number]   | [0, 12]  |
| show-arrow        | 是否显示小箭头  | boolean  | true  |
| custom-class        | 自定义 class 值  | string  | ''  |
| duration        | 动画时长  |  [number, number]  | 0.3  |
| iconPrefix        | 图标自定义类值,等同于 Icon 组件的[ class-prefix 属性](https://nutui.jd.com/#/zh-CN/component/icon)  | string  | 'nut-icon''  |
| overlay        | 是否显示遮罩层  | Boolean  | false  |
| overlay-class        | 自定义遮罩层类名 | string  | ''  |
| overlay-style        | 自定义遮罩层样式  | string  | ''  |
| close-on-click-overlay        | 是否在点击遮罩层后关闭菜单  | boolean  | true  |
| close-on-click-action        | 是否在点击选项后关闭  | boolean  | true |
| close-on-click-outside        | 是否在点击外部元素后关闭菜单 | boolean  | true  |
| bg-color        | 自定义背景色 | String  | -  |
| target-id        | 自定义目标元素 id | String  | -  |
| arrow-offset        | 小箭头的偏移量 | Number  | 0  |

### List 数据结构  

List 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名            | 说明                 | 类型      | 默认值  |
|----------------|----------------------|----------|--------|
| name           | 选项文字               | string   | -      |
| icon           | @nutui/icons-vue 图标       | string   | -      |
| disabled       | 是否为禁用状态          | boolean  | false  | 
| className       | 为对应选项添加额外的类名          | string/Array/object  | -  | 


### Slots

| 名称    | 说明         |
|---------|--------------|
| content | 自定义气泡组件菜单内容 |
| reference | 触发 Popover 显示的元素内容 |

### Events

| 名称    | 说明         |
|---------|--------------|
| choose | 点击选项时触发 |
| open   | 打开菜单时触发 |
| close  | 关闭菜单时触发 |