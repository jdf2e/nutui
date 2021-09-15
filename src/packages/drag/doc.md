# Drag 组件

### 介绍

实现可拖拽的任意元素

### 安装

## 代码演示

### 基础用法

## 基本用法

```tsx
<Drag>
  <div class="touch-dom">触摸移动</div>
</Drag>
```

## 限制拖拽方向

```tsx
<Drag direction={'x'}>
  <div class="touch-dom">只能在X轴拖动</div>
</Drag>
<Drag direction={'y'}>
  <div class="touch-dom">只能在Y轴拖动</div>
</Drag>
```

## 自动吸边

```tsx
<Drag direction={'x'} attract={true}>
  <div class="touch-dom">拖动我</div>
</Drag>
```

## 限制拖拽边界

```tsx
// const right = () => {
//   return document.documentElement.clientWidth - 300 - 9
// }
// const bottom = () => {
//   return document.documentElement.clientHeight - 559
// }
<Drag boundary={{ top: 361, left: 9, bottom: bottom(), right: right() }}>
  <div class="touch-dom">拖动我</div>
</Drag>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| attract | 是否开启自动吸边 | Boolean | false |
| direction | 拖拽元素的拖拽方向限制，**x**/**y**/**all**三选一 | String |'all' |
| boundary | 拖拽元素的拖拽边界 | Object | {top: 0,left: 0,right: 0,bottom: 0} |
