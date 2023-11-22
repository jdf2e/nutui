<template>
  <!--配合进度条使用 播放时长、 兼容是否支持 、暂停、 开启-->
  <div class="nut-audio-operate">
    <div v-if="type == 'back'" class="nut-audio-operate-item" @click="fastBack"
      ><nut-button v-if="!customSlot" type="primary" size="small">{{ translate('back') }}</nut-button
      ><slot></slot
    ></div>
    <div v-if="type == 'play'" class="nut-audio-operate-item" @click="changeStatus"
      ><nut-button v-if="!customSlot" type="primary" size="small">{{
        !audioData.playing ? `${translate('start')}` : `${translate('pause')}`
      }}</nut-button>
      <slot></slot
    ></div>
    <div v-if="type == 'forward'" class="nut-audio-operate-item" @click="forward"
      ><nut-button v-if="!customSlot" type="primary" size="small">快进</nut-button><slot></slot
    ></div>
    <div v-if="type == 'mute'" class="nut-audio-operate-item" @click="handleMute"
      ><nut-button v-if="!customSlot" :type="!audioData.hanMuted ? 'primary' : 'default'" size="small">{{
        translate('mute')
      }}</nut-button
      ><slot></slot
    ></div>
  </div>
</template>
<script lang="ts">
import { toRefs, ref, useSlots, reactive, inject } from 'vue';
import { createComponent } from '@/packages/utils/create';
import NutButton from '../button/index.vue';
import { useLocale } from '@/packages/utils';

const { create } = createComponent('audio-operate');
const cN = 'NutAudioOperate';

export default create({
  props: {
    // 展示的形式   back 倒退   play 开始 or 暂停  forward 快进 mute 静音
    type: {
      type: String,
      default: () => 'play'
    }
  },
  components: {
    NutButton
  },
  emits: ['click'],

  setup(props) {
    const translate = useLocale(cN);
    const audio: any = inject('audioParent');
    const parent: {
      children: [];
      audioData: any;
      handleMute: (payload: MouseEvent) => void;
      forward: (payload: MouseEvent) => void;
      fastBack: (payload: MouseEvent) => void;
      changeStatus: (payload: MouseEvent) => void;
    } = reactive(audio);
    const customSlot = ref(useSlots().default);

    return { ...toRefs(props), ...toRefs(parent), customSlot, translate };
  }
});
</script>
