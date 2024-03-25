<template>
  <div>
    <nut-badge>
      <template #icon>
        <Check color="#ffffff" size="12px"></Check>
      </template>
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge>
      <template #icon>
        <Link color="#ffffff" size="12px"></Link>
      </template>
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge>
      <template #icon>
        <Download color="#ffffff" size="12px"></Download>
      </template>
      <nut-avatar shape="square"></nut-avatar>
    </nut-badge>
  </div>
</template>

<script setup lang="ts">
import { Check, Link, Download } from '@nutui/icons-vue-taro'
</script>
