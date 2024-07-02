import { mount } from '@vue/test-utils'
import { Tabbar, TabbarItem } from '@nutui/nutui'
import { nextTick, h, ref } from 'vue'
import { Home, Category, Find } from '@nutui/icons-vue'
import { mockGetBoundingClientRect, sleep } from '@/packages/utils/unit'
import { useRouter } from '@/packages/utils/useRoute'

vi.mock('@/packages/utils/useRoute')
;(useRouter as any).mockReturnValue({
  push: vi.fn()
})

test('Tabbar: should render tabbar when default', async () => {
  const wrapper = mount(() => {
    return (
      <Tabbar>
        <TabbarItem tab-title="首页" icon={h(Home)}></TabbarItem>
        <TabbarItem tab-title="分类" icon={h(Category)}></TabbarItem>
        <TabbarItem tab-title="发现" icon={h(Find)}></TabbarItem>
      </Tabbar>
    )
  })
  await nextTick()
  expect(wrapper.find('.nut-tabbar').exists()).toBe(true)
  expect(wrapper.find('.nut-tabbar-item').exists()).toBe(true)
  expect(wrapper.html()).toMatchSnapshot()
})

test('Tabbar: should render custom img when using img prop', async () => {
  const wrapper = mount(() => {
    return (
      <Tabbar>
        <TabbarItem tab-title="首页">
          {{
            icon: (props: any) =>
              props.active
                ? (
                    <img src="http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg" />
                  )
                : (
                    <img src="http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg" />
                  )
          }}
        </TabbarItem>
        <TabbarItem tab-title="分类">
          {{
            icon: (props: any) =>
              props.active
                ? (
                    <img src="http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg" />
                  )
                : (
                    <img src="http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg" />
                  )
          }}
        </TabbarItem>
      </Tabbar>
    )
  })
  await nextTick()
  const tabbarItemIcon: any = wrapper.findAll('.nut-tabbar-item_icon-box_icon img')
  expect(tabbarItemIcon[0].element.src).toContain('9e557f2cb5c9dab6')
  expect(tabbarItemIcon[1].element.src).toContain('c98ad61124172e93')
})

test('Tabbar: should render custom color and bage when using prop', async () => {
  const wrapper = mount(() => {
    return (
      <Tabbar unactive-color="grey" active-color="blue">
        <TabbarItem tab-title="首页" icon={h(Home)}></TabbarItem>
        <TabbarItem tab-title="分类" icon={h(Category)}></TabbarItem>
        <TabbarItem tab-title="发现" icon={h(Find)}></TabbarItem>
      </Tabbar>
    )
  })
  await nextTick()
  const tabbarItem: any = wrapper.findAll('.nut-tabbar-item')
  expect(tabbarItem.length).toBe(3)
  expect(tabbarItem[0].element.style.color).toEqual('blue')
  expect(tabbarItem[1].element.style.color).toEqual('grey')
  expect(wrapper.find<HTMLElement>('.nut-badge').exists()).toBe(true)
})

