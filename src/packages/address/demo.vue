<template>
  <div class="demo">
    <h2>选择自定义地址</h2>
    <nut-cell
      title="选择地址"
      :desc="one"
      is-link
      @click="showAddress"
    ></nut-cell>

    <nut-address
      v-model:show="showPopup"
      :province="province"
      :city="city"
      :country="country"
      :town="town"
      @on-change="cal => onChange(cal, 'showPopup')"
      @close="close1"
      customAddressTitle="请选择所在地区"
    ></nut-address>

    <h2>选择已有地址</h2>
    <nut-cell
      title="选择地址"
      :desc="two"
      is-link
      @click="showAddressExist"
    ></nut-cell>

    <nut-address
      v-model:show="showPopupExist"
      type="exist"
      :existAddress="existAddress"
      @on-change="cal => onChange(cal, 'showPopupExist')"
      @close="close2"
      :isShowCustomAddress="false"
      @selected="selected"
      existAddressTitle="配送至"
    ></nut-address>

    <h2>自定义图标</h2>
    <nut-cell
      title="选择地址"
      :desc="three"
      is-link
      @click="showCustomImg"
    ></nut-cell>

    <nut-address
      v-model:show="showPopupCustomImg"
      type="exist"
      :existAddress="existAddress"
      @on-change="cal => onChange(cal, 'showPopupCustomImg')"
      @close="close3"
      :isShowCustomAddress="false"
      @selected="selected"
      :defaultIcon="defaultIcon"
      :selectedIcon="selectedIcon"
      :closeBtnIcon="closeBtnIcon"
    ></nut-address>

    <h2>自定义地址与已有地址切换</h2>
    <nut-cell
      title="选择地址"
      :desc="four"
      is-link
      @click="showAddressOther"
    ></nut-cell>

    <nut-address
      v-model:show="showPopupOther"
      type="exist"
      :existAddress="existAddress"
      :province="province"
      :city="city"
      :country="country"
      :town="town"
      :backBtnIcon="backBtnIcon"
      @on-change="cal => onChange(cal, 'showPopupOther')"
      @close="close4"
      @selected="selected"
      customAndExistTitle="选择其他地址"
      @switchModule="switchModule"
      @closeMask="closeMask"
    ></nut-address>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
import { reactive, ref, toRefs } from 'vue';
const { createDemo } = createComponent('address');
export default createDemo({
  props: {},
  setup() {
    const showPopup = ref(false);
    const province = ref([
      { id: 1, name: '北京' },
      { id: 2, name: '广西' },
      { id: 3, name: '江西' },
      { id: 4, name: '四川' }
    ]); // 省

    const city = ref([
      { id: 7, name: '朝阳区' },
      { id: 8, name: '崇文区' },
      { id: 9, name: '昌平区' },
      { id: 6, name: '石景山区' }
    ]); // 市

    const country = ref([
      { id: 3, name: '八里庄街道' },
      { id: 9, name: '北苑' },
      { id: 4, name: '常营乡' }
    ]); // 县

    const town = ref([]); // 镇

    const showPopupExist = ref(false);
    const showPopupCustomImg = ref(false);

    const showPopupOther = ref(false);

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

    const text = reactive({
      one: '请选择地址',
      two: '请选择地址',
      three: '请选择地址',
      four: '请选择地址'
    });

    const showAddress = () => {
      showPopup.value = !showPopup.value;
    };

    const onChange = (cal, tag) => {
      let name = province;
      switch (cal.next) {
        case 'province':
          name = province;
          break;
        case 'city':
          name = city;
          break;
        case 'country':
          name = city;
          break;
        default:
          name = town;
          break;
      }
      if (name.value.length < 1) {
        switch (tag) {
          case 'showPopup':
            showPopup.value = false;
            break;
          case 'showPopupExist':
            showPopupExist.value = false;
            break;
          case 'showPopupCustomImg':
            showPopupCustomImg.value = false;
            break;
          default:
            showPopupOther.value = false;
            break;
        }
      }
    };
    const close1 = val => {
      console.log(val);
      text.one = val.data.addressStr;
    };

    const showAddressExist = () => {
      showPopupExist.value = true;
    };

    const close2 = val => {
      console.log(val);
      if (val.type == 'exist') {
        const {
          provinceName,
          cityName,
          countyName,
          townName,
          addressDetail
        } = val.data;
        text.two =
          provinceName + cityName + countyName + townName + addressDetail;
      } else {
        text.two = val.data.addressStr;
      }
    };
    const selected = (prevExistAdd, nowExistAdd, arr) => {
      console.log(prevExistAdd);
      console.log(nowExistAdd);
    };

    const showAddressOther = () => {
      showPopupOther.value = true;
    };
    const showCustomImg = () => {
      showPopupCustomImg.value = true;
    };

    const close3 = val => {
      console.log(val);
      if (val.type == 'exist') {
        const {
          provinceName,
          cityName,
          countyName,
          townName,
          addressDetail
        } = val.data;
        text.three =
          provinceName + cityName + countyName + townName + addressDetail;
      } else {
        text.three = val.data.addressStr;
      }
    };

    const close4 = val => {
      console.log(val);
      if (val.type == 'exist') {
        const {
          provinceName,
          cityName,
          countyName,
          townName,
          addressDetail
        } = val.data;
        text.four =
          provinceName + cityName + countyName + townName + addressDetail;
      } else {
        text.four = val.data.addressStr;
      }
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

    return {
      showAddress,
      province,
      city,
      country,
      town,
      showPopup,
      onChange,
      close1,
      showAddressExist,
      close2,
      selected,
      showPopupExist,
      showPopupCustomImg,
      showPopupOther,
      existAddress,
      showAddressOther,
      showCustomImg,
      close3,
      close4,
      switchModule,
      closeMask,
      ...toRefs(icon),
      ...toRefs(text)
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
