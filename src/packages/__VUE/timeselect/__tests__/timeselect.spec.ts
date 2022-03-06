import { mount } from '@vue/test-utils';
import { reactive, toRefs, getCurrentInstance } from 'vue';
import TimeSelect from '../index.vue';
import TimePanel from '../../timepannel/index.vue';
import TimeDetail from '../../timedetail/index.vue';

test('should emit "update:modelValue" and "change" event when radio is clicked', async () => {
  const wrapper = mount({
    emits: ['change', 'select'],
    components: {
      'nut-timeselect': TimeSelect,
      'nut-timepannel': TimePanel,
      'nut-timedetail': TimeDetail
    },
    template: `
      <template>
        <nut-cell @click="handleClick1">
          <span><label>请选择配送时间</label></span>
        </nut-cell>
        <nut-timeselect v-model:visible="visible1" height="50%" :current-key="currentKey1" :current-time="currentTime1" @select="handleSelected1">
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
        visible1: false,
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

      const handleSelected1 = (obj: any) => {
        proxy.$toast.text(`您选择了：${JSON.stringify(obj)}`);
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
});
