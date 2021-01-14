# Collapse 折叠面板

> 按需加载方法

``` javascript
import { Collapse, CollapseItem } from '@nutui/nutui';
Collapse.install(Vue);
CollapseItem.install(Vue);
```
## 基本用法

通过`v-model`控制展开的面板列表，`activeNames`为数组格式

```html
<nut-collapse v-model="activeNames" @change="callback">
    <nut-collapse-item title="标题1" :name="1">
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府 
    </nut-collapse-item>
    <nut-collapse-item title="标题2" :name="2">
        京东到家：教师节期间 创意花束销量增长53倍 
    </nut-collapse-item>
    <nut-collapse-item title="标题3" :name="3" disabled>
    </nut-collapse-item>
</nut-collapse>
```

``` javascript
export default {
  data() {
    return {
        activeNames: [1, 2]
    };
  },
  methods: {
    callback(name) {
      console.log(`点击了name是${name}的面板,callback`);
    }
  }
};
```


### 手风琴

通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式；`subTitle`可以设置副标题的内容

```html
<nut-collapse v-model="activeName" :accordion="true">
    <nut-collapse-item :title="title1" :name="1">
        华为终端操作系统EMUI 11发布，9月11日正式开启 
    </nut-collapse-item>
    <nut-collapse-item :title="title2" :name="2" :sub-title="subTitle">
        中国服务机器人市场已占全球市场超1/4 
    </nut-collapse-item>
    <nut-collapse-item :title="title3" :name="3">
        QuestMobile：90后互联网用户规模超越80后达3.62亿 
    </nut-collapse-item>
</nut-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeName: 1,
      subTitle: '副标题'
    };
  }
};
```


### 图标展示

通过`expandIconPosition`可以设置图标的位置，icon设置自定义图标，rotate设置图标旋转的角度

```html
<nut-collapse v-model="activeName" :accordion="true" :expand-icon-position="expandIconPosition" :icon="icon" :rotate="rotate">
    <nut-collapse-item :title="title1" :name="1">
        京东数科IPO将引入“绿鞋机制” 
    </nut-collapse-item>
    <nut-collapse-item :title="title2" :name="2">
        世界制造业大会开幕，阿里巴巴与安徽合作再升级
    </nut-collapse-item>
</nut-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeName: 1,
      expandIconPosition: 'left',
      icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/132849/8/9709/550/5f5f0d8aE802abee7/68bd02b3a52c3988.png'
      rotate: 180,
    };
  }
};
```

## Collapse Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 当前展开面板的 name | 手风琴模式：string \| number<br>非手风琴模式：(string \| number)[] | - |
| accordion | 是否开启手风琴模式 | boolean | false |
| border | 是否显示外边框 | boolean | true |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 切换面板时触发 | 类型与 v-model 绑定的值一致。 |

> 使用 @change = "function" 回调。如果未使用，会直接触发 methods 中定义的 change 方法，如不需要回调，尽量不要在 methods 中定义 change 方法

### CollapseItem Props
| 参数 | 说明 | 类型 | 默认值 | 
|------|------|------|------|
| title | 标题栏左侧内容 | string | - |
| name | 唯一标识符，必填 | string \ number | -1 |
| expand-icon-position | 标题图标的位置 | string | right |
| sub-title | 标题栏副标题 | string | - |
| icon | 标题栏自定义图标链接 | string | - |
| rotate | 点击折叠和展开的旋转角度,在自定义图标模式下生效 | string \ number | 180 |

> 说明：使用折叠面板组件，请保证 NutUI 的版本在 V2.2.11 及以上