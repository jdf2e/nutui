import { createApp } from 'vue';
import './app.scss';
import NUTUI from './../../../../packages/nutui.taro.vue';

const App = createApp({
  onShow() {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
}).use(NUTUI);

export default App;
