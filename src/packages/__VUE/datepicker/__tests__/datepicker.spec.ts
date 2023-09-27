import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import DatePicker from '../../datepicker/index.vue';

test('Do not display Chinese', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: new Date(2020, 0, 1),
      type: 'year-month',
      visible: true,
      isShowChinese: false
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-picker__right').exists()).toBeTruthy();
  const confirm = wrapper.find('.nut-picker__right');
  confirm.trigger('click');
  expect(wrapper.emitted().confirm[0]).toEqual([
    {
      selectedValue: ['2020', '01'],
      selectedOptions: [
        { text: '2020', value: '2020' },
        { text: '01', value: '01' }
      ]
    }
  ]);
});

test('min date & max date', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      type: 'year-month',
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2022, 10, 1),
      visible: true
    }
  });
  await nextTick();
  const yearItem = wrapper.find('.nut-picker__list').findAll('.nut-picker-roller-item');
  expect(yearItem.length).toBe(3);
});

test('Increment step setting', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      type: 'time',
      minuteStep: 5,
      visible: true
    }
  });
  await nextTick();
  const yearItem = wrapper.findAll('.nut-picker__list')[1].findAll('.nut-picker-roller-item');
  expect(yearItem.length).toBe(12);
});

test('datepicker: Test cancelled, change props value', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: new Date(2020, 0, 1),
      title: '选中日期',
      type: 'date',
      visible: true,
      isShowChinese: false
    }
  });
  await nextTick();
  const cancel = wrapper.find('.nut-picker__left');
  cancel.trigger('click');
  expect(wrapper.emitted().cancel).toBeTruthy();
  await nextTick();
  expect(wrapper.find('.nut-picker__right').exists()).toBeTruthy();
  await wrapper.setProps({ title: '选择年月日' });
  expect(wrapper.find('.nut-picker__title').text()).toBe('选择年月日');
  await wrapper.setProps({ modelValue: new Date(2022, 0, 2) });
  // 校验更改后的modelValue
  expect(wrapper.props().modelValue).toEqual(new Date(2022, 0, 2));
});

test('datepicker: test type datetime', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: new Date(2020, 0, 1, 0, 1),
      type: 'datetime',
      visible: true
    }
  });
  await nextTick();
  const yearItem = wrapper.find('.nut-picker__list').findAll('.nut-picker-roller-item');
  expect(yearItem.length).toBe(21);
  const confirm = wrapper.find('.nut-picker__right');
  confirm.trigger('click');
  expect(wrapper.emitted().confirm[0]).toEqual([
    {
      selectedValue: ['2020', '01', '01', '00', '01'],
      selectedOptions: [
        { text: '2020', value: '2020' },
        { text: '01', value: '01' },
        { text: '01', value: '01' },
        { text: '00', value: '00' },
        { text: '01', value: '01' }
      ]
    }
  ]);
});

test('datepicker: test type dateTime', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: new Date(2020, 0, 1, 0, 0, 1),
      type: 'dateTime',
      visible: true
    }
  });
  await nextTick();
  const yearItem = wrapper.find('.nut-picker__list').findAll('.nut-picker-roller-item');
  expect(yearItem.length).toBe(21);
  const confirm = wrapper.find('.nut-picker__right');
  confirm.trigger('click');
  expect(wrapper.emitted().confirm[0]).toEqual([
    {
      selectedValue: ['2020', '01', '01', '00', '00', '01'],
      selectedOptions: [
        { text: '2020', value: '2020' },
        { text: '01', value: '01' },
        { text: '01', value: '01' },
        { text: '00', value: '00' },
        { text: '00', value: '00' },
        { text: '01', value: '01' }
      ]
    }
  ]);
});

test('datepicker: test type datehour', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: new Date(2020, 0, 1, 1),
      type: 'datehour',
      visible: true
    }
  });
  await nextTick();
  const yearItem = wrapper.find('.nut-picker__list').findAll('.nut-picker-roller-item');
  expect(yearItem.length).toBe(21);
  const confirm = wrapper.find('.nut-picker__right');
  confirm.trigger('click');
  expect(wrapper.emitted().confirm[0]).toEqual([
    {
      selectedValue: ['2020', '01', '01', '01'],
      selectedOptions: [
        { text: '2020', value: '2020' },
        { text: '01', value: '01' },
        { text: '01', value: '01' },
        { text: '01', value: '01' }
      ]
    }
  ]);
});

test('datepicker: test type month-day', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: new Date(2020, 10, 1),
      type: 'month-day',
      visible: true
    }
  });
  await nextTick();
  const yearItem = wrapper.find('.nut-picker__list').findAll('.nut-picker-roller-item');
  expect(yearItem.length).toBe(12);
  const confirm = wrapper.find('.nut-picker__right');
  confirm.trigger('click');
  expect(wrapper.emitted().confirm[0]).toEqual([
    {
      selectedValue: ['11', '01'],
      selectedOptions: [
        { text: '11', value: '11' },
        { text: '01', value: '01' }
      ]
    }
  ]);
});

test('datepicker: test type hour-minute', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: new Date(2020, 0, 1, 1, 10),
      type: 'hour-minute',
      visible: true
    }
  });
  await nextTick();
  const yearItem = wrapper.find('.nut-picker__list').findAll('.nut-picker-roller-item');
  expect(yearItem.length).toBe(24);
  const confirm = wrapper.find('.nut-picker__right');
  confirm.trigger('click');
  expect(wrapper.emitted().confirm[0]).toEqual([
    {
      selectedValue: ['01', '10'],
      selectedOptions: [
        { text: '01', value: '01' },
        { text: '10', value: '10' }
      ]
    }
  ]);
});
