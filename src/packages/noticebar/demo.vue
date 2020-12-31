<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-noticebar
        text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
      ></nut-noticebar>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('noticebar');
export default createDemo({
  props: {},
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped></style>
