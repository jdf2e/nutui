<template>
  <nut-popup
    position="bottom"
    @close="close"
    @click-overlay="clickOverlay"
    @open="closeWay = 'self'"
    v-model:show="showPopup"
  >
    <view class="nut-address">
      <view class="title">
        <view
          class="arrow-back"
          @click="switchModule"
          v-if="showModule == 'custom' && type == 'exist' && backBtnIcon"
          ><nut-icon name="left" color="#CCCCCC"></nut-icon
        ></view>
        <view class="arrow-back" v-else></view>

        <view v-if="type == 'custom'">{{ customAddressTitle }}</view>
        <view v-if="type == 'exist'">{{ existAddressTitle }}</view>

        <view class="arrow-close" @click="handClose('cross')"
          ><nut-icon name="circle-close" color="#CCCCCC" size="18px"></nut-icon
        ></view>
      </view>

      <!-- 请选择 -->
      <view class="custom-address" v-if="showModule == 'custom'">
        <view class="region-tab">
          <view
            class="tab-item"
            :class="[index == tabIndex ? 'active' : '']"
            v-for="(item, key, index) in selectedRegion"
            :key="index"
            :ref="'tab-item-' + key"
            @click="changeRegionTab(item, key, index)"
            ><span>{{ getTabName(item, index) }}</span></view
          >

          <view class="region-tab-line" ref="regionLine"></view>
        </view>

        <view class="region-con">
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
                type="self"
                name="circle-close"
                v-if="selectedRegion[tabName[tabIndex]].id == item.id"
              ></nut-icon
              >{{ item.name }}
            </li>
          </ul>
        </view>
      </view>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { reactive, ref, toRefs, watch, nextTick } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('address');

export default create({
  props: {
    show: {
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
      default: ''
    },
    selectedIcon: {
      // 地址选择列表前 - 选中的图标
      type: String,
      default: ''
    },
    closeBtnIcon: {
      // 关闭弹框按钮 icon
      type: String,
      default: ''
    },
    backBtnIcon: {
      // 选择其他地址左上角返回 icon
      type: String,
      default: ''
    }
  },
  components: {},
  emits: [
    'update:show',
    'onChange',
    'on-change',
    'selected',
    'close',
    'closeMask',
    'close-mask',
    'switchModule',
    'switch-module'
  ],

  setup(props, { emit }) {
    console.log('componentName', componentName);

    const { existAddress, isShowCustomAddress, type, closeBtnIcon } = toRefs(
      props
    );

    let showPopup = ref(false);
    let showModule = ref('exist'); //展示 exist 还是 custom 主要用于’选择其他地址‘
    let tabIndex = ref(0);
    const tabName = ref(['province', 'city', 'country', 'town']);

    let regionList = reactive({
      province: props.province,
      city: props.city,
      country: props.country,
      town: props.town
    });

    let selectedRegion = reactive({
      province: {},
      city: {},
      country: {},
      town: {},
      addressIdStr: '',
      addressStr: ''
    }); //已选择的 省、市、县、镇

    let selectedExistAddress = reactive({}); // 当前选择的地址

    let closeWay = ref('self');

    //获取已选地区列表名称
    // const getTabName = (item, index)=>{
    //   if (item.name) return item.name;

    //   if (tabIndex.value < index) {
    //     return item.name;
    //   } else {
    //     return '请选择';
    //   }
    // }
    // 切换下一级列表
    // const nextAreaList = (item) => {
    //   // onchange 接收的参数
    //   const calBack = {
    //     custom: tabName.value[tabIndex.value]
    //   };

    //   selectedRegion[tabName[tabIndex.value]] = item;

    //   for (let i = tabIndex.value; i < tabIndex.value - 1; i++) {
    //     selectedRegion[tabName[i + 1]] = {};
    //   }

    //   if (tabIndex.value < 3) {
    //     tabIndex.value = tabIndex.value + 1;
    //     lineAnimation();

    //     // 切换下一个
    //     calBack.next = tabName[tabIndex.value];
    //     calBack.value = item;
    //     emit('onChange', calBack);
    //     emit('on-change', calBack);
    //   } else {
    //     handClose();
    //   }
    // }
    //切换地区Tab
    // const changeRegionTab = (item, key, index) => {
    //   tabIndex.value = index;
    //   lineAnimation();
    // }
    // 移动下面的红线
    // const lineAnimation = () => {
    //   const name = 'tab-item-' + tabName[tabIndex.value];
    //   nextTick(() => {
    //     // if (this.$refs[name] && this.$refs[name][0]) {
    //     //   const distance = this.$refs[name][0].offsetLeft;
    //     //   TweenMax.to(this.$refs.regionLine, 0.5, { left: distance });
    //     // }
    //   });
    // }

    // 选择现有地址
    // const selectedExist = (item) => {
    //   let copyExistAdd = existAddress;
    //   let prevExistAdd = {};

    //   copyExistAdd.forEach((list, index) => {
    //     if (list.selectedAddress) {
    //       prevExistAdd = list;
    //     }
    //     list.selectedAddress = false;
    //   });

    //   item.selectedAddress = true;

    //   selectedExistAddress = item;

    //   emit('selected', prevExistAdd, item, copyExistAdd);

    //   handClose();
    // }

    // 关闭
    const close = () => {
      const that = this;

      const resCopy = Object.assign({}, selectedRegion);

      const res = {
        type: showModule.value,
        data: {}
      };

      if (showModule.value == 'custom') {
        const { province, city, country, town } = resCopy;

        resCopy.addressIdStr = [
          (province as any).id || 0,
          (city as any).id || 0,
          (country as any).id || 0,
          (town as any).id || 0
        ].join('_');
        resCopy.addressStr = [
          (province as any).name,
          (city as any).name,
          (country as any).name,
          (town as any).name
        ].join('');
        res.data = resCopy;
      } else {
        res.data = selectedExistAddress;
      }

      // initAddress();

      if (closeWay.value == 'self') {
        emit('close', res);
      } else {
        emit('closeMask', { closeWay: closeWay });
        emit('close-mask', { closeWay: closeWay });
      }
    };
    // 手动关闭 点击叉号(cross)，或者蒙层(mask)
    // const handClose = (type = 'self') => {
    //   if (!closeBtnIcon) return;

    //   closeWay.value = type == 'cross' ? 'cross' : 'self';

    //   showPopup.value = false;
    // }
    // 点击遮罩层关闭
    const clickOverlay = () => {
      closeWay.value = 'mask';
    };
    // 初始化
    // const initAddress = () => {
    //   for (let i = 0; i < tabName.value.length; i++) {
    //     selectedRegion[tabName[i]] = {};
    //   }
    //   tabIndex.value = 0;
    //   lineAnimation();
    // }
    // 选择其他地址
    const switchModule = () => {
      if (showModule.value == 'exist') {
        showModule.value = 'custom';
      } else {
        showModule.value = 'exist';
      }

      // initAddress();

      emit('switchModule', { type: showModule.value });
      emit('switch-module', { type: showModule.value });
    };

    watch(
      () => props.show,
      value => {
        showPopup.value = value;
      }
    );

    watch(
      () => showPopup.value,
      value => {
        if (!value) {
          emit('update:show', false);
        } else {
          console.log('打开地址弹框');
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
        //  existAddress.value = newVal;
        // value.forEach((item, index) => {
        //   if (item.selectedAddress) {
        //     this.selectedExistAddress = item;
        //   }
        // });
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
      ...toRefs(props)
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
