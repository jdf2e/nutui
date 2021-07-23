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