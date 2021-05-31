import { App } from 'vue';
import Button from './__VUE/button/index.taro.vue';
// import Collapse from './__VUE/collapse/index.taro.vue';
// import Layout from './__VUE/layout/index.taro.vue';
// import BackTop from './__VUE/backtop/index.taro.vue';
// import ActionSheet from './__VUE/actionsheet/index.taro.vue';
// import Toast from './__VUE/toast/index';
// import Notify from './__VUE/notify/index.taro.vue';
// import Picker from './__VUE/picker/index.taro.vue';
// import DatePicker from './__VUE/datepicker/index.taro.vue';
// import Cell from './__VUE/cell/index.taro.vue';
// import Uploader from './__VUE/uploader/index.taro.vue';
// import Icon from './__VUE/icon/index.taro.vue';
// import Price from './__VUE/price/index.taro.vue';
// import Checkbox from './__VUE/checkbox/index.taro.vue';
// import Swiper from './__VUE/swiper/index.taro.vue';
// import Avatar from './__VUE/avatar/index.taro.vue';
// import Popup from './__VUE/popup/index.taro.vue';
// import Dialog from './__VUE/dialog/index';
// import Radio from './__VUE/radio/index.taro.vue';
// import OverLay from './__VUE/overlay/index.taro.vue';
// import InfiniteLoading from './__VUE/infiniteloading/index.taro.vue';
// import Range from './__VUE/range/index.taro.vue';
// import Drag from './__VUE/drag/index.taro.vue';
// import Steps from './__VUE/steps/index.taro.vue';
// import Navbar from './__VUE/navbar/index.taro.vue';
// import Tabbar from './__VUE/tabbar/index.taro.vue';
// import InputNumber from './__VUE/inputnumber/index.taro.vue';
// import Input from './__VUE/input/index.taro.vue';
// import Switch from './__VUE/switch/index.taro.vue';
// import Rate from './__VUE/rate/index.taro.vue';
// import Calendar from './__VUE/calendar/index.taro.vue';
// import ShortPassword from './__VUE/shortpassword/index.taro.vue';
// import TextArea from './__VUE/textarea/index.taro.vue';
// import Address from './__VUE/address/index.taro.vue';

function install(app: App) {
  const packages = [Button];
  packages.forEach((item: any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}
export { Button };
export default { install, version: '3.0.0-beta.16' };
