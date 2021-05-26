<template>
  <nut-popup
    v-if="poppable"
    :visible="visible"
    position="bottom"
    round
    :closeable="true"
    @click-overlay="closePopup"
    @click-close-icon="closePopup"
  >
    <nut-calendar-item
      props
      ref="calendarRef"
      :type="type"
      :is-auto-back-fill="isAutoBackFill"
      :poppable="poppable"
      :title="title"
      :default-value="defaultValue"
      :start-date="startDate"
      :end-date="endDate"
      @update="update"
      @close="close"
      @choose="choose"
    >
    </nut-calendar-item>
  </nut-popup>
  <nut-calendar-item
    v-else
    :type="type"
    :is-auto-back-fill="isAutoBackFill"
    :poppable="poppable"
    :title="title"
    :default-value="defaultValue"
    :start-date="startDate"
    :end-date="endDate"
    @close="close"
    @choose="choose"
  >
  </nut-calendar-item>
</template>
<script lang="ts">
import { PropType, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('calendar');
import Popup from '@/packages/__VUE/popup/index.vue';
import CalendarItem from '@/packages/__VUE/calendaritem/index.vue';
import Utils from '@/packages/utils/date';
type InputDate = string | string[];
export default create({
  children: [CalendarItem, Popup],
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
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '日历选择'
    },
    defaultValue: {
      type: String as PropType<InputDate>
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
  emits: ['choose', 'close', 'update:visible'],
  setup(props, { emit }) {
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

    const closePopup = () => {
      close();
    };

    return {
      closePopup,
      update,
      close,
      choose,
      calendarRef
    };
  }
});
</script>

<style lang="scss">
.popup-box {
  height: 518px;
}
</style>
