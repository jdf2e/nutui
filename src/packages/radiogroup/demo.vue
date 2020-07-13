<template>
  <div>
    <h4>列表样式</h4>
    <nut-cell>
      <span slot="title">
        <nut-radio type="list" class="my-radio" v-model="radioVal5" label="b">备选项2</nut-radio>
      </span>
    </nut-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
