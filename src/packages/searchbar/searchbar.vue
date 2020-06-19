<template>
  <div :class="['nut-searchbar', customClass ? customClass : '']">
    <div class="search-input" :class="[animation ? 'nut-search-ani' : '', inputFocusAnimation ? 'focus' : '']">
      <form action="javascript:return true" id="input-form">
        <nut-icon type="search" v-if="hasIcon" :size="searchIconSize" :color="searchIconColor"></nut-icon>
        <input
          type="search"
          v-model="value"
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
      default: false,
    },
    searchIconSize: {
      type: String,
      default: '20px',
    },
    searchIconColor: {
      type: String,
      default: '#2e2d2d',
    },
    searchBtnIconSize: {
      type: String,
      default: '20px',
    },
    searchBtnIconColor: {
      type: String,
      default: '#2e2d2d',
    },
    clearIconSize: {
      type: String,
      default: '15px',
    },
    clearIconColor: {
      type: String,
      default: '#2e2d2d',
    },
    placeText: {
      type: String,
    },
    hasSearchButton: {
      type: Boolean,
      default: true,
    },
    hasTextButton: {
      type: Boolean,
      default: false,
    },
    textInfo: {
      type: String,
    },
    animation: {
      type: Boolean,
      default: true,
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  components: {
    [nuticon.name]: nuticon,
  },
  data() {
    return {
      value: '', //输入值
      hasCloseIcon: false,
      inputFocusAnimation: false,
    };
  },
  computed: {},
  methods: {
    //清空 input 输入
    clearInput() {
      this.value = '';
      this.hasCloseIcon = false;
    },
    focusFun() {
      this.inputFocusAnimation = true;
      this.$emit('focus');
    },
    inputFun() {
      this.hasCloseIcon = this.value ? true : false;
      this.$emit('input', this.value);
    },
    blurFun() {
      this.inputFocusAnimation = false;
      this.$emit('blur', this.value);
    },
    submitFun() {
      this.$emit('submit', this.value);
    },
    // 失去焦点
    blur() {
      this.$refs.searchInput.blur();
    },
    //js控制获取焦点
    focus() {
      this.$nextTick(function () {
        this.$refs.searchInput.focus();
      });
    },
  },
};
</script>
