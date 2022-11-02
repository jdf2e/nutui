<template>
  <div class="demo full">
    <h2>默认用法</h2>
    <nut-noticebar
      text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
    ></nut-noticebar>

    <h2>滚动播放</h2>
    <nut-noticebar
      text="华为畅享9新品即将上市"
      :scrollable="true"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    >
    </nut-noticebar>
    <p />
    <nut-noticebar
      text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
      :scrollable="false"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></nut-noticebar>

    <h2>通告栏模式--关闭模式</h2>
    <nut-noticebar :closeMode="true" @click="hello" :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`"
      >华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！
    </nut-noticebar>
    <p />
    <nut-noticebar
      :closeMode="true"
      right-icon="circle-close"
      @click="hello"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
      >华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！
    </nut-noticebar>

    <h2>通告栏模式--链接模式</h2>
    <nut-noticebar
      left-icon="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    >
      <a href="https://www.jd.com">京东商城</a>
    </nut-noticebar>

    <h2>多行展示</h2>
    <nut-noticebar
      text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
      wrapable
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></nut-noticebar>

    <h2>纵向滚动</h2>
    <div class="interstroll-list">
      <nut-noticebar
        direction="vertical"
        :list="horseLamp1"
        :speed="10"
        :standTime="1000"
        @click="go"
        :closeMode="true"
        :background="`rgba(251, 248, 220, 1)`"
        :color="`#D9500B`"
        height="50"
      ></nut-noticebar>
    </div>

    <h2>纵向复杂滚动动画</h2>
    <div class="interstroll-list">
      <nut-noticebar
        direction="vertical"
        :list="horseLamp2"
        :speed="10"
        :standTime="2000"
        :complexAm="true"
        :background="`rgba(251, 248, 220, 1)`"
        :color="`#D9500B`"
      ></nut-noticebar>
    </div>
    <h2>纵向自定义滚动内容</h2>
    <div class="interstroll-list">
      <nut-noticebar
        direction="vertical"
        :height="50"
        :speed="10"
        :standTime="1000"
        :list="[]"
        @close="go"
        :background="`rgba(251, 248, 220, 1)`"
        :color="`#D9500B`"
      >
        <div
          class="custom-item"
          :data-index="index"
          v-for="(item, index) in horseLamp3"
          style="height: 50px; line-height: 50px"
          :key="index"
          >{{ item }}</div
        >
      </nut-noticebar>
    </div>

    <h2>纵向自定义右侧图标</h2>
    <div class="interstroll-list">
      <nut-noticebar
        direction="vertical"
        :list="horseLamp1"
        :speed="10"
        :standTime="1000"
        :background="`rgba(251, 248, 220, 1)`"
        :color="`#D9500B`"
      >
        <template v-slot:rightIcon>
          <nut-icon name="fabulous" color="#f0250f"> </nut-icon>
        </template>
      </nut-noticebar>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue';

export default {
  props: {},
  setup() {
    const state = reactive({
      horseLamp1: ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆'],
      horseLamp2: ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆'],
      horseLamp3: ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆'],
      text: '华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！'
    });

    const hello = () => {
      console.log('hello world');
    };
    const go = (item: any) => {
      console.log(item);
    };

    return {
      ...toRefs(state),
      hello,
      go
    };
  }
};
</script>

<style lang="scss" scoped>
.demo {
  padding-bottom: 30px !important;
}
</style>
