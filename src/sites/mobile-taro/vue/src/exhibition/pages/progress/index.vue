<template>
  <div class="demo full">
    <h2>基本用法</h2>
    <div>
      <nut-cell>
        <nut-progress percentage="30" />
      </nut-cell>
    </div>

    <h2>线形进度条-设置颜色高度</h2>
    <div>
      <nut-cell>
        <nut-progress percentage="30" stroke-color=" rgba(250,44,25,0.47)" stroke-width="20" text-color="red" />
      </nut-cell>
    </div>
    <h2>线形进度条-百分比不显示</h2>
    <div>
      <nut-cell>
        <nut-progress percentage="50" :show-text="false" stroke-height="24" />
      </nut-cell>
    </div>
    <h2>线形进度条-百分比外显</h2>
    <div>
      <nut-cell>
        <nut-progress percentage="30" />
      </nut-cell>
    </div>
    <h2>线形进度条-百分比内显</h2>
    <div>
      <nut-cell>
        <nut-progress percentage="60" :text-inside="true" />
      </nut-cell>
    </div>
    <h2>线形进度条-百分比内显自定义</h2>
    <div>
      <nut-cell>
        <nut-progress percentage="60" :text-inside="true">
          <nut-icon
            style="display: block"
            size="30"
            name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
          ></nut-icon>
        </nut-progress>
      </nut-cell>
    </div>
    <h2>线形进度条-自定义尺寸(内置"small","base","large"三种规格)</h2>
    <div>
      <nut-cell>
        <nut-progress percentage="30" size="small"> </nut-progress>
      </nut-cell>
      <nut-cell>
        <nut-progress percentage="50" :text-inside="true" size="base"> </nut-progress>
      </nut-cell>
      <nut-cell>
        <nut-progress percentage="70" size="large"> </nut-progress>
      </nut-cell>
    </div>
    <h2>线形进度条-状态显示</h2>
    <div>
      <nut-cell>
        <nut-progress
          percentage="30"
          stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          status="active"
        />
      </nut-cell>
      <nut-cell>
        <nut-progress percentage="50" :stroke-width="strokeWidth" status="wrong" />
      </nut-cell>
      <nut-cell>
        <nut-progress
          percentage="100"
          stroke-color="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
          stroke-width="15"
          status="success"
          icon-name="issue"
          icon-color="red"
        />
      </nut-cell>
    </div>
    <h2>设置百分比</h2>
    <div>
      <nut-cell>
        <nut-progress :percentage="val" />
      </nut-cell>
      <nut-cell>
        <nut-button type="default" @click="setReduceVal">减少</nut-button>
        <nut-button type="primary" @click="setAddVal">增加</nut-button>
      </nut-cell>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  props: {},
  setup() {
    const val = ref(0);
    const setAddVal = () => {
      if (val.value >= 100) {
        return false;
      }
      val.value += 10;
    };
    const setReduceVal = () => {
      if (val.value <= 0) {
        return false;
      }
      val.value -= 10;
    };
    return {
      val,
      setAddVal,
      setReduceVal
    };
  }
};
</script>

<style lang="scss">
.nut-button {
  margin-right: 10px;
}
</style>
