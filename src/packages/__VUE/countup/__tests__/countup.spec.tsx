import { mount } from '@vue/test-utils'
import { Countup } from '@nutui/nutui'
import { nextTick } from 'vue'
import { sleep } from '@/packages/utils/unit'

const img = 'https://img10.360buyimg.com/imagetools/jfs/t1/121466/20/6784/28830/5f06e7f2Edbb8998c/9bdd9e7b24dff9fe.png'

test('basic usage props init-num end-num speed', async () => {
  const wrapper = mount(() => <Countup initNum={0} endNum={4} speed={3} />)
  const countupWrapper = wrapper.find('.nut-countup').element as Element
  await nextTick()
  expect(countupWrapper.textContent).toBe('0')

  await sleep(1000)
  const cur = countupWrapper.textContent
  const differenceNum = Number(cur)
  expect(differenceNum % 3).toBe(0)

  await sleep(3000)
  expect(countupWrapper.textContent).toBe('4')
})

test('basic usage props decimal places', async () => {
  const wrapper = mount(() => <Countup initNum={200} endNum={0} speed={6.18} toFixed={2} />)
  await nextTick()
  const countupWrapper = wrapper.find('.nut-countup').element as Element
  await sleep(1000)
  const num = countupWrapper.textContent
  const len = num?.toString().split('.')[1]
  expect(len?.length).toBe(2)
})

test('digital scrolling during props', async () => {
  const wrapper = mount(() => <Countup scrolling initNum={17.618} numWidth={30} numHeight={30} during={600} />)
  await nextTick()
  await sleep(1000)

  expect(wrapper.findAll('.nut-countup__number')).toHaveLength(1)

  const numberItemList = wrapper.findAll('.nut-countup__number-item')
  const numItem = numberItemList[numberItemList.length - 1].element as HTMLElement
  expect(numItem.style.transition).toEqual(`all linear 600ms`)

  const itemSpan = wrapper.find('.nut-countup__number-item__span').element as HTMLElement
  expect(itemSpan.style.width).toBe('30px')
  expect(itemSpan.style.height).toBe('30px')
})

test('custom img size props', async () => {
  const wrapper = mount(() => <Countup numHeight={47} customChangeNum={618} customBgImg={img} customSpacNum={5} />)
  await nextTick()
  await sleep(1000)
  const numberItemList = wrapper.findAll('.nut-countup__numberimg__item')
  const ele = numberItemList[0].element as HTMLElement
  const _y = Math.abs(parseFloat(ele.style.backgroundPositionY))
  const _num = Number(String(618).charAt(0))
  const __y = _num * 47 + 5 * _num
  expect(_y).toBe(__y)
})
