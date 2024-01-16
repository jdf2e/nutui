import { DOMWrapper, mount } from '@vue/test-utils';
import Swipe from '../index.vue';
import SwipeGroup from '../../swipegroup/index.vue';
import { nextTick } from 'vue';
import Button from '../../button';
import Cell from '../../cell/index.vue';
import { triggerDrag, mockGetBoundingClientRect } from '@/packages/utils/unit';

test('Swipe: base swipe', () => {
  const wrapper = mount(Swipe);
  const swipe: DOMWrapper<Element> = wrapper.find('.nut-swipe');
  expect(swipe.exists()).toBe(true);
});

test('Swipe: base swipe props disabled', async () => {
  const wrapper = mount(() => {
    return (
      <Swipe disabled={false}>
        {{
          right: () => (
            <Button
              shape="square"
              style={{
                height: '100%'
              }}
              type="danger"
            >
              删除
            </Button>
          )
        }}
      </Swipe>
    );
  });
  await nextTick();
  const swipe1: DOMWrapper<Element> = wrapper.find('.nut-swipe__right');
  const swipe2: DOMWrapper<Element> = wrapper.find('.nut-button');
  expect(swipe1.exists()).toBe(true);
  expect(swipe1.text()).toBe('删除');
  expect(swipe2.exists()).toBe(true);
});
test('Swipe: base swipe Slots', async () => {
  const wrapper = mount(() => (
    <Swipe>
      {{
        left: () => (
          <Button shape="square" style={{ height: '100%' }} type="success">
            选择
          </Button>
        )
      }}
    </Swipe>
  ));
  await nextTick();
  const swipe: DOMWrapper<Element> = wrapper.find('.nut-swipe__left');
  const swipe2: DOMWrapper<Element> = wrapper.find('.nut-button');
  expect(swipe.exists()).toBe(true);
  expect(swipe.text()).toBe('选择');
  expect(swipe2.exists()).toBe(true);
});
test('Swipe: base swipe content', async () => {
  const wrapper = mount(() => (
    <Swipe>
      <Cell round-radio="0" desc="左滑右滑都可以哦"></Cell>
    </Swipe>
  ));
  await nextTick();
  const swipe2: DOMWrapper<Element> = wrapper.find('.nut-swipe__content');
  const swipe3: DOMWrapper<Element> = wrapper.find('.nut-cell');
  expect(swipe2.exists()).toBe(true);
  expect(swipe2.text()).toBe('左滑右滑都可以哦');
  expect(swipe3.exists()).toBe(true);
});

test('Swipe: ref open & close', async () => {
  const wrapper = mount(() => (
    <Swipe>
      {{
        right: () => '右侧按钮'
      }}
    </Swipe>
  ));
  mockGetBoundingClientRect({ width: 99 });
  const swipe = wrapper.getComponent(Swipe);
  expect(swipe.element.outerHTML).toContain('translate3d(0');
  swipe.vm.open('left');
  await nextTick();
  expect(swipe.element.outerHTML).toContain('translate3d(-99');
  swipe.vm.close();
  await nextTick();
  expect(swipe.element.outerHTML).toContain('translate3d(0');
});

test('Swipe: ref open & click close', async () => {
  const wrapper = mount(() => (
    <Swipe>
      {{
        right: () => '右侧按钮'
      }}
    </Swipe>
  ));
  mockGetBoundingClientRect({ width: 99 });
  const swipe = wrapper.getComponent(Swipe);
  swipe.vm.open('left');
  await nextTick();
  expect(swipe.element.outerHTML).toContain('translate3d(-99');
  wrapper.find('.nut-swipe__content').trigger('click');
  await nextTick();
  expect(swipe.element.outerHTML).toContain('translate3d(0');
});

test('Swipe: touch event right', async () => {
  const wrapper = mount(() => (
    <Swipe>
      {{
        right: () => '右侧按钮'
      }}
    </Swipe>
  ));
  mockGetBoundingClientRect({ width: 99 });
  const swipe = wrapper.getComponent(Swipe);
  triggerDrag(wrapper, -10, 0);
  await nextTick();
  expect(swipe.element.outerHTML).toContain('translate3d(0');
  triggerDrag(wrapper, -90, 0);
  await nextTick();
  expect(swipe.element.outerHTML).toContain('translate3d(-99');
  swipe.vm.close();
  await nextTick();
  expect(swipe.element.outerHTML).toContain('translate3d(0');
});

test('Swipe: touch event left', async () => {
  const wrapper = mount(() => (
    <Swipe touchMovePreventDefault touchMoveStopPropagation>
      {{
        left: () => '左侧按钮'
      }}
    </Swipe>
  ));
  mockGetBoundingClientRect({ width: 99 });
  const swipe = wrapper.getComponent(Swipe);
  triggerDrag(wrapper, +10, 0);
  await nextTick();
  expect(swipe.element.outerHTML).toContain('translate3d(0');
  triggerDrag(wrapper, +90, 0);
  await nextTick();
  expect(swipe.element.outerHTML).toContain('translate3d(99');
  swipe.vm.close();
  await nextTick();
  expect(swipe.element.outerHTML).toContain('translate3d(0');
});

test('Swipe: SwipeGroup lock', async () => {
  const wrapper = mount(() => (
    <SwipeGroup lock>
      <Swipe name="111">{{ right: () => '右侧' }}</Swipe>
      <Swipe name="222">{{ right: () => '右侧' }}</Swipe>
      <Swipe name="333">{{ right: () => '右侧' }}</Swipe>
    </SwipeGroup>
  ));
  mockGetBoundingClientRect({ width: 99 });
  const swipes = wrapper.findAllComponents(Swipe);
  triggerDrag(swipes[0], -90, 0);
  await nextTick();
  expect(swipes[0].element.outerHTML).toContain('translate3d(-99');
  triggerDrag(swipes[1], -90, 0);
  await nextTick();
  expect(swipes[0].element.outerHTML).toContain('translate3d(0');
  expect(swipes[1].element.outerHTML).toContain('translate3d(-99');
});
