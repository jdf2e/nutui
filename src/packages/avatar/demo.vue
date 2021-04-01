<template>
  <div class="demo full">
    <h2>默认用法 (内置"small","normal","large"三种尺寸规格)</h2>
    <nut-cell>
      <nut-avatar
        size="large"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      >
      </nut-avatar>
      <nut-avatar
        size="normal"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      >
      </nut-avatar>
      <nut-avatar
        size="small"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      >
      </nut-avatar>
    </nut-cell>
    <h2>修改形状</h2>
    <nut-cell>
      <nut-avatar shape="square"></nut-avatar>
      <nut-avatar shape="round"></nut-avatar>
    </nut-cell>
    <h2>修改背景色</h2>
    <nut-cell>
      <nut-avatar bg-color="#FA2C19"></nut-avatar>
    </nut-cell>
    <h2>修改背景Icon</h2>
    <nut-cell>
      <nut-avatar
        icon="https://img30.360buyimg.com/uba/jfs/t1/84318/29/2102/10483/5d0704c1Eb767fa74/fc456b03fdd6cbab.png"
      >
      </nut-avatar>
    </nut-cell>
    <h2>可以修改头像的内容</h2>
    <nut-cell>
      <nut-avatar icon>N</nut-avatar>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('avatar');
export default createDemo({
  props: {},
  setup() {
    const onError = (e: Event) => {
      console.error(e);
    };
    return { onError };
  }
});
</script>
<style lang="scss" scoped>
.nut-cell {
  align-items: flex-end;
  border-radius: 0;
}
</style>
