<template>
  <div class="nut-tabselect">
    <nut-popup
      round
      closeable  
      v-model="isShow"
      position="bottom"
      :style="{ height: '457px' }"
    >
      <div class="nut-tabselect-main-title" v-html="mainTitle"></div>
      <nut-tab @tab-switch="tabSwitchOuter">
        <nut-tab-panel
          v-for="(value, idx) in tabList"
          v-bind:key="value.tabTitle"
          :tabTitle="value.tabTitle"
        >
          <div class="nut-tabselect-sub-title" v-html="subTitle"></div>
          <nut-tab
            @tab-switch="tabSwitchInner"
            positionNav="left"
            class="nut-tab-inner"
          >
            <nut-tab-panel
              v-for="(item, index) in value.children"
              v-bind:key="item.tabTitle"
              :tabTitle="item.tabTitle"
            >
              <ul>
                <template v-if="item.content">
                  <li
                    v-for="(sitem, sIndex) in item.content"
                    v-bind:key="sitem"
                    @click="choose(idx, index, sIndex, item, sitem)"
                    class="nut-tab-panel-list"
                    :class="{
                      'nut-tab-panel-list-active': isActive(idx, index, sIndex)
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
                      'nut-tab-panel-list-active': isActive(idx, index, sIndex)
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
        <a href="javascript:;" @click="isShow = false">确定</a>
      </div>
    </nut-popup>
  </div>
</template>
<script>
import nuttab from "../tab/tab.vue";
import "../tab/tab.scss";
import nutpop from "../popup/popup.vue";
import "../popup/popup.scss";
export default {
  name: "nut-tabselect",
  props: {
    mainTitle: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    defaultContent: {
      type: Array,
      default: () => []
    },
    tabList: {
      type: Array,
      default: () => []
    },
    show: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: Infinity
    }
  },
  data() {
    return {
      isShow: false,
      level0: 0,
      level1: new Set([0]),
      level2: new Set(["0-0"]),
      allChoose: new Set([this.getText(0, 0, 0)])
    };
  },
  components: {
    [nuttab.name]: nuttab,
    [nutpop.name]: nutpop
  },
  watch: {
    show(val) {
      this.isShow = val;
    },
    isShow(val) {
      if (!val) {
        this.$emit("close");
      }
    }
  },
  mounted() {
    this.emit();
  },
  methods: {
    emit() {
      this.$emit(
        "choose",
        (this.tabList[this.level0] && this.tabList[this.level0].tabTitle) || "",
        [...this.allChoose]
      );
    },
    getText(idx, index, sIndex) {
      const tab =
        (this.tabList[idx] && this.tabList[idx].children[index]) || {};
      const subTit = tab.tabTitle;
      const content =
        (tab.content && tab.content[sIndex]) || this.defaultContent[sIndex];
      return subTit + " " + content;
    },
    tabSwitchOuter: function(index, event) {
      this.level0 = index;
      this.level1 = new Set([0]);
      this.level2 = new Set(["0-0"]);
      this.allChoose = new Set([this.getText(index, 0, 0)]);
      this.emit();
    },
    tabSwitchInner: function(index, event) {
      if (!this.multiple) {
        this.level1 = new Set([index]);
      } else {
        this.level1.add(index);
      }
    },
    unChoose(index, sIndex) {
      this.level2.delete(index + "-" + sIndex);
      this.level2 = new Set(this.level2);
    },
    choose(idx, index, sIndex) {
      if (this.multiple && this.isActive(idx, index, sIndex)) {
        this.unChoose(index, sIndex);
        this.allChoose.delete(this.getText(idx, index, sIndex));
        this.emit();
        return;
      }
      if (!this.multiple) {
        this.level2 = new Set([index + "-" + sIndex]);
        this.allChoose = new Set([this.getText(index, 0, 0)]);
      } else {
        if (this.max !== Infinity && this.max === this.level2.size) {
          return;
        }
        this.level2 = new Set([...this.level2.add(index + "-" + sIndex)]);
        this.allChoose.add(this.getText(idx, index, sIndex));
      }
      this.emit();
    },
    isActive(idx, index, sIndex) {
      if (
        idx === this.level0 &&
        this.level1.has(index) &&
        this.level2.has(index + "-" + sIndex)
      ) {
        return true;
      }
      return false;
    }
  }
};
</script>
