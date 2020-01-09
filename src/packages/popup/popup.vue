<template>
  <transition :name="transitionName">
    <div
      ref="popupBox"
      v-show="value"
      class="popup-box"
      :class="[`popup-${position}`, { round }]"
    >
      <slot></slot>
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
<style lang="scss" scoped>
.popup-fade-enter-active {
  animation: 0.2s van-fade-in;
}
.popup-fade-leave-active {
  animation: 0.2s van-fade-out;
}

.popup-slide {
  &-top-enter,
  &-top-leave-active {
    transform: translate(0, -100%);
  }
  &-right-enter,
  &-right-leave-active {
    transform: translate(100%, 0);
  }

  &-bottom-enter,
  &-bottom-leave-active {
    transform: translate(0, 100%);
  }

  &-left-enter,
  &-left-leave-active {
    transform: translate(-100%, 0);
  }
}

.popup-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.popup-bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  &.round {
    border-radius: 25px 25px 0 0;
  }
}
.popup-right {
  top: 0;
  right: 0;
  &.round {
    border-radius: 25px 0 0 25px;
  }
}

.popup-left {
  top: 0;
  left: 0;
  &.round {
    border-radius: 0 25px 25px 0;
  }
}
.popup-top {
  top: 0;
  left: 0;
  width: 100%;
  &.round {
    border-radius: 0 0 25px 25px;
  }
}
.popup-box {
  position: fixed;
  max-height: 100%;
  overflow-y: auto;
  background-color: #fff;
  transition: transform 0.2s;
  -webkit-overflow-scrolling: touch;
  z-index: 2028;
}
@keyframes van-fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes van-fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
