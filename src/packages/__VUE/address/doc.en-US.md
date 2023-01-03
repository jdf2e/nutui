# Address

### Intro



### Install

``` javascript
import { createApp } from 'vue';
import { Address } from '@nutui/nutui';

const app = createApp();
app.use(Address);
```

### Choose Custom Address

:::demo
```html
<template>
<nut-cell title="Choose Address" :desc="text" is-link @click="showAddress"></nut-cell>
<nut-address
    v-model:visible="showPopup"
    :province="province"
    :city="city"
    :country="country"
    :town="town"
    @change="onChange"
    @close="close"
    custom-address-title="Choose Address"
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

        const text = ref('Choose Address')

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

### Choose City

If you want to select a province, you need to set the region ID in the order of province City country town in the model-value, and ensure that the data of the corresponding province can be queried

:::demo
```html
<template>
<nut-cell title="Choose City" :desc="text" is-link @click="showAddress"></nut-cell>
<nut-address
    v-model="value"
    v-model:visible="showPopup"
    :province="province"
    :city="city"
    :country="country"
    :town="town"
    @change="onChange"
    @close="close"
    custom-address-title="Choose City"
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

        const text = ref('Balizhuang Street, Chaoyang District, Beijing')
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

### Choose Custom Address2

:::demo
```html
<template>
  <nut-cell title="Choose Address" :desc="text" type="custom2" is-link @click="showAddress"></nut-cell>
  <nut-address
      v-model:visible="showPopup"
      :province="province"
      :city="city"
      :country="country"
      :town="town"
      @change="onChange"
      @close="close"
      custom-address-title="Choose Address"
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

        const text = ref('Balizhuang Street, Chaoyang District, Beijing')

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

### Choose Exist Address

:::demo
```html
<template>
<nut-cell title="Choose Address" :desc="text" is-link @click="showAddressExist"></nut-cell>
<nut-address
    v-model:visible="showPopupExist"
    type="exist"
    :exist-address="existAddress"
    @close="close"
    :is-show-custom-address="false"
    @selected="selected"
    exist-address-title="Delivery To"
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

        const text = ref('Choose Address')

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
### Custom Icon
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
  >
    <template #unselectedIcon>
      <Heart1 style="margin-right:8px"></Heart1>
    </template>
    <template #icon>
      <HeartFill style="margin-right:8px" color="#f00"></HeartFill>
    </template>
    <template #bottom>
        <div class="nut-address-custom-buttom">
          <div class="btn">自定义按钮</div>
        </div>
    </template>
  </nut-address>
</template>
<script>
  import { ref,reactive,toRefs } from 'vue';
  import { HeartFill, Heart1} from '@nutui/icons-vue';
  export default {
    components:{HeartFill, Heart1 },
    setup() {
        const showPopupCustomImg = ref(false);
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

        const text = ref('Choose Address')

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
### Custom Or Exist
:::demo
```html
<template>
  <nut-cell title="Choose Address" :desc="text" is-link @click="showAddressOther"></nut-cell>
  <nut-address
      v-model:visible="showPopupOther"
      type="exist"
      :exist-address="existAddress"
      :province="province"
      :city="city"
      :country="country"
      :town="town"
      @close="close"
      @selected="selected"
      custom-and-exist-title="Choose Other Address"
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
        const text = ref('Choose Address')

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

| Attribute            | Description               | Type   | Default  |
|----- | ----- | ----- | ----- |
| v-model:visible | Whether to open address | string | `''`|
| type | Choose type: exist/custom/custom2  | string | `custom`|
| province | Province data| array | `[]`|
| city | City data | array | `[]`|
| country | Country data | array | `[]`|
| town | Town dta | array | `[]`|
| height | Popup height | string \| number | `200px`|
| exist-address | Exist address list data | array | `[]`|
| is-show-custom-address | Whether to change custom address | boolean | `true`|
| custom-address-title  | Custom address title | string | `Select Region`|
| exist-address-title|  Exist address title | string | `Delivery To`|
| custom-and-exist-title| Custom address and existing address switch button copywriting | string | `Choose Another Address`|
| columns-placeholder | Columns placeholder text | string \| array | `Select`|
| lock-scroll   | Whether the background is locked   | boolean        | `true`       |


## Event
| Attribute            | Description               | Arguments   |
|----- | ----- | ----- |
| change |  Emitted when to selected custom address |  reference onChange |
| selected |  Emitted when to selected exist address  | reference selected |
| close |  Emitted when to close  | reference close |
| close-mask | Emitted when to close mask | {closeWay:'mask'/'cross'} |
| switch-module | Click to select another address or custom address to select the upper left corner of the return button  triggered | {type:'exist'/'custom'/'custom2'} |


## change 
| Attribute            | Description               | Options   |
|----- | ----- | ----- |
| custom | The administrative region currently clicked  |  province / city / country / town|
| next | The next level of the administrative region currently clicked | province / city / country / town|
| value | The value of the currently clicked administrative region | {}|

## selected 
| Attribute            | Description               | Options   |
|----- | ----- | ----- |
| First Option（prevExistAdd） |  Select the previously selected address |  `{}`|
| Second Option（nowExistAdd） |  Currently selected address |  `{}`|
| Third Option（arr） |  After selecting the existing address list |  `{}`|

## close 
| Attribute            | Description               | Options   |
|----- | ----- | ----- |
| type | Selected Type  |  exist/custom/custom2|
| data | Selected Data | `{}` |


## Slot
| Attribute | Description | 
|----- | ----- |  
| bottom | Bottom slot |  
| icon | Selected icon slot |  
| unselectedIcon | Unselected icon slot |  
| closeIcon | Close icon slot |  
| backIcon | Change icon slot |  
    
## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | 
| --------------------------------------- | -------------------------- |
|  --nut-address-region-tab-line| _linear-gradient(90deg, var(--nut-primary-color) 0%, var(--nut-active-color) 100%)_| 
|  --nut-address-icon-color| _var(--nut-primary-color)_     | 
|  --nut-address-header-title-font-size   | _18px_          | 
|  --nut-address-header-title-color| _#262626_    | 
|  --nut-address-region-tab-font-size| _13px_  | 
|  --nut-address-region-tab-color| _#1d1e1e_  | 
|  --nut-address-region-tab-active-item-font-weight| _bold_    | 
|  --nut-address-region-tab-line-border-radius| _0_   | 
|  --nut-address-region-tab-line-opacity| _1_   | 
|  --nut-address-region-item-color| _#333_    | 
|  --nut-address-region-item-font-size| _var(--nut-font-size-1)_   | 
|  --nut-address-item-margin-right| _9px_  | 