<template>
  <div class="demo">
    <h2>{{ translate('customAddress') }}</h2>
    <nut-cell :title="translate('title')" :desc="one" is-link @click="showAddress"></nut-cell>

    <nut-address
      v-model:visible="normal"
      :province="province"
      :city="city"
      :country="country"
      :town="town"
      @change="(cal) => onChange(cal, 'normal')"
      @close="close1"
    ></nut-address>

    <h2>{{ translate('selectCity') }}</h2>
    <nut-cell :title="translate('title')" :desc="six" is-link @click="showSelected"></nut-cell>

    <nut-address
      v-model="value"
      v-model:visible="select"
      :province="province"
      :city="city"
      :country="country"
      :town="town"
      @change="(cal) => onChange(cal, 'select')"
      @close="close6"
      :columns-placeholder="placeholder"
    ></nut-address>

    <h2>{{ translate('customAddress2') }}</h2>
    <nut-cell :title="translate('title')" :desc="five" is-link @click="showAddress2"></nut-cell>

    <nut-address
      v-model="value2"
      v-model:visible="normal2"
      type="custom2"
      :province="province"
      :city="city"
      :country="country"
      :town="town"
      height="270px"
      @change="(cal) => onChange(cal, 'normal2')"
      @close="close5"
      :columns-placeholder="placeholder"
    ></nut-address>

    <h2>{{ translate('existAddress') }}</h2>
    <nut-cell :title="translate('title')" :desc="two" is-link @click="showAddressExist"></nut-cell>

    <nut-address
      v-model:visible="exist"
      type="exist"
      :exist-address="existAddress"
      @change="(cal) => onChange(cal, 'exist')"
      @close="close2"
      :is-show-custom-address="false"
      @selected="selected"
    ></nut-address>

    <h2>{{ translate('icon') }}</h2>
    <nut-cell :title="translate('title')" :desc="three" is-link @click="showCustomImg"></nut-cell>

    <nut-address
      v-model:visible="customImg"
      type="exist"
      :exist-address="existAddress"
      @change="(cal) => onChange(cal, 'customImg')"
      @close="close3"
      :is-show-custom-address="false"
      @selected="selected"
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

    <h2>{{ translate('change') }}</h2>
    <nut-cell :title="translate('title')" :desc="four" is-link @click="showAddressOther"></nut-cell>

    <nut-address
      v-model:visible="other"
      type="exist"
      :exist-address="existAddress"
      :province="province"
      :city="city"
      :country="country"
      :town="town"
      :back-btn-icon="backBtnIcon"
      @change="(cal) => onChange(cal, 'other')"
      @close="close4"
      @selected="selected"
      @switch-module="switchModule"
      @close-mask="closeMask"
    ></nut-address>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { onMounted, reactive, ref, toRefs } from 'vue';
import { useTranslate } from '@/sites/assets/util/useTranslate';
const { createDemo, translate } = createComponent('address');

const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      title: '选择地址',
      customAddress: '选择自定义地址',
      selectCity: '选中省市区',
      customAddress2: '选择自定义地址2',
      existAddress: '选择已有地址',
      icon: '自定义图标',
      change: '自定义地址与已有地址切换',
      textAddress: '北京朝阳区八里庄街道'
    },
    'en-US': {
      basic: 'Basic Usage',
      title: 'Choose Address',
      customAddress: 'Choose Custom Address',
      selectCity: 'Choose City',
      customAddress2: 'Choose Custom Address2',
      existAddress: 'Choose Exist Address',
      icon: 'Custom Icon',
      change: 'Custom Or Exist',
      textAddress: 'Balizhuang Street, Chaoyang District, Beijing'
    }
  });

