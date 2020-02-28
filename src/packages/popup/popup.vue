<template>
  <transition
    :name="transitionName"
    @after-enter="$emit('opened')"
    @after-leave="$emit('closed')"
  >
    <div
      ref="popupBox"
      v-show="value"
      class="popup-box"
      :class="[`popup-${position}`, { round }]"
      @click="$emit('click', this)"
    >
      <slot></slot>
      <nut-icon
        v-if="closeable"
        @click.native="$emit('input', false)"
        :type="closeIcon"
        size="12px"
        class="nutui-popup__close-icon"
        :class="'nutui-popup__close-icon--' + closeIconPosition"
      >
      </nut-icon>
    </div>
  </transition>
</template>
<script>
import Vue from "vue";
import overlay from "./overlay.vue";

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
    closeable: {
      type: Boolean,
      default: false
    },
    closeIconPosition: {
      type: String,
      default: "top-right"
    },
    closeIcon: {
      type: String,
      default: "cross"
    },
    lockScroll:{
        type:Boolean,
        default:true
    },
    closeOnClickOverlay:{
        type:Boolean,
        default:true
    },
    overlayClass: {
        type:String,
        default:""
    },
    overlayStyle: {
        type:String,
        default:""
    },
    getContainer:String,
    round: Boolean
  },
  beforeCreate() {},
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
    if (this.getContainer) {
        this.portal();
    }
    if (this.value) {
      this.open();
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
    },
    getContainer: 'portal'
  },
  data() {
    return {
      transitionName: "popup-fade",
      overlayInstant: null
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
        this.overlayInstant = this.mount(overlay, {
          className: this.overlayClass,
          customStyle: this.overlayStyle,
          nativeOn: {
            click: () => {
              this.$emit("click-overlay", this);
              if(this.closeOnClickOverlay){
                  this.$emit("input", false);
              }              
            }
          }
        });
      } else {
        this.overlayInstant.show = true;
      }
   
     if (this.lockScroll && !this.locked) {
             
        document.body.classList.add('nut-overflow-hidden');
        this.locked = true;
     }
     
      this.$emit("open", this);
    },
    close() {
      this.overlayInstant.show = false;
      if (this.lockScroll && this.locked) {                
        document.body.classList.remove('nut-overflow-hidden');  
        this.locked = false;      
      }
      this.$emit("close", this);
    },
    getElement(selector){   
      if (typeof selector === "string") {
        return document.querySelector(selector);
      }
      return selector();
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
      }
  }
};
</script>
