<template>
  <div class="vue-skeleton-loading">
    <div class="skeleton-bac-animation"></div>
    <div class="skeleton-bac-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "nut-skeleton",
  data() {
    return {};
  }
};
</script>

