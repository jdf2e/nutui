<template>
  <div class="theme-setting">
    {{ name }}
    <ul>
      <li :key="index" v-for="(item, index) in state.styleList">
        <p>{{ item.name }}</p>
        <div class="color-picker">
          <n-color-picker v-if="item.isColor" :modes="['rgb', 'hex']" v-model="item.value" />
          <n-input v-else v-model:value="item.value" type="text" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, watch } from 'vue';
import { varcss } from './mockdata';
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
    let state = reactive({
      styleList: [
        {
          name: '$primary-color',
          value: '#2c68ff',
          isColor: true
        },
        {
          name: '$primary-color',
          value: '#2c68ff',
          isColor: true
        }
      ]
    });

    const findStyle = (componentName: string) => {
      // https://raw.githubusercontent.com/jdf2e/nutui/next/src/packages/styles/variables.scss
      // var pattern = /\$button.*;/g;
      var p = new RegExp(`\\$${componentName}.*;`, 'g');
      let parray: any[] = varcss.match(p) || [];
      // 需要包含换行
      let commponetns = parray.map((item) => {
        let cArray = item.split(':');
        let name = cArray[0],
          value: string = cArray[1].replace(' !default;', '').trim();
        return {
          name,
          value,
          isColor: value.includes('#') || value.includes('rgb')
        };
      });
      console.log(commponetns);
      state.styleList = commponetns;
    };

    watch(
      () => props.name,
      (value: any) => {
        findStyle(value);
      }
    );

    return { state };
  }
});
</script>

<style lang="scss" scoped>
.theme-setting {
  li {
    list-style: none;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
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
