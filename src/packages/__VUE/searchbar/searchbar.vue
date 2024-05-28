<template>
  <view class="nut-searchbar" :class="{ 'safe-area-inset-bottom': safeAreaInsetBottom }" :style="searchbarStyle">
    <span v-if="label" class="nut-searchbar__search-label">{{ label }}</span>
    <view v-if="$slots.leftout" class="nut-searchbar__search-icon nut-searchbar__left-search-icon">
      <slot name="leftout"></slot>
    </view>
    <view :class="[`nut-searchbar__search-input`, shape]" :style="inputSearchbarStyle">
      <view
        v-if="$slots.leftin"
        class="nut-searchbar__search-icon nut-searchbar__iptleft-search-icon"
        @click="leftIconClick"
      >
        <slot name="leftin"></slot>
      </view>
      <view :class="['nut-searchbar__input-inner', $slots.rightin && 'nut-searchbar__input-inner-absolute']">
        <form class="nut-searchbar__input-form" action="#" @submit.prevent="handleSubmit">
          <input
            ref="inputsearch"
            :class="['nut-searchbar__input-bar', clearable && 'nut-searchbar__input-bar_clear']"
            :type="inputType"
            :maxlength="maxLength"
            :placeholder="placeholder || translate('placeholder')"
            :value="modelValue"
            :disabled="disabled"
            :readonly="readonly"
            :style="styleSearchbar"
            @click="clickInput"
            @input="valueChange"
            @focus="valueFocus"
            @blur="valueBlur"
          />
        </form>
      </view>
      <view :class="['nut-searchbar__input-inner-icon', $slots.rightin && 'nut-searchbar__input-inner-icon-absolute']">
        <view
          v-if="clearable"
          v-show="String(modelValue).length > 0"
          class="nut-searchbar__search-icon nut-searchbar__input-clear"
          @click="handleClear"
        >
          <template v-if="$slots['clear-icon']">
            <slot name="clear-icon"></slot>
          </template>
          <component :is="renderIcon(clearIcon)" v-else></component>
        </view>
        <view
          v-if="$slots.rightin"
          class="nut-searchbar__search-icon nut-searchbar__iptright-search-icon"
          @click="rightIconClick"
        >
          <slot name="rightin"></slot>
        </view>
      </view>
    </view>
    <view v-if="$slots.rightout" class="nut-searchbar__search-icon nut-searchbar__right-search-icon">
      <slot name="rightout"></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, Ref, CSSProperties, toRef } from 'vue'
import { renderIcon } from '@/packages/utils/create'
import { CircleClose } from '@nutui/icons-vue'
import { SearchbarInputAlign, SearchbarShape } from './types'
import { useLocale } from '@/packages/utils/useLocale'
import { useFormDisabled } from '../form/common'

defineOptions({
  name: 'NutSearchbar'
})

export type SearchbarProps = Partial<{
  modelValue: string | number
  inputType: string
  label: string
  shape: SearchbarShape
  maxLength: string | number
  placeholder: string
  clearable: boolean
  clearIcon: any
  background: string
  inputBackground: string
  focusStyle: CSSProperties
  autofocus: boolean
  disabled: boolean
  readonly: boolean
  inputAlign: SearchbarInputAlign
  safeAreaInsetBottom: boolean
}>

const props = withDefaults(defineProps<SearchbarProps>(), {
  modelValue: '',
  inputType: 'text',
  label: '',
  shape: 'round',
  maxLength: '9999',
  placeholder: '',
  clearable: true,
  clearIcon: CircleClose,
  background: '',
  inputBackground: '',
  autofocus: false,
  disabled: false,
  readonly: false,
  inputAlign: 'left',
  safeAreaInsetBottom: false
})

const emit = defineEmits([
  'change',
  'update:modelValue',
  'blur',
  'focus',
  'clear',
  'search',
  'clickInput',
  'clickLeftIcon',
  'clickRightIcon'
])

const disabled = useFormDisabled(toRef(props, 'disabled'))
const translate = useLocale('NutSearchbar')
const focus = ref(false)
const inputsearch: Ref<HTMLElement | null> = ref(null)

const searchbarStyle = computed(() => {
  return {
    background: props.background
  } as CSSProperties
})

const inputSearchbarStyle = computed(() => {
  let style: CSSProperties = {
    background: props.inputBackground
  }
  if (focus.value && props.focusStyle) {
    style = { ...style, ...props.focusStyle }
  }
  return style
})

const styleSearchbar = computed(() => {
  return {
    textAlign: props.inputAlign
  } as CSSProperties
})

const valueChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  let val = input.value

  if (props.maxLength && val.length > Number(props.maxLength)) {
    val = val.slice(0, Number(props.maxLength))
  }
  emit('update:modelValue', val, event)
  emit('change', val, event)
}

const valueFocus = (event: Event) => {
  const input = event.target as HTMLInputElement
  let value = input.value
  focus.value = true
  emit('focus', value, event)
}

const valueBlur = (event: Event) => {
  setTimeout(() => {
    focus.value = false
  }, 0)

  const input = event.target as HTMLInputElement
  let value = input.value
  if (props.maxLength && value.length > Number(props.maxLength)) {
    value = value.slice(0, Number(props.maxLength))
  }
  emit('blur', value, event)
}

const handleClear = (event: Event) => {
  emit('update:modelValue', '', event)
  emit('change', '', event)
  emit('clear', '')
}

const handleSubmit = () => {
  emit('search', props.modelValue)
}

const clickInput = (event: Event) => {
  emit('clickInput', event)
}

const leftIconClick = (event: Event) => {
  emit('clickLeftIcon', props.modelValue, event)
}

const rightIconClick = (event: Event) => {
  emit('clickRightIcon', props.modelValue, event)
}

onMounted(() => {
  if (props.autofocus) {
    ;(inputsearch.value as HTMLElement).focus()
  }
})
</script>
