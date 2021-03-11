<template>
  <view :class="classes" @click="handleClick">
    <div
      v-if="destroy"
      :class="[
        'nut-dialog-wrapper',
        customClass,
        { 'nut-dialog-image-wrapper': type === 'image' }
      ]"
      :id="id"
    >
      <transition :name="animation ? 'nutFade' : ''">
        <div
          :class="'nut-dialog-mask'"
          :style="{ background: maskBgStyle }"
          @click="modalClick"
          v-show="curVisible"
        ></div>
      </transition>
      <transition :name="animation ? 'nutEase' : ''">
        <div class="nut-dialog-box" v-show="curVisible" @click="modalClick">
          <div class="nut-dialog" @click.stop>
            <a
              href="javascript:;"
              v-if="closeBtn"
              @click="closeBtnClick"
              class="nut-dialog-close"
            ></a>
            <template v-if="type === 'image'">
              <a
                href="javascript:;"
                @click="imageLinkClick"
                class="nut-dialog-link"
              >
                <img :src="imgSrc" class="nut-dialog-image" alt />
              </a>
            </template>
            <template v-else>
              <div class="nut-dialog-body">
                <span
                  class="nut-dialog-title"
                  v-html="title"
                  v-if="title"
                ></span>
                <div
                  class="nut-dialog-content"
                  v-if="isShowContent"
                  :style="{ textAlign }"
                >
                  <slot></slot>
                </div>
                <div
                  class="nut-dialog-content"
                  v-html="content"
                  v-else-if="content"
                  :style="{ textAlign }"
                ></div>
              </div>
              <div class="nut-dialog-footer" v-if="!noFooter">
                <button
                  class="nut-dialog-btn nut-dialog-cancel"
                  v-if="!noCancelBtn"
                  @click="cancelBtnClick(cancelAutoClose)"
                  >{{ cancelBtnTxt }}</button
                >
                <button
                  class="nut-dialog-btn nut-dialog-ok"
                  v-if="!noOkBtn"
                  :class="{ disabled: okBtnDisabled }"
                  :disabled="okBtnDisabled"
                  @click="okBtnClick"
                  >{{ okBtnTxt }}</button
                >
              </div>
            </template>
          </div>
        </div>
      </transition>
    </div>
  </view>
</template>
<script lang="ts">
import { ref, onMounted, watch, watchEffect, computed } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('dialog');

const lockMaskScroll = (bodyCls => {
  let scrollTop = 0;
  return {
    afterOpen: function() {
      scrollTop =
        (document.scrollingElement && document.scrollingElement.scrollTop) ||
        document.body.scrollTop;
      document.body.classList.add(bodyCls);
      document.body.style.top = -scrollTop + 'px';
    },
    beforeClose: function() {
      if (document.body.classList.contains(bodyCls)) {
        document.body.classList.remove(bodyCls);
        if (document.scrollingElement) {
          document.scrollingElement.scrollTop = scrollTop;
        }
      }
    }
  };
})('dialog-open');
export default create({
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
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
      type: String,
      default: '取消'
    },
    okBtnTxt: {
      type: String,
      default: '确定'
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
      type: String,
      default: 'center'
    },
    onOkBtn: {
      type: Function,
      default: null
    },
    onCloseBtn: {
      type: Function,
      default: null
    },
    onCancelBtn: {
      type: Function,
      default: null
    },
    closeCallback: {
      type: Function,
      default: null
    },
    onClickImageLink: {
      type: Function,
      default: null
    },
    maskBgStyle: {
      type: String,
      default: ''
    },
    canDestroy: {
      type: Boolean,
      default: true
    },
    customClass: {
      type: String,
      default: ''
    },
    closeOnPopstate: {
      type: Boolean,
      default: false
    }
  },
  // emits: ['click'],

  setup(props, { emit, slots }) {
    const curVisible = ref(false);
    let destroy = ref(true);
    onMounted(() => {
      curVisible.value = props.visible;
    });
    const isShowContent = computed(() => {
      return slots.default;
    });

    const todestroy = () => {
      if (!props.canDestroy) {
        destroy = ref(false);
      }
    };
    const close = (target?: string) => {
      emit('close', target);
      emit('close-callback', target);
      todestroy();
      if (
        typeof props.closeCallback === 'function' &&
        props.closeCallback(target) === false
      ) {
        return;
      }
      curVisible.value = false;
    };
    const modalClick = () => {
      if (!props.closeOnClickModal) {
        return;
      }
      close('modal');
    };
    const okBtnClick = () => {
      emit('ok-btn-click');
      if (typeof props.onOkBtn === 'function') {
        props.onOkBtn.call(props);
      }
    };
    const cancelBtnClick = (autoClose: boolean) => {
      emit('cancel-btn-click');
      if (!autoClose) {
        return;
      }
      if (typeof props.onCancelBtn === 'function') {
        if (props.onCancelBtn.call(props) === false) {
          return;
        }
      }
      close('cancelBtn');
    };
    const closeBtnClick = () => {
      if (typeof props.onCloseBtn === 'function') {
        if (props.onCloseBtn.call(props) === false) {
          return;
        }
      }
      close('closeBtn');
    };
    //图片类型弹窗中的链接点击事件，默认跳转
    const imageLinkClick = () => {
      if (
        props.onClickImageLink &&
        props.onClickImageLink.call(props) === false
      ) {
        return;
      }
      if (props.link) {
        location.href = props.link;
      }
    };
    const handleClick = (event: Event) => {
      emit('click', event);
    };
    onMounted(() => {
      if (props.closeOnPopstate) {
        window.addEventListener('popstate', function() {
          close();
        });
      }
    });
    watchEffect(() => {
      if (props.lockBgScroll) {
        //锁定or解锁页面滚动
        lockMaskScroll[curVisible.value ? 'afterOpen' : 'beforeClose']();
      }
    });
    watch(
      () => props.visible,
      val => {
        curVisible.value = val;
      }
    );

    const classes = computed(() => {
      return {
        [componentName]: true
      };
    });
    return {
      handleClick,
      curVisible,
      destroy,
      modalClick,
      close,
      todestroy,
      okBtnClick,
      cancelBtnClick,
      closeBtnClick,
      imageLinkClick,
      isShowContent,
      classes
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
