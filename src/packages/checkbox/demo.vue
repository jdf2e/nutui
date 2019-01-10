<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-checkbox v-model="checkbox1" @change="changeBox1">选项</nut-checkbox>
        </span>
        <span slot="desc">复选按钮checked：{{checkbox1}}</span>
      </nut-cell>
    </div>

    <h4>禁用状态</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-checkbox v-model="checkbox2" disabled>未选时禁用状态</nut-checkbox>
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-checkbox v-model="checkbox3" disabled>已选时禁用状态</nut-checkbox>
        </span>
      </nut-cell>
    </div>

    <h4>自定义尺寸</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-checkbox v-model="checkbox4" size="small">小号1</nut-checkbox>
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-checkbox v-model="checkbox5" size="base">默认</nut-checkbox>
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-checkbox v-model="checkbox6" size="large">大号</nut-checkbox>
        </span>
      </nut-cell>

      <p>size可选值：'small', 'base', 'large'</p>
    </div>

    <h4>禁用动效</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-checkbox v-model="checkbox7" :animation="false">没有动效</nut-checkbox>
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-checkbox v-model="checkbox8" :animation="false">没有动效</nut-checkbox>
        </span>
      </nut-cell>
      <p>animation属性值为false时，禁用自带动效</p>
    </div>

    <h4>事件</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-checkbox v-model="checkbox9" :label="'change事件'" @change="checkboxChange">备选项</nut-checkbox>
        </span>
        <span slot="desc">{{result}}</span>
      </nut-cell>
      <p>值发生变化时，将触发change事件</p>
      <nut-cell>
        <span slot="title">
          <nut-checkbox v-model="checkbox10" :label="'选项值1'" @change="getChange">change事件</nut-checkbox>
        </span>
        <span slot="desc">{{result2}}</span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-checkbox v-model="checkbox11" :label="'选项值2'" @change="getChange2">change事件</nut-checkbox>
        </span>
        <span slot="desc">{{result3}}</span>
      </nut-cell>
      <p>设置label时，可获取选项label值</p>
    </div>

    <h4>自定义Class</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-checkbox class="my-checkbox" v-model="checkbox12">自定义Class:"my-checkbox"</nut-checkbox>
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-checkbox class="my-checkbox" v-model="checkbox13">自定义Class:"my-checkbox"</nut-checkbox>
        </span>
      </nut-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: "",
      result2: "",
      result3: "",
      checkbox1: false,
      checkbox2: false,
      checkbox3: true,
      checkbox4: true,
      checkbox5: true,
      checkbox6: true,
      checkbox7: false,
      checkbox8: true,
      checkbox9: false,
      checkbox10: true,
      checkbox11: false,
      checkbox12: true,
      checkbox13: false
    };
  },
  methods: {
    changeBox1(state) {
      this.checkbox1 = state;
    },
    checkboxChange(state, val) {
      this.result = state;
      console.log(state, 333, val);
    },
    getChange(state, val) {
      this.result2 = "选中状态：" + state + "，选项：" + val;
    },
    getChange2(state, val) {
      this.result3 = "选中状态：" + state + "，选项：" + val;
    }
  }
};
</script>

<style lang="scss">
.nut-checkbox.my-checkbox {
  input:checked {
    background-image: radial-gradient(
      circle,
      #fff 0%,
      #fff 100%,
      $primary-color 60%
    );
    background-size: 50% 50%;
    border: none;
  }
}
</style>
