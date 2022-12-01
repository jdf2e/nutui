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
        <view class="arrow-back" @click="switchModule">
          <nut-icon
            v-bind="$attrs"
            :name="backBtnIcon"
            color="#cccccc"
            v-show="type == 'exist' && privateType == 'custom' && backBtnIcon"
          ></nut-icon>
        </view>

        <view class="nut-address__header__title">
          {{
            privateType == 'custom'
              ? customAddressTitle || translate('selectRegion')
              : existAddressTitle || translate('deliveryTo')
          }}
        </view>

        <view class="arrow-close" @click="handClose('cross')">
          <nut-icon v-bind="$attrs" v-if="closeBtnIcon" :name="closeBtnIcon" color="#cccccc" size="18px"></nut-icon>
        </view>
      </view>

      <!-- 请选择 -->
      <view class="custom-address" v-if="['custom', 'custom2'].includes(privateType)">
        <view class="nut-address-region-tab" ref="tabRegion">
          <view
            :class="['tab-item', index == tabIndex ? 'active' : '']"
            v-for="(item, index) in selectedRegion"
            :key="index"
            @click="changeRegionTab(item, index)"
          >
            <view>{{ getTabName(item, index) }} </view>
          </view>
          <view class="active tab-item" v-if="tabIndex == selectedRegion.length">
            <view>{{ getTabName(null, selectedRegion.length) }} </view>
          </view>

          <view class="region-tab-line" ref="regionLine" :style="{ left: lineDistance + 'px' }"></view>
        </view>

        <view class="region-con" v-if="privateType == 'custom'">
          <ul class="region-group">
            <li
              v-for="(item, index) in regionList"
              :key="index"
              :class="['region-item', selectedRegion[tabIndex]?.id == item.id ? 'active' : '']"
              @click="nextAreaList(item)"
            >
              <div>
                <component
                  :is="renderIcon(selectedIcon)"
                  v-bind="$attrs"
                  v-if="selectedRegion[tabIndex]?.id == item.id"
                ></component>
                {{ item.name }}
              </div>
            </li>
          </ul>
        </view>

        <view class="elevator-group" v-else>
          <nut-elevator
            :height="height"
            :index-list="transformData(regionList)"
            @click-item="handleElevatorItem"
          ></nut-elevator>
        </view>
      </view>

      <!-- 配送至 -->
      <view class="exist-address" v-else>
        <div class="exist-address-group">
          <ul class="exist-ul">
            <li
              :class="['exist-item', item.selectedAddress ? 'active' : '']"
              v-for="(item, index) in existAddress"
              :key="index"
              @click="selectedExist(item)"
            >
              <component
                :is="renderIcon(item.selectedAddress ? selectedIcon : defaultIcon)"
                v-bind="$attrs"
              ></component>
              <div class="exist-item-info">
                <div class="exist-item-info-name" v-if="item.name">{{ item.name }}</div>
                <div class="exist-item-info-phone" v-if="item.phone">{{ item.phone }}</div>
                <div class="exist-item-info-bottom">
                  <view>
                    {{ item.provinceName + item.cityName + item.countyName + item.townName + item.addressDetail }}
                  </view>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="choose-other" @click="switchModule" v-if="isShowCustomAddress">
          <div class="btn">{{ customAndExistTitle || translate('chooseAnotherAddress') }}</div>
        </div>
      </view>

      <slot name="bottom"></slot>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { reactive, ref, toRefs, watch, nextTick, computed, Ref, h } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { popupProps } from '../popup/props';
import Icon from '../icon/index.vue';
const { componentName, create, translate } = createComponent('address');
interface RegionData {
  name: string;
  id: number | string;
  [key: string]: any;
}
interface CustomRegionData {
  title: string;
  list: any[];
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
    },
    existAddress: {
      type: Array,
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
    defaultIcon: {
      type: String,
      default: 'location2'
    },
    selectedIcon: {
      type: String,
      default: 'Check'
    },
    closeBtnIcon: {
      type: String,
      default: 'circle-close'
    },
    backBtnIcon: {
      type: String,
      default: 'left'
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
    const tabName = ref(['province', 'city', 'country', 'town']);

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

    const renderIcon = (n: string) => {
      return h(Icon, {
        class: `${componentName}-select-icon`,
        type: 'self',
        size: '13px',
        name: n
      });
    };

    const transformData = (data: RegionData[]) => {
      if (!Array.isArray(data)) throw new TypeError('params muse be array.');

      if (!data.length) return [];

      data.forEach((item: RegionData) => {
        if (!item.title) {
          console.error('[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .');
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
            list: [].concat(item)
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
          let arr: [] = [];
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
      if (getTabName(item, index)) {
        tabIndex.value = index;
        lineAnimation();
      }
    };

    const selectedExist = (item: RegionData) => {
      const copyExistAdd = props.existAddress as AddressList[];
      let prevExistAdd = {};

      copyExistAdd.forEach((list: AddressList) => {
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
      if (!props.closeBtnIcon) return;
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
      renderIcon
    };
  }
});
</script>
