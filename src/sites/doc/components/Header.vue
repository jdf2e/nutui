<template>
  <div class="doc-header" :class="themeName()">
    <div class="header-logo">
      <a class="logo-link" href="#" @click="toHome"></a>
      <span class="logo-border"></span>
      <span class="version">{{ version }}</span>
    </div>
    <div class="header-nav">
      <a href="https://github.com/jdf2e/nutui-docs" target="_blank"
        >当前环境：development ,代码 PR 合并后，文档会自动同步至 https://github.com/jdf2e/nutui-docs</a
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from 'vue';
import { nav } from '@/config.json';
import { version } from '/package.json';
import { RefData } from '@/sites/assets/util/ref';
export default defineComponent({
  name: 'doc-header',
  components: {},
  setup() {
    let packages = [] as any[];
    nav.forEach((item) => {
      packages.push(...item.packages);
    });
    const data = reactive({
      theme: 'black',
      // headerBg: 'url(' + require('../../assets/images/header-bg.png') + ')',
      verson: '3.x',
      navIndex: 0,
      activeIndex: 0,
      isShowSelect: false
    });
    const handleFocus = () => {
      console.log(1);
    };
    const handleFocusOut = () => {
      data.isShowSelect = false;
    };

    const toHome = () => {
      RefData.getInstance().currentRoute.value = '/';
    };

    const isActive = computed(() => {
      let value = RefData.getInstance().currentRoute.value;
      return function (name: string) {
        const lName = name.toLowerCase();
        if (lName === 'component') {
          if (value.indexOf('-taro') > -1) {
            value = value.split('-taro')[0];
          }
          return packages.findIndex((item) => item.name.toLowerCase() === value) > -1;
        } else {
          return value === lName || lName.includes(value);
        }
      };
    });
    const themeName = computed(() => {
      return function () {
        return `doc-header-${RefData.getInstance().themeColor.value}`;
      };
    });
    const checkTheme = (item: any, index: number) => {
      data.isShowSelect = false;
      data.activeIndex = index;
      data.verson = item.name;
      window.location.href = item.link;
    };
    return {
      version,
      data,
      toHome,
      isActive,
      checkTheme,
      themeName,
      handleFocus,
      handleFocusOut
    };
  }
});
</script>

