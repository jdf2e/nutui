<template>
  <div class="nut-menu">
    <transition :name="!isAnimation ? 'nutFade' : ''">
      <div class="nut-menu-mask" @click="onMaskClick" v-show="isVisible && mask" />
    </transition>
    <div class="nut-menu-title">
      <div v-for="(title, index) in getMenuTitles" class="nut-menu-title-wrapper" :key="index" @click="onMenu(index)">
        <span>{{ title }}</span>
        <nut-icon type="self" :url="require('../../assets/svg/down.svg')" :class="isVisible && index === menuIndex ? 'nut-icon-up' : ''"></nut-icon>
      </div>
    </div>
    <transition :name="!isAnimation ? 'nutSlideDown' : ''">
      <div class="nut-menu-panel" v-show="isVisible">
        <div class="nut-menu-simple" v-if="type === 'simple' && !$slots.custom">
          <ul>
            <li
              v-for="(item, index) in getMenuData"
              :key="index"
              :class="'nut-menu-item ' + (item.selected ? 'selected' : '')"
              @click="onSelectedItem(item, index)"
            >
              {{ item.text }}
            </li>
          </ul>
        </div>
        <div class="nut-menu-multiple" v-if="type === 'multiple'">
          <div class="nut-menu-multiple-content">
            <nut-tag
              v-for="(item, index) in menuData"
              :key="index"
              :class="'nut-menu-item ' + (item.selected ? 'nut-menu-selected' : '')"
              @click="onSelectedItem(item, index)"
            >
              {{ item.text }}
            </nut-tag>
          </div>
          <div class="nut-menu-button-group">
            <nut-button block type="light" @click="onReset">{{ resetBtnTxt }}</nut-button>
            <nut-button block @click="onOk">{{ okBtnTxt }}</nut-button>
          </div>
        </div>
        <div class="menu-menu-custom" v-if="$slots.custom">
          <slot name="custom"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Button from '../button/button.vue';
import Tag from '../tag/tag.vue';
import Icon from '../icon/icon.vue';
import locale from '../../mixins/locale';
import cloneDeep from 'lodash.clonedeep';

const lockMaskScroll = ((bodyCls) => {
  let scrollTop;
  return {
    afterOpen: function () {
      scrollTop = document.scrollingElement.scrollTop || document.body.scrollTop;
      document.body.classList.add(bodyCls);
      document.body.style.top = -scrollTop + 'px';
    },
    beforeClose: function () {
      if (document.body.classList.contains(bodyCls)) {
        document.body.classList.remove(bodyCls);
        document.scrollingElement.scrollTop = scrollTop;
      }
    },
  };
})('dialog-open');
export default {
  name: 'nut-menu',
  mixins: [locale],
  components: {
    'nut-button': Button,
    'nut-icon': Icon,
    'nut-tag': Tag,
  },
  props: {
    isAnimation: {
      //是否有动画效果
      type: Boolean,
      default: false,
    },
    visible: {
      //是否显示
      type: Boolean,
      default: false,
    },
    mask: {
      //是否显示mask
      type: Boolean,
      default: false,
    },
    type: {
      //单选 simple  多选  multiple
      type: String,
      default: 'simple',
    },
    col: {
      //显示的列数
      type: [Number, String],
      default: 1,
    },
    max: {
      type: [String, Number],
      default: 5,
    },
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  watch: {
    isVisible(val) {
      lockMaskScroll[val ? 'afterOpen' : 'beforeClose']();
    },
  },
  data() {
    return {
      menuData: [], //多选模式，数据临时数据
      datalist: [], // menu组件数据源
      menuIndex: 0, // 当前列索引
      isVisible: false, // 当前面板是否打开
    };
  },
  mounted() {
    this.datalist = this.list;
    this.isVisible = this.visible;
  },
  computed: {
    okBtnTxt() {
      return this.nutTranslate('lang.okBtnTxt');
    },
    resetBtnTxt() {
      return this.nutTranslate('lang.menu.resetBtnTxt');
    },
    // 判断数据源为复杂类型，即多元数组
    isMulColumn() {
      if (!this.datalist || !this.datalist.length) return false;
      const firstChildren = this.datalist[0].children;
      const mulColumn = firstChildren && firstChildren.length;
      return !!mulColumn;
    },
    // 获取nut-menu-title
    getMenuTitles() {
      if (!this.datalist || !this.datalist.length) return ['请选择'];
      if (!this.isMulColumn) {
        return [
          this.datalist
            .filter((item) => item.selected)
            .map((item) => item.text)
            .join() || '请选择',
        ];
      } else {
        return this.datalist.map((item) => {
          const children = item.children || [];
          return (
            children
              .filter((item) => item.selected)
              .map((item) => item.text)
              .join() || '请选择'
          );
        });
      }
    },
    // 获取选中但前列的数据源
    getMenuData() {
      if (this.isMulColumn) {
        return this.datalist[this.menuIndex].children || [];
      }
      return this.datalist;
    },
  },
  methods: {
    onSelectedItem(item, index) {
      // 多选
      if (this.type === 'multiple') {
        const isSelected = item.selected;
        // 多选时，会限制最大选项数
        if (!isSelected) {
          const selectedCount = this.menuData.filter((item) => item.selected).length;
          if (selectedCount >= Number(this.max)) {
            this.$emit('maxTip');
            return;
          }
        }
        item.selected = !item.selected;
      } else {
        // 单选
        this.getMenuData.forEach((item) => item.selected && (item.selected = false));
        item.selected = true;
        this.close();
      }
      this.$emit('choose', item, index);
    },
    onMenu(index) {
      this.isVisible = this.menuIndex !== index || !this.isVisible;
      this.menuIndex = index;
      if (this.isVisible) {
        this.menuData = cloneDeep(this.datalist[index].children);
        this.$emit('open');
      } else {
        this.$emit('close');
      }
    },
    onReset() {
      this.getMenuData.forEach((item) => item.selected && (item.selected = false));
      this.$emit('reset', this.datalist, this.menuIndex);
    },
    onOk() {
      this.datalist[this.menuIndex].children = this.menuData;
      this.close();
      this.$emit('ok', this.datalist);
    },
    close() {
      this.isVisible = false;
      this.$emit('close');
    },
    onMaskClick() {
      this.close();
    },
  },
};
</script>
