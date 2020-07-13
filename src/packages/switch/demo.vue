<template>
  <div class="demo-list">
    <h4>基础样式</h4>
    <div>
      <nut-cell>
        <div slot="title">{{ swActive ? '开' : '关' }}</div>
        <span slot="desc"><nut-switch :active.sync="swActive"></nut-switch></span>
      </nut-cell>
      <nut-cell>
        <div slot="title">开启禁用</div>
        <span slot="desc"><nut-switch :active="true" :disabled="true"></nut-switch></span>
      </nut-cell>
      <nut-cell>
        <div slot="title">关闭禁用</div>
        <span slot="desc"><nut-switch :disabled="true"></nut-switch></span>
      </nut-cell>
    </div>

    <h4>迷你开关</h4>
    <div>
      <nut-cell>
        <div slot="title">{{ swActive2 ? '开' : '关' }}</div>
        <span slot="desc"><nut-switch :active.sync="swActive2" size="small"></nut-switch></span>
      </nut-cell>
      <nut-cell>
        <div slot="title">开启禁用</div>
        <span slot="desc"><nut-switch :active="true" :disabled="true" size="small"></nut-switch></span>
      </nut-cell>
      <nut-cell>
        <div slot="title">关闭禁用</div>
        <span slot="desc"><nut-switch :disabled="true" size="small"></nut-switch></span>
      </nut-cell>
    </div>

    <h4>change事件</h4>
    <div>
      <nut-cell>
        <span slot="title"><nut-switch @change="onChange"></nut-switch></span>
      </nut-cell>
    </div>
    <h4>自定义Class</h4>
    <div>
      <nut-cell>
        <span slot="title"><nut-switch :active="true" class="my-switch"></nut-switch></span>
      </nut-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swActive: true,
      swActive2: true,
    };
  },
  methods: {
    onChange(status) {
      this.$toast.text(status);
    },
  },
};
</script>

<style lang="scss">
.my-switch.nut-switch {
  border-radius: 3px;
  border-color: #ccc;
  background-color: #ccc;

  .nut-switch-btn {
    border: 2px solid #fff;
    box-shadow: none;
    background-color: #fff;
    border-radius: 3px;
  }

  &.nut-switch-active {
    border-color: #0092e6;
    background-color: #0092e6;

    .nut-switch-btn {
      background-color: #fff;
    }
  }
}
</style>
