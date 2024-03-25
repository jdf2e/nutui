import { mount } from '@vue/test-utils'
import { ImagePreview } from '@nutui/nutui'
import { nextTick } from 'vue'
import { sleep } from '@/packages/utils/unit'

const images = [
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
  }
]

test('basic usage test', async () => {
  const wrapper = mount(ImagePreview, {
    props: {
      show: true,
      images
    }
  })
  await nextTick()
  expect((wrapper.find('.nut-image-preview-custom-pop').element as any).style.display).toEqual('')
})

test('test autoplay', async () => {
  const wrapper = mount(ImagePreview, {
    props: {
      show: true,
      images,
      autoplay: 3000
    }
  })

  await nextTick()

  expect(wrapper.vm.active).toBe(0)

  setTimeout(() => {
    expect(wrapper.vm.active).toBe(1)
  }, 3000)
})

test('init page No.', async () => {
  const wrapper = mount(ImagePreview, {
    props: {
      show: true,
      images,
      initNo: 3
    }
  })
  await nextTick()
  expect(wrapper.find('.nut-image-preview-index').text()).toEqual('4 / 4')
})

test('customize pagination and color', async () => {
  const wrapper = mount(ImagePreview, {
    props: {
      show: true,
      images,
      paginationVisible: true,
      paginationColor: 'red'
    }
  })
  await nextTick()
  const swiperPagination = wrapper.find('.nut-swiper-pagination')
  expect(swiperPagination.exists()).toBe(true)
  expect(swiperPagination.findAll('i')[0].element.style.backgroundColor).toEqual('red')
})

test('dynamic images', async () => {
  const wrapper = mount(ImagePreview, {
    props: {
      show: true,
      images: []
    }
  })
  await nextTick()
  wrapper.setProps({
    images
  })
  await sleep(1)
  expect((wrapper.find('.nut-swiper-inner').element as any).style.transform).toEqual('translateX(0px)')
})
