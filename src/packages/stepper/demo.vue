<template>
  <div class="demo-list">
    <h4>默认用法</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-stepper :value.sync="val1"></nut-stepper>
        </span>
        <span slot="desc">
          value: {{val1}} <button @click="reduce">-</button> <button @click="add">+</button> 
        </span>
      </nut-cell>
    </div>
    <h4>设置最大最小值</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-stepper :value.sync="val2" :min="5" :max="100"></nut-stepper>
        </span>
      </nut-cell>
    </div>
    <h4>设置加减的步长</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-stepper :value.sync="val3" :step="5"></nut-stepper>
        </span>
      </nut-cell>
    </div>
    <h4>设置只读</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-stepper :value.sync="val4" readonly></nut-stepper>
        </span>
      </nut-cell>
    </div>
    <h4>显示边框</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-stepper :value.sync="val5" :simple="false"></nut-stepper>
        </span>
      </nut-cell>
    </div>
    <h4>关闭动画过渡</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-stepper :value.sync="val6" :transition="false" :simple="false"></nut-stepper>
        </span>
      </nut-cell>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      val1: 0,
      val2: 12,
      val3: 5,
      val4: 0,
      val5: 0,
      val6: 0
    }
  },
  methods: {
    add() {
      this.val1 = Number(this.val1) + 1;
    },
    reduce() {
      this.val1 = Math.max(Number(this.val1) - 1, 0);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
