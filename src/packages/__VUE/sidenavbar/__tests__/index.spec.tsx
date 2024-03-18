import { mount } from '@vue/test-utils';
import { SideNavbar, SideNavbarItem, SubSideNavbar } from '@nutui/nutui';

beforeAll(() => {
  MutationObserver.prototype.observe = vi.fn();
});

const template = (
  <>
    <SideNavbar offset="30">
      <SubSideNavbar title="智能城市AI">
        <SubSideNavbar title="人体识别1" open={false}>
          <SideNavbarItem title="人体检测1"></SideNavbarItem>
          <SideNavbarItem title="细粒度人像分割1"></SideNavbarItem>
        </SubSideNavbar>
        <SubSideNavbar title="人体识别2">
          <SideNavbarItem title="人体检测2"></SideNavbarItem>
          <SideNavbarItem title="细粒度人像分割2"></SideNavbarItem>
        </SubSideNavbar>
      </SubSideNavbar>
    </SideNavbar>
  </>
);

test('SideNavbar: offset', async () => {
  const wrapper = mount(() => {
    return template;
  });

  const items = wrapper.findAll('.nut-sub-side-navbar__title');
  expect(items[0].attributes('style')).toContain('padding-left: 30px');
  expect(items[1].attributes('style')).toContain('padding-left: 60px');
  expect(items[2].attributes('style')).toContain('padding-left: 60px');
});

test('SideNavbar: click', async () => {
  const wrapper = mount(() => {
    return template;
  });

  const items = wrapper.findAll('.nut-sub-side-navbar__title');
  const list = wrapper.findAll('.nut-sub-side-navbar__list');

  await items[0].trigger('click');
  expect(list[0].attributes('style')).toContain('display: none');
});
