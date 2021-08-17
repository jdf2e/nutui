<template>
  <view class="demo">
    <h2>选择自定义地址</h2>
    <nut-cell
      title="选择地址"
      :desc="one"
      is-link
      @click="showAddress"
    ></nut-cell>

    <nut-address
      v-model:visible="normal"
      :province="province"
      :city="city"
      :country="country"
      :town="town"
      @change="(cal) => onChange(cal, 'normal')"
      @close="close1"
      custom-address-title="请选择所在地区"
    ></nut-address>

    <h2>选择已有地址</h2>
    <nut-cell
      title="选择地址"
      :desc="two"
      is-link
      @click="showAddressExist"
    ></nut-cell>

    <nut-address
      v-model:visible="exist"
      type="exist"
      :exist-address="existAddress"
      @change="(cal) => onChange(cal, 'exist')"
      @close="close2"
      :is-show-custom-address="false"
      @selected="selected"
      exist-address-title="配送至"
    ></nut-address>

    <h2>自定义图标</h2>
    <nut-cell
      title="选择地址"
      :desc="three"
      is-link
      @click="showCustomImg"
    ></nut-cell>

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
    ></nut-address>

    <h2>自定义地址与已有地址切换</h2>
    <nut-cell
      title="选择地址"
      :desc="four"
      is-link
      @click="showAddressOther"
    ></nut-cell>

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
      custom-and-exist-title="选择其他地址"
      @switch-module="switchModule"
      @close-mask="closeMask"
    ></nut-address>
  </view>
</template>

<script lang="ts">
import { reactive, ref, toRefs } from 'vue';

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
export default {
  props: {},
  setup() {
    const address = reactive({
      province: [
        { id: 10, name: '安徽' },
        { id: 1, name: '北京' },
        { id: 2, name: '广西' },
        { id: 3, name: '江西' },
        { id: 4, name: '四川' },
        { id: 5, name: '浙江' }
      ],
      city: [
        { id: 7, name: '朝阳区' },
        { id: 8, name: '崇文区' },
        { id: 9, name: '昌平区' },
        { id: 6, name: '石景山区' },
        { id: 3, name: '八里庄街道' },
        { id: 9, name: '北苑' }
      ],
      country: [
        { id: 3, name: '八里庄街道' },
        { id: 9, name: '北苑' },
        { id: 4, name: '常营乡' }
      ],
      town: []
    });

    const showPopup = reactive({
      normal: false,
      exist: false,
      customImg: false,
      other: false
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

    const text = reactive({
      one: '请选择地址',
      two: '请选择地址',
      three: '请选择地址',
      four: '请选择地址'
    });

    const showAddress = () => {
      showPopup.normal = !showPopup.normal;
    };

    const onChange = (cal: CalBack, tag: string) => {
      const name = (address as any)[cal.next];
      if (name.length < 1) {
        (showPopup as any)[tag] = false;
      }
    };
    const close1 = (val: CalResult) => {
      console.log(val);
      text.one = val.data.addressStr;
    };

    const showAddressExist = () => {
      showPopup.exist = true;
    };

    const close2 = (val: CalResult) => {
      console.log(val);
      if (val.type == 'exist') {
        const { provinceName, cityName, countyName, townName, addressDetail } =
          val.data;
        text.two =
          provinceName + cityName + countyName + townName + addressDetail;
      } else {
        text.two = val.data.addressStr;
      }
    };
    const selected = (
      prevExistAdd: AddressList,
      nowExistAdd: RegionData,
      arr: AddressList[]
    ) => {
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
        const { provinceName, cityName, countyName, townName, addressDetail } =
          val.data;
        text.three =
          provinceName + cityName + countyName + townName + addressDetail;
      } else {
        text.three = val.data.addressStr;
      }
    };

    const close4 = (val: CalResult) => {
      console.log(val);
      if (val.type == 'exist') {
        const { provinceName, cityName, countyName, townName, addressDetail } =
          val.data;
        text.four =
          provinceName + cityName + countyName + townName + addressDetail;
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
      showAddress,
      showPopup,
      onChange,
      close1,
      showAddressExist,
      close2,
      selected,
      existAddress,
      showAddressOther,
      showCustomImg,
      close3,
      close4,
      switchModule,
      closeMask,
      ...toRefs(icon),
      ...toRefs(text),
      ...toRefs(showPopup),
      ...toRefs(address)
    };
  }
};
</script>
