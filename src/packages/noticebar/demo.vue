<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <nut-noticebar text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"></nut-noticebar>
    <h4>可关闭信息</h4>
    <nut-noticebar :closeMode="true" @click="handleClick" @close="close"
      >华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！</nut-noticebar
    >
    <h4>可折行信息</h4>
    <nut-noticebar :wrapable="true" :scrollable="false" leftIcon="close"
      >华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！</nut-noticebar
    >
    <h4>带 icon 的消息</h4>
    <nut-noticebar
      text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
      left-icon="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
    ></nut-noticebar>
    <h4>禁用滚动</h4>
    <nut-noticebar
      text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
      :scrollable="false"
    ></nut-noticebar>
    <h4>自定义颜色</h4>
    <nut-noticebar
      text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
      color="red"
    ></nut-noticebar>
    <h4>链接模式</h4>
    <nut-noticebar>
      <a href="https://www.jd.com">京东商城</a>
    </nut-noticebar>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    close(e) {
      console.log('close', e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
