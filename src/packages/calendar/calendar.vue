<template>
  <nut-popup v-model="childIsVisible" position="bottom" round @click-overlay="closeActionSheet" v-if="poppable">
    <nut-calendar-slot
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
      <div slot="shortcut" class="nut-calendar-shortcut">
        <slot name="shortcut"></slot>
      </div>
    </nut-calendar-slot>
  </nut-popup>
  <nut-calendar-slot
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
    <div slot="shortcut" class="nut-calendar-shortcut">
      <slot name="shortcut"></slot>
    </div>
  </nut-calendar-slot>
</template>
<script>
import nutcalendarslot from './calendar-slot.vue';
export default {
  name: 'nut-calendar',
  components: {
    [nutcalendarslot.name]: nutcalendarslot,
  },
  props: {
    type: {
      type: String,
    },
    isAutoBackFill: {
      type: Boolean,
    },
    poppable: {
      type: Boolean,
      default: true,
    },
    isVisible: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    defaultValue: {
      type: String | Array,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
  },
  data() {
    return {
      childIsVisible: false,
    };
  },
  watch: {
    isVisible(newValue, oldValue) {
      this.childIsVisible = newValue;
    },
  },
  methods: {
    closeActionSheet() {
      this.$refs.mychild.closeActionSheet();
    },
    update() {
      this.childIsVisible = false;
    },
    close() {
      this.$emit('close');
    },
    choose(param) {
      this.close();
      this.$emit('choose', param);
    },
  },
};
</script>
