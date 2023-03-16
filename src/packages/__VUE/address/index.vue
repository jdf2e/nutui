<template>
  <nut-popup
    position="bottom"
    :lock-scroll="lockScroll"
    @close="close"
    @click-overlay="clickOverlay"
    @open="closeWay = 'self'"
    v-model:visible="showPopup"
    :teleportDisable="teleportDisable"
    :teleport="teleport"
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
            :class="['nut-address__region-item', index == tabIndex ? 'active' : '']"
            v-for="(item, index) in selectedRegion"
            :key="index"
            @click="changeRegionTab(item, index)"
          >
            <view>{{ getTabName(item, index) }} </view>
          </view>
          <view class="active nut-address__region-item" v-if="tabIndex == selectedRegion.length">
            <view>{{ getTabName(null, selectedRegion.length) }} </view>
          </view>

          <view class="nut-address__region-line" ref="regionLine" :style="{ left: lineDistance + 'px' }"></view>
        </view>

        <view class="nut-address__detail" v-if="privateType == 'custom'">
          <ul class="nut-address__detail-list" ref="scrollDom">
            <li
              v-for="(item, index) in regionList"
              :key="index"
              :class="['nut-address__detail-item', selectedRegion[tabIndex]?.id == item.id ? 'active' : '']"
              @click="nextAreaList(item)"
            >
              <div>
                <slot name="icon" v-if="selectedRegion[tabIndex]?.id == item.id">
                  <Check class="nut-address-select-icon" size="13px"></Check> </slot
                >{{ item.name }}
              </div>
            </li>
          </ul>
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
      <view class="nut-address__exist" v-else>
        <div class="nut-address__exist-group">
          <ul class="nut-address__exist-group-list">
            <li
              :class="['nut-address__exist-group-item', item.selectedAddress ? 'active' : '']"
              v-for="(item, index) in existAddress"
              :key="index"
              @click="selectedExist(item)"
            >
              <slot name="unselected-icon" v-if="!item.selectedAddress">
                <Location2 class="nut-address-select-icon" size="13px"></Location2>
              </slot>

              <slot name="icon" v-if="item.selectedAddress">
                <Check class="nut-address-select-icon" size="13px"></Check>
              </slot>

              <div class="nut-address__exist-item-info">
                <div class="nut-address__exist-item-info-name" v-if="item.name">{{ item.name }}</div>
                <div class="nut-address__exist-item-info-phone" v-if="item.phone">{{ item.phone }}</div>
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
      </view>

      <slot name="bottom"></slot>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { reactive, ref, toRefs, watch, nextTick, computed, Ref, h, PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { RegionData, CustomRegionData, existRegionData } from './type';
import { popupProps } from '../popup/props';
import Popup from '../popup/index.vue';
import Elevator from '../elevator/index.vue';
const { componentName, create, translate } = createComponent('address');
import { Location, Location2, Check, Close, Left } from '@nutui/icons-vue';

export default create({
  components: {
    Location,
    Location2,
    Check,
    Close,
    Left,
    [Popup.name]: Popup,
    [Elevator.name]: Elevator
  },
  inheritAttrs: false,
  props: {
    ...popupProps,
    modelValue: {
      type: Array,
      default: () => []
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
    },
    existAddress: {
      type: Array as PropType<existRegionData[]>,
      default: () => []
    },
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
      default: '200px'
    },
    columnsPlaceholder: {
      type: [String, Array],
      default: ''
    }
  },
  emits: ['update:visible', 'update:modelValue', 'type', 'change', 'selected', 'close', 'close-mask', 'switch-module'],

  setup(props: any, { emit }) {
    const regionLine = ref<null | HTMLElement>(null);
    const tabRegion: Ref<any> = ref(null);
    const showPopup = ref(props.visible);
    const privateType = ref(props.type);
    const tabIndex = ref(0);
    const prevTabIndex = ref(0);
    const tabName = ref(['province', 'city', 'country', 'town']);
    const scrollDom = ref<null | HTMLElement>(null);
    const scrollDis = ref([0, 0, 0, 0]);

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

      data = data.sort((a: RegionData, b: RegionData) => a.title.localeCompare(b.title));

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

    //已选择的 省、市、县、镇
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
        lineAnimation();
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

    const lineAnimation = () => {
      scrollTo();

      nextTick(() => {
        const name = tabRegion.value && tabRegion.value.getElementsByClassName('active')[0];
        if (name) {
          const distance = name.offsetLeft;
          lineDistance.value = distance ? distance : 20;
        }
      });
    };

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

        lineAnimation();

        callBackParams.next = tabName.value[tabIndex.value];
        callBackParams.value = item;

        emit('change', callBackParams);
      } else {
        handClose();
        emit('update:modelValue');
      }
    };

    const changeRegionTab = (item: RegionData, index: number) => {
      prevTabIndex.value = tabIndex.value;
      if (getTabName(item, index)) {
        tabIndex.value = index;
        lineAnimation();
      }
    };

    const scrollTo = () => {
      const dom = scrollDom.value;
      const prev = prevTabIndex.value;
      const cur = scrollDis.value[tabIndex.value];

      dom?.scrollTop && (scrollDis.value[prev] = dom?.scrollTop);

      nextTick(() => {
        dom?.scrollTo({
          top: cur,
          behavior: 'auto'
        });
      });
    };

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

    const initAddress = () => {
      selectedRegion.value = [];
      tabIndex.value = 0;
      lineAnimation();
    };

    // 手动关闭 点击叉号(cross)，或者蒙层(mask)
    const handClose = (type = 'self') => {
      closeWay.value = type == 'cross' ? 'cross' : 'self';
      showPopup.value = false;
    };

    const clickOverlay = () => {
      closeWay.value = 'mask';
    };

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
      showPopup,
      privateType,
      tabIndex,
      tabName,
      selectedRegion,
      switchModule,
      closeWay,
      close,
      getTabName,
      nextAreaList,
      regionLine,
      tabRegion,
      lineDistance,
      changeRegionTab,
      selectedExist,
      clickOverlay,
      handClose,
      handleElevatorItem,
      initCustomSelected,
      ...toRefs(props),
      translate,
      regionList,
      transformData,
      scrollDom
    };
  }
});
</script>
