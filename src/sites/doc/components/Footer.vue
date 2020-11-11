<template>
  <div class="doc-footer" :class="`doc-footer-${data.theme}`">
    <div class="doc-footer-content">
      <div class="doc-footer-list">
        <h4 class="doc-footer-title">相关资源</h4>
        <div class="doc-footer-item">JDW智能构建平台</div>
        <div class="doc-footer-item">JDW智能构建平台</div>
      </div>
      <div class="doc-footer-list">
        <h4 class="doc-footer-title">相关资源</h4>
        <div class="doc-footer-item">JDW智能构建平台</div>
        <div class="doc-footer-item">JDW智能构建平台</div>
      </div>
      <div class="doc-footer-list">
        <h4 class="doc-footer-title">相关资源</h4>
        <div class="doc-footer-item">JDW智能构建平台</div>
        <div class="doc-footer-item">JDW智能构建平台</div>
      </div>
      <div class="doc-footer-list">
        <h4 class="doc-footer-title">相关资源</h4>
        <div class="doc-footer-item">JDW智能构建平台</div>
        <div class="doc-footer-item">JDW智能构建平台</div>
      </div>
      <div class="doc-footer-list" @click.stop="data.isShowSelect = !data.isShowSelect">
        <div class="doc-footer-select-hd"><i class=""></i>主题换肤</div>
        <div class="doc-footer-select-bd" v-show="data.isShowSelect">
          <div
            class="doc-footer-select-item"
            v-for="(item, index) in data.themeList"
            :key="index"
            @click.stop="checkTheme(index)"
            :class="{ active: data.activeIndex === index }"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <p class="doc-footer-desc">2020 JDRD-FEB 前端开发部.All Rights Reserved.</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'doc-footer',
  setup() {
    const data = reactive({
      theme: 'black',
      themeList: [
        {
          name: '热情红'
        },
        {
          name: '暗黑风'
        },
        {
          name: '纯净白'
        }
      ],
      activeIndex: 0,
      isShowSelect: false
    });
    const clickOut = () => {
      //点击组件以外的地方，收起
      document.addEventListener(
        'click',
        e => {
          console.log('e.target', e.target);
          // if (!this.$el.contains(e.target)){
          //   data.isShowSelect = false;
          // }
        },
        false
      );
    };
    const checkTheme = (index: number) => {
      data.isShowSelect = false;
      data.activeIndex = index;
      console.log('data.isShowSelect', data.isShowSelect);
    };
    return {
      data,
      clickOut,
      checkTheme
    };
  }
});
</script>

<style lang="scss">
.doc {
  &-footer {
    padding: 30px 80px 20px;
    text-align: center;
    &-content {
      display: flex;
      justify-content: space-around;
      margin-right: 50px;
    }
    &-list {
      position: relative;
    }
    &-title {
      margin-bottom: 24px;
      font-size: 16px;
      font-weight: bold;
    }
    &-item {
      margin-bottom: 14px;
      line-height: 17px;
      font-size: 12px;
    }
    &-desc {
      margin-top: 30px;
      font-size: 12px;
    }
    &-select-hd {
      width: 110px;
      height: 32px;
      padding: 0 12px;
      line-height: 30px;
      font-size: 14px;
      border-width: 1px;
      border-style: solid;
      border-radius: 2px;
      cursor: pointer;
      &:hover {
      }
    }
    &-select-bd {
      position: absolute;
      border-radius: 2px;
    }
    &-select-item {
      width: 110px;
      height: 32px;
      padding: 0 12px;
      line-height: 30px;
      font-size: 14px;
      border-width: 0px 1px 1px;
      border-style: solid;
      border-radius: 2px;
      cursor: pointer;
    }
  }
}
// 颜色
.doc-footer {
  // 黑色
  &-black {
    background: $theme-black-footer-bg;
    border-top: 1px solid $theme-black-footer-border;
    .doc-footer {
      &-title {
        color: $theme-black-footer-word1;
      }
      &-item {
        color: $theme-black-footer-word2;
      }
      &-desc {
        color: $theme-black-footer-word4;
      }
      &-select-hd {
        color: $theme-black-footer-word2;
        background: rgba(29, 29, 33, 1);
        border-color: $theme-black-border;
        &:hover {
          border-color: $theme-black-footer-hover;
        }
      }
      &-select-item {
        color: $theme-black-footer-word2;
        background: rgba(29, 29, 33, 1);
        border-color: $theme-black-border;
        // &:first-of-type {
        //   border-top: none;
        // }
        &:hover {
          // color: $theme-black-footer-hover;
          // border-color: $theme-black-footer-hover;
        }
        &.active {
          border-color: $theme-black-footer-hover;
          background-color: $theme-black-footer-hover;
        }
      }
    }
  }
}
</style>
