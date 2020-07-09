<template>
  <div class="demo-list">
    <nut-skeleton class="my-skeleton">
      <h4>基础样式</h4>
      <column padding="0px 16px">
        <skeleton-square margin="0 0 10px 0" width="350px"></skeleton-square>
        <skeleton-square margin="0 0 10px 0" width="300px"></skeleton-square>
        <skeleton-square margin="0 0 10px 0" width="300px"></skeleton-square>
      </column>
      <row padding="0px 16px">
        <skeleton-square width="200px"></skeleton-square>
        <skeleton-square width="50px" margin="0 0 0 40px"></skeleton-square>
        <skeleton-square width="50px" margin="0 0 0 10px"></skeleton-square>
      </row>
      <h4>显示头像</h4>
      <row padding="0px 16px">
        <skeleton-circle diameter="50px"></skeleton-circle>
        <column>
          <skeleton-square width="275px" :count="2" margin="5px 10px 5px 10px"></skeleton-square>
          <skeleton-square width="200px" margin="5px 10px 5px 10px"></skeleton-square>
        </column>
      </row>
      <row padding="0 16px">
        <skeleton-circle diameter="50px"></skeleton-circle>
        <column>
          <skeleton-square width="275px" :count="2" margin="5px 10px 5px 10px"></skeleton-square>
          <skeleton-square width="100px" margin="5px 10px 5px 10px"></skeleton-square>
        </column>
      </row>
      <h4>自定义</h4>
      <row padding="0 16px">
        <skeleton-square width="75px" height="75px"></skeleton-square>
        <column padding="0 0 0 0">
          <skeleton-square width="260px" height="10px" margin="0 0px 5px 10px"></skeleton-square>
          <skeleton-square width="100px" height="7.5px" margin="5px 10px 5px 10px"></skeleton-square>
          <skeleton-square width="275px" backColor="#ffffff" :count="2"></skeleton-square>
          <skeleton-square width="50px" margin="0 10px 5px 10px"></skeleton-square>
        </column>
      </row>
      <row padding="0 16px">
        <skeleton-square width="30px" height="30px" v-for="i in 5" :key="i" margin="15px 15px 0 0"></skeleton-square>
      </row>
    </nut-skeleton>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.my-skeleton {
  padding-top: 30px;
  z-index: 998;
}
</style>
