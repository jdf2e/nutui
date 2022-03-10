import { mount } from '@vue/test-utils';
import Video from '../index.vue';

describe('Video', () => {
  test('base Video', () => {
    const wrapper = mount(Video);
    const rate = wrapper.find('.nut-video');
    expect(rate.exists()).toBe(true);
  });
  test('should be shown when passing image and description', () => {
    const wrapper = mount(Video, {
      props: {
        source: {
          src: 'xxx.mp4',
          type: 'video/mp4'
        },
        options: {
          controls: true
        }
      }
    });
    expect(wrapper.html()).toContain('src');
    expect(wrapper.html()).toContain('type');
    expect(wrapper.html()).toContain('controls');
  });
  test('should be shown when passing image and description', () => {
    const wrapper = mount(Video, {
      props: {
        options: {
          autoplay: true,
          muted: true,
          loop: true
        }
      }
    });
    expect(wrapper.html()).toContain('autoplay');
    expect(wrapper.html()).toContain('muted');
    expect(wrapper.html()).toContain('loop');
  });
  test('should be shown when passing image and description', () => {
    const wrapper = mount(Video, {
      props: {
        options: {
          poster: 'xxx.png',
          playsinline: true
        }
      }
    });
    expect(wrapper.html()).toContain('xxx.png');
    expect(wrapper.html()).toContain('playsinline');
  });
  test('should be shown when passing image and description', () => {
    const wrapper = mount(Video);
    const _html1 = wrapper.find('.show-control');
    expect(_html1.exists()).toBe(true);
    wrapper.find('.control-play-btn').trigger('click');
    const _html2 = wrapper.find('.hide-control');
    expect(_html2.exists()).toBe(false);
  });
});
