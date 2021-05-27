<template>
  <div class="nut-address">
    <nut-popup
      v-model="showPopup"
      round
      position="bottom"
      class="choose-address"
      @close="close"
      @click-overlay="clickOverlay"
      @open="closeWay = 'self'"
    >
      <div class="title">
        <span class="arrow" @click="switchModule" v-if="showModule == 'custom' && type == 'exist' && backBtnIcon">
          <nut-icon type="self" :url="backBtnIcon"></nut-icon>
        </span>
        <span class="arrow" v-else></span>

        <span v-if="type == 'custom'">{{ customAddressTitle }}</span>
        <span v-if="type == 'exist'">{{ existAddressTitle }}</span>

        <span @click="handClose('cross')"><nut-icon v-if="closeBtnIcon" size="18px" type="self" :url="closeBtnIcon"></nut-icon></span>
      </div>

      <!-- 请选择 -->
      <div class="custom-address" v-if="showModule == 'custom'">
        <div class="region-tab">
          <div
            class="tab-item"
            :class="[index == tabIndex ? 'active' : '']"
            v-for="(item, key, index) in selectedRegion"
            :key="index"
            :ref="'tab-item-' + key"
            @click="changeRegionTab(item, key, index)"
            ><span>{{ getTabName(item, index) }}</span></div
          >

          <span class="region-tab-line" ref="regionLine" :style="{ left: lineDistance + 'px' }"></span>
        </div>

        <div class="region-con">
          <ul class="region-group">
            <li
              v-for="(item, index) in regionList[tabName[tabIndex]]"
              :key="index"
              class="region-item"
              :class="[selectedRegion[tabName[tabIndex]].id == item.id ? 'active' : '']"
              @click="nextAreaList(item)"
            >
              <nut-icon type="self" :url="require('../../assets/svg/hook-red.svg')" v-if="selectedRegion[tabName[tabIndex]].id == item.id"></nut-icon
              >{{ item.name }}</li
            >
          </ul>
        </div>
      </div>
      <!-- 配送至 -->
      <div class="exist-address" v-if="showModule == 'exist'">
        <div class="exist-address-group">
          <ul class="exist-ul">
            <li
              class="exist-item"
              :class="[item.selectedAddress ? 'active' : '']"
              v-for="(item, index) in existAddress"
              :key="index"
              @click="selectedExist(item)"
            >
              <nut-icon type="self" :url="item.selectedAddress ? selectedIcon : defaultIcon"></nut-icon>

              <span>{{ item.provinceName + item.cityName + item.countyName + item.townName + item.addressDetail }}</span>
            </li>
          </ul>
        </div>

        <div class="choose-other" @click="switchModule" v-if="isShowCustomAddress && showModule == 'exist'">
          <div class="btn">{{ customAndExistTitle }}</div>
        </div>
      </div>
    </nut-popup>
  </div>
