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
        v-show="curVisible"
      ></div>
    </transition>
    <transition :name="animation?'nutEase':''">
      <div class="nut-dialog-box" v-show="curVisible" @click="modalClick">
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
              <div class="nut-dialog-content" v-if="$slots.default" :style="{textAlign}">
                <slot></slot>
              </div>
              <div
                class="nut-dialog-content"
                v-html="content"
                v-else-if="content"
                :style="{textAlign}"
              ></div>
            </div>
            <div class="nut-dialog-footer" v-if="!noFooter">
              <button
                class="nut-dialog-btn nut-dialog-cancel"
                v-if="!noCancelBtn"
                @click="cancelBtnClick(cancelAutoClose)"
              >{{cancelBtnTxt || nutTranslate('lang.cancelBtnTxt')}}</button>
              <button
                class="nut-dialog-btn nut-dialog-ok"
                v-if="!noOkBtn"
                :class="{'disabled':okBtnDisabled}"
                :disabled="okBtnDisabled"
                @click="okBtnClick"
              >{{okBtnTxt || nutTranslate('lang.okBtnTxt')}}</button>
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
      scrollTop =
        document.scrollingElement.scrollTop || document.body.scrollTop;
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
  props: {
    id: {
      default: ""
    },
    title: {
      default: ""
    },
    content: {
      default: ""
    },
    type: {
      default: ""
    },
    link: {
      default: ""
    },
    imgSrc: {
      default: ""
    },
    animation: {
      type: Boolean,
      default: true
    },
    lockBgScroll: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    closeBtn: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    noFooter: {
      type: Boolean,
      default: false
    },
    noOkBtn: {
      type: Boolean,
      default: false
    },
    noCancelBtn: {
      type: Boolean,
      default: false
    },
    cancelBtnTxt: {
      default: ""
    },
    okBtnTxt: {
      default: ""
    },
    okBtnDisabled: {
      type: Boolean,
      default: false
    },
    cancelAutoClose: {
      type: Boolean,
      default: true
    },
    textAlign: {
      default: "center"
    },
    onOkBtn: {
      default: null
    },
    onCloseBtn: {
      default: null
    },
    onCancelBtn: {
      default: null
    },
    closeCallback: {
      default: null
    },
    onClickImageLink: {
      default: null
    },
    maskBgStyle: {
      default: ""
    },
    customClass: {
      default: ""
    }
  },
  data() {
    return {
      curVisible: false
    };
  },
  methods: {
    modalClick() {
      if (!this.closeOnClickModal) return;
      this.close("modal");
    },
    close(target) {
      this.$emit("close", target);
      this.$emit("close-callback", target);
      if (
        typeof this.closeCallback === "function" &&
        this.closeCallback(target) === false
      ) {
        return;
      }
      this.curVisible = false;
    },
    okBtnClick() {
      this.$emit("ok-btn-click");
      if (typeof this.onOkBtn === "function") {
        this.onOkBtn.call(this);
      }
    },
    cancelBtnClick(autoClose) {      
      if(!autoClose){
        return
      }
      this.$emit("cancel-btn-click");
      if (typeof this.onCancelBtn === "function") {
        if (this.onCancelBtn.call(this) === false) return;
      }
      this.close("cancelBtn");
         
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
  created() {},
  watch: {
    visible: {
      handler(val) {
        this.curVisible = val;
      },
      immediate: true
    },
    curVisible(val) {
      if (this.lockBgScroll) {
        //锁定or解锁页面滚动
        lockMaskScroll[val ? "afterOpen" : "beforeClose"]();
      }
    }
  }
};
</script>
