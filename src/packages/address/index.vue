<template>
  <nut-popup
    position="bottom"
    @close="close"
    @click-overlay="clickOverlay"
    @open="closeWay = 'self'"
    v-model:visible="showPopup"
  >
    <view-block class="nut-address">
      <view-block class="title">
        <view-block
          class="arrow-back"
          @click="switchModule"
          v-if="showModule == 'custom' && type == 'exist' && backBtnIcon"
        >
          <nut-icon :name="backBtnIcon" color="#CCCCCC"></nut-icon>
        </view-block>
        <view-block class="arrow-back" v-else></view-block>

        <view-block v-show="showModule == 'custom'">{{
          customAddressTitle
        }}</view-block>
        <view-block v-show="showModule == 'exist'">{{
          existAddressTitle
        }}</view-block>

        <view-block class="arrow-close" @click="handClose('cross')">
          <nut-icon
            v-if="closeBtnIcon"
            :name="closeBtnIcon"
            color="#CCCCCC"
            size="18px"
          ></nut-icon>
        </view-block>
      </view-block>

      <!-- 请选择 -->
      <view-block class="custom-address" v-if="showModule == 'custom'">
        <view-block class="region-tab">
          <view-block
            class="tab-item"
            :class="[index == tabIndex ? 'active' : '']"
            v-for="(item, key, index) in selectedRegion"
            :key="index"
            :ref="key"
            @click="changeRegionTab(item, key, index)"
          >
            <view>{{ getTabName(item, index) }}</view>
          </view-block>

          <view-block class="region-tab-line" ref="regionLine"></view-block>
        </view-block>

        <view-block class="region-con">
          <ul class="region-group">
            <li
              v-for="(item, index) in regionList[tabName[tabIndex]]"
              :key="index"
              class="region-item"
              :class="[
                selectedRegion[tabName[tabIndex]].id == item.id ? 'active' : ''
              ]"
              @click="nextAreaList(item)"
            >
              <nut-icon
                class="region-item-icon"
                type="self"
                :name="selectedIcon"
                color="#FA2C19"
                size="13px"
                v-if="selectedRegion[tabName[tabIndex]].id == item.id"
              ></nut-icon
              >{{ item.name }}
            </li>
          </ul>
        </view-block>
      </view-block>

      <!-- 配送至 -->
      <view-block class="exist-address" v-if="showModule == 'exist'">
        <div class="exist-address-group">
          <ul class="exist-ul">
            <li
              class="exist-item"
              :class="[item.selectedAddress ? 'active' : '']"
              v-for="(item, index) in existAddress"
              :key="index"
              @click="selectedExist(item)"
            >
              <nut-icon
                class="exist-item-icon"
                type="self"
                :name="item.selectedAddress ? selectedIcon : defaultIcon"
                :color="item.selectedAddress ? '#FA2C19' : ''"
                size="13px"
              ></nut-icon>

              <view>{{
                item.provinceName +
                  item.cityName +
                  item.countyName +
                  item.townName +
                  item.addressDetail
              }}</view>
            </li>
          </ul>
        </div>

        <div
          class="choose-other"
          @click="switchModule"
          v-if="isShowCustomAddress && showModule == 'exist'"
        >
          <div class="btn">{{ customAndExistTitle }}</div>
        </div>
      </view-block>
    </view-block>
  </nut-popup>
