/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Read more: https://github.com/vuejs/core/pull/3399
export {}

declare module 'vue' {
  export interface GlobalComponents {
    NutButton: (typeof import('./__VUE/button/index.vue'))['default'];
  }
}
