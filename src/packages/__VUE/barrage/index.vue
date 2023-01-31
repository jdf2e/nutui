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
import { computed, onMounted, onUnmounted, ref, watch, nextTick, useSlots } from 'vue';
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
  setup(props) {
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
      init();
      if (slotDefault) {
        document.addEventListener('visibilitychange', function () {
          if (document.visibilityState === 'hidden') {
            clearTime();
            index.value = 0;
            eleSlot('hidden');
          } else if (document.visibilityState === 'visible') {
            init();
          }
        });
      }
    });

    onUnmounted(() => {
      danmuList.value = [];
      clearTime();
    });

    const init = () => {
      danmuCWidth.value = dmBody.value.offsetWidth;
      if (slotDefault) {
        eleSlot('init');
      }
      setTimeout(() => {
        dmBody.value?.style.setProperty('--move-distance', `-${danmuCWidth.value}px`);
        run();
      }, 300);
    };

    const eleSlot = (flag?: string) => {
      const list = document.getElementsByClassName('slotBody' + classTime);
      let childrens = list?.[0]?.children || [];
      const dmList: any[] = [];
      if (childrens) {
        Array.from(childrens).forEach((item: any) => {
          if (flag == 'init') {
            item.style.opacity = '0';
            dmList.push(item);
          } else {
            item.classList = '';
            item.style = {};
          }
        });
      }
      if (flag == 'init') {
        danmuList.value = dmList;
      }
    };

    const clearTime = () => {
      clearTimeout(timer);
      timer = 0;
    };

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
      clearTime();
      timer = setTimeout(() => {
        play();
      }, props.frequency);
    };
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
      // el.classList.add('nut-barrage__item');
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
        // el.style.left = '-' + (_index % rows.value) + 'px';
        // el.style.setProperty('--move-distance', `-${danmuCWidth.value}px`);
        // distance.value = '-' + (speeds / 1000) * 150 + '%';
        // el.dataset.index = `${_index}`;

        el.addEventListener('animationend', () => {
          if (slotDefault) {
            el.classList.remove('move');
          } else {
            dmContainer.value.removeChild(el);
          }
        });
        index.value++;
        if (index.value >= danmuList.value.length) {
          index.value = 0;
        }
        el.removeEventListener('animationend', () => {
          // 回调
        });
        run();
      });
    };
    return { classTime, classes, danmuList, dmBody, dmContainer, add };
  }
});
</script>
