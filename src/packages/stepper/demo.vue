<template>
  <div class="demo-list">
    <h4>默认用法</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-stepper @focus="focus" :blur="blur" :value.sync="val1" :max="12" :step="0.1" :decimalPlaces="1" @add="add"></nut-stepper>
        </span>
        <span slot="desc">
          value: {{val1}} <button @click="reduce" class="demo-btn">-</button> <button @click="add" class="demo-btn">+</button> 
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
          <nut-stepper :value.sync="val6" :transition="false" :simple="false" :max="999"></nut-stepper>
        </span>
      </nut-cell>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      val1: 1,
      val2: 12,
      val3: 5,
      val4: 0,
      val5: 0,
      val6: 0
    }
  },
  methods: {
    focus(e, v) {
      console.log('focus,', e, v)
    },
    blur(e, v) {
      console.log('blur,', e, v)
    },
    add(v) {
      console.log(v)
      // this.val1 = Number(this.val1) + 1;
    },
    reduce() {
      this.val1 = Math.max(Number(this.val1) - 1, 0);
    }
  },
};
</script>

<style lang="scss" scoped>
.demo-btn{
  border: 1px solid #ddd;
  background: #eee;
  border-radius: 4px;
  outline: none;
  padding: 3px 10px;
  cursor: pointer;
  transition: all .35s;
  &:hover{
    background: #ddd;
  }
}
</style>
