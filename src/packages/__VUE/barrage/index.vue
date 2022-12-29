<template>
  <div ref="dmBody" :class="classes">
    <div ref="dmContainer" :class="['dmContainer', $slots.default && 'slotContainer']">
      <div :class="['slotBody', 'slotBody' + classTime]" v-if="$slots.default">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, onMounted, onUnmounted, onDeactivated, ref, watch, nextTick, useSlots } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('barrage');

export default create({
  name: 'barrage',
  props: {
    danmu: {
      type: Array,
      default: () => []
    },
    frequency: {
      type: Number,
      default: 500
    },
    speeds: {
      type: Number,
      default: 5000
    },
    rows: {
      type: Number,
      default: 3
    },
    top: {
      type: Number,
      default: 10
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  emits: ['click'],

  setup(props, { slots }) {
    const classTime = new Date().getTime();
    const slotDefault = !!useSlots().default;

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    let dmBody = ref<HTMLDivElement>(document.createElement('div'));
    let dmContainer = ref<HTMLDivElement>(document.createElement('div'));

    let timer = 0;
    const danmuList: any = ref(props.danmu);
    const rows = ref<number>(props.rows);
    const top = ref<number>(props.top);
    const index = ref<number>(0);
    const speeds = props.speeds;
    const danmuCWidth = ref(0);

    onMounted(() => {
      danmuCWidth.value = dmBody.value.offsetWidth;
      if (slotDefault) {
        const list = document.getElementsByClassName('slotBody' + classTime);
        let childrens = list?.[0]?.children || [];
        const dmList: any[] = [];
        if (childrens) {
          Array.from(childrens).forEach((item: any) => {
            item.style.opacity = '0';
            dmList.push(item);
          });
        }
        danmuList.value = dmList;
      }
      setTimeout(() => {
        dmBody.value?.style.setProperty('--move-distance', `-${danmuCWidth.value}px`);
        run();
      }, 300);
    });

    onUnmounted(() => {
      danmuList.value = [];
      clearInterval(timer);
      timer = 0;
    });

    onDeactivated(() => {
      danmuList.value = [];
      clearInterval(timer);
      timer = 0;
    });

    watch(
      () => props.danmu,
      (newValue) => {
        if (props.danmu.length > 0) {
          danmuList.value = [...newValue];
        }
      }
    );

    const add = (word: string) => {
      const _index = index.value % danmuList.value.length;
      if (!props.loop && index.value === danmuList.value.length) {
        danmuList.value.splice(danmuList.value.length, 0, word);
      } else {
        danmuList.value.splice(_index, 0, word);
      }
    };

    const run = () => {
      clearInterval(timer);
      timer = 0;
      timer = setTimeout(() => {
        play();
        run();
      }, props.frequency);
    };
    // const distance = ref('0');
    const play = () => {
      if (!props.loop && index.value >= danmuList.value.length) {
        return;
      }
      const _index = props.loop ? index.value % danmuList.value.length : index.value;
      let el = document.createElement(`view`);
      if (slotDefault && typeof danmuList.value[_index] == 'object') {
        el = danmuList.value[_index];
        el?.classList?.add('dmitem');
      } else {
        el.innerHTML = danmuList.value[_index] as string;
        el.classList.add('dmitem');
        dmContainer.value.appendChild(el);
      }

      // let el = document.createElement(`div`);
      // el.innerHTML = danmuList.value[_index] as string;
      // el.classList.add('dmitem');
      // dmContainer.value.appendChild(el);
      nextTick(() => {
        const height = el.offsetHeight;
        el?.classList?.add('move');
        el.style.animationDuration = `${speeds}ms`;
        el.style.top = (_index % rows.value) * (height + top.value) + 20 + 'px';
        el.style.opacity = '1';
        if (!slotDefault) {
          const width = el.offsetWidth;
          el.style.width = width + 20 + 'px';
        }

        // el.style.left = "-"+(_index % rows.value) + 'px';
        // el.style.setProperty('--move-distance', `-${danmuCWidth.value}px`);
        // document.documentElement.style.setProperty('--move-distance', `-${danmuCWidth.value}px`);
        // distance.value = '-' + (speeds / 1000) * 150 + '%';
        el.dataset.index = `${_index}`;
        if (slotDefault) {
          index.value++;
          el.addEventListener('animationend', () => {
            if (el?.classList?.contains('move')) {
              el.classList.remove('move');
            }
          });
        } else {
          el.addEventListener('animationend', () => {
            dmContainer.value.removeChild(el);
          });
          index.value++;
        }
      });
    };
    return { classTime, classes, danmuList, dmBody, dmContainer, add };
  }
});
</script>