</template>
<script lang="ts">
import { reactive, ref, toRefs, watch, nextTick } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('address');
import { TweenMax } from 'gsap';
interface RegionData {
  name: string;
  [key: string]: any;
}
interface Region {
  province: RegionData[];
  city: RegionData[];
  country: RegionData[];
  town: RegionData[];
  [key: string]: any;
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
export default create({
  props: {
    visible: {
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
    },
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
      default: 'location2'
    },
    selectedIcon: {
      // 地址选择列表前 - 选中的图标
      type: String,
      default: 'Check'
    },
    closeBtnIcon: {
      // 关闭弹框按钮 icon
      type: String,
      default: 'circle-close'
    },
    backBtnIcon: {
      // 选择其他地址左上角返回 icon
      type: String,
      default: 'left'
    }
  },
  emits: [
    'update:visible',
    'change',
    'selected',
    'close',
    'close-mask',
    'switch-module'
  ],

  setup(props, { emit }) {
    const regionLine = ref<null | HTMLElement>(null);

    const tabItemRef = reactive({
      province: ref<null | HTMLElement>(null),
      city: ref<null | HTMLElement>(null),
      country: ref<null | HTMLElement>(null),
      town: ref<null | HTMLElement>(null)
    });

    const showPopup = ref(false);
    const showModule = ref('exist'); //展示 exist 还是 custom 主要用于’选择其他地址‘
    const tabIndex = ref(0);
    const tabName = ref(['province', 'city', 'country', 'town']);

    const regionList = reactive({
      province: props.province,
      city: props.city,
      country: props.country,
      town: props.town
    });

    const selectedRegion = reactive({
      province: {} as RegionData,
      city: {} as RegionData,
      country: {} as RegionData,
      town: {} as RegionData
    }); //已选择的 省、市、县、镇

    let selectedExistAddress = reactive({}); // 当前选择的地址

    const closeWay = ref('self');

    //获取已选地区列表名称
    const getTabName = (item: RegionData, index: number) => {
      if (item.name) return item.name;

      if (tabIndex.value < index) {
        return item.name;
      } else {
        return '请选择';
      }
    };
    // 手动关闭 点击叉号(cross)，或者蒙层(mask)
    const handClose = (type = 'self') => {
      if (!props.closeBtnIcon) return;

      closeWay.value = type == 'cross' ? 'cross' : 'self';

      showPopup.value = false;
    };
    // 点击遮罩层关闭
    const clickOverlay = () => {
      closeWay.value = 'mask';
    };
    // 移动下面的红线
    const lineAnimation = () => {
      const name = (tabItemRef as any)[tabName.value[tabIndex.value]];
      nextTick(() => {
        if (name) {
          const distance = name.offsetLeft;
          TweenMax.to(regionLine.value, 0.5, { left: distance });
        }
      });
    };
    // 切换下一级列表
    const nextAreaList = (item: RegionData | string) => {
      // onchange 接收的参数
      const calBack = {
        next: '',
        value: '',
        custom: tabName.value[tabIndex.value]
      };

      (selectedRegion as any)[tabName.value[tabIndex.value]] = item;

      for (let i = tabIndex.value; i < tabIndex.value - 1; i++) {
        (selectedRegion as any)[tabName.value[i + 1]] = {};
      }

      if (tabIndex.value < 3) {
        tabIndex.value = tabIndex.value + 1;

        lineAnimation();

        // 切换下一个
        calBack.next = tabName.value[tabIndex.value];
        calBack.value = item as string;
        emit('change', calBack);
      } else {
        handClose();
      }
    };
    //切换地区Tab
    const changeRegionTab = (item: RegionData, key: number, index: number) => {
      tabIndex.value = index;
      lineAnimation();
    };

    // 选择现有地址
    const selectedExist = (item: RegionData) => {
      const copyExistAdd = props.existAddress as AddressList[];
      let prevExistAdd = {};

      copyExistAdd.forEach((list, index) => {
        if (list && (list as AddressList).selectedAddress) {
          prevExistAdd = list;
        }
        (list as AddressList).selectedAddress = false;
      });

      item.selectedAddress = true;

      selectedExistAddress = item;

      emit('selected', prevExistAdd, item, copyExistAdd);

      handClose();
    };
    // 初始化
    const initAddress = () => {
      for (let i = 0; i < tabName.value.length; i++) {
        (selectedRegion as any)[tabName.value[i]] = {};
      }
      tabIndex.value = 0;
      lineAnimation();
    };

    // 关闭
    const close = () => {
      const resCopy = Object.assign(
        {
          addressIdStr: '',
          addressStr: ''
        },
        selectedRegion
      );

      const res = {
        type: showModule.value,
        data: {}
      };

      if (showModule.value == 'custom') {
        const { province, city, country, town } = resCopy;

        resCopy.addressIdStr = [
          (province as RegionData).id || 0,
          (city as RegionData).id || 0,
          (country as RegionData).id || 0,
          (town as RegionData).id || 0
        ].join('_');
        resCopy.addressStr = [
          (province as RegionData).name,
          (city as RegionData).name,
          (country as RegionData).name,
          (town as RegionData).name
        ].join('');
        res.data = resCopy;
      } else {
        res.data = selectedExistAddress;
      }

      initAddress();

      if (closeWay.value == 'self') {
        emit('close', res);
      } else {
        emit('close-mask', { closeWay: closeWay });
      }
    };

    // 选择其他地址
    const switchModule = () => {
      if (showModule.value == 'exist') {
        showModule.value = 'custom';
      } else {
        showModule.value = 'exist';
      }

      initAddress();

      emit('switch-module', { type: showModule.value });
    };

    watch(
      () => props.visible,
      value => {
        showPopup.value = value;
      }
    );

    watch(
      () => showPopup.value,
      value => {
        if (!value) {
          close();
          emit('update:visible', false);
        } else {
          showModule.value = props.type;
        }
      }
    );

    watch(
      () => props.province,
      value => {
        regionList.province = value;
      }
    );
    watch(
      () => props.city,
      value => {
        regionList.city = value;
      }
    );
    watch(
      () => props.country,
      value => {
        regionList.country = value;
      }
    );
    watch(
      () => props.town,
      value => {
        regionList.town = value;
      }
    );

    watch(
      () => props.existAddress,
      value => {
        //  existAddress.value = value;
        value.forEach((item, index) => {
          if ((item as AddressList).selectedAddress) {
            selectedExistAddress = item as {};
          }
        });
      }
    );

    return {
      showPopup,
      showModule,
      tabIndex,
      tabName,
      regionList,
      selectedRegion,
      selectedExistAddress,
      switchModule,
      closeWay,
      close,
      getTabName,
      nextAreaList,
      regionLine,
      changeRegionTab,
      selectedExist,
      clickOverlay,
      handClose,
      ...toRefs(props),
      ...toRefs(tabItemRef)
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
