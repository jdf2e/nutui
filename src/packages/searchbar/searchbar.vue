<template>
  <div :class="['nut-searchbar', customClass ? customClass : '']">
    <div class="search-input" :class="[animation ? 'nut-search-ani' : '', inputFocusAnimation ? 'focus' : '']">
      <form action="javascript:return true" id="input-form">
        <nut-icon class="search-icon" type="search3" v-if="hasIcon" :size="searchIconSize" :color="searchIconColor"> </nut-icon>
        <input
          type="search"
          :value="value"
          :class="[inputAlign]"
          :placeholder="placeText || nutTranslate('lang.searchbar.placeText')"
          @keyup.enter="submitFun"
          @input="inputFun"
          @blur="blurFun"
          @focus="focusFun"
          ref="searchInput"
        />
        <!-- 清空input中输入的内容 -->
        <span class="input-right close-icon" v-if="clearable && hasCloseIcon" :class="[hasAction ? 'pos' : '']" @click="clearInput">
          <nut-icon type="clear" :size="clearIconSize"></nut-icon>
        </span>
        <!-- input右侧事件 -- 默认 二维码 -->
        <span class="input-right custom-icon" v-if="hasAction" @click="handleAction">
          <nut-icon v-if="hasAction && actionIcon == ''" type="qr" :size="actionIconSize"></nut-icon>
          <nut-icon v-if="hasAction && actionIcon != ''" type="self" :url="actionIcon" :size="actionIconSize"> </nut-icon>
        </span>
      </form>
    </div>
    <div class="btn-right" v-if="hasSearchButton" @click="submitFun">
      <span v-if="hasTextButton">{{ textInfo || nutTranslate('lang.searchbar.textInfo') }}</span>
      <nut-icon type="search3" v-if="!hasTextButton && searchBtnIcon == ''" :size="searchBtnIconSize" :color="searchBtnIconColor"></nut-icon>
      <nut-icon
        type="self"
        v-if="!hasTextButton && searchBtnIcon != ''"
        :size="searchBtnIconSize"
        :color="searchBtnIconColor"
        :url="searchBtnIcon"
      ></nut-icon>
    </div>
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
      default: '14px',
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
    // 新增 input 输入的位置  left center right
    inputAlign: {
      type: String,
      default: 'left',
    },
    // 新增 是否启用清除控件
    clearable: {
      type: Boolean,
      default: true,
    },
    // 新增 搜索框右侧按钮
    hasAction: {
      type: Boolean,
      default: false,
    },
    actionIcon: {
      type: String,
      default: '',
    },
    actionIconSize: {
      type: String,
      default: '20px',
    },
    // 新增 右侧按钮图标
    searchBtnIcon: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  components: {
    [nuticon.name]: nuticon,
  },
  data() {
    return {
      inputFocusAnimation: false,
    };
  },
  watch: {
    value(newValue, oldValue) {
      this.updateValue('change');
    },
  },
  computed: {
    hasCloseIcon() {
      return this.value ? true : false;
    },
  },
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
      this.$nextTick(function () {
        this.$refs.searchInput.focus();
      });
    },

    handleAction() {
      this.$emit('handle-action', this.value);
    },
  },
};
</script>
