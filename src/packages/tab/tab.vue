<template>
  <div class="nut-tab-part">
    <div class="nut-tab" :class="{ 'nut-tab-horizontal': positionNavCss }">
      <div v-if="positionNav == 'right' || positionNav == 'bottom'" class="nut-tab-item" ref="items">
        <slot></slot>
      </div>
      <div :class="titleClass" ref="navlist" :style="customHeight">
        <b v-if="isShowLine" :class="navBarClass" :style="navBarStyle"></b>
        <span
          v-for="(value, index) in tabTitleList"
          :key="index"
          :class="[titleNavList, 'nut-title-nav', { 'nut-tab-disable': value.disable }, { 'nut-tab-active': activeIndex == index }]"
        >
          <a class="nut-tab-link" v-on:click="switchTab(index, $event, value.disable)">
            <i class="nut-tab-icon" :style="{ backgroundImage: 'url(' + value.iconUrl + ')' }" v-if="value.iconUrl"></i>
            {{ value.tabTitle }}
          </a>
        </span>
      </div>
      <div v-if="positionNav == 'top' || positionNav == 'left'" class="nut-tab-item" ref="items" :style="customHeight">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nut-tab',
  props: {
    isScroll: {
      type: Boolean,
      default: false
    },
    isShowLine: {
      type: Boolean,
      default: true
    },
    defIndex: {
      type: Number,
      default: 0
    },
    positionNav: {
      type: String,
      default: 'top'
    },
    initData: {
      type: Array,
      default: function() {
        return [];
      }
    },
    wrapperHeight: {
      type: [String, Number],
      default: '200'
    },
    lineWidth: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tabTitleList: [],
      activeIndex: this.defIndex,
      initX: '0',
      navWidth: 0,
      tapWidth: 0
    };
  },
  watch: {
    isScroll() {
      this.updeteTab();
    },
    lineWidth() {
      this.updeteTab();
    },
    defIndex() {
      this.updeteTab();
    },
    initData: {
      handler() {
        this.updeteTab();
      },
      deep: true
    }
  },
  computed: {
    //下面有些样式名称是为了兼容之前的版本
    positionNavCss: function() {
      if (this.positionNav === 'left' || this.positionNav === 'right') return true;
    },
    titleClass: function() {
      if (this.positionNav == 'top') {
        return 'nut-tab-title';
      }
      return 'nut-tab-title-' + this.positionNav + 'nav';
    },
    navBarClass: function() {
      if (this.positionNav == 'top') {
        return 'nav-bar';
      }
      return 'nav-bar-' + this.positionNav;
    },
    titleNavList: function() {
      if (this.positionNav == 'top' || this.positionNav == 'bottom') {
        if (this.isScroll) {
          return 'nut-title-nav-scroll';
        }
        return 'nut-title-nav-list';
      } else {
        if (this.isScroll) {
          return 'nut-title-vertical-scroll';
        }
        return 'nut-title-nav-' + this.positionNav + 'nav';
      }
    },
    navBarStyle: function() {
      if (this.positionNav === 'top' || this.positionNav === 'bottom') {
        return {
          transform: `translateX(${this.initX}px)`,
          //width: this.navWidth + 'px'
          width: (this.lineWidth ? this.lineWidth : this.navWidth) + 'px'
        };
      }
      return {
        transform: `translateY(${this.initX}px)`,
        //height: this.navWidth + 'px'
        height: (this.lineWidth ? this.lineWidth : this.navWidth) + 'px'
      };
    },
    customHeight: function() {
      if (this.isScroll && (this.positionNav === 'left' || this.positionNav === 'right')) {
        return {
          height: this.wrapperHeight + 'px'
        };
      } else {
        return null;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$slots.default && this.updeteTab(this.$slots.default);
    });
  },
  methods: {
    updeteTab: function() {
      this.$nextTick(() => {
        this.tabTitleList = [];
        this.activeIndex = this.defIndex;
        this.initTab([...this.$slots.default]);
      });
    },
    initTab: function(slot) {
      for (let i = 0; i < slot.length; i++) {
        let slotTag = slot[i].tag;
        if (typeof slotTag == 'string' && slotTag.indexOf('nut-tab-panel') != -1) {
          let attrs = slot[i].data.attrs;
          let item = {
            tabTitle: attrs['tab-title'] || attrs['tabTitle'],
            disable: attrs.disable === false,
            iconUrl: attrs['iconUrl'] || attrs['icon-url']
          };
          this.tabTitleList.push(item);
          let slotElm = slot[i].elm;
          if (slotElm) {
            slotElm.classList.add('hide');
            if (this.activeIndex == i) {
              slotElm.classList.remove('hide');
            }
          }
        }
      }
      this.$nextTick(() => {
        let tapWidth;
        if (this.positionNav == 'top' || this.positionNav == 'bottom') {
          this.navWidth = this.$refs.navlist.querySelector('.nut-title-nav').offsetWidth;
          tapWidth = this.$refs.navlist.offsetWidth;
        } else {
          this.navWidth = this.$refs.navlist.querySelector('.nut-title-nav').offsetHeight;
          tapWidth = this.$refs.navlist.offsetHeight;
        }
        // this.initX = parseInt(this.navWidth * this.defIndex);
        // this.tapWidth = tapWidth / 2 - this.navWidth / 2;
        if (this.lineWidth > 0 && this.lineWidth < this.navWidth) {
          this.initX = parseInt((this.navWidth - this.lineWidth) / 2 + this.navWidth * this.defIndex);
        } else {
          this.initX = parseInt(this.navWidth * this.defIndex);
          this.tapWidth = tapWidth / 2 - this.navWidth / 2;
        }
      });
    },
    findParent(event, myclass) {
      let parentCpt = event.target;
      let flag = 0; //避免死循环
      while (parentCpt && flag < 10) {
        flag++;
        if (parentCpt.className && parentCpt.className === myclass) {
          break;
        }
        parentCpt = parentCpt.parentNode;
      }
      return parentCpt;
    },
    switchTab: function(index, event, disable) {
      if (!disable) {
        this.activeIndex = index;
        // this.initX = parseInt(this.navWidth * index);
        if (this.lineWidth > 0 && this.lineWidth < this.navWidth) {
          this.initX = parseInt((this.navWidth - this.lineWidth) / 2 + this.navWidth * index);
        } else {
          this.initX = parseInt(this.navWidth * index);
        }
        if (this.positionNav == 'top' || this.positionNav == 'bottom') {
          this.$refs.navlist.scroll(this.initX - this.tapWidth, 0);
        } else {
          this.$refs.navlist.scroll(0, this.initX - this.tapWidth);
        }
        let nutTab = this.findParent(event, 'nut-tab-part');
        let items = this.$refs.items.children;
        for (let i = 0; i < items.length; i++) {
          if (i == index) {
            items[i].classList.remove('hide');
          } else {
            items[i].classList.add('hide');
          }
        }
        this.$emit('tab-switch', index, event);
        this.$emit('tabSwitch', index, event); //兼容以前驼峰法命名
      }
    }
  }
};
</script>
