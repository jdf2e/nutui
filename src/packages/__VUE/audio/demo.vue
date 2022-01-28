<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-audio
      url="http://storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
      :muted="muted"
      :autoplay="autoplay"
      :loop="true"
      ref="audioDemo"
    ></nut-audio>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('audio');
export default createDemo({
  props: {},
  setup() {
    const audioDemo = ref(null);
    const data = reactive({
      muted: false
    });

    const fastBack = () => {
      console.log('倒退');
    };

    const forward = () => {
      console.log('快进');
    };

    const changeStatus = () => {
      console.log('快进');
    };

    onMounted(() => {
      setTimeout(() => {
        // data.muted = true;

        console.log(audioDemo.value.audioRef);
      }, 2000);
    });

    return { ...toRefs(data), fastBack, forward, changeStatus, audioDemo };
  }
});
</script>
<style lang="scss" scoped>
.demo {
  .operators {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    .op {
      margin: 0 5px;
    }
  }
}
</style>
