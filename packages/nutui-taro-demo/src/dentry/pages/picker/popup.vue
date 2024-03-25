<template>
  <nut-cell title="请选择城市" :desc="String(val)" @click="show = true"></nut-cell>
  <nut-popup v-model:visible="show" position="bottom">
    <nut-picker v-model="val" :columns="columns" title="请选择城市" @confirm="confirm" @cancel="show = false" />
  </nut-popup>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
const val = ref()
const columns = ref([
  { text: '南京', value: 'Nanjing' },
  { text: '无锡', value: 'Wuxi' },
  { text: '海北', value: 'Haibei' },
  { text: '北京', value: 'Beijing' },
  { text: '连云港', value: 'Lianyungang' },
  { text: '长沙', value: 'Changsha' },
  { text: '武汉', value: 'Wuhan' }
])

const confirm = ({ selectedValue, selectedOptions }) => {
  console.log(selectedValue[0], selectedOptions[0])
  show.value = false
}
</script>
