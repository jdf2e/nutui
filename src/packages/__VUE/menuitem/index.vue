<template>
  <view v-show="state.showWrapper" class="nut-menu-item" :style="style">
    <div
      v-show="state.showPopup"
      class="nut-menu-item-placeholder-element"
      :style="placeholderElementStyle"
      @click="handleClickOutside"
    >
    </div>
    <nut-popup
      v-bind="$attrs"
      v-model:visible="state.showPopup"
      :style="{ position: 'absolute' }"
      :overlay-style="{ position: 'absolute' }"
      :position="parent.props.direction === 'down' ? 'top' : 'bottom'"
      :duration="parent.props.duration"
      :destroy-on-close="false"
      :overlay="parent.props.overlay"
      :lock-scroll="parent.props.lockScroll"
      :teleport-disable="false"
      :close-on-click-overlay="parent.props.closeOnClickOverlay"
      @closed="handleClose"
    >
      <view class="nut-menu-item__content nut-menu-item__overflow">
        <view
          v-for="(option, index) in options"
          :key="index"
          class="nut-menu-item__option"
          :class="[{ active: option.value === modelValue }]"
          :style="{ 'flex-basis': 100 / cols + '%' }"
          @click="onClick(option)"
        >
          <span
            v-if="option.value === modelValue"
            class="nut-menu-item__span"
            :class="[option.value === modelValue ? activeTitleClass : inactiveTitleClass]"
          >
            <slot name="icon">
              <Check v-bind="$attrs" :color="parent.props.activeColor"></Check>
            </slot>
          </span>
          <view
            :class="[option.value === modelValue ? activeTitleClass : inactiveTitleClass]"
            :style="{ color: option.value === modelValue ? parent.props.activeColor : '' }"
            >{{ option.text }}</view
          >
        </view>
        <slot></slot>
      </view>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { reactive, PropType, computed } from 'vue'
import { createComponent } from '@/packages/utils/create'
const { create } = createComponent('menu-item')
import NutPopup from '../popup/index.vue'
import { Check } from '@nutui/icons-vue'
import { useParent } from '@/packages/utils'
import { MENU_KEY, MenuItemOption } from '../menu/types'
export default create({
  props: {
    title: String,
    options: {
      type: Array as PropType<MenuItemOption[]>,
      default: []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: null as unknown as PropType<unknown>,
    cols: {
      type: Number,
      default: 1
    },
    activeTitleClass: String,
    inactiveTitleClass: String
  },
  components: {
    NutPopup,
    Check
  },
  emits: ['update:modelValue', 'change', 'open', 'close'],
  setup(props, { emit }) {
    const state = reactive({
      showPopup: false,
      showWrapper: false
    })

    const { parent } = useParent(MENU_KEY)

    const style = computed(() => {
      return parent.props.direction === 'down'
        ? {
            top: parent.offset.value + 'px'
          }
        : {
            bottom: parent.offset.value + 'px'
          }
    })

    const placeholderElementStyle = computed(() => {
      const heightStyle = { height: parent.offset.value + 'px' }
      if (parent.props.direction === 'down') {
        return { ...heightStyle, top: '0px' }
      } else {
        return { ...heightStyle, bottom: '0px' }
      }
    })

    const toggle = (show = !state.showPopup) => {
      if (show === state.showPopup) {
        return
      }
      state.showPopup = show
      if (show) {
        state.showWrapper = true
        emit('open')
      }
    }

    const renderTitle = () => {
      if (props.title) {
        return props.title
      }
      const match: any = props.options?.find((option: any) => option.value === props.modelValue)
      return match ? match.text : ''
    }

    const onClick = (option: MenuItemOption) => {
      state.showPopup = false
      if (option.value !== props.modelValue) {
        emit('update:modelValue', option.value)
        emit('change', option.value)
      }
    }

    const handleClose = () => {
      emit('close')
      state.showWrapper = false
    }

    const handleClickOutside = () => {
      state.showPopup = false
      emit('close')
    }

    return {
      style,
      placeholderElementStyle,
      renderTitle,
      state,
      parent,
      toggle,
      onClick,
      handleClose,
      handleClickOutside
    }
  }
})
</script>
