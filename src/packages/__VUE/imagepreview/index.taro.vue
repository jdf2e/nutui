<template>
  <view class="nut-imagepreview">
    <nut-popup pop-class="custom-pop" v-model:visible="showPop" @click="closePop">
      <swiper
        v-if="showPop"
        :autoplay="true"
        :interval="3000"
        class="nut-imagepreview-swiper"
        :circular="true"
        :onChange="slideChangeEnd"
      >
        <swiper-item v-for="(item, index) in images" :key="index">
          <img :src="item.imgSrc" class="nut-imagepreview-img" />
        </swiper-item>
      </swiper>
      <view class="nut-imagepreview-index"> {{ active }} / {{ images.length }} </view>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { toRefs, reactive, watch } from 'vue';
import { createComponent } from '../../utils/create';
import Popup from '../popup/index.taro.vue';
const { componentName, create } = createComponent('imagepreview');

export default create({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  components: {
    [Popup.name]: Popup
  },

  setup(props, { emit }) {
    const { value, images } = toRefs(props);

    const state = reactive({
      showPop: value,
      active: 1
    });

    const slideChangeEnd = function (page: any) {
      state.active = page.detail.current + 1;
    };

    const closePop = function () {
      state.showPop = false;
      state.active = 1;
      emit('close');
    };

    watch(
      () => props.show,
      (val) => {
        state.showPop = val;
      }
    );

    return {
      ...toRefs(state),
      slideChangeEnd,
      closePop
    };
  }
});
</script>
