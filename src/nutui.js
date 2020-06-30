import { version } from '../package.json';
import { packages as pkgList } from './config.json';
import { locale } from './locales';
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
import Picker from './packages/picker/index.js';
import './packages/picker/picker.scss';
import Col from './packages/col/index.js';
import './packages/col/col.scss';
import Row from './packages/row/index.js';
import './packages/row/row.scss';
import Steps from './packages/steps/index.js';
import './packages/steps/steps.scss';
import Button from './packages/button/index.js';
import './packages/button/button.scss';
import Rate from './packages/rate/index.js';
import './packages/rate/rate.scss';
import Stepper from './packages/stepper/index.js';
import './packages/stepper/stepper.scss';
import SearchBar from './packages/searchbar/index.js';
import './packages/searchbar/searchbar.scss';
import Radio from './packages/radio/index.js';
import './packages/radio/radio.scss';
import RadioGroup from './packages/radiogroup/index.js';
import './packages/radiogroup/radiogroup.scss';
import CheckBox from './packages/checkbox/index.js';
import './packages/checkbox/checkbox.scss';
import Skeleton from './packages/skeleton/index.js';
import './packages/skeleton/skeleton.scss';
import Uploader from './packages/uploader/index.js';
import './packages/uploader/uploader.scss';
import Avatar from './packages/avatar/index.js';
import './packages/avatar/avatar.scss';
import Popup from './packages/popup/index.js';
import LeftSlip from './packages/leftslip/index.js';
import './packages/leftslip/leftslip.scss';
import TabSelect from './packages/tabselect/index.js';
import './packages/tabselect/tabselect.scss';
import './packages/popup/popup.scss';
import SideNavBar from './packages/sidenavbar/index.js';
import './packages/sidenavbar/sidenavbar.scss';
import SubSideNavBar from './packages/subsidenavbar/index.js';
import './packages/subsidenavbar/subsidenavbar.scss';
import SideNavBarItem from './packages/sidenavbaritem/index.js';
import './packages/sidenavbaritem/sidenavbaritem.scss';
import Address from './packages/address/index.js';
import './packages/address/address.scss';
import Tag from './packages/tag/index.js';
import './packages/tag/tag.scss';
import Swiper from './packages/swiper/index.js';
import './packages/swiper/swiper.scss';
import ImagePreview from './packages/imagepreview/index.js';
import './packages/imagepreview/imagepreview.scss';
import Badge from './packages/badge/index.js';
import './packages/badge/badge.scss';
import Field from "./packages/field/index.js";
import "./packages/field/field.scss";
import Card from "./packages/card/index.js";
import "./packages/card/card.scss";

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
    Range,
    Picker,
    Col,
    Row,
    Steps,
    Button,
    Rate,
    Stepper,
    SearchBar,
    Radio,
    RadioGroup,
    CheckBox,
    Skeleton,
    Uploader,
    Avatar,
    Popup,
    LeftSlip,
    TabSelect: TabSelect,
    SideNavBar: SideNavBar,
    SubSideNavBar: SubSideNavBar,
    SideNavBarItem: SideNavBarItem,
    Address: Address,
    Tag,
    Swiper,
    ImagePreview,
    Badge,
    Field: Field,
    Card
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
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version,
    locale,
    install,
    ...components,
    ...filters,
    ...directives,
    ...methods
};