test('Tabbar: should render fixed element when using bottom prop', async () => {
  const wrapper = mount(Tabbar, {
    props: {
      bottom: true,
      safeAreaInsetBottom: true
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})
test('Tabbar: should match active tabbar by clcik', async () => {
  const wrapper = mount({
    setup() {
      const active = ref(0)
      return () => (
        <Tabbar unactive-color="grey" active-color="blue" v-model={active.value}>
          <TabbarItem tab-title="首页" icon={h(Home)}></TabbarItem>
          <TabbarItem tab-title="分类" icon={h(Category)}></TabbarItem>
          <TabbarItem tab-title="发现" icon={h(Find)}></TabbarItem>
        </Tabbar>
      )
    }
  })
  const tabbarItem: any = wrapper.findAll('.nut-tabbar-item')

  expect(tabbarItem[0].element.style.color).toEqual('blue')

  await tabbarItem[1].trigger('click')
  expect(tabbarItem[1].element.style.color).toEqual('blue')
  await tabbarItem[2].trigger('click')
  expect(tabbarItem[2].element.style.color).toEqual('blue')
})

test('Tabbar: should show sure emitted when click', async () => {
  const tabSwitch = vi.fn()
  const wrapper = mount(() => {
    return (
      <Tabbar onTabSwitch={tabSwitch}>
        <TabbarItem tab-title="首页" icon={h(Home)}></TabbarItem>
        <TabbarItem tab-title="分类" icon={h(Category)}></TabbarItem>
        <TabbarItem tab-title="发现" icon={h(Find)}></TabbarItem>
      </Tabbar>
    )
  })
  const tabbarItem: any = wrapper.findAll('.nut-tabbar-item')
  await tabbarItem[1].trigger('click')
  await nextTick()
  expect(tabSwitch).toBeCalled()
})

test('Tabbar: should render placeholder when using placeholder and bottom prop', async () => {
  const wrapper = mount(Tabbar, {
    props: {
      bottom: true,
      placeholder: true
    }
  })
  mockGetBoundingClientRect({ height: 40 })
  await sleep(500)
  expect(wrapper.html()).toMatchSnapshot()
})

test('Tabbar: should redirect when exist router and using to prop', async () => {
  const wrapper = mount(() => {
    return (
      <Tabbar>
        <TabbarItem tab-title="首页" icon={h(Home)} to="/home"></TabbarItem>
        <TabbarItem tab-title="分类" icon={h(Category)} to="/category"></TabbarItem>
        <TabbarItem tab-title="发现" icon={h(Find)} to="/category"></TabbarItem>
      </Tabbar>
    )
  })
  const tabbarItem: any = wrapper.findAll('.nut-tabbar-item')
  await tabbarItem[1].trigger('click')
  expect(useRouter().push).toHaveBeenCalledTimes(1)
  expect(useRouter().push).toHaveBeenCalledWith('/category')
})

test('Tabbar: should call replace when no router exist and using to prop', async () => {
  (useRouter as any).mockReturnValue(undefined)

  const wrapper = mount(() => {
    return (
      <Tabbar>
        <TabbarItem tab-title="首页" icon={h(Home)} to="/home"></TabbarItem>
        <TabbarItem tab-title="分类" icon={h(Category)} to="/category"></TabbarItem>
        <TabbarItem tab-title="发现" icon={h(Find)} to="/category"></TabbarItem>
      </Tabbar>
    )
  })
  location.replace = vi.fn()
  const tabbarItem: any = wrapper.findAll('.nut-tabbar-item')
  await tabbarItem[1].trigger('click')
  expect(location.replace).toHaveBeenCalledWith('/category')
})

test('Tabbar: should set window.location.href when using href prop', async () => {
  const wrapper = mount(() => {
    return (
      <Tabbar>
        <TabbarItem tab-title="首页" icon={h(Home)} href="/home"></TabbarItem>
        <TabbarItem tab-title="分类" icon={h(Category)} href="/category"></TabbarItem>
        <TabbarItem tab-title="发现" icon={h(Find)} href="/find"></TabbarItem>
      </Tabbar>
    )
  })
  const tabbarItem: any = wrapper.findAll('.nut-tabbar-item')
  await tabbarItem[1].trigger('click')
  expect(window.location.href).toMatch('/category')
})

test('Tabbar: props.beforeSwitch', async () => {
  const val = ref(0)
  const beforeSwitch = (_: any, index: string | number) => {
    return Number(index) % 2 === 0
  }
  const wrapper = mount(() => {
    return (
      <Tabbar v-model={val.value} beforeSwitch={beforeSwitch}>
        <TabbarItem tab-title="首页" icon={h(Home)}></TabbarItem>
        <TabbarItem tab-title="分类" icon={h(Category)}></TabbarItem>
        <TabbarItem tab-title="发现" icon={h(Find)}></TabbarItem>
      </Tabbar>
    )
  })
  const items = wrapper.findAll('.nut-tabbar-item')
  expect(items.length).toBe(3)
  items[2].trigger('click')
  await nextTick()
  expect(val.value).toBe(2)

  items[1].trigger('click')
  await nextTick()
  expect(val.value).toBe(2)
})
