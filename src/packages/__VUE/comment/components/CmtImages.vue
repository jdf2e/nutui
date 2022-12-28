<template>
  <view :class="`nut-comment-images nut-comment-images--${type}`">
    <!-- videos -->
    <view
      class="nut-comment-images__item nut-comment-images__item--video"
      v-for="(itV, index) in videos"
      :key="itV.id"
      @click="showImages('video', index)"
    >
      <img :src="itV.mainUrl" />
      <view class="nut-comment-images__play"></view>
    </view>
    <!-- images -->
    <template v-for="(itI, index) in images" :key="itI.id">
      <view
        class="nut-comment-images__item nut-comment-images__item--imgbox"
        v-if="(type == 'multi' && videos.length + index < 9) || type != 'multi'"
        @click="showImages('img', index + videos.length)"
      >
        <img :src="itI.smallImgUrl ? itI.smallImgUrl : itI.imgUrl" />

        <view
          class="nut-comment-images__mask"
          v-if="type == 'multi' && totalImages.length > 9 && videos.length + index > 7"
        >
          <span>共 {{ totalImages.length }} 张</span>
          <Right style="width: 12px"></Right>
        </view>
      </view>
    </template>
  </view>
</template>
<script lang="ts">
import { ref, watch, onMounted, PropType } from 'vue';

import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('comment-images');
import { Right } from '@nutui/icons-vue';

interface VideosType {
  id: number | string;
  mainUrl: string;
  videoUrl: string;
}
interface ImagesType {
  smallImgUrl: string;
  bigImgUrl: string;
  imgUrl: string;
}
export default /* @__PURE__ */ create({
  props: {
    type: {
      type: String,
      default: 'one' // one multi
    },
    videos: {
      type: Array as PropType<VideosType[]>,
      default: () => []
    },
    images: {
      type: Array as PropType<ImagesType[]>,
      default: () => []
    }
  },
  components: { Right },
  emits: ['click', 'clickImages'],

  setup(props, { emit }) {
    const isShowImage = ref(false);
    const initIndex = ref(1);
    const totalImages = ref<(VideosType | ImagesType)[]>([]);

    watch(
      () => [props.videos, props.images],
      (value) => {
        if (value[0].length > 0) {
          value[0].forEach((el: any) => {
            el.type = 'video';
          });
        }
        totalImages.value = (value[0] as any).concat(value[1]);
      },
      { deep: true }
    );

    onMounted(() => {
      if (props.videos.length > 0) {
        props.videos.forEach((el: any) => {
          el.type = 'video';
        });
      }
      totalImages.value = (props.videos as any).concat(props.images);
    });

    const showImages = (type: string, index: string | number) => {
      const { videos, images } = props;

      const i = type == 'img' ? (index as number) - videos.length : index;
      emit('clickImages', {
        type,
        index: i,
        value: type == 'img' ? images[i as number] : videos[i as number]
      });
    };

    return { isShowImage, initIndex, showImages, totalImages };
  }
});
</script>
