import { mount, shallowMount } from '@vue/test-utils';
import Swiper from '../index.vue';
import SwiperItem from './../../swiperitem/index.vue';
import { nextTick, toRefs, reactive } from 'vue';

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

test('should render width and height', async () => {
  const wrapper = mount({
    components: {
      'nut-swiper': Swiper,
      'nut-swiper-item': SwiperItem
    },
    template: `
        <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="2000" :height="height">
          <nut-swiper-item v-for="item in list" :key="item">
            <img :src="item" alt="" />
          </nut-swiper-item>
        </nut-swiper>
    `,
    setup() {
      const state = reactive({
        page: 1,
        height: '500',
        list: [
          'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        ]
      });

      return { ...toRefs(state) };
    }
  });

  await nextTick();
  await nextTick();

  const swiperItem = wrapper.findAll('.nut-swiper-inner')[0].element as HTMLElement;

  expect(swiperItem.style.height).toEqual(`${wrapper.vm.height}px`);
  expect(swiperItem.style.width).toEqual(`${window.innerWidth * wrapper.vm.list.length}px`);
});

test('should render initpage', async () => {
  const wrapper = mount({
    components: {
      'nut-swiper': Swiper,
      'nut-swiper-item': SwiperItem
    },
    template: `
        <nut-swiper :init-page="page" :width="width">
          <nut-swiper-item v-for="item in list" :key="item">
            <img :src="item" alt="" />
          </nut-swiper-item>
        </nut-swiper>
    `,
    setup() {
      const state = reactive({
        page: 2,
        width: 375,
        list: [
          'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        ]
      });

      return { ...toRefs(state) };
    }
  });

  await nextTick();
  await nextTick();
  const swiperItem = wrapper.findAll('.nut-swiper-inner')[0].element as HTMLElement;

  expect(swiperItem.style.transform).toEqual(`translateX(-${wrapper.vm.width * wrapper.vm.page}px)`);
});

test('should render direction', async () => {
  const wrapper = mount({
    components: {
      'nut-swiper': Swiper,
      'nut-swiper-item': SwiperItem
    },
    template: `
        <nut-swiper :init-page="page" :height="height" :direction="direction">
          <nut-swiper-item v-for="item in list" :key="item">
            <img :src="item" alt="" />
          </nut-swiper-item>
        </nut-swiper>
    `,
    setup() {
      const state = reactive({
        page: 1,
        height: 300,
        direction: 'vertical',
        list: [
          'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        ]
      });

      return { ...toRefs(state) };
    }
  });

  await nextTick();
  await nextTick();

  const swiperItem = wrapper.findAll('.nut-swiper-inner')[0].element as HTMLElement;

  expect(swiperItem.style.transform).toEqual(`translateY(-${wrapper.vm.height * wrapper.vm.page}px)`);
});

test('should render pagination', async () => {
  const wrapper = mount({
    components: {
      'nut-swiper': Swiper,
      'nut-swiper-item': SwiperItem
    },
    template: `
        <nut-swiper :init-page="page" :pagination-visible="paginationVisible" :pagination-color="paginationColor">
          <nut-swiper-item v-for="item in list" :key="item">
            <img :src="item" alt="" />
          </nut-swiper-item>
        </nut-swiper>
    `,
    setup() {
      const state = reactive({
        page: 0,
        paginationVisible: true,
        paginationColor: 'red',
        list: [
          'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        ]
      });

      return { ...toRefs(state) };
    }
  });

  await nextTick();
  await nextTick();

  const swiperPagination = wrapper.find('.nut-swiper-pagination');
  expect(swiperPagination.exists()).toBe(true);
  expect(swiperPagination.findAll('i')[0].element.style.backgroundColor).toEqual('red');
});

test('should render loop and auto-play', async () => {
  const onChange = jest.fn();
  const wrapper = mount({
    props: {
      onChange
    },
    emits: ['change'],
    components: {
      'nut-swiper': Swiper,
      'nut-swiper-item': SwiperItem
    },
    template: `
        <nut-swiper :init-page="page" :auto-play="autoPlay" :width="width" @change="change">
          <nut-swiper-item v-for="item in list" :key="item">
            <img :src="item" alt="" />
          </nut-swiper-item>
        </nut-swiper>
    `,
    setup() {
      const state = reactive({
        page: 0,
        autoPlay: 100,
        width: 375,
        list: [
          'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        ]
      });

      const change = (index: number) => {
        state.page = index;
      };

      return { ...toRefs(state), change };
    }
  });

  await nextTick();

  await sleep(200);
  // const swiperItem = wrapper.findAll('.nut-swiper-inner')[0].element as HTMLElement;
  expect(wrapper.vm.page).toBe(1);
  // expect(swiperItem.style.transform).toEqual(`translateX(-${wrapper.vm.width * wrapper.vm.page}px)`);
  // await sleep(200);
  // expect(wrapper.vm.page).toBe(2);
});

test('should not allow to drag when touchable is false', async () => {
  const onChange = jest.fn();
  const wrapper = mount(Swiper, {
    props: {
      onChange,
      touchable: false
    }
  });

  const track = wrapper.find('.nut-swiper-inner');

  track.trigger('drag');
  expect(onChange).toHaveBeenCalledTimes(0);
});

test('should not allow to drag when loop is false', async () => {
  const wrapper = mount({
    emits: ['change'],
    components: {
      'nut-swiper': Swiper,
      'nut-swiper-item': SwiperItem
    },
    template: `
        <nut-swiper :init-page="page" :auto-play="autoPlay" :width="width" :loop="loop" @change="change">
          <nut-swiper-item v-for="item in list" :key="item">
            <img :src="item" alt="" />
          </nut-swiper-item>
        </nut-swiper>
    `,
    setup() {
      const state = reactive({
        page: 3,
        autoPlay: 100,
        width: 375,
        loop: false,
        list: [
          'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        ]
      });

      const change = (index: number) => {
        state.page = index;
      };

      return { ...toRefs(state), change };
    }
  });

  await nextTick();

  await sleep(2000);
  expect(wrapper.vm.page).toBe(3);
});

test('should swiper to prev swiper after calling prev method', async () => {
  const wrapper = mount({
    components: {
      'nut-swiper': Swiper,
      'nut-swiper-item': SwiperItem
    },
    template: `
        <nut-swiper :init-page="page" :auto-play="autoPlay" @change="change" ref="swiper">
          <nut-swiper-item v-for="item in list" :key="item">
            <img :src="item" alt="" />
          </nut-swiper-item>
        </nut-swiper>
    `,
    setup() {
      const state = reactive({
        page: 3,
        autoPlay: 0,
        list: [
          'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        ]
      });

      const change = (index: number) => {
        state.page = index;
      };

      return { ...toRefs(state), change };
    }
  });

  await nextTick();

  const { swiper } = wrapper.vm.$refs as any;
  swiper.prev();
  await sleep(1000);
  expect(wrapper.vm.page).toBe(2);
});

test('should swiper to swiper after calling to method', async () => {
  const wrapper = mount({
    components: {
      'nut-swiper': Swiper,
      'nut-swiper-item': SwiperItem
    },
    template: `
        <nut-swiper :init-page="page" :auto-play="autoPlay" @change="change" ref="swiper">
          <nut-swiper-item v-for="item in list" :key="item">
            <img :src="item" alt="" />
          </nut-swiper-item>
        </nut-swiper>
    `,
    setup() {
      const state = reactive({
        page: 3,
        autoPlay: 0,
        list: [
          'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        ]
      });

      const change = (index: number) => {
        state.page = index;
      };

      return { ...toRefs(state), change };
    }
  });

  await nextTick();

  const { swiper } = wrapper.vm.$refs as any;
  swiper.to(1);
  await sleep(1000);
  expect(wrapper.vm.page).toBe(1);
});
