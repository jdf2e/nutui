<template>
  <div class="nut-radio">
    <div
      :class="{
        'nut-radio-labels': styleType === 'label',
        'nut-radio-lists': styleType === 'list',
      }"
      v-if="list && list.length > 0"
    >
      <nut-radio
        v-for="(item, index) in list"
        :key="item[effectKey]"
        :type="styleType"
        :name="name"
        :text="item[effectText]"
        :value="item[effectKey]"
        :radio-data="item"
        :checked="checkedIndex === index"
        @radioChange="radioChange"
        :disabled="disabledValue | disabledFilter(index)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'radio-group',
  props: {
    styleType: String, // label
    type: String, // radio 展示
    list: Array, // radio 需要的数据信息
    checkedIndex: {
      type: Number,
      default: -1,
    }, // 初始化选中数组第几个从 0 开始
    effectKey: String, // 绑定有效值对应属性 key
    effectText: String, // 有效显示文案对应属性 key
    resloutAttr: String, // 选择结果展示属性值类型 key
    name: String, // radio 标签 name
    disabledValue: [String, Number, Boolean, Array], // 禁用的 radio 需要传一个数组
  },
  mounted() {
    if (this.checkedIndex > -1 && this.list && this.list.length > 0) {
      this.$emit('input', this.list[this.checkedIndex][this.inputReslout]);
    }
  },
  methods: {
    radioChange(obj) {
      this.$emit('input', obj[this.inputReslout]);
    },
  },
  watch: {
    list(val) {
      if (val && val.length > 0 && this.checkedIndex > -1) {
        this.$emit('input', val[this.checkedIndex][this.inputReslout]);
      }
    },
    resloutAttr(res) {
      if (this.list && this.list.length > 0 && this.checkedIndex > -1) {
        this.$emit('input', this.list[this.checkedIndex][res]);
      }
    },
  },
  filters: {
    disabledFilter(propObj, index) {
      if (Object.prototype.toString.apply(propObj) === '[object Number]') {
        return propObj === index;
      } else if (Object.prototype.toString.apply(propObj) === '[object Array]') {
        return propObj.indexOf(index) > -1;
      } else if (Object.prototype.toString.apply(propObj) === '[object String]') {
        return propObj === 'all';
      } else if (Object.prototype.toString.apply(propObj) === '[object Boolean]') {
        return propObj;
      } else {
        return false;
      }
    },
  },
  computed: {
    inputReslout() {
      return this.resloutAttr || this.effectText;
    },
  },
};
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
