# Notify 消息提示

## 基本用法

文字提示
```javascript
export default {
  mounted() {
      this.$notify.text('通知内容', {
        onClosed() {
          console.log('close');
        },
        onClick: () => {
          console.log('click');
        },
        onOpened: () => {
          console.log('opened');
        }
      });
  }
}
```
## 通知类型
### 主要通知
```javascript
    mounted(){
      this.$notify.primary('通知内容');
    }
```
### 成功通知
```javascript
    mounted(){
      this.$notify.success('通知内容');
    }
```
### 危险通知
```javascript
    mounted(){
      this.$notify.danger('通知内容');
    }
```
### 警告通知
```javascript
    mounted(){
      this.$notify.warn('通知内容');
    }
```
## 自定义样式
### 自定义样式
```javascript
    mounted(){
      this.$notify.text(val, {
        color: '#ad0000',
        background: '#ffe1e1'
      });
    }
```
### 自定义时长
```javascript
    mounted(){
      this.$notify.text(val, {
        duration: 10000
      });
    }
```
## 组件调用
```html
    <nut-notify :showPopup="show" type="success" msg="组件调用">
      <span>hello</span>
    </nut-notify>
```

```javascript
    mounted(){
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2000);
    }
```
## 修改默认配置
通过**Notify.setDefaultOptions**函数可以全局修改 Notify 的默认配置，**值得注意的是，标签形式的组件不支持默认样式**。
```javascript
// 更改所有Toast展示时长设置为5000毫秒
      this.$notify.setDefaultOptions({
        duration: 5000
      });
// 重置所有 Toast 的默认配置
      this.$notify.resetDefaultOptions();
```



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
| Notify.setDefaultOptions   | 修改默认配置，对所有 Notify 生效 | options | void    |
| Notify.resetDefaultOptions | 重置默认配置，对所有 Notify 生效 | String  | void    |