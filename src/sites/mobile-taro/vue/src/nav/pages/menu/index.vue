<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-menu>
      <nut-menu-item title="全部商品" :options="options1"></nut-menu-item>
    </nut-menu>
    <h2>两列标题</h2>
    <nut-menu>
      <nut-menu-item title="全部商品" :options="options1"></nut-menu-item>
      <nut-menu-item title="默认排序" :options="options2"></nut-menu-item>
    </nut-menu>
    <h2>获取选择的列表对象</h2>
    <nut-menu @choose="handleChoose">
      <nut-menu-item title="全部商品" :options="options1"></nut-menu-item>
    </nut-menu>
    <h2>一行两列列表对象</h2>
    <nut-menu col="2">
      <nut-menu-item title="全部商品" :options="options1"></nut-menu-item>
    </nut-menu>
    <h2>禁用菜单</h2>
    <nut-menu>
      <nut-menu-item
        title="全部商品"
        disabled="true"
        :options="options1"
      ></nut-menu-item>
    </nut-menu>
    <h2>自定义选项的选中态图标颜色</h2>
    <nut-menu active-color="#0f0">
      <nut-menu-item title="全部商品" :options="options1"></nut-menu-item>
    </nut-menu>
    <h2>自定义菜单内容</h2>
    <nut-menu>
      <nut-menu-item title="筛选" ref="item">
        <div
          :style="{
            display: 'flex',
            'justify-content': 'space-between',
            'align-items': 'center'
          }"
        >
          <div :style="{ 'font-size': '12px' }">我是自定义内容</div>
          <nut-button @click="handleClick">关闭</nut-button>
        </div>
      </nut-menu-item>
    </nut-menu>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs } from 'vue';
export default {
  props: {},
  setup() {
    const options1 = [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 }
    ];

    const options2 = [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' }
    ];

    const item = ref<HTMLElement>();

    const handleChoose = (val: string, index: string | number) => {
      console.log(val, index);
    };

    const handleClick = () => {
      (item.value as any).toggle();
    };

    return {
      options1,
      options2,
      item,
      handleChoose,
      handleClick
    };
  }
};
</script>

<style lang="scss" scoped></style>
