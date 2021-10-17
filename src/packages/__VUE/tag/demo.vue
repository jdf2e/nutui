<template>
  <div class="demo">
    <nut-cell-group title="基础用法">
      <nut-cell title="primary 类型">
        <template v-slot:link>
          <nut-tag type="primary">标签</nut-tag>
        </template>
      </nut-cell>
      <nut-cell title="success 类型">
        <template v-slot:link>
          <nut-tag type="success">标签</nut-tag>
        </template>
      </nut-cell>
      <nut-cell title="danger 类型">
        <template v-slot:link>
          <nut-tag type="danger">标签</nut-tag>
        </template>
      </nut-cell>
      <nut-cell title="warning 类型">
        <template v-slot:link>
          <nut-tag type="warning">标签</nut-tag>
        </template>
      </nut-cell>
    </nut-cell-group>

    <nut-cell-group title="样式风格">
      <nut-cell title="空心样式">
        <template v-slot:link>
          <nut-tag plain>标签</nut-tag>
        </template>
      </nut-cell>
      <nut-cell title="圆角样式">
        <template v-slot:link>
          <nut-tag round type="primary">标签</nut-tag>
        </template>
      </nut-cell>
      <nut-cell title="标记样式">
        <template v-slot:link>
          <nut-tag mark type="primary">标签</nut-tag>
        </template>
      </nut-cell>
      <nut-cell title="可关闭标签">
        <template v-slot:link>
          <nut-tag v-if="show" closeable @close="close" type="primary">标签</nut-tag>
        </template>
      </nut-cell>
    </nut-cell-group>

    <nut-cell-group title="自定义">
      <nut-cell title="背景颜色">
        <template v-slot:link>
          <nut-tag color="#FA685D">标签</nut-tag>
        </template>
      </nut-cell>
      <nut-cell title="文字颜色">
        <template v-slot:link>
          <nut-tag color="#E9E9E9" textColor="#999999">标签</nut-tag>
        </template>
      </nut-cell>
      <nut-cell title="空心颜色">
        <template v-slot:link>
          <nut-tag color="#FA2400" plain>标签</nut-tag>
        </template>
      </nut-cell>
    </nut-cell-group>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('tag');

export default createDemo({
  setup() {
    const show = ref(true);
    const close = () => {
      show.value = false;
    };

    return {
      close,
      show
    };
  }
});
</script>
