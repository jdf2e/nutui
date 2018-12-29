<template>
  <div
    :class="['nut-dialog-wrapper',customClass,{'nut-dialog-image-wrapper':type==='image'}]"
    :id="id"
  >
    <transition :name="animation?'nutFade':''">
      <div
        :class="'nut-dialog-mask'"
        :style="{'background':maskBgStyle}"
        @click="modalClick"
        v-show="visible"
      ></div>
    </transition>
    <transition :name="animation?'nutEase':''">
      <div class="nut-dialog-box" v-show="visible" @click="modalClick">
        <div class="nut-dialog" @click.stop>
          <a href="javascript:;" v-if="closeBtn" @click="closeBtnClick" class="nut-dialog-close"></a>
          <template v-if="type==='image'">
            <a href="javascript:;" @click="imageLinkClick" class="nut-dialog-link">
              <img :src="imgSrc" class="nut-dialog-image" alt>
            </a>
          </template>
          <template v-else>
            <div class="nut-dialog-body">
              <span class="nut-dialog-title" v-html="title" v-if="title"></span>
              <div class="nut-dialog-content" v-html="content" v-if="content" :style="{textAlign}"></div>
            </div>
            <div class="nut-dialog-footer" v-if="!noFooter">
              <button
                class="nut-dialog-btn nut-dialog-cancel"
                v-if="!noCancelBtn"
                @click="cancelBtnClick(cancelAutoClose)"
              >{{cancelBtnTxt || nutTranslate('lang.dialog.cancelBtnTxt')}}</button>
              <button
                class="nut-dialog-btn nut-dialog-ok"
                v-if="!noOkBtn"
                :class="{'disabled':okBtnDisabled}"
                :disabled="okBtnDisabled"
                @click="okBtnClick"
              >{{okBtnTxt || nutTranslate('lang.dialog.okBtnTxt')}}</button>
            </div>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import locale from "../../mixins/locale";

const lockMaskScroll = (bodyCls => {
  let scrollTop;
  return {
    afterOpen: function() {
      scrollTop = document.scrollingElement.scrollTop || document.body.scrollTop;
      document.body.classList.add(bodyCls);
      document.body.style.top = -scrollTop + "px";
    },
    beforeClose: function() {
      if (document.body.classList.contains(bodyCls)) {
        document.body.classList.remove(bodyCls);
        document.scrollingElement.scrollTop = scrollTop;
      }
    }
  };
})("dialog-open");

export default {
  name: "nut-dialog",
  mixins: [locale],
  data() {
    return {
      id: null,
      title: "",
      content: "",
      type: "",
      link: "",
      imgSrc:"",
      animation: true,
      lockBgScroll: false,
      visible: false,
      closeBtn: false,
      closeOnClickModal: true,
      noFooter: false,
      noOkBtn: false,
      noCancelBtn: false,
      cancelBtnTxt: "",
      okBtnTxt: "",
      okBtnDisabled: false,
      cancelAutoClose: true,
      textAlign: "center",
      onOkBtn: null,
      onCloseBtn: null,
      onCancelBtn: null,
      closeCallback: null,
      onClickImageLink: null,
      maskBgStyle: "",
      customClass: ""
    };
  },
  methods: {
    modalClick() {
      if (!this.closeOnClickModal) return;
      this.close("modal");
    },
    close(target) {
      if (typeof this.closeCallback === "function") {
        if (this.closeCallback(target) === false) return;
      }
      this.visible = false;
    },
    okBtnClick() {
      if (typeof this.onOkBtn === "function") {
        this.onOkBtn.call(this);
      }
    },
    cancelBtnClick(autoClose) {
      if (typeof this.onCancelBtn === "function") {
        if (this.onCancelBtn.call(this) === false) return;
      }
      autoClose && this.close();
    },
    closeBtnClick() {
      if (typeof this.onCloseBtn === "function") {
        if (this.onCloseBtn.call(this) === false) return;
      }
      this.close("closeBtn");
    },
    //图片类型弹窗中的链接点击事件，默认跳转
    imageLinkClick() {
      if (this.onClickImageLink && this.onClickImageLink.call(this) === false)
        return;
      if (this.link) location.href = this.link;
    }
  },
  watch: {
    visible: {
      handler(val) {
        if (this.lockBgScroll) {
          if (val) {
            lockMaskScroll.afterOpen();
          } else {
            lockMaskScroll.beforeClose();
          }
        }
      },
      immediate: true
    }
  }
};
</script>
