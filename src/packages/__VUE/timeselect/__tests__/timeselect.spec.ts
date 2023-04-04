import { mount } from '@vue/test-utils';
import { reactive, toRefs, getCurrentInstance, nextTick } from 'vue';
import TimeSelect from '../index.vue';
import TimePanel from '../../timepannel/index.vue';
import TimeDetail from '../../timedetail/index.vue';

test('props test', async () => {
  const wrapper = mount({
    emits: ['change', 'select'],
    components: {
      'nut-time-select': TimeSelect,
      'nut-time-pannel': TimePanel,
      'nut-time-detail': TimeDetail
    },
    template: `
      <template>
        <div id="cell" @click="handleClick1">
          <span><label>请选择配送时间</label></span>
        </div>
        <nut-time-select v-model:visible="visible1" title="标题测试" height="50%" :current-key="currentKey1" :current-time="currentTime1" @select="handleSelected1">
          <template #pannel>
            <nut-time-pannel name="2月23日(今天)" pannel-key="0" @change="handleChange1"></nut-time-pannel>
            <nut-time-pannel name="2月24日(星期三)" pannel-key="1" @change="handleChange1"></nut-time-pannel>
          </template>
          <template #detail>
            <nut-time-detail :times="times1" @select="selectTime1"></nut-time-detail>
          </template>
        </nut-time-select>
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
  // visible test
  expect(popup).toBeTruthy();
  // height test
  expect(popup.element.style.height).toEqual('50%');
  // title test
  expect(wrapper.find('.nut-time-select__title__fixed').html()).toContain('标题测试');

  // current-key test
  const leftPannel = wrapper.findAll('.nut-time-pannel');
  await leftPannel[1].trigger('click');
  expect(leftPannel[1].find('.nut-time-pannel--curr')).toBeTruthy();

  // current-time test
  const rightPannel = wrapper.findAll('.nut-time-detail__detail__list__item');
  await rightPannel[1].trigger('click');
  expect(rightPannel[1].find('.nut-time-detail__detail__list__item--curr')).toBeTruthy();

  // timepannel name test
  expect(wrapper.find('.nut-time-pannel').html()).toContain('2月23日(今天)');

  // timedetail times test, 2 月 24 日的取件时间有两个，长度应该为 2
  expect(wrapper.findAll('.nut-time-detail__detail__list__item').length).toEqual(2);
});

test('Events test', async () => {
  const wrapper = mount({
    emits: ['change', 'select'],
    components: {
      'nut-time-select': TimeSelect,
      'nut-time-pannel': TimePanel,
      'nut-time-detail': TimeDetail
    },
    template: `
      <template>
        <div id="cell" @click="handleClick1">
          <span><label>请选择配送时间</label></span>
        </div>
        <nut-time-select v-model:visible="visible1" title="标题测试" height="50%" :current-key="currentKey1" :current-time="currentTime1" @select="handleSelected1">
          <template #pannel>
            <nut-time-pannel name="2月23日(今天)" pannel-key="0" @change="handleChange1"></nut-time-pannel>
            <nut-time-pannel name="2月24日(星期三)" pannel-key="1" @change="handleChange1"></nut-time-pannel>
          </template>
          <template #detail>
            <nut-time-detail :times="times1" @select="selectTime1"></nut-time-detail>
          </template>
        </nut-time-select>
      </template>
    `,
    setup() {
      const state = reactive({
        visible1: true,
        currentKey1: 0,
        currentTime1: [] as any[],
        key: [],
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

      const handleSelected1 = (obj: any) => {
        state.key = obj;
      };

      return {
        ...toRefs(state),
        handleChange1,
        handleSelected1,
        selectTime1,
        handleClick1
      };
    }
  });

  // event test
  await nextTick();
  const timepannel = wrapper.find('.nut-time-select__content__pannel').findAll('.nut-time-pannel')[1];
  await timepannel.trigger('click');
  expect(timepannel.classes()).toContain('nut-time-pannel--curr');
});
