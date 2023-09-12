import { mount } from '@vue/test-utils';
import Video from '../index.vue';
import { mockElementMethod } from '@/packages/utils/unit';

mockElementMethod(HTMLMediaElement, 'load');
mockElementMethod(HTMLMediaElement, 'pause');

const videoUrl = 'https://storage.jd.com/about/big-final.mp4';

test('Video: base info', () => {
  const wrapper = mount(Video, {
    props: {
      source: {
        src: videoUrl,
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
  expect(wrapper.find<HTMLElement>('.nut-video source').html()).toContain(videoUrl);
  expect(wrapper.html()).toMatchSnapshot();
});

test('Video: ref methods', () => {
  const wrapper = mount(Video, {
    props: {
      source: {
        src: videoUrl,
        type: 'video/mp4'
      },
      options: {}
    }
  });
  const vm: any = wrapper.vm;
  vm.play();
  vm.pause();
  vm.stop();
  vm.muted();
  vm.unmuted();
  expect(wrapper.emitted('pause')).toHaveLength(1);
});
