import { config, mount } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import ImagePage from '../index.vue';
import { Loading, CircleClose, Image, ImageError } from '@nutui/icons-vue';
beforeAll(() => {
  config.global.components = {
    Loading,
    CircleClose,
    Image,
    ImageError
  };
});

afterAll(() => {
  config.global.components = {};
});

test('ImagePage render', async () => {
  const wrapper = mount(ImagePage, {
    props: {
      src: '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg',
      width: '100',
      height: '100',
      showLoading: false
    }
  });
  await wrapper.find('img').trigger('load');
  expect(wrapper.html()).toMatchSnapshot();
});

test('ImagePage load error', async () => {
  const wrapper = mount(ImagePage, {
    props: {
      src: 'https://x',
      width: '100',
      height: '100',
      showError: true
    }
  });
  await wrapper.find('img').trigger('error');
  expect(wrapper.find('.nut-img-error').exists()).toBeTruthy();
  expect(wrapper.html()).toMatchSnapshot();
});

test('ImagePage loading', async () => {
  const wrapper = mount(ImagePage, {
    props: {
      src: '',
      width: '100',
      height: '100',
      showLoading: true
    }
  });
  // await wrapper.find('img').trigger('load');
  expect(wrapper.find('.nut-img-loading').exists()).toBeTruthy();
  expect(wrapper.html()).toMatchSnapshot();
});

test('ImagePage render Round', async () => {
  const wrapper = mount(ImagePage, {
    props: {
      src: '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg',
      width: '100',
      height: '100',
      round: true
    }
  });
  await wrapper.find('img').trigger('load');
  expect(wrapper.find('.nut-image-round').exists()).toBeTruthy();
  expect(wrapper.html()).toMatchSnapshot();
});
