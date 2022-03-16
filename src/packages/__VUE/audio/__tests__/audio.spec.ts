import { config, mount } from '@vue/test-utils';
import { nextTick, ref, toRefs, reactive, onMounted } from 'vue';
import NutIcon from '../../icon/index.vue';
import NutRange from '../../range/index.vue';
import Audio from '../index.vue';
import AudioOperate from '../../audiooperate/index.vue';
import NutButton from '../../button/index.vue';

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

beforeAll(() => {
  config.global.components = {
    NutIcon,
    NutRange,
    AudioOperate,
    NutButton
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
  expect(wrapper.find('.nut-audio-icon').exists()).toBeTruthy();
});

test('audio init render', async () => {
  const wrapper = mount({
    components: {
      'nut-audio': Audio,
      'nut-icon': NutIcon,
      'nut-range': NutRange,
      'nut-audio-operate': AudioOperate,
      'nut-button': NutButton
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
