import { mount } from '@vue/test-utils'
import { Skeleton } from '@nutui/nutui'

test('Skeleton: should render with row‘s father content width correctly', () => {
  const wrapper = mount(() => {
    return <Skeleton width="100px" />
  })
  const skeleton = wrapper.find('.nut-skeleton-content__line')
  expect(skeleton.attributes('style')).includes('width: 100px')
})

test('Skeleton: should allow to disable animation', async () => {
  const wrapper = mount(() => {
    return <Skeleton row={1} />
  })

  expect(wrapper.find('.nut-skeleton').exists()).toBeTruthy()

  await wrapper.setProps({ animated: false })
  expect(wrapper.find('.skeleton-animation').exists()).toBeFalsy()
})

test('Skeleton: should change avatar size when using avatarSize prop', () => {
  const wrapper = mount(() => {
    return <Skeleton avatar avatarSize="20px" />
  })

  const avatar = wrapper.find('.avatarClass')
  expect(avatar.attributes('style')).includes('width: 20px')
  expect(avatar.attributes('style')).includes('height: 20px')
})

test('Skeleton: should change avatar shape when using avatarShape prop', () => {
  const wrapper = mount(() => {
    return <Skeleton avatar avatarShape="square" />
  })
  expect(wrapper.find('.avatarClass').html()).toMatchSnapshot()
})

test('Skeleton: should be round when using round prop', () => {
  const wrapper = mount(() => {
    return <Skeleton title round avatar />
  })
  expect(wrapper.find('.avatarClass').exists()).toBeTruthy()
})

test('Skeleton: should render default slot', () => {
  const wrapper = mount(() => {
    return (
      <Skeleton loading={false}>
        content
      </Skeleton>
    )
  })
  expect(wrapper.html()).includes('content')
})

test('Skeleton: should render correctly when title uses false', () => {
  const wrapper = mount(() => {
    return <Skeleton title={false} row={1} />
  })
  const content = wrapper.find('.nut-skeleton-content__line')

  expect(content.find('.nut-skeleton-blockTitle').exists()).toBeFalsy()
  expect(content.findAll('.nut-skeleton-blockLine').length).toBe(1)
})
