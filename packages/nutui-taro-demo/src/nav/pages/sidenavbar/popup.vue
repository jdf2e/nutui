<template>
  <nut-cell @click="handleClick"> Right </nut-cell>
  <nut-popup v-model:visible="show" position="right" style="width: 80%; height: 100%">
    <nut-side-navbar>
      <nut-sub-side-navbar title="智能城市AI">
        <nut-sub-side-navbar title="人体识别1">
          <nut-side-navbar-item title="人体检测1"></nut-side-navbar-item>
          <nut-side-navbar-item title="细粒度人像分割1"></nut-side-navbar-item>
        </nut-sub-side-navbar>
        <nut-sub-side-navbar title="人体识别2">
          <nut-side-navbar-item title="人体检测2"></nut-side-navbar-item>
          <nut-side-navbar-item title="细粒度人像分割2"></nut-side-navbar-item>
        </nut-sub-side-navbar>
      </nut-sub-side-navbar>
    </nut-side-navbar>
  </nut-popup>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
const handleClick = () => {
  show.value = true
}
</script>
