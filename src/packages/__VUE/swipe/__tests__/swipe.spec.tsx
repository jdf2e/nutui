import { DOMWrapper, mount } from '@vue/test-utils';
import Swipe from '../index.vue';
import { nextTick } from 'vue';
import Button from '../../button/index.vue';
import Cell from '../../cell/index.vue';

test('base swipe', () => {
  const wrapper = mount(Swipe);
  const swipe: DOMWrapper<Element> = wrapper.find('.nut-swipe');
  expect(swipe.exists()).toBe(true);
});

test('base swipe props disabled', async () => {
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
test('base swipe Slots', async () => {
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
test('base swipe content', async () => {
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
