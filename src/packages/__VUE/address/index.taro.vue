<template>
  <nut-popup
    v-model:visible="showPopup"
    position="bottom"
    :lock-scroll="lockScroll"
    :catch-move="lockScroll"
    :round="round"
    :z-index="zIndex"
    @close="close"
    @click-overlay="clickOverlay"
    @open="closeWay = 'self'"
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
      <view v-if="['custom', 'custom2'].includes(privateType)" class="nut-address__custom">
        <view ref="tabRegion" class="nut-address__region">
          <view
            v-for="(item, index) in selectedRegion"
            :key="index"
            :class="['nut-address__region-item', index == tabIndex ? 'active' : '']"
            @click="changeRegionTab(item, index)"
          >
            <view>{{ getTabName(item, index) }} </view>
            <view :class="{ 'nut-address__region-line--mini': true, active: index == tabIndex }"></view>
          </view>
          <view v-if="tabIndex == selectedRegion.length" class="active nut-address__region-item">
            <view>{{ getTabName(null, selectedRegion.length) }} </view>
            <view class="nut-address__region-line--mini active"></view>
          </view>
        </view>

        <view v-if="privateType == 'custom'" class="nut-address__detail">
          <div class="nut-address__detail-list">
            <nut-scroll-view
              :scroll-y="true"
              :style="{ height: '100%' }"
              :scroll-top="scrollTop"
              @scroll="scrollChange"
            >
              <div
                v-for="(item, index) in regionList"
                :key="index"
                :class="['nut-address__detail-item', selectedRegion[tabIndex]?.id == item.id ? 'active' : '']"
                @click="nextAreaList(item)"
              >
                <div>
                  <slot v-if="selectedRegion[tabIndex]?.id == item.id" name="icon">
                    <Check class="nut-address-select-icon" width="13px"></Check> </slot
                  >{{ item.name }}
                </div>
              </div>
            </nut-scroll-view>
          </div>
        </view>

        <view v-else class="nut-address__elevator-group">
          <nut-elevator
            :height="height"
            :index-list="transformData(regionList)"
            @click-item="handleElevatorItem"
          ></nut-elevator>
        </view>
      </view>

      <!-- 配送至 -->
      <view v-else-if="privateType == 'exist'" class="nut-address__exist">
        <div class="nut-address__exist-group">
          <ul class="nut-address__exist-group-list">
            <li
              v-for="(item, index) in existAddress"
              :key="index"
              class="nut-address__exist-group-item"
              :class="[item.selectedAddress ? 'active' : '']"
              @click="selectedExist(item)"
            >
              <slot v-if="!item.selectedAddress" name="unselected-icon">
                <Location2 class="nut-address-select-icon" width="13px"></Location2>
              </slot>

              <slot v-if="item.selectedAddress" name="icon">
                <Check class="nut-address-select-icon" width="13px"></Check>
              </slot>

              <div class="nut-address__exist-item-info">
                <div v-if="item.name && item.phone" class="nut-address__exist-item-info-top">
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
        <div v-if="isShowCustomAddress" class="nut-address__exist-choose" @click="switchModule">
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
import { Location, Location2, Check, Close, Left } from '@nutui/icons-vue-taro';
import { popupProps } from '../popup/props';
import { AddressData, CustomRegionData, existRegionData } from './type';
import { createComponent } from '@/packages/utils/create';
import NutPopup from '../popup/index.taro.vue';
import NutElevator from '../elevator/index.taro.vue';
import NutScrollView from '../scroll-view/index.taro.vue';
import { useLocale } from '@/packages/utils';

const cN = 'NutAddress';
const { create } = createComponent('address');

export default create({
  components: {
    NutPopup,
    NutElevator,
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
      type: Array as PropType<AddressData[]>,
      default: () => []
    },
    city: {
      type: Array as PropType<AddressData[]>,
      default: () => []
    }, // 市
    country: {
      type: Array as PropType<AddressData[]>,
      default: () => []
    }, // 县
    town: {
      type: Array as PropType<AddressData[]>,
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
  emits: ['update:visible', 'update:modelValue', 'type', 'change', 'selected', 'close', 'closeMask', 'switchModule'],

  setup(props, { emit }) {
    const translate = useLocale(cN);
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
    const regionData = reactive<Array<AddressData[]>>([]);

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

    const transformData = (data: AddressData[]) => {
      if (!Array.isArray(data)) throw new TypeError('params muse be array.');

      if (!data.length) return [];

      data.forEach((item: AddressData) => {
        if (!item.title) {
          console.warn('[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .');
          return;
        }
      });

      const newData: CustomRegionData[] = [];

      data = data.sort((a: AddressData, b: AddressData) => {
        return a.title.localeCompare(b.title);
      });

      data.forEach((item: AddressData) => {
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

    let selectedRegion = ref<AddressData[]>([]);

    let selectedExistAddress = reactive({}); // 当前选择的地址

    const closeWay = ref('self');

    const lineDistance = ref(20);

    // 设置选中省市县
    const initCustomSelected = () => {
      regionData[0] = props.province || [];
      regionData[1] = props.city || [];
      regionData[2] = props.country || [];
      regionData[3] = props.town || [];

      const defaultValue = props.modelValue;
      const num = defaultValue.length;
      if (num > 0) {
        tabIndex.value = num - 1;
        if (regionList.value.length == 0) {
          tabIndex.value = 0;
          return;
        }
        for (let index = 0; index < num; index++) {
          let arr: AddressData[] = regionData[index];
          selectedRegion.value[index] = arr.filter((item: AddressData) => item.id == defaultValue[index])[0];
        }
        scrollTo();
      }
    };

    const getTabName = (item: AddressData | null, index: number) => {
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
    const nextAreaList = (item: AddressData) => {
      const tab = tabIndex.value;
      prevTabIndex.value = tabIndex.value;
      const callBackParams: {
        next?: string;
        value?: AddressData;
        custom: string;
      } = {
        custom: tabName.value[tab]
      };

      selectedRegion.value[tab] = item;

      // 删除右边已选择数据
      selectedRegion.value.splice(tab + 1, selectedRegion.value.length - (tab + 1));

      callBackParams.value = item;

      if (regionData[tab + 1]?.length > 0) {
        tabIndex.value = tab + 1;
        callBackParams.next = tabName.value[tabIndex.value];
        scrollTo();
      } else {
        handClose();
        emit('update:modelValue');
      }
      emit('change', callBackParams);
    };
    //切换地区Tab
    const changeRegionTab = (item: AddressData, index: number) => {
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
        emit('closeMask', { closeWay: closeWay });
      }

      emit('update:visible', false);
    };

    // 选择其他地址
    const switchModule = () => {
      const type = privateType.value;
      privateType.value = type == 'exist' ? 'custom' : 'exist';
      initAddress();
      emit('switchModule', { type: privateType.value });
    };

    const handleElevatorItem = (key: string, item: AddressData) => {
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
