# Cell 列表项

列表项，可组成列表。

## 基础样式

**to**有值的时候，跳转路由，**click-cell**点击cell触发事件

```html
<div class="cell-box">
  <nut-cell title="列表内容A" to="/index"></nut-cell>
  <nut-cell title="列表内容B" @click-cell="clickEvnt"></nut-cell>
  <nut-cell title="列表内容C" @click-cell="clickEvnt"></nut-cell>
</div>
```

带箭头的样式

```html
<div class="cell-box">
  <nut-cell title="列表内容A" :is-link="true" link-url="//m.jd.com" :show-icon="true" target="_target"> </nut-cell>
  <nut-cell title="列表内容B" :is-link="true" link-url="//m.jd.com" :show-icon="true" target="_target"></nut-cell>
  <nut-cell title="列表内容C" :is-link="true" link-url="//m.jd.com" :show-icon="true" target="_target"></nut-cell>
</div>
```

带解释说明的样式
```html
<div class="cell-box">
  <nut-cell :is-link="true">
      <span slot="title">列表标题</span>
      <span slot="sub-title">这里是对标题的解释说明</span>
  </nut-cell>
</div>
```

可以通过设置slot，设置cell的具体内容，比如以下的菜单列表，注意使用了 icon 组件

```html
<div class="cell-box">
  <nut-cell :show-icon="true" title="我的主页" @click-cell="clickEvnt">
    <div slot="avatar"><nut-icon type="self" color="#9D49F8FF" size="18px" :url="require('../../assets/svg/avatar.svg')">></nut-icon></div>
  </nut-cell>
  <nut-cell :show-icon="true" title="店铺定位" desc="查看店铺" @click-cell="clickEvnt">
      <div slot="avatar"><nut-icon type="self" color="#FF6E4CFF" size="18px" :url="require('../../assets/svg/nav.svg')">></nut-icon></div>
  </nut-cell>
  <nut-cell :show-icon="true" title="我的收藏" @click-cell="clickEvnt">
    <div slot="avatar"><nut-icon type="self" color="#FFBA12FF" size="18px" :url="require('../../assets/svg/star.svg')">></nut-icon></div>
  </nut-cell>
  <nut-cell :show-icon="true" title="设置" desc="版本升级" @click-cell="clickEvnt">
      <div slot="avatar"><nut-icon type="self" color="#1EA3FFFF" size="18px" :url="require('../../assets/svg/set.svg')">></nut-icon></div>
  </nut-cell>
</div>
```
可以通过设置slot，设置cell的更为丰富的内容，比如以下的消息列表，注意使用了 badge、avatar 组件

```html
<div class="cell-box">
  <nut-cell title="噜啦噜" sub-title="我又来送福利啦！关注之后你就会">
    <div slot="avatar"><nut-avatar sizeNum="60" :bg-image="require('../../assets/img/cell-avatar.jpeg')" bg-icon></nut-avatar></div>
    <div slot="desc">
      <p class="timer">10:12</p>
      <p class="badge"><nut-badge  :value="9" :max="99" top="0px" right="15px"></nut-badge></p>
    </div>
  </nut-cell>
  <nut-cell title="噜啦噜" sub-title="我又来送福利啦！关注之后你就会">
    <div slot="avatar"><nut-avatar sizeNum="60" :bg-image="require('../../assets/img/cell-avatar.jpeg')" bg-icon></nut-avatar></div>
    <div slot="desc">
      <p class="timer">1小时前</p>
      <p class="badge"><nut-badge  :is-dot="true" :max="99" top="0px" right="5px"></nut-badge></p>
    </div>
  </nut-cell>
  <nut-cell title="噜啦噜" sub-title="我又来送福利啦！关注之后你就会">
    <div slot="avatar"><nut-avatar sizeNum="60" :bg-image="require('../../assets/img/cell-avatar.jpeg')" bg-icon></nut-avatar></div>
    <div slot="desc">
      <p class="timer">星期五</p>
      <p class="badge"><nut-badge  :value="100" :max="99" top="0px" right="25px"></nut-badge></p>
    </div>
  </nut-cell>
</div>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| title | 左侧标题 | String | -
| is-link | 是否是链接 | Boolean | false
| link-url | 链接Url | String | -
| show-icon | 是否展示右侧箭头Icon | Boolean | false
| bg-color | 背景颜色 | String | "#FFFFFF"
| to      |路由路径| String |-|
| target |同`<a>`中target属性|String|_self|

## slot

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| title | 有主副标题时，左侧主标题 | -- | -
| sub-title | 左侧副标题 | -- | -
| desc | 右侧部分内容 | -- | -
| avatar | 左侧图片 | -- | -

## Event
|字段|说明|回调参数|
|--|--|--|
|click-cell|点击cell区域触发事件回调函数|无|