<template>
  <div class="doc-nav" :class="{ fixed: fixed }">
    <ol v-for="_nav in nav" :key="_nav">
      <li>{{ _nav.name }}</li>
      <ul>
        <template :class="{ active: isActive(_package.name) }" v-for="_package in _nav.packages" :key="_package">
          <li v-if="_package.show">
            <router-link :to="_package.name.toLowerCase()" :class="{ active: isActive(_package.name) }">
              {{ _package.name }}&nbsp;&nbsp;<b>{{ _package.cName }}</b>
            </router-link>
          </li>
        </template>
      </ul>
    </ol>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, onMounted, toRefs } from 'vue';
import { RefData } from '@/sites/assets/util/ref';
import { nav, docs } from '@/config.json';
export default defineComponent({
  name: 'doc-nav',
  setup() {
    const state = reactive({
      fixed: false
    });
    const isActive = computed(() => {
      return function (name: string) {
        const currentValue = RefData.getInstance().currentRoute.value;
        let value = currentValue.indexOf('-taro') > -1 ? currentValue.split('-taro')[0] : currentValue;
        return value == name.toLowerCase();
      };
    });

    onMounted(() => {
      document.addEventListener('scroll', scrollNav);
    });
    const scrollNav = () => {
      let top = document.documentElement.scrollTop;
      // console.log('a', top)
      if (top > 64) {
        state.fixed = true;
      } else {
        state.fixed = false;
      }
    };
    return {
      ...toRefs(state),
      isActive,
      nav: reactive(nav),
      docs: reactive(docs),
      currentRoute: RefData.getInstance().currentRoute
    };
  }
});
</script>

<style lang="scss">
.doc {
  &-nav {
    position: absolute;
    top: $doc-header-height;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: $white;
    width: 290px;
    height: 100vh;
    border-right: 1px solid #eee;
    overflow: auto;
    padding-left: 35px;
    &.fixed {
      position: fixed;
      top: 0;
    }
    ol {
      &.introduce {
        padding-left: 5px;
        li {
          cursor: pointer;
          &:hover {
            color: $doc-default-color;
          }
        }
      }
      li {
        height: 48px;
        line-height: 48px;
        font-size: 14px;
        color: $doc-default-nav-color;
        font-weight: bold;
        position: relative;

        &.active {
          &::before {
            position: absolute;
            content: '';
            left: 0;
            top: 50%;
            width: 22px;
            margin-top: -5px;
            height: 10px;
            transform: rotate(90deg);
            background: url(https://img10.360buyimg.com/imagetools/jfs/t1/136135/19/14659/946/5fa20aa8E33a9aa26/d329fbe669171208.png)
              no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      > ul {
        li {
          padding-left: 29px;
          cursor: pointer;

          &:hover {
            a {
              color: $doc-default-color;
            }
          }
          a {
            &.router-link-active,
            &.active {
              color: $doc-default-color !important;
            }

            &:link,
            &:visited {
              color: $title-color;
            }

            &:hover {
              color: $doc-default-color;
              &:visited {
                color: $doc-default-color;
              }
            }

            height: 100%;
            b {
              font-weight: normal;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
