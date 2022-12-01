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
            <view :class="{ 'region-tab-line-mini': true, active: index == tabIndex }"></view>
          </view>
          <view class="active tab-item" v-if="tabIndex == selectedRegion.length">
            <view>{{ getTabName(null, selectedRegion.length) }} </view>
            <view class="region-tab-line-mini active"></view>
          </view>
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
                <nut-icon
                  class="region-item-icon"
                  type="self"
                  v-bind="$attrs"
                  :name="selectedIcon"
                  size="13px"
                  v-if="selectedRegion[tabIndex]?.id == item.id"
                ></nut-icon
                >{{ item.name }}
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
      <view class="exist-address" v-else-if="privateType == 'exist'">
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
                v-bind="$attrs"
                :name="item.selectedAddress ? selectedIcon : defaultIcon"
                size="13px"
              ></nut-icon>
              <div class="exist-item-info">
                <div class="exist-item-info-top" v-if="item.name && item.phone">
                  <div class="exist-item-info-name">{{ item.name }}</div>
                  <div class="exist-item-info-phone">{{ item.phone }}</div>
                </div>
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
        <template v-if="!isShowCustomAddress">
          <slot name="bottom"></slot>
        </template>
      </view>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { reactive, ref, toRefs, watch, computed } from 'vue';
import { popupProps } from '../popup/props';
import { createComponent } from '@/packages/utils/create';

const { create, componentName, translate } = createComponent('address');

interface RegionData {
  id: string;
  name: string;
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
      default: ''
    },
    customAndExistTitle: {
      type: String,
      default: ''
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
    const tabName = ref(['province', 'city', 'country', 'town']);
    const tabNameDefault = ref(['']);

    const isCustom2 = computed(() => props.type === 'custom2');

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
          console.error('[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .');
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
            list: [].concat(item)
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
      if (!props.closeBtnIcon) return;

      closeWay.value = type == 'cross' ? 'cross' : 'self';

      showPopup.value = false;
    };

    // 点击遮罩层关闭
    const clickOverlay = () => {
      closeWay.value = 'mask';
    };

    // 切换下一级列表
    const nextAreaList = (item: RegionData | string) => {
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

        callBackParams.next = tabName.value[tabIndex.value];
        callBackParams.value = item;

        emit('change', callBackParams);
      } else {
        handClose();
        emit('update:modelValue');
      }
    };
    //切换地区Tab
    const changeRegionTab = (item: RegionData, index: number) => {
      if (getTabName(item, index)) {
        tabIndex.value = index;
      }
    };

    // 选择现有地址
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
    // 初始化
    const initAddress = () => {
      selectedRegion.value = [];
      tabIndex.value = 0;
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

    const handleElevatorItem = (key: string, item: RegionData | string) => {
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
      transformData
    };
  }
});
</script>
