import { mount } from '@vue/test-utils';
import Circleprogress from '../index.vue';

test('should render component  when using require prop', async () => {
  const wrapper = mount(Circleprogress, {
    props: {
      progress: 30
    }
  });
  //不能生成快照，因其具有随机id
  // expect(wrapper.html()).toMatchSnapshot();
});

test('should change stoke when use width props', async () => {
  const wrapper = mount(Circleprogress, {
    props: {
      progress: 40,
      strokeWidth: 10,
      radius: 60
    }
  });
  let element = wrapper.element as HTMLElement;
  expect(element.style.width).toEqual('120px');
  expect(element.style.height).toEqual('120px');
});
test('should change color when use color props', async () => {
  const wrapper = mount(Circleprogress, {
    props: {
      progress: 40,
      color: 'red'
    }
  });
  let path = wrapper.findAll('path');
  expect(path[1].html()).toContain('red');
});
test('渐变色', async () => {
  const wrapper = mount(Circleprogress, {
    props: {
      progress: 40,
      clockwise: false,
      color: {
        '0%': '#FF5E5E',
        '100%': '#FFA062'
      }
    }
  });
  expect(wrapper.html()).toContain('stop');
});
