# Tab 选项卡

常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式。


## 基础样式

```html
<nut-tab>
  <nut-tab-panel tab-title="全部"><p class="content">这里是页签全部内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="待付款"><p class="content">这里是页签待付款内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="待收获"><p class="content">这里是页签待收获内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="已完成"><p class="content">这里是页签已完成内容</p></nut-tab-panel>
</nut-tab>
```

## 默认显示tab：
defaultIndex设置默认显示tab
switchTab监听切换tab返回事件

```html
<nut-tab  :defaultIndex="1" @switchTab="switchTab">
  <nut-tab-panel tab-title="全部"><p class="content">这里是页签全部内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="待付款"><p class="content">这里是页签待付款内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="待收获"><p class="content">这里是页签待收获内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="已完成"><p class="content">这里是页签已完成内容</p></nut-tab-panel>
</nut-tab>
<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('tab');
export default createDemo({
  setup() {
    function switchTab(activeInddex:number,event:MouseEvent){
      console.log(activeInddex,event);
    }
    return {
      switchTab
    };
  }
});
</script>
```

## animatedTime 开启切换标签内容时的转场动画时间
```html
<nut-tab :animatedTime="500">
  <nut-tab-panel tab-title="全部"><p class="content">这里是页签全部内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="待付款"><p class="content">这里是页签待付款内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="待收获"><p class="content">这里是页签待收获内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="已完成"><p class="content">这里是页签已完成内容</p></nut-tab-panel>
</nut-tab>
```

## 标签数量超过 5 个时，标签栏可以在水平方向上滚动
切换时会自动将当前标签居中。

```html
<nut-tab :animatedTime="500">
  <nut-tab-panel tab-title="全部"><p class="content">这里是页签全部内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="待付款"><p class="content">这里是页签待付款内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="待收获"><p class="content">这里是页签待收获内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="已完成"><p class="content">这里是页签已完成内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="已取消"><p class="content">这里是页签已取消内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="待评价"><p class="content">这里是页签待评价内容</p></nut-tab-panel>
</nut-tab>
```

## 设置slot:header可以自定义标签
```html
<nut-tab>
  <nut-tab-panel tab-title="全部">
    <template v-slot:header><nut-icon name="dongdong"></nut-icon></template>
    <p class="content">这里是页签全部内容</p>
  </nut-tab-panel>
  <nut-tab-panel tab-title="待付款"><p class="content">这里是页签待付款内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="待收获"><p class="content">这里是页签待收获内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="已完成"><p class="content">这里是页签已完成内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="已取消"><p class="content">这里是页签已取消内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="待评价"><p class="content">这里是页签待评价内容</p></nut-tab-panel>
</nut-tab>
```
## 左右tab布局
```html
<nut-tab direction="vertical" :animatedTime="500" :defaultIndex="2">
  <nut-tab-panel tab-title="页签一"><p class="content">这里是页签一内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="页签二"><p class="content">这里是页签二内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="页签三"><p class="content">这里是页签三内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="页签四"><p class="content">这里是页签四内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="页签五"><p class="content">这里是页签五内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="页签六"><p class="content">这里是页签六内容</p></nut-tab-panel>
  <nut-tab-panel tab-title="页签七"><p class="content">这里是页签七内容</p></nut-tab-panel>
</nut-tab>
```
## 异步操作

```html
<nut-tab :animatedTime="500" v-if="editList.length>0">
    <nut-tab-panel :tab-title="item.title" v-for="(item,index) in editList" :key="index">
      <p class="content">这里是页签{{index}}内容</p>
    </nut-tab-panel>
</nut-tab>
<nut-button type="primary" @click="changeList">改变数据</nut-button>
</div>
<script lang="ts">
import { ref , reactive,toRefs } from "vue";
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('tab');
export default createDemo({
  setup() {
    const resData = reactive({
      editList:[
        {
          title:'标签一'
        },
        {
          title:'标签二'
        }
      ]
    });
    function changeList(){
      resData.editList.push({
        title:'标签'+resData.editList.length
      })
    }
    return {
      ...toRefs(resData),
      changeList
    };
  }
});
</script>
```


### Prop

### nut-tab

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| direction | 页签栏的分布，可选值 horizontal/vertical | String | horizontal
| default-index | 默认选中的页签栏 | Number | 0
| animated-time | 开启切换标签内容时的转场动画时间 | Number | 0



### nut-tab-panel

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| tab-title| 页签的标题 | String | ''
| slot:header | 页签title的自定义slot | vnode | --

### Event

| 事件名称 | 说明 | 回调参数 
|----- | ----- | ----- 
| switch-tab | 切换页签时触发事件 | 点击的索引值和触发元素

