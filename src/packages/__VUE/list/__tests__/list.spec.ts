import { mount } from '@vue/test-utils';
import List from '../index.vue';
import { nextTick } from 'vue';

test('should render height', async () => {
  const visibleCount = Math.ceil(667 / 50);
  const wrapper = mount(List, {
    props: {
      height: 80,
      listData: new Array(100).fill(0)
    }
  });

  await nextTick();

  const listItem = wrapper.findAll('.nut-list-item');
  expect(listItem.length).toBe(visibleCount);
});

test('should render actual length', async () => {
  const wrapper = mount(List, {
    props: {
      height: 50,
      listData: new Array(3).fill(0)
    }
  });

  await nextTick();

  const listItem = wrapper.findAll('.nut-list-item');
  expect(listItem.length).toEqual(3);
});
