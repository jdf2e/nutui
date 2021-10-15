<template>
  <nut-popup
    v-if="poppable"
    v-model:visible="show"
    position="bottom"
    round
    closeable
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
import { PropType, ref, watch } from 'vue';
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
    visible: {
      type: Boolean,
      default: true
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
    let show = ref(props.visible);
    // element refs
    const calendarRef = ref<null | HTMLElement>(null);

    // methods
    const update = () => {
      show.value = false;
      emit('update:visible', false);
    };

    const close = () => {
      show.value = false;
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

    watch(
      () => props.visible,
      (value: boolean) => {
        show.value = value;
      }
    );

    return {
      show,
      closePopup,
      update,
      close,
      choose,
      calendarRef
    };
  }
});
</script>
