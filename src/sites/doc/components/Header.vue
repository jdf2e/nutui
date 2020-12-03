<template>
  <div class="doc-header" :style="{ background: themeColor === 'red' ? headerBg : themeColor }" :class="`doc-header-${data.theme}`">
    <div class="header-logo">
      <a class="logo-link" href="#">
        <template v-if="data.theme === 'red'">
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
        <input type="text" class="search-input" placeholder="在 NutUI 中搜索" />
      </div>
      <div class="nav-box">
        <ul class="nav-list">
          <li class="nav-item" :class="{ active: isActive(header[0].name) }">{{ header[0].cName }}</li>
          <li class="nav-item" :class="{ active: isActive(header[1].name) }">
            <router-link :to="header[1].name">{{ header[1].cName }}</router-link>
          </li>
          <li class="nav-item" :class="{ active: isActive(header[2].name) }"
            ><a href="http://localhost:8080/demo.html#/" style="color:#fff">{{ header[2].cName }}</a></li
          >
          <li class="nav-item" :class="{ active: isActive(header[3].name) }">
            <router-link :to="header[3].name">{{ header[3].cName }}</router-link>
          </li>
          <!-- <li :class="{ active: isActive(_package.name) }" v-for="_package in docs.packages" :key="_package">
            <router-link v-if="!_package.isLink" :to="_package.name.toLowerCase()">{{ _package.cName }}</router-link>
            <a v-else :href="_package.name" target="_blank">{{ _package.cName }}</a>
          </li> -->

          <li class="nav-item">
            <div class="header-select-box" @click.stop="data.isShowSelect = !data.isShowSelect" :class="[data.isShowSelect == true ? 'select-up' : 'select-down']">
              <div class="header-select-hd">{{ data.verson }}<i class=""></i></div>
              <div class="header-select-bd" v-show="data.isShowSelect">
                <div class="header-select-item" v-for="(item, index) in data.versonList" :key="index" @click.stop="checkTheme(item.name, index)" :class="{ active: data.activeIndex === index }">
                  {{ item.name }}
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="user-link" href="#"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { header } from '@/config';
import { currentRoute } from '@/sites/assets/util/ref';
export default defineComponent({
  name: 'doc-header',
  setup() {
    const data = reactive({
      theme: 'black',
      themeColor: 'black',
      headerBg: 'url(' + require('../../assets/images/header-bg.png') + ')',
      versonList: [
        {
          name: '1.x'
        },
        {
          name: '2.x'
        },
        {
          name: '3.x'
        }
      ],
      verson: '3.x',
      navIndex: 0,
      activeIndex: 0,
      isShowSelect: false
    });
    const isActive = computed(() => {
      return function(name: string) {
        // console.log('currentRoute', this.$router.currentRoute.name)
        console.log('name', name);
        return currentRoute.value == name.toLowerCase();
      };
    });
    const checkTheme = (item: any, index: number) => {
      data.isShowSelect = false;
      data.activeIndex = index;
      data.verson = verson;
    };
    return {
      header,
      data,
      isActive,
      currentRoute,
      checkTheme
    };
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
    min-width: 1300px;
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
    min-width: 900px;
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
        background: url('../../assets/images/icon-user.png') no-repeat;
        background-size: 100%;
      }
    }
  }
}
.header-select {
  &-box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
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
    border-radius: 3px;
    overflow: hidden;
  }
  &-item {
    width: 77px;
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
            background-position: 0 -26px;
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
            background-position: 0 -52px;
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
</style>
