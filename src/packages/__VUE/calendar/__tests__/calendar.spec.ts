import { mount } from '@vue/test-utils';
import Calendar from '../index.vue';
import { nextTick } from 'vue';

test('show-title prop', async () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      defaultValue: '2022-03-18',
      showTitle: true,
      startDate: '2022-01-01',
      endDate: '2022-12-31'
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-calendar__header-title').exists()).toBeTruthy();
  await wrapper.setProps({ showTitle: false });
  expect(wrapper.find('.nut-calendar__header-title').exists()).toBeFalsy();
});
test('show-sub-title prop', async () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      defaultValue: '2022-03-18',
      showSubTitle: true,
      startDate: '2022-01-01',
      endDate: '2022-12-31'
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-calendar__header-subtitle').exists()).toBeTruthy();
  await wrapper.setProps({ showSubTitle: false });
  expect(wrapper.find('.nut-calendar__header-subtitle').exists()).toBeFalsy();
});
test('show-today prop', async () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      defaultValue: '2022-03-18',
      showToday: true,
      startDate: '2022-01-01',
      endDate: '2022-12-31'
    }
  });
  await nextTick();
  // expect(wrapper.find('.calendar-curr-tip-curr').exists()).toBeTruthy();
  await wrapper.setProps({ showToday: false });
  expect(wrapper.find('.nut-calendar__day-tips--curr').exists()).toBeFalsy();
});

test('first-day-of-week prop', async () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      firstDayOfWeek: 2,
      startDate: '2022-01-01',
      endDate: '2022-01-31'
    }
  });
  await nextTick();
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  // 头部周第1个元素
  const weekday = wrapper.findAll('.nut-calendar__weekday')[0].text();
  expect(weekday).toEqual(weekdays[2]);
  // 日期面板第7个元素, 判断最后一天的日期是否匹配
  const calendarMonth = wrapper.find('.nut-calendar__month');
  const monthTitle = calendarMonth.find('.nut-calendar__month-title').text();
  const dayText = calendarMonth.findAll('.nut-calendar__day-value')[6].text();
  const date = new Date(monthTitle.replace(/[年月]/g, '/') + dayText);
  const index = date.getDay();
  expect(index).toEqual(1);
});

test('should render slot correctly', async () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      defaultValue: '2022-03-18',
      startDate: '2022-01-01',
      endDate: '2022-12-31'
    },
    slots: {
      btn: '<div class="d_div"> 最近七天</div>',
      day: (date) => {
        return `custom${date.date.day}`;
      },
      'bottom-info': (date) =>
        `${date.date ? (date.date.day <= 10 ? '上旬' : date.date.day <= 20 ? '中旬' : '下旬') : ''}`
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-calendar__header').html()).toMatchSnapshot();
  expect(wrapper.find('.nut-calendar__body').html()).toMatchSnapshot();
});

test('select event when click item', async () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      defaultValue: '2022-03-18',
      showToday: true,
      isAutoBackFill: true,
      startDate: '2022-01-01',
      endDate: '2022-12-31'
    }
  });

  await nextTick();
  wrapper.findAll('.nut-calendar__day')[15].trigger('click');
  const arr: any = wrapper.emitted<[Date]>('select')![0][0];
  expect(arr[3]).toEqual('2022-02-14');
});
test('choose event when click item', async () => {
  const wrapper = mount(Calendar, {
    props: {
      poppable: false,
      defaultValue: '2022-03-18',
      showToday: true,
      isAutoBackFill: true,
      startDate: '2022-01-01',
      endDate: '2022-12-31'
    }
  });

  await nextTick();
  wrapper.findAll('.nut-calendar__day')[15].trigger('click');
  const arr2: any = wrapper.emitted<[Date]>('choose')![0][0];
  expect(arr2[3]).toEqual('2022-02-14');
});
