# SideNavBar 侧边栏导航

侧边栏导航

## 基础用法

```html
<nut-popup
    position="right"
    v-model="show1"
    :style="{ width, height }"
>
    <nut-sidenavbar :show="show1">
        <nut-subsidenavbar title="智能城市AI" ikey="6">
            <nut-subsidenavbar title="人体识别1" ikey="9">
                <nut-sidenavbaritem ikey="10" title="人体检测1"></nut-sidenavbaritem>
                <nut-sidenavbaritem ikey="11" title="细粒度人像分割1"></nut-sidenavbaritem>
            </nut-subsidenavbar>
            <nut-subsidenavbar title="人体识别2" ikey="12">
                <nut-sidenavbaritem ikey="13" title="人体检测2"></nut-sidenavbaritem>
                <nut-sidenavbaritem ikey="14" title="细粒度人像分割2"></nut-sidenavbaritem>
            </nut-subsidenavbar>
        </nut-subsidenavbar>
    </nut-sidenavbar>
</nut-popup>
```

## 嵌套（建议最多三层）
```html
<nut-popup
    position="right"
    v-model="show3"
    :style="{ width, height }"
>
    <nut-sidenavbar :show="show3">
        <nut-sidenavbaritem ikey="1" title="人脸识别" @click="handleClick('人脸识别')"></nut-sidenavbaritem>
        <nut-sidenavbaritem ikey="2" title="云存自然语言处理"></nut-sidenavbaritem>
        <nut-subsidenavbar title="图像理解" ikey="3" :open="false">
            <nut-sidenavbaritem ikey="4" title="菜品识别"></nut-sidenavbaritem>
            <nut-sidenavbaritem ikey="5" title="拍照购"></nut-sidenavbaritem>
        </nut-subsidenavbar>
        <nut-subsidenavbar title="智能城市AI" ikey="6">
            <nut-sidenavbaritem ikey="7" title="企业风险预警模型"></nut-sidenavbaritem>
            <nut-sidenavbaritem ikey="8" title="水质量检测"></nut-sidenavbaritem>
            <nut-subsidenavbar title="人体识别" ikey="9">
                <nut-sidenavbaritem ikey="10" title="人体检测"></nut-sidenavbaritem>
                <nut-sidenavbaritem ikey="11" title="细粒度人像分割"></nut-sidenavbaritem>
            </nut-subsidenavbar>
        </nut-subsidenavbar>
        <nut-subsidenavbar title="自然语言处理" ikey="12">
            <nut-sidenavbaritem ikey="13" title="词法分析"></nut-sidenavbaritem>
            <nut-sidenavbaritem ikey="14" title="句法分析"></nut-sidenavbaritem>
        </nut-subsidenavbar>
    </nut-sidenavbar>
</nut-popup>
```

```javascript
import { Popup } from '@nutui/nutui'
export default {
  data() {
    return {
        show1: false,
        show3: false,
        width: '80%',
        height: '100%'
    };
  },
  components: {
      'nut-popup': Popup
  },
  methods: {
    showNav() {
        this.show1 = true
        this.show3 = false
    },
    showNav3() {
        this.show1 = false
        this.show3 = true
    },
    handleClick(str) {
        alert(str)
    }
  }
};
```

## SideNavBar

| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| offset | 导航缩进宽度 | Number/String | 15

## SubSideNavBar
| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| title | 导航标题 | String | ''
| ikey | 导航唯一标识 | String/Number | ''
| open | 导航是否默认展开 | Boolean | true

## SubSideNavBar Event
| 字段 | 说明 | 回调参数
| ----- | ----- | -----
| titleClick | 导航点击 | 无

## SideNavBarItem
| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| title | 导航标题 | String | ''
| ikey | 导航唯一标识 | String/Number | ''

## SideNavBarItem Event
| 字段 | 说明 | 回调参数
| ----- | ----- | -----
| click | 导航点击 | 无