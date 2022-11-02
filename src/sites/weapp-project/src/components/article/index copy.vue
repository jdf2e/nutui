<template>
  <view> 111{{ msg }}<native-slot /> </view>
</template>

<script lang="ts" setup>
import { toRefs, defineProps } from 'vue';
const props = defineProps({
  msg: String
});
</script>
