import { config, mount } from '@vue/test-utils';
import Barrage from '../index.vue';
import { nextTick, ref } from 'vue';
function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
// 所有的测试用例之前执行一次
beforeAll(() => {
  config.global.components = {
    NutBarrage: Barrage
  };
});
// 所有的测试用例之后执行一次
afterAll(() => {
  config.global.components = {};
});
test('should danmu list props', async () => {
  const wrapper = mount({
    template: `<nut-barrage ref="danmu" :danmu="list" :speeds="speeds"></nut-barrage>`,
    setup() {
      const danmu = ref(null);
      const list = ref(['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结']);
      const speeds = ref(300);
      return {
        list,
        danmu,
        speeds
      };
    }
  });
  await nextTick();
  await sleep(4000);
  const danmuList = wrapper.findAll('.dmitem');
  danmuList.forEach((item) => {
    expect(Number(item.attributes('data-index'))).toBeLessThan(wrapper.vm.list.length);
  });
  const ele = danmuList[0].element as HTMLElement;
  expect(ele.style.animationDuration).toEqual(`${wrapper.vm.speeds}ms`);
});

test('should danmu rows top', async () => {
  const wrapper = mount({
    template: `<nut-barrage ref="danmu" :danmu="list" :rows="rows" :top="top"></nut-barrage>`,
    setup() {
      const danmu: any = ref(null);
      const list = ref(['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结']);
      const rows = ref(3);
      const top = ref(30);
      const addDanmu = () => {
        const n: number = Math.random();
        danmu.value.add('随机——' + String(n).substr(2, 10));
      };
      return {
        list,
        danmu,
        rows,
        top,
        addDanmu
      };
    }
  });
  await nextTick();
  wrapper.vm.addDanmu();
  await sleep(4500);
  const danmuList = wrapper.findAll('.dmitem');
  const ele = danmuList[1].element as HTMLElement;
  const top = parseFloat(ele.style.top);
  expect(top - 26 + 6).toBe(wrapper.vm.top);
  // const danmuitem = danmuList.filter(item => Number(item.attributes('data-index')) >= wrapper.vm.list.length);
  danmuList.forEach((item) => {
    if (Number(item.attributes('data-index')) + 1 >= wrapper.vm.list.length) {
      const idx = Number(item.attributes('data-index'));
      expect(idx).toBe(wrapper.vm.list.length - 1);
    }
  });
});
