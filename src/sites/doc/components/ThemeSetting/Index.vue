<template>
  <div class="theme-setting">
    {{ name }}
    <button @click="downloadScssVariables">点击下载主题变量</button>
    <ul>
      <li :key="item.key" v-for="item in formItems">
        <p
          ><b>{{ item.key }}</b
          >: {{ item.rawValue }}</p
        >
        <input :type="item.inputType" v-model="item.value" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useThemeEditor } from './helper';

export default defineComponent({
  name: 'theme-setting',
  props: {
    name: String
  },
  setup(props) {
    // 获取样式文件，正则匹配
    const { formItems, downloadScssVariables } = useThemeEditor();

    watch(
      () => formItems.value,
      (val) => {
        console.log(JSON.parse(JSON.stringify(val)));
      }
    );

    return { formItems, downloadScssVariables };
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
