import { config, mount } from '@vue/test-utils';
import Cell from '../index.vue';
import Icon from '../../icon/index.vue';
import { nextTick } from 'vue';

beforeAll(() => {
  config.global.components = {
    [Icon.name]: Icon
  };
});

// mock module
jest.mock('vue-router', () => ({
  useRouter: jest.fn()
}));

test('prop title desc subtitle', async () => {
  const wrapper = mount(Cell, {
    props: {
      title: '标题1',
      desc: '描述1',
      subTitle: '副标题1'
    }
  });
  const html = expect(wrapper.html());
  html.toContain('标题1');
  html.toContain('描述1');
  html.toContain('副标题1');

  wrapper.setProps({
    title: '标题2',
    desc: '描述2',
    subTitle: '副标题2'
  });
  await nextTick();
  const html2 = expect(wrapper.html());
  html2.toContain('标题2');
  html2.toContain('描述2');
  html2.toContain('副标题2');

  html.toMatchSnapshot();
});

test('prop desc-text-align left', () => {
  const wrapper = mount(Cell, {
    props: {
      descTextAlign: 'left',
      desc: '张三'
    }
  });
  expect(wrapper.find<HTMLElement>('.nut-cell__value').element.style.textAlign).toEqual('left');
  expect(wrapper.html()).toMatchSnapshot();
});

test('prop isLink ', () => {
  const wrapper = mount(Cell, {
    props: {
      isLink: true
    }
  });
  expect(wrapper.find<HTMLElement>('.nut-cell__link'));
  expect(wrapper.html()).toMatchSnapshot();
});

test('emit click event', () => {
  const wrapper = mount(Cell);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')!.length).toEqual(1);
});

test('slot default test', () => {
  const wrapper = mount(Cell, {
    props: {
      title: '标题1',
      desc: '描述1',
      subTitle: '副标题1'
    },
    slots: {
      default: 'Custom Content'
    }
  });
  expect(wrapper.html()).toContain('Custom Content');
  expect(wrapper.html()).toMatchSnapshot();
});

test('slot link、icon test', () => {
  const wrapper = mount(Cell, {
    props: {
      title: '标题1',
      desc: '描述1',
      subTitle: '副标题1'
    },
    slots: {
      icon: 'Custom Icon',
      link: 'Custom Link'
    }
  });
  const html = expect(wrapper.html());
  html.toContain('Custom Link');
  html.toContain('Custom Icon');
  expect(wrapper.html()).toMatchSnapshot();
});
