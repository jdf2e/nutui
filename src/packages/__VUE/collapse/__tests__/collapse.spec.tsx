import { mount } from '@vue/test-utils';
import Collapse from '../index.vue';
import CollapseItem from '../../collapseitem/index.vue';
import { nextTick, reactive, ref, toRefs } from 'vue';
function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

test('should props active', async () => {
  const wrapper = mount(() => {
    const active = ref(['1', '2']);
    return (
      <Collapse v-model={active}>
        <CollapseItem name="1">
          {{
            mTitle: () => '标题1',
            default: () => 'NutUI是一套拥有京东风格的轻量级的 Vue 组件库'
          }}
        </CollapseItem>
        <CollapseItem title="标题2" name="2">
          在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！
        </CollapseItem>
      </Collapse>
    );
  });
  const items = wrapper.findAll('.nut-collapse-item');
  expect(items.length).toEqual(2);
  await nextTick();
  expect(wrapper.html()).toMatchSnapshot();
  const icons = wrapper.findAll('.nut-collapse-item__title-icon--expanded');
  expect(icons.length).toEqual(2);
});

test('should props accordion', async () => {
  const component = {
    template: `<nut-collapse v-model:active="active" icon="down-arrow" accordion>
      <nut-collapse-item title="标题1" :name="1">
        NutUI是一套拥有京东风格的轻量级的 Vue 组件库
      </nut-collapse-item>
      <nut-collapse-item title="标题2" :name="2">
        在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！
      </nut-collapse-item>
    </nut-collapse>`,
    data() {
      return {
        active: 1
      };
    }
  };
  const wrapper = mount(component);
  await nextTick();
  await nextTick();
  expect(wrapper.findAll('.item-expanded')).toHaveLength(1);
  const collapseWrapper = wrapper.findAll('.collapse-item');
  collapseWrapper[0].trigger('click');
  await nextTick();
  await nextTick();
  expect(wrapper.findAll('.item-expanded')).toHaveLength(0);
});

test('should title props ', async () => {
  const wrapper = mount({
    template: `
    <nut-collapse
      v-model:active="activeName"
      :title-icon="titleIcon"
      :title-icon-color="titleIconColor"
      :title-icon-size="titleIconSize"
      :title-icon-position="titleIconPos"
      icon="down-arrow"
      :accordion="true"
    >
      <nut-collapse-item :title="title1" :name="1">
        组件 emits 事件单独提取，增强代码可读性
      </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2" sub-title="文本内容">
        使用 Teleport 新特性重构挂载类组件
      </nut-collapse-item>
    </nut-collapse>
    `,
    setup() {
      const activeName = ref(1);
      const title = reactive({
        title1: '标题1',
        title2: '标题2',
        titleIcon: 'issue',
        titleIconSize: '20px',
        titleIconColor: 'red',
        titleIconPos: 'left'
      });
      return {
        activeName,
        ...toRefs(title)
      };
    }
  });
  await nextTick();
  await nextTick();
  const collapseIcon = wrapper.findAll('.nut-icon');
  expect(collapseIcon[0].exists()).toBeTruthy();
  const collapseIconEle = collapseIcon[0].element as HTMLElement;
  expect(collapseIconEle.style.color).toEqual(wrapper.vm.titleIconColor);
  expect(collapseIconEle.style.fontSize).toEqual(wrapper.vm.titleIconSize);
  expect(collapseIcon[0].classes()).toContain('titleIconLeft');
});

test('should icon props', async () => {
  const wrapper = mount({
    template: `
    <nut-collapse
      v-model:active="activeName"
      :accordion="true"
      :icon="icon"
      :icon-size="iconSize"
      :icon-color="iconColor"
      :rotate="rotate"
    >
      <nut-collapse-item :title="title1" :name="1">
        组件 emits 事件单独提取，增强代码可读性
      </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2" sub-title="文本内容">
        使用 Teleport 新特性重构挂载类组件
      </nut-collapse-item>
    </nut-collapse>
    `,
    setup() {
      const activeName = ref(1);
      const title = reactive({
        title1: '标题1',
        title2: '标题2',
        icon: 'down-arrow',
        iconSize: '16px',
        iconColor: 'red',
        rotate: '90'
      });
      return {
        activeName,
        ...toRefs(title)
      };
    }
  });
  await nextTick();
  await nextTick();
  const collapseIcon = wrapper.findAll('.nut-icon');
  expect(collapseIcon[0].classes()).toContain('nut-icon-' + wrapper.vm.icon);

  const collapseIconEle = collapseIcon[0].element as HTMLElement;
  expect(collapseIconEle.style.fontSize).toEqual(wrapper.vm.iconSize);
  expect(collapseIconEle.style.color).toEqual(wrapper.vm.iconColor);
  expect(collapseIconEle.style.transform).toEqual(`rotate(${wrapper.vm.rotate}deg)`);
});

test('should nut-collapse-item props ', async () => {
  const wrapper = mount({
    template: `
    <nut-collapse
      v-model:active="activeName"
    >
      <nut-collapse-item :title="title1" :name="1">
        组件 emits 事件单独提取，增强代码可读性
      </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2" :sub-title="subTitle">
        使用 Teleport 新特性重构挂载类组件
      </nut-collapse-item>
      <nut-collapse-item :title="title3" :name="3" :disabled="disabled"> </nut-collapse-item>
    </nut-collapse>
    `,
    setup() {
      const activeName = ref(1);
      const title = reactive({
        title1: '标题1',
        title2: '标题2',
        title3: '标题3',
        subTitle: '文本内容',
        disabled: true
      });
      return {
        activeName,
        ...toRefs(title)
      };
    }
  });
  await nextTick();
  await nextTick();
  const collapseItemTitle = wrapper.findAll('.collapse-title-value');
  const collapseIconEle1 = collapseItemTitle[0].element as HTMLElement;
  expect(collapseIconEle1.textContent).toEqual(wrapper.vm.title1);
  const collapseIconEle2 = collapseItemTitle[1].element as HTMLElement;
  expect(collapseIconEle2.textContent).toEqual(wrapper.vm.title2);

  const collapseItemSubTitle = wrapper.findAll('.subTitle')[1].element as HTMLElement;
  expect(collapseItemSubTitle.textContent).toEqual(wrapper.vm.subTitle);

  const collapseWrapper = wrapper.findAll('.collapse-item');
  expect(collapseWrapper[2].classes()).toContain('nut-collapse-item-disabled');
});

test('should event change', async () => {
  const wrapper = mount({
    components: {
      'nut-collapse': Collapse,
      'nut-collapse-item': CollapseItem
    },
    template: `
      <nut-collapse v-model:active="active" :accordion="true" @change="change">
        <nut-collapse-item :title="title1" :name="1">
          引入Vue3新特性 Composition API、Teleport、Emits 等
        </nut-collapse-item>
        <nut-collapse-item :title="title2" :name="2"> 全面使用 TypeScipt </nut-collapse-item>
      </nut-collapse>
    `,
    setup() {
      const state = reactive({
        activeName: 1
      });
      const title = reactive({
        active: 1,
        title1: '标题1',
        title2: '标题2'
      });
      const change = (name: any) => {
        state.activeName = name;
      };
      return {
        ...toRefs(title),
        ...toRefs(state),
        change
      };
    }
  });

  await nextTick();
  await nextTick();
  const collapseWrapper = wrapper.findAll('.collapse-item');
  collapseWrapper[1].trigger('click');
  await sleep(1000);
  expect(wrapper.vm.activeName).toBe(2);
});
