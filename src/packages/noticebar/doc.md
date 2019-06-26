# NoticeBar 通告栏

## 基本用法

```html
    <nut-noticebar
      text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
    ></nut-noticebar>
```
## 禁用滚动
文字内容多于一行时，可通过scrollable参数控制是否开启滚动
```html
    <nut-noticebar
      text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
      :scrollable="false"
    ></nut-noticebar>
```
## 通告栏模式--关闭模式
```html
    <nut-noticebar
      :closeMode="true"
      @click="hello"
    >华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！
    </nut-noticebar>
```
## 通告栏模式--链接模式
```html
    <nut-noticebar
      left-icon="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
    >
      <a href="https://www.jd.com">京东商城</a>
    </nut-noticebar>
```



## Prop

| 字段       | 说明                                                       | 类型          | 默认值 |
| ---------- | ---------------------------------------------------------- | ------------- | ------ |
| text       | 提示的信息                                                 | String        | 空     |
| closeMode  | 是否启用关闭模式                                           | Boolean       | false  |
| leftIcon   | close为没有左边icon,其他为自定义的图片链接，没有为默认图片 | String        | 空     |
| color      | 导航栏的文字颜色                                           | String        | 空     |
| background | 导航栏的背景颜色                                           | String        | 空     |
| delay      | 延时多少秒                                                 | String/Number | 1      |
| scrollable | 是否可以滚动                                               | Boolean       | true   |
| speed      | 移动375px需要用的时间                                      | Number        | 6      |

## Event

| 字段  | 说明             | 回调参数 |
| ----- | ---------------- | -------- |
| click | 外层点击事件回调 | 无       |