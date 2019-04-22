<template>
  <label :class="['nut-textinput',{'nut-textinput-disabled':disabled}]">
    <span class="nut-textinput-label" v-if="label">{{label}}</span>
    <input
      :type="type"
      :value="value"
      :disabled="disabled"
      :style="{'borderWidth':hasBorder?'':0,'outline':outline?'':'none','padding-right':clearBtn?'':'10px'}"
      v-bind="$attrs"
      v-on="inputListeners"
    >
    <span class="nut-textinput-clear" v-if="clearBtn" v-show="clearBtnShow" @click="clear">
      <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm2.8 9.7c.3.3.3.8 0 1.1s-.8.3-1.1 0L8 9.1l-1.7 1.7c-.3.3-.8.3-1.1 0-.3-.3-.3-.8 0-1.1L6.9 8 5.2 6.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0L8 6.9l1.7-1.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1L9.1 8l1.7 1.7z"
        ></path>
      </svg>
    </span>
  </label>
</template>
<script>
export default {
  name: "nut-textinput",
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    outline: {
      type: Boolean,
      default: false
    },
    clearBtn: {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  data() {
    return {
      clearBtnShow: false
    };
  },
  computed: {
    inputListeners() {
      let vm = this;
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          vm.clearBtnShow = !!event.target.value;
          vm.$emit("input", event.target.value);
        }
      });
    }
  },
  methods: {
    clear() {
      this.$emit("input", "");
      this.clearBtnShow = false;
    }
  },
  mounted() {
    this.clearBtnShow = !!this.value;
  }
};
</script>