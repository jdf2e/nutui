<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell title="点击试试" @click="showTour3 = true">
      <template v-slot:link>
        <nut-switch id="target7" />
      </template>
    </nut-cell>

    <nut-tour
      class="nut-custom-tour nut-customword-tour"
      v-model:visible="showTour3"
      :steps="steps3"
      type="tile"
      location="bottom-end"
    ></nut-tour>

    <h2>自定义样式</h2>

    <nut-cell title="点击试试" @click="showTourHandle">
      <template v-slot:link>
        <nut-switch id="target5" />
      </template>
    </nut-cell>

    <nut-tour
      class="nut-custom-tour nut-customword-tour nut-customstyle-tour"
      v-model:visible="showTour1"
      :steps="steps1"
      location="bottom-end"
      type="tile"
      bgColor="#f00"
      theme="dark"
      :offset="[0, 0]"
      maskWidth="50"
      maskHeight="50"
    ></nut-tour>

    <h2>设置偏移量</h2>

    <nut-cell title="点击试试" @click="showTour2 = true">
      <template v-slot:link>
        <div class="tour-demo-img">
          <img
            id="target6"
            src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
            alt=""
          />
          <img
            src="https://img10.360buyimg.com/imagetools/jfs/t1/31842/40/20385/1762/63998e3eE594254bb/98ff51da635ead4a.png"
            alt=""
          />
          <img src="https://storage.jd.com/oss-dev/test/3.2.6/Jdweapp.png" alt="" />
        </div>
      </template>
    </nut-cell>

    <nut-tour
      class="nut-custom-tour nut-customword-tour"
      v-model:visible="showTour2"
      :steps="steps2"
      type="tile"
      bgColor="#f00"
      theme="dark"
      location="bottom-end"
      :offset="[8, 8]"
    ></nut-tour>

    <h2>自定义内容</h2>

    <nut-cell title="点击试试" @click="showTour4 = true">
      <template v-slot:link>
        <nut-switch id="target8" />
      </template>
    </nut-cell>

    <nut-tour
      class="nut-custom-tour nut-customword-tour"
      v-model:visible="showTour4"
      :steps="steps4"
      type="tile"
      theme="dark"
      location="bottom-end"
      :offset="[8, 8]"
    >
      <view class="tour-demo-custom-content">
        <view>nutui 4.x 即将发布，敬请期待</view>
        <nut-divider direction="vertical" />
        <view @click="showTour4 = false">知道了</view>
      </view>
    </nut-tour>

    <!-- <h2>步骤</h2> -->

    <nut-cell title="点击试试" @click="showTour = true"></nut-cell>

    <nut-tabbar>
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

    <nut-tour
      class="nut-customword-tour"
      v-model:visible="showTour"
      :steps="steps"
      location="bottom-start"
      :offset="[0, 0]"
      maskWidth="50"
      maskHeight="50"
      :showTitleBar="false"
    ></nut-tour>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const state = reactive({
      showTour: false,
      showTour1: false,
      showTour2: false,
      showTour3: false,
      showTour4: false,
      offset: [-3, -8],
      steps: [
        {
          content: '70+ 高质量组件，覆盖移动端主流场景',
          target: 'target1'
        },
        {
          content: '支持一套代码同时开发多端小程序+H5',
          target: 'target2'
        },
        {
          content: '基于京东APP 10.0 视觉规范',
          target: 'target3',
          location: 'top-end'
        },
        {
          content: '支持定制主题，内置 700+ 个主题变量',
          target: 'target4',
          location: 'top-end'
        }
      ],

      steps1: [
        {
          content: '70+ 高质量组件，覆盖移动端主流场景',
          target: 'target5'
        }
      ],

      steps2: [
        {
          content: '支持一套代码同时开发多端小程序+H5',
          target: 'target6',
          popoverOffset: [40, 12],
          arrowOffset: -36
        }
      ],

      steps3: [
        {
          content: '70+ 高质量组件，覆盖移动端主流场景',
          target: 'target7'
        }
      ],

      steps4: [
        {
          target: 'target8'
        }
      ],

      type: 'normal'
    });

    // setTimeout(() => {
    //   state.showTour = true;
    // }, 1000);

    const showTourHandle = () => {
      state.showTour1 = true;
    };

    return {
      ...toRefs(state),
      showTourHandle
    };
  }
};
</script>
<style lang="scss">
.nut-custom-tour {
  .nut-popover-content {
    width: auto !important;
  }
}

.nut-customword-tour {
  .nut-tour-content-inner {
    width: max-content;
  }
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

.nut-customstyle-tour {
  .nut-tour-mask {
    border-radius: 50%;
  }
}

.tour-demo-img {
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
}
.tour-demo-custom-content {
  padding: 8px;
  display: flex;
  width: max-content;
  align-items: center;

  .nut-divider {
    border-color: #fff;
  }
}
</style>
