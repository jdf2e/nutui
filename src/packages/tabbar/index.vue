<template>
  <view class="nut-tabbar" :class="{ bottom: bottom }">
    <view
      class="tabbar-nav"
      v-for="(item, index) in tabList"
      :key="index"
      :style="{ color: index == currIndex ? activeColor : unactiveColor }"
      :class="type"
      @click="switchTabs(item, index)"
    >
      <view class="icon-box">
        <view class="tips num" v-if="item.num && item.num <= 99">
          {{ item.num }}
        </view>
        <view class="tips nums" v-else-if="item.num && item.num > 100">{{
          '99+'
        }}</view>
        <view v-if="item.icon">
          <nut-icon class="icon" :size="size" :name="item.icon"></nut-icon>
        </view>
        <view :class="['tabbar-nav-word', { 'big-word': !item.icon }]">{{
          item.tabTitle
        }}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { createComponent } from '@/utils/create';
const { create } = createComponent('tabbar');
type obj = {
  tabTitle: string;
  curr: boolean;
  icon: string;
  href: string;
  color: string;
};
export default create({
  props: {
    tabList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    bottom: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'base'
    },
    size: {
      type: String,
      default: '20px'
    },
    unactiveColor: {
      type: String,
      default: '#000000'
    },
    activeColor: {
      type: String,
      default: '#fa2c19'
    }
  },
  components: {},
  setup(props, { emit }) {
    console.log(props);
    const currIndex: any = ref(0);
    const { tabList } = props;
    function initbar() {
      tabList.forEach((item: any, index) => {
        if (item.curr) {
          currIndex.value = index;
        }
      });
    }
    // 点击以后切换
    function switchTabs(item: obj, index: number) {
      currIndex.value = index;
      if (item.href) {
        window.location.href = item.href;
      }
      emit('tab-switch', item, index);
    }
    onMounted(() => {
      initbar();
    });
    return {
      currIndex,
      tabList,
      switchTabs
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
