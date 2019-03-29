## 2.0.9

`2019-3-29`

* :sparkles: feat: 新增局部滚动组件`Scroller`
* :sparkles: feat: 新增无限加载组件`InfiniteLoading`
* :sparkles: upd: 吐司组件`Toast`支持配置遮罩层，loading类型默认开启
* :sparkles: upd: `flex`组件允许动态改变nut-col的:span的值 
* :bug: fix: 修复`RadioGroup`组件按需加载css报错的问题（感谢@451761830反馈）
* :bug: fix: 修复引用scss报错的问题
* :bug: fix: 修复`Imagepicker`组件multiple属性逻辑错误问题（感谢@liuyanqing反馈）
* :zap: doc: 文档内容完善

## 2.0.8

`2019-3-19`

* :bug: 修复`Dialog`组件按需加载报错的问题

## 2.0.6

`2019-3-18`

* :sparkles: `Dialog`组件新增支持标签形式用法
* :bug: 修复`DatePicker`组件按需加载scss文件样式丢失的问题
* :zap: 官网布局优化
* :zap: 文档内容完善

## 2.0.4

`2019-3-12`

* :sparkles: 新增构建CommonJS包
* :sparkles: 新增倒计时`CountDown`组件
* :bug: 修复`Rate`组件样式兼容问题
* :bug: 修复`ShortPassword`组件小屏设备样式兼容问题
* :bug: 修复两个组件测试用例问题
* :zap: 优化`Swiper`组件
* :zap: 文档增加目录功能
* :zap: 新增英文版README.md

## 2.0.3

`2019-1-25`

* :sparkles: 新增返回顶部`BackTop`组件
* :bug: 修复`Swiper`组件 slideChangeEnd 事件的一个bug
* :zap: `Rate`组件增加允许设置只读和间距
* :zap: 文档MD转Vue增加文件缓存功能，提升文档预览和构建速度
* :zap: 示例页面增加评分推荐

## 2.0.2

`2019-1-18`

* :zap: 优化`Picker`组件样式，增加放大镜效果
* :zap: 优化`Dialog`组件按钮点击状态样式
* :zap: 优化官网代码展示容器样式

## 2.0.1

`2019-1-16`

* :bug: 修复`Dialog`组件在部分低版本浏览器上的高度问题
* :zap: 优化`Demo`列表页面在部分 iOS 设备上的展示

## 2.0.0

`2019-1-15`

### 新特性

- :zap: 全新的架构
- :lipstick: 全新的视觉样式，参照京东APP v7.0视觉规范
- :sparkles: 全新的按需加载方式
- :art: 新增支持定制主题
- :globe_with_meridians: 新增支持多语言（国际化）
- :sparkles: 新增支持 TypeScript
- :sparkles: 新增支持服务端渲染（Vue SSR）
- :white_check_mark: 新增单元测试
- :pencil2: CSS单位由 `rem` 改为 `px`
- :sparkles: 新增若干组件


### ⚠️ 升级必读

- 2.x 不兼容 1.x，建议直接升级到 2.x 的最新版本
