<template>
  <div :class="['nut-searchbar', customClass ? customClass : '']">
    <div class="search-input" :class="[animation ? 'nut-search-ani' : '', inputFocusAnimation ? 'focus' : '']">
      <form id="input-form" @submit.prevent>
        <nut-icon type="search" v-if="hasIcon" :size="searchIconSize" :color="searchIconColor"></nut-icon>
        <input
          type="search"
          :value="value"
          :placeholder="placeText || nutTranslate('lang.searchbar.placeText')"
          @keyup.enter="submitFun"
          @input="inputFun"
          @blur="blurFun"
          @focus="focusFun"
          ref="searchInput"
        />
        <span class="close-icon" :class="hasCloseIcon ? 'show' : ''" @click="clearInput">
          <nut-icon type="circle-cross" :size="clearIconSize" :color="clearIconColor"></nut-icon>
        </span>
      </form>
    </div>
    <a href="javascript:;" class="btn-search" v-if="hasSearchButton" @click="submitFun">
      <span v-if="hasTextButton">{{ textInfo || nutTranslate('lang.searchbar.textInfo') }}</span>
      <nut-icon type="search" v-else :size="searchBtnIconSize" :color="searchBtnIconColor"></nut-icon>
    </a>
  </div>
</template>
<script>
import nuticon from '../icon/icon.vue';
import locale from '../../mixins/locale';
export default {
  name: 'nut-searchbar',
  mixins: [locale],
  props: {
    hasIcon: {
      type: Boolean,
      default: false
    },
    searchIconSize: {
      type: String,
      default: '20px'
    },
    searchIconColor: {
      type: String,
      default: '#2e2d2d'
    },
    searchBtnIconSize: {
      type: String,
      default: '20px'
    },
    searchBtnIconColor: {
      type: String,
      default: '#2e2d2d'
    },
    clearIconSize: {
      type: String,
      default: '15px'
    },
    clearIconColor: {
      type: String,
      default: '#2e2d2d'
    },
    placeText: {
      type: String
    },
    hasSearchButton: {
      type: Boolean,
      default: true
    },
    hasTextButton: {
      type: Boolean,
      default: false
    },
    textInfo: {
      type: String
    },
    animation: {
      type: Boolean,
      default: true
    },
    customClass: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  components: {
    [nuticon.name]: nuticon
  },
  data() {
    return {
      inputFocusAnimation: false
    };
  },
  watch: {
    value(newValue, oldValue) {
      this.updateValue('change');
    }
  },
  computed: {
    hasCloseIcon() {
      return this.value ? true : false;
    }
  },
  mounted() {},
  methods: {
    updateValue(trigger = 'input') {
      let searchInputValue = trigger == 'change' ? this.value : this.$refs.searchInput.value;
      this.$emit(trigger, searchInputValue);
    },
    //清空 input 输入
    clearInput() {
      this.$emit('clear', '');
      this.$emit('input', '');
    },
    focusFun() {
      this.inputFocusAnimation = true;
      this.$emit('focus');
    },
    inputFun() {
      this.updateValue();
    },
    blurFun() {
      this.inputFocusAnimation = false;
      this.updateValue('blur');
    },
    submitFun() {
      this.updateValue('submit');
    },
    // 失去焦点
    blur() {
      this.$refs.searchInput.blur();
    },
    //js控制获取焦点
    focus() {
      this.$nextTick(function() {
        this.$refs.searchInput.focus();
      });
    }
  }
};
</script>
