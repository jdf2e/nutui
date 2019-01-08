<template>
  <div class="demo-list">
    <h4>Radio基本用法</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-radio v-model="radioVal" :label="2">备选项</nut-radio>
        </span>
      </nut-cell>
    </div>
    
    <h4>组合使用Radio</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-radio v-model="radioVal1" :label="1">备选项1</nut-radio>
          <nut-radio v-model="radioVal1" :label="2">备选项2</nut-radio>
        </span>
        <div slot="desc">radioVal1: {{radioVal1}}</div>
      </nut-cell>
    </div>
    <p>组合使用 Radio 时推荐使用 radiogroup 组件，见下方示例</p>

    <h4>RadioGroup基本用法</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-radiogroup v-model="radioGroupVal1">
            <nut-radio label="a">备选项1</nut-radio>
            <nut-radio label="b">备选项2</nut-radio>
          </nut-radiogroup>
        </span>
      </nut-cell>
    </div>

    <h4>Radio禁用</h4>
    <div>
      <nut-cell>
        <span slot="title">
          未选中时的禁用状态：<nut-radio :disabled="true" v-model="radioVal2" label="禁用">备选项1</nut-radio>
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          已选中时的禁用状态：<nut-radio :disabled="true" v-model="radioVal2" label="选中且禁用">备选项2</nut-radio>
        </span>
      </nut-cell>
    </div>

    <h4>RadioGroup整体禁用</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-radiogroup v-model="radioGroupVal2" :disabled="true">
            <nut-radio label="1">备选项1</nut-radio>
            <nut-radio label="2">备选项2</nut-radio>
            <nut-radio label="3">备选项3</nut-radio>
          </nut-radiogroup>
        </span>
      </nut-cell>
    </div>

    <h4>Radio自定义尺寸</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-radio size="small">小号</nut-radio>
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-radio size="base">默认</nut-radio>
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-radio size="large">大号</nut-radio>
        </span>
      </nut-cell>
      <p>size可选值：'small', 'base', 'large'</p>
    </div>

    <h4>RadioGroup整体定义尺寸</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-radiogroup v-model="radioGroupVal3" size="large">
            <nut-radio label="1">备选项1</nut-radio>
            <nut-radio label="2">备选项2</nut-radio>
            <nut-radio label="3">备选项3</nut-radio>
          </nut-radiogroup>
        </span>
      </nut-cell>
    </div>

    <h4>Radio禁用动效</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-radio :animated="false" v-model="radioVal3" label="a">备选项1</nut-radio>
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-radio :animated="false" v-model="radioVal3" label="b">备选项2</nut-radio>
        </span>
      </nut-cell>
      <p>animated 属性值为 false 时，禁用自带动效</p>
    </div>

    <h4>RadioGroup禁用动效</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-radiogroup v-model="radioGroupVal4" :animated="false">
            <nut-radio label="a">备选项1</nut-radio>
            <nut-radio label="b">备选项2</nut-radio>
            <nut-radio label="c">备选项3</nut-radio>
          </nut-radiogroup>
        </span>
      </nut-cell>
    </div>

    <h4>自定义Class</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-radio class="my-radio" v-model="radioVal5" label="a">备选项1</nut-radio>
        </span>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-radio class="my-radio" v-model="radioVal5" label="b">备选项2</nut-radio>
        </span>
      </nut-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioVal:1,
      radioVal1: 2,
      radioVal2: "选中且禁用",
      radioVal3: "b",
      radioVal4: "b",
      radioVal5: "a",
      radioGroupVal1:"b",
      radioGroupVal2:"2",
      radioGroupVal3:"2",
      radioGroupVal4:"c",
    };
  },
  methods: {
  }
};
</script>

<style lang="scss">
.nut-radio.my-radio {
  input:checked {
    background-image: radial-gradient(
      circle,
      #fff 0%,
      #fff 50%,
      $primary-color 60%
    );
    background-size: 50% 50%;
    border: none;
  }
}
</style>
