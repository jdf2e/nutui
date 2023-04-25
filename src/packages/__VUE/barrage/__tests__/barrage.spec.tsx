import { mount } from '@vue/test-utils';
import Barrage from '../index.vue';

const list = ['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结-'];

test('should danmu list props', async () => {
  const wrapper = mount(() => {
    return <Barrage speeds={300} danmu={list} />;
  });

  wrapper.findAll('.nut-barrage__item').forEach((item) => {
    expect(list.includes(item.element.innerHTML)).toBeTruthy;
  });
});
