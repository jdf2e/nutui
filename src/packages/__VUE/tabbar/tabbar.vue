<template>
  <div :class="{ 'nut-tabbar__placeholder': bottom && placeholder }" :style="{ height: height + 'px' }">
    <view ref="nutTabbar" :class="classes">
      <slot></slot>
    </view>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref, watch, nextTick } from 'vue'
import { useChildren } from '@/packages/utils'
import { TABBAR_KEY } from './types'

defineOptions({
  name: 'NutTabbar'
})

export type TabbarProps = Partial<{
  modelValue: number | string
  bottom: boolean
  unactiveColor: string
  activeColor: string
  safeAreaInsetBottom: boolean
  placeholder: boolean
  beforeSwitch: (data: any, active: string | number) => boolean | Promise<boolean>
}>

const props = withDefaults(defineProps<TabbarProps>(), {
  modelValue: 0,
  bottom: false,
  unactiveColor: '',
  activeColor: '',
  safeAreaInsetBottom: false,
  placeholder: false,
  beforeSwitch: () => true
})

const emit = defineEmits(['tabSwitch', 'update:modelValue'])

const height = ref<number | undefined>()
const nutTabbar = ref<HTMLElement | null>(null)
const activeIndex = ref<number | string>(props.modelValue)

const classes = computed(() => {
  const prefixCls = 'nut-tabbar'
  return {
    [prefixCls]: true,
    'nut-tabbar-bottom': props.bottom,
    'nut-tabbar-safebottom': props.safeAreaInsetBottom
  }
})

const { children, linkChildren } = useChildren(TABBAR_KEY)

const changeIndex = async (index: number, active: number | string) => {
  const res = await props.beforeSwitch(children[index], active)
  if (res === false) {
    return Promise.reject()
  }
  activeIndex.value = active
  emit('update:modelValue', active)
  emit('tabSwitch', children[index], active)
}

linkChildren({ props, activeIndex, changeIndex })

watch(
  () => props.modelValue,
  (val) => {
    activeIndex.value = val
  }
)

const updateHeight = () => {
  if (props.bottom && props.placeholder) {
    nextTick(() => {
      const nutTabbarHeight = nutTabbar.value?.getBoundingClientRect().height
      if (nutTabbarHeight) {
        height.value = nutTabbarHeight
      }
    })
  }
}

onMounted(updateHeight)
</script>
