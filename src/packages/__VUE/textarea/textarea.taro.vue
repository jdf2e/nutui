<template>
  <view :class="classes">
    <textarea
      ref="textareaRef"
      v-bind="$attrs"
      :class="['nut-textarea__textarea', env == 'ALIPAY' && 'nut-textarea__ali']"
      :style="styles"
      :rows="rows"
      :disabled="(disabled || readonly) ? (disabled || readonly) : undefined"
      :value="modelValue"
      :show-count="false"
      :maxlength="maxLength ? maxLength : -1"
      :placeholder="placeholder || translate('placeholder')"
      :auto-focus="autofocus ? true : undefined"
      @input="change"
      @blur="blur"
      @focus="focus"
      @change="endComposing"
      @compositionend="endComposing"
      @compositionstart="startComposing"
    />
    <view v-if="limitShow" class="nut-textarea__limit"> {{ modelValue ? modelValue.length : 0 }}/{{ maxLength }}</view>
    <view v-if="autosize" class="nut-textarea__cpoyText" :style="copyTextStyle">{{ modelValue }}</view>
  </view>
</template>

<script setup lang="ts">
import { type CSSProperties, computed, nextTick, onMounted, ref, toRef, watch } from 'vue'
import Taro from '@tarojs/taro'
import { useLocale } from '@/packages/utils/useLocale'
import { useFormDisabled } from '../form/common'

const cN = 'NutTextarea'

defineOptions({
  name: cN,
  inheritAttrs: false
})

export interface InputTarget extends HTMLInputElement {
  composing?: boolean
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

const emit = defineEmits(['update:modelValue', 'change', 'blur', 'focus'])

const disabled = useFormDisabled(toRef(props, 'disabled'))
const translate = useLocale(cN)
const textareaRef = ref<any>(null)
const textareaHeight = ref(20)
const heightSet = ref('auto')
const composing = ref(false)
const env = Taro.getEnv()

const classes = computed(() => {
  const prefixCls = 'nut-textarea'
  return {
    [prefixCls]: true,
    [`${prefixCls}--disabled`]: disabled.value
  }
})

const styles = computed(() => {
  const styleObj: CSSProperties = {}
  if (props.textAlign) {
    styleObj['textAlign'] = props.textAlign
  }
  if (props.autosize) {
    styleObj['height'] = heightSet.value
  }
  return styleObj
})

const copyTextStyle = ref<CSSProperties>({
  wordBreak: 'break-all',
  width: '0'
})

const emitChange = (value: string, event: Event) => {
  if (props.maxLength && value.length > Number(props.maxLength)) {
    value = value.substring(0, Number(props.maxLength))
  }
  emit('update:modelValue', value, event)
  emit('change', value, event)
}

const change = (event: Event) => {
  if (env === Taro.ENV_TYPE.WEB) {
    if (!composing.value) {
      _onInput(event)
    }
  } else {
    _onInput(event)
  }
}

const _onInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  let value = input.value
  if (props.maxLength && value.length > Number(props.maxLength)) {
    value = value.slice(0, Number(props.maxLength))
  }
  emitChange(value, event)
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
  emit('blur', event)
}

const getContentHeight = () => {
  heightSet.value = 'auto'
  let height = textareaHeight.value
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
    heightSet.value = height + 'px'
  }
}
watch(
  () => props.modelValue,
  () => {
    if (props.autosize) {
      setTimeout(() => {
        copyHeight()
      }, 100)
    }
  }
)

const copyHeight = () => {
  const query = Taro.createSelectorQuery()
  query.select('.nut-textarea__cpoyText').boundingClientRect()
  query.exec((res) => {
    if (res[0]) {
      if (props.modelValue == '') {
        textareaHeight.value = 20
      } else {
        textareaHeight.value = res[0]['height'] || 20
      }
      nextTick(getContentHeight)
    }
  })
}

const getRefHeight = () => {
  const query = Taro.createSelectorQuery()
  query.selectAll('.nut-textarea__textarea').boundingClientRect()
  let uid = textareaRef.value ? textareaRef.value.uid : '0'
  query.exec((res: any) => {
    if (res[0] && textareaRef.value) {
      let _item: any = Array.from(res[0]).filter((item: any) => item.id == uid)
      if (_item[0]) {
        if (env !== Taro.ENV_TYPE.WEAPP) {
          textareaHeight.value = _item[0]['height'] || 20
        }
        copyTextStyle.value.width = _item[0]['width'] + 'px'
      }
      nextTick(getContentHeight)
    }
  })
}

const getRefWidth = () => {
  const query = Taro.createSelectorQuery()
  query.select('.nut-textarea__textarea').boundingClientRect()
  query.exec((res: any) => {
    if (res[0] && textareaRef.value) {
      copyTextStyle.value.width = res[0]['width'] + 'px'
    }
  })
}

onMounted(() => {
  if (props.autosize) {
    Taro.nextTick(() => {
      setTimeout(() => {
        if (env === 'ALIPAY' || env === 'WEB') {
          getRefWidth()
          copyHeight()
        } else {
          getRefHeight()
        }
      }, 300)
    })
  }
})

const startComposing = () => {
  if (env === Taro.ENV_TYPE.WEB) {
    composing.value = true
  }
}

const endComposing = ({ target }: Event) => {
  if (env === Taro.ENV_TYPE.WEB) {
    if (composing.value) {
      composing.value = false
      if (target) {
        target.dispatchEvent?.(new Event('input'))
      }
    }
  }
}
</script>
