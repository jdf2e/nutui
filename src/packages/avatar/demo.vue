<template>
  <div class="demo avatar-demo">
    <h2>默认用法</h2>
    <!-- <p>内置"small","normal","large"三种尺寸规格</p> -->
    <nut-cell>
      <nut-avatar size="80" bg-icon bg-image="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"></nut-avatar>
      <nut-avatar size="large" bg-icon bg-image="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"></nut-avatar>
      <nut-avatar size="normal" bg-icon bg-image="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"></nut-avatar>
      <nut-avatar size="small" bg-icon bg-image="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"></nut-avatar>
    </nut-cell>
    <!-- <h2>修改形状类型</h2>
    <nut-cell>
      <nut-avatar size="large" shape="square"></nut-avatar>
      <nut-avatar size="normal" shape="square"></nut-avatar>
      <nut-avatar size="small" shape="square"></nut-avatar>
    </nut-cell> -->
    <h2>修改背景色</h2>
    <nut-cell>
      <nut-avatar bg-color="#FA2C19"></nut-avatar>
    </nut-cell>
    <h2>修改背景图片</h2>
    <nut-cell>
      <nut-avatar bg-icon bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/139441/32/16630/31987/5fc6f541E66763039/5f17cb6954f419b2.png"></nut-avatar>
    </nut-cell>
    <h2>可以修改头像的内容</h2>
    <nut-cell>
      <nut-avatar bg-icon>N</nut-avatar>
    </nut-cell>
    <h2>点击头像有触发事件</h2>
    <nut-cell>
      <nut-avatar @active-avatar="activeAvatar"></nut-avatar>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('avatar');
export default createDemo({
  props: {},
  methods: {
    activeAvatar(event) {
      console.log('点击了头像', event);
    }
  }
});
</script>
<style lang="scss" scoped>
#app {
  .avatar-demo {
    padding-left: 0;
    padding-right: 0;
    & > h2 {
      padding: 0 25px;
    }

  }
}

.nut-cell {
  align-items: flex-end;
  border-radius: 0;
}
</style>
