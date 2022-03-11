import { config, mount } from '@vue/test-utils';
import { reactive, toRefs, getCurrentInstance, nextTick } from 'vue';
import TimeSelect from '../index.vue';
import TimePanel from '../../timepannel/index.vue';
import TimeDetail from '../../timedetail/index.vue';
import NutOverLay from '../../overlay/index.vue';
import NutPopup from '../../popup/index.vue';
import NutIcon from '../../icon/index.vue';

beforeAll(() => {
  config.global.components = {
    NutOverLay,
    NutPopup,
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

test('props test', async () => {
  const wrapper = mount({
    emits: ['change', 'select'],
    components: {
      'nut-timeselect': TimeSelect,
      'nut-timepannel': TimePanel,
      'nut-timedetail': TimeDetail
    },
    template: `
      <template>
        <div id="cell" @click="handleClick1">
          <span><label>请选择配送时间</label></span>
        </div>
        <nut-timeselect v-model:visible="visible1" title="标题测试" height="50%" :current-key="currentKey1" :current-time="currentTime1" @select="handleSelected1">
          <template #pannel>
            <nut-timepannel name="2月23日(今天)" pannel-key="0" @change="handleChange1"></nut-timepannel>
            <nut-timepannel name="2月24日(星期三)" pannel-key="1" @change="handleChange1"></nut-timepannel>
          </template>
          <template #detail>
            <nut-timedetail :times="times1" @select="selectTime1"></nut-timedetail>
          </template>
        </nut-timeselect>
      </template>
    `,
    setup() {
      const { proxy } = getCurrentInstance() as any;
      const state = reactive({
        visible1: true,
        currentKey1: 0,
        currentTime1: [] as any[],
        times1: [
          {
            key: 0,
            list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
          },
          {
            key: 1,
            list: ['9:00-10:00', '10:00-11:00']
          }
        ]
      });

      const handleChange1 = (pannelKey: number) => {
        state.currentKey1 = pannelKey;
        state.currentTime1 = [];
        state.currentTime1.push({
          key: state.currentKey1,
          list: []
        });
      };

      const handleClick1 = () => {
        state.visible1 = true;
      };

      const selectTime1 = (item: string) => {
        let curTimeIndex = state.currentTime1[0]['list'].findIndex((time: string) => time === item);
        if (curTimeIndex === -1) {
          state.currentTime1[0]['list'].push(item);
        } else {
          state.currentTime1[0]['list'].splice(curTimeIndex, 1);
        }
      };

      const handleSelected1 = (obj: any) => {};

      return {
        ...toRefs(state),
        handleChange1,
        handleSelected1,
        selectTime1,
        handleClick1
      };
    }
  });
  await nextTick();
  // timeselect prop
  const popup: any = wrapper.find('.nut-popup');
  expect(popup).toBeTruthy();
  expect(popup.element.style.height).toEqual('50%');
  expect(wrapper.find('.nut-timeselect__title__fixed').html()).toContain('标题测试');

  // timepannel name test
  expect(wrapper.find('.nut-timepannel').html()).toContain('2月23日(今天)');

  // TimeSelect event test
  // await wrapper.find('.nut-overlay').trigger('click');
  // sleep(200);
  // expect(wrapper.emitted('select')).toBeTruthy();
});
