#  Address 地址

### 介绍

按需加载请加载对应依赖组件 Icon Popup Elevator

### 安装

``` javascript
import { createApp } from 'vue';
//vue
import { Address, Popup, Elevator } from '@nutui/nutui';
//taro
import { Address, Popup, Elevator } from '@nutui/nutui-taro';

const app = createApp();
app.use(Address);
app.use(Popup);
app.use(Elevator);

```

## 代码演示

### 选择自定义地址

:::demo
```html
<template>
<nut-cell title="选择地址" :desc="text" is-link @click="showAddress"></nut-cell>
<nut-address
    v-model:visible="showPopup"
    :province="province"
    :city="city"
    :country="country"
    :town="town"
    @change="onChange"
    @close="close"
    custom-address-title="请选择所在地区"
></nut-address>
</template>
<script>
  import { ref,reactive,toRefs } from 'vue';
  export default {
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
          if (name.length < 1) {
            showPopup.value = false;
          }
        };
        const close = val => {
          console.log(val);
          text.value = val.data.addressStr;
        };

        return { showPopup, text, showAddress, onChange, close, ...toRefs(address) };
    }
  }
</script>

```
:::

### 选择省市区

如果想选中某个省市区，需要在 model-value 中按照 province、city、country、town 的顺序配置想要展示的地区 id 值，并且保证有能查询到对应的省市区数据即可。

:::demo
```html
<template>
<nut-cell title="选择地址" :desc="text" is-link @click="showAddress"></nut-cell>
<nut-address
    v-model="value"
    v-model:visible="showPopup"
    :province="province"
    :city="city"
    :country="country"
    :town="town"
    @change="onChange"
    @close="close"
    custom-address-title="请选择所在地区"
    :columns-placeholder="placeholder"
></nut-address>
</template>
<script>
  import { ref,reactive,toRefs } from 'vue';
  export default {
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

        const text = ref('北京朝阳区八里庄街道')
        const value = ref([1, 7, 3]);

        const showAddress = () => {
          showPopup.value = !showPopup.value;
        };

        const onChange = (cal) => {
          const name = address[cal.next]
          if (name.length < 1) {
            showPopup.value = false;
          }
        };
        const close = val => {
          console.log(val);
          text.value = val.data.addressStr;
          value.value = [val.data.province.id, val.data.city.id, val.data.country.id];
        };

        return { showPopup, text, showAddress, onChange, close, value, ...toRefs(address) };
    }
  }
</script>

```
:::

### 选择自定义地址2

:::demo
```html
<template>
  <nut-cell title="选择地址" :desc="text" type="custom2" is-link @click="showAddress"></nut-cell>
  <nut-address
      v-model:visible="showPopup"
      :province="province"
      :city="city"
      :country="country"
      :town="town"
      @change="onChange"
      @close="close"
      custom-address-title="请选择所在地区"
  ></nut-address>
</template>
<script>
  import { ref,reactive,toRefs } from 'vue';
  export default {
    setup() {
        const showPopup = ref(false);
        const address = reactive({
          province: [
            { id: 1, name: '北京', title: 'B' },
            { id: 2, name: '广西', title: 'G' },
            { id: 3, name: '江西', title: 'J' },
            { id: 4, name: '四川', title: 'S' },
            { id: 5, name: '浙江', title: 'Z' }
          ],
          city: [
            { id: 7, name: '朝阳区', title: 'C' },
            { id: 8, name: '崇文区', title: 'C' },
            { id: 9, name: '昌平区', title: 'C' },
            { id: 6, name: '石景山区', title: 'S' },
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' }
          ],
          country: [
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
            { id: 4, name: '常营乡', title: 'C' }
          ],
          town:[]
        })

        const text = ref('北京朝阳区八里庄街道')

        const showAddress = () => {
          showPopup.value = !showPopup.value;
        };

        const onChange = (cal) => {
          const name = address[cal.next]
          if (name.length < 1) {
            showPopup.value = false;
          }
        };
        const close = val => {
          console.log(val);
          text.value = val.data.addressStr;
        };

        return { showPopup, text, showAddress, onChange, close, ...toRefs(address) };
    }
  }
</script>
```
:::

### 选择已有地址

