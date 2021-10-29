<template>
  <div><slot></slot></div>
</template>
<script lang="ts">
import { getCurrentInstance } from 'vue';
import { createComponent } from '../../utils/create';
const { create, componentName } = createComponent('menu-item');
export default create({
  setup() {
    let pro = (getCurrentInstance() as any).proxy;
    pro.toggle = () => {
      pro.$parent.activeTitle = '';
      pro.$parent.isShowCustomer = false;
      pro.$parent.showMask = false;
      pro.$parent.nutMenuIndex = 'auto';
    };

    return {};
  }
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
