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
      <view class="custom-address" v-if="privateType == 'custom'">
        <view class="region-tab" ref="tabRegion">
          <view
            :class="{ 'tab-item': true, active: index == tabIndex, [tabName[index]]: true }"
            v-for="(item, key, index) in selectedRegion"
            :key="index"
            @click="changeRegionTab(item, key, index)"
          >
            <view>{{ getTabName(item, index) }} </view>
          </view>

          <view class="region-tab-line" ref="regionLine" :style="{ left: lineDistance + 'px' }"></view>
        </view>

        <view class="region-con">
          <ul class="region-group">
            <li
              v-for="(item, index) in regionList[tabName[tabIndex]]"
              :key="index"
              :class="['region-item', selectedRegion[tabName[tabIndex]].id == item.id ? 'active' : '']"
              @click="nextAreaList(item)"
            >
              <nut-icon
                class="region-item-icon"
                type="self"
                v-bind="$attrs"
                :name="selectedIcon"
                size="13px"
                v-if="selectedRegion[tabName[tabIndex]].id == item.id"
              ></nut-icon
              >{{ item.name }}
            </li>
          </ul>
        </view>
      </view>

      <!-- 请选择 -->
      <view class="custom-address" v-else-if="privateType == 'custom2'">
        <view class="region-tab" ref="tabRegion">
          <view
            :class="{ 'tab-item': true, active: index == tabIndex, [tabName[index]]: true }"
            v-for="(item, key, index) in selectedRegion"
            :key="index"
            @click="changeRegionTab(item, key, index)"
          >
            <view>{{ getTabName(item, index) }}</view>
          </view>
          <view class="region-tab-line" ref="regionLine" :style="{ left: lineDistance + 'px' }"></view>
        </view>
        <view class="elevator-group">
          <nut-elevator
            :height="height"
            :index-list="regionList[tabName[tabIndex]]"
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
import { reactive, ref, toRefs, watch, computed, onMounted } from 'vue';
import { popupProps } from '../popup/index.taro.vue';
import { createComponent } from '@/packages/utils/create';
import Taro from '@tarojs/taro';

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
    const tabNameDefault = ref(['']);

    const isCustom2 = computed(() => props.type === 'custom2');

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
          newData[index] = {
            title: item.title,
            list: newData[index].list.concat(item)
          };
        }
      });

      return newData;
    };

    const regionList = reactive({
      province: isCustom2.value ? transformData(props.province) : props.province,
      city: isCustom2.value ? transformData(props.city) : props.city,
      country: isCustom2.value ? transformData(props.country) : props.country,
      town: isCustom2.value ? transformData(props.town) : props.town
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

    onMounted(() => {
      customPlaceholder();
    });

    // 设置选中省市县
    const initCustomSelected = () => {
      // console.log(props.modelValue);
      if (props.modelValue.length > 0) {
        tabIndex.value = props.modelValue.length - 1;
        for (let index = 0; index < props.modelValue.length; index++) {
          if ((regionList as any)[tabName.value[index]].length == 0) {
            tabIndex.value = index - 1;
            break;
          } else {
            const val = props.modelValue[index];
            const arr: [] = (regionList as any)[tabName.value[index]];
            if (privateType.value == 'custom') {
              (selectedRegion as any)[tabName.value[index]] = arr.filter((item: RegionData) => item.id == val)[0];
            } else if (privateType.value == 'custom2') {
              let sumArr: any = [];
              arr.map((item) => {
                sumArr.push(...(item as any).list);
              });
              (selectedRegion as any)[tabName.value[index]] = sumArr.filter((item: RegionData) => item.id == val)[0];
            }
          }
        }
        lineAnimation();
      }
    };

    // 自定义‘请选择’文案
    const customPlaceholder = () => {
      let selectStr = translate('select');
      let typeD = Object.prototype.toString.call(props.columnsPlaceholder || selectStr);
      if (typeD == '[object String]') {
        tabNameDefault.value = new Array(4).fill(props.columnsPlaceholder || selectStr);
      } else if (typeD == '[object Array]') {
        tabNameDefault.value = new Array(4).fill('');
        tabNameDefault.value.forEach((val, index) => {
          if (props.columnsPlaceholder[index]) {
            tabNameDefault.value[index] = props.columnsPlaceholder[index];
          } else {
            tabNameDefault.value[index] = selectStr;
          }
        });
      }
    };

    //获取已选地区列表名称
    const getTabName = (item: RegionData, index: number) => {
      if (item.name) return item.name;

      if (tabIndex.value < index) {
        return item.name;
      } else {
        return tabNameDefault.value[index];
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
      setTimeout(() => {
        Taro.createSelectorQuery()
          .selectAll(`.${tabName.value[tabIndex.value]}`)
          .boundingClientRect((rects) => {
            // console.log(rects);
            (rects as any).forEach((rect) => {
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

      // for (let i = tabIndex.value; i < tabIndex.value - 1; i++) {
      //   (selectedRegion as any)[tabName.value[i + 1]] = {};
      // }
      for (let i = tabIndex.value; i < 4; i++) {
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
        emit('update:modelValue');
      }
    };
    //切换地区Tab
    const changeRegionTab = (item: RegionData, key: number, index: number) => {
      if (getTabName(item, index)) {
        tabIndex.value = index;
        lineAnimation();
      }
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
        data: {},
        type: privateType.value
      };

      if (privateType.value == 'custom' || privateType.value == 'custom2') {
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
        if (value == false) {
          close();
        } else {
          initCustomSelected();
        }
      }
    );

    watch(
      () => props.province,
      (value) => {
        regionList.province = isCustom2.value ? transformData(value) : value;
      }
    );
    watch(
      () => props.city,
      (value) => {
        regionList.city = isCustom2.value ? transformData(value) : value;
      }
    );
    watch(
      () => props.country,
      (value) => {
        regionList.country = isCustom2.value ? transformData(value) : value;
      }
    );
    watch(
      () => props.town,
      (value) => {
        regionList.town = isCustom2.value ? transformData(value) : value;
      }
    );

    watch(
      () => props.existAddress,
      (value) => {
        //  existAddress.value = value;
        value.forEach((item, index) => {
          if ((item as AddressList).selectedAddress) {
            selectedExistAddress = item as {};
          }
        });
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
      handleElevatorItem,
      ...toRefs(props),
      ...toRefs(tabItemRef),
      translate
    };
  }
});
</script>
