<template>
    <div class="demo-list">
        <h4>基本用法</h4>
        <!-- <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p> -->
        <div>
            <nut-cell>
                <span slot="title"><nut-radio v-model="radioVal1" :label="1">备选项1</nut-radio><nut-radio v-model="radioVal1" :label="2">备选项2</nut-radio></span>
                <div slot="desc">radioVal1: {{radioVal1}}</div>
            </nut-cell>
        </div>

        <h4>禁用状态</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-radio :disabled="true" v-model="radioVal2" label="禁用">备选项1</nut-radio></span>
            </nut-cell>
            <nut-cell>
                <span slot="title"><nut-radio :disabled="true" v-model="radioVal2" label="选中且禁用">备选项2</nut-radio></span>
            </nut-cell>
            <nut-cell>
                <span slot="title">radioVal2: {{radioVal2}}</span>
            </nut-cell>
        </div>

        <h4>自定义尺寸</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-radio size="small">小号</nut-radio></span>
            </nut-cell>
            <nut-cell>
                <span slot="title"><nut-radio size="base">默认</nut-radio></span>
            </nut-cell>
            <nut-cell>
                <span slot="title"><nut-radio size="large">大号</nut-radio></span>
            </nut-cell>
            <p>size可选值：'small', 'base', 'large'</p>
        </div>

        <h4>禁用动效</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-radio :animation="false" v-model="radioVal3" label="a">备选项1</nut-radio></span>
            </nut-cell>
            <nut-cell>
                <span slot="title"><nut-radio :animation="false" v-model="radioVal3" label="b">备选项2</nut-radio></span>
            </nut-cell>
            <p>animation属性值为false时，禁用自带动效 </p>
        </div>

        <h4>事件</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-radio v-model="radioVal4" label="a" @change="radioChange">备选项1</nut-radio></span>
            </nut-cell>
            <nut-cell>
                <span slot="title"><nut-radio v-model="radioVal4" label="b" @change="radioChange">备选项2</nut-radio></span>
            </nut-cell>
            <p>值发生变化时，将触发change事件</p>
        </div>

        <h4>自定义Class</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-radio class="my-radio" v-model="radioVal5" label="a">备选项1</nut-radio></span>
            </nut-cell>
            <nut-cell>
                <span slot="title"><nut-radio class="my-radio" v-model="radioVal5" label="b">备选项2</nut-radio></span>
            </nut-cell>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      result: '',
      radioVal1:2,
      radioVal2:'选中且禁用',
      radioVal3:'b',
      radioVal4:'b',
      radioVal5:'a',
    };
  },
  methods: {
      radioChange(label){
          alert('选中的是'+label);
      }
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
    border:none;
  }
}
</style>
