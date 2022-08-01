import { config, DOMWrapper, mount } from '@vue/test-utils';
import Tabbar from '../index.vue';
import TabbarItem from '../../tabbaritem/index.vue';
import NutIcon from '../../icon/index.vue';
import { nextTick } from 'vue';

// 模拟setup导入资源
jest.mock('vue-router', () => ({
  useRouter: jest.fn()
}));
// 所有的测试用例之前执行一次
beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});
// 所有的测试用例之后执行一次
afterAll(() => {
  config.global.components = {};
});
// 测试用例
test('should render tabbar when default', async () => {
  const wrapper = mount({
    components: {
      Tabbar: Tabbar,
      TabbarItem: TabbarItem
    },
    template: `
    <Tabbar>
      <TabbarItem tab-title="首页" icon="home"></TabbarItem>
      <TabbarItem tab-title="分类" icon="category"></TabbarItem>
      <TabbarItem tab-title="发现" icon="find"></TabbarItem>
    </Tabbar>
    `,
    setup() {}
  });
  await nextTick();
  // 断言 期望值
  expect(wrapper.find('.nut-tabbar').exists()).toBe(true);
  expect(wrapper.find('.nut-tabbar-item').exists()).toBe(true);
  expect(wrapper.find('.nut-tabbar-item_icon-box_icon').exists()).toBe(true);
});

test('should render custom img when using img prop', async () => {
  const wrapper = mount({
    components: {
      Tabbar: Tabbar,
      TabbarItem: TabbarItem
    },
    template: `
    <Tabbar>
      <TabbarItem
        tab-title="首页"
        img="http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg"
        activeImg="http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg"
      ></TabbarItem>
      <TabbarItem
        tab-title="分类"
        img="http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg"
        activeImg="http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg"
      ></TabbarItem>
    </Tabbar>
    `
  });
  await nextTick();
  const tabbarItemIcon: any = wrapper.findAll('.nut-tabbar-item_icon-box_icon');
  expect(tabbarItemIcon[0].element.style.backgroundImage).toContain('c98ad61124172e93');
  expect(tabbarItemIcon[1].element.style.backgroundImage).toContain('c9b3421fe18614e2');
});

test('should render custom check and icon size when using visible', async () => {
  const wrapper = mount({
    components: {
      Tabbar: Tabbar,
      TabbarItem: TabbarItem
    },
    template: `
    <Tabbar visible="1" active-color="blue"  size="18px">
      <TabbarItem tab-title="首页" icon="home"></TabbarItem>
      <TabbarItem tab-title="分类" icon="category"></TabbarItem>
    </Tabbar>
    `
  });
  await nextTick();
  expect(wrapper.find<HTMLElement>('.nut-icon').element.style.fontSize).toEqual('18px');
});

test('should render custom color and bage when using prop', async () => {
  const wrapper = mount({
    components: {
      Tabbar: Tabbar,
      TabbarItem: TabbarItem
    },
    template: `
    <Tabbar unactive-color="grey" active-color="blue">
      <TabbarItem tab-title="首页" icon="home" num="11"></TabbarItem>
      <TabbarItem tab-title="分类" icon="category"></TabbarItem>
      <TabbarItem tab-title="发现" icon="find"></TabbarItem>

    </Tabbar>
    `
  });
  await nextTick();
  const tabbarItem: any = wrapper.findAll('.nut-tabbar-item');
  expect(tabbarItem.length).toBe(3);
  expect(tabbarItem[0].element.style.color).toEqual('blue');
  expect(tabbarItem[1].element.style.color).toEqual('grey');
  expect(wrapper.find<HTMLElement>('.nut-tabbar-item_icon-box_tips').exists()).toBe(true);
});

test('should render fixed element when using bottom prop', async () => {
  const wrapper = mount(Tabbar, {
    props: {
      bottom: true,
      safeAreaInsetBottom: true
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});
test('should match active tabbar by clcik', async () => {
  const wrapper = mount({
    components: {
      Tabbar: Tabbar,
      TabbarItem: TabbarItem
    },
    template: `
    <Tabbar unactive-color="grey" active-color="blue">
      <TabbarItem tab-title="首页" icon="home" num="11"></TabbarItem>
      <TabbarItem tab-title="分类" icon="category"></TabbarItem>
      <TabbarItem tab-title="发现" icon="find"></TabbarItem>
    </Tabbar>
    `
  });
  const tabbarItem: any = wrapper.findAll('.nut-tabbar-item');

  expect(tabbarItem[0].element.style.color).toEqual('blue');

  await tabbarItem[1].trigger('click');
  expect(tabbarItem[1].element.style.color).toEqual('blue');
  await tabbarItem[2].trigger('click');
  expect(tabbarItem[2].element.style.color).toEqual('blue');
});

test('should show sure emitted when click', async () => {
  const wrapper = mount({
    components: {
      Tabbar: Tabbar,
      TabbarItem: TabbarItem
    },
    template: `
    <Tabbar @tab-switch="tabSwitch">
      <TabbarItem tab-title="首页" icon="home"  to='/home'></TabbarItem>
      <TabbarItem tab-title="分类" icon="category"  to='/find'></TabbarItem>
      <TabbarItem tab-title="发现" icon="find"></TabbarItem>
    </Tabbar>
    `,
    data: () => {
      return {
        val: -1,
        data: [] as any
      };
    },
    methods: {
      tabSwitch(item: any, index: number) {
        (this as any).val = index;
        (this as any).data = item;
      }
    }
  });
  const tabbarItem: any = wrapper.findAll('.nut-tabbar-item');
  await tabbarItem[1].trigger('click');
  await nextTick();
  expect(wrapper.vm.val).toBe(1);
  expect(wrapper.vm.data.tabTitle).toBe('分类');
});
