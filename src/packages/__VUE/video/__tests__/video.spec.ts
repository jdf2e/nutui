import { mount } from '@vue/test-utils';
import Video from '../index.vue';

describe('Video', () => {
  test('video base info', () => {
    const wrapper = mount(Video, {
      props: {
        source: {
          src: 'xxx.mp4',
          type: 'video/mp4',
          poster:
            'https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp'
        },
        options: {
          controls: true,
          autoplay: true,
          muted: true,
          playsinline: true,
          loop: true
        }
      }
    });
    expect(wrapper.find<HTMLElement>('.nut-video source').html()).toContain('xxx.mp4');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
