<template>
  <nut-space>
    <nut-popover v-model:visible="show1" :list="list1" location="right">
      <template #reference>
        <nut-button type="primary" shape="square"> Disabled </nut-button>
      </template>
    </nut-popover>
    <nut-popover v-model:visible="show2" theme="dark" :list="list2">
      <template #reference>
        <nut-button type="primary" shape="square"> Icon </nut-button>
      </template>
    </nut-popover>
  </nut-space>
</template>

<script setup lang="ts">
import { ref, shallowRef, h } from 'vue';
import { Location, Cart2, My2 } from '@nutui/icons-vue';
const show1 = ref(false);
const show2 = ref(false);
const list1 = ref([
  {
    name: 'option1',
    disabled: true
  },
  {
    name: 'option2',
    disabled: true
  },
  {
    name: 'option3'
  }
]);
const list2 = shallowRef([
  {
    name: 'option1',
    icon: () => {
      return h(My2, {
        width: '14px',
        color: 'rgba(250, 44, 25, 1)'
      });
    }
  },
  {
    name: 'option2',
    icon: Cart2
  },
  {
    name: 'option3',
    icon: Location
  }
]);
</script>

<style>
.nut-popover-content {
  width: 100px;
}
</style>
