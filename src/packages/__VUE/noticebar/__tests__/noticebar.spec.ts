import { config, mount } from '@vue/test-utils';
import { nextTick, ref, reactive } from 'vue';
import NoticeBar from '../index.vue';
import NutIcon from '../../icon/index.vue';

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

Object.defineProperty(window.HTMLElement.prototype, 'clientWidth', {
  value: 375
});

test('close event', async () => {
  const wrapper = mount(NoticeBar, {
    props: {
      text: '华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！',
      direction: 'across',
      closeMode: true,
      color: 'red',
      background: 'green',
      delay: 1
    }
  });
  const closeDom = wrapper.find('.right-icon');
  closeDom.trigger('click');
  expect(wrapper.emitted('close')).toBeTruthy();
  wrapper.setProps({
    text: '123'
  });
  await nextTick();
  const content = wrapper.find('.content');
  expect(content.html()).toContain('123');
});

test('slot event', async () => {
  const wrapper = mount(NoticeBar, {
    slots: {
      default: () => 'Custom Content'
    }
  });
  await nextTick();
  const content = wrapper.find('.content');
  expect(content.html()).toContain('Custom Content');
});

test('icon custom', async () => {
  const wrapper = mount({
    components: {
      'nut-noticebar': NoticeBar
    },
    template: `
        <nut-noticebar
        left-icon="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
        :scrollable="false"
      >
        <a href="https://www.jd.com">京东商城</a>
      </nut-noticebar>
    `
  });
  await nextTick();
  expect(wrapper.html()).toMatchSnapshot();
});

test('vertical scroll', async () => {
  const wrapper = mount({
    components: {
      'nut-noticebar': NoticeBar
    },
    template: `
      <nut-noticebar direction='vertical'  :list="horseLamp" ></nut-noticebar>
    `,
    setup() {
      const horseLamp = ref(['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆']);
      return { horseLamp };
    }
  });
  await nextTick();
  expect(wrapper.html()).toMatchSnapshot();
});

test('custon scroll list', async () => {
  const wrapper = mount({
    components: {
      'nut-noticebar': NoticeBar
    },
    template: `
      <nut-noticebar direction='vertical' :height='50' :speed='10' :standTime='1000' :list="[]" >
        <div class="custom-item" v-for="(item,index) in horseLamp" :key="item">{{item}}</div>
      </nut-noticebar>
    `,
    setup() {
      const horseLamp = ref(['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆']);
      return { horseLamp };
    }
  });
  await nextTick();
  expect(wrapper.html()).toMatchSnapshot();
});
