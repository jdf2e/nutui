import Button from '/src/packages/button/index.vue';
import Collapse from '/src/packages/collapse/index.vue';
import Layout from '/src/packages/layout/index.vue';
import BackTop from '/src/packages/backtop/index.vue';
import ActionSheet from '/src/packages/actionsheet/index.vue';
import Toast from '/src/packages/toast/index.vue';
import Notify from '/src/packages/notify/index.vue';
import Picker from '/src/packages/picker/index.vue';
import Cell from '/src/packages/cell/index.vue';
import Uploader from '/src/packages/uploader/index.vue';
import Icon from '/src/packages/icon/index.vue';
import Price from '/src/packages/price/index.vue';
import Checkbox from '/src/packages/checkbox/index.vue';
import Swiper from '/src/packages/swiper/index.vue';
import Avatar from '/src/packages/avatar/index.vue';
import Popup from '/src/packages/popup/index.vue';
import Dialog from '/src/packages/dialog/index.vue';
import Radio from '/src/packages/radio/index.vue';
import OverLay from '/src/packages/overlay/index.vue';
import InfiniteLoading from '/src/packages/infiniteloading/index.vue';
import Range from '/src/packages/range/index.vue';
import PullRefresh from '/src/packages/pullrefresh/index.vue';
import Navbar from '/src/packages/navbar/index.vue';
import Tab from '/src/packages/tab/index.vue';
import Menu from '/src/packages/menu/index.vue';
import Tabbar from '/src/packages/tabbar/index.vue';
import InputNumber from '/src/packages/inputnumber/index.vue';
import Input from '/src/packages/input/index.vue';
import Switch from '/src/packages/switch/index.vue';
import Rate from '/src/packages/rate/index.vue';
import Calendar from '/src/packages/calendar/index.vue';
import ShortPassword from '/src/packages/shortpassword/index.vue';
import Address from '/src/packages/address/index.vue';

function install(app: any) {
  const packages = [
    Button,
    Collapse,
    Layout,
    BackTop,
    ActionSheet,
    Toast,
    Notify,
    Picker,
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
    PullRefresh,
    Navbar,
    Tab,
    Menu,
    Tabbar,
    InputNumber,
    Input,
    Switch,
    Rate,
    Calendar,
    ShortPassword,
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
  PullRefresh,
  Navbar,
  Tab,
  Menu,
  Tabbar,
  InputNumber,
  Input,
  Switch,
  Rate,
  Calendar,
  ShortPassword,
  Address
};
export default { install, version: '3.0.0-beta.3' };
