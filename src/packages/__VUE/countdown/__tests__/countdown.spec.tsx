import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import { Button, Countdown } from '@nutui/nutui'
import { sleep } from '@/packages/utils/unit'

test('Countdown: endTime props', async () => {
  const wrapper = mount(Countdown, {
    props: {
      endTime: Date.now() + 1 * 50
    }
  })
  expect(wrapper.emitted('end')).toBeFalsy()
  await sleep(51)
  expect(wrapper.emitted('end')).toBeTruthy()
})

test('Countdown: format props', async () => {
  const wrapper = mount(Countdown, {
    props: {
      endTime: Date.now() + 1 * 50,
      format: 'DD天HH时mm分ss秒'
    }
  })
  await nextTick()
  expect(wrapper.find('.nut-countdown__content').exists()).toBeTruthy()
  const prevSnapShot = wrapper.find('.nut-countdown__content')
  expect(prevSnapShot.text() == '00天00时00分00秒').toBe(true)

  wrapper.setProps({ format: 'DD天', endTime: Date.now() + 1 * 50 })
  await nextTick()
  expect(wrapper.find('.nut-countdown__content').text() == '00天').toBe(true)

  wrapper.setProps({ format: 'HH时', endTime: Date.now() + 1 * 50 })
  await nextTick()
  expect(wrapper.find('.nut-countdown__content').text() == '00时').toBe(true)

  wrapper.setProps({ format: 'mm分', endTime: Date.now() + 1 * 50 })
  await nextTick()
  expect(wrapper.find('.nut-countdown__content').text() == '00分').toBe(true)

  wrapper.setProps({ format: 'ss秒', endTime: Date.now() + 1 * 50 })
  await nextTick()
  expect(wrapper.find('.nut-countdown__content').text() == '00秒').toBe(true)

  wrapper.setProps({ format: 'S毫秒', endTime: Date.now() + 1 * 50 })
  await nextTick()
  expect(wrapper.find('.nut-countdown__content').text() == '0毫秒').toBe(true)

  wrapper.setProps({ format: 'SS毫秒', endTime: Date.now() + 1 * 50 })
  await nextTick()
  expect(wrapper.find('.nut-countdown__content').text() == '00毫秒').toBe(true)

  wrapper.setProps({ format: 'SSS毫秒', endTime: Date.now() + 1 * 50 })
  await nextTick()
  expect(wrapper.find('.nut-countdown__content').text() == '000毫秒').toBe(true)
})

test('Countdown: paused props', async () => {
  const paused = ref(false)
  const endTime = ref(Date.now() + 1 * 50)
  const toggle = () => {
    paused.value = !paused.value
  }
  const wrapper = mount(() => {
    return (
      <>
        <Countdown endTime={endTime.value} paused={paused.value} />
        <Button onClick={toggle}>{paused.value ? 'start' : 'stop'}</Button>
      </>
    )
  })

  const button = wrapper.find('.nut-button')
  const prevSnapShot = wrapper.find('.nut-countdown').html()
  await button.trigger('click')
  await nextTick()
  const laterShapShot = wrapper.find('.nut-countdown').html()
  expect(button.text() == 'start').toBe(true)
  expect(prevSnapShot === laterShapShot).toBeTruthy()
})

test('Countdown: should render slot correctly', async () => {
  const wrapper = mount(Countdown, {
    props: {
      endTime: Date.now() + 1 * 50
    },
    slots: {
      default: () => 'slot content'
    }
  })
  expect(wrapper.text()).toEqual('slot content')
})

test('Countdown: should render slot correctly', async () => {
  const wrapper = mount(Countdown, {
    props: {
      endTime: Date.now() + 1 * 50
    },
    slots: {
      default: () => 'slot content'
    }
  })
  expect(wrapper.text()).toEqual('slot content')
})

test('Countdown: ref methods', async () => {
  const countdownRef = ref()
  const start = () => {
    countdownRef.value.start()
  }
  const pause = () => {
    countdownRef.value.pause()
  }
  const reset = () => {
    countdownRef.value.reset()
  }
  const restart = vi.fn()
  const paused = vi.fn()
  const wrapper = mount(() => {
    return (
      <>
        <Countdown
          ref={countdownRef}
          time="20000"
          autoStart={false}
          format="ss:SS"
          onRestart={restart}
          onPaused={paused}
        />
        <Button class="start" onClick={start} />
        <Button class="pause" onClick={pause} />
        <Button class="reset" onClick={reset} />
      </>
    )
  })
  const countdown = wrapper.find('.nut-countdown__content')
  expect(countdown.text()).toBe('20:00')

  const btn1 = wrapper.find('.start')
  btn1.trigger('click')
  expect(restart).toBeCalledTimes(1)
  expect(paused).toBeCalledTimes(0)

  const btn2 = wrapper.find('.pause')
  btn2.trigger('click')
  expect(restart).toBeCalledTimes(1)
  expect(paused).toBeCalledTimes(1)

  const btn3 = wrapper.find('.pause')
  btn3.trigger('click')
  expect(countdown.text()).toBe('20:00')
})
