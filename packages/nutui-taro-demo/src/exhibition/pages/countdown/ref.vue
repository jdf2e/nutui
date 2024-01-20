<template>
  <nut-space>
    <nut-countdown ref="Countdown" time="20000" :auto-start="false" format="ss:SS" />
    <nut-button size="mini" @click="start"> Start </nut-button>
    <nut-button size="mini" @click="pause"> Pause </nut-button>
    <nut-button size="mini" @click="reset"> Reset </nut-button>
  </nut-space>
</template>
<script setup>
import { ref } from 'vue';
const Countdown = ref(null);
const start = () => {
  Countdown.value.start();
};
const pause = () => {
  Countdown.value.pause();
};
const reset = () => {
  Countdown.value.reset();
};
</script>
