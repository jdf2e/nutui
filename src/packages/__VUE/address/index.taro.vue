<template>
  <nut-popup
    position="bottom"
    :lock-scroll="lockScroll"
    @close="close"
    @click-overlay="clickOverlay"
    @open="closeWay = 'self'"
    v-model:visible="showPopup"
  >
    <view class="nut-address">
      <view class="nut-address__header">
        <view class="nut-address__header-back" @click="switchModule">
          <slot name="back-icon">
            <Left v-show="type == 'exist' && privateType == 'custom'" size="14px"></Left>
          </slot>
        </view>

        <view class="nut-address__header__title">
          {{
            privateType == 'custom'
              ? customAddressTitle || translate('selectRegion')
              : existAddressTitle || translate('deliveryTo')
          }}
        </view>

        <view class="nut-address__header-close" @click="handClose('cross')">
          <slot name="close-icon">
            <Close color="#cccccc" size="14px"></Close>
          </slot>
        </view>
      </view>

      <!-- 请选择 -->
      <view class="nut-address__custom" v-if="['custom', 'custom2'].includes(privateType)">
        <view class="nut-address__region" ref="tabRegion">
          <view
            :class="['nut-address__region-item ', index == tabIndex ? 'active' : '']"
            v-for="(item, index) in selectedRegion"
            :key="index"
            @click="changeRegionTab(item, index)"
          >
            <view>{{ getTabName(item, index) }} </view>
            <view :class="{ 'nut-address__region-line--mini': true, active: index == tabIndex }"></view>
          </view>
          <view class="active nut-address__region-item" v-if="tabIndex == selectedRegion.length">
            <view>{{ getTabName(null, selectedRegion.length) }} </view>
            <view class="nut-address__region-line--mini active"></view>
          </view>
        </view>

        <view class="nut-address__detail" v-if="privateType == 'custom'">
          <div class="nut-address__detail-list">
            <NutScrollView :scroll-y="true" :style="{ height: '100%' }" :scroll-top="scrollTop" @scroll="scrollChange">
              <div
                v-for="(item, index) in regionList"
                :key="index"
                :class="['nut-address__detail-item', selectedRegion[tabIndex]?.id == item.id ? 'active' : '']"
                @click="nextAreaList(item)"
              >
                <div>
                  <slot name="icon" v-if="selectedRegion[tabIndex]?.id == item.id">
                    <Check class="nut-address-select-icon" width="13px"></Check> </slot
                  >{{ item.name }}
                </div>
              </div>
            </NutScrollView>
          </div>
        </view>

        <view class="nut-address__elevator-group" v-else>
          <nut-elevator
            :height="height"
            :index-list="transformData(regionList)"
            @click-item="handleElevatorItem"
          ></nut-elevator>
        </view>
      </view>

      <!-- 配送至 -->
      <view class="nut-address__exist" v-else-if="privateType == 'exist'">
        <div class="nut-address__exist-group">
          <ul class="nut-address__exist-group-list">
            <li
              class="nut-address__exist-group-item"
              :class="[item.selectedAddress ? 'active' : '']"
              v-for="(item, index) in existAddress"
              :key="index"
              @click="selectedExist(item)"
            >
              <slot name="unselected-icon" v-if="!item.selectedAddress">
                <Location2 class="nut-address-select-icon" width="13px"></Location2>
              </slot>

              <slot name="icon" v-if="item.selectedAddress">
                <Check class="nut-address-select-icon" width="13px"></Check>
              </slot>

              <div class="nut-address__exist-item-info">
                <div class="nut-address__exist-item-info-top" v-if="item.name && item.phone">
                  <div class="nut-address__exist-item-info-name">{{ item.name }}</div>
                  <div class="nut-address__exist-item-info-phone">{{ item.phone }}</div>
                </div>
                <div class="nut-address__exist-item-info-bottom">
                  <view>
                    {{ item.provinceName + item.cityName + item.countyName + item.townName + item.addressDetail }}
                  </view>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="nut-address__exist-choose" @click="switchModule" v-if="isShowCustomAddress">
          <div class="nut-address__exist-choose-btn">{{
            customAndExistTitle || translate('chooseAnotherAddress')
          }}</div>
        </div>
        <template v-if="!isShowCustomAddress">
          <slot name="bottom"></slot>
        </template>
      </view>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { reactive, ref, toRefs, watch, computed, PropType } from 'vue';
