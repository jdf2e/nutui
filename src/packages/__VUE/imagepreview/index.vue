<template>
  <nut-popup
    pop-class="nut-imagepreview-custom-pop"
    v-model:visible="showPop"
    :teleportDisable="teleportDisable"
    :teleport="teleport"
    @closed="onClose"
    lock-scroll
  >
    <view class="nut-imagepreview" ref="swipeRef">
      <nut-swiper
        v-if="showPop"
        :auto-play="autoplay"
        class="nut-imagepreview-swiper"
        :loop="isLoop"
        :is-preventDefault="false"
        direction="horizontal"
        @change="setActive"
        :init-page="initNo"
        :pagination-visible="paginationVisible"
        :pagination-color="paginationColor"
      >
        <image-preview-item
          v-for="(item, index) in mergeImages"
          :key="index"
          :video="index < videos.length ? item : {}"
          :image="index >= videos.length ? item : {}"
          :rootHeight="rootHeight"
          :rootWidth="rootWidth"
          :show="showPop"
          :init-no="active + 1"
          @close="onClose"
          :maxZoom="maxZoom"
          :minZoom="minZoom"
        ></image-preview-item>
      </nut-swiper>
    </view>
    <view class="nut-imagepreview-index" v-if="showIndex"> {{ active + 1 }} / {{ mergeImages.length }} </view>
    <view :class="iconClasses" @click="onClose" v-if="closeable"
      ><nut-icon :name="closeIcon" v-bind="$attrs" color="#ffffff"></nut-icon
    ></view>
  </nut-popup>
</template>
<script lang="ts">
import { toRefs, reactive, watch, onMounted, ref, computed } from 'vue';
import type { PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';

import { isArray } from '@/packages/utils/util';
import { funInterceptor, Interceptor } from '@/packages/utils/util';
import { useRect } from '@/packages/utils/useRect';
import ImagePreviewItem from './imagePreviewItem.vue';
import { ImageInterface, baseProps } from './types';
const { create } = createComponent('imagepreview');

export default create({
  props: {
    ...baseProps,
    images: { type: Array as PropType<ImageInterface[]>, default: () => [] },
    videos: { type: Array, default: () => [] },
    contentClose: { type: Boolean, default: true },
    paginationVisible: { type: Boolean, default: false },
    paginationColor: { type: String, default: '#fff' },
    autoplay: { type: [Number, String], default: 0 },
    teleport: { type: [String, Element], default: 'body' },
    teleportDisable: { ype: Boolean, default: false },
    closeable: {
      type: Boolean,
      default: false
    },
    closeIcon: {
      type: String,
      default: 'circle-close'
    },
    closeIconPosition: {
      type: String,
      default: 'top-right' // top-right  top-left
    },
    beforeClose: Function as PropType<Interceptor>,
    isLoop: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close', 'change'],
  components: {
    ImagePreviewItem: ImagePreviewItem
  },

  setup(props, { emit }) {
    const swipeRef = ref();

    const state = reactive({
      showPop: props.show,
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    });

    const iconClasses = computed(() => {
      const pre = 'nut-imagepreview-close';
      const iconn = props.closeIconPosition == 'top-right' ? `${pre}-right` : `${pre}-left`;
      return `nut-imagepreview-close-icon ${iconn}`;
    });

    const mergeImages = computed(() => {
      if (isArray(props.videos)) {
        return ([] as any).concat(props.videos).concat(props.images);
      }
      return props.images;
    });
    // 设置当前选中第几个
    const setActive = (active: number) => {
      if (active !== state.active) {
        state.active = active;
        emit('change', state.active);
      }
    };

    const onClose = () => {
      funInterceptor(props.beforeClose, {
        args: [state.active],
        done: () => closeDone()
      });
    };
    // 执行关闭
    const closeDone = () => {
      state.showPop = false;
      emit('close');
    };

    const init = () => {
      if (swipeRef.value) {
        const rect = useRect(swipeRef.value);
        state.rootHeight = rect.height;
        state.rootWidth = rect.width;
      }
    };

    watch(
      () => props.show,
      (val) => {
        state.showPop = val;
        init();
      }
    );

    watch(
      () => props.initNo,
      (val) => {
        if (val != state.active) setActive(val);
      }
    );

    onMounted(() => {
      setActive(props.initNo);
    });

    return {
      swipeRef,
      ...toRefs(state),
      onClose,
      mergeImages,
      setActive,
      iconClasses
    };
  }
});
</script>
