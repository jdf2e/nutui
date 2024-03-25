import { mount } from '@vue/test-utils'
import { h, nextTick } from 'vue'
import { Avatar, AvatarGroup } from '@nutui/nutui'

test('Avatar: size props', async () => {
  const wrapper = mount(Avatar, {
    props: {
      size: 'small'
    }
  })
  const avatar: any = wrapper.find('.nut-avatar')
  expect(avatar.classes()).toContain('nut-avatar-small')
  await wrapper.setProps({ size: 'large' })
  expect(avatar.classes()).toContain('nut-avatar-large')
  await wrapper.setProps({ size: '30' })
  expect(avatar.element.style.width).toBe('30px')
})

test('Avatar: shape props', () => {
  const wrapper = mount(Avatar, {
    props: {
      shape: 'square'
    }
  })
  const avatar: any = wrapper.find('.nut-avatar')
  expect(avatar.classes()).toContain('nut-avatar-square')
})

test('Avatar: bgColor props', () => {
  const wrapper = mount(Avatar, {
    props: {
      bgColor: '#000000'
    }
  })
  const avatar: any = wrapper.find('.nut-avatar')
  expect(avatar.element.style.backgroundColor).toBe('#000000')
})

test('Avatar: color props', async () => {
  const wrapper = mount(Avatar, {
    props: {
      color: 'rgb(153, 153, 153)'
    }
  })
  const avatar: any = wrapper.find('.nut-avatar')
  expect(avatar.element.style.color).toBe('rgb(153, 153, 153)')
})

test('Avatar: default slot', async () => {
  const wrapper = mount(Avatar, {
    slots: {
      default: h('img', {
        src: 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
      })
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('Avatar: click event', () => {
  const wrapper = mount(Avatar)
  const avatar: any = wrapper.find('.nut-avatar')
  avatar.trigger('click')
  expect(wrapper.emitted('click')).toHaveLength(1)
})

test('Avatar: avatar group render', () => {
  const wrapper = mount(() => {
    return (
      <AvatarGroup>
        <Avatar>1</Avatar>
        <Avatar>2</Avatar>
        <Avatar>3</Avatar>
        <Avatar>4</Avatar>
        <Avatar>5</Avatar>
      </AvatarGroup>
    )
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('Avatar: avatar group max-count', async () => {
  const wrapper = mount(() => {
    return (
      <AvatarGroup maxCount={3} span="4" zIndex="right">
        <Avatar>1</Avatar>
        <Avatar>2</Avatar>
        <Avatar>3</Avatar>
        <Avatar>4</Avatar>
        <Avatar>5</Avatar>
      </AvatarGroup>
    )
  })
  await nextTick()
  const list = wrapper.findAllComponents(Avatar)
  expect(list).toHaveLength(6)
  expect(list[4].attributes('style')).includes('display: none')
})
