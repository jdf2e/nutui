# Notify 消息提示

## 基本用法

```html
    <nut-noticebar
      text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
    ></nut-noticebar>
```
## 通知类型
文字内容多于一行时，可通过scrollable参数控制是否开启滚动
```html
    <nut-noticebar
      text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
      :scrollable="false"
    ></nut-noticebar>
```
## 自定义样式




## Prop

| 字段       | 说明                                     | 类型          | 默认值 |
| ---------- | ---------------------------------------- | ------------- | ------ |
| type       | 提示的信息                               | String        | 空     |
| message    | 展示文案，支持通过\n换行                 | Boolean       | false  |
| duration   | 展示时长(ms)，值为 0 时，notify 不会消失 | String        | 空     |
| color      | 字体颜色                                 | String        | 空     |
| background | 背景颜色                                 | String        | 空     |
| className  | 自定义类名                               | String/Number | 1      |

## Event

| 字段     | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| onClick  | 点击事件回调       | 无       |
| onOpened | 完全展示后事件回调 | 无       |
| onClose  | 关闭事件回调       | 无       |


## Function

| 方法名                     | 说明                             | 参数    | 返回值  |
| -------------------------- | -------------------------------- | ------- | ------- |
| Notify                     | 提示的信息                       | options | message | notify 实例 |
| Notify.clear               | 关闭提示                         | -       | void    |
| Notify.setDefaultOptions   | 修改默认配置，对所有 Notify 生效 | options | void    |
| Notify.resetDefaultOptions | 重置默认配置，对所有 Notify 生效 | String  | void    |