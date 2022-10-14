import { mount } from '@vue/test-utils';
import { mockScrollTop } from './../../../utils/unit';
import List from '../index.vue';
import { nextTick } from 'vue';

test('should render height', async () => {
  const wrapper = mount(List, {
    props: {
      height: 50,
      listData: new Array(100).fill(0)
    }
  });

  await nextTick();

  const listItem = wrapper.findAll('.nut-list-item')[0];
  expect((listItem.element as HTMLDivElement).style.height).toEqual('50px');
});

test('should render height', async () => {
  const visibleCount = Math.ceil(667 / 50);
  const wrapper = mount(List, {
    props: {
      height: 50,
      listData: new Array(100).fill(0)
    }
  });

  await nextTick();
  await mockScrollTop(100);

  const listItem = wrapper.findAll('.nut-list-item');
  expect(listItem.length).toBe(visibleCount);
});
