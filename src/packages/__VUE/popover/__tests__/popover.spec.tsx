import { mount } from '@vue/test-utils'
import { Popover } from '@nutui/nutui'
import { ref, nextTick } from 'vue'
import { sleep } from '@/packages/utils/unit'

const list = [{ name: 'option1' }, { name: 'option2' }, { name: 'option3' }]

const listDisabled = [{ name: 'option1', disabled: true }, { name: 'option2', disabled: true }, { name: 'option3' }]

test('Popover: first render', async () => {
  const wrapper = mount(
    () => {
      return <Popover visible={true} list={list} />
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  )
  expect(wrapper.find('.nut-popover-menu-item').exists()).toBeTruthy()
})

test('Popover: theme=dark', async () => {
  const wrapper = mount(
    () => {
      return <Popover visible={true} list={list} theme="dark" />
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  )
  expect(wrapper.find('.nut-popover--dark').exists()).toBeTruthy()
})

test('Popover: disabled', async () => {
  const wrapper = mount(
    () => {
      return <Popover visible={true} list={listDisabled} theme="dark" />
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  )
  expect(wrapper.findAll('.nut-popover-menu-disabled').length).toEqual(2)

  wrapper.find('.nut-popover-menu-item').trigger('click')
  expect(wrapper.emitted('choose')).toBeFalsy()
})

test('Popover: should close popover when clicking the action', async () => {
  const show = ref(true)
  const close = ref(true)
  const wrapper = mount(
    () => {
      return <Popover v-model:visible={show.value} list={list} closeOnClickAction={close.value} />
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  )
  const items = wrapper.findAll('.nut-popover-menu-item')
  await items[0].trigger('click')
  expect(show.value).toEqual(false)

  show.value = true
  close.value = false
  await nextTick()
  expect(show.value).toEqual(true)
  const item = wrapper.find('.nut-popover-menu-item')
  await item.trigger('click')
  expect(show.value).toEqual(true)
})

test('Popover: position=top-start', async () => {
  const wrapper = mount(
    () => {
      return <Popover visible={true} list={list} location="top-start" />
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  )
  expect(wrapper.find('.nut-popover-arrow--top-start').exists()).toBeTruthy()
})

test('Popover: position=left-end', async () => {
  const wrapper = mount(
    () => {
      return <Popover visible={true} list={list} location="left-end" />
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  )
  expect(wrapper.find('.nut-popover-arrow--left-end').exists()).toBeTruthy()
})

test('Popover: target', async () => {
  const p = document.createElement('div')
  p.id = 'popover-target'
  p.getBoundingClientRect = vi.fn(() => {
    return {
      width: 300,
      height: 100,
      left: 0,
      top: 0,
      right: 300
    } as DOMRect
  })
  document.body.appendChild(p)
  const show = ref(false)
  const wrapper = mount(
    () => {
      return (
        <Popover v-model:visible={show.value} duration={0} targetId="popover-target" list={list} arrowOffset={16} />
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
  show.value = true
  await sleep(200)
  const popoverWrapper = wrapper.find('.nut-popover')
  expect(popoverWrapper.attributes('style')).contain('top: 112px;')
  expect(popoverWrapper.attributes('style')).contain('left: 150px;')
})
