<template>
  <nut-popup
    position="bottom"
    @close="close"
    @click-overlay="clickOverlay"
    @open="closeWay = 'self'"
    v-model:visible="showPopup"
    :class="classes"
  >
    <view-block class="nut-address">
      <view-block class="nut-address__header">
        <view-block class="arrow-back" @click="switchModule">
          <nut-icon
            :name="backBtnIcon"
            color="#cccccc"
            v-if="privateType == 'custom' && type == 'exist' && backBtnIcon"
          ></nut-icon>
        </view-block>

        <view-block class="nut-address__header__title">
          {{ privateType == 'custom' ? customAddressTitle : existAddressTitle }}
        </view-block>

        <view-block class="arrow-close" @click="handClose('cross')">
          <nut-icon
            v-if="closeBtnIcon"
            :name="closeBtnIcon"
            color="#cccccc"
            size="18px"
          ></nut-icon>
        </view-block>
      </view-block>

      <!-- 请选择 -->
      <view-block class="custom-address" v-if="privateType == 'custom'">
        <view-block class="region-tab">
          <view-block
            class="tab-item"
            :class="[index == tabIndex ? 'active' : '', key]"
            v-for="(item, key, index) in selectedRegion"
            :key="index"
            :ref="key"
            @click="changeRegionTab(item, key, index)"
          >
            <view>{{ getTabName(item, index) }}</view>
          </view-block>
          <view-block
            class="region-tab-line"
            ref="regionLine"
            :style="{ left: lineDistance + 'px' }"
          ></view-block>
        </view-block>

        <view-block
          class="region-con"
          v-if="regionList[tabName[tabIndex]].length"
        >
          <ul class="region-group" ref="listview">
            <li
              class="region-item"
              v-for="item in regionList[tabName[tabIndex]]"
              :key="item.title"
              :ref="setListGroup"
            >
              <div class="region-item-code">{{ item.title }}</div>
              <div
                class="region-item-name"
                v-for="subitem in item.list"
                :key="subitem.id"
                :class="[
                  selectedRegion[tabName[tabIndex]].id == subitem.id
                    ? 'active'
                    : ''
                ]"
                @click="nextAreaList(subitem)"
              >
                <nut-icon
                  class="region-item-icon"
                  type="self"
                  :name="selectedIcon"
                  color="#FA2C19"
                  size="13px"
                  v-if="selectedRegion[tabName[tabIndex]].id == subitem.id"
                ></nut-icon>
                {{ subitem.name }}
              </div>
            </li>
          </ul>
          <div class="region-con-current-code" v-show="scrollStart">{{
            regionList[tabName[tabIndex]][currentIndex].title
          }}</div>
          <div
            class="region-con-codes-wrapper"
            @touchstart="touchStart"
            @touchmove.stop.prevent="touchMove"
            @touchend="touchEnd"
          >
            <div class="region-con-codes">
              <div
                class="region-con-codes-item"
                :data-index="index"
                v-for="(item, index) in regionList[tabName[tabIndex]]"
                :key="item.title"
                >{{ item.title }}</div
              >
            </div>
          </div>
        </view-block>
      </view-block>

      <!-- 配送至 -->
      <view-block class="exist-address" v-else-if="privateType == 'exist'">
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

              <div class="exist-item-info">
                <div class="exist-item-info-top" v-if="item.name && item.phone">
                  <div class="exist-item-info-name">{{ item.name }}</div>
                  <div class="exist-item-info-phone">{{ item.phone }}</div>
                </div>
                <div class="exist-item-info-bottom">
                  <view>
                    {{
                      item.provinceName +
                      item.cityName +
                      item.countyName +
                      item.townName +
                      item.addressDetail
                    }}
                  </view>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div
          class="choose-other"
          @click="switchModule"
          v-if="isShowCustomAddress"
        >
          <div class="btn">{{ customAndExistTitle }}</div>
        </div>
      </view-block>
    </view-block>
  </nut-popup>
</template>
<script lang="ts">
import {
  reactive,
  ref,
  toRefs,
  watch,
  nextTick,
  computed,
  Ref,
  onMounted
} from 'vue';
import { createComponent } from '../../utils/create';
import Icon from '../icon/index.taro.vue';
import Popup from '../popup/index.taro.vue';
import Taro from '@tarojs/taro';
import { transformData } from './transformData';

