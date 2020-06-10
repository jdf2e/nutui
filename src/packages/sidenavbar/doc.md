# SideNavBar 侧边栏导航

侧边栏导航

## 基础用法

```html
<nut-popup position="right" v-model="show3" :style="{ width, height }">
    <nut-sidenavbar>
        <nut-subsidenavbar title="菜单内容一" ikey="1" :open="false"></nut-subsidenavbar>
        <nut-subsidenavbar title="菜单内容二" ikey="2"></nut-subsidenavbar>
        <nut-subsidenavbar title="菜单内容三" ikey="3">
            <div slot="desc" class="desc">这里是对菜单的解释说明</div>
        </nut-subsidenavbar>
        <nut-subsidenavbar title="菜单内容四" ikey="4">
            <div slot="desc" class="desc">这里是对菜单的解释说明</div>
            <a href="javascript:;" slot="oper" class="oper">操作</a>
        </nut-subsidenavbar>
    </nut-sidenavbar>
</nut-popup>
```

## 展示icon

```html
<nut-popup position="right" v-model="show4" :style="{ width, height }">
    <nut-sidenavbar>
        <nut-subsidenavbar title="菜单内容一" ikey="1" :open="false">
            <nut-icon slot="icon" color="#6933ff" type="avatar"></nut-icon>
        </nut-subsidenavbar>
        <nut-subsidenavbar title="菜单内容二" ikey="2">
            <nut-icon slot="icon" type="nav" color="#ff613e"></nut-icon>
        </nut-subsidenavbar>
        <nut-subsidenavbar title="菜单内容三" ikey="3">
            <nut-icon slot="icon" type="star" color="#ffb600"></nut-icon>
            <div slot="desc" class="desc">这里是对菜单的解释说明</div>
        </nut-subsidenavbar>
        <nut-subsidenavbar title="菜单内容四" ikey="4">
            <nut-icon slot="icon" type="set" color="#2770f9"></nut-icon>
            <div slot="desc" class="desc">这里是对菜单的解释说明</div>
            <a href="javascript:;" slot="oper" class="oper">操作</a>
        </nut-subsidenavbar>
    </nut-sidenavbar>
</nut-popup>
```

## 多级
```html
<nut-popup position="right" v-model="show1" :style="{ width, height }">
    <nut-sidenavbar :show="show1">
        <nut-subsidenavbar title="图像理解" ikey="3" :open="false">
        <nut-sidenavbaritem ikey="4" title="菜品识别"></nut-sidenavbaritem>
        <nut-sidenavbaritem ikey="5" title="拍照购"></nut-sidenavbaritem>
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
        show4: false,
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
        this.show4 = false
    },
    showNav3() {
        this.show1 = false
        this.show3 = true
        this.show4 = false
    },
    showNav4() {
        this.show1 = false
        this.show3 = false
        this.show4 = true
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
| title-click | 导航点击 | 无

## SideNavBarItem
| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| title | 导航标题 | String | ''
| ikey | 导航唯一标识 | String/Number | ''

## SideNavBarItem Event
| 字段 | 说明 | 回调参数
| ----- | ----- | -----
| click | 导航点击 | 无