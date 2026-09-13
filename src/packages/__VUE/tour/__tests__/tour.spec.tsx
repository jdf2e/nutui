import { mount } from '@vue/test-utils'
import { StepOptions } from '../index.vue'
import { Tour } from '@nutui/nutui'
import { nextTick } from 'vue'

const steps1 = [
  {
    content: '70+ 高质量组件，覆盖移动端主流场景',
    target: 'tour-target'
  }
]

const steps2 = [
  {
    content: '支持一套代码同时开发多端小程序+H5',
    target: 'tour-target',
    popoverOffset: [40, 12],
    arrowOffset: -36
  }
]

const steps4 = [
  {
    content: '70+ 高质量组件，覆盖移动端主流场景',
    target: 'tour-target'
  }
]

const steps = [
  {
    content: '70+ 高质量组件，覆盖移动端主流场景',
    target: 'target1'
  },
  {
    content: '支持一套代码同时开发多端小程序+H5',
    target: 'target2'
  },
  {
    content: '基于京东APP 10.0 视觉规范',
    target: 'target3',
    location: 'top-end'
  },
  {
    content: '支持定制主题，内置 700+ 个主题变量',
    target: 'target4',
    location: 'top-end'
  }
] as StepOptions[]

test('Tour: base render', async () => {
  const wrapper = mount(
    () => {
      return <Tour modelValue={true} steps={steps1} type="tile" location="bottom-end" />
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  )
  expect(wrapper.find('.nut-popover').exists()).toBeTruthy()
  expect(wrapper.find('.nut-popover-content--bottom-end').exists()).toBeTruthy()
})

test('Tour: custom style', async () => {
  const wrapper = mount(
    () => {
      return <Tour modelValue={true} steps={steps1} theme="dark" bgColor="#f00" />
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  )

  const arrow = wrapper.find('.nut-popover-arrow')
  expect(arrow.html()).toContain('border-bottom-color: #f00')

  const popover = wrapper.find('.nut-popover-content')
  expect(popover.html()).toContain('background: #f00')
})

test('Tour: custom offset', async () => {
  const wrapper = mount(
    () => {
      return <Tour modelValue={true} steps={steps2} type="tile" location="bottom-end" offset={[8, 8]} />
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  )
  const arrow = wrapper.find('.nut-popover-arrow')
  expect(arrow.html()).toContain('right: 52px')
})

test('Tour: slot render', async () => {
  const wrapper = mount(
    () => {
      return (
        <Tour modelValue={true} steps={steps4}>
          {' '}
          Default Slot
          {' '}
        </Tour>
      )
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  )
  const popover = wrapper.find('.nut-popover-content-group')
  expect(popover.text()).toEqual('Default Slot')
})

test('Tour: type=step', async () => {
  const wrapper = mount(
    () => {
      return (
        <div>
          <Tour modelValue={true} steps={steps} type="step" />
          <div id="tour-target1"></div>
          <div id="tour-target2"></div>
        </div>
      )
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  )

  const btn = wrapper.find('.nut-tour-content-bottom-operate-btn')
  expect(btn.exists()).toBeTruthy()

  await btn.trigger('click')

  const btn2 = wrapper.findAll('.nut-tour-content-bottom-operate-btn')
  expect(btn2.length).toBe(2)
})

test('Tour: updates the mask position after scrolling', async () => {
  const target = document.createElement('div')
  target.id = 'tour-scroll-target'
  let top = 100
  target.getBoundingClientRect = () => ({
    width: 100,
    height: 20,
    left: 10,
    top,
    right: 110,
    bottom: top + 20,
    x: 10,
    y: top,
    toJSON: () => ({})
  }) as DOMRect
  document.body.appendChild(target)

  const wrapper = mount(
    () => <Tour modelValue={true} type="tile" steps={[{ target: target.id }]} />,
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  )

  await nextTick()
  const mask = wrapper.find('.nut-tour-mask')
  expect(mask.attributes('style')).toContain('top: 92px')

  top = 40
  window.dispatchEvent(new Event('scroll'))
  await nextTick()
  expect(mask.attributes('style')).toContain('top: 32px')

  wrapper.unmount()
  target.remove()
})
