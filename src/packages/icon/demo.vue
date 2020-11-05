<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-icon name="wifi"></nut-icon>
      <nut-icon name="mail"></nut-icon>
    </nut-cell>
    <h2>图标颜色</h2>
    <nut-cell>
      <nut-icon name="mail" color="#fa2c19"></nut-icon>
      <nut-icon name="mail" color="#64b578"></nut-icon>
    </nut-cell>

    <h2>图标大小</h2>
    <nut-cell>
      <nut-icon name="mail"></nut-icon>
      <nut-icon name="mail" size="24px"></nut-icon>
      <nut-icon name="mail" size="16px"></nut-icon>
    </nut-cell>

    <h2>基础图标</h2>
    <nut-cell>
      <ul>
        <li v-for="item in icons.glyphs" :key="item.font_class">
          <nut-icon :name="item.font_class"></nut-icon>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import icons from '@/styles/font/iconfont.json';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('icon');
export default createDemo({
  props: {},
  setup() {
    return { icons };
  }
});
</script>

<style lang="scss" scoped>
.nut-cell {
  > .nutui-iconfont {
    margin-right: 10px;
  }
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      height: 40px;
    }
    .nutui-iconfont {
      margin: 16px 0 16px;
    }
  }
}
</style>
