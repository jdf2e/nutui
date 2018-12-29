<template>
    <div class="tel-input-demo demo-list">
        <h4>基本用法</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-slider v-model="val1" :range="[0,10]"></nut-slider></span>
            </nut-cell>
            <nut-cell>
                <span slot="title">Value值：  {{val1}}</span>
            </nut-cell>
        </div>
        <h4>拖动时展示标签</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-slider v-model="val2" :range="[0,100]" :showLabel="true"></nut-slider></span>
            </nut-cell>
            <nut-cell>
                <span slot="title">Value值：  {{val2}}</span>
            </nut-cell>
        </div>
        <h4>一直展示标签</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-slider v-model="val3" :range="[0,100]" :showLabel="true" :showLabelAlways="true"></nut-slider></span>
            </nut-cell>
            <nut-cell>
                <span slot="title">Value值：  {{val3}}</span>
            </nut-cell>
        </div>
        <h4>两端显式可选取范围</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-slider v-model="val4" :range="[-50,50]" :showLabel="true" :showRangeTxt="true"></nut-slider></span>
            </nut-cell>
            <nut-cell>
                <span slot="title">Value值：  {{val4}}</span>
            </nut-cell>
        </div>
        <h4>设置分段数（stage=20）</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-slider v-model="val5" :range="[0,100]" :showLabel="true" :showRangeTxt="true" :stage="5"></nut-slider></span>
            </nut-cell>
            <nut-cell>
                <span slot="title">Value值：  {{val5}}</span>
            </nut-cell>
        </div>
        <h4>自定义Class</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-slider class="my-slider" v-model="val6" :range="[0,100]"></nut-slider></span>
            </nut-cell>
            <nut-cell>
                <span slot="title">Value值：  {{val6}}</span>
            </nut-cell>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      val1: 0,
      val2: 10,
      val3: 50,
      val4: 0,
      val5: 0,
      val6: 0
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.nut-slider.my-slider {
  .nut-slider-box {
    height: 6px;
    border-radius: 3px;
    background-color: #b6b6b6;
  }
  .nut-slider-Handle {
    border-width: 0;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    transition: none;
    &.nut-slider-ani {
      border-width: 0;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
