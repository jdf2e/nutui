<template>
  <view class="nut-empty">
    <view class="nut-empty__box" :style="style">
      <slot name="image">
        <img v-if="src" class="nut-empty__box--img" :src="src" />
      </slot>
    </view>

    <slot name="description">
      <view class="nut-empty__description">{{ descriptionText }}</view>
    </slot>

    <slot></slot>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { EmptyImage } from './types'
import { pxCheck } from '@/packages/utils/pxCheck'
import { useLocale } from '@/packages/utils/useLocale'

const cN = 'NutEmpty'

defineOptions({
  name: cN
})

export type EmptyProps = Partial<{
  image: EmptyImage
  imageSize: number | string
  description: string
}>

const props = withDefaults(defineProps<EmptyProps>(), {
  image: 'empty',
  imageSize: '',
  description: ''
})

const translate = useLocale(cN)

const defaultStatus: {
  [key: EmptyImage]: string
} = {
  empty: 'https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png',
  error: 'https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png',
  network: 'https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png'
}

const style = computed(() => {
  if (props.imageSize) {
    return {
      width: pxCheck(props.imageSize),
      height: pxCheck(props.imageSize)
    }
  }
  return {}
})

const src = computed(() => /^https?:\/\/|^\/\//.test(props.image) ? props.image : defaultStatus[props.image])

const descriptionText = computed(() => props.description || translate('noData'))
</script>
