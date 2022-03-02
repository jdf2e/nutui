import { mount, config } from '@vue/test-utils';
import SideNavBar from '../index.vue';
import SideNavBarItem from '../../sidenavbaritem/index.vue';
import SubSideNavBar from '../../subsidenavbar/index.vue';
import { nextTick } from 'vue';
import NutIcon from '../../icon/index.vue';

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

const template = `
<nut-sidenavbar offset="30">
  <nut-subsidenavbar title="智能城市AI" ikey="6">
    <nut-subsidenavbar title="人体识别1" ikey="9" :open="false">
      <nut-sidenavbaritem ikey="10" title="人体检测1"></nut-sidenavbaritem>
      <nut-sidenavbaritem ikey="11" title="细粒度人像分割1"></nut-sidenavbaritem>
    </nut-subsidenavbar>
    <nut-subsidenavbar title="人体识别2" ikey="12">
      <nut-sidenavbaritem ikey="13" title="人体检测2"></nut-sidenavbaritem>
      <nut-sidenavbaritem ikey="14" title="细粒度人像分割2"></nut-sidenavbaritem>
    </nut-subsidenavbar>
  </nut-subsidenavbar>
</nut-sidenavbar>
`;

test('render offset props', async () => {
  const wrapper = mount({
    components: {
      'nut-sidenavbar': SideNavBar,
      'nut-sidenavbaritem': SideNavBarItem,
      'nut-subsidenavbar': SubSideNavBar
    },
    template,
    setup: () => {}
  });

  await nextTick();

  const subSideNavBar = wrapper.findAll('.nut-subsidenavbar__title');

  expect((subSideNavBar[0].element as HTMLElement).style.paddingLeft).toEqual('30px');
  expect((subSideNavBar[1].element as HTMLElement).style.paddingLeft).toEqual('60px');
  expect((subSideNavBar[2].element as HTMLElement).style.paddingLeft).toEqual('60px');
});

test('render subsidenavbar open props', async () => {
  const wrapper = mount({
    components: {
      'nut-sidenavbar': SideNavBar,
      'nut-sidenavbaritem': SideNavBarItem,
      'nut-subsidenavbar': SubSideNavBar
    },
    template,
    setup: () => {}
  });

  await nextTick();

  const subSideNavBar = wrapper.findAll('.nut-subsidenavbar__list');

  expect((subSideNavBar[1].element as HTMLElement).style.height).toEqual('0px');
});

test('subsidenavbar trigger click', async () => {
  const wrapper = mount({
    components: {
      'nut-sidenavbar': SideNavBar,
      'nut-sidenavbaritem': SideNavBarItem,
      'nut-subsidenavbar': SubSideNavBar
    },
    template,
    setup: () => {}
  });

  await nextTick();

  const subSideNavBarTitle = wrapper.findAll('.nut-subsidenavbar__title');
  const subSideNavBarList = wrapper.findAll('.nut-subsidenavbar__list');

  await subSideNavBarTitle[0].trigger('click');
  await sleep(100);

  expect((subSideNavBarList[0].element as HTMLElement).style.height).toEqual('0px');
});