const { create, componentName } = createComponent('address');

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
  inheritAttrs: false,
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
  components: {
    'nut-icon': Icon,
    'nut-popup': Popup
  },
  emits: [
    'update:visible',
    'type',
    'change',
    'selected',
    'close',
    'close-mask',
    'switch-module'
  ],

  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const regionLine = ref<null | HTMLElement>(null);

    const tabItemRef = reactive({
      province: ref<null | HTMLElement>(null),
      city: ref<null | HTMLElement>(null),
      country: ref<null | HTMLElement>(null),
      town: ref<null | HTMLElement>(null)
    });
    const showPopup = ref(props.visible);
    const privateType = ref(props.type);
    const tabIndex = ref(0);
    const tabName = ref(['province', 'city', 'country', 'town']);

    const regionList = reactive({
      province: transformData(props.province),
      city: transformData(props.city),
      country: transformData(props.country),
      town: transformData(props.town)
    });

    const selectedRegion = reactive({
      province: {} as RegionData,
      city: {} as RegionData,
      country: {} as RegionData,
      town: {} as RegionData
    }); //已选择的 省、市、县、镇

    let selectedExistAddress = reactive({}); // 当前选择的地址

    const closeWay = ref('self');

    const lineDistance = ref(20);

    const listview = ref(null);

    const scrollState = reactive({
      anchorIndex: 0,
      listHeight: [] as number[],
      listGroup: [] as HTMLLIElement[],
      touchState: {
        y1: 0,
        y2: 0
      },
      scrollStart: false,
      currentIndex: 0
    });

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
    //重置滚动参数
    const resetScrollState = () => {
      scrollState.anchorIndex = 0;
      scrollState.listHeight = [];
      scrollState.listGroup = [];
      scrollState.currentIndex = 0;
      scrollState.scrollStart = false;
      scrollState.touchState = {
        y1: 0,
        y2: 0
      };
    };
    // 移动下面的红线
    const lineAnimation = () => {
      setTimeout(() => {
        Taro.createSelectorQuery()
          .selectAll(`.${tabName.value[tabIndex.value]}`)
          .boundingClientRect((rects) => {
            (rects as any).forEach((rect: any) => {
              if (rect.width > 0) lineDistance.value = rect.left;
            });
          })
          .exec();
      }, 100);
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

      resetScrollState();
      (listview.value as any).scrollTo(0, 0);
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
      if (copyExistAdd != null) {
        copyExistAdd.forEach((list, index) => {
          if (list && (list as AddressList).selectedAddress) {
            prevExistAdd = list;
          }
          (list as AddressList).selectedAddress = false;
        });
      }

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
        data: {},
        type: privateType.value
      };

      if (privateType.value == 'custom') {
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
      emit('update:visible', false);
    };

    // 选择其他地址
    const switchModule = () => {
      if (privateType.value == 'exist') {
        privateType.value = 'custom';
      } else {
        privateType.value = 'exist';
      }

      initAddress();

      emit('switch-module', { type: privateType.value });
    };

    const getData = (el: any, name: string, val?: string) => {
      const prefix = 'data-';
      if (val) {
        return el.setAttribute(prefix + name, val);
      }
      return +el.getAttribute(prefix + name);
    };

    const setListGroup = (el: HTMLLIElement) => {
      nextTick(() => {
        if (!scrollState.listGroup.includes(el) && el != null) {
          scrollState.listGroup.push(el);
        }
      });
    };

    const calculateHeight = () => {
      let height = 0;
      scrollState.listHeight.push(height);
      for (let i = 0; i < scrollState.listGroup.length; i++) {
        let item = scrollState.listGroup[i];
        height += item.clientHeight;
        scrollState.listHeight.push(height);
      }
    };

    const scrollTo = (index: number) => {
      if (!index && index !== 0) {
        return;
      }
      if (!scrollState.listHeight.length) {
        calculateHeight();
      }
      if (index < 0) index = 0;
      if (index > scrollState.listHeight.length - 2)
        index = scrollState.listHeight.length - 2;
      scrollState.currentIndex = index;
      (listview.value as any).scrollTo(0, scrollState.listHeight[index]);
    };

    const touchStart = (e: TouchEvent) => {
      scrollState.scrollStart = true;
      let index = getData(e.target, 'index');
      let firstTouch = e.touches[0];
      scrollState.touchState.y1 = firstTouch.pageY;
      scrollState.anchorIndex = index;
      scrollState.currentIndex = index;
      scrollTo(index);
    };

    const touchMove = (e: TouchEvent) => {
      let firstTouch = e.touches[0];
      scrollState.touchState.y2 = firstTouch.pageY;
      let delta =
        ((scrollState.touchState.y2 - scrollState.touchState.y1) / 23) | 0;
      scrollState.currentIndex = scrollState.anchorIndex + delta;
      scrollTo(scrollState.currentIndex);
    };

    const touchEnd = (e: TouchEvent) => {
      resetScrollState();
    };

    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
      }
    );

    watch(
      () => showPopup.value,
      (value) => {
        if (value == false) {
          close();
        }
      }
    );

    watch(
      () => props.province,
      (value) => {
        regionList.province = transformData(value);
      }
    );
    watch(
      () => props.city,
      (value) => {
        regionList.city = transformData(value);
      }
    );
    watch(
      () => props.country,
      (value) => {
        regionList.country = transformData(value);
      }
    );
    watch(
      () => props.town,
      (value) => {
        regionList.town = transformData(value);
      }
    );

    watch(
      () => props.existAddress,
      (value) => {
        value.forEach((item, index) => {
          if ((item as AddressList).selectedAddress) {
            selectedExistAddress = item as {};
          }
        });
      }
    );

    watch(
      () => props.type,
      (value) => {
        privateType.value = value;
      }
    );

    return {
      classes,
      showPopup,
      privateType,
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
      lineDistance,
      changeRegionTab,
      selectedExist,
      clickOverlay,
      handClose,
      touchStart,
      touchMove,
      touchEnd,
      setListGroup,
      listview,
      ...toRefs(scrollState),
      ...toRefs(props),
      ...toRefs(tabItemRef)
    };
  }
});
</script>

<style lang="scss">
@import './index.scss';
</style>
