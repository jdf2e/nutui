import { mount, VueWrapper, DOMWrapper } from '@vue/test-utils';
import Elevator from '../index.vue';
import { nextTick, ComponentPublicInstance } from 'vue';

const indexList = [
  {
    title: 'A',
    list: [
      {
        name: '安徽',
        id: 1
      }
    ]
  },
  {
    title: 'B',
    list: [
      {
        name: '北京',
        id: 2
      }
    ]
  },
  {
    title: 'G',
    list: [
      {
        name: '广西',
        id: 3
      },
      {
        name: '广东',
        id: 4
      }
    ]
  },
  {
    title: 'H',
    list: [
      {
        name: '湖南',
        id: 5
      },
      {
        name: '湖北',
        id: 6
      }
    ]
  }
];

test('should render elevator list height after height props to be 200', () => {
  const wrapper = mount(Elevator, {
    props: {
      height: 200
    }
  });

  const elevatorList = wrapper.find('.nut-elevator__list').element as HTMLElement;

  expect(elevatorList.style.height).toBe('200px');
});

test('should render list data when indexList props not empty', () => {
  const wrapper = mount(Elevator, {
    props: {
      indexList
    }
  });

  expect(wrapper.findAll('.nut-elevator__list__item').length).toBe(indexList.length);
});

test('should list item highlight when clickItem trigger click', async () => {
  const wrapper = mount(Elevator, {
    props: {
      indexList
    }
  });

  const listItem = wrapper.findAll('.nut-elevator__list__item')[1];
  await listItem.find('.nut-elevator__list__item__name').trigger('click');

  expect(listItem.find('.nut-elevator__list__item__name').classes()).toContain(
    'nut-elevator__list__item__name--highcolor'
  );

  expect((wrapper.emitted('click-item') as any)[0][0]).toBe('B');
});

test('clickIndex trigger click', async () => {
  const wrapper = mount(Elevator, {
    props: {
      indexList
    }
  });

  const listItem = wrapper.findAll('.nut-elevator__bars__inner__item')[2];
  await listItem.trigger('click');

  expect((wrapper.emitted('click-index') as any)[0][0]).toBe('G');
});

test('index is sticky', async () => {
  const wrapper = mount(Elevator, {
    props: {
      indexList,
      isSticky: true
    }
  });

  expect(wrapper.findAll('.nut-elevator__list__fixed').length).toBe(1);
});
