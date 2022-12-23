<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>

    <nut-tabbar @tab-switch="tabSwitch">
      <nut-tabbar-item :tab-title="translate('title')">
        <template #icon>
          <Home></Home>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')">
        <template #icon>
          <Category></Category>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')">
        <template #icon>
          <Find></Find>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')">
        <template #icon>
          <Cart></Cart>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')">
        <template #icon>
          <My></My>
        </template>
      </nut-tabbar-item>
    </nut-tabbar>
    <h2>{{ translate('byName') }}</h2>

    <nut-tabbar v-model="activeName" @tab-switch="tabSwitch">
      <nut-tabbar-item v-for="(item, index) in List" :name="item.name" :tab-title="item.title" :icon="item.icon">
      </nut-tabbar-item>
    </nut-tabbar>

    <h2>{{ translate('customIcon') }}</h2>
    <nut-tabbar @tab-switch="tabSwitch">
      <nut-tabbar-item :tab-title="translate('title')">
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.unactive" alt="" />
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')">
        <template #icon="props"> <img :src="props.active ? icon.active : icon.unactive" alt="" /> </template
      ></nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')">
        <template #icon="props"> <img :src="props.active ? icon.active : icon.unactive" alt="" /> </template
      ></nut-tabbar-item>
    </nut-tabbar>

    <h2>{{ translate('customCheck') }}</h2>
    <nut-tabbar v-model="active">
      <nut-tabbar-item v-for="(item, index) in List" :tab-title="item.title" :icon="item.icon"> </nut-tabbar-item>
    </nut-tabbar>

    <h2>{{ translate('showBadge') }}</h2>
    <nut-tabbar>
      <nut-tabbar-item :tab-title="translate('title')" :value="11">
        <template #icon>
          <Home></Home>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" :dot="true">
        <template #icon>
          <Home></Home>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" :value="110">
        <template #icon>
          <Home></Home>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')">
        <template #icon>
          <Home></Home>
        </template>
      </nut-tabbar-item>
    </nut-tabbar>

    <h2>{{ translate('customColor') }}</h2>
    <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
      <nut-tabbar-item v-for="(item, index) in List" :tab-title="item.title" :icon="item.icon"> </nut-tabbar-item>
    </nut-tabbar>
    <h2>{{ translate('customQuantity') }}</h2>
    <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
      <nut-tabbar-item :tab-title="translate('title')" :value="11">
        <template #icon>
          <Home></Home>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" :dot="true">
        <template #icon>
          <Home></Home>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item :tab-title="translate('title')" :value="110">
        <template #icon>
          <Home></Home>
        </template>
      </nut-tabbar-item>
    </nut-tabbar>
    <h2>{{ translate('fixedBottom') }}</h2>
    <nut-tabbar bottom safe-area-inset-bottom placeholder>
      <nut-tabbar-item v-for="(item, index) in List" :tab-title="item.title" :icon="item.icon"> </nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>

<script lang="ts">
import { h, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('tabbar');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      byName: '通过名称匹配',
      customIcon: '自定义图标',
      customCheck: '自定义选中',
      showBadge: '徽标提示',
      customColor: '自定义颜色',
      customQuantity: '自定义数量',
      fixedBottom: '固定底部',
      title: '标签'
    },
    'en-US': {
      basic: 'Basic Usage',
      byName: 'Match by name',
      customIcon: 'Custom Icon',
      customCheck: 'Custom Check',
      showBadge: 'Show Badge',
      customColor: 'Custom Color',
      customQuantity: 'Custom Quantity',
      fixedBottom: 'Fixed Bottom',
      title: 'tab'
    }
  });
export default createDemo({
  components: { Home, Category, Find, Cart, My },
  props: {},
  setup() {
    initTranslate();
    const active = ref(2);
    const activeName = ref('category');
    function tabSwitch(item: Record<string, unknown>, index: number) {
      console.log(item, index);
    }
    const icon = {
      active: 'https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png',
      unactive:
        'https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png'
    };
    const List = [
      {
        title: '标签',
        icon: h(Home),
        name: 'home'
      },
      {
        title: '标签',
        icon: h(Category),
        name: 'category'
      },
      {
        title: '标签',
        icon: h(Find),
        name: 'find'
      },
      {
        title: '标签',
        icon: Cart,
        name: 'cart'
      },
      {
        title: '标签',
        icon: h(My),
        name: 'my'
      }
    ];
    return {
      active,
      icon,
      activeName,
      List,
      tabSwitch,
      translate
    };
  }
});
</script>
