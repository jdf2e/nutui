<template>
  <nut-config-provider :theme-vars="themeVars">
    <nut-form>
      <nut-form-item label="Range">
        <nut-range v-model="val" hidden-tag></nut-range>
      </nut-form-item>
    </nut-form>
  </nut-config-provider>
</template>
<script setup>
import { ref } from 'vue';
const val = ref();
const themeVars = ref({
  primaryColor: '#008000',
  primaryColorEnd: '#008000'
});
</script>
