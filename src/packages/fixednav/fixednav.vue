<template>
  <div class="nut-fixednav" :class="styled">
    <div style="position:relative;z-index:1">
      <nut-popup v-model="defaultActive"></nut-popup>
    </div>
    <slot name="list">
      <ul class="fixed-list">
        <li v-for="(item, index) in navList" @click="selected(item, $event)" :key="item.id || index">
          <img :src="item.icon" />
          <span>{{ item.text }}</span>
          <b v-if="item.num">{{ item.num }}</b>
        </li>
      </ul>
    </slot>

    <div class="fixed-btn" @click="defaultActive = !defaultActive">
      <slot name="btn">
        <img src="https://img14.360buyimg.com/imagetools/jfs/t1/149975/30/1615/368/5ef86176Eb75bae46/5f70ae80a2d567b4.png" />
        <span>{{ defaultActive ? activeText : unActiveText }}</span>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nut-fixednav',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    navList: {
      default: () => [],
      type: Array
    },
    activeText: {
      default: '收起导航',
      type: String
    },
    unActiveText: {
      default: '快速导航',
      type: String
    },
    type: {
      default: 'right',
      type: String
    }
  },
  computed: {
    styled() {
      return {
        active: this.defaultActive,
        [this.defaultType]: true
      };
    }
  },
  watch: {
    defaultActive(newV, oldV) {
      this.$emit('update:active', newV);
    }
  },
  data() {
    return {
      defaultActive: false,
      defaultType: ''
    };
  },
  mounted() {
    this.defaultActive = this.active;
    this.defaultType = this.type;
  },
  methods: {
    selected(item, $event) {
      this.$emit('selected', { item, $event });
    }
  }
};
</script>
