<template>
  <div class="theme-setting">
    <n-space>
      <n-button dashed type="info">主题定制：{{ name }} 组件</n-button>
      <n-button type="info" @click="downloadScssVariables">下载主题变量</n-button>
    </n-space>
    <n-divider />
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
import { NColorPicker, NInput, NButton, NSpace, NDivider } from 'naive-ui';

export default defineComponent({
  name: 'theme-setting',
  props: {
    name: String
  },
  components: {
    NColorPicker,
    NInput,
    NButton,
    NSpace,
    NDivider
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
    margin-left: 0px;
    padding-left: 0px;
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
