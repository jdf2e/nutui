<template>
  <div class="demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>按需使用</h2>
    <nut-cell>
      <Add color="red" />
    </nut-cell>
    <h2>基础用法</h2>
    <nut-cell>
      <IconFont name="dongdong"></IconFont>
      <IconFont name="JD"></IconFont>
    </nut-cell>
    <h2>图片链接</h2>
    <nut-cell>
      <IconFont
        size="40"
        name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      >
      </IconFont>
    </nut-cell>
    <h2>图标颜色</h2>
    <nut-cell>
      <IconFont name="dongdong" color="#fa2c19"></IconFont>
      <IconFont name="dongdong" color="#64b578"></IconFont>
      <IconFont name="JD" color="#fa2c19"></IconFont>
    </nut-cell>

    <h2>图标大小</h2>
    <nut-cell>
      <IconFont name="dongdong"></IconFont>
      <IconFont name="dongdong" size="24"></IconFont>
      <IconFont name="dongdong" size="26"></IconFont>
    </nut-cell>

    <nut-cell-group v-for="item in icons.data" :title="item.name" :key="item">
      <nut-cell>
        <ul>
          <li v-for="item in item.icons" :key="item">
            <IconFont :name="item"></IconFont>
            <span>{{ item }}</span>
          </li>
        </ul>
      </nut-cell>
    </nut-cell-group>

    <nut-cell-group v-for="item in icons.style" :title="item.name" :key="item">
      <nut-cell>
        <ul class="icon-ul">
          <li v-for="it in item.icons" :key="it" class="icon-li">
            <IconFont
              :name="it.name"
              :class="`nut-icon-${it['animation-name']} nut-icon-${it['animation-time']}`"
            ></IconFont>
            <span>{{ it['animation-name'] }}</span>
          </li>
        </ul>
      </nut-cell>
    </nut-cell-group>
  </div>
</template>

<script lang="ts">
import { Add, IconFontConfig, IconFont } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
export default {
  props: {},
  components: { IconFont, Add, Header },
  setup() {
    const env = Taro.getEnv();

    return { icons: IconFontConfig, env };
  }
};
</script>

<style lang="scss">
.nut-cell {
  > .nutui-iconfont {
    margin-right: 10px;
  }
  .icon-ul,
  .h5-ul,
  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    .icon-li,
    .h5-li,
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
}
</style>
