import { mount } from '@vue/test-utils'
import { Calendar } from '@nutui/nutui'
import { nextTick, ref } from 'vue'

test('Calendar: props.showTitle', async () => {
  const showTitle = ref(true)
  const wrapper = mount(() => {
    return <Calendar poppable={false} showTitle={showTitle.value} />
  })
  expect(wrapper.find('.nut-calendar__header-title').exists()).toBeTruthy()
  showTitle.value = false
  await nextTick()
  expect(wrapper.find('.nut-calendar__header-title').exists()).toBeFalsy()
})

test('Calendar: props.showSubTitle', async () => {
  const showSubTitle = ref(true)
  const wrapper = mount(() => {
    return <Calendar poppable={false} showSubTitle={showSubTitle.value} />
  })
  expect(wrapper.find('.nut-calendar__header-subtitle').exists()).toBeTruthy()
  showSubTitle.value = false
  await nextTick()
  expect(wrapper.find('.nut-calendar__header-subtitle').exists()).toBeFalsy()
})

test('Calendar: props.showToday', async () => {
  const showToday = ref(true)
  const wrapper = mount(() => {
    return <Calendar poppable={false} showToday={showToday.value} />
  })
  await nextTick()
  expect(wrapper.find('.nut-calendar__day-tips--curr').exists()).toBeTruthy()
  showToday.value = false
  await nextTick()
  expect(wrapper.find('.nut-calendar__day-tips--curr').exists()).toBeFalsy()
})

test('Calendar: props.firstDayOfWeek', async () => {
  const wrapper = mount(() => {
    return <Calendar poppable={false} firstDayOfWeek={2} startDate="2022-01-01" endDate="2022-01-31" />
  })
  await nextTick()
  const weekdays = ['日', '一', '二', '三', '四', '五', '六']
  // 头部周第1个元素
  const weekday = wrapper.findAll('.nut-calendar__weekday')[0].text()
  expect(weekday).toEqual(weekdays[2])
  // 日期面板第7个元素, 判断最后一天的日期是否匹配
  const calendarMonth = wrapper.find('.nut-calendar__month')
  const monthTitle = calendarMonth.find('.nut-calendar__month-title').text()
  const dayText = calendarMonth.findAll('.nut-calendar__day-value')[6].text()
  const date = new Date(monthTitle.replace(/[年月]/g, '/') + dayText)
  const index = date.getDay()
  expect(index).toEqual(1)
})

test('Calendar: should render slot correctly', async () => {
  const wrapper = mount(() => {
    return (
      <Calendar poppable={false} defaultValue="2022-03-18" startDate="2022-01-01" endDate="2022-12-31">
        {{
          btn: () => <div>近七天</div>,
          'bottom-info': (date: any) =>
            `${date.date ? (date.date.day <= 10 ? '上旬' : date.date.day <= 20 ? '中旬' : '下旬') : ''}`
        }}
      </Calendar>
    )
  })
  await nextTick()
  expect(wrapper.find('.nut-calendar__header').html()).toMatchSnapshot()
  expect(wrapper.find('.nut-calendar__body').html()).toMatchSnapshot()
})

test('Calendar: scroll to date & click & choose event', async () => {
  const onChoose = vi.fn()
  const calRef = ref()
  const wrapper = mount(() => {
    return (
      <Calendar
        ref={calRef}
        poppable={false}
        defaultValue="2024-01-01"
        startDate="2024-01-01"
        endDate="2024-12-31"
        onChoose={onChoose}
      />
    )
  })

  calRef.value.scrollToDate('2024-02-01')
  await nextTick()
  wrapper.findAll('.nut-calendar__days-item .nut-calendar__day')[2].trigger('click')
  expect(onChoose).toBeCalledWith(['2024', '01', '02', '2024-01-02', '星期二'])
  wrapper.findAll('.nut-calendar__days-item .nut-calendar__day')[15].trigger('click')
  expect(onChoose).toBeCalledWith(['2024', '01', '15', '2024-01-15', '星期一'])
})

test('Calendar: customize the disable date', async () => {
  const wrapper = mount(() => {
    return (
      <Calendar
        poppable={false}
        defaultValue="2024-01-01"
        startDate="2024-01-01"
        endDate="2024-12-31"
        disabledDate={(date: string) => {
          const disabledDate: { [key: string]: boolean } = {
            '2024-01-05': true,
            '2024-01-06': true,
            '2024-01-10': true,
            '2024-01-11': true,
            '2024-01-12': true,
            '2024-01-13': true,
            '2024-01-14': true
          }
          return disabledDate[date]
        }}
      />
    )
  })
  await nextTick()
  expect(wrapper.findAll('.nut-calendar__day--disabled').length).toBeGreaterThan(7)
})
