<template>
  <div
    class="nut-luckycard"
    :style="{ height: height + 'px', width: width + 'px' }"
    ref="luckycarddom"
    id="luckycarddom"
  >
    <div
      class="lucky-content"
      v-html="content"
      :style="{ backgroundColor: backgroundColor, fontSize: fontSize + 'px' }"
    ></div>
  </div>
</template>
<script lang="ts">
import { ref, nextTick, onMounted, reactive } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('luckycard');
import LuckyCard from './luckycard.js';
export default create({
  props: {
    content: {
      type: String,
      default: ''
    },
    height: {
      type: [String, Number],
      default: 50
    },
    width: {
      type: [String, Number],
      default: 300
    },
    coverColor: {
      type: String,
      default: '#C5C5C5'
    },
    coverImg: {
      type: String,
      default: ''
    },
    fontSize: {
      type: [String, Number],
      default: 20
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    ratio: {
      type: [String, Number],
      default: 0.5
    }
  },
  components: {},
  emits: ['click', 'open'],

  setup(props, { emit }) {
    const luckycarddom = ref<HTMLElement | null>(null);
    const state = reactive({
      luckcard: null
    });
    const clearCover = () => {
      state.luckcard.clearCover();
    };
    onMounted(() => {
      let dom = document.getElementById('luckycarddom');
      nextTick(() => {
        console.log(LuckyCard);
        state.luckcard = LuckyCard(
          {
            scratchDiv: luckycarddom.value,
            coverColor: props.coverColor,
            coverImg: props.coverImg,
            ratio: Number(props.ratio),
            callback: function () {
              //console.log(this);
              clearCover();
              emit('open', this);
            }
          },
          null
        ) as any;
      });
    });

    return { luckycarddom };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
