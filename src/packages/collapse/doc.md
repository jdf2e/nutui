#  Collapse组件

### 介绍

可以折叠/展开的内容区域。

- 当信息量较大且分类较多时，可使用折叠面板进行分类收纳；
- 手风琴是一种特殊的折叠面板，只允许单个内容的展开。

### 安装

`import { Collapse,CollapseItem } from 'nutui-react'`


## 代码演示

### 基础用法1



## API

### Collapse Prop

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| activeName   | 当前展开面板的 name               | 手风琴模式：string/number 非手风琴模式：(string/number)[] | - |
| accordion    | 是否开启手风琴模式                 | boolean | false  |
| icon         | 图标链接/或使用 NutUI 的 icon      | String | -                |
| iconSize     | 图标大小                          | String      | '16px' |
| iconColor    | 图标颜色                          | String | ''              |
| rotate       | 点击折叠和展开的旋转角度,在自定义图标模式下生效| string/number | 180 |


### CollapseItem Prop

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| name   | 唯一标识符，必填                         |string \ number | - |
| title    | 标题栏左侧内容                 | string | ''  |
| disabled    | 标题栏是否禁用                 | boolean | false  |
| subTitle    | 标题栏副标题             | string | ''  |
| titleIcon    | 标题图标链接/或使用 NutUI 的 icon             | string | ''  |
| titleIconColor    | 标题图标颜色        | string | ''  |
| titleIconSize    | 标题图标大小        | string | ''  |
| titleIconPosition    | 标题图标位置             | string | ''  |



### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| change  | 切换面板时触发 | isOpen:是否打开状态；name：当前点击的name值 |
