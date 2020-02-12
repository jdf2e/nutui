<template>
  <transition :name="transitionName">
    <div
      ref="popupBox"
      v-show="value"
      class="popup-box"
      :class="[`popup-${position}`, { round }]"
    >
        <slot></slot>
        <nut-icon v-if='closeable' @click.native='$emit("input", false)' :type="closeIcon" size="12px"  class="nutui-popup__close-icon" :class="'nutui-popup__close-icon--'+closeIconPosition">
        </nut-icon>
    </div>
  </transition>
</template>
<script>
import Vue from "vue";
import Mask from "./mask.vue";

export default {
  name: "nut-popup",
  props: {
    value: Boolean,
    position: {
      type: String,
      default: "center"
    },
    duration: Number,
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeable:{
        type: Boolean,
        default: false 
    },
    closeIconPosition: {
      type: String,
      default: 'top-right'
    },
    closeIcon:{
        type: String,
        default: 'cross'
    },
    round: Boolean
  },
  created() {
    if (this.transition) {
      this.transitionName = this.transition;
    } else if (this.position === "center") {
      this.transitionName = "popup-fade";
    } else {
      this.transitionName = `popup-slide-${this.position}`;
    }
  },
  mounted() {
    if (this.duration) {
      this.$refs.popupBox.style.transitionDuration = this.duration + "s";
    }
  },
  watch: {
    value(val) {
      const type = val ? "open" : "close";
      if (this.overlay) this[type]();
    },
    position(val) {
      if (val === "center") {
        this.transitionName = "popup-fade";
      } else {
        this.transitionName = `popup-slide-${this.position}`;
      }
    }
  },
  data() {
    return {
      transitionName: "popup-fade",
      maskInstant: null
    };
  },

  methods: {
    mount(Component, data) {
      const instance = new Vue({
        el: document.createElement("div"),
        props: Component.props,
        render(h) {
          return h(Component, {
            props: this.$props,
            ...data
          });
        }
      });
      document.body.appendChild(instance.$el);
      return instance;
    },

    open() {
      if (!this.maskInstant) {
        this.maskInstant = this.mount(Mask, {
          nativeOn: {
            click: () => {
              this.$emit("input", false);
            }
          }
        });
      } else {
        this.maskInstant.show = true;
      }
    },
    close() {
      this.maskInstant.show = false;
    }
  }
};
</script>
