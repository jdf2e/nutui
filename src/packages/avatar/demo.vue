<template>
  <div class="demo-list">
    <h4>默认用法</h4>
    <div class="white-bg">
      <nut-avatar size-num="80" :bg-image="require('../../assets/img/cell-avatar.jpeg')" @active-avatar="activeAvatar"></nut-avatar>
      <nut-avatar size-num="60" :bg-image="require('../../assets/img/cell-avatar.jpeg')" @active-avatar="activeAvatar"></nut-avatar>
      <nut-avatar size-num="40" :bg-image="require('../../assets/img/cell-avatar.jpeg')" @active-avatar="activeAvatar"></nut-avatar>
      <nut-avatar size-num="32" :bg-image="require('../../assets/img/cell-avatar.jpeg')" @active-avatar="activeAvatar"></nut-avatar>
    </div>

    <h4>带徽标的头像</h4>
    <div class="white-bg">
      <nut-avatar size-num="40" :bg-image="require('../../assets/img/cell-avatar.jpeg')" @active-avatar="activeAvatar">
        <nut-badge :value="9" :max="99" class="item" top="5px" right="10px"></nut-badge>
      </nut-avatar>
      <nut-avatar size-num="32" :bg-image="require('../../assets/img/cell-avatar.jpeg')" @active-avatar="activeAvatar">
        <nut-badge :isDot="true" top="5px" right="6px"></nut-badge>
      </nut-avatar>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    activeAvatar(event) {
      console.log('点击了头像', event);
    },
  },
};
</script>
<style lang="scss" scoped>
.white-bg {
  padding: 10px;
  background: #fff;
  display: flex;
  align-items: flex-end;
  .nut-avatar {
    margin-right: 23px;
  }
  .nut-badge {
    width: 100%;
    height: 100%;
  }
}
</style>
