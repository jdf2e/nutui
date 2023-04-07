import { mount } from '@vue/test-utils';
import InfiniteLoading from '../index.vue';
import { toRefs, reactive, ref, onMounted } from 'vue';

test('infiniteloading base', async () => {
  const wrapper = mount({
    components: {
      'nut-infinite-loading': InfiniteLoading
    },
    template: `
    <div class="box" style="height:300px;overflow:auto">
      <nut-infinite-loading
        v-model="infiteValue"
        :has-more="hasMore"
        load-more-txt="没有啦～"
        @load-more="loadMore">
          <div style='height: 50px;' v-for="(item, index) in defultList" :key="index">{{item}}</div>
      </nut-infinite-loading>
    </div>
    `,
    setup() {
      const hasMore = ref(true);
      const infiteValue = ref(false);
      const data = reactive({
        defultList: []
      });
      const init = () => {
        for (let i = 0; i < 10; i++) {
          (data.defultList as any).push(i);
        }
      };
      const loadMore = () => {
        setTimeout(() => {
          const curLen = data.defultList.length;
          for (let i = curLen; i < curLen + 10; i++) {
            (data.defultList as any).push(i);
          }
          if (data.defultList.length > 30) hasMore.value = false;
        }, 500);
      };
      onMounted(() => {
        init();
      });

      return { ...toRefs(data), infiteValue, hasMore, loadMore };
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});
