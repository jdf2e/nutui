import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import NavBar from '../index.vue';

test('Navbar: slot content & left & right', () => {
  const wrapper = mount(NavBar, {
    slots: {
      content: () => 'Title',
      left: () => 'Left',
      right: () => 'Right'
    }
  });
  expect(wrapper.find('.nut-navbar__title').text()).toBe('Title');
  expect(wrapper.find('.nut-navbar__left').text()).toBe('Left');
  expect(wrapper.find('.nut-navbar__right').text()).toBe('Right');
});

test('Navbar: prop left-text & desc', () => {
  const wrapper = mount(NavBar, {
    props: {
      leftText: 'left',
      desc: 'desc'
    }
  });

  const label1 = wrapper.find('.nut-navbar__left .nut-navbar__text');
  expect(label1.text()).toBe('left');
  const label2 = wrapper.find('.nut-navbar__right .nut-navbar__text');
  expect(label2.text()).toBe('desc');
});

test('Navbar: should render placeholder element when using placeholder prop', async () => {
  const wrapper = mount(NavBar, {
    props: {
      fixed: true,
      placeholder: true
    }
  });
  expect(wrapper.find('.nut-navbar--placeholder').html()).toMatchSnapshot();
});

test('Navbar: emit click-left & click-right', () => {
  const wrapper = mount(NavBar, {
    props: {
      titleIcon: true,
      title: '123'
    }
  });

  wrapper.find('.nut-navbar__left').trigger('click');
  expect(wrapper.emitted('clickBack')).toBeTruthy();
  wrapper.find('.nut-navbar__right').trigger('click');
  expect(wrapper.emitted('clickRight')).toBeTruthy();
  wrapper.find('.nut-navbar__title .title').trigger('click');
  expect(wrapper.emitted('clickTitle')).toBeTruthy();
  wrapper.find('.nut-navbar__title .icon').trigger('click');
  expect(wrapper.emitted('clickIcon')).toBeTruthy();
});

test('Navbar: should change z-index when using z-index prop', async () => {
  const wrapper = mount(NavBar, {
    props: {
      zIndex: 100
    }
  });
  await nextTick();
  const navbar = wrapper.find('.nut-navbar');
  expect(navbar.attributes('style')).includes('z-index: 100');
});
