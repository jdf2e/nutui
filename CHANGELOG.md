
## v3.1.7

`2021-09-30`

* :zap: feat: 新增 pagination 分页组件 @yushuang-d
* :zap: feat: 新增 tag 标签组件 @liqiong-lab
* :zap: feat: 新增 badge 徽标组件 @liqiong-lab
* :zap: feat: 新增 popover 气泡组件 @liqiong-lab
* :zap: feat: 新增 imagepreview 图片预览组件 @JackieScorpio
* :bug: fix(shortpassword): 修复部分安卓机value值倒序问题 #679  @Drjingfubo
* :bug: fix(uploader): taro场景 name 字段关联问题、新增 upload-icon-size 字段、上传成功返回值逻辑优化 @richard1015
* :bug: fix(popup): taro 环境滑动内容穿透修复 @richard1015
* :bug: fix(input): clear event bug、readonly 导致内容前移 #628 @richard1015
* :bug: fix(range): taro env 多个Range 组件滑动值异常 #648
* :zap: chore: 按需加载性能优化 @richard1015
* :zap: docs(checkbox): update checkbox docs @szg2008

## v3.1.5~6

`2021-09-18`

* :zap: feat: 新增 signature 签名组件 @guoxiaoxiao
* :zap: feat: 新增 divider (#644) @yangjinjun3
* :bug: fix(tabbar,cell): 支持路由跳转 (#667) @Drjingfubo
* :bug: fix(barrage): demo 优化 (#661) @Ymm0008
* :bug: fix(price): 配置为整数时小数位显示问题修复 #659 (#665) @Drjingfubo
* :bug: fix(address): 点击空白处触发事件问题修改 (#657) @yangxiaolu3
* :bug: fix(shortpassword): 密码圆点不展示修复 (#638)  @Drjingfubo
* :bug: fix(tab): 修复 switch-tab 事件失效、点击事件报错处理 #635 @zhenyulei
* :bug: fix(input): change event data update delay @richard1015
* :bug: fix(popup): h5 滑动内容穿透修复 @richard1015
* :bug: fix(calendar): 个别月份不展示问题, 滑动卡顿问题 、滑动月份不变更问题 (#618) @irisSong
* :zap: upd(tabbar): 新增支持自定义图片链接 (#620) @Drjingfubo
* :zap: style(noticebar) : 默认样式调整 (#641) @yangxiaolu3
* :zap: chore: add postcss plugin autoprefixer @richard1015
* :zap: chore: components docs、install optimization @richard1015
* :zap: docs: toast optimization @richard1015
* :zap: docs(address): address docs modify @szg2008
* :zap: docs: add version intro @richard1015

## v3.1.4

`2021-09-01`
* :zap: feat: 新增 numberkeyboard 数字键盘组件 (#610) @Drjingfubo
* :zap: feat: 新增 countdown 倒计时组件 (#611) @yangxiaolu3
* :zap: feat: 新增 noticebar 公告通知栏组件 @yangxiaolu3
* :zap: feat: 新增 elevator 电梯组件 @szg2008
* :zap: feat: 新增 video 视频播放器组件添加 @zy19940510
* :zap: feat(cell): add icon slot #605 @richard1015
* :zap: feat(address): add address type 多样式切换 @szg2008
* :zap: feat(checkbox & radio): 选中状态主题定制优化 @szg2008
* :zap: feat(textarea): blur event add value @richard1015
* :zap: style(swipe): transition 滑动动画优化  @richard1015
* :bug: fix(tabbar): 自定义icon不显示 (#612) @Drjingfubo
* :bug: fix(tab): 兼容taro中tab组件 (#609) @zhenyulei
* :zap: docs(toast): 文档及demo优化 (#616) @Drjingfubo
* :zap: docs: 官网新增 cat 入口 @richard1015

## v3.1.3

`2021-08-15`

* :zap: feat: 新增 CircleProgress 环形进度条组件 (#569) @Drjingfubo
* :zap: feat: 新增 Progress 条形进度条组件 (#569) @Drjingfubo
* :zap: feat: 新增 FixedNav 悬浮导航组件 @richar1015
* :zap: feat: 新增 CountUp 数字滚动组件适配 (#568) @Ymm0008
* :zap: feat: 新增 Barrage 弹幕组件 @Ymm0008
* :bug: fix(avatar): 设置圆角无效修复 (#571) @Drjingfubo
* :bug: fix(address): modify transform data (#534) @szg2008
* :bug: fix(swipe): 列表滚动场景滑动体验优化 @richard1015
* :zap: docs: 新增主题定制样式引用说明 @richard1015
* :zap: docs: 3.0 支持环境说明修改 @szg2008
* :zap: docs: 官网新增 加入我们模块 @richard1015


## v3.1.2

`2021-07-31`

* :zap: feat: 新增选项卡 Tab 组件 @zhenyulei
* :zap: feat: 手势滑动组件 Swipe @richard1015
* :zap: feat: Address 地址组件规范10.0升级 @szg2008
* :zap: feat(icon): fontClassName prop @richard1015
* :zap: feat(cell): add round-radius prop #547 @richard1015
* :zap: chore: 修改组件分类及排序 (#540) @ninidesign
* :bug: fix(calender): 小程序场景无法滑动 bug (#534) @guoxiaoxiao
* :bug: fix: taro的h5环境下shortpassword聚焦事件修复 (#541) @Drjingfubo
* :bug: fix(collapse ): taro H5 环境适配 (#546) @Ymm0008
* :bug: fix: run add comp script @richard1015
* :bug: fix(drag): taro h5 touch bug (#549) @Drjingfubo
* :bug: fix(notify): props msg type error @richard1015
* :zap: docs: 官网轮播图片变更、gitee log添加、官网案例效果优化、版本显示  @ninidesign @richard1015

## v3.1.0
`2021-07-12`
### 新特性

- :zap: 全新的场景支持，所有组件支持多端小程序场景开发

## v3.0.3
`2021-07-07`


* :zap: chore: build lib fileName raname nutui @richard1015
* :zap: chore: dep del taroui @richard1015
 


## v3.0.2
`2021-06-30`

* :zap: feat: 官网 taro 特性 @ninidesign
* :zap: feat: taro 所有组件适配 @jdf2e
* :zap: feat(picker): “确定”和“取消”按钮文字自定义 #439  @richard1015
* :zap: chore: taro build  @szg2008 
* :bug: fix(switch): active-text props bug @richard1015
* :bug: fix(popup): popup props feat lock-scroll @richard1015
* :bug: fix(notify): function bug  @richard1015
* :bug: fix(infiniteloading): keepalive remove event bug @yangxiaolu3
* :zap: test: 单元测试 Checkbox、Radio、Switch、cell、backtop、button、input、rate、 shortpassword @guoxiao158 @Mindyzone
* :zap: docs: lock-scroll default value modify @richard1015
* :zap: docs: password绑定value值修改,文档修改 @richard1015


## v3.0.0

`2021-05-27`
  
* :zap: chore: multi technology stack structure adjustment @richard1015
* :zap: feat: Video (#464) @zy19940510
* :bug: fix: typescript global error #461 @richard1015
* :bug: fix: view-block warn #469 @richard1015
* :bug: fix(address): change type bug、使用css3替换GASP动画函数 (#472) @richard1015 @yangxiaolu3
* :zap: chore: rollup external vue-router  @richard1015
* :zap: doc:  更新 nutui-cat 跳转链接 (#465)  @zy19940510 

## v3.0.0-beta.16

`2021-05-18`

* :zap: feat: site footer nutui-cat @richard1015
* :zap: feat: site react version @richard1015
* :zap: style: sites version width @richard1015
* :bug: fix(uploader): clearInput props bug @richard1015
## v3.0.0-beta.15

`2021-05-11`

* :bug: fix(steps): steps icon @szg2008
* :bug: fix(site): site footer vue link error #450 @richard1015
* :bug: fix(input): click clear btn bug @richard1015
* :bug: fix(address): onchange > change change type bug @richard1015
* :zap: refactor(checkbox): refactor checkbox checkboxgroup @szg2008
* :zap: refactor(radio): refactor radio radiogroup @szg2008
* :bug: fix(popup): closeable 默认false文档修改 @richard1015
* :bug: fix(docs): feat relay link @richard1015



## v3.0.0-beta.14

`2021-04-24`

* :bug: fix(steps): style && getCurrentInstance proxy @szg2008
* :zap: feat(site): site build @vitejs/plugin-legacy @richard1015
* :zap: feat(husky): v4 to v6 @szg2008
* :bug: upd(icon): iconfont @richard1015
* :bug: fix(dialog): v-html;函数式使用支持挂载指定节点teleport功能 @richard1015
* :zap: feat(uploader): custom slot & update:fileList @richard1015
* :zap: chore(button): test jest @richard1015
* :bug: fix(tabbar): 样式修改 #448 @Drjingfubo
* :bug: fix(input): blur event bug #438 @richard1015
* :bug: fix(address): change type bug @richard1015
* :zap: feat: devServer port 2021 @richard1015
* :zap: chore: Vite 2.2.1 @richard1015


## v3.0.0-beta.13

`2021-04-18`

* :zap: feat(cell-group): 列表组组件 @richard1015 
* :bug: fix(toast): function undefined bug #444 @richard1015 
* :bug: fix(address): style bug @szg2008 
* :bug: fix(pxCheck): typeof number check (#441) @xjh22222228
* :zap: feat: steps @szg2008 @ailululu



## v3.0.0-beta.12

`2021-04-14`

* :zap: chore(dialog): 重构函数式，标签式 @richard1015 
* :zap: chore(textarea): 重构展示方式 & 部分Api @richard1015 
* :zap: doc:  icon size type desc modify  @richard1015 
* :bug: fix(inputnumber): blur event calc error @richard1015 
* :bug: fix: button icon style bug @richard1015 
* :bug: fix: tabbar 样式修改 (#445) @Drjingfubo 
* :bug: fix: radio @szg2008 


## v3.0.0-beta.11

`2021-04-01`

* :zap: chore(popup): dep component 'show' replace 'visible' @richard1015 


## v3.0.0-beta.10

`2021-04-7`

* :bug: fix(datepicker)：修复日期展示问题 #428 @yangkaixuan


## v3.0.0-beta.9

`2021-3-31`

> :tada: :tada: :tada: NutUI 3.0 来了！

### 新特性

- :zap: 全新的架构，基于 vite 构建
- :lipstick: 全新的视觉样式，参照京东 APP v10.0视觉规范
- :sparkles: 全新的按需加载方式
- :art: 支持定制主题
- :sparkles: 支持 TypeScript
- :sparkles: 重构所有 2.0 组件
- :sparkles: 详尽的文档和示例


### ⚠️ 升级必读

- 3.x 基于 Vue3 版本 3.x 不兼容 2.x，建议直接升级到 3.x 的最新版本