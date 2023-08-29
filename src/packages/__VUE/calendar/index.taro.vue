<template>
  <nut-popup
    v-if="poppable"
    :visible="visible"
    position="bottom"
    round
    closeable
    v-bind="$attrs"
    :style="{ height: '85vh' }"
    @click-overlay="closePopup"
    @click-close-icon="closePopup"
  >
    <nut-calendar-item
      ref="calendarRef"
      :type="type"
      :is-auto-back-fill="isAutoBackFill"
      :poppable="poppable"
      :title="title"
      :default-value="defaultValue"
      :start-date="startDate"
      :end-date="endDate"
      :confirm-text="confirmText"
      :start-text="startText"
      :end-text="endText"
      :show-today="showToday"
      :show-title="showTitle"
      :show-sub-title="showSubTitle"
      :to-date-animation="toDateAnimation"
      :first-day-of-week="firstDayOfWeek"
      @update="update"
      @close="close"
      @choose="choose"
      @select="select"
    >
      <template v-if="showTopBtn" #btn>
        <slot name="btn"> </slot>
      </template>
      <template v-if="dayInfo" #day="date">
        <slot name="day" :date="date.date"> </slot>
      </template>
      <template v-if="topInfo" #top-info="date">
        <slot name="top-info" :date="date.date"> </slot>
      </template>
      <template v-if="bottomInfo" #bottom-info="date">
        <slot name="bottom-info" :date="date.date"> </slot>
      </template>
    </nut-calendar-item>
  </nut-popup>
  <nut-calendar-item
    v-else
    ref="calendarRef"
    :type="type"
    :is-auto-back-fill="isAutoBackFill"
    :poppable="poppable"
    :title="title"
    :confirm-text="confirmText"
    :start-text="startText"
    :end-text="endText"
    :default-value="defaultValue"
    :start-date="startDate"
    :end-date="endDate"
    :show-title="showTitle"
    :show-sub-title="showSubTitle"
    :to-date-animation="toDateAnimation"
    :show-today="showToday"
    :first-day-of-week="firstDayOfWeek"
    @close="close"
    @choose="choose"
    @select="select"
  >
    <template v-if="showTopBtn" #btn>
      <slot name="btn"> </slot>
    </template>
    <template v-if="dayInfo" #day="date">
      <slot name="day" :date="date.date"> </slot>
    </template>
    <template v-if="topInfo" #top-info="date">
      <slot name="top-info" :date="date.date"> </slot>
    </template>
    <template v-if="bottomInfo" #bottom-info="date">
      <slot name="bottom-info" :date="date.date"> </slot>
    </template>
  </nut-calendar-item>
</template>
<script lang="ts">
import { ref, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('calendar');
import CalendarItem from '../calendaritem/index.taro.vue';
import Popup from '../popup/index.taro.vue';
import Utils from '@/packages/utils/date';
import { useExpose } from '@/packages/utils/useExpose/index';
import { CalendarRef } from '../calendaritem/type';

export default create({
  components: {
    [CalendarItem.name]: CalendarItem,
    [Popup.name]: Popup
  },
  props: {
    type: {
      type: String,
      default: 'one'
    },
    isAutoBackFill: {
      type: Boolean,
      default: false
    },
    toDateAnimation: {
      type: Boolean,
      default: true
    },
    poppable: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showSubTitle: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    showToday: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: ''
    },
    startText: {
      type: String,
      default: ''
    },
    endText: {
      type: String,
      default: ''
    },
    defaultValue: {
      type: [String, Array]
    },
    startDate: {
      type: String,
      default: Utils.getDay(0)
    },
    endDate: {
      type: String,
      default: Utils.getDay(365)
    },
    firstDayOfWeek: {
      type: Number,
      default: 0,
      validator: (val: number) => val >= 0 && val <= 6
    }
  },
  emits: ['choose', 'close', 'update:visible', 'select'],
  setup(props, { emit, slots }) {
    const showTopBtn = computed(() => {
      return slots.btn;
    });
    const topInfo = computed(() => {
      return slots['top-info'];
    });
    const dayInfo = computed(() => {
      return slots.day;
    });
    const bottomInfo = computed(() => {
      return slots['bottom-info'];
    });
    // element refs
    const calendarRef = ref<null | CalendarRef>(null);
    const scrollToDate = (date: string) => {
      calendarRef.value?.scrollToDate(date);
    };
    const initPosition = () => {
      calendarRef.value?.initPosition();
    };
    useExpose({
      scrollToDate,
      initPosition
    });
    // methods
    const update = () => {
      emit('update:visible', false);
    };

    const close = () => {
      emit('close');
      emit('update:visible', false);
    };

    const choose = (param: string) => {
      close();
      emit('choose', param);
    };

    const closePopup = () => {
      close();
    };
    const select = (param: string) => {
      // close();
      emit('select', param);
    };

    return {
      closePopup,
      update,
      close,
      select,
      choose,
      calendarRef,
      showTopBtn,
      topInfo,
      dayInfo,
      bottomInfo
    };
  }
});
</script>
