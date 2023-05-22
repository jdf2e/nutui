## v4.0.7

`2023-05-12`

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @ntnyq

* :zap: feat(animate): add duration property (#2280)
* :zap: feat(button): add formType for Taro H5 (#2288)
* :bug: fix(switch): inactiveValue 为非 falsy 值无法显示 (#2258)
* :bug: fix(tabs): tab-title active font-weight #2268
* :bug: fix(sidenavbar): style of async data (#2279)
* :bug: fix(addressList): failed to emit click-item (#2281)
* :bug: fix(form): reset min-width style for label-width (#2282)
* :bug: fix(tour): remove mask after close (#2283)

## v4.0.6

`2023-04-21`

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @kingyang @blue0728

* :zap: feat(input): add focus, blur, select ref (#2250)
* :bug: fix(input): 传入 class 被忽略问题 #2242 (#2243) @kingyang
* :bug: fix(Menu): 修复 MenuItem class 设置无效问题 (#2236) @blue0728
* :bug: fix(datepicker): 修复小程序下 v-model 修改异常问题
* :bug: fix(checkbox): fix toggle all demo #2237
* :bug: fix(rate): 修复定位方式导致的异常空白高度问题 (#2255)
* :bug: fix(picker): 修复平铺模式下溢出省略失效问题 (#2247)
* :bug: fix(dialog): remove hidden class after close #2211 (#2241)
* :rocket: chore: upgrade Taro to 3.6.2+
* :rocket: chore: move yarn to pnpm for Taro Demo

## v4.0.5

`2023-04-07`

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @gyt95 @wh-if

* :zap: feat(tabs): support vertical automatic scrolling (#2199) @gyt95
* :zap: feat(datepicker): 支持选择时分 #2167
* :bug: fix(checkbox): checkbox 减少时 group 内数据同步更新 (#2190) #2189 @wh-if
* :bug: fix(tabs): 修复最后一项展示不全的问题 #2214
* :bug: fix(tabs): 限制 tabs 导航滚动方向 #2208
* :bug: fix(input): 修复透传原生属性后 click 失效的问题
* :bug: fix(datepicker): 修复手动修改 modelValue 无效问题 #2205

## v4.0.4

`2023-03-24`

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @ntnyq @hlbj105 

* :zap: feat(picker): 支持透传 picker-view 属性 #2142 #2143 #2161 @eiinu
* :bug: fix(tabbar): taro remove href props @Drjingfubo
* :bug: fix: make peer dep optional (#2182) @ntnyq
* :bug: fix(elevator): 修复 iOS 上错误滑动到底部的问题 #2149 @eiinu
* :bug: fix(pullRefresh): 修复 @refresh 回调两次的问题 (#2153) @hlbj105
* :bug: fix(input): 修复 input 校验格式化错误 #2178 (#2193) @eiinu
* :bug: fix(tabs): 修复京东小程序下 tab 栏布局错误 @eiinu
* :bug: fix(dialog): 标题暗黑模式适配修复 @eiinu

## v4.0.3

`2023-03-10`

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @daofeng-1998 @n0liu @blachworld

* :zap: feat(tabs): add props swipeable 支持手势滑动切换，优化小程序端切换动画 #1984 #1828 @richard1015
* :zap: feat(noticebar): 增加横向滚动结束时回调事件 (#2135) @daofeng-1998
* :zap: upd(overlay): 优化组件closeOnClickOverlay属性功能 @szg2008
* :zap: chore: 移除 canvas 依赖，替换为 jest-canvas-mock (#2160) @eiinu
* :bug: fix(input): taro input type=number 类型问题修复 (#2171) @lkjh3214
* :bug: fix(list): demo样式修复 @szg2008
* :bug: fix(price): add new prop strike-through @Drjingfubo
* :bug: fix(navbar): change placeholder style @Drjingfubo
* :bug: fix(usetarorect): method modification import @Drjingfubo
* :bug: fix(tabs): web env bug @richard1015
* :bug: fix(tabs): clear log @richard1015
* :bug: fix: list 虚拟列表 列表少渲染一个item (#2152) @blachworld
* :bug: fix(input): 修复支付宝小程序 idcard 类型输入问题 @eiinu
* :bug: fix: 修复 popup 中嵌套 input 高度为 0 的问题 #2144 @eiinu
* :bug: fix(configprovider): v4 移除字体图标相关功能 #2165 (#2166) @eiinu
* :bug: fix: input、textarea 原生标签增加透传属性 @eiinu
* :bug: fix: 修复 resolver 导入问题 #2157 @eiinu
* :bug: fix: menu 闪动问题处理 @Ymm0008
* 📖 docs: tabs数量多,滚动操作 doc 更新 (#2158) @n0liu

## v4.0.2

`2023-02-24`

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷

* :zap: feat(list): 优化虚拟列表，支持不固定高度 #1658 #1382 @szg2008
* :zap: feat(uploader): 微信小程序支持上传视频文件、录制时长等功能 #2119 @richard1015
* :zap: feat(address): 地址组件新增功能 #2101 (#2113) @yangxiaolu1993
* :zap: feat(noticebar): 公告栏组件添加省略号功能 (#2114)  @yangxiaolu1993
* :zap: feat: input 新增 blur 后清除按钮是否展示字段  @lkjh3214
* :bug: fix(tabs): change event emit bug #1884 @richard1015
* :bug: fix(shortpassword): theme-dark style optimization @Drjingfubo
* :bug: fix(form): modify validation rules @Drjingfubo
* :bug: fix(upload): repair type error @Drjingfubo
* :bug: fix(components): remove console @Drjingfubo
* :bug: fix(menu): 修复 menu 收起无动画效果 @Ymm0008
* :bug: fix(signature): signature优化 @Ymm0008
* :bug: fix(barrage): loop模式优化 @Ymm0008
* :bug: fix(input): 修复特殊场景下无法输入的问题 #2123 @eiinu
* 📖 docs(notify): update props table @eiinu 
* 📖 docs(category): fix link of categoryData.js @eiinu 
* 📖 docs: remove scoped in doc.taro.md@eiinu 
* 📖 docs(category): update demo code @eiinu 
* 📖 docs(swiper): taro docs del scoped style @eiinu 
* 📖 docs(inputnumber): modify slot name @Drjingfubo 






## v4.0.1

`2023-02-10`

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @dongj0316 @mikasayw @rocwong-cn @thx125 @gyt95

* :zap: feat(checkbox): add checkbox new props of shape (#1978) @mikasayw
* :zap: feat(tabs): title bar supports automatic scrolling (#2035) @gyt95
* :zap: feat: calendar 添加自定义方法 (#2084) @lkjh3214
* :zap: feat: 增加 unplugin 插件配置导出 (#2097)  @eiinu
* :zap: feat: 日历组件新增 周选择功能 (#2102)   @lkjh3214
* :zap: feat(input): 新增slots (#2098)  @lkjh3214
* :zap: feat(badge): 新增bubble样式 (#2091) @dongj0316
* :bug: fix(list): list 虚拟列表未设置height，滚动加载有问题 #2088 @szg2008
* :bug: fix(list): 虚拟列表在ios手机上，滚动条滚动到顶部会出现白屏。 #2031 @szg2008
* :bug: fix: barrage，sinature demo修改 @Ymm0008
* :bug: fix(address): 地址问题修改 (#2054)  @yangxiaolu1993
* :bug: fix: drag，configprovide，badge 修改demo @Drjingfubo
* :bug: fix: taro h5 demo修改 @szg2008
* :bug: fix: jdt-style error @Drjingfubo
* :bug: fix: sku组件修改 (#2056)  @yangxiaolu1993
* :bug: fix: collapse,textarea 优化  @Ymm0008
* :bug: fix(tour): demo style edit @Drjingfubo
* :bug: fix(menu): change style @Drjingfubo
* :bug: fix(calendar): demo样式修改，文档修改 (#2052) @lkjh3214
* :bug: fix(config-provider): 覆盖nut-icon属性 (#2022) @thx125
* :bug: fix(table): demo optimization @Drjingfubo
* :bug: fix: imagepreview问题修改 (#2068) @yangxiaolu1993
* :bug: fix: 修复uploader组件的is-deletable在列表模式下不生效 (#2073) @rocwong-cn
* :bug: fix(input): 事件触发修改 (#2081) @lkjh3214
* :bug: fix(notify): resolve teleport warn @Drjingfubo
* :bug: fix(uploader): 修复图片拉伸样式问题 #2026 @richard1015
* :bug: fix: change sideEffects & default export (#2094) @eiinu
* :bug: fix: 公告栏 noticebar 插槽使用时不更新问题修改 (#2104) @yangxiaolu1993
* :bug: fix: 公告栏demo修改 (#2105) @yangxiaolu1993
* :bug: fix: timer ts error resolve @szg2008
* :bug: fix: 签名组件交互优化 @Ymm0008
* 📖 docs(addresslist): taro env use edit  @richard1015
* 📖 docs: popover修改 (#2053) @yangxiaolu1993
* 📖 docs: price 文档问题 (#2064)  @ailululu
* 📖 docs: card edit @Drjingfubo
* 📖 docs(tabbar): taro add punctuation @Drjingfubo
* 📖 docs: 新增4.0介绍 (#2086)  @yangxiaolu1993

## v4.0.0 🚀

`2023-01-12`

### 新特性

- :zap: 全新的升级，基于 vite4 构建
- :sparkles: 轻量化 安装体积由 14MB 下降至 8MB，减少了 39%
- :art: 支持动态定制主题
- :sparkles: 专属图标库`nutui-icons`
- :sparkles: 支持`unplugin-vue-components`插件
- :sparkles: 新增组件`Tour``PullRefresh`

> 完整内容请移步：「[4.0更新介绍](https://nutui.jd.com/next)」

小程序版本依赖 Taro ^3.5.10

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷

本次社区贡献者 @kasonyang @gyt95 @thx125 @Coffee-C @sjx12 @mikasayw @jxt776

### ⚠️ 升级必读

- [从 v3 升级到 v4](https://nutui.jd.com/4x/index.html#/zh-CN/guide/migrate-from-v3)
