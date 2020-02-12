import {version} from '../package.json';
import {packages as pkgList} from './config.json';
import {locale} from './locales';
import Cell from './packages/cell/index.js';
import './packages/cell/cell.scss';
import Dialog from './packages/dialog/index.js';
import './packages/dialog/dialog.scss';
import Icon from './packages/icon/index.js';
import './packages/icon/icon.scss';
import Toast from './packages/toast/index.js';
import './packages/toast/toast.scss';
import ActionSheet from './packages/actionsheet/index.js';
import './packages/actionsheet/actionsheet.scss';
import Tab from './packages/tab/index.js';
import './packages/tab/tab.scss';
import TabPanel from './packages/tabpanel/index.js';
import './packages/tabpanel/tabpanel.scss';
import TabBar from './packages/tabbar/index.js';
import './packages/tabbar/tabbar.scss';
import Calendar from './packages/calendar/index.js';
import './packages/calendar/calendar.scss';
import DatePicker from './packages/datepicker/index.js';
import './packages/datepicker/datepicker.scss';
import NavBar from './packages/navbar/index.js';
import './packages/navbar/navbar.scss';
import NoticeBar from './packages/noticebar/index.js';
import './packages/noticebar/noticebar.scss';
import Switch from './packages/switch/index.js';
import './packages/switch/switch.scss';
import Slider from './packages/slider/index.js';
import './packages/slider/slider.scss';
import Range from './packages/range/index.js';
import './packages/range/range.scss';
import Picker from './packages/picker/index.js';
import './packages/picker/picker.scss';
import Progress from './packages/progress/index.js';
import './packages/progress/progress.scss';
import Price from './packages/price/index.js';
import './packages/price/price.scss';
import Flex from './packages/flex/index.js';
import './packages/flex/flex.scss';
import Col from './packages/col/index.js';
import './packages/col/col.scss';
import Row from './packages/row/index.js';
import './packages/row/row.scss';
import Steps from './packages/steps/index.js';
import './packages/steps/steps.scss';
import Button from './packages/button/index.js';
import './packages/button/button.scss';
import Badge from './packages/badge/index.js';
import './packages/badge/badge.scss';
import Rate from './packages/rate/index.js';
import './packages/rate/rate.scss';
import Swiper from './packages/swiper/index.js';
import './packages/swiper/swiper.scss';
import Menu from './packages/menu/index.js';
import './packages/menu/menu.scss';
import Stepper from './packages/stepper/index.js';
import './packages/stepper/stepper.scss';
import ButtonGroup from './packages/buttongroup/index.js';
import './packages/buttongroup/buttongroup.scss';
import SearchBar from './packages/searchbar/index.js';
import './packages/searchbar/searchbar.scss';
import ImagePicker from './packages/imagepicker/index.js';
import './packages/imagepicker/imagepicker.scss';
import Radio from './packages/radio/index.js';
import './packages/radio/radio.scss';
import RadioGroup from './packages/radiogroup/index.js';
import './packages/radiogroup/radiogroup.scss';
import CheckBox from './packages/checkbox/index.js';
import './packages/checkbox/checkbox.scss';
import CheckBoxGroup from './packages/checkboxgroup/index.js';
import './packages/checkboxgroup/checkboxgroup.scss';
import ShortPassword from './packages/shortpassword/index.js';
import './packages/shortpassword/shortpassword.scss';
import Skeleton from './packages/skeleton/index.js';
import './packages/skeleton/skeleton.scss';
import Scroller from './packages/scroller/index.js';
import './packages/scroller/scroller.scss';
import BackTop from './packages/backtop/index.js';
import './packages/backtop/backtop.scss';
import CountDown from './packages/countdown/index.js';
import './packages/countdown/countdown.scss';
import InfiniteLoading from './packages/infiniteloading/index.js';
import './packages/infiniteloading/infiniteloading.scss';
import Uploader from './packages/uploader/index.js';
import './packages/uploader/uploader.scss';
import TextInput from './packages/textinput/index.js';
import './packages/textinput/textinput.scss';
import Avatar from './packages/avatar/index.js';
import './packages/avatar/avatar.scss';
import Lazyload from './packages/lazyload/index.js';
import './packages/textbox/textbox.scss';
import TextBox from './packages/textbox/index.js';
import Elevator from './packages/elevator/index.js';
import './packages/elevator/elevator.scss';
import Popup from './packages/popup/index.js';
import LeftSlip from './packages/leftslip/index.js';
import './packages/leftslip/leftslip.scss';
import TabSelect from "./packages/tabselect/index.js";
import "./packages/tabselect/tabselect.scss";

import './packages/popup/popup.scss';
const packages = {
    Cell,
    Dialog,
    Icon,
    Toast,
    ActionSheet,
    Tab,
    TabPanel,
    TabBar,
    Calendar,
    DatePicker,
    NavBar,
    NoticeBar,
    Switch,
    Slider,
    Range,
    Picker,
    Progress,
    Price,
    Flex,
    Col,
    Row,
    Steps,
    Button,
    Badge,
    Rate,
    Swiper,
    Menu,
    Stepper,
    ButtonGroup,
    SearchBar,
    ImagePicker,
    Radio,
    RadioGroup,
    CheckBox,
    CheckBoxGroup,
    ShortPassword,
    Skeleton,
    Scroller,
    BackTop,
    CountDown,
    InfiniteLoading,
    Uploader,
    TextInput,
    TextBox,
    Avatar,
    Elevator,
    Popup,
    LeftSlip,
    TabSelect: TabSelect
};

const components = {};
const methods = {};
const filters = {};
const directives = {};
pkgList.map(item => {
    const pkg = packages[item.name];
    if (!pkg) return;

    if (item.type == 'component') {
        if (pkg.name) {
            components[pkg.name] = pkg;
        } else {
            for (let n in pkg) {
                components[n] = pkg[n];
            }
        }
    } else if (item.type == 'method') {
        methods[item.name] = pkg;
    } else if (item.type == 'filter') {
        filters[item.name] = pkg;
    } else if (item.type == 'directive') {
        directives[item.name] = pkg;
    }
});

const install = function(Vue, opts = {}) {
    if (install.installed) return;

    if (opts.locale) {
        Vue.config.lang = opts.locale;
    }

    if (opts.lang) locale(Vue.config.lang, opts.lang);

    for (let cptName in methods) {
        if (Array.isArray(methods[cptName])) {
            Vue.prototype['$' + cptName.toLowerCase()] = methods[cptName][0];
            Vue.component(methods[cptName][1].name, methods[cptName][1]);
        } else {
            Vue.prototype['$' + cptName.toLowerCase()] = methods[cptName];
        }
    }

    for (let cptName in components) {
        if (components[cptName] && components[cptName].name) {
            Vue.component(components[cptName].name, components[cptName]);
        }
    }

    for (let cptName in filters) {
        if (filters[cptName] && filters[cptName].name) {
            Vue.filter(cptName, filters[cptName]);
        }
    }

    for (let cptName in directives) {
        if (directives[cptName] && directives[cptName].name) {
            Vue.directive(directives[cptName].name, directives[cptName]);
        }
    }

    Vue.use(Lazyload, {
        lazyComponent: true,
        loading: '//img12.360buyimg.com/imagetools/jfs/t1/73967/28/14561/916/5dc142e4E0666555b/bf33454553c6035e.png'
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version,
    locale,
    install,
    Lazyload,
    ...components,
    ...filters,
    ...directives,
    ...methods
};