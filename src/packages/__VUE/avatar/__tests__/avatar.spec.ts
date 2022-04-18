import { config, mount } from '@vue/test-utils';
import Avatar from '../index.vue';
import NutIcon from '../../icon/index.vue';

beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

test('size props', async () => {
  const wrapper = mount(Avatar, {
    props: {
      size: 'small'
    }
  });
  const avatar: any = wrapper.find('.nut-avatar');
  expect(avatar.classes()).toContain('nut-avatar-small');
  await wrapper.setProps({ size: 'large' });
  expect(avatar.classes()).toContain('nut-avatar-large');
  await wrapper.setProps({ size: '30' });
  expect(avatar.element.style.width).toBe('30px');
});

test('shape props', () => {
  const wrapper = mount(Avatar, {
    props: {
      shape: 'square'
    }
  });
  const avatar: any = wrapper.find('.nut-avatar');
  expect(avatar.classes()).toContain('nut-avatar-square');
});

test('bgColor props', () => {
  const wrapper = mount(Avatar, {
    props: {
      bgColor: '#000000'
    }
  });
  const avatar: any = wrapper.find('.nut-avatar');
  expect(avatar.element.style.backgroundColor).toBe('rgb(0, 0, 0)');
});

test('color props', async () => {
  const wrapper = mount(Avatar, {
    props: {
      color: 'rgb(153, 153, 153)'
    }
  });
  const avatar: any = wrapper.find('.nut-avatar');
  expect(avatar.element.style.color).toBe('rgb(153, 153, 153)');
});

test('icon props', () => {
  const wrapper = mount(Avatar, {
    props: {
      icon: 'my'
    }
  });
  const icon: any = wrapper.find('.nut-icon');
  expect(icon.classes()).toContain('nut-icon-my');
});

test('url props', () => {
  const wrapper = mount(Avatar, {
    props: {
      url: 'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png'
    }
  });
  const img: any = wrapper.find('img');
  expect(img.attributes().src).toBe(
    'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png'
  );
});

test('alt props', () => {
  const wrapper = mount(Avatar, {
    props: {
      url: 'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png',
      alt: '我是alt'
    }
  });
  const img: any = wrapper.find('img');
  expect(img.attributes().alt).toBe('我是alt');
});

// 点击事件
test('should emit active-avatarror event', () => {
  const wrapper = mount(Avatar);
  const avatar: any = wrapper.find('.nut-avatar');
  avatar.trigger('click');
  expect(wrapper.emitted('click')).toHaveLength(1);
});

// test('should emit onError event', () => {
//   const wrapper = mount(Avatar, {
//     props: {
//       url: 'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/413809774888998',
//     }
//   });
//   const avatar: any = wrapper.find('.nut-avatar');
//   avatar.trigger('click');
//   expect(wrapper.emitted('error')).toHaveLength(1);
// });
