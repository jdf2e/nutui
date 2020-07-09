<template>
  <div class="address-box demo-list">
    <h4>选择自定义地址</h4>
    <div class="address-list init" @click="showAddress">
      <div class="titile">选择地址</div>
      <div class="choose">{{ text1 }}</div>
    </div>
    <h4>选择已有地址</h4>
    <div class="address-list other" @click="showAddressExist">
      <div class="titile">选择地址</div>
      <div class="choose">{{ text2 }}</div>
    </div>

    <h4>自定义图标</h4>
    <div class="address-list other" @click="showCustomImg">
      <div class="titile">选择地址</div>
      <div class="choose">{{ text3 }}</div>
    </div>

    <h4>自定义地址与已有地址切换</h4>
    <div class="address-list other" @click="showAddressOther">
      <div class="titile">选择地址</div>
      <div class="choose">{{ text4 }}</div>
    </div>

    <nut-address
      v-model="showPopup"
      :province="province"
      :city="city"
      :country="country"
      :town="town"
      @onChange="onChange1"
      @close="close1"
      customAddressTitle="请选择所在地区"
    ></nut-address>

    <nut-address
      v-model="showPopupExist"
      type="exist"
      :existAddress="existAddress"
      @onChange="onChange2"
      @close="close2"
      :isShowCustomAddress="false"
      @selected="selected2"
      existAddressTitle="配送至"
    ></nut-address>

    <nut-address
      v-model="showPopupCustomImg"
      type="exist"
      :existAddress="existAddress"
      @onChange="onChange3"
      @close="close3"
      :isShowCustomAddress="false"
      @selected="selected3"
      :defaultIcon="defaultIcon"
      :selectedIcon="selectedIcon"
      :closeBtnIcon="closeBtnIcon"
    ></nut-address>

    <nut-address
      v-model="showPopupOther"
      type="exist"
      :existAddress="existAddress"
      :province="province"
      :city="city"
      :country="country"
      :town="town"
      :backBtnIcon="backBtnIcon"
      @onChange="onChange4"
      @close="close4"
      @selected="selected4"
      customAndExistTitle="选择其他地址"
      @switchModule="switchModule"
      @closeMask="closeMask"
    ></nut-address>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
      province: [
        { id: 1, name: '北京' },
        { id: 2, name: '广西' },
        { id: 3, name: '江西' },
        { id: 4, name: '四川' }
      ], // 省
      city: [
        { id: 7, name: '朝阳区' },
        { id: 8, name: '崇文区' },
        { id: 9, name: '昌平区' },
        { id: 6, name: '石景山区' }
      ], // 市
      country: [
        { id: 3, name: '八里庄街道' },
        { id: 9, name: '北苑' },
        { id: 4, name: '常营乡' }
      ], // 县
      town: [], // 镇

      showPopupExist: false,

      showPopupCustomImg: false,
      selectedIcon: require('../../assets/svg/checked.svg'),
      defaultIcon: require('../../assets/svg/unchecked.svg'),

      closeBtnIcon: require('../../assets/svg/close.svg'),
      backBtnIcon: require('../../assets/svg/back.svg'),

      showPopupOther: false,
      existAddress: [
        { id: 1, addressDetail: 'th ', cityName: '石景山区', countyName: '城区', provinceName: '北京', selectedAddress: true, townName: '' },
        { id: 2, addressDetail: '12_ ', cityName: '电饭锅', countyName: '扶绥县', provinceName: '北京', selectedAddress: false, townName: '' },
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
      ],

      text1: '请选择地址',
      text2: '请选择地址',
      text3: '请选择地址',
      text4: '请选择地址'
    };
  },
  methods: {
    showAddress() {
      this.showPopup = true;
    },

    onChange1(cal) {
      console.log('change1', cal);
      if (this[cal.next].length < 1) {
        this.showPopup = false;
      }
    },
    close1(val) {
      console.log(val);
      this.text1 = val.data.addressStr;
    },

    showAddressExist() {
      this.showPopupExist = true;
    },

    onChange2(cal) {
      console.log('change2', cal);
      if (this[cal.next].length < 1) {
        this.showPopupOther = false;
      }
    },

    close2(val) {
      console.log(val);
      if (val.type == 'exist') {
        this.text2 = val.data.provinceName + val.data.cityName + val.data.countyName + val.data.townName + val.data.addressDetail;
      } else {
        this.text2 = val.data.addressStr;
      }
    },
    selected2(prevExistAdd, nowExistAdd, arr) {
      console.log(prevExistAdd);
      console.log(nowExistAdd);
    },

    showAddressOther() {
      this.showPopupOther = true;
    },
    showCustomImg() {
      this.showPopupCustomImg = true;
    },
    onChange3(cal) {
      console.log('change3', cal);
      if (this[cal.next].length < 1) {
        this.showPopupOther = false;
      }
    },

    close3(val) {
      console.log(val);
      if (val.type == 'exist') {
        this.text3 = val.data.provinceName + val.data.cityName + val.data.countyName + val.data.townName + val.data.addressDetail;
      } else {
        this.text3 = val.data.addressStr;
      }
    },
    selected3(prevExistAdd, nowExistAdd, arr) {
      console.log(prevExistAdd);
      console.log(nowExistAdd);
    },

    onChange4(cal) {
      console.log('change4', cal);
      if (this[cal.next].length < 1) {
        this.showPopupOther = false;
      }
    },

    close4(val) {
      console.log(val);
      if (val.type == 'exist') {
        this.text4 = val.data.provinceName + val.data.cityName + val.data.countyName + val.data.townName + val.data.addressDetail;
      } else {
        this.text4 = val.data.addressStr;
      }
    },
    selected4(prevExistAdd, nowExistAdd, arr) {
      console.log(prevExistAdd);
      console.log(nowExistAdd);
    },

    switchModule(cal) {
      if (cal.type == 'custom') {
        console.log('点击了“选择其他地址”按钮');
      } else {
        console.log('点击了自定义地址左上角的返回按钮');
      }
    },

    closeMask(val) {
      console.log('关闭弹层', val);
    }
  }
};
</script>

<style lang="scss" scoped>
.address-box {
  margin-top: 10px;

  .address-list {
    margin-bottom: 10px;
    background: #fff;
    border-radius: 4px;
    font-size: 14px;
    padding: 10px;

    &.init {
      display: flex;
      .titile {
        margin-right: 15px;
      }
      .choose {
        color: #999;
      }
    }
    &.other {
      display: flex;
      .titile {
        margin-right: 15px;
      }
      .choose {
        color: #999;
      }
    }
  }
}
</style>
