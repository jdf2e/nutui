<template>
  <!--配合进度条使用 播放时长、 兼容是否支持 、暂停、 开启-->
  <div class="nut-audio-operate">
    <div class="nut-audio-operate-item" @click="fastBack" v-if="type == 'back'"
      ><nut-button type="primary" size="small" v-if="!customSlot">{{ translate('back') }}</nut-button
      ><slot></slot
    ></div>
    <div class="nut-audio-operate-item" @click="changeStatus" v-if="type == 'play'"
      ><nut-button type="primary" size="small" v-if="!customSlot">{{
        !audioData.playing ? `${translate('start')}` : `${translate('pause')}`
      }}</nut-button>
      <slot></slot
    ></div>
    <div class="nut-audio-operate-item" @click="forward" v-if="type == 'forward'"
      ><nut-button type="primary" size="small" v-if="!customSlot">快进</nut-button><slot></slot
    ></div>
    <div class="nut-audio-operate-item" @click="handleMute" v-if="type == 'mute'"
      ><nut-button :type="!audioData.hanMuted ? 'primary' : 'default'" size="small" v-if="!customSlot">{{
        translate('mute')
      }}</nut-button
      ><slot></slot
    ></div>
  </div>
</template>
<script lang="ts">
import { toRefs, ref, useSlots, onMounted, reactive, inject } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('audio-operate');

export default create({
  props: {
    // 展示的形式   back 倒退   play 开始 or 暂停  forward 快进 mute 静音
    type: {
      type: String,
      default: () => 'play'
    }
  },
  components: {},
  emits: ['click'],

  setup(props, { emit }) {
    const audio: any = inject('audioParent');
    const parent: any = reactive(audio);
    const customSlot = ref(useSlots().default);

    return { ...toRefs(props), ...toRefs(parent), customSlot, translate };
  }
});
</script>
