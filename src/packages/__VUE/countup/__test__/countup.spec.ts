import { config, mount } from '@vue/test-utils';
import Countup from '../index.vue';
import { nextTick, reactive, ref, toRefs } from 'vue';
function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

// 所有的测试用例之前执行一次
beforeAll(() => {
  config.global.components = {
    NutCountup: Countup
  };
});
// 所有的测试用例之后执行一次
afterAll(() => {
  config.global.components = {};
});
test('basic usage props init-num end-num speed', async () => {
  const component = {
    template: `<nut-countup :init-num="initNum" :end-num="endNum" :speed="speed"></nut-countup>`,
    setup() {
      const data = reactive({
        initNum: 0,
        endNum: 4,
        speed: 3
      });
      return {
        ...toRefs(data)
      };
    }
  };
  const wrapper = mount(component);
  const countupWrapper = wrapper.find('.nut-countup').element as Element;
  await nextTick();
  expect(countupWrapper.textContent).toBe(wrapper.vm.initNum + '');

  await sleep(1000);
  const cur = countupWrapper.textContent;
  const differenceNum = Number(cur) - wrapper.vm.initNum;
  expect(differenceNum % wrapper.vm.speed).toBe(0);

  await sleep(3000);
  expect(countupWrapper.textContent).toBe(wrapper.vm.endNum + '');
});

test('basic usage props decimal places', async () => {
  const component = {
    template: `<nut-countup :init-num="200" :end-num="0" :speed="6.18" :to-fixed="toFixed"></nut-countup>`,
    setup() {
      const data = reactive({
        toFixed: 2
      });
      return {
        ...toRefs(data)
      };
    }
  };
  const wrapper = mount(component);
  await nextTick();
  const countupWrapper = wrapper.find('.nut-countup').element as Element;
  await sleep(4000);
  const num = countupWrapper.textContent;
  const len = num?.toString().split('.')[1];
  expect(len?.length).toBe(wrapper.vm.toFixed);
});

test('digital scrolling during props', async () => {
  const component = {
    template: `<nut-countup
      :scrolling="true"
      :init-num='17.618'
      :num-width="numWidth"
      :num-height="numHeight"
      :during="during"
    ></nut-countup>`,
    setup() {
      const data = reactive({
        during: 600,
        numWidth: 30,
        numHeight: 30
      });
      return {
        ...toRefs(data)
      };
    }
  };
  const wrapper = mount(component);
  await nextTick();
  await sleep(1000);

  expect(wrapper.findAll('.run-number')).toHaveLength(1);

  const numberItemList = wrapper.findAll('.numberItem');
  const numItem = numberItemList[numberItemList.length - 1].element as HTMLElement;
  expect(numItem.style.transition).toEqual(`all linear ${wrapper.vm.during}ms`);

  const itemSpan = wrapper.find('.itemSpan').element as HTMLElement;
  expect(itemSpan.style.width).toBe(`${wrapper.vm.numWidth}px`);
  expect(itemSpan.style.height).toBe(`${wrapper.vm.numHeight}px`);
});

test('custom img size props', async () => {
  const component = {
    template: `<nut-countup
      :custom="true"
      :num-height="numHeight"
      :custom-change-num="customChangeNum"
      :custom-bg-img='customBgImg'
      :custom-spac-num="customSpaceNum"
    ></nut-countup>`,
    setup() {
      const data = reactive({
        numHeight: 47,
        customChangeNum: 618,
        customBgImg:
          'https://img10.360buyimg.com/imagetools/jfs/t1/121466/20/6784/28830/5f06e7f2Edbb8998c/9bdd9e7b24dff9fe.png',
        customSpaceNum: 5
      });
      return {
        ...toRefs(data)
      };
    }
  };
  const wrapper = mount(component);
  await nextTick();
  await sleep(2000);
  const numberItemList = wrapper.findAll('.run-number-img-li');
  const ele = numberItemList[0].element as HTMLElement;
  const _y = Math.abs(parseFloat(ele.style.backgroundPositionY));
  const _num = Number(String(wrapper.vm.customChangeNum).charAt(0));
  const __y = _num * wrapper.vm.numHeight + wrapper.vm.customSpaceNum * _num;
  expect(_y).toBe(__y);
});

test('game machine props', async () => {
  const component = {
    template: `<nut-countup
      ref="countupMachineDom"
      type="machine"
      :machine-num="machineNum"
      :machine-prize-num="machinePrizeNum"
      :machine-prize-level="machinePrizeLevel"
      :machine-trun-more="machineTrunMore"
      :custom-bg-img="bgImage"
      :num-width="100"
      :num-height="100"
      :during="2000"
      @scroll-end="scrollAniEnd"
    ></nut-countup>`,
    setup() {
      const countupMachineDom: any = ref(null);
      const data = reactive({
        machineNum: 3,
        machinePrizeNum: 5,
        bgImage:
          'https://img10.360buyimg.com/imagetools/jfs/t1/121466/20/6784/28830/5f06e7f2Edbb8998c/9bdd9e7b24dff9fe.png',
        machinePrizeLevel: -1,
        machineTrunMore: 3,
        cbFlag: ''
      });
      const scrollAniEnd = () => {
        data.cbFlag = 'end';
      };
      const startRole = () => {
        data.machinePrizeLevel = Math.floor(Math.random() * 5 + 1);
        countupMachineDom.value.machineLuck();
      };
      return {
        countupMachineDom,
        ...toRefs(data),
        startRole,
        scrollAniEnd
      };
    }
  };
  const wrapper = mount(component);
  await nextTick();
  // await sleep(2000);
  const machine = wrapper.findAll('.run-number-machine-img');
  expect(machine).toHaveLength(1);
  const machineItemList = wrapper.findAll('.run-number-machine-img-li');
  expect(machineItemList).toHaveLength(wrapper.vm.machineNum);
  wrapper.vm.startRole();
  await sleep(4000);
  const ele = machineItemList[0].element as HTMLElement;
  const _y = Math.abs(parseFloat(ele.style.backgroundPositionY));
  const dis = wrapper.vm.machinePrizeNum * parseFloat(ele.style.height) * 2;
  expect(_y).toBeGreaterThan(dis);
  const scrollY = (wrapper.vm.machinePrizeNum - wrapper.vm.machinePrizeLevel + 1) * parseFloat(ele.style.height);
  expect(_y).toBeGreaterThan(scrollY);
  const circle = wrapper.vm.machineTrunMore * parseFloat(ele.style.height);
  expect(_y).toBeGreaterThan(circle);
});
