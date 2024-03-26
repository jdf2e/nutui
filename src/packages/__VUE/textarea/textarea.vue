<template>
  <view :class="classes">
    <textarea
      ref="textareaRef"
      class="nut-textarea__textarea"
      :style="styles"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      :value="modelValue"
      :maxlength="maxLength"
      :placeholder="placeholder || translate('placeholder')"
      :autofocus="autofocus"
      @input="change"
      @blur="blur"
      @focus="focus"
      @change="endComposing"
      @compositionend="endComposing"
      @compositionstart="startComposing"
    />
    <view v-if="limitShow" class="nut-textarea__limit"> {{ modelValue ? modelValue.length : 0 }}/{{ maxLength }}</view>
  </view>
</template>

<script setup lang="ts">
import { type CSSProperties, watch, ref, computed, onMounted, nextTick, toRef } from 'vue'
import { useLocale } from '@/packages/utils/useLocale'
import { useFormDisabled } from '../form/common'

defineOptions({
  name: 'NutTextarea'
})

export interface InputTarget extends HTMLInputElement {
  composing: boolean
}

export type TextareaProps = Partial<{
  modelValue: string
  textAlign: 'left' | 'center' | 'right'
  limitShow: boolean
  maxLength: string | number
  rows: string | number
  placeholder: string
  readonly: boolean
  disabled: boolean
  autosize: boolean | Record<string, number>
  autofocus: boolean
}>

const emit = defineEmits(['update:modelValue', 'change', 'blur', 'focus'])

const props = withDefaults(defineProps<TextareaProps>(), {
  modelValue: '',
  limitShow: false,
  maxLength: '',
  rows: '2',
  placeholder: '',
  readonly: false,
  disabled: false,
  autosize: false,
  autofocus: false
})

const disabled = useFormDisabled(toRef(props, 'disabled'))
const translate = useLocale('NutTextarea')
const textareaRef = ref<HTMLTextAreaElement | null>(null)

const classes = computed(() => {
  const prefixCls = 'nut-textarea'
  return {
    [prefixCls]: true,
    [`${prefixCls}--disabled`]: disabled.value
  }
})

const styles = computed(() => {
  return {
    textAlign: props.textAlign
  } as CSSProperties
})

const setHeight = (height: string | number) => {
  const textarea = textareaRef.value
  textarea!.style.height = typeof height === 'number' ? `${height}px` : height
}

const getContentHeight = () => {
  setHeight('auto')
  let height = textareaRef.value!.scrollHeight
  if (typeof props.autosize === 'object') {
    const { maxHeight, minHeight } = props.autosize
    if (maxHeight !== undefined) {
      height = Math.min(height, maxHeight)
    }
    if (minHeight !== undefined) {
      height = Math.max(height, minHeight)
    }
  }
  if (height) {
    setHeight(height)
  }
}

onMounted(() => {
  if (props.modelValue) {
    emitChange(String(props.modelValue))
  }
  if (props.autosize) {
    nextTick(getContentHeight)
  }
})

watch(
  () => props.modelValue,
  () => {
    if (props.autosize) {
      nextTick(getContentHeight)
    }
  }
)

const emitChange = (value: string, event?: Event) => {
  if (props.maxLength && value.length > Number(props.maxLength)) {
    value = value.substring(0, Number(props.maxLength))
  }
  emit('update:modelValue', value, event)
  emit('change', value, event)
}

const change = (event: Event) => {
  const input = event.target as InputTarget
  if (!input.composing) {
    let value = input.value
    if (props.maxLength && value.length > Number(props.maxLength)) {
      value = value.slice(0, Number(props.maxLength))
    }
    emitChange(input.value, event)
  }
}

const focus = (event: Event) => {
  if (disabled.value || props.readonly) return
  emit('focus', event)
}

const blur = (event: Event) => {
  if (disabled.value || props.readonly) return

  const input = event.target as HTMLInputElement
  const value = input.value

  emitChange(value, event)
  emit('blur', { value, event })
}

const startComposing = ({ target }: Event) => {
  const input = target as InputTarget
  input.composing = true
}

const endComposing = ({ target }: Event) => {
  const input = target as InputTarget
  if (input.composing) {
    input.composing = false
    input.dispatchEvent(new Event('input'))
  }
}
</script>