:::demo
```html
<template>
<nut-cell title="选择地址" :desc="text" is-link @click="showAddressExist"></nut-cell>
<nut-address
    v-model:visible="showPopupExist"
    type="exist"
    :exist-address="existAddress"
    @close="close"
    :is-show-custom-address="false"
    @selected="selected"
    exist-address-title="配送至"
></nut-address>
</template>
<script>
  import { ref,reactive,toRefs } from 'vue';
  export default {
    setup() {
        const showPopupExist = ref(false);
        const existAddress = ref([
          {
            id: 1,
            addressDetail: '',
            cityName: '次渠镇',
            countyName: '通州区',
            provinceName: '北京市',
            selectedAddress: true,
            townName: '',
            name: '探探鱼',
            phone: '182****1718'
          },
          {
            id: 2,
            addressDetail: '',
            cityName: '钓鱼岛全区',
            countyName: '',
            provinceName: '钓鱼岛',
            selectedAddress: false,
            townName: '',
            name: '探探鱼',
            phone: '182****1718'
          },
          {
            id: 3,
            addressDetail: '京东大厦',
            cityName: '大兴区',
            countyName: '科创十一街18号院',
            provinceName: '北京市',
            selectedAddress: false,
            townName: '',
            name: '探探鱼',
            phone: '182****1718'
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
  }
  </script>
```
:::
### 自定义图标
:::demo
```html
<template>
  <nut-cell title="选择地址" :desc="text" is-link @click="showCustomImg"></nut-cell>
  <nut-address
      v-model:visible="showPopupCustomImg"
      type="exist"
      :existAddress="existAddress"
      @close="close"
      :is-show-custom-address="false"
      @selected="selected3"
      :default-icon="defaultIcon"
      :selected-icon="selectedIcon"
      :close-btn-icon="closeBtnIcon"
  >
    <template #bottom>
        <div class="nut-address-custom-buttom">
          <div class="btn">自定义按钮</div>
        </div>
    </template>
  </nut-address>
</template>
<script>
  import { ref,reactive,toRefs } from 'vue';
  export default {
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
            addressDetail: '',
            cityName: '次渠镇',
            countyName: '通州区',
            provinceName: '北京市',
            selectedAddress: true,
            townName: '',
            name: '探探鱼',
            phone: '182****1718'
          },
          {
            id: 2,
            addressDetail: '',
            cityName: '钓鱼岛全区',
            countyName: '',
            provinceName: '钓鱼岛',
            selectedAddress: false,
            townName: '',
            name: '探探鱼',
            phone: '182****1718'
          },
          {
            id: 3,
            addressDetail: '京东大厦',
            cityName: '大兴区',
            countyName: '科创十一街18号院',
            provinceName: '北京市',
            selectedAddress: false,
            townName: '',
            name: '探探鱼',
            phone: '182****1718'
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
  }
</script>
```
:::
### 自定义地址与已有地址切换
:::demo
```html
<template>
  <nut-cell title="选择地址" :desc="text" is-link @click="showAddressOther"></nut-cell>
  <nut-address
      v-model:visible="showPopupOther"
      type="exist"
      :exist-address="existAddress"
      :province="province"
      :city="city"
      :country="country"
      :town="town"
      :back-btn-icon="backBtnIcon"
      @close="close"
      @selected="selected"
      custom-and-exist-title="选择其他地址"
      @switch-module="switchModule"
      @close-mask="closeMask"
  ></nut-address>
</template>
<script>
  import { ref,reactive,toRefs } from 'vue';
  export default {
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
            addressDetail: '',
            cityName: '次渠镇',
            countyName: '通州区',
            provinceName: '北京市',
            selectedAddress: true,
            townName: '',
            name: '探探鱼',
            phone: '182****1718'
          },
          {
            id: 2,
            addressDetail: '',
            cityName: '钓鱼岛全区',
            countyName: '',
            provinceName: '钓鱼岛',
            selectedAddress: false,
            townName: '',
            name: '探探鱼',
            phone: '182****1718'
          },
          {
            id: 3,
            addressDetail: '京东大厦',
            cityName: '大兴区',
            countyName: '科创十一街18号院',
            provinceName: '北京市',
            selectedAddress: false,
            townName: '',
            name: '探探鱼',
            phone: '182****1718'
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

        return { showPopupOther, text, existAddress,showAddressOther, switchModule, closeMask, close, selected, backBtnIcon, ...toRefs(address) };
    }
  }
  </script>
```
:::
# API

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-model:visible | 是否打开地址选择 | String | ''
| type | 地址选择类型 exist/custom/custom2  | String | 'custom'
| province | 省，每个省的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | Array | []
| city | 市，每个市的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | Array | []
| country | 县，每个县的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | Array | []
| town | 乡/镇，每个乡/镇的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | Array | []
| height | 弹层中内容容器的高度，仅在type="custom2"时有效 | String、Number | '200px'
| exist-address | 已存在地址列表，每个地址对象中，必传值provinceName、cityName、countyName、townName、addressDetail、selectedAddress（字段解释见下） | Array | []
| default-icon | 已有地址列表默认图标，type=‘exist’ 时生效 | String | ''
| selected-icon | 已有地址列表选中图标，type=‘exist’ 时生效 | String | ''
| close-btn-icon | 自定义关闭弹框按钮图标 | string | -
| back-btn-icon | 自定义地址与已有地址切换时，自定义返回的按钮图标 | String | -
| is-show-custom-address | 是否可以切换自定义地址选择，type=‘exist’ 时生效 | Boolean | true
| custom-address-title  | 自定义地址选择文案，type='custom' 时生效 | String | '请选择所在地区'
| exist-address-title| 已有地址文案 ，type=‘exist’ 时生效| String | '配送至'
| custom-and-exist-title| 自定义地址与已有地址切换按钮文案 ，type=‘exist’ 时生效| String | '选择其他地址'
| columns-placeholder | 列提示文字 | String|Array | '请选择'
| lock-scroll  | 背景是否锁定      | Boolean        | `true`       


  * provinceName 省的名字
  * cityName 市的名字
  * countyName 县的名字
  * townName 乡/镇的名字
  * addressDetail 具体地址
  * selectedAddress 字段用于判断当前地址列表的选中项。

## Event
| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| change | 自定义选择地址时，选择地区时触发 |  参考 onChange
| selected | 选择已有地址列表时触发 | 参考 selected
| close | 地址选择弹框关闭时触发 | 参考 close
| close-mask |点击遮罩层或点击右上角叉号关闭时触发 | {closeWay:'mask'/'cross'}
| switch-module | 点击‘选择其他地址’或自定义地址选择左上角返回按钮触发 | {type:'exist'/'custom'/'custom2'}


## change 回调参数
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
| type | 地址选择类型 exist/custom/custom2  |  exist/custom/custom2
| data | 选择地址的值,custom 时，addressStr 为选择的地址组合 | {} 

## Slot
| 字段 | 说明 | 
|----- | ----- |  
| bottom `3.1.23` | 可自定义底部 |  