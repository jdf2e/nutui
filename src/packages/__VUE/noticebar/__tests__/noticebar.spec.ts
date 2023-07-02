import { mount } from '@vue/test-utils';
import { nextTick, ref, h } from 'vue';
import Noticebar from '../index.vue';
import { Issue } from '@nutui/icons-vue';

Object.defineProperty(window.HTMLElement.prototype, 'clientWidth', {
  value: 375
});

test('close event', async () => {
  const wrapper = mount(Noticebar, {
    props: {
      text: '华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！',
      direction: 'across',
      closeMode: true,
      color: 'red',
      background: 'green',
      delay: 1
    }
  });
  const closeDom = wrapper.find('.nut-noticebar__page-righticon');
  closeDom.trigger('click');
  expect(wrapper.emitted('close')).toBeTruthy();
  wrapper.setProps({
    text: '123'
  });
  await nextTick();
  const content = wrapper.find('.nut-noticebar__page-wrap-content');
  expect(content.html()).toContain('123');
});

test('across-end event', async () => {
  const wrapper = mount(Noticebar, {
    props: {
      text: 'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
    }
  });
  wrapper.vm.onAnimationEnd();
  expect(wrapper.emitted('across-end')).toBeTruthy();
});

test('slot event', async () => {
  const wrapper = mount(Noticebar, {
    slots: {
      default: () => 'Custom Content'
    }
  });
  await nextTick();
  const content = wrapper.find('.nut-noticebar__page-wrap-content');
  expect(content.html()).toContain('Custom Content');
});

test('icon custom', async () => {
  const wrapper = mount(Noticebar, {
    slots: {
      ['right-icon']: Issue,
      default: h('a', {
        href: 'https://www.jd.com'
      })
    }
  });
  await nextTick();
  expect(wrapper.html()).toMatchSnapshot();
});

test('vertical scroll', async () => {
  const wrapper = mount({
    components: {
      'nut-noticebar': Noticebar
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
      'nut-noticebar': Noticebar
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
