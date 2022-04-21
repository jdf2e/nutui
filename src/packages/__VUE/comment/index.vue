<template>
  <view :class="classes" v-if="info && Object.keys(info)">
    <!-- 根据展示信息的多少，分为3种展示风格：simple，base，complex -->
    <comment-header :type="headerType" :info="info" :labels="labels" @handleClick="handleClick">
      <template #labels>
        <slot name="comment-labels"></slot>
      </template>
    </comment-header>

    <slot name="feature"></slot>

    <view
      class="nut-comment__main"
      :style="`-webkit-line-clamp:${conEllipsis}`"
      @click="handleClick"
      v-html="info.content.replace(/\n/g, '<br>')"
    ></view>

    <comment-images :images="images" :videos="videos" :type="imagesRows" @clickImages="clickImages"></comment-images>

    <view class="nut-comment__follow" v-if="follow && follow.days > 0" @click="handleClick">
      <view class="nut-comment__follow-title"
        ><nut-icon size="14" name="joy-smile" />{{ translate('additionalReview', follow.days) }}</view
      >
      <view class="nut-comment__follow-com">{{ follow.content }}</view>
      <view class="nut-comment__follow-img" v-if="follow.images && follow.images.length > 0"
        >{{ translate('additionalImages', follow.images.length) }} <nut-icon size="12" name="right"
      /></view>
    </view>

    <comment-bottom
      :type="headerType"
      :info="info"
      :operation="operation"
      @clickOperate="clickOperate"
      @handleClick="handleClick"
    ></comment-bottom>

    <slot name="comment-shop-reply"></slot>
  </view>
</template>
<script lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('comment');

import CommentHeader from './components/CmtHeader.vue';
import CommentImages from './components/CmtImages.vue';
import CommentBottom from './components/CmtBottom.vue';

export default create({
  props: {
    headerType: {
      type: String,
      default: 'default' //头部展示风格 default，complex
    },

    imagesRows: {
      type: String,
      default: 'one' // 'one'  'multi'
    },

    ellipsis: {
      type: [String, Number, Boolean],
      default: false
    },

    videos: {
      type: Array,
      default: () => []
    },
    images: {
      type: Array,
      default: () => []
    },

    info: {
      type: Object,
      default: () => {}
    },

    follow: {
      type: Object,
      default: () => {}
    },

    labels: {
      type: Function,
      default: () => ''
    },

    operation: {
      type: Array,
      default: ['replay', 'like', 'more']
    }
  },
  components: {
    CommentHeader,
    CommentImages,
    CommentBottom
  },
  emits: ['click', 'clickImages', 'clickOperate'],

  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const conEllipsis = computed(() => {
      if (props.ellipsis) return props.ellipsis;

      return props.headerType == 'complex' ? 6 : 2;
    });
    const clickOperate = (t: string) => {
      emit('clickOperate', t);
    };

    const handleClick = () => {
      emit('click', props.info);
    };

    const clickImages = (value: any) => {
      emit('clickImages', value);
    };

    return { classes, conEllipsis, clickOperate, handleClick, clickImages, translate };
  }
});
</script>
