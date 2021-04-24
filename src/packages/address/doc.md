#  Address组件

### 介绍

按需加载请加载对应依赖组件 Icon Popup

### 安装

``` javascript
import { createApp } from 'vue';
import { Address, Icon, Popup } from '@nutui/nutui';

const app = createApp();
app.use(Address);
app.use(Icon);
app.use(Popup);

```

## 代码演示

### 选择自定义地址

```html
<nut-cell title="选择地址" :desc="text" is-link @click="showAddress"></nut-cell>
<nut-address
    v-model:visible="showPopup"
    :province="province"
    :city="city"
    :country="country"
    :town="town"
    @change="onChange"
    @close="close"
    customAddressTitle="请选择所在地区"
></nut-address>
```
```javascript
setup() {
    const showPopup = ref(false);
    const address = reactive({
      province:[
        { id: 1, name: '北京' },
        { id: 2, name: '广西' },
        { id: 3, name: '江西' },
        { id: 4, name: '四川' }
      ],
      city:[
        { id: 7, name: '朝阳区' },
        { id: 8, name: '崇文区' },
        { id: 9, name: '昌平区' },
        { id: 6, name: '石景山区' }
      ],
      country:[
        { id: 3, name: '八里庄街道' },
        { id: 9, name: '北苑' },
        { id: 4, name: '常营乡' }
      ],
      town:[]
    })

    const text = ref('请选择地址')

    const showAddress = () => {
      showPopup.value = !showPopup.value;
    };

    const onChange = (cal) => {
      const name = address[cal.next]
      if (name.value.length < 1) {
        showPopup.value = false;
      }
    };
    const close = val => {
      console.log(val);
      text.value = val.data.addressStr;
    };

    return { showPopup, text, showAddress, onChange, close, ...toRefs(address) };
}
```

### 选择已有地址

```html
<nut-cell title="选择地址" :desc="text" is-link @click="showAddressExist"></nut-cell>
<nut-address
    v-model:visible="showPopupExist"
    type="exist"
    :existAddress="existAddress"
    @close="close"
    :isShowCustomAddress="false"
    @selected="selected"
    existAddressTitle="配送至"
></nut-address>
```
```javascript
setup() {
    const showPopupExist = ref(false);
    const existAddress = ref([
      {
        id: 1,
        addressDetail: 'th ',
        cityName: '石景山区',
        countyName: '城区',
        provinceName: '北京',
        selectedAddress: true,
        townName: ''
      },{
        id: 2,
        addressDetail: '12_ ',
        cityName: '电饭锅',
        countyName: '扶绥县',
        provinceName: '北京',
        selectedAddress: false,
        townName: ''
      },{
        id: 3,
        addressDetail: '发大水比 ',
        cityName: '放到',
        countyName: '广宁街道',
        provinceName: '钓鱼岛全区',
        selectedAddress: false,
        townName: ''
      },{
        id: 4,
        addressDetail: '还是想吧百度吧 ',
        cityName: '研发',
        countyName: '八里庄街道',
        provinceName: '北京',
        selectedAddress: false,
        townName: ''
      }
    ]);

    const text = ref('请选择地址')

    const showAddressExist = () => {
      showPopupExist.value = true;
    };

    const close = val => {
      if (val.type == 'exist') {
        const {provinceName,cityName,countyName,townName,addressDetail} = val.data
        text.value = provinceName + cityName + countyName + townName + addressDetail;
      } else {
        text.value = val.data.addressStr;
      }
    };

    const selected = (prevExistAdd, nowExistAdd, arr) => {
      console.log(prevExistAdd);
      console.log(nowExistAdd);
    };

    return { showPopupExist, existAddress, showAddressExist, text, close, selected };
}
```
### 自定义图标

