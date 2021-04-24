<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-icon name="dongdong"></nut-icon>
      <nut-icon name="JD"></nut-icon>
    </nut-cell>
    <h2>图片链接</h2>
    <nut-cell>
      <nut-icon
        size="40"
        name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      ></nut-icon>
    </nut-cell>
    <h2>图标颜色</h2>
    <nut-cell>
      <nut-icon name="dongdong" color="#fa2c19"></nut-icon>
      <nut-icon name="dongdong" color="#64b578"></nut-icon>
      <nut-icon name="JD" color="#fa2c19"></nut-icon>
    </nut-cell>

    <h2>图标大小</h2>
    <nut-cell>
      <nut-icon name="dongdong"></nut-icon>
      <nut-icon name="dongdong" size="24"></nut-icon>
      <nut-icon name="dongdong" size="16"></nut-icon>
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
