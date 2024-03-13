<template>
  <div class="doc-nav" :class="{ fixed: fixed }">
    <ol v-for="_nav in nav" :key="_nav.name">
      <li>{{ _nav.name }}</li>
      <ul>
        <template v-for="_package in reorder(_nav.packages)" :key="_package">
          <li v-if="_package.show !== false" :class="{ active: isActive(_package.name) }">
            <router-link :to="_package.name.toLowerCase()" :class="{ active: isActive(_package.name) }">
              {{ _package.name }}&nbsp;&nbsp;<b>{{ _package.cName }}</b>
            </router-link>
          </li>
        </template>
      </ul>
    </ol>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { RefData } from '@/sites/assets/util/ref';
import { nav } from '@/config.json';
import { reorder } from '../../assets/util/index';
const fixed = ref(false);
const isActive = computed(() => {
  return function (name: string) {
    const currentValue = RefData.getInstance().currentRoute.value;
    let value = currentValue.indexOf('-taro') > -1 ? currentValue.split('-taro')[0] : currentValue;
    return value == name.toLowerCase();
  };
});
const scrollNav = () => {
  const top = document.documentElement.scrollTop;
  if (top > 64) {
    fixed.value = true;
  } else {
    fixed.value = false;
  }
};
onMounted(() => {
  document.addEventListener('scroll', scrollNav);
});
onUnmounted(() => {
  document.removeEventListener('scroll', scrollNav);
});
</script>

<style lang="scss">
.doc-nav {
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
</style>
