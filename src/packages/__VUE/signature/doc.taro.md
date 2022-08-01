#  Signature 签名

### 介绍
    
    基于Canvas的签名组件。
    
### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { Signature} from '@nutui/nutui';

const app = createApp();
app.use(Signature);

```
    
    
## 代码演示
 
### 修改颜色和签字粗细

```html
<div class="demo">
    <nut-signature
      :lineWidth="lineWidth"
      :strokeStyle="strokeStyle"
      @confirm="confirm"
      @clear="clear"
    />
  </div>
setup() {
    const state = reactive({
      lineWidth: 4,
      strokeStyle: 'green',
      testimg: ''
    });
    const clear = () => {
      console.log('清除事件');
    };
    const confirm = (data: any) => {
      console.log('图片地址', data);
      Taro.saveImageToPhotosAlbum({
        filePath: `${data}`,
        success(res) {
          Taro.showToast({
            title: '保存成功'
          });
        },
        fail(err) {
          Taro.showToast({
            title: '保存失败'
          });
        }
      });
    };
    return { ...state, confirm, clear };
  }
```
    
## API
    
### Props
    
| 参数 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| custom-class | 自定义class | String | -
| line-width | 线条的宽度 | Number | 3
| stroke-style | 绘图笔触颜色 | String | '#000'
| type | 图片格式 | String | 'png'
| un-support-tpl | 不支持Canvas情况下的展示文案 | String | '对不起，当前浏览器不支持Canvas，无法使用本控件！'

## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| start `v3.2.0`| 签名开始回调函数（指某次笔画的开始） | 无
| signing `v3.2.0`| 正在签名的回调函数（指某次笔画进行中） | event
| end `v3.2.0`| 签名结束回调函数（指某次笔画的结束）| 无
| confirm | 点击确认按钮触发事件回调函数 | data URI
| clear | 点击重签按钮触发事件回调函数 | 无