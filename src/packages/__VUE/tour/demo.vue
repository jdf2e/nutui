<template>
  <div class="demo">
    <h2>{{ translate('title') }}</h2>

    <div class="music" @click="showTourHandle"> 新手引导 </div>

    <div>
      <div class="index-header"
        ><img
          src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
          @click="showTour2 = true"
        /><div class="info"><h1>NutUI</h1><p id="target6">京东风格的轻量级移动端 Vue 组件库</p></div></div
      >
    </div>

    <nut-tabbar :bottom="true">
      <nut-tabbar-item
        id="target1"
        tab-title="首页"
        img="https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png"
        activeImg="https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png"
      ></nut-tabbar-item>
      <nut-tabbar-item
        id="target2"
        tab-title="首页"
        img="https://img13.360buyimg.com/imagetools/jfs/t1/202062/32/25149/5246/62e7c353E5a51db17/b82b940e6eb22ec3.png"
        activeImg="https://img11.360buyimg.com/imagetools/jfs/t1/162634/35/26732/5502/62e747a8E5330f029/3ea00a0c140beb38.png"
      ></nut-tabbar-item>
      <nut-tabbar-item
        id="target3"
        tab-title="首页"
        img="https://img12.360buyimg.com/imagetools/jfs/t1/60552/28/20576/5585/62e7c2ddE2e0b48a7/70eefb366b85f3e4.png"
        activeImg="https://img11.360buyimg.com/imagetools/jfs/t1/138362/15/28011/5802/62e747a4E4139ef2f/9a79a1c0f6a273b4.png"
      ></nut-tabbar-item>
      <nut-tabbar-item
        id="target4"
        tab-title="首页"
        img="https://img14.360buyimg.com/imagetools/jfs/t1/156023/30/29042/4257/62e7c34aE71f32967/690e2db242e2a97f.png"
        activeImg="https://img13.360buyimg.com/imagetools/jfs/t1/144283/8/28420/4851/62e74784Eaa8549fe/80535de2961b812e.png"
      ></nut-tabbar-item>
    </nut-tabbar>

    <nut-grid icon-size="18px">
      <nut-grid-item icon="my2" text="文字"></nut-grid-item>
      <nut-grid-item icon="star" text="文字"></nut-grid-item>
      <nut-grid-item icon="dshop" text="文字"></nut-grid-item>
      <nut-grid-item icon="shop" text="文字" id="target5"></nut-grid-item>
    </nut-grid>

    <nut-tour
      class="nut-custom-tour"
      v-model:visible="showTour"
      :steps="steps"
      location="top-start"
      :offset="offset"
    ></nut-tour>

    <nut-tour
      class="nut-custom-tour"
      v-model:visible="showTour1"
      :steps="steps1"
      location="bottom-end"
      type="tile"
      bgColor="#f00"
      theme="dark"
      :offset="[0, 0]"
    ></nut-tour>

    <nut-tour
      class="nut-custom-tour"
      v-model:visible="showTour2"
      :steps="steps2"
      type="tile"
      bgColor="#f00"
      theme="dark"
      location="bottom-start"
    ></nut-tour>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('tour');
import { useTranslate } from '@/sites/assets/util/useTranslate';

const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      title: '基础用法',
      title1: '选项配置',
      title2: '自定义内容',
      title3: '位置自定义',
      light: '明朗风格',
      dark: '暗黑风格',
      showIcon: '展示图标',
      disableAction: '禁用选项',
      content: '自定义内容'
    },
    'en-US': {
      title: 'Basic Usage',
      title1: 'Option Configuration',
      title2: 'Custom Content',
      title3: 'Custom Location',
      light: 'light',
      dark: 'dark',
      showIcon: 'show icon',
      disableAction: 'disabled',
      content: 'custom content'
    }
  });
export default createDemo({
  setup() {
    initTranslate();

    const state = reactive({
      showTour: false,
      showTour1: false,
      showTour2: false,
      offset: [-3, -8],
      steps: [
        {
          content: '这里换成关注和粉丝啦，听歌时长点击头像可见',
          target: 'target1'
        },
        {
          content: '这里换成关注和粉丝啦，听歌时长点击头像可见',
          target: 'target2'
        },
        {
          content: '这里换成关注和粉丝啦，听歌时长点击头像可见',
          target: 'target3',
          location: 'top-end'
        },
        {
          content: '这里换成关注和粉丝啦，听歌时长点击头像可见',
          target: 'target4',
          location: 'top-end'
        }
      ],

      steps1: [
        {
          content: '邀请有礼，全新改版，奖励多多哦',
          target: 'target5'
        }
      ],

      steps2: [
        {
          content: '这里换成关注和粉丝啦，听歌时长点击头像可见',
          target: 'target6'
        }
      ],

      type: 'normal'
    });

    setTimeout(() => {
      state.showTour = true;
    }, 1000);

    const showTourHandle = () => {
      state.showTour1 = true;
    };

    return {
      translate,
      ...toRefs(state),
      showTourHandle
    };
  }
});
</script>
<style lang="scss">
.music {
  margin-bottom: 30px;
}

.nut-custom-tour {
  .nut-popover-content {
    width: auto !important;
  }
  /* .nut-tour-content-inner {
    width: max-content;
  } */
}

.index-header {
  display: flex;
  align-items: center;
  height: 117px;
  > img {
    width: 67px;
    height: 67px;
    margin-right: 18px;
    flex-shrink: 0;
  }
  .info {
    display: flex;
    flex-direction: column;
    h1 {
      margin: 0;
      height: 48px;
      font-size: 34px;
      color: rgba(51, 51, 51, 1);
    }
    p {
      height: 18px;
      font-size: 12px;
      color: rgba(154, 155, 157, 1);
    }
  }
}
</style>
