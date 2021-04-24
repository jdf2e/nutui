<template>
  <!-- <div class="doc-header" :style="{ background: themeColor === 'red' ? headerBg : themeColor }" :class="`doc-header-${data.theme}`"> -->
  <div class="doc-header" :class="themeName()">
    <div class="header-logo">
      <a class="logo-link" href="#"></a>
      <span class="logo-border"></span>
    </div>
    <div class="header-nav">
      <Search />
      <div class="nav-box">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link :to="header[0].path">
              {{ header[0].cName }}
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: isActive(header[1].path) }">
            <router-link :to="header[1].path">
              {{ header[1].cName }}
            </router-link>
          </li>
          <li class="nav-item" :class="{ active: isActive(header[2].name) }">
            <a href="demo.html#/">
              {{ header[2].cName }}
            </a>
          </li>
          <li class="nav-item" :class="{ active: isActive(header[3].name) }">
            <router-link :to="header[3].name">
              {{ header[3].cName }}
            </router-link>
          </li>
          <li class="nav-item">
            <div
              @focus="handleFocus"
              @focusout="handleFocusOut"
              tabindex="0"
              class="header-select-box"
              @click.stop="data.isShowSelect = !data.isShowSelect"
              :class="[data.isShowSelect == true ? 'select-up' : 'select-down']"
            >
              <div class="header-select-hd"
                >{{ data.verson }}<i class=""></i
              ></div>
              <transition name="fade">
                <div class="header-select-bd" v-show="data.isShowSelect">
                  <div
                    class="header-select-item"
                    v-for="(item, index) in data.versonList"
                    :key="index"
                    @click.stop="checkTheme(item.name, index)"
                    :class="{ active: data.activeIndex === index }"
                  >
                    {{ item.name }}
                  </div>
                </div>
              </transition>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="user-link"
              target="_blank"
              href="https://github.com/jdf2e/nutui"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from 'vue';
import Search from './Search.vue';
import { header } from '@/config.json';
import { RefData } from '@/sites/assets/util/ref';
export default defineComponent({
  name: 'doc-header',
  components: {
    Search
  },
  setup() {
    const data = reactive({
      theme: 'black',
      // headerBg: 'url(' + require('../../assets/images/header-bg.png') + ')',
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
    const handleFocus = () => {
      console.log(1);
    };
    const handleFocusOut = () => {
      data.isShowSelect = false;
    };
    const isActive = computed(() => {
      return function(name: string) {
        return RefData.getInstance().currentRoute.value == name.toLowerCase();
      };
    });
    const themeName = computed(() => {
      return function() {
        return `doc-header-${RefData.getInstance().themeColor.value}`;
      };
    });
    const checkTheme = (item: string, index: number) => {
      data.isShowSelect = false;
      data.activeIndex = index;
      data.verson = item;
      if (index === 0) {
        window.location.href = '//nutui.jd.com/1x/';
      } else if (index === 1) {
        window.location.href = 'https://nutui.jd.com/#/index';
      } else {
        // window.location.href = ""
      }
    };
    return {
      header,
      data,
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
    position: fixed;
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
      display: inline-block;
      width: 120px;
      height: 46px;
      vertical-align: middle;
      position: absolute;
      top: 50%;
      margin-top: -23px;
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
    .nav-box {
      margin-right: 140px;
      .nav-list {
        min-width: 445px;
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
        background: url('../../assets/images/icon-user.png') no-repeat;
        background-size: 26px;
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
    background-image: $theme-red-header-bg;
    color: $theme-red-word;
    .header {
      &-logo {
        .logo-link {
          background: url('../../assets/images/logo-header-white.png') no-repeat
            center/100%;
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
          background: url('../../assets/images/logo-header-red.png') no-repeat
            center/100%;
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
          background: url('../../assets/images/logo-header-red.png') no-repeat
            center/100%;
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
