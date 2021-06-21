#  Notify 消息通知

### 介绍
    
在页面顶部展示消息提示
    
### 安装
``` javascript
import { createApp } from 'vue';
import { Notify } from '@nutui/nutui';

const app = createApp();
app.use(Notify);
```    
## 基本用法

```javascript
export default {
  mounted() {
      Notify.text('通知内容', {
        onClosed() {
          console.log('close');
        },
        onClick: () => {
          console.log('click');
        }
      });
  }
}
```
## 通知类型
### 主要通知
```javascript
    mounted(){
      Notify.primary('通知内容');
    }
```
### 成功通知
```javascript
    mounted(){
      Notify.success('通知内容');
    }
```
### 危险通知
```javascript
    mounted(){
      Notify.danger('通知内容');
    }
```
### 警告通知
```javascript
    mounted(){
      Notify.warn('通知内容');
    }
```
## 自定义
### 自定义样式
```javascript
    mounted(){
      Notify.text(val, {
        color: '#ad0000',
        background: '#ffe1e1'
      });
    }
```
### 自定义时长
```javascript
    mounted(){
      Notify.text(val, {
        duration: 10000
      });
    }
```
    
## API
    
### Props
    
| 字段       | 说明                                                  | 类型          | 默认值   |
|------------|-------------------------------------------------------|---------------|----------|
| type       | 提示的信息类型（primary，success  ，danger，warning） | String        | 'danger' |
| message    | 展示文案，支持通过\n换行                              | Boolean       | false    |
| duration   | 展示时长(ms)，值为 0 时，notify 不会消失              | String        | 3000     |
| color      | 字体颜色                                              | String        | 空       |
| background | 背景颜色                                              | String        | 空       |
| class-name | 自定义类名                                            | String/Number | 1        |

### Events

| 事件名 | 说明         | 回调参数 |
|--------|--------------|----------|
| click  | 点击事件回调 | 无       |
| closed | 关闭事件回调 | 无       |
    