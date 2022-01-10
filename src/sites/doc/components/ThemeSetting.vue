<template>
  <div class="theme-setting">
    {{ name }}
    <ul>
      <li :key="index" v-for="(item, index) in styleList">
        <p>{{ item.name }}</p>
        <div class="color-picker">
          <span>{{ item.value }}</span>
          <input type="color" v-model="item.value" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'theme-setting',
  props: {
    name: String
  },
  setup(props) {
    // 获取样式文件，正则匹配

    // https://raw.githubusercontent.com/jdf2e/nutui/next/src/packages/styles/variables.scss
    var pattern = /\$button.*;/;
    // 需要包含换行
    console.log(pattern.test('str'));

    const styleList = reactive([
      {
        name: '$primary-color',
        value: '#2c68ff'
      },
      {
        name: '$primary-color',
        value: '#2c68ff'
      }
    ]);

    return { styleList };
  }
});
</script>

<style lang="scss" scoped>
.theme-setting {
  li {
    width: 500px;
    list-style: none;
    margin-bottom: 12px;
    &::before {
      display: none;
    }
    .color-picker {
      display: flex;
      align-items: center;
    }
    p {
      font-size: 14px;
      text-overflow: ellipsis;
      margin-bottom: 12px;
    }
    input {
      padding: 0;
      margin: 0;
      width: 100%;
      background: none;
      border: 1px solid #ccc;
      border-radius: 2px;
      height: 34px;
    }
  }
}
</style>
