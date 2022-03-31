<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <div class="demo__piece">
      <nut-circleprogress :progress="20"> </nut-circleprogress>
    </div>

    <h2>环形进度条自定义样式</h2>
    <div class="demo__piece">
      <nut-circleprogress :progress="20" :progress-option="progressOption"> </nut-circleprogress>
    </div>

    <h2>环形进度条自定义内容</h2>
    <div class="demo__piece">
      <nut-circleprogress :progress="60" :is-auto="isAuto">
        <div>自定义</div>
      </nut-circleprogress>
    </div>
    <h2>动态改变环形进度条的进度</h2>
    <div class="demo__piece">
      <nut-circleprogress :progress="percent" :progress-option="progressOption" :stroke-inner-width="strokeInnerWidth">
      </nut-circleprogress>
    </div>
    <div class="demo__btn">
      <nut-button type="primary" @click="setReduceVal">减少</nut-button>
      <nut-button type="primary" @click="setAddVal">增加</nut-button>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
export default {
  props: {},
  setup() {
    const progressOption = reactive({
      radius: 50,
      strokeOutWidth: 10,
      backColor: '#d9d9d9',
      progressColor: 'blue'
    });
    const percent = ref(50);
    const strokeInnerWidth = ref(10);
    const isAuto = ref(true);
    const setAddVal = () => {
      strokeInnerWidth.value = 10;
      if (percent.value >= 100) {
        return;
      }
      percent.value += 10;
    };
    const setReduceVal = () => {
      if (percent.value - 10 <= 0) {
        strokeInnerWidth.value = 0;
        percent.value = 0;
        return;
      }
      percent.value -= 10;
    };
    return {
      progressOption,
      isAuto,
      setAddVal,
      setReduceVal,
      percent
    };
  }
};
</script>

<style lang="scss">
.demo__btn {
  text-align: center;
  width: 100%;
  height: 50px;
  border-top: 1px solid rgba(234, 240, 251, 1);
  padding-top: 6px;
  background: rgba(255, 255, 255, 1);
  .nut-button {
    margin-right: 10px;
  }
}

.demo__piece {
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 1);
}
</style>
