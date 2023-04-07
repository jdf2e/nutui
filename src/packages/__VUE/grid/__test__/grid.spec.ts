import { h, nextTick } from 'vue';
import { config, mount } from '@vue/test-utils';
import { vi } from 'vitest';
import { useRouter } from 'vue-router';
import Grid from '../index.vue';
import GridItem from '../../griditem/index.vue';

afterAll(() => {
  config.global.components = {};
});

// mock module
vi.mock('vue-router', () => ({
  useRouter: vi.fn()
}));

test('should render square correctly', () => {
  const wrapper = mount(Grid, {
    props: {
      square: true,
      columnNum: 2
    },
    slots: {
      default: [GridItem, GridItem, GridItem, GridItem]
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render gutter correctly', () => {
  const wrapper = mount(Grid, {
    props: {
      gutter: 20
    },
    slots: {
      default: [GridItem, GridItem, GridItem, GridItem, GridItem, GridItem, GridItem, GridItem]
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render default slot correctly', () => {
  const wrapper = mount(Grid, {
    slots: {
      default: h(GridItem, null, {
        default: () => 'Default Slot'
      })
    }
  });

  expect(wrapper.find('.nut-grid-item__content').html()).toContain('Default Slot');
  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit click correctly', async () => {
  const wrapper = mount(Grid, {
    slots: {
      default: [GridItem]
    }
  });

  wrapper.find('.nut-grid-item').trigger('click');
  await nextTick();

  expect(wrapper.emitted('click')).toHaveLength(1);
});

test('should navifation correctly', async () => {
  // 当 `useRouter()` 时返回 `push` 方法
  const push = vi.fn((url: string) => url);
  (useRouter as any).mockImplementationOnce(() => ({
    push
  }));

  const wrapper = mount(Grid, {
    slots: {
      default: h(GridItem, {
        to: 'http://m.jd.com'
      })
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
  // wrapper.find('.nut-grid-item').trigger('click');
  // await nextTick();
  // expect(push.mock.calls[0][0]).toEqual('/home');
});
