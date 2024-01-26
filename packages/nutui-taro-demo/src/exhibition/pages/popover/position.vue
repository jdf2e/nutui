<template>
  <nut-cell title="Position" @click="handlePicker"></nut-cell>
  <nut-popup v-model:visible="showPopup" position="bottom">
    <nut-picker :columns="columns" @change="change" @confirm="close" @close="close">
      <template #top>
        <div class="brickBox">
          <div id="popover-target" class="brick"></div>
        </div>
      </template>
    </nut-picker>
  </nut-popup>

  <nut-popover
    v-model:visible="customPositon"
    target-id="popover-target"
    :location="curPostion"
    theme="dark"
    :list="positionList"
  >
  </nut-popover>
</template>

<script setup>
import { reactive, ref } from 'vue';
const showPopup = ref(false);
const customPositon = ref(false);
const curPostion = ref('top');
const positionList = reactive([
  {
    name: 'option1'
  },
  {
    name: 'option2'
  }
]);
const close = () => {
  customPositon.value = false;
  showPopup.value = false;
};

const change = ({ selectedValue }) => {
  curPostion.value = selectedValue[0];
  if (showPopup.value) customPositon.value = true;
};

const handlePicker = () => {
  showPopup.value = true;
  setTimeout(() => {
    customPositon.value = true;
  }, 0);
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
.brickBox {
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

<style>
.nut-popover-content {
  width: 100px;
}
</style>
