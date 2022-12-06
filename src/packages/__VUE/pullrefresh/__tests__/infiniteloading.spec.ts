import { config, mount } from '@vue/test-utils';
import InfiniteLoading from '../index.vue';
import NutIcon from '../../icon/index.vue';
import { trigger, triggerDrag } from '../../../utils/test/event';
import { nextTick, toRefs, reactive, ref, onMounted } from 'vue';

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

test('pull base', async () => {
  const wrapper = mount(InfiniteLoading, {
    props: {
      isOpenRefresh: true,
      loadMoreTxt: '没有更多'
    }
  });
  const track = wrapper.find('.nut-infiniteloading');
  // pulling
  trigger(track, 'touchstart', 0, 0);
  trigger(track, 'touchmove', 0, 20);
  expect(wrapper.html()).toMatchSnapshot();

  // loading
  trigger(track, 'touchend', 0, 100);
  expect(wrapper.html()).toMatchSnapshot();

  // still loading
  triggerDrag(track, 0, 100);

  expect(wrapper.emitted('refresh')).toBeTruthy();
});

test('infiniteloading base', async () => {
  const wrapper = mount({
    components: {
      'nut-infiniteloading': InfiniteLoading,
      'nut-icon': NutIcon
    },
    template: `
    <nut-infiniteloading
      :has-more="hasMore"
      load-more-txt="没有啦～"
      @load-more="loadMore">
        <li class="infiniteLi" v-for="(item, index) in defultList" :key="index">{{item}}</li>
    </nut-infiniteloading>
    `,
    setup() {
      const hasMore = ref(true);
      const data = reactive({
        defultList: []
      });
      const init = () => {
        for (let i = 0; i < 10; i++) {
          (data.defultList as any).push(i);
        }
      };
      const loadMore = (done: any) => {
        setTimeout(() => {
          const curLen = data.defultList.length;
          for (let i = curLen; i < curLen + 10; i++) {
            (data.defultList as any).push(i);
          }
          if (data.defultList.length > 30) hasMore.value = false;
          done();
        }, 500);
      };
      onMounted(() => {
        init();
      });

      return { ...toRefs(data), hasMore, loadMore };
    }
  });
  const track = wrapper.find('.nut-infiniteloading');
  await nextTick();
  trigger(track, 'touchstart', 0, 0);
  trigger(track, 'touchmove', 0, -100);
  trigger(track, 'touchend', 0, -800);

  triggerDrag(track, 0, -800);
  await nextTick();
  expect(wrapper.html()).toMatchSnapshot();
});
