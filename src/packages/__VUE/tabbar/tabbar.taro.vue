<template>
  <view :class="{ 'nut-tabbar__placeholder': bottom && placeholder }" :style="{ height }">
    <view :id="`nut-tabbar-${refRandomId}`" ref="nutTabbarRef" class="nut-tabbar"
          :class="{ 'nut-tabbar-bottom': bottom, 'nut-tabbar-safebottom': safeAreaInsetBottom }">
      <slot></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import Taro from '@tarojs/taro'
import { useTaroRect } from '@/packages/utils/useTaroRect'
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

const refRandomId = Math.random().toString(36).slice(-8)
const height = ref('auto')
const nutTabbarRef = ref<HTMLElement | null>(null)
const activeIndex = ref<number | string>(props.modelValue)

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
    Taro.nextTick(() => {
      useTaroRect(nutTabbarRef).then(
        (rect: any) => {
          height.value = `${rect.height}px`
        },
        () => { }
      )
    })
  }
}

onMounted(updateHeight)
</script>
