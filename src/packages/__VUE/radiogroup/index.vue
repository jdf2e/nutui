<script lang="ts">
import { h, provide, computed, readonly, watch, PropType } from 'vue'
import { createComponent } from '@/packages/utils/create'
import { RADIO_KEY, RadioGroupTextPosition, RadioGroupDirection } from '../radio/types'
const { componentName, create } = createComponent('radio-group')

export default create({
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: ''
    },
    direction: {
      type: String as PropType<RadioGroupDirection>,
      default: 'vertical'
    },
    textPosition: {
      type: String as PropType<RadioGroupTextPosition>,
      default: 'right'
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit, slots }) {
    const updateValue = (value: string | boolean | number) => emit('update:modelValue', value)

    provide(RADIO_KEY, {
      label: readonly(computed(() => props.modelValue)),
      position: readonly(computed(() => props.textPosition)),
      updateValue
    })

    watch(
      () => props.modelValue,
      value => emit('change', value)
    )

    return () => {
      return h(
        'view',
        {
          class: `${componentName} ${componentName}--${props.direction}`
        },
        slots.default?.()
      )
    }
  }
})
</script>
