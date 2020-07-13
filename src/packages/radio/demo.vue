<template>
  <div class="demo-list">
    <h4>基础样式</h4>
    <radio-group
      :list="labelList"
      :name="'test0'"
      :styleType="'radio'"
      :effect-key="'value'"
      :checkedIndex="0"
      :effect-text="'text'"
      :reslout-attr="resloutdemo1"
      :disabled-value="radioDisable"
      v-model="labelReslut0"
    />
    <div class="cell-reslout"> 选择结果 {{ resloutdemo1 }}: {{ labelReslut0 }}</div>
    <h4>列表样式</h4>
    <radio-group
      :list="labelList"
      :style-type="'list'"
      :name="'test3'"
      :effect-key="'value'"
      :effect-text="'text'"
      :reslout-attr="resloutdemo1"
      :checkedIndex="0"
      :disabled-value="radioDisable"
      v-model="labelReslut2"
    />
    <div class="cell-reslout"> 选择结果 {{ resloutdemo1 }}: {{ labelReslut2 }}</div>
    <h4>列表禁选样式</h4>
    <radio-group
      :list="labelList"
      :style-type="'list'"
      :name="'test4'"
      :effect-key="'value'"
      :effect-text="'text'"
      :reslout-attr="resloutdemo1"
      :checkedIndex="0"
      :disabled-value="'all'"
      v-model="labelReslut3"
    />
    <div class="cell-reslout"> 选择结果 {{ resloutdemo1 }}: {{ labelReslut3 }}</div>
    <h4>按钮样式</h4>
    <radio-group
      :list="labelList2"
      :name="'test'"
      :styleType="'label'"
      :effect-key="'value'"
      :effect-text="'text'"
      :checkedIndex="1"
      :disabled-value="radioDisable"
      :reslout-attr="resloutdemo1"
      v-model="labelReslut"
    />
    <div class="cell-reslout"> 选择结果 {{ resloutdemo1 }}: {{ labelReslut }}</div>
  </div>
</template>

<script>
import group from './index.vue';
export default {
  data() {
    return {
      labelList: [
        {
          name: 'test',
          value: 1,
          text: '这里是选项A',
        },
        {
          name: 'test',
          value: 2,
          text: '这里是选项B',
        },
        {
          name: 'test',
          value: 3,
          text: '这里是选项C',
        },
      ],
      labelList2: [
        {
          name: 'test',
          value: 1,
          text: '功能逻辑',
        },
        {
          name: 'test',
          value: 2,
          text: '系统文案',
        },
        {
          name: 'test',
          value: 3,
          text: '员工福利',
        },
        {
          name: 'test',
          value: 4,
          text: '薪酬提成',
        },
        {
          name: 'test',
          value: 5,
          text: '称重异常',
        },
        {
          name: 'test',
          value: 6,
          text: '工服问题',
        },
        {
          name: 'test',
          value: 7,
          text: '油补问题',
        },
        {
          name: 'test',
          value: 8,
          text: '系统问题',
        },
      ],
      labelReslut0: '',
      labelReslut: '',
      labelReslut2: '',
      labelReslut3: '',
      resloutType: [
        {
          value: 'value',
          name: 'value',
        },
        {
          value: 'text',
          name: 'text',
        },
      ],
      resloutdemo1: '',
      disableVal: 'false',
      radioDisable: false,
    };
  },
  components: {
    'radio-group': group,
  },
  watch: {
    disableVal(val) {
      if (!isNaN(val)) {
        this.radioDisable = parseInt(val);
      } else {
        if (val.split(',').length > 1) {
          this.radioDisable = val.split(',').map((item) => {
            return !isNaN(item) ? parseInt(item) : '';
          });
        } else if (val === 'true') {
          this.radioDisable = true;
        } else if (val === 'false') {
          this.radioDisable = false;
        } else {
          this.radioDisable = val;
        }
      }
    },
  },
};
</script>

<style lang="scss">
.cell-reslout {
  background: #fff;
  border-top: 1px solid #e6e6e6;
  padding: 20px 20px;
  font-size: 15px;
}
</style>
