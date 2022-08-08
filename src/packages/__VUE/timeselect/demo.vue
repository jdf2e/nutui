<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell @click="handleClick1">
      <span
        ><label>{{ translate('deliveryTime') }}</label></span
      >
    </nut-cell>
    <nut-timeselect
      v-model:visible="visible1"
      height="50%"
      :current-key="currentKey1"
      :current-time="currentTime1"
      @select="handleSelected1"
    >
      <template #pannel>
        <nut-timepannel :name="translate('time1')" pannel-key="0" @change="handleChange1"></nut-timepannel>
        <nut-timepannel :name="translate('time2')" pannel-key="1" @change="handleChange1"></nut-timepannel>
      </template>
      <template #detail>
        <nut-timedetail :times="times1" @select="selectTime1"></nut-timedetail>
      </template>
    </nut-timeselect>
    <h2>{{ translate('title') }}</h2>
    <nut-cell @click="handleClick2">
      <span
        ><label>{{ translate('deliveryTime') }}</label></span
      >
    </nut-cell>
    <nut-timeselect
      v-model:visible="visible2"
      height="50%"
      :current-key="currentKey2"
      :current-time="currentTime2"
      @select="handleSelected2"
    >
      <template #pannel>
        <nut-timepannel :name="translate('time1')" pannel-key="0" @change="handleChange2"></nut-timepannel>
        <nut-timepannel :name="translate('time2')" pannel-key="1" @change="handleChange2"></nut-timepannel>
      </template>
      <template #detail>
        <nut-timedetail :times="times2" @select="selectTime2"></nut-timedetail>
      </template>
    </nut-timeselect>
    <h2>{{ translate('changeTitle') }}</h2>
    <nut-cell @click="handleClick3">
      <span
        ><label>{{ translate('deliveryTime') }}</label></span
      >
    </nut-cell>
    <nut-timeselect
      v-model:visible="visible3"
      height="50%"
      :current-key="currentKey2"
      :current-time="currentTime2"
      @select="handleSelected2"
    >
      <template #title>
        <div class="timeselect-title">
          <p class="title">我是标题</p>
          <p class="subtitle">我是副标题</p>
        </div>
      </template>
      <template #pannel>
        <nut-timepannel :name="translate('time1')" pannel-key="0" @change="handleChange2"></nut-timepannel>
        <nut-timepannel :name="translate('time2')" pannel-key="1" @change="handleChange2"></nut-timepannel>
      </template>
      <template #detail>
        <nut-timedetail :times="times2" @select="selectTime2"></nut-timedetail>
      </template>
    </nut-timeselect>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, getCurrentInstance, onMounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('timeselect');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      deliveryTime: '请选择配送时间',
      changeTitle: '更改标题',
      time1: '2月23日(今天)',
      time2: '2月24日(星期三)',
      title: '可选择多个日期时间',
      content: '您选择了'
    },
    'en-US': {
      basic: 'Basic Usage',
      deliveryTime: 'Please select the delivery time',
      changeTitle: 'Change Title',
      time1: 'February 23rd(Today)',
      time2: 'February 24th(Wednesday)',
      title: 'Multiple dates and times can be selected',
      content: 'Your choose'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
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
      ],
      visible2: false,
      currentKey2: 0,
      currentTime2: [] as any[],
      times2: [
        {
          key: 0,
          list: ['9:00-10:00', '10:00-11:00', '11:00-12:00']
        },
        {
          key: 1,
          list: ['9:00-10:00', '10:00-11:00']
        }
      ],
      visible3: false
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
      proxy.$toast.text(`${translate('content')}：${JSON.stringify(obj)}`);
    };

    const handleChange2 = (pannelKey: number) => {
      state.currentKey2 = pannelKey;
      let curTime = state.currentTime2.find((item: any) => item.key == pannelKey);
      if (!curTime) {
        state.currentTime2.push({
          key: pannelKey,
          list: []
        });
      }
    };

    const handleClick2 = () => {
      state.visible2 = true;
    };

    const selectTime2 = (item: string) => {
      let findIndex = state.currentTime2.findIndex((item: any) => item.key == state.currentKey2);
      let curTimeIndex = state.currentTime2[findIndex]['list'].findIndex((time: string) => time === item);
      if (curTimeIndex === -1) {
        state.currentTime2[findIndex]['list'].push(item);
      } else {
        state.currentTime2[findIndex]['list'].splice(curTimeIndex, 1);
      }
    };

    const handleSelected2 = (obj: any) => {
      proxy.$toast.text(`${translate('content')}：${JSON.stringify(obj)}`);
    };

    const handleClick3 = () => {
      state.visible3 = true;
    };

    onMounted(() => {
      state.currentTime1.push({
        key: state.currentKey1,
        list: []
      });
      state.currentTime2.push({
        key: state.currentKey2,
        list: []
      });
    });

    return {
      ...toRefs(state),
      handleChange1,
      handleSelected1,
      selectTime1,
      handleClick1,
      handleChange2,
      handleSelected2,
      selectTime2,
      handleClick2,
      handleClick3,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.demo {
  .timeselect-title {
    height: 50px;
    p {
      line-height: 1;
      padding: 0;
      margin: 0;
      &.title {
        margin: 10px 0;
        font-size: 16px;
        font-weight: bold;
      }
      &.subtitle {
        color: #999;
      }
    }
  }
}
</style>
