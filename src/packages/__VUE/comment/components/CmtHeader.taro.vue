<template>
  <view>
    <view v-if="info" class="nut-comment-header" @click="handleClick">
      <view class="nut-comment-header__user">
        <view class="nut-comment-header__user-avter">
          <img v-if="info.avatar" :src="info.avatar" />
        </view>

        <view v-if="type == 'default'" :class="[`nut-comment-header__user-${type}`]">
          <view :class="[`nut-comment-header__user-${type}-name`]">
            <span>{{ info.nickName }}</span>
            <slot name="labels"></slot>
          </view>

          <view class="nut-comment-header__user-score">
            <nut-rate v-model="info.score" size="12" spacing="5" readonly @change="handleClick" />
          </view>
        </view>

        <view v-else :class="[`nut-comment-header__user-${type}`]">
          <span :class="[`nut-comment-header__user-${type}-name`]">{{ info.nickName }}</span>
          <slot name="labels"></slot>
        </view>
      </view>
      <view v-if="info.time" class="nut-comment-header__time">{{ info.time }}</view>
    </view>
    <view v-if="type == 'complex'" :class="[`nut-comment-header__${type}-score`]">
      <nut-rate v-model="info.score" size="12" spacing="3" readonly />
      <i :class="[`nut-comment-header__${type}-score-i`]"></i>
      <view :class="[`nut-comment-header__${type}-score-size`]">{{ info.size }}</view>
    </view>
  </view>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('comment-header');
import NutRate from '../../rate/index.taro.vue';

export default create({
  components: {
    NutRate
  },
  props: {
    type: {
      type: String,
      default: 'default' // default，complex
    },
    info: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['handleClick'],

  setup(props, { emit }) {
    const handleClick = () => {
      emit('handleClick');
    };

    return { handleClick };
  }
});
</script>
