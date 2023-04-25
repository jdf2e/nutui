import { config, mount } from '@vue/test-utils';
import { vi } from 'vitest';
import Tabbar from '../index.vue';
import TabbarItem from '../../tabbaritem/index.vue';
import { nextTick, ref, h } from 'vue';
import { Home, Category, Find } from '@nutui/icons-vue';

// 模拟setup导入资源
vi.mock('vue-router', () => ({
  useRouter: vi.fn()
}));

test('should render tabbar when default', async () => {
  const wrapper = mount(() => {
    return (
      <Tabbar>
        <TabbarItem tab-title="首页" icon={h(Home)}></TabbarItem>
        <TabbarItem tab-title="分类" icon={h(Category)}></TabbarItem>
        <TabbarItem tab-title="发现" icon={h(Find)}></TabbarItem>
      </Tabbar>
    );
  });
  await nextTick();
  expect(wrapper.find('.nut-tabbar').exists()).toBe(true);
  expect(wrapper.find('.nut-tabbar-item').exists()).toBe(true);
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render custom img when using img prop', async () => {
  const wrapper = mount(() => {
    return (
      <Tabbar>
        <TabbarItem tab-title="首页">
          {{
            icon: (props: any) =>
              props.active ? (
                <img src="http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg" />
              ) : (
                <img src="http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg" />
              )
          }}
        </TabbarItem>
        <TabbarItem tab-title="分类">
          {{
            icon: (props: any) =>
              props.active ? (
                <img src="http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg" />
              ) : (
                <img src="http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg" />
              )
          }}
        </TabbarItem>
      </Tabbar>
    );
  });
  await nextTick();
  const tabbarItemIcon: any = wrapper.findAll('.nut-tabbar-item_icon-box_icon img');
  expect(tabbarItemIcon[0].element.src).toContain('9e557f2cb5c9dab6');
  expect(tabbarItemIcon[1].element.src).toContain('c98ad61124172e93');
});

test('should render custom color and bage when using prop', async () => {
  const wrapper = mount(() => {
    return (
      <Tabbar unactive-color="grey" active-color="blue">
        <TabbarItem tab-title="首页" icon={h(Home)} value={11}></TabbarItem>
        <TabbarItem tab-title="分类" icon={h(Category)}></TabbarItem>
        <TabbarItem tab-title="发现" icon={h(Find)}></TabbarItem>
      </Tabbar>
    );
  });
  await nextTick();
  const tabbarItem: any = wrapper.findAll('.nut-tabbar-item');
  expect(tabbarItem.length).toBe(3);
  expect(tabbarItem[0].element.style.color).toEqual('blue');
  expect(tabbarItem[1].element.style.color).toEqual('grey');
  expect(wrapper.find<HTMLElement>('.nut-badge').exists()).toBe(true);
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
  const wrapper = mount(() => {
    return (
      <Tabbar unactive-color="grey" active-color="blue">
        <TabbarItem tab-title="首页" icon={h(Home)} value="11"></TabbarItem>
        <TabbarItem tab-title="分类" icon={h(Category)}></TabbarItem>
        <TabbarItem tab-title="发现" icon={h(Find)}></TabbarItem>
      </Tabbar>
    );
  });
  const tabbarItem: any = wrapper.findAll('.nut-tabbar-item');

  expect(tabbarItem[0].element.style.color).toEqual('blue');

  await tabbarItem[1].trigger('click');
  expect(tabbarItem[1].element.style.color).toEqual('blue');
  await tabbarItem[2].trigger('click');
  expect(tabbarItem[2].element.style.color).toEqual('blue');
});

// jsdom: Not implemented: navigation
test('should show sure emitted when click', async () => {
  const tabSwitch = vi.fn();
  const wrapper = mount(() => {
    return (
      <Tabbar onTabSwitch={tabSwitch}>
        <TabbarItem tab-title="首页" icon={h(Home)}></TabbarItem>
        <TabbarItem tab-title="分类" icon={h(Category)}></TabbarItem>
        <TabbarItem tab-title="发现" icon={h(Find)}></TabbarItem>
      </Tabbar>
    );
  });
  const tabbarItem: any = wrapper.findAll('.nut-tabbar-item');
  await tabbarItem[1].trigger('click');
  await nextTick();
  expect(tabSwitch).toBeCalled();
});
