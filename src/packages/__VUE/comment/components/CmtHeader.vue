<template>
  <view>
    <view class="nut-comment-header" @click="handleClick" v-if="info">
      <view class="nut-comment-header__user">
        <view class="nut-comment-header__user-avter">
          <img v-if="info.avatar" :src="info.avatar" />
        </view>

        <view :class="[`nut-comment-header__user-${type}`]" v-if="type == 'default'">
          <view :class="[`nut-comment-header__user-${type}-name`]">
            <span>{{ info.nickName }}</span>
            <slot name="labels"></slot>
          </view>

          <view class="nut-comment-header__user-score">
            <nut-rate v-model="info.score" icon-size="10" spacing="5" readonly @change="handleClick" />
          </view>
        </view>

        <view :class="[`nut-comment-header__user-${type}`]" v-else>
          <span :class="[`nut-comment-header__user-${type}-name`]">{{ info.nickName }}</span>
          <slot name="labels"></slot>
        </view>
      </view>
      <view class="nut-comment-header__time" v-if="info.time">{{ info.time }}</view>
    </view>
    <view :class="[`nut-comment-header__${type}-score`]" v-if="type == 'complex'">
      <nut-rate v-model="info.score" icon-size="12" spacing="3" readonly />
      <i :class="[`nut-comment-header__${type}-score-i`]"></i>
      <view :class="[`nut-comment-header__${type}-score-size`]">{{ info.size }}</view>
    </view>
  </view>
</template>
<script lang="ts">
import { ref, watch, onMounted } from 'vue';

import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('comment-header');

export default create({
  props: {
    type: {
      type: String,
      default: 'default' // default，complex
    },
    info: {
      type: Object,
      default: () => {}
    },
    labels: {
      type: Function,
      default: () => ''
    }
  },
  components: {},
  emits: ['handleClick'],

  setup(props, { emit }) {
    const handleClick = () => {
      emit('handleClick');
    };

    return { handleClick };
  }
});
</script>
