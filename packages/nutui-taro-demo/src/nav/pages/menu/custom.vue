<template>
  <nut-menu>
    <nut-menu-item v-model="val" :options="options" />
    <nut-menu-item ref="item" title="筛选">
      <div :style="{ display: 'flex', flex: 1, 'justify-content': 'space-between', 'align-items': 'center' }">
        <div :style="{ marginRight: '10px' }">自定义内容</div>
        <nut-button @click="onClick">确认</nut-button>
      </div>
    </nut-menu-item>
  </nut-menu>
</template>

<script setup>
import { ref } from 'vue';
const item = ref();
const val = ref(0);
const options = ref([
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 }
]);

const onClick = () => {
  item.value.toggle();
};
</script>
