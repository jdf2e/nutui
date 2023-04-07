import { mount } from '@vue/test-utils';
import Steps from '../index.vue';
import Step from '../../step/index.vue';
import Button from '../../button/index.vue';
import { Service, People, Location2 } from '@nutui/icons-vue';
import { nextTick, toRefs, reactive } from 'vue';

test('should render horizontal class when props direction is to be horizontal', () => {
  const wrapper = mount(Steps, {
    props: {
      direction: 'horizontal'
    }
  });

  expect(wrapper.classes()).toContain('nut-steps-horizontal');
});

test('should first step checked when props current is to be 1', async () => {
  const wrapper = mount({
    components: {
      'nut-steps': Steps,
      'nut-step': Step
    },
    template: `
      <nut-steps current="1">
        <nut-step title="步骤一">1</nut-step>
        <nut-step title="步骤二">2</nut-step>
        <nut-step title="步骤三">3</nut-step>
      </nut-steps>
    `
  });

  await nextTick();

  const stepItem = wrapper.findAll('.nut-step')[0];
  expect(stepItem.classes()).toContain('nut-step-process');
});

test('should render dot class when props progressDot is to be true', async () => {
  const wrapper = mount(Steps, {
    props: {
      progressDot: true
    }
  });

  expect(wrapper.classes()).toContain('nut-steps-dot');
});

test('step props and icon slots', async () => {
  const wrapper = mount({
    components: {
      'nut-steps': Steps,
      'nut-step': Step,
      Service,
      People,
      Location2
    },
    template: `
      <nut-steps>
        <nut-step title="已完成" content="您的订单已经打包完成，商品已发出">
          <template #icon><Service color="blue" width="14px" height="14px"/></template>
        </nut-step>
        <nut-step title="进行中" content="您的订单正在配送途中">
          <template #icon><People color="blue" width="14px" height="14px"/></template>
        </nut-step>
        <nut-step title="未开始" content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦">
          <template #icon><Location2 color="blue" width="14px" height="14px"/></template>
        </nut-step>
      </nut-steps>
    `
  });

  await nextTick();

  const stepItemTitle = wrapper.findAll('.nut-step-title')[0];

  expect(stepItemTitle.element.innerHTML).toEqual('<span>已完成</span>');

  const stepItemContent = wrapper.findAll('.nut-step-content')[1];

  expect(stepItemContent.element.innerHTML).toEqual('<span>您的订单正在配送途中</span>');

  const stepItemIcons = wrapper.findAll('.nut-icon');
  const icon = stepItemIcons[0];
  expect(stepItemIcons.length).toEqual(3);
  expect((icon.element as HTMLElement).tagName).matchSnapshot();
});

test('should props current changes when trigger click', async () => {
  const wrapper = mount({
    components: {
      'nut-steps': Steps,
      'nut-step': Step,
      'nut-button': Button
    },
    template: `
      <nut-steps :current="current">
        <nut-step title="已完成" content="您的订单已经打包完成，商品已发出">1</nut-step>
        <nut-step title="进行中" content="您的订单正在配送途中">2</nut-step>
        <nut-step title="未开始" content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦">3</nut-step>
      </nut-steps>
      <nut-button @click="handleClick">下一步</nut-button>
    `,
    setup() {
      const state = reactive({
        current: 1
      });

      const handleClick = () => {
        if (state.current >= 3) {
          state.current = 1;
        } else {
          state.current += 1;
        }
      };

      return { ...toRefs(state), handleClick };
    }
  });

  const button = wrapper.find('.nut-button');
  await button.trigger('click');
  await nextTick();
  expect(wrapper.vm.current).toBe(2);

  const stepItem = wrapper.findAll('.nut-step')[1];
  expect(stepItem.classes()).toContain('nut-step-process');

  await button.trigger('click');
  await nextTick();
  expect(wrapper.vm.current).toBe(3);
});

test('should emited click when step trigger', async () => {
  const wrapper = mount({
    components: {
      'nut-steps': Steps,
      'nut-step': Step
    },
    template: `
      <nut-steps :current="current">
        <nut-step title="已完成" content="您的订单已经打包完成，商品已发出">1</nut-step>
        <nut-step title="进行中" content="您的订单正在配送途中">2</nut-step>
        <nut-step title="未开始" content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦">3</nut-step>
      </nut-steps>
    `,
    setup() {
      const state = reactive({
        current: 1
      });

      return { ...toRefs(state) };
    }
  });

  await nextTick();
  await wrapper.vm.$emit('click-step');
  expect(wrapper.emitted('click-step')).toBeTruthy();
});

test('render step slot', async () => {
  const wrapper = mount({
    components: {
      'nut-steps': Steps,
      'nut-step': Step
    },
    template: `
      <nut-steps :current="current">
        <nut-step title="已完成" content="您的订单已经打包完成，商品已发出"><template v-slot:title>步骤一</template></nut-step>
        <nut-step title="进行中" content="您的订单正在配送途中">2</nut-step>
        <nut-step title="未开始">
          <template #content>
            <p>收货地址为：</p>
            <p>北京市经济技术开发区科创十一街18号院京东大厦</p>
          </template>
        </nut-step>
      </nut-steps>
    `,
    setup() {
      const state = reactive({
        current: 1
      });

      return { ...toRefs(state) };
    }
  });

  expect(wrapper.html()).toContain('步骤一');
  expect(wrapper.html()).toContain('北京市经济技术开发区科创十一街18号院京东大厦');
});
