import Vue from 'vue';

interface NutDialogOption {
  id: string | number;
  title: string;
  content: string;
  type: string;
  closeOnClickModal: boolean;
  noFooter: boolean;
  noOkBtn: boolean;
  noCancelBtn: boolean;
  cancelBtnTxt: string;
  okBtnTxt: string;
  okBtnDisabled: boolean;
  cancelAutoClose: boolean;
  textAlign: string;
  onOkBtn: Function;
  onCancelBtn: Function;
  onCloseBtn: Function;
  closeCallback: Function;
  onClickImageLink: Function;
  maskBgStyle: string;
  customClass: string;
  link: string;
  imgSrc: string;
  animation: boolean;
  lockBgScroll: boolean;
}

declare module 'vue/types/vue' {
  interface Vue {
    $dialog: (option: NutDialogOption) => Vue;
  }
}
