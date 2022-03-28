<template>
  <nut-popup
    v-if="poppable"
    :visible="visible"
    position="bottom"
    round
    :closeable="true"
    @click-overlay="closePopup"
    @click-close-icon="closePopup"
    :destroy-on-close="true"
    :style="{ height: '85vh' }"
  >
    <nut-calendar-item
      v-if="visible"
      props
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
      @update="update"
      @close="close"
      @choose="choose"
      @select="select"
      :show-today="showToday"
      :show-title="showTitle"
      :show-sub-title="showSubTitle"
    >
      <template v-slot:btn v-if="showTopBtn">
        <slot name="btn"> </slot>
      </template>
      <template v-slot:day="date" v-if="dayInfo">
        <slot name="day" :date="date.date"> </slot>
      </template>
      <template v-slot:topInfo="date" v-if="topInfo">
        <slot name="topInfo" :date="date.date"> </slot>
      </template>
      <template v-slot:bottomInfo="date" v-if="bottomInfo">
        <slot name="bottomInfo" :date="date.date"> </slot>
      </template>
    </nut-calendar-item>
  </nut-popup>
  <nut-calendar-item
    v-else
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
    @update="update"
    @close="close"
    @choose="choose"
    @select="select"
    :show-today="showToday"
    :show-title="showTitle"
    :show-sub-title="showSubTitle"
  >
    <template v-slot:btn v-if="showTopBtn">
      <slot name="btn"> </slot>
    </template>
    <template v-slot:day="date" v-if="dayInfo">
      <slot name="day" :date="date.date"> </slot>
    </template>
    <template v-slot:topInfo="date" v-if="topInfo">
      <slot name="topInfo" :date="date.date"> </slot>
    </template>
    <template v-slot:bottomInfo="date" v-if="bottomInfo">
      <slot name="bottomInfo" :date="date.date"> </slot>
    </template>
  </nut-calendar-item>
</template>
<script lang="ts">
import { PropType, ref, computed } from 'vue';
import { createComponent } from '../../utils/create';
const { create } = createComponent('calendar');
import CalendarItem from '../calendaritem/index.vue';
import Utils from '../../utils/date';
type InputDate = string | string[];
export default create({
  components: {
    [CalendarItem.name]: CalendarItem
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
      default: '日历选择'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    startText: {
      type: String,
      default: '开始'
    },
    endText: {
      type: String,
      default: '结束'
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
    }
  },
  emits: ['choose', 'close', 'update:visible', 'select'],
  setup(props, { emit, slots }) {
    const showTopBtn = computed(() => {
      return slots.btn;
    });
    const topInfo = computed(() => {
      return slots.topInfo;
    });
    const dayInfo = computed(() => {
      return slots.day;
    });
    const bottomInfo = computed(() => {
      return slots.bottomInfo;
    });
    // element refs
    const calendarRef = ref<null | HTMLElement>(null);

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
    const select = (param: string) => {
      // close();
      emit('select', param);
    };

    const closePopup = () => {
      close();
    };

    return {
      closePopup,
      update,
      close,
      choose,
      select,
      calendarRef,
      showTopBtn,
      topInfo,
      dayInfo,
      bottomInfo
    };
  }
});
</script>
