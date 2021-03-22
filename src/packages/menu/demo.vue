<template>
  <div class="demo full menu-demo">
    <h2>基础用法</h2>
    <nut-menu>
      <nut-menu-item :menu-list="menuList" title="最新商品"></nut-menu-item>
      <nut-menu-item :menu-list="menuList" :title="title"></nut-menu-item>
    </nut-menu>

    <h2>多列展示</h2>
    <nut-menu>
      <nut-menu-item
        class="base-style"
        :menu-list="menuList2"
        title="单列展示"
        multi-style="1"
        max-height="200"
      ></nut-menu-item>
      <nut-menu-item
        :menu-list="menuList2"
        title="双列展示"
        multi-style="2"
      ></nut-menu-item>
      <nut-menu-item
        :menu-list="menuList2"
        title="三列展示"
        multi-style="3"
      ></nut-menu-item>
    </nut-menu>

    <h2>禁用操作</h2>
    <p class="tips"
      >`disabled` 属性可对菜单列表进行禁用操作。`autoClose`
      属性控制下拉菜单列表是否选择后自动收起，默认自动收起。</p
    >
    <nut-menu>
      <nut-menu-item :menu-list="menuList" title="最新商品"></nut-menu-item>
      <nut-menu-item
        :menu-list="menuList"
        title="禁止自动收起"
        :auto-close="false"
      ></nut-menu-item>
      <nut-menu-item
        :menu-list="menuList2"
        title="筛选"
        disabled
      ></nut-menu-item>
    </nut-menu>

    <h2>禁止蒙层展示</h2>
    <p class="tips">属性`hasMask`控制是否有蒙层，默认为 `true`展示蒙层 </p>
    <nut-menu :has-mask="false">
      <nut-menu-item :menu-list="menuList" title="最新商品"></nut-menu-item>
      <nut-menu-item :menu-list="menuList" :title="title"></nut-menu-item>
    </nut-menu>

    <h2>点击事件</h2>
    <p class="tips">标题点击事件`menu-click`，菜单列表选择点击事件`change`</p>
    <nut-menu>
      <nut-menu-item
        :menu-list="menuList"
        title="选择菜单列表项"
        multi-style="2"
        @menu-click="alertText($event, 'title')"
        @change="getChecked"
      ></nut-menu-item>
      <nut-menu-item
        :menu-list="menuList2"
        title="选中标题触发"
        disabled
        @menu-click="alertText"
      ></nut-menu-item>
    </nut-menu>

    <h2>自定义内容</h2>
    <nut-menu>
      <nut-menu-item title="自定义选项">
        <div class="user-style">
          <nut-cell title="我是标题" desc="描述文字"> </nut-cell>
          <nut-cell>
            <nut-button size="large" type="primary">确认提交</nut-button>
          </nut-cell>
        </div>
      </nut-menu-item>
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
    // const title1 = ref('热门推荐');
    const resData = reactive({
      title: '热门推荐',
      menuList: [
        { value: '手机' },
        { value: '电脑' },
        { value: '家用电器' },
        { value: '日用百货' }
      ],
      menuList2: [
        { value: '热门推荐', id: 111 },
        { value: '手机数码', id: 112 },
        { value: '电脑办公', id: 113 },
        { value: '美妆护肤', id: 114 },
        { value: '个护清洁', id: 115 },
        { value: '汽车生活', id: 116 },
        { value: '京东超市', id: 117 },
        { value: '母婴童装', id: 118 }
      ]
    });

    const getChecked = (info: any, name: string) => {
      alert('选择菜单选项：' + name);
      console.log(11, info, name);
    };
    const alertText = (info, type) => {
      console.log(info, type);
      if (type == 'title') {
        alert('菜单标题点击：' + info);
      } else {
        alert('禁用操作');
      }
    };

    return {
      ...toRefs(resData),
      getChecked,
      alertText
    };
  }
});
</script>

<style lang="scss" scoped>
.tips {
  font-size: 12px;
  color: #909ca4;
  margin-top: -10px;
  margin-bottom: 10px;
  padding: 0 22px;
}
.base-style.nut-menu-item {
  .nut-menu-panel {
    max-height: 300px !important;
    overflow: auto;
  }
}
.user-style {
  padding: 20px;
}
#app .demo.menu-demo {
  padding-bottom: 200px;
}
</style>
