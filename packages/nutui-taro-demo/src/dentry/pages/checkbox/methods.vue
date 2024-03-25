<template>
  <nut-cell>
    <nut-checkbox-group ref="group" v-model="state.checkboxgroup3" @change="changeBox4">
      <nut-checkbox v-for="item in state.checkboxsource" :key="item.label" :label="item.label">{{
        item.value
      }}</nut-checkbox>
    </nut-checkbox-group>
  </nut-cell>
  <nut-cell>
    <nut-button type="primary" style="margin: 0 20px 0 0" @click="toggleAll(true)"> All </nut-button>
    <nut-button type="primary" style="margin: 0 20px 0 0" @click="toggleAll(false)"> Cancel </nut-button>
    <nut-button type="warning" @click="toggleReverse"> Reverse </nut-button>
  </nut-cell>
</template>
<script setup>
import { reactive, ref } from 'vue'
const state = reactive({
  checkboxgroup3: ['2'],
  checkboxsource: [
    { label: '1', value: 'A' },
    { label: '2', value: 'B' },
    { label: '3', value: 'C' },
    { label: '4', value: 'D' },
    { label: '5', value: 'E' },
    { label: '6', value: 'F' },
    { label: '7', value: 'G' },
    { label: '8', value: 'H' }
  ]
})

const group = ref(null)
const changeBox4 = (label) => {
  console.log(`${label.length === state.checkboxsource.length ? '全选' : '取消全选'}`)
}

const toggleAll = (f) => {
  group.value.toggleAll(f)
}

const toggleReverse = () => {
  console.log(`反选`)
  group.value.toggleReverse()
}
</script>
