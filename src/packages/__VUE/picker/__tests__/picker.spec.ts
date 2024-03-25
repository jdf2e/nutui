import { mount } from '@vue/test-utils'
import { Picker } from '@nutui/nutui'
import { nextTick } from 'vue'

const simpleColumns = [
  { text: '南京市', value: 'NanJing' },
  { text: '无锡市', value: 'WuXi' },
  { text: '海北藏族自治区', value: 'ZangZu' },
  { text: '北京市', value: 'BeiJing' },
  { text: '连云港市', value: 'LianYunGang' }
]
const multipleColumns = [
  [
    { text: '周一', value: 'Monday' },
    { text: '周二', value: 'Tuesday' },
    { text: '周三', value: 'Wednesday' },
    { text: '周四', value: 'Thursday' },
    { text: '周五', value: 'Friday' }
  ],
  // 第二列
  [
    { text: '上午', value: 'Morning' },
    { text: '下午', value: 'Afternoon' },
    { text: '晚上', value: 'Evening' }
  ]
]

const customColumns = [
  { label: '周一', value: 'Monday' },
  { label: '周二', value: 'Tuesday' },
  { label: '周三', value: 'Wednesday' },
  { label: '周四', value: 'Thursday' },
  { label: '周五', value: 'Friday' }
]

test('first render', async () => {
  const wrapper = mount(Picker, {
    props: {
      visible: true,
      listData: simpleColumns
    }
  })
  await nextTick()
  expect(wrapper.find('.nut-picker__left').exists()).toBeTruthy()
  expect(wrapper.find('.nut-picker__right').exists()).toBeTruthy()
})

test('simple list-data confirm & close event', async () => {
  const wrapper = mount(Picker, {
    props: {
      visible: true,
      columns: simpleColumns
    }
  })
  await nextTick()
  wrapper.find('.nut-picker__left').trigger('click')
  wrapper.find('.nut-picker__right').trigger('click')
  expect(wrapper.emitted().confirm[0]).toEqual([
    {
      selectedOptions: [{ text: '南京市', value: 'NanJing' }],
      selectedValue: ['NanJing']
    }
  ])
})

test('simple columns default checked item', async () => {
  const wrapper = mount(Picker, {
    props: {
      modelValue: ['WuXi'],
      visible: true,
      columns: simpleColumns
    }
  })
  await nextTick()
  wrapper.find('.nut-picker__right').trigger('click')
  expect(wrapper.emitted().confirm[0]).toEqual([
    {
      selectedOptions: [{ text: '无锡市', value: 'WuXi' }],
      selectedValue: ['WuXi']
    }
  ])
})

test('the default value is 0', async () => {
  const wrapper = mount(Picker, {
    props: {
      modelValue: [0],
      visible: true,
      columns: [
        { text: 'Empt', value: '' },
        { text: 'undefined', value: undefined },
        { text: '0', value: 0 }
      ]
    }
  })

  await nextTick()
  wrapper.find('.nut-picker__right').trigger('click')
  expect(wrapper.emitted().confirm[0]).toEqual([
    {
      selectedOptions: [{ text: '0', value: 0 }],
      selectedValue: [0]
    }
  ])
})

test('multiple columns render', async () => {
  const wrapper = mount(Picker, {
    props: {
      visible: true,
      columns: multipleColumns
    }
  })
  await nextTick()
  const columnItems = wrapper.findAll('.nut-picker__columnitem')
  expect(columnItems.length).toEqual(2)
})

test('custom columns field', async () => {
  const wrapper = mount(Picker, {
    props: {
      visible: true,
      columns: customColumns,
      fieldNames: {
        text: 'label',
        value: 'value'
      }
    }
  })
  await nextTick()
  const columnItems = wrapper.findAll('.nut-picker__columnitem')
  expect(columnItems.length).toEqual(1)
  wrapper.find('.nut-picker__right').trigger('click')
  expect(wrapper.emitted().confirm[0]).toEqual([
    {
      selectedOptions: [{ label: '周一', value: 'Monday' }],
      selectedValue: ['Monday']
    }
  ])
})
