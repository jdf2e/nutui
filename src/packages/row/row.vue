<template>
  <div class="nut-row" :class="getClassObject()">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'nut-row',
  props: {
    type: {
      type: String,
      default: ''
    },
    gutter: {
      type: [String, Number],
      default: ''
    },
    tag: {
      type: String,
      default: 'div'
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'flex-start'
    },
    flexWrap: {
      type: String,
      default: 'nowrap'
    }
  },
  computed: {
    getGutter() {
      return `${this.gutter}px`;
    }
  },
  methods: {
    initCol(slot) {
      for (let i = 0; i < slot.length; i++) {
        let tag = slot[i].tag;
        if (typeof tag == 'string') {
          if (tag.indexOf('nut-col') != -1) {
            const slotElm = slot[i].elm;
            slotElm.style.paddingLeft = this.getGutter;
            slotElm.style.paddingRight = this.getGutter;
          }
        }
      }
    },
    getClass(prefix, type) {
      return prefix ? (type ? `nut-row-${prefix}-${type}` : '') : `nut-row-${type}`;
    },
    getClassObject() {
      return `
                ${this.getClass('', this.type)}  
                ${this.getClass('justify', this.justify)} 
                ${this.getClass('align', this.align)} 
                ${this.getClass('flex', this.flexWrap)}
                `;
    }
  },
  mounted() {
    let slot = [...this.$slots.default];
    this.initCol(slot);
  }
};
</script>
