<template>
  <nut-popup
    :teleport="teleport"
    v-model:visible="showPopup"
    :close-on-click-overlay="closeOnClickOverlay"
    :lock-scroll="lockScroll"
    round
    @click-overlay="closed"
    @click-close-icon="closed"
  >
    <view :class="classes">
      <view v-if="title" class="nut-dialog__header">
        <slot v-if="$slots.header" name="header"></slot>
        <template v-else>{{ title }}</template>
      </view>

      <view class="nut-dialog__content" :style="{ textAlign }">
        <slot v-if="$slots.default" name="default"></slot>
        <view v-else v-html="content"></view>
      </view>

      <view class="nut-dialog__footer" :class="{ [footerDirection]: footerDirection }" v-if="!noFooter">
        <slot v-if="$slots.footer" name="footer"></slot>
        <template v-else>
          <nut-button
            size="small"
            plain
            type="primary"
            class="nut-dialog__footer-cancel"
            v-if="!noCancelBtn"
            @click="onCancel"
          >
            {{ cancelText }}
          </nut-button>
          <nut-button
            v-if="!noOkBtn"
            size="small"
            type="primary"
            class="nut-dialog__footer-ok"
            :class="{ disabled: okBtnDisabled }"
            :disabled="okBtnDisabled"
            @click="onOk"
          >
            {{ okText }}
          </nut-button>
        </template>
      </view>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { onMounted, computed, watch, ref } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('dialog');
import Popup, { popupProps } from '../popup/index.taro.vue';
import Button from '../button/index.taro.vue';
export default create({
  inheritAttrs: false,
  components: {
    [Popup.name]: Popup,
    [Button.name]: Button
  },
  props: {
    ...popupProps,
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
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
    cancelText: {
      type: String,
      default: '取消'
    },
    okText: {
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
    closeOnPopstate: {
      type: Boolean,
      default: false
    },
    footerDirection: {
      type: String,
      default: 'horizontal' //vertical
    }
  },
  emits: ['update', 'update:visible', 'ok', 'cancel', 'open', 'opened', 'close', 'closed'],
  setup(props, { emit }) {
    const showPopup = ref(props.visible);
    onMounted(() => {
      if (props.closeOnPopstate) {
        window.addEventListener('popstate', function () {
          closed();
        });
      }
    });

    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
      }
    );

    const classes = computed(() => {
      return {
        [componentName]: true
      };
    });

    const update = (val: boolean) => {
      emit('update', val);
      emit('update:visible', val);
    };

    const closed = () => {
      update(false);
      emit('closed');
    };

    const onCancel = () => {
      emit('cancel');
      if (props.cancelAutoClose) {
        closed();
      }
    };

    const onOk = () => {
      closed();
      emit('ok');
    };

    return {
      closed,
      classes,
      onCancel,
      onOk,
      showPopup
    };
  }
});
</script>
