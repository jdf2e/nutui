<template>
  <Cube :dataMagic="data" :type="type" :autoplay="autoplay" v-if="data && data.length >= 8" @clickItem="clickItem" />
</template>

<script>
import Cube from './Cube';

export default {
  name: 'nut-magic',
  components: {
    Cube
  },
  props: {
    data: {
      type: [Object, Array],
      default: () => {
        return [];
      }
    },
    // dataSpecial: {
    //   type: [Object, Array],
    //   default: null
    // },
    type: {
      type: String,
      default: 'rank'
    },
    autoplay: {
      default: true
    }
  },
  computed: {},
  data() {
    return {};
  },
  watch: {
    data(newV, old) {
      // this.init();
    }
  },
  methods: {
    clickItem(item) {
      this.$emit('click', item);
    }
  }
};
</script>

<style lang="scss" scoped></style>
