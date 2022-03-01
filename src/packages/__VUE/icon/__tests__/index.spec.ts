import { config, mount } from '@vue/test-utils';
import Icon from '../index.vue';

test('should render icon dongdong', async () => {
  const wrapper = mount(Icon, {
    props: {
      name: 'dongdong'
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});
test('should render icon image type', async () => {
  const wrapper = mount(Icon, {
    props: {
      name: 'https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png'
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render icon dongdong color', async () => {
  const wrapper = mount(Icon, {
    props: {
      name: 'dongdong',
      color: 'red'
    }
  });

  expect(wrapper.find<HTMLElement>('.nut-icon-dongdong').element.style.color).toEqual('red');
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render icon dongdong size', async () => {
  const wrapper = mount(Icon, {
    props: {
      name: 'dongdong',
      size: '24'
    }
  });

  expect(wrapper.find<HTMLElement>('.nut-icon-dongdong').element.style.fontSize).toEqual('24px');
  expect(wrapper.html()).toMatchSnapshot();
});
