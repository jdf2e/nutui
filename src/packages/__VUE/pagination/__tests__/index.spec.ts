import { mount } from '@vue/test-utils';
import Pagination from '../index.vue';

//测试 totalItems itemsPerPage currentPage @change
test('should render five items and should not emit change event after clicking disabled option', async () => {
  const wrapper = mount(Pagination, {
    props: {
      totalItems: 25,
      itemsPerPage: 5
    }
  });
  expect(wrapper.findAll('.nut-pagination-item')).toHaveLength(5);
});

//测试 mode pageCount
test('should render simple mode', async () => {
  const wrapper = mount(Pagination, {
    props: {
      pageCount: 12,
      mode: 'simple'
    }
  });
  expect(wrapper.findAll('.nut-pagination-item')).toHaveLength(0);
  expect(wrapper.findAll('.nut-pagination-simple')).toHaveLength(1);
});

//测试 forceEllipses showPageSize
test('should render forceEllipses and should emit change event after clicking forceEllipses option', async () => {
  const wrapper = mount(Pagination, {
    props: {
      totalItems: 125,
      showPageSize: 3,
      forceEllipses: true
    }
  });
  expect(wrapper.findAll('.nut-pagination-item')).toHaveLength(4);
});

//测试 click visible
test('should emit change event after clicking visible option', async () => {
  const wrapper = mount(Pagination, {
    props: {
      totalItems: 25,
      itemsPerPage: 5,
      modelValue: 1
    }
  });
  const next = wrapper.find('.nut-pagination-next');
  next.trigger('click');
  expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  expect(wrapper.emitted('change')).toBeTruthy();
});

//测试 click disable
test('should not emit change event after clicking disable option', async () => {
  const wrapper = mount(Pagination, {
    props: {
      totalItems: 25,
      itemsPerPage: 5,
      modelValue: 1
    }
  });
  const prev = wrapper.find('.nut-pagination-prev');
  prev.trigger('click');
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  expect(wrapper.emitted('change')).toBeFalsy();
});

//测试slot
test('should render prev-text、next-text slot correctly', () => {
  const wrapper = mount(Pagination, {
    props: {
      totalItems: 50,
      showPageSize: 5
    },
    slots: {
      'prev-text': () => 'Custom PrevText',
      'next-text': () => 'Custom NextText'
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

//测试slot
test('should render page slot correctly', () => {
  const wrapper = mount(Pagination, {
    props: {
      totalItems: 50,
      showPageSize: 5
    },
    slots: {
      page: ({ text = '我呀' }) => `foo${text}`
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});
