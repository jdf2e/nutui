<template>
  <view
    @click="onClick"
    :style="style"
    class="nut-switch"
    :class="[isOpen ? 'switch-open' : 'switch-close']"
  >
    <view class="switch-button">
      <view v-show="!isOpen" class="close-line"></view>
    </view>
  </view>
</template>

<script lang="ts">
import { toRefs, computed, reactive, onMounted } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('switch');

export default create({
  props: {
    status: {
      type: Boolean,
      default: true
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    }
  },

  setup(props, { emit }) {
    const { status, activeColor, inactiveColor } = toRefs(props);
    const actColor = activeColor.value;
    const inaColor = inactiveColor.value;

    const response = reactive({
      isOpen: status.value ? status.value : true,
      style: {}
    });

    const styleCheck = status => {
      if (status) {
        if (actColor) {
          response.style = {
            backgroundColor: `${actColor}`
          };
        } else {
          response.style = {
            backgroundColor: 'rgb(250,63,25,1)'
          };
        }
      }
      if (!status) {
        if (inaColor) {
          response.style = {
            backgroundColor: `${inaColor}`
          };
        } else {
          response.style = {
            backgroundColor: 'rgba(235,235,235,1)'
          };
        }
      }
    };

    styleCheck(status.value);

    const onClick = () => {
      response.isOpen = !response.isOpen;
      styleCheck(response.isOpen);
      emit('switch-change', event, response.isOpen);
    };

    return {
      ...toRefs(response),
      onClick
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
