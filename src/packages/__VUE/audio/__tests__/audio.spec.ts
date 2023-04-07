import { config, mount } from '@vue/test-utils';
import { nextTick, toRefs, reactive } from 'vue';
import Audio from '../index.vue';
import AudioOperate from '../../audiooperate/index.vue';

beforeAll(() => {
  config.global.components = {
    AudioOperate
  };
});

afterAll(() => {
  config.global.components = {};
});

test('audio init render', async () => {
  const wrapper = mount(Audio, {
    props: {
      type: 'icon',
      url: '//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav'
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-audio__icon').exists()).toBeTruthy();
});

test('audio init render', async () => {
  const wrapper = mount({
    components: {
      'nut-audio': Audio,
      'nut-audio-operate': AudioOperate
    },
    template: `
    <nut-audio
        url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
        :muted="muted"
        :autoplay="autoplay"
        :loop="false"
        type="progress"
        @forward="forward"
      >
      <div class="nut-audio-operate-group">
        <nut-audio-operate type="forward"></nut-audio-operate>
        <nut-audio-operate type="back"></nut-audio-operate>
        <nut-audio-operate type="play"></nut-audio-operate>
        
        <nut-audio-operate type="mute"></nut-audio-operate>
      </div>
      </nut-audio>

      <div>{{time}}</div>
    `,
    setup() {
      const data = reactive({
        muted: false,
        autoplay: false,
        time: 0
      });
      const forward = (p: any) => {
        data.time = p;
      };

      return { ...toRefs(data), forward };
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-audio-operate-item').exists()).toBeTruthy();
  wrapper.find('.nut-audio-operate-item').trigger('click');
  await nextTick();
  expect(wrapper.vm.time).toBe(1);
});
