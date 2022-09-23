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
      >
      </nut-icon>
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
      <nut-icon name="dongdong" size="26"></nut-icon>
    </nut-cell>

    <nut-cell-group v-for="item in icons.data" :title="item.name" :key="item">
      <nut-cell>
        <ul>
          <li v-for="item in item.icons" :key="item">
            <nut-icon :name="item"></nut-icon>
            <span>{{ item }}</span>
          </li>
        </ul>
      </nut-cell>
    </nut-cell-group>

    <nut-cell-group v-for="item in icons.style" :title="item.name" :key="item">
      <nut-cell>
        <ul>
          <li v-for="it in item.icons" :key="it">
            <nut-icon
              :name="it.name"
              :class="`nut-icon-${it['animation-name']} nut-icon-${it['animation-time']}`"
            ></nut-icon>
            <span>{{ it['animation-name'] }}</span>
          </li>
        </ul>
      </nut-cell>
    </nut-cell-group>
  </div>
</template>

<script lang="ts">
import icons from './../../../../../../../packages/styles/font/config.json';
export default {
  props: {},
  setup() {
    return { icons };
  }
};
</script>

<style lang="scss">
.nut-cell {
  > .nutui-iconfont {
    margin-right: 10px;
  }
}
ul {
  display: flex;
  flex-wrap: wrap;
  li {
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      height: 40px;
      font-size: 12px;
      text-align: center;
    }
    .nutui-iconfont {
      margin: 16px 0 16px;
    }
  }
}
</style>
