<template>
  <transition :name="transitionName" @after-enter="$emit('opened')" @after-leave="$emit('closed')">
    <div
      ref="popupBox"
      v-show="value"
      :style="{ animationDuration: transitionDuration }"
      class="popup-box"
      :class="[`popup-${position}`, { round }]"
      @click="$emit('click', this)"
    >
      <slot v-if="showSlot"></slot>
      <icon
        v-if="closeable"
        @click.native="$emit('input', false)"
        :type="closeIcon"
        size="12px"
        class="nutui-popup__close-icon"
        :class="'nutui-popup__close-icon--' + closeIconPosition"
      >
      </icon>
    </div>
  </transition>
</template>
<script>
import Vue from 'vue';
import overlay from './overlay.vue';
import Icon from '../icon/icon.vue';
import '../icon/icon.scss';
export default {
  name: 'nut-popup',
  components: {
    icon: Icon,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'center',
    },
    duration: {
      type: Number,
      default: 0.3,
    },
    transition: String,
    overlay: {
      type: Boolean,
      default: true,
    },
    closeable: {
      type: Boolean,
      default: false,
    },
    closeIconPosition: {
      type: String,
      default: 'top-right',
    },
    closeIcon: {
      type: String,
      default: 'cross',
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    overlayClass: {
      type: String,
      default: '',
    },
    overlayStyle: {
      type: String,
      default: '',
    },
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
    getContainer: String,
    round: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.transition ? (this.transitionName = this.transition) : (this.transitionName = `popup-slide-${this.position}`);
  },
  mounted() {
    this.mountOverlay();
    if (this.getContainer) {
      this.portal();
    }
    if (this.value) {
      this.open();
    }
  },
  watch: {
    value(val) {
      const type = val ? 'open' : 'close';
      if (this.overlay) {
        this[type]();
      }
    },
    position(val) {
      val === 'center' ? (this.transitionName = 'popup-fade') : (this.transitionName = `popup-slide-${this.position}`);
    },
    getContainer: 'portal',
  },
  data() {
    return {
      showSlot: true,
      transitionName: 'popup-fade-center',
      overlayInstant: null,
    };
  },
  computed: {
    transitionDuration() {
      return this.duration ? this.duration + 's' : 'initial';
    },
  },
  methods: {
    mountOverlay() {
      if (!this.overlayInstant) {
        this.overlayInstant = this.mount(overlay, {
          duration: this.duration,
          nativeOn: {
            click: () => {
              this.$emit('click-overlay', this);
              if (this.closeOnClickOverlay) {
                this.$emit('input', false);
              }
            },
          },
        });
      }
    },
    mount(Component, data) {
      const instance = new Vue({
        el: document.createElement('div'),
        props: Component.props,
        render(h) {
          return h(Component, {
            props: this.$props,
            ...data,
          });
        },
      });
      instance.duration = this.duration;
      instance.lockScroll = this.lockScroll;
      instance.className = this.overlayClass;
      instance.customStyle = this.overlayStyle;
      const el = this.$refs.popupBox;
      if (el && el.parentNode) {
        el.parentNode.insertBefore(instance.$el, el);
      } else {
        document.body.appendChild(instance.$el);
      }
      return instance;
    },

    open() {
      if (!this.overlayInstant) {
        this.mountOverlay();
      } else {
        this.overlayInstant.show = true;
        this.showSlot = true;
      }

      if (this.lockScroll && !this.locked) {
        document.body.classList.add('nut-overflow-hidden');
        this.locked = true;
      }

      this.$emit('open', this);
    },
    close() {
      this.overlayInstant.show = false;
      if (this.destroyOnClose) {
        setTimeout(() => {
          this.showSlot = false;
        }, this.duration * 1000);
      }

      if (this.lockScroll && this.locked) {
        document.body.classList.remove('nut-overflow-hidden');
        this.locked = false;
      }
      this.$emit('close', this);
    },
    getElement(selector) {
      return document.querySelector(selector);
    },
    portal() {
      const { getContainer } = this;
      const el = this.$el;

      let container;
      if (getContainer) {
        container = this.getElement(getContainer);
      } else if (this.$parent) {
        container = this.$parent.$el;
      }

      if (container && container !== el.parentNode) {
        container.appendChild(el);
      }
    },
  },
};
</script>