```html
<nut-cell title="选择地址" :desc="text" is-link @click="showCustomImg"></nut-cell>
<nut-address
    v-model:visible="showPopupCustomImg"
    type="exist"
    :existAddress="existAddress"
    @close="close"
    :isShowCustomAddress="false"
    @selected="selected3"
    :defaultIcon="defaultIcon"
    :selectedIcon="selectedIcon"
    :closeBtnIcon="closeBtnIcon"
></nut-address>
```
```javascript
setup() {
    const showPopupCustomImg = ref(false);
    const icon = reactive({
      selectedIcon: 'heart-fill',
      defaultIcon: 'heart1',
      closeBtnIcon: 'close',
      backBtnIcon: 'left'
    });
    const existAddress = ref([
      {
        id: 1,
        addressDetail: 'th ',
        cityName: '石景山区',
        countyName: '城区',
        provinceName: '北京',
        selectedAddress: true,
        townName: ''
      },{
        id: 2,
        addressDetail: '12_ ',
        cityName: '电饭锅',
        countyName: '扶绥县',
        provinceName: '北京',
        selectedAddress: false,
        townName: ''
      },{
        id: 3,
        addressDetail: '发大水比 ',
        cityName: '放到',
        countyName: '广宁街道',
        provinceName: '钓鱼岛全区',
        selectedAddress: false,
        townName: ''
      },{
        id: 4,
        addressDetail: '还是想吧百度吧 ',
        cityName: '研发',
        countyName: '八里庄街道',
        provinceName: '北京',
        selectedAddress: false,
        townName: ''
      }
    ]);

    const text = ref('请选择地址')

    const showCustomImg = () => {
      showPopupCustomImg.value = true;
    };

    const close = val => {
      if (val.type == 'exist') {
        const {provinceName,cityName,countyName,townName,addressDetail} = val.data
        text.value = provinceName + cityName + countyName + townName + addressDetail;
      } else {
        text.value = val.data.addressStr;
      }
    };

    const selected = (prevExistAdd, nowExistAdd, arr) => {
      console.log(prevExistAdd);
      console.log(nowExistAdd);
    };

    return { showPopupCustomImg, existAddress, text, showCustomImg, close, selected, ...toRefs(icon) };
}
```
### 自定义地址与已有地址切换