<style lang="scss">
.doc {
  &-header {
    // position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    min-width: 1300px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: $doc-header-height;
    line-height: $doc-header-height;
    text-align: left;
    padding: 0 50px;
    font-size: 20px;
  }
}
.header {
  &-logo {
    position: relative;
    display: inline-block;
    width: 240px;
    height: 64px;
    .logo-link {
      width: 120px;
      height: 46px;
      vertical-align: middle;
      position: absolute;
      top: 50%;
      margin-top: -23px;
    }
    .logo-border {
      width: 1px;
      height: 26px;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -13px;
    }
    .version {
      position: absolute;
      right: 70px;
      font-size: 14px;
    }
  }
  &-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: right;
    width: calc(100% - 240px);
    min-width: 900px;
    padding: 0 40px;
    > a {
      color: #fff;
    }
    .nav-box {
      margin-right: 140px;
      .nav-list {
        min-width: 490px;
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: space-around;
      }
      .nav-item {
        position: relative;
        margin-right: 30px;
        font-size: 14px;
        height: 63px;
        line-height: 63px;
        text-align: center;
        cursor: pointer;
        flex-shrink: 0;
        a {
          display: inline-block;
          line-height: 64px;
        }
        // overflow: hidden;
        &.active {
          font-weight: bold;
          &:after {
            content: '';
            display: inline-block;
            width: 35px;
            height: 13px;
            position: absolute;
            bottom: 3px;
            left: 50%;
            margin-left: -17.5px;
            background: url('../../assets/images/item-active.png');
          }
        }
        &:last-of-type {
          margin-right: 0;
        }
      }
      .user-link {
        display: inline-block;
        width: 26px;
        height: 26px;
        vertical-align: middle;
        background-repeat: no-repeat;
        background-image: url('../../assets/images/icon-user.png');
        background-size: 26px;

        &.gitee {
          margin-left: 8px;
          background-image: url('../../assets/images/icon-gitee.png');
        }
      }
    }
  }
}
.header-select {
  &-box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    outline: 0;
  }
  &-hd {
    min-width: 77px;
    height: 28px;
    padding: 0 30px 0 15px;
    line-height: 26px;
    font-size: 14px;
    color: $theme-red-word;
    background-position: right 15px top 12px;
    background-size: 8px 5px;
    background-repeat: no-repeat;
    border-radius: 14px;
  }
  &-bd {
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -60px;
    border-radius: 3px;
    overflow: hidden;
  }
  &-item {
    width: 120px;
    height: 28px;
    padding: 0 12px;
    line-height: 26px;
    font-size: 14px;
    border-width: 0px 1px 1px;
    border-style: solid;
    cursor: pointer;
    &:first-of-type {
      border-top-width: 1px;
    }
  }
}
// 颜色
.doc-header {
  // 红色
  &-red {
    background-image: $theme-red-header-bg;
    color: $theme-red-word;
    .header {
      &-logo {
        .logo-link {
          background: url('../../assets/images/logo-header-white.png') no-repeat center/100%;
        }
        .logo-border {
          background: $theme-red-border;
        }
      }
      &-nav {
        .search-box {
          .search-input {
            color: $theme-red-word;
            background-position: 0 0;
            &::-webkit-input-placeholder {
              color: $theme-red-input;
            }
          }
        }
        .nav-box {
          .nav-item {
            color: $theme-red-word;
            a {
              color: $theme-red-word;
            }
            &.active {
              color: $theme-red-actice;
              &:after {
                background-position: 0 0;
              }
              a {
                color: $theme-red-actice;
              }
            }
          }
          .user-link {
            background-position: 0 0;
            // &:hover {
            //   background-position: -26px 0;
            // }
          }
        }
      }
    }
    .header-select {
      &-box {
        &.select-down {
          .header-select-hd {
            background-image: url('../../assets/images/icon-select-white-down.png');
          }
        }
        &.select-up {
          .header-select-hd {
            background-image: url('../../assets/images/icon-select-white-up.png');
          }
        }
      }
      &-hd {
        color: $theme-red-word;
        border: 1px solid $theme-white-select-border;
      }
      &-bd {
        color: $theme-white-select-word;
      }
      &-item {
        border-color: $theme-red-select-border;
        background-color: $theme-red-select-bg;
        &:hover {
          color: $theme-red;
        }
      }
    }
  }
  // 白色
  &-white {
    background: $white;
    color: $theme-white-word;
    border-bottom: 1px solid $theme-white-box-border;
    .header {
      &-logo {
        .logo-link {
          background: url('../../assets/images/logo-header-red.png') no-repeat center/100%;
        }
        .logo-border {
          background: $theme-white-border;
        }
      }
      &-nav {
        .search-box {
          .search-input {
            color: $theme-white-word;
            background-position: 0 -22px;
            &::-webkit-input-placeholder {
              color: $theme-white-input;
            }
          }
        }
        .nav-box {
          .nav-item {
            color: $theme-white-word;
            a {
              color: $theme-white-word;
            }
            &.active {
              color: $theme-white-actice;
              &:after {
                background-position: 0 -13px;
              }
              a {
                color: $theme-white-actice;
              }
            }
          }
          .user-link {
            background-position: 0 -25px;
            // &:hover {
            //   background-position: -26px -25px;
            // }
          }
        }
      }
    }
    .header-select {
      &-box {
        &.select-down {
          .header-select-hd {
            background-image: url('../../assets/images/icon-select-gray-down.png');
          }
        }
        &.select-up {
          .header-select-hd {
            background-image: url('../../assets/images/icon-select-gray-up.png');
          }
        }
      }
      &-hd {
        color: $theme-white-select-word;
        border: 1px solid $theme-white-select-border;
      }
      &-bd {
        color: $theme-white-select-word;
      }
      &-item {
        border-color: $theme-white-select-border;
        background-color: $theme-white-select-bg;
        &:hover {
          color: $theme-white-actice;
        }
      }
    }
  }
  // 黑色
  &-black {
    background: $black;
    color: $theme-black-word;
    border-bottom: 1px solid $theme-black-box-border;
    .header {
      &-logo {
        .logo-link {
          background: url('../../assets/images/logo-header-red.png') no-repeat center/100%;
        }
        .logo-border {
          background: $theme-black-border;
        }
      }
      &-nav {
        .search-box {
          .search-input {
            color: $theme-black-word;
            background-position: 0 -44px;
            &::-webkit-input-placeholder {
              color: $theme-black-input;
            }
          }
        }
        .nav-box {
          .nav-item {
            color: $theme-black-word;
            a {
              color: $theme-black-word;
            }
            &.active {
              color: $theme-black-actice;
              &:after {
                background-position: 0 -13px;
              }
              a {
                color: $theme-black-actice;
              }
            }
          }
          .user-link {
            background-position: 0 -51px;
            // &:hover {
            //   background-position: -26px -51px;
            // }
          }
        }
      }
    }
    .header-select {
      &-box {
        &.select-down {
          .header-select-hd {
            background-image: url('../../assets/images/icon-select-white-down.png');
          }
        }
        &.select-up {
          .header-select-hd {
            background-image: url('../../assets/images/icon-select-white-up.png');
          }
        }
      }
      &-hd {
        color: $theme-black-select-word;
        background-color: $theme-black-select-bg;
        border: 1px solid $theme-black-select-border;
      }
      &-bd {
        color: $theme-black-select-word;
      }
      &-item {
        background-color: $theme-black-select-bg;
        border-color: $theme-black-select-bg;
        &:hover {
          background-color: $theme-black-select-hover;
          border-color: $theme-black-select-hover;
        }
      }
    }
  }
}
// 下拉列表选择动画效果
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
