<template>
  <div class="doc-header" :style="{ background: themeColor === 'red' ? headerBg : themeColor }" :class="`doc-header-${theme}`">
    <div class="header-logo">
      <a class="logo-link" href="#">
        <template v-if="theme === 'red'">
          <img src="../../assets/images/logo-header-white.png" />
        </template>
        <template v-else>
          <img src="../../assets/images/logo-header-red.png" />
        </template>
      </a>
      <span class="logo-border"></span>
    </div>
    <div class="header-nav">
      <div class="search-box">
        <input type="text" class="search-input" placeholder="在nut.ui 中搜索" />
      </div>
      <div class="nav-box">
        <ul class="nav-list">
          <li class="nav-item nav-item-actie">指南</li>
          <li class="nav-item">组件</li>
          <li class="nav-item">示例</li>
          <li class="nav-item">资源</li>
          <li class="nav-item">
            <select class="nutui-select">
              <option value="1.x">1.x</option>
              <option value="2.x">2.x</option>
            </select>
          </li>
          <li class="nav-item">
            <a class="user-link" href="#"> </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'doc-header',
  setup() {
    const data = reactive({
      theme: 'red',
      themeColor: 'red',
      headerBg: 'url(' + require('../../assets/images/header-bg.png') + ')'
    });
    return data;
  }
});
</script>

<style lang="scss">
.doc {
  &-header {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    background-size: cover;
    background-position: center;
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
      display: flex;
      align-items: center;
      height: 64px;
      vertical-align: middle;
      img {
        height: 46px;
      }
    }
    .logo-border {
      display: inline-block;
      width: 1px;
      height: 26px;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -13px;
    }
  }
  &-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: right;
    width: calc(100% - 240px);
    padding: 0 40px;
    .search-box {
      font-size: 0;
      .search-input {
        height: 22px;
        padding-left: 42px;
        font-size: 14px;
        vertical-align: middle;
        background: transparent url('../../assets/images/input-search.png') no-repeat;
      }
    }
    .nav-box {
      margin-right: 140px;
      .nav-list {
        min-width: 400px;
        display: flex;
        list-style: none;
        align-items: center;
      }
      .nav-item {
        position: relative;
        margin-right: 30px;
        font-size: 14px;
        padding: 0 10px;
        height: 63px;
        line-height: 63px;
        text-align: center;
        cursor: pointer;
        overflow: hidden;
        &.nav-item-actie {
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
        .nutui-select {
          min-width: 77px;
          height: 28px;
          padding: 0 15px;
          font-size: 14px;
          color: $theme-red-word;
          background: url('../../assets/images/icon-select-white-down.png') no-repeat;
          background-position: right 15px top 12px;
          background-size: 8px 5px;
          border-radius: 14px;
          outline: none;
          appearance: none;
        }
      }
      .user-link {
        display: inline-block;
        width: 26px;
        height: 26px;
        vertical-align: middle;
        background: url('../../assets/images/icon-user.png') no-repeat;
        background-size: 100%;
      }
    }
  }
}
// 颜色
.doc-header {
  // 红色
  &-red {
    background: $theme-red-header-bg;
    color: $theme-red-word;
    .header {
      &-logo {
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
            &.nav-item-actie {
              color: $theme-red-actice;
              &:after {
                background-position: 0 0;
              }
            }
            .nutui-select {
              color: $theme-red-word;
              border: 1px solid $theme-red-border;
            }
          }
          .user-link {
            background-position: 0 0;
          }
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
            &.nav-item-actie {
              color: $theme-white-actice;
              &:after {
                background-position: 0 -13px;
              }
            }
            .nutui-select {
              background-image: url('../../assets/images/icon-select-gray-down.png');
              background-position: right 15px top 12px;
              color: $theme-white-select-word;
              border: 1px solid $theme-white-select-border;
            }
          }
          .user-link {
            background-position: 0 -26px;
          }
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
            &.nav-item-actie {
              color: $theme-black-actice;
              &:after {
                background-position: 0 -13px;
              }
            }
            .nutui-select {
              color: $theme-black-select-word;
              background-color: $theme-black-select-bg;
              border: 1px solid $theme-black-select-border;
            }
          }
          .user-link {
            background-position: 0 -52px;
          }
        }
      }
    }
  }
}
</style>
