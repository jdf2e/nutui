<template>
  <div class="doc-nav">
    <ol class="introduce">
      <li>指南</li>
      <li>介绍</li>
      <li>快速上手</li>
      <li>主题定制</li>
      <li>国际化</li>
      <li>更新日志</li>
      <li>资源</li>
    </ol>
    <ol v-for="_nav in nav" :key="_nav">
      <li>{{ _nav.name }}</li>
      <ul>
        <li class="active" v-for="_package in _nav.packages" :key="_package">
          <router-link :to="_package.name.toLocaleLowerCase()">
            {{ _package.name }}&nbsp;&nbsp;<b>{{ _package.cName }}</b>
          </router-link>
        </li>
      </ul>
    </ol>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { nav } from '@/config';
export default defineComponent({
  name: 'doc-nav',
  setup() {
    return reactive({
      nav
    });
  }
});
</script>

<style lang="scss">
.doc {
  &-nav {
    background: $white;
    width: 291px;
    flex-shrink: 0;
    height: 100%;
    padding: 50px 0 50px 35px;
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
            margin-top: -14px;
            bottom: 0;
            width: 6px;
            height: 28px;
            background: $doc-default-primary-bg;
            border-radius: 3px;
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
            &:hover {
              color: $doc-default-color;
              &:visited {
                color: $doc-default-color;
              }
            }
            &:visited {
              color: $title-color;
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