```html
<nut-cell title="选择地址" :desc="text" is-link @click="showAddressOther"></nut-cell>
<nut-address
    v-model:visible="showPopupOther"
    type="exist"
    :existAddress="existAddress"
    :province="province"
    :city="city"
    :country="country"
    :town="town"
    :backBtnIcon="backBtnIcon"
    @close="close"
    @selected="selected"
    customAndExistTitle="选择其他地址"
    @switchModule="switchModule"
    @closeMask="closeMask"
></nut-address>
```
```javascript
setup() {
    const showPopupOther = ref(false);
    const address = reactive({
      province:[
        { id: 1, name: '北京' },
        { id: 2, name: '广西' },
        { id: 3, name: '江西' },
        { id: 4, name: '四川' }
      ],
      city:[
        { id: 7, name: '朝阳区' },
        { id: 8, name: '崇文区' },
        { id: 9, name: '昌平区' },
        { id: 6, name: '石景山区' }
      ],
      country:[
        { id: 3, name: '八里庄街道' },
        { id: 9, name: '北苑' },
        { id: 4, name: '常营乡' }
      ],
      town:[]
    })
    const existAddress = ref([
      {
        id: 1,
        addressDetail: 'th ',
        cityName: '石景山区',
        countyName: '城区',
        provinceName: '北京',
        selectedAddress: true,
        townName: ''
      },
      {
        id: 2,
        addressDetail: '12_ ',
        cityName: '电饭锅',
        countyName: '扶绥县',
        provinceName: '北京',
        selectedAddress: false,
        townName: ''
      },
      {
        id: 3,
        addressDetail: '发大水比 ',
        cityName: '放到',
        countyName: '广宁街道',
        provinceName: '钓鱼岛全区',
        selectedAddress: false,
        townName: ''
      },
      {
        id: 4,
        addressDetail: '还是想吧百度吧 ',
        cityName: '研发',
        countyName: '八里庄街道',
        provinceName: '北京',
        selectedAddress: false,
        townName: ''
      }
    ]);
    const backBtnIcon = ref('left')
    const text = ref('请选择地址')

    const showAddressOther = () => {
      showPopupOther.value = true;
    };

    const close = val => {
      if (val.type == 'exist') {
        const {provinceName,cityName,countyName,townName,addressDetail} = val.data
        text.value = provinceName + cityName + countyName + townName + addressDetail;
      } else {
        text.value = val.data.addressStr;
      }
    };

    const selected = (prevExistAdd, nowExistAdd, arr) => {
      console.log(prevExistAdd);
      console.log(nowExistAdd);
    };

    const switchModule = cal => {
      if (cal.type == 'custom') {
        console.log('点击了“选择其他地址”按钮');
      } else {
        console.log('点击了自定义地址左上角的返回按钮');
      }
    };

    const closeMask = val => {
      console.log('关闭弹层', val);
    };

    return { showPopupOther, text, showAddressOther, switchModule, closeMask, close, selected, backBtnIcon, ...toRefs(address) };
}
```
# API

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model:visible | 是否打开地址选择 | String | ''
| type | 地址选择类型 exist/custom | String | 'custom'
| province | 省，每个省的对象中，必须有 name 字段 | Array | []
| city | 市，每个市的对象中，必须有 name 字段 | Array | []
| country | 县，每个县的对象中，必须有 name 字段 | Array | []
| town | 乡/镇，每个乡/镇的对象中，必须有 name 字段 | Array | []
| exist-address | 已存在地址列表，每个地址对象中，必传值provinceName、cityName、countyName、townName、addressDetail、selectedAddress（字段解释见下） | Array | []
| default-icon | 已有地址列表默认图标，type=‘exist’ 时生效 | string | ''
| selected-icon | 已有地址列表选中图标，type=‘exist’ 时生效 | string | ''
| close-btn-icon | 自定义关闭弹框按钮图标 | string | -
| back-btn-icon | 自定义地址与已有地址切换时，自定义返回的按钮图标 | string | -
| is-show-custom-address | 是否可以切换自定义地址选择，type=‘exist’ 时生效 | Boolean | true
| custom-address-title  | 自定义地址选择文案，type='custom' 时生效 | string | '请选择所在地区'
| exist-address-title| 已有地址文案 ，type=‘exist’ 时生效| string | '配送至'
| custom-and-exist-title| 自定义地址与已有地址切换按钮文案 ，type=‘exist’ 时生效| string | '选择其他地址'


  * provinceName 省的名字
  * cityName 市的名字
  * countyName 县的名字
  * townName 乡/镇的名字
  * addressDetail 具体地址
  * selectedAddress 字段用于判断当前地址列表的选中项。

## Event
| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| on-change | 自定义选择地址时，选择地区时触发 |  参考 onChange
| selected | 选择已有地址列表时触发 | 参考 selected
| close | 地址选择弹框关闭时触发 | 参考 close
| close-mask |点击遮罩层或点击右上角叉号关闭时触发 | {closeWay:'mask'/'cross'}
| switch-module | 点击‘选择其他地址’或自定义地址选择左上角返回按钮触发 | {type:'exist'/'custom'}


## onChange 回调参数
| 参数 | 说明 | 可能值 
|----- | ----- | ----- 
| custom | 当前点击的行政区域  |  province(省) / city(市) / country(县) / town(乡)
| next | 当前点击的行政区域的下一级 | province(省) / city(市) / country(县) / town(乡)
| value | 当前点击的行政区域的值（返回传入的值） | {}

## selected 回调参数
| 参数 | 说明 | 可能值 
|----- | ----- | ----- 
| 第一个参数（prevExistAdd） |  选择前选中的地址 |  {}
| 第二个参数（nowExistAdd） |  当前选中的地址 |  {}
| 第三个参数（arr） |  选择完之后的已有地址列表（selectedAddress 值发生改变） |  {}

## close 回调参数
| 参数 | 说明 | 可能值 
|----- | ----- | ----- 
| type | 地址选择类型 exist/custom  |  exist/custom
| data | 选择地址的值,custom 时，addressStr 为选择的地址组合 | {} 
    