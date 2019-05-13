import Vue from 'vue';

interface NutToast {
  text: (msg: string, option: NutToastOption) => Vue;
  success: (msg: string, option: NutToastOption) => Vue;
  fail: (msg: string, option: NutToastOption) => Vue;
  warn: (msg: string, option: NutToastOption) => Vue;
  loading: (msg: string, option: NutToastOption) => Vue;
}

interface NutToastOption {
  id: string | number;
  duration: number;
  center: boolean;
  bottom: boolean;
  textAlignCenter: boolean;
  bgColor: string;
  customClass: string;
  icon: string;
  size: string;
  cover: boolean;
  loadingRotate: boolean;
  onClose: Function;
}

declare module 'vue/types/vue' {
  interface Vue {
    $toast: NutToast;
  }
}
