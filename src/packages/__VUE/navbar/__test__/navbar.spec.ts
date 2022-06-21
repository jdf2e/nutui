import { mount, config } from '@vue/test-utils';
import NavBar from '../index.vue';

import NutIcon from '../../icon/index.vue';

beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

test('should render left slot correctly', () => {
  const wrapper = mount(NavBar, {
    slots: {
      left: () => 'Custom Left'
    }
  });
  expect(wrapper.find('.nut-navbar__left').html()).toMatchSnapshot();
});

test('should render right slot correctly', () => {
  const wrapper = mount(NavBar, {
    slots: {
      right: () => 'Custom Right'
    }
  });

  expect(wrapper.find('.nut-navbar__right').html()).toMatchSnapshot();
});

test('should render title slot correctly', () => {
  const wrapper = mount(NavBar, {
    slots: {
      title: () => 'Custom Title'
    }
  });

  expect(wrapper.find('.nut-navbar__title').html()).toMatchSnapshot();
});

test('should left-text', () => {
  const wrapper = mount(NavBar, {
    props: {
      leftText: 'left'
    }
  });

  const label = wrapper.find('.nut-navbar__left .nut-navbar__text');
  expect(label.text()).toBe('left');
});

test('should desc', () => {
  const wrapper = mount(NavBar, {
    props: {
      desc: 'desc'
    }
  });

  const label = wrapper.find('.nut-navbar__right .nut-navbar__text');
  expect(label.text()).toBe('desc');
});

test('should render placeholder element when using placeholder prop', async () => {
  const wrapper = mount(NavBar, {
    props: {
      fixed: true,
      placeholder: true
    }
  });
  expect(wrapper.find('.nut-navbar--placeholder').html()).toMatchSnapshot();
});

test('should emit click-left event when clicking left text', () => {
  const wrapper = mount(NavBar, {
    props: {
      leftText: 'left'
    }
  });

  wrapper.find('.nut-navbar__left').trigger('click');
  expect(wrapper.emitted('on-click-back')).toBeTruthy();
});

test('should emit click-right event when clicking right text', () => {
  const wrapper = mount(NavBar, {
    props: {
      desc: 'right'
    }
  });
  wrapper.find('.nut-navbar__right').trigger('click');
  expect(wrapper.emitted('on-click-right')).toBeTruthy();
});

test('should change z-index when using z-index prop', () => {
  const wrapper = mount(NavBar, {
    props: {
      zIndex: 100
    }
  });
  expect((wrapper.element as HTMLElement).style.zIndex).toEqual('100');
});
