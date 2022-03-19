import { h, nextTick } from 'vue';
import { config, mount } from '@vue/test-utils';
import { useRouter } from 'vue-router';
import Grid from '../index.vue';
import GridItem from '../../griditem/index.vue';
import NutIcon from '../../icon/index.vue';

beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

// mock module
jest.mock('vue-router', () => ({
  useRouter: jest.fn()
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

test('should change icon and color when using icon-size and icon-color prop', () => {
  const wrapper = mount(Grid, {
    props: {
      iconSize: 30
    },
    slots: {
      default: h(GridItem, {
        iconColor: 'red'
      })
    }
  });

  expect(wrapper.find<HTMLElement>('.nut-icon').element.style.fontSize).toEqual('30px');
  expect(wrapper.find<HTMLElement>('.nut-icon').element.style.color).toEqual('red');
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
  const push = jest.fn((url: string) => url);
  (useRouter as jest.Mock).mockImplementationOnce(() => ({
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
