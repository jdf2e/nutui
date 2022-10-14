<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>

    <nut-tabbar @tab-switch="tabSwitch">
      <nut-tabbar-item :tab-title="translate('title')" icon="home"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="category"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="find"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="my"></nut-tabbar-item>
    </nut-tabbar>
    <h2>{{ translate('byName') }}</h2>

    <nut-tabbar @tab-switch="tabSwitch" v-model:visible="activeName">
      <nut-tabbar-item name="home" :tab-title="translate('title')" icon="home"></nut-tabbar-item>
      <nut-tabbar-item name="category" :tab-title="translate('title')" icon="category"></nut-tabbar-item>
      <nut-tabbar-item name="find" :tab-title="translate('title')" icon="find"></nut-tabbar-item>
      <nut-tabbar-item name="cart" :tab-title="translate('title')" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item name="my" :tab-title="translate('title')" icon="my"></nut-tabbar-item>
    </nut-tabbar>
    <h2>{{ translate('customImg') }}</h2>

    <nut-tabbar @tab-switch="tabSwitch">
      <nut-tabbar-item
        :tab-title="translate('title')"
        img="https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png"
        activeImg="https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png"
      ></nut-tabbar-item>
      <nut-tabbar-item
        :tab-title="translate('title')"
        img="https://img13.360buyimg.com/imagetools/jfs/t1/202062/32/25149/5246/62e7c353E5a51db17/b82b940e6eb22ec3.png"
        activeImg="https://img11.360buyimg.com/imagetools/jfs/t1/162634/35/26732/5502/62e747a8E5330f029/3ea00a0c140beb38.png"
      ></nut-tabbar-item>
      <nut-tabbar-item
        :tab-title="translate('title')"
        img="https://img12.360buyimg.com/imagetools/jfs/t1/60552/28/20576/5585/62e7c2ddE2e0b48a7/70eefb366b85f3e4.png"
        activeImg="https://img11.360buyimg.com/imagetools/jfs/t1/138362/15/28011/5802/62e747a4E4139ef2f/9a79a1c0f6a273b4.png"
      ></nut-tabbar-item>
      <nut-tabbar-item
        :tab-title="translate('title')"
        img="https://img14.360buyimg.com/imagetools/jfs/t1/156023/30/29042/4257/62e7c34aE71f32967/690e2db242e2a97f.png"
        activeImg="https://img13.360buyimg.com/imagetools/jfs/t1/144283/8/28420/4851/62e74784Eaa8549fe/80535de2961b812e.png"
      ></nut-tabbar-item>
      <nut-tabbar-item
        :tab-title="translate('title')"
        img="https://img11.360buyimg.com/imagetools/jfs/t1/74960/7/21199/5299/62e7c34fE81cfb9f0/5805a277d3f6ce06.png"
        activeImg="https://img10.360buyimg.com/imagetools/jfs/t1/48844/30/21079/5550/62e74797E934c4408/da98765cb757fd68.png"
      ></nut-tabbar-item>
    </nut-tabbar>

    <h2>{{ translate('customCheck') }}</h2>
    <nut-tabbar v-model:visible="active" size="18px">
      <nut-tabbar-item :tab-title="translate('title')" icon="home"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="category"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="find"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="my"></nut-tabbar-item>
    </nut-tabbar>

    <h2>{{ translate('showBadge') }}</h2>
    <nut-tabbar>
      <nut-tabbar-item :tab-title="translate('title')" icon="home" num="11"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="category" :dot="true"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="find"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="cart" num="110"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="my"></nut-tabbar-item>
    </nut-tabbar>

    <h2>{{ translate('customColor') }}</h2>
    <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
      <nut-tabbar-item :tab-title="translate('title')" icon="home"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="category"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="find"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="my"></nut-tabbar-item>
    </nut-tabbar>
    <h2>{{ translate('customQuantity') }}</h2>
    <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
      <nut-tabbar-item :tab-title="translate('title')" icon="home"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="category"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="find"></nut-tabbar-item>
    </nut-tabbar>
    <h2>{{ translate('fixedBottom') }}</h2>
    <nut-tabbar :bottom="true" :safeAreaInsetBottom="true">
      <nut-tabbar-item :tab-title="translate('title')" href="" icon="home"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="category"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" icon="find"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" href="https://m.jd.com" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" href="######" icon="my"></nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('tabbar');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      byName: '通过名称匹配',
      customImg: '自定义图片',
      customCheck: '自定义选中',
      showBadge: '徽标提示',
      customColor: '自定义颜色',
      customQuantity: '自定义数量',
      fixedBottom: '固定底部',
      title: '标签'
    },
    'en-US': {
      basic: 'Basic Usage',
      byName: 'Match by name',
      customImg: 'Custom Img',
      customCheck: 'Custom Check',
      showBadge: 'Show Badge',
      customColor: 'Custom Color',
      customQuantity: 'Custom Quantity',
      fixedBottom: 'Fixed Bottom',
      title: 'tab'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const active = ref(2);
    const activeName = ref('category');
    function tabSwitch(item: Record<string, unknown>, index: number) {
      console.log(item, index);
    }
    return {
      active,
      activeName,
      tabSwitch,
      translate
    };
  }
});
</script>

<style lang="scss" scoped></style>
