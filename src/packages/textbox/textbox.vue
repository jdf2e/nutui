<template>
  <div class="nut-textbox">
    <div class="txt-area" :class="{ error: errorState, 'num-none': limitShow == false }" :style="{ background: textBgColor }">
      <textarea
        :placeholder="placeText"
        :style="{ height: txtAreaHeight + 'px' }"
        v-model="currentValue"
        @input="txtIptLength"
        :switchMax="switchMax"
        :maxlength="iptMaxlength"
      ></textarea>
      <span v-show="limitShow">{{ txtNum }}/{{ maxNum }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nut-textbox',
  props: {
    value: {
      type: String,
      default: '',
    },
    maxNum: {
      type: [String, Number],
      default: 50,
    },
    placeText: {
      type: String,
      default: '请您在此输入',
    },
    txtAreaH: {
      type: [String, Number],
      default: '50',
    },
    switchMax: {
      type: Boolean,
      default: false,
    },
    textBgColor: {
      type: String,
      default: '#fff',
    },
    limitShow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      errorState: false,
      txtNum: 0,
    };
  },
  mounted() {},
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {},
    },
    txtAreaHeight: function () {
      let txtAreaH;
      txtAreaH = this.txtAreaH;

      return txtAreaH;
    },
    iptMaxlength() {
      let maxlength;
      if (this.switchMax) {
        maxlength = this.maxNum;
      }
      return maxlength;
    },
  },
  methods: {
    txtIptLength(event) {
      const data = event.target.value;
      const txtLength = data.length;
      this.txtNum = txtLength;
      if (txtLength > this.maxNum) {
        this.errorState = true;
        this.$emit('errorFunc');
      } else {
        this.errorState = false;
      }
      this.$emit('inputFunc', data);
      this.$emit('input', data);
    },
  },
};
</script>
