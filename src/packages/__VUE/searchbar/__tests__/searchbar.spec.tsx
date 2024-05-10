import { mount } from '@vue/test-utils'
import { Searchbar } from '@nutui/nutui'
import { ref } from 'vue'

test('Searchbar: basic usage', () => {
  const wrapper = mount(() => <Searchbar modelValue="123" />)
  expect(wrapper.find('.nut-searchbar').html()).toMatchSnapshot()
})

test('Searchbar: should limit maxlength of input value when using maxlength prop', async () => {
  const val = ref('9999')
  const wrapper = mount(() => <Searchbar maxLength={3} v-model={val.value} />)

  const input = wrapper.find('input')
  input.trigger('input')
  expect(val.value).toBe('999')
})

test('Searchbar: should format input value when type is number', () => {
  const val = ref('')
  const wrapper = mount(() => <Searchbar inputType="number" v-model={val.value} />)
  const input = wrapper.find('input')
  input.element.value = '1'
  input.trigger('input')
  expect(val.value).toBe('1')

  input.element.value = '12'
  input.trigger('input')
  expect(val.value).toBe('12')
})

test('Searchbar: backgrounds prop test', () => {
  const wrapper = mount(() => {
    return <Searchbar modelValue="" background="red" inputBackground="green" />
  })
  const outer = wrapper.find('.nut-searchbar')
  const inner = wrapper.find('.nut-searchbar__search-input')
  expect(outer.attributes('style')).includes('background: red')
  expect(inner.attributes('style')).includes('background: green')
})

test('Searchbar: change event test', async () => {
  const change = vi.fn()
  const wrapper = mount(() => <Searchbar modelValue="" onChange={change} />)

  const input = wrapper.find('input')
  await input.trigger('input')
  expect(change).toBeCalled()
})

test('Searchbar: focus event focus', async () => {
  const focus = vi.fn()
  const wrapper = mount(() => {
    return <Searchbar modelValue="" onFocus={focus} />
  })

  const input = wrapper.find('input')
  await input.trigger('focus')
  expect(focus).toBeCalled()
})

test('Searchbar: blur event test', async () => {
  const blur = vi.fn()
  const wrapper = mount(() => {
    return <Searchbar modelValue="" onBlur={blur} />
  })

  const input = wrapper.find('input')
  await input.trigger('blur')
  expect(blur).toBeCalled()
})

test('Searchbar: clear event test', async () => {
  const val = ref('3')
  const wrapper = mount(() => <Searchbar v-model={val.value} />)
  const input = wrapper.find('input')
  const clear = wrapper.find('.nut-searchbar__input-clear')
  wrapper.find('input').trigger('input')
  expect(input.element.value).toBe('3')
  await clear.trigger('click')
  expect(val.value).toBe('')
  expect(clear.exists()).toBe(true)
})

test('Searchbar: props shape', async () => {
  const wrapper1 = mount(() => <Searchbar shape="square" />)
  const wrapper2 = mount(() => <Searchbar />)
  const input1 = wrapper1.find('.nut-searchbar__search-input')
  const input2 = wrapper2.find('.nut-searchbar__search-input')
  expect(input1.html()).includes('square')
  expect(input2.html()).includes('round')
})

test('Searchbar: slots', async () => {
  const wrapper = mount(() => (
    <Searchbar>
      {{
        leftout: 'slot leftout',
        leftin: 'slot leftin',
        rightout: 'slot rightout',
        rightin: 'slot rightin'
      }}
    </Searchbar>
  ))
  const leftout = wrapper.find('.nut-searchbar__left-search-icon')
  expect(leftout.html()).includes('slot leftout')

  const leftin = wrapper.find('.nut-searchbar__iptleft-search-icon')
  expect(leftin.html()).includes('slot leftin')

  const rightout = wrapper.find('.nut-searchbar__right-search-icon')
  expect(rightout.html()).includes('slot rightout')

  const rightin = wrapper.find('.nut-searchbar__iptright-search-icon')
  expect(rightin.html()).includes('slot rightin')
})
