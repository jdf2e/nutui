<template>
  <div class="theme-setting">
    {{ name }}
    <button @click="downloadScssVariables">点击下载主题变量</button>
    <ul>
      <li :key="item.key" v-for="item in formItems">
        <p
          ><b>{{ item.key }}</b
          >: {{ item.value }} （<del>{{ item.rawValue }}</del
          >）</p
        >
        <div>
          <n-color-picker
            v-if="['hex', 'rgb'].includes(item.inputType)"
            :show-alpha="item.inputType != 'hex'"
            :modes="['hex', 'rgb']"
            v-model:value="item.value"
          />
          <n-input v-else v-model:value="item.value" type="text" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useThemeEditor } from './helper';
import { NColorPicker, NInput } from 'naive-ui';

export default defineComponent({
  name: 'theme-setting',
  props: {
    name: String
  },
  components: {
    NColorPicker,
    NInput
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
    list-style: none;
    margin-bottom: 12px;
    &::before {
      display: none;
    }
    .color-picker {
      width: 300px;
      margin-left: 20px;
    }

    p {
      font-size: 14px;
      text-overflow: ellipsis;
    }
  }
}
</style>
