# Collapse 折叠面板

## 基本用法

通过`v-model`控制展开的面板列表，`activeNames`为数组格式

```html
<nut-collapse v-model:active="active1" icon="down-arrow">
  <nut-collapse-item :title="title1" :name="1">
    京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
  </nut-collapse-item>
  <nut-collapse-item :title="title2" :name="2">
    京东到家：教师节期间 创意花束销量增长53倍
  </nut-collapse-item>
  <nut-collapse-item :title="title3" :name="3" disabled>
  </nut-collapse-item>
</nut-collapse>
```

``` javascript
setup() {
  const activeNames = reactive([1, 2]);
  const title = reactive({
    title1: '标题1',
    title2: '标题2',
    title3: '标题3',
  })
  return {
    activeNames,
    ...toRefs(title)
  };
}
```
### 无icon样式

```html
<nut-collapse v-model:active="activeName" :accordion="true">
  <nut-collapse-item :title="title1" :name="1">
    2020年中国数字游戏市场规模超2786亿元
  </nut-collapse-item>
  <nut-collapse-item :title="title2" :name="2">
    基于区块链技术的取证APP在浙江省杭州市发布
  </nut-collapse-item>
</nut-collapse>
```

``` javascript
setup() {
  const activeName = ref(1);
  const title = reactive({
    title1: '标题1',
    title2: '标题2',
    title3: '标题3',
  })
  return {
    activeName,
    ...toRefs(title)
  };
}
```

### 手风琴

通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式；`subTitle`可以设置副标题的内容

```html
 <nut-collapse v-model:active="activeName" :accordion="true" icon="down-arrow">
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
setup() {
  const activeName = ref(1);
  const subTitle = '副标题';
  const title = reactive({
    title1: '标题1',
    title2: '标题2',
    title3: '标题3',
  })
  return {
    activeName,
    subTitle,
    ...toRefs(title)
  };
}
```


### 自定义折叠图标

通过icon设置自定义图标，rotate设置图标旋转的角度

```html
<nut-collapse
  v-model:active="activeName"
  :accordion="true"
  icon="arrow-right2"
  rotate="90"
>
  <nut-collapse-item :title="title1" :name="1">
    京东数科IPO将引入“绿鞋机制”
  </nut-collapse-item>
  <nut-collapse-item :title="title2" :name="2" sub-title="文本内容">
    世界制造业大会开幕，阿里巴巴与安徽合作再升级
  </nut-collapse-item>
</nut-collapse>
```

``` javascript
const activeName = ref(1);
const title = reactive({
  title1: '标题1',
  title2: '标题2',
})
return {
  activeName,
  ...toRefs(title)
};
```


### 自定义标题图标

通过icon设置自定义图标，rotate设置图标旋转的角度

```html
<nut-collapse
  v-model:active="activeName"
  title-icon="issue"
  title-icon-color="red"
  title-icon-size="20px"
  title-icon-position="left"
  icon="down-arrow"
  :accordion="true"
>
  <nut-collapse-item :title="title1" :name="1">
    “森亿智能”获4亿元D轮融资
  </nut-collapse-item>
  <nut-collapse-item :title="title2" :name="2" sub-title="文本内容">
    快看漫画与全球潮玩集合店X11达成战略合作
  </nut-collapse-item>
</nut-collapse>
```

``` javascript
const activeName = ref(1);
const title = reactive({
  title1: '标题1',
  title2: '标题2',
})
return {
  activeName,
  ...toRefs(title)
};
```

## Collapse Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model | 当前展开面板的 name | 手风琴模式：string \| number<br>非手风琴模式：(string \| number)[] | - |
| accordion | 是否开启手风琴模式 | boolean | false |
| icon | 图标链接/或使用 NutUI 的 icon | string | ‘’ |
| icon-size | 图标大小 | string | 16px |
| icon-color | 图标颜色 | string | '' |
| sub-title | 标题栏副标题 | string | - |
| title-icon | 标题图标链接/或使用 NutUI 的 icon | string | ‘’ |
| title-icon-size | 标题图标大小 | string | 16px |
| title-icon-color | 标题图标颜色 | string | ’‘ |
| title-icon-position | 标题图标位置 | string | ‘left' |
| rotate | 点击折叠和展开的旋转角度,在自定义图标模式下生效 | string \ number | 180 |

### CollapseItem Prop
| 参数 | 说明 | 类型 | 默认值 | 
|------|------|------|------|
| name | 唯一标识符，必填 | string \ number | -1 |
| title | 标题栏左侧内容 | string | - |
| sub-title | 标题栏副标题 | string | - |
| disabled | 标题栏是否禁用 | boolean | false |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 切换面板时触发 | 类型与 v-model 绑定的值一致 |