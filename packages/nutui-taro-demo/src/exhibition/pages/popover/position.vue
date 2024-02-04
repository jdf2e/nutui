<template>
  <nut-cell title="Position" @click="handlePicker"></nut-cell>
  <nut-popup v-model:visible="showPopup" position="bottom" @opened="handleOpened">
    <nut-picker :columns="columns" @change="change" @confirm="close" @cancel="close">
      <template #top>
        <div class="brick-box">
          <div id="popover-target" class="brick"></div>
        </div>
      </template>
    </nut-picker>
  </nut-popup>

  <nut-popover
    v-model:visible="showPopover"
    target-id="popover-target"
    :location="curPostion"
    theme="dark"
    :list="positionList"
  />
</template>

<script setup>
import { ref } from 'vue';
const showPopup = ref(false);
const showPopover = ref(false);
const curPostion = ref('top');
const positionList = ref([
  {
    name: 'option1'
  },
  {
    name: 'option2'
  }
]);
const close = () => {
  showPopover.value = false;
  showPopup.value = false;
};

const change = ({ selectedValue }) => {
  curPostion.value = selectedValue[0];
  if (showPopup.value) showPopover.value = true;
};

const handlePicker = () => {
  showPopup.value = true;
};

const handleOpened = () => {
  showPopover.value = true;
};

const columns = ref([
  { text: 'top', value: 'top' },
  { text: 'top-start', value: 'top-start' },
  { text: 'top-end', value: 'top-end' },
  { text: 'right', value: 'right' },
  { text: 'right-start', value: 'right-start' },
  { text: 'right-end', value: 'right-end' },
  { text: 'bottom', value: 'bottom' },
  { text: 'bottom-start', value: 'bottom-start' },
  { text: 'bottom-end', value: 'bottom-end' },
  { text: 'left', value: 'left' },
  { text: 'left-start', value: 'left-start' },
  { text: 'left-end', value: 'left-end' }
]);
</script>

<style>
.nut-popover-content {
  width: 100px;
}

.brick-box {
  margin: 80px 0;
  display: flex;
  justify-content: center;
}
.brick {
  width: 60px;
  height: 60px;
  background: #fa2c19;
  border-radius: 10px;
}
</style>
