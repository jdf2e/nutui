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
        <div class="doc-footer-select-hd"><i class="icon-color"></i>主题换肤</div>
        <div class="doc-footer-select-bd" v-show="data.isShowSelect">
          <div
            class="doc-footer-select-item"
            v-for="(item, index) in data.themeList"
            :key="index"
            @click.stop="checkTheme(index)"
            :class="{ active: data.activeIndex === index }"
          >
            <i :class="`circle-${item.color}`"></i>{{ item.name }}
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
      theme: 'red',
      themeList: [
        {
          name: '热情红',
          color: 'red'
        },
        {
          name: '暗黑风',
          color: 'black'
        },
        {
          name: '纯净白',
          color: 'white'
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
      width: 92px;
      height: 32px;
      padding: 0 10px;
      line-height: 32px;
      font-size: 12px;
      text-align: left;
      border-width: 1px;
      border-style: solid;
      border-radius: 2px;
      cursor: pointer;
    }
    &-select-bd {
      position: absolute;
      border-radius: 2px;
      text-align: left;
    }
    &-select-item {
      width: 92px;
      height: 32px;
      padding: 0 10px;
      line-height: 32px;
      font-size: 12px;
      border-width: 0px 1px 1px;
      border-style: solid;
      border-radius: 2px;
      cursor: pointer;
    }
    .icon-color {
      display: inline-block;
      width: 12px;
      height: 10px;
      margin-right: 10px;
      background: url('../../assets/images/icon-color.png') no-repeat center/100%;
    }
    .circle-red,
    .circle-black,
    .circle-white {
      position: relative;
      top: -1px;
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 10px;
      border-radius: 50%;
      vertical-align: middle;
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
        // background: rgba(29, 29, 33, 1);
        border-color: $theme-black-theme-border;
        &:hover {
          color: $theme-black-footer-hover;
        }
      }
      &-select-item {
        color: $theme-black-footer-word2;
        // background: rgba(29, 29, 33, 1);
        border-color: $theme-black-theme-border;
        .circle-red {
          background: $theme-red-gradient;
        }
        .circle-black {
          background: $theme-black-circle;
          border: 1px solid $theme-black-theme-border;
        }
        .circle-white {
          background: $theme-white-circle;
        }
        &:hover {
          background-color: $theme-black-theme-border;
          .circle-black {
            border-color: $theme-black-circle;
          }
        }
        &.active {
          background-color: $theme-black-footer-hover;
          border-color: $theme-black-footer-hover;
          .circle-red {
            border: 1px solid $theme-red-border;
          }
          .circle-black {
            border-color: $theme-black-footer-bg;
          }
        }
      }
    }
  }
  // 白色、红色
  &-white,
  &-red {
    background: $theme-white-footer-bg;
    border-top: 1px solid $theme-white-footer-border;
    .doc-footer {
      &-title {
        color: $theme-white-footer-word1;
      }
      &-item {
        color: $theme-white-footer-word2;
      }
      &-desc {
        color: $theme-white-footer-word4;
      }
      &-select-hd {
        color: $theme-white-footer-word2;
        // background: rgba(29, 29, 33, 1);
        border-color: $theme-white-theme-border;
        &:hover {
          color: $theme-white-footer-hover;
        }
      }
      &-select-item {
        color: $theme-white-footer-word2;
        // background: rgba(29, 29, 33, 1);
        border-color: $theme-white-theme-border;
        .circle-red {
          background: $theme-red-gradient;
        }
        .circle-black {
          background: $theme-black-circle;
          border: 1px solid $theme-black-circle;
        }
        .circle-white {
          background: $theme-white-circle;
          border: 1px solid $theme-white-circle-border;
        }
        &:hover {
          color: $theme-white-footer-word3;
          background-color: $theme-white-theme-border;
          .circle-black {
            border-color: $theme-black-circle;
          }
        }
        &.active {
          color: $theme-white;
          background-color: $theme-white-footer-hover;
          border-color: $theme-white-footer-hover;
          .circle-red {
            border: 1px solid $theme-red-border;
          }
          .circle-black {
            border-color: $theme-black-circle;
          }
          .circle-white {
            border-color: $theme-white-circle;
          }
        }
      }
    }
  }
}
</style>
