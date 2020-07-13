<template>
  <div class="nut-tabselect" v-if="list.length">
    <nut-popup round closeable v-model="isShow" position="bottom" :style="{ height: '457px' }" :lock-scroll="isLockBgScroll">
      <div class="nut-tabselect-main-title" v-html="mainTitle"></div>
      <nut-tab @tab-switch="tabSwitchOuter" :init-data="list">
        <nut-tab-panel v-for="(value, idx) in list" v-bind:key="value.tabTitle" :tabTitle="value.tabTitle">
          <div class="nut-tabselect-sub-title" v-html="subTitle"></div>
          <nut-tab @tab-switch="tabSwitchInner" positionNav="left" class="nut-tab-inner" :init-data="value.children" :defIndex="defIndex">
            <nut-tab-panel v-for="(item, index) in value.children" v-bind:key="item.tabTitle" :tabTitle="item.tabTitle">
              <ul>
                <template v-if="item.content">
                  <li
                    v-for="(sitem, sIndex) in item.content"
                    v-bind:key="sitem"
                    @click="choose(idx, index, sIndex, item, sitem)"
                    class="nut-tab-panel-list"
                    :class="{
                      'nut-tab-panel-list-active': isActive(idx, index, sIndex),
                    }"
                  >
                    {{ sitem }}
                  </li>
                </template>
                <template v-else-if="defaultContent">
                  <li
                    v-for="(sitem, sIndex) in defaultContent"
                    v-bind:key="sitem"
                    @click="choose(idx, index, sIndex, item, sitem)"
                    class="nut-tab-panel-list"
                    :class="{
                      'nut-tab-panel-list-active': isActive(idx, index, sIndex),
                    }"
                  >
                    {{ sitem }}
                  </li>
                </template>
              </ul>
            </nut-tab-panel>
          </nut-tab>
        </nut-tab-panel>
      </nut-tab>
      <div class="nut-tabselect-btn">
        <a href="javascript:;" @click="clickHandler">确定</a>
      </div>
    </nut-popup>
  </div>
</template>
<script>
import nuttab from '../tab/tab.vue';
import '../tab/tab.scss';
import nutpop from '../popup/popup.vue';
import '../popup/popup.scss';
export default {
  name: 'nut-tabselect',
  props: {
    mainTitle: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    isLockBgScroll: {
      type: Boolean,
      default: true,
    },
    defaultContent: {
      type: Array,
      default: () => [],
    },
    tabList: {
      type: Array,
      default: () => [],
    },
    show: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    isDefaultSelected: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShow: false,
      level0: 0,
      level1: new Set([0]),
      level2: this.isDefaultSelected ? new Set(['0-0']) : new Set(),
      allChoose: this.getText(0, 0, this.isDefaultSelected ? 0 : null),
      list: [],
      defIndex: 0,
    };
  },
  components: {
    [nuttab.name]: nuttab,
    [nutpop.name]: nutpop,
  },
  watch: {
    show(val) {
      this.isShow = val;
    },
    isShow(val) {
      if (!val) {
        this.$emit('close');
      }
    },
    tabList: {
      handler(val) {
        this.list = val;
        this.level0 = 0;
        this.level1 = new Set([0]);
        this.level2 = this.isDefaultSelected ? new Set(['0-0']) : new Set();
        this.allChoose = this.getText(0, 0, this.isDefaultSelected ? 0 : null);
        this.emit();
      },
      deep: true,
    },
  },
  mounted() {
    this.list = this.tabList;
    this.allChoose = this.getText(0, 0, this.isDefaultSelected ? 0 : null);
    this.emit();
  },
  methods: {
    emit() {
      this.$emit(
        'choose',
        (this.list && this.list[this.level0] && this.list[this.level0].tabTitle) || '',
        (this.allChoose && [...this.allChoose]) || []
      );
    },
    getText(idx, index, sIndex) {
      if (sIndex === null) {
        return null;
      }
      const tab = (this.list && this.list[idx] && this.list[idx].children[index]) || {};
      const subTit = tab.tabTitle;
      const content = (tab.content && tab.content[sIndex]) || this.defaultContent[sIndex];
      return new Set([{ subTit, content }]);
    },
    tabSwitchOuter: function (index, event) {
      this.defIndex = 0;
      this.level0 = index;
      this.level1 = new Set([0]);
      this.level2 = this.isDefaultSelected ? new Set(['0-0']) : new Set();
      this.allChoose = this.getText(index, 0, this.isDefaultSelected ? 0 : null);
      this.emit();
    },
    tabSwitchInner: function (index, event) {
      this.defIndex = index;
      if (!this.multiple) {
        this.level1 = new Set([index]);
      } else {
        this.level1.add(index);
      }
    },
    unChoose(index, sIndex) {
      this.level2.delete(index + '-' + sIndex);
      this.level2 = new Set(this.level2);
    },
    choose(idx, index, sIndex) {
      if (this.multiple && this.isActive(idx, index, sIndex)) {
        this.unChoose(index, sIndex);
        this.getText(idx, index, sIndex).forEach((o) => {
          for (let indexdel of this.allChoose.values()) {
            if (JSON.stringify(o) === JSON.stringify(indexdel)) {
              this.allChoose.delete(indexdel);
            }
          }
        });
        this.emit();
        return;
      }
      if (!this.multiple) {
        this.level2 = new Set([index + '-' + sIndex]);
        this.allChoose = this.getText(idx, index, sIndex);
      } else {
        if (this.max !== Infinity && this.max === this.level2.size) {
          return;
        }
        this.level2 = new Set([...this.level2.add(index + '-' + sIndex)]);
        if (this.allChoose) {
          this.allChoose.add(...this.getText(idx, index, sIndex));
        } else {
          this.allChoose = this.getText(idx, index, sIndex);
        }
      }
      this.emit();
    },
    clickHandler(event) {
      this.$emit('onOkBtn', event);
      this.isShow = false;
    },
    isActive(idx, index, sIndex) {
      if (idx === this.level0 && this.level1.has(index) && this.level2.has(index + '-' + sIndex)) {
        return true;
      }
      return false;
    },
  },
};
</script>