</template>
<script>
import Popup from './../popup/popup.vue';
import Icon from './../icon/icon.vue';
export default {
  name: 'nut-address',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'custom'
    },
    customAddressTitle: {
      type: String,
      default: '请选择所在地区'
    },
    province: {
      type: Array,
      default: () => []
    }, // 省
    city: {
      type: Array,
      default: () => []
    }, // 市
    country: {
      type: Array,
      default: () => []
    }, // 县
    town: {
      type: Array,
      default: () => []
    }, // 镇
    isShowCustomAddress: {
      type: Boolean,
      default: true
    }, // 是否显示‘选择其他地区’按钮 type=‘exist’ 生效
    existAddress: {
      type: Array,
      default: () => []
    }, // 现存地址列表
    existAddressTitle: {
      type: String,
      default: '配送至'
    },
    customAndExistTitle: {
      type: String,
      default: '选择其他地址'
    },
    defaultIcon: {
      // 地址选择列表前 - 默认的图标
      type: String,
      default: require('../../assets/svg/address-location.svg')
    },
    selectedIcon: {
      // 地址选择列表前 - 选中的图标
      type: String,
      default: require('../../assets/svg/tick-red.svg')
    },
    closeBtnIcon: {
      // 关闭弹框按钮 icon
      type: String,
      default: require('../../assets/svg/circle-cross.svg')
    },
    backBtnIcon: {
      // 选择其他地址左上角返回 icon
      type: String,
      default: require('../../assets/svg/arrows-back.svg')
    }
  },
  data() {
    return {
      showPopup: false,
      showModule: 'exist', //展示 exist 还是 custom 主要用于‘选择其他地址’
      tabIndex: 0,
      tabName: ['province', 'city', 'country', 'town'],
      regionList: {
        province: this.province,
        city: this.city,
        country: this.country,
        town: this.town
      }, //省、市、县、镇列表,地址id字符串,地址字符串
      selectedRegion: {
        province: {},
        city: {},
        country: {},
        town: {}
      }, //已选择的 省、市、县、镇

      selectedExistAddress: {}, // 当前选择的地址
      lineDistance: 20
    };
  },
  components: {
    'nut-popup': Popup,
    'nut-icon': Icon
  },
  watch: {
    value(newVal, oldVal) {
      this.showPopup = newVal;
    },
    showPopup(newVal, oldVal) {
      if (newVal == false) this.$emit('input', false);
      if (newVal == true) {
        this.showModule = this.type;
      }
    },
    province(newVal, oldVal) {
      this.regionList.province = newVal;
    },
    city(newVal, oldVal) {
      this.regionList.city = newVal;
    },
    country(newVal, oldVal) {
      this.regionList.country = newVal;
    },
    town(newVal, oldVal) {
      this.regionList.town = newVal;
    },

    existAddress(newVal, oldVal) {
      this.existAddress = newVal;

      newVal.forEach((item, index) => {
        if (item.selectedAddress) {
          this.selectedExistAddress = item;
        }
      });
    }
  },
  mounted() {},
  methods: {
    //获取已选地区列表名称
    getTabName(item, index) {
      if (item.name) return item.name;

      if (this.tabIndex < index) {
        return item.name;
      } else {
        return '请选择';
      }
    },
    // 切换下一级列表
    nextAreaList(item) {
      // onchange 接收的参数
      const calBack = {
        custom: this.tabName[this.tabIndex]
      };

      this.selectedRegion[this.tabName[this.tabIndex]] = item;

      for (let i = this.tabIndex; i < this.tabName.length - 1; i++) {
        this.selectedRegion[this.tabName[i + 1]] = {};
      }

      if (this.tabIndex < 3) {
        this.tabIndex = this.tabIndex + 1;
        this.lineAnimation();

        // 切换下一个
        calBack.next = this.tabName[this.tabIndex];
        calBack.value = item;
        this.$emit('onChange', calBack);
        this.$emit('on-change', calBack);
      } else {
        this.handClose();
      }
    },
    //切换地区Tab
    changeRegionTab(item, key, index) {
      this.tabIndex = index;
      this.lineAnimation();
    },
    // 移动下面的红线
    lineAnimation() {
      const name = 'tab-item-' + this.tabName[this.tabIndex];
      this.$nextTick(() => {
        if (this.$refs[name] && this.$refs[name][0]) {
          const distance = this.$refs[name][0].offsetLeft;
          // TweenMax.to(this.$refs.regionLine, 0.5, { left: distance });
          this.lineDistance = distance;
        }
      });
    },

    // 选择现有地址
    selectedExist(item) {
      let copyExistAdd = this.existAddress;
      let prevExistAdd = {};

      copyExistAdd.forEach((list, index) => {
        if (list.selectedAddress) {
          prevExistAdd = list;
        }
        list.selectedAddress = false;
      });

      item.selectedAddress = true;

      this.selectedExistAddress = item;

      this.$emit('selected', prevExistAdd, item, copyExistAdd);

      this.handClose();
    },

    // 关闭
    close() {
      const that = this;

      const resCopy = Object.assign({}, this.selectedRegion);

      const res = {
        type: this.showModule,
        data: {}
      };

      if (this.showModule == 'custom') {
        const { province, city, country, town } = resCopy;
        resCopy.addressIdStr = [province.id || 0, city.id || 0, country.id || 0, town.id || 0].join('_');
        resCopy.addressStr = [province.name, city.name, country.name, town.name].join('');
        res.data = resCopy;
      } else {
        res.data = this.selectedExistAddress;
      }

      this.initAddress();

      if (this.closeWay == 'self') {
        this.$emit('close', res);
      } else {
        this.$emit('closeMask', { closeWay: this.closeWay });
        this.$emit('close-mask', { closeWay: this.closeWay });
      }
    },
    // 手动关闭 点击叉号(cross)，或者蒙层(mask)
    handClose(type = 'self') {
      if (!this.closeBtnIcon) return;

      this.closeWay = type == 'cross' ? 'cross' : 'self';

      this.showPopup = false;
    },
    // 点击遮罩层关闭
    clickOverlay() {
      this.closeWay = 'mask';
    },
    // 初始化
    initAddress() {
      for (let i = 0; i < this.tabName.length; i++) {
        this.selectedRegion[this.tabName[i]] = {};
      }
      this.tabIndex = 0;
      this.lineAnimation();
    },
    // 选择其他地址
    switchModule() {
      if (this.showModule == 'exist') {
        this.showModule = 'custom';
      } else {
        this.showModule = 'exist';
      }

      this.initAddress();

      this.$emit('switchModule', { type: this.showModule });
      this.$emit('switch-module', { type: this.showModule });
    }
  }
};
</script>
