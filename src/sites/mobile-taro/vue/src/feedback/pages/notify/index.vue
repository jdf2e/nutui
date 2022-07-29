<template>
  <div class="demo">
    <nut-cell-group :title="baseState.state.desc">
      <nut-cell is-Link @click="baseState.methods.cellClick">{{ baseState.state.desc }}</nut-cell>
      <nut-notify
        @click="onClick"
        @closed="onClosed"
        v-model:visible="baseState.state.show"
        :msg="baseState.state.desc"
      />
    </nut-cell-group>

    <nut-cell-group title="通知类型">
      <nut-notify
        @click="onClick"
        @closed="onClosed"
        :type="notifyState.state.type"
        v-model:visible="notifyState.state.show"
        :msg="notifyState.state.desc"
      />
      <nut-cell is-Link @click="notifyState.methods.cellClick('primary', '主要通知')">主要通知</nut-cell>
      <nut-cell is-Link @click="notifyState.methods.cellClick('success', '成功通知')">成功通知</nut-cell>
      <nut-cell is-Link @click="notifyState.methods.cellClick('danger', '危险通知')">危险通知</nut-cell>
      <nut-cell is-Link @click="notifyState.methods.cellClick('warning', '警告通知')">警告通知</nut-cell>
    </nut-cell-group>
    <nut-cell-group title="自定义样式">
      <nut-notify
        @click="onClick"
        @closed="onClosed"
        color="#ad0000"
        background="#ffe1e1"
        :type="customState.state.type"
        v-model:visible="customState.state.show"
        :msg="customState.state.desc"
        :duration="customState.state.duration"
      />
      <nut-cell is-Link @click="customState.methods.cellClick('primary', '自定义背景色和字体颜色')">
        自定义背景色和字体颜色
      </nut-cell>
      <nut-cell is-Link @click="customState.methods.cellClick('primary', '自定义时长5s', 5000)">
        自定义时长5s
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="组件调用">
      <nut-cell is-Link @click="showNotify">组件调用</nut-cell>
      <nut-notify v-model:visible="show">
        <span>Content</span>
      </nut-notify>
    </nut-cell-group>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
export default {
  setup() {
    const onClosed = () => console.log('closed');
    const onClick = () => console.log('click');

    const baseState = {
      state: reactive({
        show: false,
        desc: '基础用法'
      }),
      methods: {
        cellClick() {
          baseState.state.show = true;
        }
      }
    };

    const notifyState = {
      state: reactive({
        show: false,
        desc: '',
        type: 'primary'
      }),
      methods: {
        cellClick(type: string, desc: string) {
          notifyState.state.show = true;
          notifyState.state.type = type;
          notifyState.state.desc = desc;
        }
      }
    };
    const customState = {
      state: reactive({
        show: false,
        desc: '',
        type: 'primary',
        duration: 3000
      }),
      methods: {
        cellClick(type: string, desc: string, duration: number) {
          customState.state.show = true;
          customState.state.type = type;
          customState.state.desc = desc;
          customState.state.duration = duration;
        }
      }
    };
    const show = ref(false);
    const showNotify = () => {
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, 2000);
    };
    return {
      baseState,
      notifyState,
      customState,
      onClosed,
      onClick,
      show,
      showNotify
    };
  }
};
</script>
