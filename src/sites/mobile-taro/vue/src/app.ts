import { createApp } from 'vue';
import './app.scss';
import NutUI from '../../../../packages/nutui.taro.vue';
// import NutUI from '@nutui/nutui';
// import '@nutui/nutui/dist/style.css';
const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
}).use(NutUI);

export default App;
