import { mount } from '@vue/test-utils';
import { nextTick, toRefs, reactive } from 'vue';
import Countdown from '../index.vue';
import Button from '../../button/index.vue';
import { sleep } from '@/packages/utils/unit';

test('endTime props', async () => {
  const wrapper = mount(Countdown, {
    props: {
      endTime: Date.now() + 1 * 50
    }
  });
  expect(wrapper.emitted('on-end')).toBeFalsy();
  await sleep(51);
  expect(wrapper.emitted('on-end')).toBeTruthy();
});

test('format props', async () => {
  const wrapper = mount(Countdown, {
    props: {
      endTime: Date.now() + 1 * 50,
      format: 'DD天HH时mm分ss秒'
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-countdown__content').exists()).toBeTruthy();
  const prevSnapShot = wrapper.find('.nut-countdown__content');
  expect(prevSnapShot.text() == '00天00时00分00秒').toBe(true);

  wrapper.setProps({ format: 'DD天', endTime: Date.now() + 1 * 50 });
  await nextTick();
  expect(wrapper.find('.nut-countdown__content').text() == '00天').toBe(true);

  wrapper.setProps({ format: 'HH时', endTime: Date.now() + 1 * 50 });
  await nextTick();
  expect(wrapper.find('.nut-countdown__content').text() == '00时').toBe(true);

  wrapper.setProps({ format: 'mm分', endTime: Date.now() + 1 * 50 });
  await nextTick();
  expect(wrapper.find('.nut-countdown__content').text() == '00分').toBe(true);

  wrapper.setProps({ format: 'ss秒', endTime: Date.now() + 1 * 50 });
  await nextTick();
  expect(wrapper.find('.nut-countdown__content').text() == '00秒').toBe(true);

  wrapper.setProps({ format: 'S毫秒', endTime: Date.now() + 1 * 50 });
  await nextTick();
  expect(wrapper.find('.nut-countdown__content').text() == '0毫秒').toBe(true);

  wrapper.setProps({ format: 'SS毫秒', endTime: Date.now() + 1 * 50 });
  await nextTick();
  expect(wrapper.find('.nut-countdown__content').text() == '00毫秒').toBe(true);

  wrapper.setProps({ format: 'SSS毫秒', endTime: Date.now() + 1 * 50 });
  await nextTick();
  expect(wrapper.find('.nut-countdown__content').text() == '000毫秒').toBe(true);
});

test('paused props', async () => {
  const wrapper = mount({
    components: {
      'nut-countdown': Countdown,
      'nut-button': Button
    },
    template: `
      <nut-countdown  :endTime="endTime" :paused="paused" />
      <nut-button  @click="toggle">{{ paused ? 'start' : 'stop' }}</nut-button>
    `,
    setup() {
      const state = reactive({
        endTime: Date.now() + 1 * 50,
        paused: false
      });

      const toggle = () => {
        state.paused = !state.paused;
      };

      return { ...toRefs(state), toggle };
    }
  });

  const button = wrapper.find('.nut-button');
  const prevSnapShot = wrapper.find('.nut-countdown').html();
  await button.trigger('click');
  await nextTick();
  const laterShapShot = wrapper.find('.nut-countdown').html();
  expect(button.text() == 'start').toBe(true);
  expect(prevSnapShot === laterShapShot).toBeTruthy();
});

test('should render slot correctly', async () => {
  const wrapper = mount(Countdown, {
    props: {
      endTime: Date.now() + 1 * 50
    },
    slots: {
      default: () => 'slot content'
    }
  });
  expect(wrapper.text()).toEqual('slot content');
});
