<template>
  <div class="nut-rate">
    <span
      class="nut-rate-item"
      :class="[{ 'nut-rate-active': n <= current }]"
      v-for="n in total"
      :key="n"
      @click="onClick($event, n)"
      :style="{
        height: size + 'px',
        width: size + 'px',
        color: `${n <= current ? checkedColor : ''}`,
        marginRight: spacing + 'px',
        backgroundImage: n <= current ? checkedIcon : uncheckedIcon,
      }"
    >
      <i v-if="!checkedIcon || !uncheckedIcon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
          <path
            d="M18,27.4l-7.9,4.1c-0.7,0.4-1.6,0.1-2-0.6c-0.2-0.3-0.2-0.6-0.2-1l1.5-8.8l0,0
	      L3.1,15c-0.6-0.6-0.6-1.5,0-2.1c0.2-0.2,0.5-0.4,0.9-0.4l8.8-1.3l0,0l3.9-8c0.4-0.7,1.3-1,2-0.7c0.3,0.1,0.5,0.4,0.7,0.7l3.9,8l0,0
	      l8.8,1.3c0.8,0.1,1.4,0.9,1.3,1.7c0,0.3-0.2,0.6-0.4,0.9l-6.4,6.2l0,0l1.5,8.8c0.1,0.8-0.4,1.6-1.2,1.7c-0.3,0.1-0.7,0-1-0.2
	      L18,27.4L18,27.4z"
            fill-rule="evenodd"
          />
        </svg>
        <i
          v-if="showHalf"
          class="halfstar_contain"
          @click="halfClick($event, n)"
          :class="[{ 'nut-rate-half-active': halfStarClick ? n <= current + 1 : n <= current }]"
          :style="{ color: `${halfStarClick ? (n <= current + 1 ? checkedColor : '') : n <= current ? checkedColor : ''}` }"
        >
          <svg class="halfstar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <path
              d="M18,27.4l-7.9,4.1c-0.7,0.4-1.6,0.1-2-0.6c-0.2-0.3-0.2-0.6-0.2-1l1.5-8.8l0,0
	        L3.1,15c-0.6-0.6-0.6-1.5,0-2.1c0.2-0.2,0.5-0.4,0.9-0.4l8.8-1.3l0,0l3.9-8c0.4-0.7,1.3-1,2-0.7c0.3,0.1,0.5,0.4,0.7,0.7l3.9,8l0,0
	        l8.8,1.3c0.8,0.1,1.4,0.9,1.3,1.7c0,0.3-0.2,0.6-0.4,0.9l-6.4,6.2l0,0l1.5,8.8c0.1,0.8-0.4,1.6-1.2,1.7c-0.3,0.1-0.7,0-1-0.2
	        L18,27.4L18,27.4z"
              fill-rule="evenodd"
            />
          </svg>
        </i>
      </i>
    </span>
    <slot name="nut-rate-font"></slot>
  </div>
</template>
<script>
import './rate.scss';
export default {
  name: 'nut-rate',
  props: {
    total: {
      type: [String, Number],
      default: 5,
    },
    value: {
      type: [String, Number],
      default: 3,
    },
    size: {
      type: [String, Number],
      default: 25,
    },
    uncheckedIcon: {
      type: String,
      default: null,
    },
    checkedIcon: {
      type: String,
      default: null,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    spacing: {
      type: [String, Number],
      default: 20,
    },
    checkedColor: {
      type: [String],
      default: null,
    },
    showHalf: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      current: 3,
      halfStarClick: false,
    };
  },
  created() {
    if (parseInt(this.value) === parseFloat(this.value)) {
      this.current = this.value;
    } else {
      this.current = this.value;
      this.showHalf = true;
      this.halfStarClick = true;
    }
  },
  methods: {
    onClick($event, idx) {
      if (this.readOnly) {
        return;
      } else {
        this.halfStarClick = false;
        this.current = idx;
        this.$emit('input', idx);
        this.$emit('click', idx);
      }
    },
    halfClick($event, idx) {
      $event.stopPropagation();
      if (!this.showHalf) {
        return;
      }
      if (this.readOnly) {
        return;
      } else {
        this.halfStarClick = true;
        this.current = idx - 0.5;
        this.$emit('input', idx - 0.5);
        this.$emit('click', idx - 0.5);
      }
    },
  },
  watch: {
    value(newVal, oldVal) {
      if (parseInt(newVal) === parseFloat(newVal)) {
        this.current = newVal;
      } else {
        this.current = newVal;
        this.showHalf = true;
        this.halfStarClick = true;
      }
    },
  },
};
</script>
