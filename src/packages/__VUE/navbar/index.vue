<template>
  <view :class="classes">
    <view class="nut-navbar__left">
      <nut-icon
        v-if="leftShow"
        color="#979797"
        name="left"
        @click="handleLeft"
      ></nut-icon>
    </view>
    <view
      class="nut-navbar__title"
      :class="{ icon }"
      v-if="title || titIcon || tabs"
    >
      <view v-if="title" @click="handleCenter">{{ title }}</view>
      <nut-icon
        v-if="titIcon"
        class="icon"
        :name="titIcon"
        @click="handleCenterIcon"
      ></nut-icon>
      <view class="tab-title">
        <view
          :class="[
            'tab-title-box',
            { 'nut-tab-active': activeIndex == item.id || activeIndex == index }
          ]"
          @click="switchTitle(item.id, item.name)"
          v-for="(item, index) in tabs"
          :key="item.id"
        >
          {{ item.name }}
        </view>
      </view>
    </view>
    <view class="nut-navbar__right" :class="{ icon }" v-if="desc || icon">
      <view
        v-if="desc"
        :style="{ 'text-align': descTextAlign }"
        @click="handleClear"
        >{{ desc }}</view
      >
      <template v-if="icon">
        <view @click="handleSends">
          <slot name="icons"></slot>
        </view>
      </template>
      <view>
        <nut-icon
          v-if="icon"
          class="rightIcon"
          :name="icon"
          @click="handleSend"
        ></nut-icon>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useRouter } from 'vue-router';
const { componentName, create } = createComponent('navbar');
export default create({
  props: {
    leftShow: { type: Boolean, default: true }, //左侧  是否显示返回
    title: { type: String, default: '' }, //中间  文字标题
    titIcon: { type: String, default: '' }, //中间  标题icon
    tabs: {
      type: Array,
      defaul: () => {
        return [];
      }
    },
    icon: { type: String, default: '' }, //右侧   按钮图标
    desc: { type: String, default: '' }, //右侧   按钮文字

    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  emits: [
    'click',
    'on-click-back',
    'on-click-title',
    'on-click-right',
    'on-click-desc',
    'on-click-icon',
    'on-click-more',
    'on-click-clear',
    'on-click-send',
    'on-click-slot',
    'on-click-slot-send',
    'switch-tab'
  ],
  setup(props, { emit }) {
    const activeIndex = ref(props.defaultIndex);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
    const router = useRouter();

    function switchTitle(id: number, name: string) {
      activeIndex.value = id;
      console.log(id);
      emit('switch-tab', activeIndex.value, name);
    }

    function handleLeft() {
      emit('on-click-back');
    }

    function handleCenter() {
      emit('on-click-title');
    }
    function handleCenterIcon() {
      emit('on-click-icon');
    }

    function handleClear() {
      emit('on-click-clear');
    }

    function handleMore() {
      emit('on-click-more');
    }

    function handleSend() {
      emit('on-click-send');
    }

    function handleSlot() {
      emit('on-click-slot');
    }

    function handleSends() {
      emit('on-click-slot-send');
    }

    return {
      classes,
      handleLeft,
      handleCenter,
      handleCenterIcon,
      handleClear,
      handleSend,
      handleSlot,
      handleSends,
      switchTitle,
      activeIndex
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
