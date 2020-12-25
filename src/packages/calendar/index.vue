<template>
  <nut-popup
    v-model:show="state.childIsVisible"
    position="bottom"
    round
    @click="closeActionSheet"
    v-if="poppable"
  >
    <nut-calendar-item
      props
      ref="mychild"
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
import { PropType, reactive, ref, watch, toRefs } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('calendar');
import Popup from '@/packages/popup/index.vue';
import CalendarItem from '@/packages/calendar-item/index.vue';
import Utils from '@/utils/date';
type InputDate = string | string[];

export default create({
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
    isVisible: {
      type: Boolean
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
  components: {},
  emits: ['choose', 'close'],

  setup(props, { emit }) {
    // element refs
    const mychild = ref<null | HTMLElement>(null);

    // state
    const state = reactive({
      childIsVisible: false
    });

    // methods
    const closeActionSheet = () => {
      //mychild.value && mychild.value.closeActionSheet();
    };

    const update = () => {
      state.childIsVisible = false;
    };

    const close = () => {
      emit('close');
    };

    const choose = param => {
      close();
      emit('choose', param);
    };

    watch(
      () => props.isVisible,
      val => {
        if (val) {
          state.childIsVisible = true;
        }
      }
    );

    return {
      closeActionSheet,
      update,
      close,
      choose,
      mychild,
      state,
      ...toRefs(props)
    };
  }
});
</script>

<style lang="scss">
.popup-box {
  height: 518px;
}
</style>
