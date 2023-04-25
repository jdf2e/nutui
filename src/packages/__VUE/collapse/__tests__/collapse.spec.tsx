import { mount } from '@vue/test-utils';
import Collapse from '../index.vue';
import CollapseItem from '../../collapseitem/index.vue';
import { Heart } from '@nutui/icons-vue';
import { nextTick } from 'vue';
function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

test('should props active', async () => {
  const wrapper = mount(() => {
    return (
      <Collapse modelValue={['1', '2']}>
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
  await sleep(1000);
  const icons = wrapper.findAll('.nut-collapse-item__title-icon--expanded');
  expect(icons.length).toEqual(2);
});

test('should props accordion', async () => {
  const wrapper = mount(() => {
    return (
      <Collapse modelValue={2} accordion>
        <CollapseItem title="标题1" name={1}>
          NutUI是一套拥有京东风格的轻量级的 Vue 组件库
        </CollapseItem>
        <CollapseItem title="标题2" name={2}>
          在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！
        </CollapseItem>
      </Collapse>
    );
  });
  await sleep(1000);
  expect(wrapper.findAll('.nut-collapse-item__title-icon--expanded')).toHaveLength(1);
  const collapseWrapper = wrapper.findAll('.nut-collapse-item');
  collapseWrapper[0].trigger('click');
  await sleep(1000);
  expect(wrapper.findAll('.nut-collapse-item__title-icon--expanded')).toHaveLength(1);
});

test('should icon props', async () => {
  const wrapper = mount(() => {
    return (
      <Collapse modelValue={1}>
        <CollapseItem title="title1" name={1} icon={Heart}>
          组件 emits 事件单独提取，增强代码可读性
        </CollapseItem>
        <CollapseItem title="title2" name={2}>
          使用 Teleport 新特性重构挂载类组件
        </CollapseItem>
      </Collapse>
    );
  });
  await nextTick();
  expect(wrapper.html()).toMatchSnapshot();
});

test('should nut-collapse-item props ', async () => {
  const wrapper = mount(() => {
    return (
      <Collapse modelValue="activeName">
        <CollapseItem title="title1" name="1">
          组件 emits 事件单独提取，增强代码可读性
        </CollapseItem>
        <CollapseItem title="title2" name="2">
          使用 Teleport 新特性重构挂载类组件
        </CollapseItem>
        <CollapseItem title="title3" name="3" disabled></CollapseItem>
      </Collapse>
    );
  });
  await nextTick();
  const collapseItemTitle = wrapper.findAll('.nut-collapse-item__title-mtitle');
  const collapseIconEle1 = collapseItemTitle[0].element as HTMLElement;
  expect(collapseIconEle1.textContent).toEqual('title1');
  const collapseIconEle2 = collapseItemTitle[1].element as HTMLElement;
  expect(collapseIconEle2.textContent).toEqual('title2');
  const collapseWrapper = wrapper.findAll('.nut-collapse-item__title');
  expect(collapseWrapper[2].classes()).toContain('nut-collapse-item__title--disabled');
});

test('should event change', async () => {
  const wrapper = mount(() => {
    return (
      <Collapse modelValue={1} accordion>
        <CollapseItem title="title1" name={1}>
          引入Vue3新特性 Composition API、Teleport、Emits 等
        </CollapseItem>
        <CollapseItem title="title2" name={2}>
          全面使用 TypeScipt
        </CollapseItem>
      </Collapse>
    );
  });
  await nextTick();
  const collapseWrapper = wrapper.findAll('.nut-collapse-item__title');
  expect(collapseWrapper.length).toBe(2);
  collapseWrapper[1].trigger('click');
  await sleep(1000);
  expect(wrapper.emitted).toMatchSnapshot();
});
