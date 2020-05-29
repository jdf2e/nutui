<template>
  <transition
    :name="transitionName"
    @after-enter="$emit('opened')"
    @after-leave="$emit('closed')"
  >
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
import Vue from "vue";
import Icon from "../icon/icon.vue";
import touchMixins from "../../mixins/touch.js";
import {overlayManager ,overlayProps} from "./overlay/overlay-manager.js";
import { on, off } from "../../utils/event"; 
import "../icon/icon.scss";


const overflowScrollReg = /scroll|auto/i;
export default {
  name: "nut-popup",
  mixins: [touchMixins],
  components: {
    icon: Icon,
  },
  props: {
    ...overlayProps,
    position: {
      type: String,
      default: "center",
    },

    transition: String,

    closeable: {
      type: Boolean,
      default: false,
    },
    closeIconPosition: {
      type: String,
      default: "top-right",
    },
    closeIcon: {
      type: String,
      default: "cross",
    },

    closeOnClickOverlay: {
      type: Boolean,
      default: true,
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
    this.transition
      ? (this.transitionName = this.transition)
      : (this.transitionName = `popup-slide-${this.position}`);
  },
  mounted() {
    if (this.value) {
      this.open();
    }
  },
  watch: {
    value(val) {
      const type = val ? "open" : "close";
      this[type]();
    },
    position(val) {
      val === "center"
        ? (this.transitionName = "popup-fade")
        : (this.transitionName = `popup-slide-${this.position}`);
    },
    getContainer: "portal",
    overlay: "renderOverlay",
  },
  data() {
    return {
      showSlot: true,
      transitionName: "popup-fade-center",
      overlayInstant: null,
    };
  },
  computed: {
    transitionDuration() {
      return this.duration ? this.duration + "s" : "initial";
    },
  },
  methods: {
    open() {
      if (this.opened) {
        return;
      }

      this.opened = true;
      this.$emit("open");
   
      const {
        duration,
        overlayClass,
        overlayStyle,
        lockScroll,
        closeOnClickOverlay,
      } = this; 
      const config = {
        zIndex:this.zIndex ? this.zIndex : overlayManager.zIndex,
        duration,
        overlayClass,
        overlayStyle,
        lockScroll,
        closeOnClickOverlay,
      };

      this.renderOverlay(config);

      if (this.lockScroll) {
        on(document, "touchstart", this.touchStart);
        on(document, "touchmove", this.onTouchMove);

        if (!overlayManager.lockCount) {
          document.body.classList.add("nut-overflow-hidden");
        }
        overlayManager.lockCount++;
      }
      
      this.$el.style.zIndex = this.zIndex ? this.zIndex + 1 : overlayManager.zIndex;
    },
    renderOverlay(config) {
      if (!this.value) {
        return;
      }

      if (this.overlay) {
        overlayManager.openModal(this, config);
      } else {
        overlayManager.closeOverlay(this);
      }
    },
    onTouchMove(event) {
      this.touchMove(event);
      const el = this.getScroller(event.target, this.$el);
      const { scrollHeight, offsetHeight, scrollTop } = el;

      if (
        (this.deltaY > 0 && scrollTop === 0) ||
        (this.deltaY < 0 && scrollTop + offsetHeight >= scrollHeight)
      ) {
        event.preventDefault();
      }
    },
    getScroller(el, root) {
      let node = el;
      while (
        node &&
        node.tagName !== "HTML" &&
        node.nodeType === 1 &&
        node !== root
      ) {
        const { overflowY } = window.getComputedStyle(node);

        if (overflowScrollReg.test(overflowY)) {
          if (node.tagName !== "BODY") {
            return node;
          }
          const { overflowY: htmlOverflowY } = window.getComputedStyle(
            node.parentNode
          );

          if (overflowScrollReg.test(htmlOverflowY)) {
            return node;
          }
        }

        node = node.parentNode;
      }

      return root;
    },
    close() {
      if (!this.opened) {
        return;
      }
      this.$emit('close')
      this.opened = false;
      if (this.lockScroll) {
        overlayManager.lockCount--;
        off(document, "touchstart", this.touchStart);
        off(document, "touchmove", this.onTouchMove);
        if (!overlayManager.lockCount) {
          document.body.classList.remove("nut-overflow-hidden");
        }
      }

      overlayManager.closeOverlay(this);
      this.$emit("input", false);
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
