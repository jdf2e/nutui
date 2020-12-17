<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-menu>
      <nut-menu-item
        :menuList="menuList"
        :title="title1"
        @on-checked="getChecked"
      ></nut-menu-item>
      <nut-menu-item
        :menuList="menuList2"
        title="最新商品"
        multiLine="2"
      ></nut-menu-item>
      <nut-menu-item
        :menuList="menuList2"
        title="筛选"
        disabled
      ></nut-menu-item>
    </nut-menu>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('menu');
export default createDemo({
  props: {},
  setup() {
    const title1 = ref('标题1');
    const resData = reactive({
      menuList: [
        {
          value: '标签一'
        },
        {
          value: '标签二标签二标签二标签二'
        },
        {
          value: '标签三'
        }
      ],
      menuList2: [
        {
          value: '标签1'
        },
        {
          value: '标签2'
        },
        {
          value: '标签3'
        }
      ]
    });

    const getChecked = (info: any) => {
      console.log(11, info.value);
    };
    // function changeList() {
    //   resData.editList.push({
    //     title: '标签' + resData.editList.length
    //   });
    // }
    // function switchTab(activeInddex: number, event: MouseEvent) {
    //   console.log(activeInddex, event);
    // }
    return {
      ...toRefs(resData),
      title1
      // changeList,
      // switchTab
    };
  }
});
</script>

<style lang="scss" scoped>
.nut-menu {
}
</style>