interface CalBack {
  next: string;
  value: string;
  custom: string;
}
interface RegionData {
  name: string;
  [key: string]: any;
}
interface CalResult {
  type: string;
  data: AddressResult;
}
interface AddressList {
  id?: string | number;
  provinceName: string;
  cityName: string;
  countyName: string;
  townName: string;
  addressDetail: string;
  selectedAddress: boolean;
}
interface AddressResult extends AddressList {
  addressIdStr: string;
  addressStr: string;
  province: RegionData[];
  city: RegionData[];
  country: RegionData[];
  town: RegionData[];
}
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const address = reactive({
      province: [],
      city: [
        { id: 7, name: '朝阳区', title: 'C' },
        { id: 8, name: '崇文区', title: 'C' },
        { id: 9, name: '昌平区', title: 'C' },
        { id: 6, name: '石景山区', title: 'S' },
        { id: 3, name: '八里庄街道', title: 'B' },
        { id: 10, name: '北苑', title: 'B' }
      ],
      country: [
        { id: 3, name: '八里庄街道', title: 'B' },
        { id: 9, name: '北苑', title: 'B' },
        { id: 4, name: '常营乡', title: 'C' }
      ],
      town: []
    });

    onMounted(() => {
      setTimeout(() => {
        address.province = [
          { id: 1, name: '北京', title: 'B' },
          { id: 2, name: '广西', title: 'G' },
          { id: 3, name: '江西', title: 'J' },
          { id: 4, name: '四川', title: 'S' },
          { id: 5, name: '浙江', title: 'Z' }
        ];
      }, 1000);
    });

    const placeholder = ref(['请选择省', '请选择市', '请选择县']);
    const value = ref([1, 7, 3]);
    const value2 = ref([1, 7, 3]);

    const showPopup = reactive({
      normal: false,
      normal2: false,
      exist: false,
      customImg: false,
      other: false,
      select: false
    });

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
        cityName: '钓鱼岛',
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

    const text = reactive({
      one: translate('title'),
      two: translate('title'),
      three: translate('title'),
      four: translate('title'),
      five: translate('textAddress'),
      six: translate('textAddress')
    });

    const showAddress = () => {
      showPopup.normal = !showPopup.normal;
    };

    const showAddress2 = () => {
      showPopup.normal2 = !showPopup.normal2;
    };

    const showSelected = () => {
      showPopup.select = !showPopup.select;
    };

    const onChange = (cal: CalBack, tag: string) => {
      console.log('地址选择', cal);
      const name = (address as any)[cal.next];
      if (name.length < 1) {
        (showPopup as any)[tag] = false;
      }
    };
    const close1 = (val: CalResult) => {
      console.log(val);
      text.one = val.data.addressStr;
    };

    const close5 = (val: CalResult) => {
      text.five = val.data.addressStr;
      value2.value = [val.data.province.id, val.data.city.id, val.data.country.id];
    };

    const close6 = (val: CalResult) => {
      text.six = val.data.addressStr;
      value.value = [val.data.province.id, val.data.city.id, val.data.country.id];
    };

    const showAddressExist = () => {
      showPopup.exist = true;
    };

    const close2 = (val: CalResult) => {
      console.log(val);
      if (val.type == 'exist') {
        const { provinceName, cityName, countyName, townName, addressDetail } = val.data;
        text.two = provinceName + cityName + countyName + townName + addressDetail;
      } else {
        text.two = val.data.addressStr;
      }
    };
    const selected = (prevExistAdd: AddressList, nowExistAdd: RegionData, arr: AddressList[]) => {
      console.log(prevExistAdd);
      console.log(nowExistAdd);
    };

    const showAddressOther = () => {
      showPopup.other = true;
    };
    const showCustomImg = () => {
      showPopup.customImg = true;
    };

    const close3 = (val: CalResult) => {
      console.log(val);
      if (val.type == 'exist') {
        const { provinceName, cityName, countyName, townName, addressDetail } = val.data;
        text.three = provinceName + cityName + countyName + townName + addressDetail;
      } else {
        text.three = val.data.addressStr;
      }
    };

    const close4 = (val: CalResult) => {
      console.log(val);
      if (val.type == 'exist') {
        const { provinceName, cityName, countyName, townName, addressDetail } = val.data;
        text.four = provinceName + cityName + countyName + townName + addressDetail;
      } else {
        text.four = val.data.addressStr;
      }
    };

    const switchModule = (val: CalResult) => {
      if (val.type == 'custom') {
        console.log('点击了“选择其他地址”按钮');
      } else {
        console.log('点击了自定义地址左上角的返回按钮');
      }
    };

    const closeMask = (val: CalResult) => {
      console.log('关闭弹层', val);
    };

    return {
      value,
      value2,
      showAddress,
      showAddress2,
      showPopup,
      onChange,
      close1,
      showAddressExist,
      close2,
      close5,
      close6,
      selected,
      showSelected,
      existAddress,
      showAddressOther,
      showCustomImg,
      close3,
      close4,
      switchModule,
      closeMask,
      placeholder,
      translate,
      ...toRefs(icon),
      ...toRefs(text),
      ...toRefs(showPopup),
      ...toRefs(address)
    };
  }
});
</script>

<style lang="scss" scoped>
.demo {
  .nut-cell {
    align-items: center;

    .nut-cell__value {
      margin-right: 8px;
    }
  }
}
</style>
