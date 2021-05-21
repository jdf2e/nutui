import { App } from 'vue';
import Button from './__VUE/button/index.vue';
import Collapse from './__VUE/collapse/index.vue';
import Layout from './__VUE/layout/index.vue';
import BackTop from './__VUE/backtop/index.vue';
import ActionSheet from './__VUE/actionsheet/index.vue';
import Toast from './__VUE/toast/index';
import Notify from './__VUE/notify/index.vue';
import Picker from './__VUE/picker/index.vue';
import DatePicker from './__VUE/datepicker/index.vue';
import Cell from './__VUE/cell/index.vue';
import Uploader from './__VUE/uploader/index.vue';
import Icon from './__VUE/icon/index.vue';
import Price from './__VUE/price/index.vue';
import Checkbox from './__VUE/checkbox/index.vue';
import Swiper from './__VUE/swiper/index.vue';
import Avatar from './__VUE/avatar/index.vue';
import Popup from './__VUE/popup/index.vue';
import Dialog from './__VUE/dialog/index';
import Radio from './__VUE/radio/index.vue';
import OverLay from './__VUE/overlay/index.vue';
import InfiniteLoading from './__VUE/infiniteloading/index.vue';
import Range from './__VUE/range/index.vue';
import Drag from './__VUE/drag/index.vue';
import Video from './__VUE/video/index.vue';
import Steps from './__VUE/steps/index.vue';
import Navbar from './__VUE/navbar/index.vue';
import Tabbar from './__VUE/tabbar/index.vue';
import InputNumber from './__VUE/inputnumber/index.vue';
import Input from './__VUE/input/index.vue';
import Switch from './__VUE/switch/index.vue';
import Rate from './__VUE/rate/index.vue';
import Calendar from './__VUE/calendar/index.vue';
import ShortPassword from './__VUE/shortpassword/index.vue';
import TextArea from './__VUE/textarea/index.vue';
import Address from './__VUE/address/index.vue';

function install(app: App) {
  const packages = [
    Button,
    Collapse,
    Layout,
    BackTop,
    ActionSheet,
    Toast,
    Notify,
    Picker,
    DatePicker,
    Cell,
    Uploader,
    Icon,
    Price,
    Checkbox,
    Swiper,
    Avatar,
    Popup,
    Dialog,
    Radio,
    OverLay,
    InfiniteLoading,
    Range,
    Drag,
    Video,
    Steps,
    Navbar,
    Tabbar,
    InputNumber,
    Input,
    Switch,
    Rate,
    Calendar,
    ShortPassword,
    TextArea,
    Address
  ];
  packages.forEach((item: any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}
export {
  Button,
  Collapse,
  Layout,
  BackTop,
  ActionSheet,
  Toast,
  Notify,
  Picker,
  DatePicker,
  Cell,
  Uploader,
  Icon,
  Price,
  Checkbox,
  Swiper,
  Avatar,
  Popup,
  Dialog,
  Radio,
  OverLay,
  InfiniteLoading,
  Range,
  Drag,
  Video,
  Steps,
  Navbar,
  Tabbar,
  InputNumber,
  Input,
  Switch,
  Rate,
  Calendar,
  ShortPassword,
  TextArea,
  Address
};
export default { install, version: '3.0.0-beta.16' };
