## v3.3.1

`2022-12-16`

小程序版本依赖 Taro ^3.5.6

* :zap: feat(imagepreview、infiniteloading、tabs、tabbar): 优化内部逻辑 @nutui-team
* :zap: feat(picker): 新增 showOkText、showCancelText (#1933) @yangxiaolu1993
* :bug: fix(price): add new props strike-through (#1934)(#1907) @Drjingfubo
* :bug: fix(tabs): taro env sticky tips bug #1889 @richard1015
* :bug: fix(price): taro h5 style problem (#1944)  @Drjingfubo
* :bug: fix(menu): 修正自定义图标文档错误 、设置class-prefix不生效问题 (#1942) @yangjinjun3
* :bug: fix: range 组件Taro H5修改 (#1915) @lkjh3214


## v3.3.0

`2022-12-02`

小程序版本依赖 Taro ^3.5.x

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @mikasayw  @thx125
* :sparkles: chore: npm source set registry.npmmirror.com @richard1015
* :zap: feat(input): 添加小程序属性always-system (#1863) @mikasayw
* :zap: feat: 抽离 CreateComponent 函数，用于 函数式组件开发 (#1876) @yangxiaolu1993 
* :zap: feat: 重构 Popover，去除第三方依赖 (#1873)  @yangxiaolu1993 
* :zap: feat: Popover 组件 Taro 小程序适配 (#1882)  @yangxiaolu1993 
* :zap: feat(input): 新增enterkeyhint属性(H5版本支持confirm-type) (#1867) @mikasayw
* :zap: upd: overlay,popup @szg2008 
* :bug: fix(popup): update hide animation @szg2008
* :bug: fix(addresslist): 地址组件优化 (#1877)@ailululu 
* :bug: fix(popup): 组件修改(#1877)(#1883)  @yangxiaolu1993
* :bug: fix(Address): 组件体积优化 (#1885)  @yangxiaolu1993
* :bug: test(countdown,picker,imagepreview,dialog): 组件单元测试修改 (#1886)  @yangxiaolu1993
* :bug: fix: change mobile jump bug @richard1015
* :bug: fix(inputNumber): taro h5 style issues #1874 (#1887)@Drjingfubo
* :bug: upd(form): add try catch ,fix submit method @richard1015
* :bug: fix(Menu): 修复MenuItem 无法销毁问题 #1788 (#1857) @thx125
* :bug: fix(elevator): elevator组件elevator__item__${i}渲染出现小数 #1844 @szg2008
* :bug: fix(menu): 隐藏菜单时，不移除Popup里的内容 (#1891) @yangjinjun3
* :bug: fix(input): 合并template代码 (#1890) @ailululu 
* :bug: fix(textarea): 渲染问题处理，collapse 单测修复 (#1892) @Ymm0008  
* :bug: fix(input): commontent增加类型 (#1893) @ailululu  
* :bug: fix(menu): 修复弹框跳转问题 (#1894) @yangjinjun3  
* :bug: fix(Uploader): H5 打包去掉Taro 内容 (#1895) @yangxiaolu1993  
* :bug: fix(popup): popover 小程序warn解决 @szg2008  
* :bug: fix(popover): 样式换行问题修改 (#1897)  @yangxiaolu1993 
* 📖 docs(form): en us submit desc edit @richard1015
* 📖 docs(steps): 补充icon自定义的文档 @szg2008
* 📖 docs(Signature): 签名组件文档修改 (#1896) @szg2008
## v3.2.7

`2022-11-18`

小程序版本依赖 Taro ^3.5.x

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @gyt95 @Anberm @jwaterwater @mikasayw @thx125 @Yill625

* :sparkles: feat: 京东小程序适配 @nutui-teams
* :zap: feat(elevator): add change event(#1826) @szg2008
* :zap: feat: add rectangle arrow icons (#1833) @eiinu
* :zap: feat(uploader): add delete-icon prop (#1841)  @gyt95
* :zap: feat(calendar): 添加自定义周起始日配置 (#1827) @thx125
* :zap: feat(menu): 增加open和close事件 (#1848) @yangjinjun3
* :zap: feat: upd icon close @richard1015
* :bug: fix(uploader): taro env 多组件多accept限制bug #1448  @richard1015
* :bug: fix(sticky): sticky小程序跳动现象修复(#1571) @szg2008
* :bug: fix(swiper): swiper 加载动态图片时报Cannot read property id of null #1537 @szg2008
* :bug: fix(form): android site bug #1673 @richard1015
* :bug: fix(form): input ios 16 bug #1503 @richard1015
* :bug: fix(collapse): 修复小程序环境下使用手风琴模式无效问题 (#1830) @gyt95
* :bug: fix(collapse)：折叠面板加载问题处理 #1743 (#1829) @Ymm0008
* :bug: fix(imagepreview): 动态设置图片导致偏移 (#1836) @Anberm
* :bug: fix(avatar): 修复在H5环境下运行报错问题 (#1831) @gyt95
* :bug: fix: 修复 H5 下向上展开样式错误 (#1840) @eiinu
* :bug: fix(Drag): 修复拖拽表现异常 (#1716) @jwaterwater
* :bug: fix(card): too much content causes image stretched (#1839) @gyt95
* :bug: fix(uploader): taro jd env image base64 preview bug @richard1015
* :bug: fix(skeleton): fix some bugs for skeleton (#1832) @mikasayw
* :bug: fix(tabbar): add custom Icon slot #1807 (#1852) @Drjingfubo
* :bug: fix(video): Dynamically change source.src (#1860) @Drjingfubo
* :bug: fix(popup): 优化挂载逻辑 (#1861) @yangjinjun3
* :bug: fix(input): 优化了一些问题 (#1858) @ailululu
* :bug: fix(Signature): 签名组件文档，demo (#1856) @Ymm0008
* :bug: fix: 修复 imagepreview 动态设置 initNo 显示不正确问题 #1849 && InfiniteLoading 某些情况下会错误触发下拉刷新#1819 (#1853) @yangjinjun3
* 📖 docs(input): add demo md clear @richard1015
* 📖 docs: icon link edit @richard1015
* 📖 docs(popup): modify close icon props description @szg2008
* 📖 docs: 修改水印导出名称 (#1855) @Yill625

## v3.2.6

`2022-11-04` 

小程序版本依赖 Taro ^3.5.x

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者  @thx125 @gyt95 @HuziG @mikasayw @motain

* :bug: fix(imagePreview): 解决 imagepreview 视频点击关闭蒙层问题 (#1783)  @yangxiaolu1993  
* :bug: fix(picker): 解决 Picker 在微信小程序中无法使用的问题 (#1786)  @yangxiaolu1993  
* :bug: fix(tabbar): add props placeholder #1692 (#1796)  @Drjingfubo
* :bug: fix(video): add new events time #1055 (#1798)  @Drjingfubo
* :bug: fix(Signature): 签名组件taro环境适配 (#1797)  @Ymm0008
* :bug: fix(uploader): taro h5 模式 accept 不生效 #1448 #1445 #1474   @richard1015 
* :bug: fix(picker): 修改 Picker 组件在 Taro 中v-model 失效问题 (#1801)  @yangxiaolu1993  
* :bug: fix(noticeBar): NoticeBar修改height之后，垂直轮播会卡顿(#1809) (#1813)    @yangxiaolu1993 
* :bug: fix(datepicker): 删除Datepicker Demo演示中多余内容 (#1814)     @yangxiaolu1993 
* :bug: fix(icon): demo 复制功能优化 (#1773)   @eiinu
* :bug: fix(input): 修复taro中input@update:model-value事件会触发两次 #1632 (#1790)  @ailululu
* :bug: fix(menu): 修改Menu弹出失效问题 (#1812)   @thx125
* :bug: fix: scroll-view标签问题修复 (#1817)  @lkjh3214
* :bug: fix(badge): 修复在自定义徽标内容下设置样式无效的问题 (#1821)  @gyt95
* :bug: fix(notify): fix notify duration (#1810)  @mikasayw
* 📖 docs: update vue3 CLI self-test link (#1822)  @gyt95
* 📖 docs(actionsheet): edit doc (#1794)  @HuziG  
* 📖 docs(image): taro media image doc 404 fixed (#1795)  @motain 
* 📖 docs(uploader): capture tips add @richard1015 
* 📖 docs(menu): 菜单组件文档添加 toggle 事件说明 (#1818)   @yangjinjun3


## v3.2.5

`2022-10-25` 

小程序版本依赖 Taro ^3.5.x

* :sparkles: chore: update dts plugin @richard1015
* :sparkles: chore: update webstorm plugin @szg2008
* :sparkles: chore: change build vite config @Drjingfubo
* :bug: fix(fitabbar): defalut unactive-color #1779 (#1780) @yangjinjun3
* 📖 docs: docs: add README_EN.md (#1772) @eiinu

## v3.2.4

`2022-10-21` 

小程序版本依赖 Taro ^3.5.x

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者  @jwaterwater @Sorryhx @xxxsf @subordon

Tips: 重点修复 Scroll-View 在 Taro H5 场景下，不生效问题 #1766

* :sparkles: chore: vite打包配置修改，添加taro标签处理 (#1766) @lkjh3214
* :sparkles: chore: vscode extension support new components @szg2008
* :sparkles: chore: update dts plugin @szg2008
* :sparkles: feat(ellipsis): add lineHeight props @szg2008
* :sparkles: feat(Picker、DatePicker): 新增safe-area-inset-bottom属性 (#1770) @yangxiaolu1993
style: add jddkh theme @yangjinjun3
* :bug: fix(textarea): 小程序端组件按需加载的时候，未正确获取到文本框的高度 (#1756) @subordon
* :bug: fix(barrage): barrage 样式报错，H5环境 slot 插槽适配 (#1771) @Ymm0008
* :bug: fix(imagepreview): 组件，滑动时弹窗出现关闭现象 (#1761) @xxxsf
* :bug: fix(popup): close事件触发时机 (#1730) @Sorryhx
* :bug: fix(address、datepicker): DatePicker 的 v-model 没有实现双向绑定 (#1745) @yangxiaolu1993
* :bug: fix(tabbar): safe-bottom样式异常 (#1742) @jwaterwater
* :bug: fix(toast): resolve problem of method failure in production (#1744) @Drjingfubo
* :bug: fix(calendar): taro h5 scroll-view compatible (#1718) @lkjh3214
* :bug: fix(uploader): taro 环境 multiple 参数支持 ，用于优化只选中1个照片场景 @richard1015
* 📖 docs(image): showError showLoading props CamelCase @szg2008
* 📖 docs: upd contributing link @richard1015
* 📖 docs: add awesome.md @snandy
* 📖 docs: change readme.md @snandy
* 📖 docs(imagepreview): add import component @szg2008
* 📖 docs(uploader): before-xhr-upload #1725 @richard1015
* 📖 docs(components): optimization @Drjingfubo

## v3.2.3

`2022-09-30` 

小程序版本依赖 Taro3.5

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者  @yoyo837 @jwaterwater 

* :sparkles: chore: taro env jd Adapter @richard1015 
* :sparkles: chore: component types @szg2008
* :sparkles: chore: taro3.5 support @szg2008
* :sparkles: chore: updrade typescript to v4.8 @szg2008
* :sparkles: chore: style variables del animation #1689 #1375 @richard1015 
* :sparkles: feat: add trendArrow component(#1660) @lkjh3214
* :zap: upd: change export module name @szg2008
* :zap: feat: validator 支持回传rule, 用以在自定义 validator 时获得配置在rule的属性来处理不同的逻辑, 含自定义属性 @yoyo837 
* :zap: feat(form): add props rules属性, 可以统一配置每个FormItem的rules (#1704)  @yoyo837 
* :bug: fix(searchbar): textalign types @szg2008
* :bug: fix(components): docs and type optimization (#1661) @Drjingfubo
* :bug: fix(avatar): events callback undefined (#1686) @Drjingfubo
* :bug: fix(components): type optimization (#1666) @lkjh3214 
* :bug: fix: 修复 ImagePreview 在Taro编译成H5后报错的问题 (#1687) @yangxiaolu1993  
* :bug: test(trendarrow): test error @szg2008  
* :bug: test(tabs,cascader): resolve test error (#1709) @szg2008  
* :bug: fix(uploader): method clearUploadQueue #1597 @richard1015  
* :bug: fix(uploader): before-delete support Promise #1672 @richard1015  
* :bug: fix(picker): 在Taro中卡顿的问题 (#1685)  @yangxiaolu1993  
* :bug: fix(tabs): resolve conditional rendering issues #1500 (#1698)  @Drjingfubo  
* :bug: fix(form-item): tsx 类型捕获 (#1697)  @yoyo837  
* :bug: fix(barrage): add slot，demo及文档完善 (#1699) @Ymm0008  
* :bug: fix(menu): 修复文档中部分错误 & 修复 taro 小程序下闪跳问题 #1541 (#1678) @eiinu  
* :bug: fix(menu): remove taro menu-popup entry animation (#1703) @eiinu  
* :bug: fix(tabbar): add default height (#1701) @jwaterwater  
* :bug: fix(tabs): h5 add sticky props (#1707) @Drjingfubo  
* :bug: fix(list): 组件事件不被触发 #1607 @szg2008  
* :bug: test(list): test error #1607 @szg2008  
* :bug: fix(divider,imagePreview,pagination): components optimization (#1705)@eiinu   
* 📖 docs(components): optimization (#1662) @Drjingfubo
* 📖 docs(components): optimization (#1683) @Drjingfubo
* 📖 docs(imagePreview): type optimization (#1691) @Drjingfubo
* 📖 docs(infiniteloading): type load-icon props to string @szg2008
* 📖 docs(timeselect,overlay): edit (#1679) @eiinu 
* 📖 docs(card): add click events (#1700) @Drjingfubo 









## v3.2.2

`2022-09-08` 

小程序版本依赖 Taro3.4

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @hydraZty @YoungsunLi @tolking @LarryHangFan

* :sparkles: feat: 发票组件+taro (#1590) @ailululu
* :zap: feat(icon): demo 页面增加点击图标复制 name 功能 (#1563) @eiinu
* :zap: feat(inputnumber): 增加自定义左右操作符图标功能 #1562 @eiinu
* :zap: feat(searchbar): 新增自定义设置清除图标功能， 新增聚焦时自定义样式 (#1618) @Ymm0008
* :bug: fix(picker): 解决惯性滚动问题 (#1546)  @yangxiaolu1993
* :bug: fix(imagePreview): replace the type for images (#1543) @hydraZty
* :bug: fix(calendar): 兼容支付宝小程序。修改滚动判断逻辑。修复h5 demo问题。修复滚动动画props失效问题 (#1547) @lkjh3214
* :bug: fix(tabbar): resolve href error #1533 (#1556) @Drjingfubo
* :bug: test(menu): resolve error (#1557) @Drjingfubo
* :bug: fix(cell): Cell Slots中使用Layout，会导致Cell和Row的@click事件全部失效(#1408) @eiinu
* :bug: fix(radio): radio对齐问题(#1419) @eiinu
* :bug: fix(picker): taro-picker 问题修改 (#1582) @yangxiaolu1993
* :bug: fix(picker): Picker新增点击确定停止滚动逻辑 (#1586)  @yangxiaolu1993
* :bug: fix(picker): 解决Picker 在Taro 上的高度问题 (#1604) @yangxiaolu1993
* :bug: fix(form&radio): 修复 radio 表单校验相关问题 (#1587) @eiinu
* :bug: fix(tabs): whitespace children bug (#1599) @YoungsunLi
* :bug: fix(dialog): 标题判断时未考虑插槽 (#1601) @tolking
* :bug: fix: loadingrotate is false, which is invalid (#1613) @LarryHangFan
* :bug: fix(menu): menu list cannot be scrolled #1615 (#1633) @Drjingfubo
* :bug: fix(drag): resolve console error (#1634) @Drjingfubo
* :bug: fix(picker): 在Taro适配中的优化以及Issue 问题修改（#1620、#1572） @yangxiaolu1993
* :bug: fix(tabs): resolve tabpane show errors #1544 (#1636) @Drjingfubo
* :bug: fix(form): resolve slot invalid issue #1637 (#1638) @Drjingfubo
* :bug: fix(picker): 文本超长省略号处理 (#1639) @yangxiaolu1993
* :bug: fix(price): price 在小程序中样式展示不对 #1628 @szg2008
* :bug: fix(calendar): demo错误问题修复 (#1644) @lkjh3214
* 📖 docs(list): 文档 demo 增加 css 样式 (#1565) @eiinu
* 📖 docs(actionsheet,toast): edit (#1635) @Drjingfubo
* 📖 docs(backtop,badge,button,popover,tag,watermark): 文档调整，demo修改 (#1624) @lkjh3214


## v3.2.1

`2022-08-09`

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @LadyChatterleyLover @zjyau @sushi-su

* :sparkles: 暗黑模式所有组件适配完成 @nutui-teams
* :sparkles: feat(uploader): taro env before-xhr-upload #1535 @richard1015
* :sparkles: chore(fixednav): add props active-color #1393 @LadyChatterleyLover @richard1015
* :sparkles: feat(steps): 横向缺少点状步骤条样式 (#1540) @sushi-su
* :sparkles: feat(cell、step、menu...): add props font-class-name、class-prefix (#1372) # @richard1015
* :bug: fix: 🔥 Vue warn Failed to resolve component scroll-view  (#1523) @yangxiaolu1993
* :bug: fix(picker): 首次弹起点击确定无返回值bug @yangxiaolu1993
* :bug: fix(numberkeyboard): props conflict issue #1486 (#1526) @Drjingfubo
* :bug: fix(audiooperate): 修复打包结果d.ts中props的类型错误 (#1534) @eiinu
* :bug: fix(tag): 修复 plain 与其他 prop 组合使用时未生效问题 #1472 (#1530) @eiinu
* :bug: fix(swiper): 解决PC端轮播图滑动失效问题 #1217 (#1531) @eiinu
* :bug: fix: card nut-pric错误 (#1536) @zjyau
* 📖docs(menu): add install OverLay, Popup #1485 @richard1015
* 🍭style(watermark、category、menu): edit sass @richard1015

## v3.2.0

`2022-08-01`

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @LadyChatterleyLover @Zhengqbbb @zjyau @hydraZty

* :sparkles: 暗黑模式适配支持 @nutui-teams
* :sparkles: feat: 新增 WaterMark 水印组件 @lkjh3214
* :sparkles: feat: imagepreview 缩放功能 (#1425) @yangxiaolu1993
* :sparkles: feat(popup): support muti stacks @szg2008
* :sparkles: feat(swiper): support show center @szg2008
* :sparkles: feat(category): onchange add (sku) (#1440) @zjyau
* :sparkles: feat(picker): 惯性滚动与性能优化 (#1453) & 平铺功能 @yangxiaolu1993
* :sparkles: feat(card): add price slot (#1452) @zjyau
* :sparkles: feat(tabbar): add new props name#1449 (#1471) @Drjingfubo
* :sparkles: feat(uploader): add props before-xhr-upload @richard1015
* :sparkles: feat(Table): 增加标题,列表样式参数 (#1460) @zjyau
* :sparkles: feat(audio): 新增can-play事件 (#1515) @eiinu
* :sparkles: feat(menuitem): 增加自定义titleClass属性和优化input组件disabled和readonly状态下的事件处理 (#1480) @LadyChatterleyLover
* :sparkles: feat(address): address 新增底部插槽 (#1509) @yangxiaolu1993
* :sparkles: feat(signature): 组件增加签名开始、结束、进行中回调函数 (#1520) @Ymm0008
* :zap: chore: use cz-git commitizen adapter (#1424) @Zhengqbbb
* :bug: fix(navbar): taro init height error @ailululu
* :bug: fix(textarea): 支付宝小程序限制重影问题 #1514 @richard1015
* :bug: fix(picker): 小程序重影问题 #1514 @richard1015
* :bug: fix(checkbox、switch): async change value , emit change fn @richard1015
* :bug: fix(actionsheet): add new props #1395 (#1456) @Drjingfubo
* :bug: fix(datepicker): top 插槽未生效问题 (#1501) @eiinu
* :bug: fix(noticebar、swiper): md文档问题；修复noticebar右侧图标垂直居中问题；修复audio显示时长问题 (#1510)  @eiinu
* :bug: fix: 修复折叠面板手风琴模式；  @Ymm0008
* :bug: fix: 修复notify标签式展示报错问题及class类名问题；  @Ymm0008
* :bug: fix: 解决签名组件(Signat…  @Ymm0008
* :bug: fix: 类型声明文件命名错误修复(#1442) @szg2008
* :bug: fix: addresslist datalist清空后不同步问题 (#1483) @zjyau
* 📖docs: Update README.md @snandy
* 📖docs(radio): install add icon @richard1015
* 📖docs(card): add install desc @richard1015
* 📖docs(toast): taro env eidt @richard1015
* 🍭style: fix Picker options partially overlap in older versions of Safa… @hydraZty

## v3.1.22

`2022-06-24`

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @mushroomli @renbaoshuo @yoyo837 @remxcode

* 🌍 feat: 组件文档支持国际化 @nutui-teams
* :sparkles: feat: 新增 Animate 动画/动效 组件 @mushroomli
* :sparkles: feat: 新增 Image 图片展示组件 @yangxiaolu1993
* :sparkles: feat: 新增 Ellipsis 文本省略 @yangxiaolu1993
* :sparkles: feat: 新增 ConfigProvider 暗黑模式切换 @richard1015
* :sparkles: feat(calendar): 日历范围中的开始结束日期在同一月份，日历空白问题 (#1405) @lkjh3214
* :sparkles: feat(elevator): add index ceiling capacity @szg2008
* :sparkles: feat(checkbox): 增加选择限制，反选，半选功能  @szg2008
* :sparkles: feat(cell): add attr size & title slot @richard1015
* :sparkles: feat(dialog): add popClass、popStyle、beforeClose @richard1015
* :sparkles: feat(form): add form-item slot label #1361 @richard1015
* :sparkles: feat(button): 细化两个变量 (#1389) @yoyo837
* :sparkles: feat(menu): 增加向上弹出和自定义选项图标等新能力 (#1346) @yangjinjun3
* :sparkles: feat(timeselect): 标题支持html @szg2008
* :sparkles: feat(rate): add attr touchable @richard1015
* :sparkles: feat(elevator): add default slot for item(#1379) @szg2008
* :sparkles: feat: imagepreview 部分功能补齐 (#1412) @yangxiaolu1993
* :sparkles: feat: input组件新增input slot插槽 (#1418) @ailululu
* :zap: chore: support highlight for JetBrains web-types @szg2008
* :zap: chore: fix: d.ts error @szg2008
* :zap: chore: fix locale types @richard1015
* :zap: chore: add rollup terser option(drop_console) #1363 @richard1015
* :bug: fix: collaspe 数据更新问题处理 (#1401) @Ymm0008
* :bug: fix(address): add lock-scroll props @szg2008
* :bug: fix(uploader): alipay upload error #1322  @richard1015
* :bug: fix(form): taro h5 env button submit bug #1350 @richard1015
* :bug: fix(radio): unactive boder width setting  @richard1015
* :bug: fix(input): taro升级maxlength问题、部分组件国际化 @ailululu
* :bug: fix(circleprogress): taro gradient color position error (#1371) @Drjingfubo
* :bug: fix(tabs): text word-break #1344 @richard1015
* :bug: fix(timeselect): add lock-scroll props(#1343) @szg2008
* :bug: fix(uploader): taro env types error @richard1015
* :bug: fix(tabs): add autoHeight #1066 @richard1015
* :bug: fix(toast): demo 路由切换时toast 不消失 bug @richard1015
* 📖docs(overlay): lock-scroll attribute of overlay should be true (#1380) @remxcode
* 📖docs(form): validator rule attr del  @richard1015
* 📖doc: calendar 文档修改 (#1410) @lkjh3214
* 📖docs(elevator): 增加吸顶props @szg2008
* 🍭style: fix font family of highlighted code (#1354) @renbaoshuo

## v3.1.21

`2022-05-30`

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @allan2coder @programmerlgs @websongning @Tnon @xcc1995 @mikasayw @@youngjuning @yangjisen

* :zap: feat: 组件文档和demo支持国际化 
* :zap: feat: 京东B商城主题样式 (#1298) @programmerlgs @richard1015
* :zap: feat: 官网顶部结构修改 (#1307) @ailululu
* :zap: feat: add lang bahasa Indonesia (#1309) @websongning
* :zap: feat: 优化ts类名声明，支持函数式 @szg2008
* :zap: feat: 优化add命令，支持国际化 @szg2008
* :zap: feat: popover功能补全 (#1306) @yangxiaolu1993
* :zap: feat(dialog): content support CunstomComponent and VNode  @Tnon
* :zap: feat(input): 新增adjust-position原生属性 (#1255) @mikasayw
* :zap: feat(dialog): 增加自定义 class / style 功能 #1289 (#1312)  @allan2coder
* :zap: feat: navbar能力补齐,官网顶部获取组件名称 (#1320)  @ailululu
* :zap: feat: searchbar 组件能力补充(增加label，点击事件等) @Ymm0008
* :zap: feat(overlay): 增加修改遮罩样式的说明 @szg2008
* :zap: feat: variables add $required-color #1267 @richard1015
* :zap: feat(dialog): add overlay-class、overlay-style #1289 @richard1015
* :zap: feat(swiper): add async&api demo @szg2008
* :zap: feat(cell): add props center @richard1015
* :zap: feat: input、searchBar组件添加confirm-type属性 (#1258) @mikasayw
* :zap: feat(tabs): add autoHeight #1066 @richard1015
* :bug: fix(backtop): 修复demo页面按钮被遮挡样式问题 (#1293) @allan2coder
* :bug: fix: 修复navbar和tabbar组件文档格式问题&tabbar demo ts 声明问题 (#1297) @allan2coder
* :bug: fix(numberkeyboard): 增加身份证展示和demo @Drjingfubo
* :bug: fix: demo vue function error @richard1015
* :bug: fix(circleprogress): 修复taro h5环境下不展示圆环问题 @Drjingfubo
* :bug: fix(progress): type modification @Drjingfubo
* :bug: fix(tabbar): solve (to href) priority issues(#1302) @allan2coder
* :bug: fix: cdn sass edit @richard1015
* :bug: fix(card): footer 插槽内容 与 shopName 内容水平对齐 (#1251) @xcc1995
* :bug: fix(popup): taro版本，自定义内容无法获取100%高度问题修复 (#1308) @lkjh3214
* :bug: fix: Add repository.directoru (#1280) @youngjuning
* :bug: fix(backtop): modify taro docs for backtop(#1019) @szg2008
* :bug: fix(timeselect): 第一次渲染样式问题以及样式不全问题修复(#1257 #1253) @szg2008
* :bug: fix(sticky): 在小程序中报错修复(#1265) @szg2008
* :bug: fix(form): vnode async children bug #1317 @richard1015
* :bug: fix(swiper): dynamic rendering error (#1155 #1249) @szg2008
* :bug: fix(swiper): test modify error @szg2008
* :bug: fix: jdt theme edit @richard1015
* :bug: fix: taro build error @szg2008
* :bug: fix(formitem): input add font color #1272 @richard1015
* :bug: fix(tabs): type is vertical ellipsis bug @richard1015
* :bug: fix(elevator): taro click title error(#1281) @szg2008
* :bug: fix(elevator): click highLight error(#1151) @szg2008
* :bug: fix(list): taro e.detail error(#1171 #1284) @szg2008
* :bug: fix: import NutUI ts error @szg2008
* :bug: fix(tabbar): docs add dot props (#1335) #1292 @Drjingfubo
* :bug: fix(addresslist): 优化地址列表数据变更重新渲染 (#1270) @yangjisen
* :bug: fix(popup): 在Taro中遮罩层滑动问题解决 (#1338)  @yangxiaolu1993
* :bug: fix(tabbar): revise safebottom scss (#1339) @Drjingfubo


## v3.1.19

`2022-04-25` 此版本依赖 Taro 3.4.x

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @Sun79 @SpringHgui @rocwong-cn @wlchn @Tnon

* :zap: feat: [所有组件国际化支持](https://nutui.jd.com/#/international) @richard1015
* :zap: feat: tsx 类型支持、[vscode 插件支持](https://marketplace.visualstudio.com/items?itemName=nutui.nutui-vscode-extension) @szg2008
* :zap: feat: 新增 Comment、Ecard 特色组件 @yangxiaolu1993
* :zap: feat: 新增 Category、AddressList 特色组件 @ailululu
* :zap: feat: 根据config.json自动生成taroConfig.ts (#1181)  @yangxiaolu1993
* :zap: feat: 单选框和复选框支持外部自定义图标 (#1182) @rocwong-cn
* :zap: feat(numberkeyboard): add custom btn desc (#1176) @SpringHgui
* :zap: feat(tabbar): tabbar-item add slot (#1173) @Drjingfubo
* :zap: feat(actionsheet): add new props (#1194) @Drjingfubo
* :zap: feat(progress): add custom slot (#1196) @Drjingfubo
* :zap: refactor(circleprogress): add features (#1204) @Drjingfubo
* :zap: refactor(CountDown): 新增重置、毫秒级展示、自定义格式等功能 @yangxiaolu1993
* :zap: feat: avatar能力补齐、input doc文档更新 (#1195) @ailululu
* :zap: feat: build internationalization config @richard1015
* :zap: feat: Picker与DatePIcker新增插槽 (#1213) @yangxiaolu1993
* :zap: feat(notify): 增加组件模板调用方式 (#1220) @Ymm0008
* :zap: feat: 新增collapse组件自定义内容（不折叠）功能 @Ymm0008
* :zap: feat(list): 虚拟列表增加列表高度可配置(#1199) @szg2008
* :zap: feat(card): add new props #1198 (#1237) @Drjingfubo
* :zap: feat(Cascader): 功能补齐 (#1238)  @yangxiaolu1993
* :zap: feat(popup): 增加底部iphonex适配(#1009) @szg2008
* :zap: feat(table): tableData customrender by Columns.render (#1234) @Tnon
* :bug: fix(Cascader): 传入tree 数据 末级数据有重复时 父路径查询错误 #1233 @dongj0316
* :bug: fix(datePicker): 组件平铺展示不展示问题修改 (#1229) @yangxiaolu1993
* :bug: fix(elevator): navbar not working in taro h5 (#1175) @Sun79
* :bug: fix(input): taro的问题+增加demo的三个icon功能 (#1223) @ailululu
* :bug: fix(uploader): event success、failure add responseText #1212 @richard1015
* :bug: fix(tabs): init tabs__content index calc error @richard1015
* :bug: fix(imagepreview): 单元测试调整 (#1163) @JackieScorpio
* :bug: fix(popup): 修复popup在Taro转H5下的渲染问题 @szg2008
* :bug: fix(input): show-word-limit default false (#1203) @wlchn
* :bug: fix(textarea): demo textarea 自适应 (#1201) @Ymm0008
* :bug: fix(textarea): add rows defaults (#1216) @Ymm0008
* :bug: fix: taro 3.4.6 sass calc error #1200 @richard1015
* :bug: fix(uploader): taro h5 env upload error #1096 @richard1015
* :bug: fix(formitem): class and style cannot be set on the formitem (#1174) @Sun79
* :bug: fix(input): maxNum 改为 maxLength,文档修改等 (#1188) @Ymm0008
* :bug: fix(uploader): taro3.4.x android demo style @richard1015
* :bug: fix(tag): wrong event handler (#1167) @Sun79
* :bug: fix(numberkeyboard): resolve issues #1091 (#1168) @Drjingfubo
* :bug: docs: 组件分类顺序排序修改 @yangxiaolu1993

## v3.1.18

`2022-03-25` 此版本依赖 Taro 3.4.x

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @agileago @AsherSun @wuyunkuo @wangrongding

* :zap: feat: [在线主题定制](https://nutui.jd.com/theme/#/base)
* :zap: feat: 所有组件增加单元测试
* :zap: feat: picker 与 datePicker 重构 (#1131)  @yangxiaolu1993
* :zap: feat(list): 新增虚拟列表组件 @szg2008
* :zap: feat(noticebar): 新增功能(多行展示、关闭按钮可扩展) (#1072) @yangxiaolu1993
* :zap: feat(address): 功能扩展 (#1083) @yangxiaolu1993
* :zap: feat(steps): provide click-step event, slot for title and content @szg2008
* :zap: feat: 日历组件调整 (#1090)  @lkjh3214
* :zap: feat(input): input部分新增功能 (#1076)  @ailululu
* :zap: feat(textarea): 组件优化 (#1107)  @Ymm0008
* :zap: feat(tabbar): add dot props (#1147)  @Drjingfubo
* :zap: feat: collapse 标题多行展示,无内容不下拉,图标位置配置,textarea 自动撑开，collapse 组件能力 (#1121)  @Ymm0008
* :zap: feat: range组件，功能完善 (#1129)   @lkjh3214
* :bug: fix: popover/navbar props and warning (#1044 #1051)  @liqiong-lab
* :bug: fix(navbar): 文档修复  @richard1015
* :bug: fix(cell、grid): cdn router warn bug #1070  @richard1015
* :bug: fix(navbar): 新增顶部固定props及安全区适配 (#1058)  @liqiong-lab
* :bug: fix(overlay): provide modify style  @szg2008
* :bug: fix(searchbar): taro-h5环境enter触发无效 (#1088)   @JackieScorpio
* :bug: fix: 修复tsx下类型错误 (#1097)   @agileago
* :bug: fix(cell): sub-title icon 并存时样式错乱 #1092   @richard1015
* :bug: fix(checkbox): 修复checkboxgroup的disabled的属性不是响应式的问题 (#1113)    @AsherSun
* :bug: fix(checkbox): 修改checkbox文档中的描述错误 (#1112)    @AsherSun
* :bug: fix: 修复日期选择器modelValue不能双向数据绑定的BUG (#1093)    @wuyunkuo
* :bug: fix(button): taro h5 width abnormal   @richard1015
* :bug: fix(form): taro3.4.x submit refresh #1041  @richard1015
* :bug: fix(uploader): taro h5 3.4.x style cover  @richard1015
* :bug: fix(form): check rule reference value disconnect #1053 @richard1015
* :bug: fix: 日历组件字段问题修复 (#1130) @lkjh3214
* :bug: fix(progress): resolve issue #1138 (#1141) @Drjingfubo
* :bug: fix(progress): add text-background props,update variables.scss (#1145) @Drjingfubo
* :bug: fix(countdown): 修复倒计时组件重复更新end-time时的组件更新问题 (#1119) (#1120)  @wangrongding
* :bug: fix(swiper): 当只有一张图时，高度超出css设置的值(#1109)  @szg2008

## v3.1.17

`2022-02-25` 此版本依赖 Taro 3.4.x

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @odex21 @p3psi-boo @gp5251 @deity-wu

* :zap: feat(sticky): 新增粘性布局组件(#627)   @szg2008
* :zap: feat(audio): 新增音频组件   @yangxiaolu1993
* :zap: feat(calendar): 日历组件功能扩展(#550 #842 #742 #806)   @lkjh3214
* :zap: feat: 优化重构 add 命令   @szg2008
* :zap: chore: support template type check (volar) (#985) @odex21
* :zap: feat(input): 输入数字时拉起数字键盘 (#999) @odex21
* :zap: feat(input): 在taro、doc增加无边框 (#995) @ailululu
* :zap: feat(swiper): 适配小程序(#944 #551 #553) @szg2008
* :zap: feat(elevator): 暴露 ScrollTo API @szg2008
* :zap: feat(elevator): 点击之后增加高亮显示(#974) @szg2008
* :zap: feat(button): add third-party icon support (#1018) @p3psi-boo
* :zap: feat(layout, row): add support for space-evenly (#1020) @gp5251
* :zap: feat(address): 新增默认选中功能 (#368) @yangxiaolu1993
* :bug: docs(indicator): 描述文案修改  @richard1015
* :bug: fix(cascader): 主题定制不生效bug(#998)   @richard1015
* :bug: docs(circleprogress): 描述文案修改(#990) @Drjingfubo
* :bug: fix(tabbar): 微信浏览器下安全适配不生效修改 (#997) @Drjingfubo
* :bug: docs(drag): 文档样式错乱修复   @richard1015
* :bug: fix(DatePicker): 修复Taro使用场景报错 (#1014)   @yangxiaolu1993
* :bug: docs(popup): update destoryOnClose props instruction (#1010)   @szg2008
* :bug: docs: 组件的文案修改 (#1021)  @yangxiaolu1993
* :bug: docs(button): 添加对第三方图标支持的文档 (#1026)  @p3psi-boo
* :bug: docs(tabbar): add import Icon (#1028)   @Drjingfubo
* :bug: fix(progress): optimization,add new props isShowPercentage (#1016)  @Drjingfubo
* :bug: fix: fix radio switch checkbox radio warning   @szg2008
* :bug: fix(searchBar): 搜索栏的 search 事件 在H5中会刷新当前页面 #1025  @JackieScorpio
* :bug: fix(imagepreview): 引用报错(#1024 #989)   @JackieScorpio
* :bug: fix: 滚动加载组件，taro版，下拉刷新bug修改 (#1004)  @deity-wu
* :bug: fix: input组件的readonly属性在taro小程序项目中不生效(#1017)  @ailululu

## v3.1.16

`2022-01-30` 此版本依赖 Taro 3.4.x

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @Anberm

* :zap: feat(button): use taro button (#918) @Anberm
* :zap: feat(uploader): delete 事件增加文件下标字段 @richard1015
* :zap: chore(navbar): 底层tabs组件替换 (#971) @liqiong-lab
* :zap: chore(picker): 增加3d滚动效果、支持小程序场景使用 (#981) @yangxiaolu1993
* :bug: fix(taro env): taro failed resolve component @szg2008
* :bug: fix(tabbar): taro vue-router warn (#980) @Drjingfubo
* :bug: fix(icon): loading icon rotate bug @richard1015
* :bug: fix(input): 修复close 按钮清除延迟bug  @ailululu
* :bug: fix(uploader): multiple 状态文件限制bug修复 @richard1015
* :bug: fix(menu): 页面内容过长滑动位置固定 bug @yangjinjun3
* :bug: fix(price,switch): vue warn  @richard1015
* :zap: docs: 官网所有组件文档支持在线调试 @teams/nutui


## v3.1.15

`2022-01-21` 此版本依赖 Taro 3.4.x

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @Anberm、@odex21

* :zap: feat(sidenavbar): 新增侧边栏导航组件   @szg2008
* :zap: feat: 组件增加在线调试、查看功能 @zhenyulei
* :zap: feat(imagepreview): 增加自动轮播功能；增加放大缩小功能 (#908)   @JackieScorpio
* :zap: feat(popup): props的closeable支持动态传值(#923)  @szg2008
* :zap: chore: comp themes attr extract (#934)  @richard1015
* :zap: feat(tabbar): 新增底部安全区适配属性 #876 (#953)   @Drjingfubo
* :zap: feat: icon添加动态   @yangxiaolu1993
* :bug: fix(table): 修复小程序环境下自定义内容样式问题  @szg2008
* :bug: fix(table): 解决渲染数据顺序不同步的问题  @szg2008
* :bug: fix(form): form-item v-if submit event error  @richard1015
* :bug: fix(form-item): add attr empty status warn  @richard1015
* :bug: docs(video): 播放地址修改 (#911)   @yushuang-d
* :bug: fix: switch emits loading (#912)   @Anberm
* :bug: fix(inputnumber、textarea): 调整 change 顺序  @richard1015
* :bug: chore: fix build method component types ts error (#916)  @richard1015
* :bug: docs(tabs): 自定义示例代码添加 feedback q2439456344@163.com  @richard1015
* :bug: style: variables 样式变量标准化调整  @richard1015
* :bug: docs(switch): 补充文档，说明 size 的含义  @szg2008
* :bug: docs: cellgroup import desc  @richard1015
* :bug: docs(form): online editor access  @richard1015
* :bug: fix(range): remove error parameter in tmeplate (#940)  @odex21
* :bug: fix(collapse): 数据动态加载时更新问题修复 (#937)  @Ymm0008
* :bug: fix: circleprogress warring #945 (#949)   @Drjingfubo
* :bug: docs(address): 修改已有地址数据结构(#952)   @szg2008
* :bug: fix(form): 动态表单重置状态bug (#932)  @richard1015
* :bug: revert(icon): 动态图标重置 & 动态图标文档删除  @richard1015
* :bug: fix: 修改issues textarea自动取焦、rows不生效问题 (#965)   @lzzwoniu
* :bug: fix: datepicker 组件内容完善 (#961)   @yangxiaolu1993

## v3.1.14

`2021-12-22`

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @deity-wu、@297cwrun、@sumy7、@haiweilian

* :zap: feat(indicator): 新增指示器组件 (#900)  @senyawang
* :zap: feat(table): 新增表格组件  @szg2008
* :zap: feat(skeleton): 新增骨架屏组件 (#882)  @liqiong-lab
* :zap: feat(cascader): 新增级联选择器组件 (#856)  @dongj0316
* :zap: feat(empty): 新增空状态组件 (#899)  @jessjava
* :zap: feat(grid): 新增宫格组件 (#895)  @haiweilian
* :zap: feat(uploader): add before-upload in uploader(taro) (#862)  @haiweilian
* :zap: feat(tabs): props add size  @richard1015
* :zap: feat: 增加Switch组件value值的类型 (#864)  @deity-wu
* :zap: chore: website mobile  @richard1015
* :zap: feat(form): add blur、change validate & fix (#902)  @richard1015
* :bug: fix(countdown): countdown restTime didn't pass 2s to 1s (#906) @yangxiaolu1993
* :bug: docs(numberkeyboard): props update (#868) @Drjingfubo
* :bug: docs(checkbox): checkboxGroup 的 v-model 类型说明错写成 String (#871) @297cwrun
* :bug: docs(popup): fix quotation mark pairing (#878) @sumy7
* :bug: fix(uploader): 修复多张图片同时上传时图片类型判断错误 (#872) @haiweilian
* :bug: docs(dialog&popup): 引用文档修改 @richard1015
* :bug: fix(searchbar): 小程序下search事件失效 (#885) @297cwrun
* :bug: fix(noticeBar): speed、height 设置为某些值时，不触发滚动问题 (#894)  @yangxiaolu1993

## v3.1.13

## v3.1.12

`2021-11-27`

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @AsherSun、@LeeHarlan、@297cwrun

* :zap: feat: 新增 form 表单校验组件 #846  @richard1015
* :zap: feat: 新增 menu 菜单组件 #844 @yangjinjun3
* :zap: feat: 新增 card 商品卡片 @Drjingfubo
* :zap: feat(imagepreview): 新增函数式调用、视频 (#858) @JackieScorpio
* :zap: feat(uploader): 新增 ready 状态对应的UI展示 (#837) @AsherSun
* :zap: feat(button): 新增 mini 尺寸 (#837) @Drjingfubo
* :zap: feat(numberkeyboard): add overlay props @Drjingfubo
* :zap: feat(switch、icon): 图标库增加loading，switch组件增加加载中状态 @szg2008
* :zap: feat(toast): 增加标题属性，调整自定义位置 @Drjingfubo
* :zap: feat(fixednav): Demo 增加拖拽效果 @richard1015
* :zap: feat(cellgroup): add desc props & slots @richard1015
* :zap: feat(dialog): add props footer-direction @richard1015
* :zap: feat(rate): 支持自定义 icon @richard1015
* :bug: fix(input): readonly时不显示placeholder (#840) @297cwrun
* :bug: fix(rate): 半星情况出现颜色差异 #810  @richard1015
* :bug: fix(timeselect): 修改配送时间组件 style @szg2008
* :bug: fix(popover): 关闭点击优化 #851 @liqiong-lab
* :bug: fix(popover): popover list item click error (#843) @LeeHarlan
* :bug: fix(uploader): 修复小程序端传图后报错问题 (#836) @AsherSun

## v3.1.11

`2021-11-15`

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @AsherSun、@muitang、@MechaGirls

* :zap: feat: 新增 sku 商品规格组件 #64 (#827) @yangxiaolu1993
* :zap: feat(toast): hide methods add id param  @richard1015
* :zap: feat(radio、radiogroup): add props direction、shape @richard1015
* :zap: feat(uploader): add prop list-type、progress @richard1015
* :bug: fix(signature): 在“微信小程序”中点确认后保存的图片无法打开查看签名图片 #829 (#830) @muitang
* :bug: fix(tabs):当父组件默认值传入时无法更新tabs当前标签状态 (#832) @MechaGirls
* :bug: fix(progreass): 优化百分比抖动问题 @Drjingfubo
* :bug: fix(uploader): taro env quantity limit (#822) @AsherSun
* :bug: fix(dialog): method onOk unable dom  @richard1015

## v3.1.10

`2021-11-5`

NutUI 非常感谢您对开源事业做出的贡献！🌷🌷🌷
本次社区贡献者 @Licoy、@297cwrun、@novrain、@puppet-666

* :zap: feat: 新增 Searchbar 搜索栏组件 @JackieScorpio
* :zap: feat(tabs): add vertical line & add props color #760 @richard1015
* :zap: feat(inputnumber): events overlimit add click type @richard1015
* :zap: feat(step): add props iconColor @richard1015
* :zap: feat(cellgroup): 支持title使用插槽设置 (#816) @297cwrun
* :zap: feat(price): 前后加符号，可不保留小数点 (#739) #748 @lzzwoniu
* :zap: chore(countup、barrage): 优化重构 (#775) @Ymm0008
* :bug: fix(divider): 在taro下无法正常显示 (#800) @297cwrun
* :bug: fix(tag): del class nut-tag repeat @richard1015
* :bug: fix(tabbar): 文档优化，解决控制台warn #712  @Drjingfubo
* :bug: fix(drag): 优化首次点击跳动问题 (#780) @Drjingfubo
* :bug: fix(address): 内嵌 elevator 滑动问题修复 @szg2008
* :bug: fix(imagepreview): 引入 swiper 报错问题修复 (#792) @JackieScorpio
* :bug: fix(textarea): modelValue 值为null时的length引用错误 (#805) @Licoy
* :zap: style(checkbox、radio): add transition animation @richard1015
* :zap: style(dialog): add border-box & footer__button min-width modify @richard1015
* :zap: chore: fix generate types methods bug  @richard1015
* :zap: docs: 官网优化（Sketch资源下载、FAQ常见问题模块、部分文档文案错误） @richard1015 @Drjingfubo @lzzwoniu @novrain @snandy @puppet-666

## v3.1.8~9

`2021-10-17`

* :zap: feat: 新增 timeselect 配送时间组件 @szg2008
* :zap: feat: 新增 tabs 选项卡组件 @richard1015
* :zap: feat(swipe): add props prevent-default、stop-propagation @richard1015
* :zap: feat(uploader): add props auto-upload 支持手动上传 #688 @richard1015
* :zap: upd(popover): 位置计算逻辑优化 (#710) @liqiong-lab
* :bug: fix(overlay): modify overlay background style @szg2008
* :bug: fix(popup): taro env touchmove content disable @richard1015
* :bug: fix: child component taro export bug #707  @Ymm0008
* :bug: fix(address): 组件红线位置错乱问题 (#732) @yangxiaolu1993
* :bug: fix(address & elevator): remove pinyin dependence & 支持cdn使用 @szg2008
* :zap: upd(elevator): add name props support html #691 @szg2008
* :zap: upd: create 函数添加 ts 类型 (#704) @qqjay2017
* :zap: 官网优化（文章时间分类、贡献者指南、FAQ常见问题模块） @richard1015 @Drjingfubo @lzzwoniu

## v3.1.7

`2021-09-30`

* :zap: feat: 新增 pagination 分页组件 @yushuang-d
* :zap: feat: 新增 tag 标签组件 @liqiong-lab
* :zap: feat: 新增 badge 徽标组件 @liqiong-lab
* :zap: feat: 新增 popover 气泡组件 @liqiong-lab
* :zap: feat: 新增 imagepreview 图片预览组件 @JackieScorpio
* :bug: fix(shortpassword): 修复部分安卓机value值倒序问题、taro环境二次点击无法弹起 #679  @Drjingfubo
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
