import { config, mount } from '@vue/test-utils';
import PullRefresh from '../index.vue';
import { sleep, trigger, triggerDrag } from '../../../utils/unit';

afterAll(() => {
  config.global.components = {};
});

test('pull base', async () => {
  const wrapper = mount(PullRefresh, {
    props: {
      modelValue: false
    }
  });

  const track = wrapper.find('.nut-pull-refresh');

  trigger(track, 'touchstart', 0, 0);
  trigger(track, 'touchmove', 0, 20);

  await sleep();
  expect(wrapper.find('.nut-pull-refresh-container-topbox-text').text()).toBe('下拉刷新');

  trigger(track, 'touchmove', 0, 60);

  await sleep();
  expect(wrapper.find('.nut-pull-refresh-container-topbox-text').text()).toBe('释放刷新');

  trigger(track, 'touchend', 0, 100);
  await sleep();
  expect(wrapper.find('.nut-pull-refresh-container-topbox-text').text()).toBe('加载中...');

  triggerDrag(track, 0, 100);
  await sleep();
  expect(wrapper.find('.nut-pull-refresh-container-topbox-text').text()).toBe('加载中...');

  expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  expect(wrapper.emitted('refresh')).toBeTruthy();
});

test('Custom loading text', async () => {
  const wrapper = mount(PullRefresh, {
    props: {
      modelValue: false,
      loosingTxt: '松开吧',
      loadingTxt: '玩命加载中...',
      pullingTxt: '用力拉'
    }
  });

  const track = wrapper.find('.nut-pull-refresh');

  trigger(track, 'touchstart', 0, 0);
  trigger(track, 'touchmove', 0, 20);

  await sleep();
  expect(wrapper.find('.nut-pull-refresh-container-topbox-text').text()).toBe('用力拉');

  trigger(track, 'touchmove', 0, 60);

  await sleep();
  expect(wrapper.find('.nut-pull-refresh-container-topbox-text').text()).toBe('松开吧');

  trigger(track, 'touchend', 0, 100);
  await sleep();
  expect(wrapper.find('.nut-pull-refresh-container-topbox-text').text()).toBe('玩命加载中...');

  triggerDrag(track, 0, 100);
  await sleep();
  expect(wrapper.find('.nut-pull-refresh-container-topbox-text').text()).toBe('玩命加载中...');

  expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  expect(wrapper.emitted('refresh')).toBeTruthy();
});

test('Should allow to custom pull distance', async () => {
  const wrapper = mount(PullRefresh, {
    props: {
      modelValue: false,
      pullDistance: 300
    }
  });

  const track = wrapper.find('.nut-pull-refresh');

  trigger(track, 'touchstart', 0, 0);
  trigger(track, 'touchmove', 0, 100);

  await sleep();
  expect(wrapper.find('.nut-pull-refresh-container-topbox-text').text()).toBe('下拉刷新');

  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  expect(wrapper.emitted('refresh')).toBeFalsy();

  expect(wrapper.emitted('change')).toEqual([[{ distance: 100, status: 'pulling' }]]);
});
