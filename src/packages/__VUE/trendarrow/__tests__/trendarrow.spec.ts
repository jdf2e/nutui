import { config, mount } from '@vue/test-utils';
import Trendarrow from '../index.vue';
import { Failure } from '@nutui/icons-vue';
import { h } from 'vue';

beforeAll(() => {
  config.global.components = {
    Failure
  };
});

afterAll(() => {
  config.global.components = {};
});

test('should render rate when used ', async () => {
  const wrapper = mount(Trendarrow, {
    props: {
      rate: 12.325
    }
  });
  expect(wrapper.find('.nut-trend-arrow-rate').text()).toBe('12.33%');
});

test('should render digits when used ', async () => {
  const wrapper = mount(Trendarrow, {
    props: {
      rate: 12.325,
      digits: 1
    }
  });
  expect(wrapper.find('.nut-trend-arrow-rate').text()).toBe('12.3%');
});

test('should render digits when used ', async () => {
  const wrapper = mount(Trendarrow, {
    props: {
      rate: 12.325,
      digits: 1
    }
  });
  expect(wrapper.find('.nut-trend-arrow-rate').text()).toBe('12.3%');
});

test('should render showSign when used ', async () => {
  const wrapper = mount(Trendarrow, {
    props: {
      rate: 12.325,
      showSign: true
    }
  });
  expect(wrapper.find('.nut-trend-arrow-rate').text()).toBe('+12.33%');
});
test('should render showZero when used ', async () => {
  const wrapper = mount(Trendarrow, {
    props: {
      rate: 0,
      showSign: true,
      showZero: true
    }
  });
  expect(wrapper.find('.nut-trend-arrow-rate').text()).toBe('0.00%');
});
test('should not render 0  when showZero is false ', async () => {
  const wrapper = mount(Trendarrow, {
    props: {
      rate: 0,
      showSign: true,
      showZero: false
    }
  });
  expect(wrapper.find('.nut-trend-arrow-rate').text()).toBe('--');
});
test('should render left icon when arrowLeft', async () => {
  const wrapper = mount(Trendarrow, {
    props: {
      rate: 10,
      arrowLeft: true
    }
  });
  expect(wrapper.findAll('.nut-trend-arrow-icon-before').length).toBe(0);
  expect(wrapper.findAll('.nut-trend-arrow-icon-after').length).toBe(1);
});
test('should render sync text color when syncTextColor is true', async () => {
  const wrapper = mount(Trendarrow, {
    props: {
      rate: 10,
      syncTextColor: true
    }
  });
  const span = wrapper.find<HTMLElement>('.nut-trend-arrow-rate');
  expect(span.element.style.color).toContain('250, 44, 25');
});

test('should render text color when textColor used', async () => {
  const wrapper = mount(Trendarrow, {
    props: {
      rate: 10,
      textColor: 'rgb(39,197,48)',
      syncTextColor: false
    }
  });
  const span = wrapper.find<HTMLElement>('.nut-trend-arrow-rate');
  expect(span.element.style.color).toContain('(39, 197, 48)');
});

test('should render triangle color when riseColor used', async () => {
  const wrapper = mount(Trendarrow, {
    props: {
      rate: 10,
      riseColor: 'rgb(73,143,242)'
    }
  });
  const span = wrapper.find<HTMLElement>('.nut-trend-arrow-rate');
  expect(span.element.style.color).toContain('(73, 143, 242)');
});

test('should render triangle color when dropColor used', async () => {
  const wrapper = mount(Trendarrow, {
    props: {
      rate: -10,
      dropColor: 'rgb(73,143,242)',
      showSign: true
    }
  });
  const span = wrapper.find<HTMLElement>('.nut-trend-arrow-rate');
  expect(span.element.style.color).toContain('(73, 143, 242)');
});
test('should render SVG icon when use down-icon slots', async () => {
  const wrapper = mount(Trendarrow, {
    props: {
      rate: -10
    },
    slots: {
      'down-icon': h(Failure, {
        color: 'blue',
        width: '18',
        height: '18'
      })
    }
  });
  const icon = wrapper.find('.nut-icon');
  expect(icon.html()).toMatchSnapshot();
});
