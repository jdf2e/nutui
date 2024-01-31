<template>
  <nut-audio
    :url="url"
    :loop="false"
    type="progress"
    @forward="forward"
    @fast-back="fastBack"
    @play="changeStatus"
    @ended="ended"
    @change-progress="changeProgress"
  >
    <div class="nut-audio-operate-group">
      <nut-audio-operate type="back">
        <PlayDoubleBack width="35px" height="35px"></PlayDoubleBack>
      </nut-audio-operate>
      <nut-audio-operate type="play">
        <PlayStart v-if="!playing" width="35px" height="35px"></PlayStart>
        <PlayStop v-else width="35px" height="35px"></PlayStop>
      </nut-audio-operate>
      <nut-audio-operate type="forward">
        <PlayDoubleForward width="35px" height="35px"></PlayDoubleForward>
      </nut-audio-operate>
    </div>
  </nut-audio>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { PlayDoubleBack, PlayDoubleForward, PlayStart, PlayStop } from '@nutui/icons-vue';
const url = '//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav';
const playing = ref(false);
const fastBack = () => {
  console.log('Backwards');
};
const forward = (progress: string) => {
  console.log('Fast forward', 'Current Time' + progress);
};
const changeStatus = (status: boolean) => {
  console.log('Current play status', status);
  playing.value = status;
};
const ended = () => {
  console.log('Playing ended');
};
const changeProgress = (val: string) => {
  console.log('Change progress', val);
};
</script>
