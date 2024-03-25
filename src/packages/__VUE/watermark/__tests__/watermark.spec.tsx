import { mount } from '@vue/test-utils'
import { Watermark, Cell } from '@nutui/nutui'
import { nextTick } from 'vue'
import 'vitest-canvas-mock'

test('render fullPage props ', async () => {
  const wrapper = mount(() => {
    return <Watermark font-color="#fa2c19" content="nut-ui"></Watermark>
  })
  await nextTick()

  expect(wrapper.findAll('.nut-watermark').length).toBe(1)
  expect(wrapper.findAll('.nut-watermark-full-page').length).toBe(1)
})

test('should render watermark', () => {
  const wrapper = mount(() => {
    return (
      <Cell>
        <Watermark fullPage={false} fontColor="#fa2c19" content="nut-ui"></Watermark>
      </Cell>
    )
  })
  expect(wrapper.html()).toMatchSnapshot()
})
