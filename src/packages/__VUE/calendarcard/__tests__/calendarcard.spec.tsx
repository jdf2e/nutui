import { mount } from '@vue/test-utils';
import CalendarCard from '..';
import { nextTick, ref } from 'vue';
import { CalendarCardDay } from '../types';

test('CalendarCard: test defaultValue mount(() => ', async () => {
  const wrapper = mount(() => <CalendarCard modelValue={new Date('2023-01-25')} />);

  // active
  const activeDay = wrapper.findAll('.nut-calendarcard-day.current.active .nut-calendarcard-day-inner');
  expect(activeDay.length).toBe(1);
  expect(activeDay[0].text()).toBe('25');

  // prev
  const prevDays = wrapper.findAll('.nut-calendarcard-day.prev');
  expect(prevDays.length).toBe(0);

  // next
  const nextDays = wrapper.findAll('.nut-calendarcard-day.next');
  expect(nextDays.length).toBe(11);

  // current
  const currentDays = wrapper.findAll('.nut-calendarcard-day.current');
  expect(currentDays.length).toBe(42 - 0 - 11);
});

test('CalendarCard: test onChange & onDayClick & onPageChange', async () => {
  const onChange = vi.fn();
  const onDayClick = vi.fn();
  const onPageChange = vi.fn();
  const wrapper = mount(() => (
    <CalendarCard
      modelValue={new Date('2023-01-25')}
      onChange={onChange}
      onDayClick={onDayClick}
      onPageChange={onPageChange}
    />
  ));

  expect(onPageChange).toHaveBeenCalledTimes(1);

  // current
  const currentDays = wrapper.findAll('.nut-calendarcard-day.current');
  currentDays[1].trigger('click');
  expect(onDayClick).toHaveBeenCalledWith({
    year: 2023,
    month: 1,
    date: 2,
    type: 'current'
  });
  currentDays[3].trigger('click');
  currentDays[5].trigger('click');
  expect(onChange).toHaveBeenCalledTimes(3);

  const nextDays = wrapper.findAll('.nut-calendarcard-day.next');
  nextDays[0].trigger('click');
  expect(onDayClick).toHaveBeenCalledTimes(3);
  expect(onPageChange).toHaveBeenCalledTimes(1);
});

test('CalendarCard: test type multiple', async () => {
  const wrapper = mount(() => <CalendarCard modelValue={new Date('2023-01-25')} type="multiple" />);

  // current
  const currentDays = wrapper.findAll('.nut-calendarcard-day.current');
  currentDays[1].trigger('click'); // 0102
  currentDays[3].trigger('click'); // 0104
  currentDays[5].trigger('click'); // 0106
  await nextTick();
  const activeDays = wrapper.findAll('.nut-calendarcard-day.active');
  expect(activeDays.length).toBe(4);
});

test('CalendarCard: test type range', async () => {
  const val = ref([new Date('2023-01-25')]);
  const wrapper = mount(() => <CalendarCard v-model={val.value} type="range" />);

  // current
  const currentDays = wrapper.findAll('.nut-calendarcard-day.current');
  const active = wrapper.findAll('.nut-calendarcard-day.active');
  expect(active.length).toBe(1);

  currentDays[24].trigger('click'); // 0125
  await nextTick();
  const startAndEnd = wrapper.findAll('.nut-calendarcard-day.start.end');
  expect(startAndEnd.length).toBe(1);

  currentDays[3].trigger('click'); // 0104
  currentDays[8].trigger('click'); // 0109
  await nextTick();
  const start = wrapper.find('.nut-calendarcard-day.start .nut-calendarcard-day-inner');
  expect(start.text()).toBe('4'); // 0104
  const end = wrapper.find('.nut-calendarcard-day.end .nut-calendarcard-day-inner');
  expect(end.text()).toBe('9'); // 0109
  const midDays = wrapper.findAll('.nut-calendarcard-day.mid');
  expect(midDays.length).toBe(4); // 0105-0108
});

test('CalendarCard: test type week', async () => {
  const wrapper = mount(() => (
    <CalendarCard modelValue={[new Date('2023-01-22'), new Date('2023-01-28')]} type="week" />
  ));

  // current
  const currentDays = wrapper.findAll('.nut-calendarcard-day.current');
  currentDays[8].trigger('click'); // 0109
  await nextTick();
  const start = wrapper.find('.nut-calendarcard-day.start .nut-calendarcard-day-inner');
  expect(start.text()).toBe('8'); // 0108
  const end = wrapper.find('.nut-calendarcard-day.end .nut-calendarcard-day-inner');
  expect(end.text()).toBe('14'); // 0114
  const midDays = wrapper.findAll('.nut-calendarcard-day.mid');
  expect(midDays.length).toBe(5); // 0109-0113
});

test('CalendarCard: test disableDay', async () => {
  const onDayClick = vi.fn();
  const wrapper = mount(() => (
    <CalendarCard
      modelValue={new Date('2023-01-24')}
      disableDay={(day: CalendarCardDay) => {
        const d = new Date(`${day.year}-${day.month}-${day.date}`).getDay();
        return d === 1 || d === 3;
      }}
      onDayClick={onDayClick}
    />
  ));

  // disabled
  const disabledDays = wrapper.findAll('.nut-calendarcard-day.disabled');
  expect(disabledDays.length).toBe(12);

  // current
  const currentDays = wrapper.findAll('.nut-calendarcard-day.current');
  currentDays[22].trigger('click'); // 0123 disabled
  expect(onDayClick).toHaveBeenCalledTimes(0);
  currentDays[25].trigger('click'); // 0126
  expect(onDayClick).toHaveBeenCalledTimes(1);
});

test('CalendarCard: test ref methods', async () => {
  const onPageChange = vi.fn();
  const wrapper = mount(() => (
    <CalendarCard ref="calendarCardRef" modelValue={new Date('2023-01-25')} onPageChange={onPageChange} />
  ));
  const calendarCard = wrapper.findComponent(CalendarCard).vm as unknown as {
    jumpTo: (y: number, m: number) => void;
    jump: (step: number) => void;
  };
  expect(onPageChange).toHaveBeenCalledWith({
    year: 2023,
    month: 1
  });

  calendarCard.jumpTo(2023, 2);
  await nextTick();
  expect(onPageChange).toHaveBeenLastCalledWith({
    year: 2023,
    month: 2
  });

  calendarCard.jump(-24);
  await nextTick();
  expect(onPageChange).toHaveBeenLastCalledWith({
    year: 2021,
    month: 2
  });
});

test('CalendarCard: test startDate & endDate', async () => {
  const wrapper = mount(() => (
    <CalendarCard
      modelValue={new Date('2023-01-24')}
      startDate={new Date('2022-12-01')}
      endDate={new Date('2023-03-01')}
    />
  ));

  const title1 = wrapper.find('.nut-calendarcard-header-title');
  expect(title1?.text()).toBe('2023年1月');

  const left = wrapper.findAll('.nut-calendarcard-header .left');
  const doubleRight = wrapper.findAll('.nut-calendarcard-header .double-right');
  left[0].trigger('click');
  await nextTick();
  const title2 = wrapper.find('.nut-calendarcard-header-title');
  expect(title2?.text()).toBe('2022年12月');

  left[0].trigger('click');
  await nextTick();
  const title3 = wrapper.find('.nut-calendarcard-header-title');
  expect(title3?.text()).toBe('2022年12月');

  doubleRight[0].trigger('click');
  await nextTick();
  const title4 = wrapper.find('.nut-calendarcard-header-title');
  expect(title4?.text()).toBe('2022年12月');
});