import { popupProps } from '../popup/props';
import { RegionData, CustomRegionData, existRegionData } from './type';
import { createComponent } from '@/packages/utils/create';
import NutScrollView from '../scrollView/index.taro.vue';
import Popup from '../popup/index.taro.vue';
import Elevator from '../elevator/index.taro.vue';
const { create, componentName, translate } = createComponent('address');
import { Location, Location2, Check, Close, Left } from '@nutui/icons-vue-taro';

export default create({
  components: {
    [Popup.name]: Popup,
    [Elevator.name]: Elevator,
    Location,
    Location2,
    Check,
    Close,
    Left,
    NutScrollView
  },
  inheritAttrs: false,
  props: {
    ...popupProps,
    modelValue: {
      type: Array,
      default: () => []
    },
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
      default: ''
    },
    province: {
      type: Array as PropType<RegionData[]>,
      default: () => []
    },
    city: {
      type: Array as PropType<RegionData[]>,
      default: () => []
    }, // 市
    country: {
      type: Array as PropType<RegionData[]>,
      default: () => []
    }, // 县
    town: {
      type: Array as PropType<RegionData[]>,
      default: () => []
    }, // 镇
    isShowCustomAddress: {
      type: Boolean,
      default: true
    }, // 是否显示‘选择其他地区’按钮 type=‘exist’ 生效
    existAddress: {
      type: Array as PropType<existRegionData[]>,
      default: () => []
    }, // 现存地址列表
    existAddressTitle: {
      type: String,
      default: ''
    },
    customAndExistTitle: {
      type: String,
      default: ''
    },
    height: {
      type: [String, Number],
      default: '200'
    },
    columnsPlaceholder: {
      type: [String, Array],
      default: ''
    }
  },
  emits: ['update:visible', 'update:modelValue', 'type', 'change', 'selected', 'close', 'close-mask', 'switch-module'],

  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const tabItemRef = reactive({
      province: ref<null | HTMLElement>(null),
      city: ref<null | HTMLElement>(null),
      country: ref<null | HTMLElement>(null),
      town: ref<null | HTMLElement>(null)
    });
    const showPopup = ref(props.visible);
    const privateType = ref(props.type);
    const tabIndex = ref(0);
    const prevTabIndex = ref(0);
    const tabName = ref(['province', 'city', 'country', 'town']);
    const scrollDis = ref([0, 0, 0, 0]);
    const scrollTop = ref(0);

    const regionList = computed(() => {
      switch (tabIndex.value) {
        case 0:
          return props.province;
        case 1:
          return props.city;
        case 2:
          return props.country;
        default:
          return props.town;
      }
    });

    const transformData = (data: RegionData[]) => {
      if (!Array.isArray(data)) throw new TypeError('params muse be array.');

      if (!data.length) return [];

      data.forEach((item: RegionData) => {
        if (!item.title) {
          console.warn('[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .');
          return;
        }
      });

      const newData: CustomRegionData[] = [];

      data = data.sort((a: RegionData, b: RegionData) => {
        return a.title.localeCompare(b.title);
      });

      data.forEach((item: RegionData) => {
        const index = newData.findIndex((value: CustomRegionData) => value.title === item.title);
        if (index <= -1) {
          newData.push({
            title: item.title,
            list: ([] as any).concat(item)
          });
        } else {
          newData[index].list.push(item);
        }
      });

      return newData;
    };

    let selectedRegion = ref<RegionData[]>([]);

    let selectedExistAddress = reactive({}); // 当前选择的地址

    const closeWay = ref('self');

    const lineDistance = ref(20);

    // 设置选中省市县
    const initCustomSelected = () => {
      const defaultValue = props.modelValue;
      const num = defaultValue.length;
      if (num > 0) {
        tabIndex.value = num - 1;
        if (regionList.value.length == 0) {
          tabIndex.value = 0;
          return;
        }
        for (let index = 0; index < num; index++) {
          let arr: RegionData[] = [];
          switch (index) {
            case 0:
              arr = props.province;
              break;
            case 1:
              arr = props.city;
              break;
            case 2:
              arr = props.country;
              break;
            default:
              arr = props.town;
          }
          selectedRegion.value[index] = arr.filter((item: RegionData) => item.id == defaultValue[index])[0];
        }
        scrollTo();
      }
    };

    const getTabName = (item: RegionData | null, index: number) => {
      if (item && item.name) return item.name;
      if (tabIndex.value < index && item) {
        return item.name;
      } else {
        return props.columnsPlaceholder[index] || translate('select');
      }
    };

    // 手动关闭 点击叉号(cross)，或者蒙层(mask)
    const handClose = (type = 'self') => {
      closeWay.value = type == 'cross' ? 'cross' : 'self';

      showPopup.value = false;
    };

    // 点击遮罩层关闭
    const clickOverlay = () => {
      closeWay.value = 'mask';
    };

    // 切换下一级列表
    const nextAreaList = (item: RegionData) => {
      const tab = tabIndex.value;
      prevTabIndex.value = tabIndex.value;
      const callBackParams: {
        next?: string;
        value?: RegionData;
        custom: string;
      } = {
        custom: tabName.value[tab]
      };

      selectedRegion.value[tab] = item;

      for (let i = tab + 2; i < 4; i++) {
        selectedRegion.value.splice(i, 1);
      }
      if (tab < 3) {
        tabIndex.value = tab + 1;

        callBackParams.next = tabName.value[tabIndex.value];
        callBackParams.value = item;

        emit('change', callBackParams);

        scrollTo();
      } else {
        handClose();
        emit('update:modelValue');
      }
    };
    //切换地区Tab
    const changeRegionTab = (item: RegionData, index: number) => {
      prevTabIndex.value = tabIndex.value;
      if (getTabName(item, index)) {
        tabIndex.value = index;
        scrollTo();
      }
    };

    const scrollChange = (e: any) => {
      scrollDis.value[tabIndex.value] = e.detail.scrollTop;
    };

    const scrollTo = () => {
      setTimeout(() => {
        scrollTop.value = scrollDis.value[tabIndex.value];
      });
    };

    // 选择现有地址
    const selectedExist = (item: existRegionData) => {
      const copyExistAdd = props.existAddress;
      let prevExistAdd = {};

      copyExistAdd.forEach((list: existRegionData) => {
        if (list && list.selectedAddress) prevExistAdd = list;
        list.selectedAddress = false;
      });

      item.selectedAddress = true;

      selectedExistAddress = item;

      emit('selected', prevExistAdd, item, copyExistAdd);

      handClose();
    };
    // 初始化
    const initAddress = () => {
      selectedRegion.value = [];
      tabIndex.value = 0;
      scrollTo();
    };

    // 关闭
    const close = () => {
      const data = {
        addressIdStr: '',
        addressStr: '',
        province: selectedRegion.value[0],
        city: selectedRegion.value[1],
        country: selectedRegion.value[2],
        town: selectedRegion.value[3]
      };

      const callBackParams = {
        data: {},
        type: privateType.value
      };

      if (['custom', 'custom2'].includes(privateType.value)) {
        [0, 1, 2, 3].forEach((i) => {
          const item = selectedRegion.value[i];
          data.addressIdStr += `${i ? '_' : ''}${(item && item.id) || 0}`;
          data.addressStr += (item && item.name) || '';
        });

        callBackParams.data = data;
      } else {
        callBackParams.data = selectedExistAddress;
      }

      initAddress();

      if (closeWay.value == 'self') {
        emit('close', callBackParams);
      } else {
        emit('close-mask', { closeWay: closeWay });
      }

      emit('update:visible', false);
    };

    // 选择其他地址
    const switchModule = () => {
      const type = privateType.value;
      privateType.value = type == 'exist' ? 'custom' : 'exist';
      initAddress();
      emit('switch-module', { type: privateType.value });
    };

    const handleElevatorItem = (key: string, item: RegionData) => {
      nextAreaList(item);
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
        if (value) {
          initCustomSelected();
        }
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
      lineDistance,
      changeRegionTab,
      selectedExist,
      clickOverlay,
      handClose,
      handleElevatorItem,
      ...toRefs(props),
      ...toRefs(tabItemRef),
      translate,
      transformData,
      scrollTop,
      scrollChange
    };
  }
});
</script>
