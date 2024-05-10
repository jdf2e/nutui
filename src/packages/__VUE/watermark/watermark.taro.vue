<template>
  <view :class="classes" :style="{
    zIndex,
    backgroundSize: `${gapX + width}px`,
    backgroundImage: `url('${base64Url}')`
  }">
  </view>
</template>
<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import Taro from '@tarojs/taro'

defineOptions({
  name: 'NutWatermark'
})

export type WatermarkProps = Partial<{
  gapX: number
  gapY: number
  zIndex: number
  width: number
  height: number
  rotate: number
  image: string
  imageWidth: number
  imageHeight: number
  content: string | string[]
  fontColor: string
  fontStyle: string
  fontFamily: string
  fontWeight: string
  fontSize: string | number
  fullPage: boolean
}>

const props = withDefaults(defineProps<WatermarkProps>(), {
  gapX: 24,
  gapY: 48,
  zIndex: 2000,
  width: 120,
  height: 64,
  rotate: -22,
  imageWidth: 120,
  imageHeight: 64,
  content: '',
  fontColor: 'rgba(0,0,0,.15)',
  fontStyle: 'normal',
  fontFamily: 'PingFang SC',
  fontWeight: 'normal',
  fontSize: 14,
  fullPage: true
})

const base64Url = ref('')

const classes = computed(() => {
  const prefixCls = 'nut-watermark'
  return {
    [prefixCls]: true,
    [`${prefixCls}-full-page`]: props.fullPage
  }
})

const init = async () => {
  let ratio = 1
  Taro.getSystemInfo({
    success(res) {
      ratio = res.pixelRatio
    }
  })
  const canvasWidth = `${(props.gapX + props.width) * ratio}`
  const canvasHeight = `${(props.gapY + props.height) * ratio}`
  const markWidth = props.width * ratio
  const markHeight = props.height * ratio
  const canvas: Taro.OffscreenCanvas = Taro.createOffscreenCanvas({
    type: '2d',
    width: Number(canvasWidth),
    height: Number(canvasHeight)
  })
  const ctx: any = canvas.getContext('2d')

  if (ctx) {
    if (props.image) {
      // 创建一个图片
      const img = canvas.createImage() as HTMLImageElement
      dealWithImage(ctx, img, ratio, ctx.canvas, markWidth, markHeight)
    } else if (props.content) {
      dealWithText(ctx, ratio, ctx.canvas, markWidth, markHeight)
    }
  } else {
    throw new Error('当前环境不支持Canvas')
  }
}
const initH5 = () => {
  const canvas = document.createElement('canvas')
  const ratio = window.devicePixelRatio
  const ctx = canvas.getContext('2d')
  const canvasWidth = `${(props.gapX + props.width) * ratio}px`
  const canvasHeight = `${(props.gapY + props.height) * ratio}px`
  const markWidth = props.width * ratio
  const markHeight = props.height * ratio
  canvas.setAttribute('width', canvasWidth)
  canvas.setAttribute('height', canvasHeight)

  console.log(markWidth, markHeight, canvasWidth, canvasHeight, ratio)
  if (ctx) {
    if (props.image) {
      const img = new Image()
      dealWithImage(ctx, img, ratio, canvas, markWidth, markHeight)
    } else if (props.content) {
      dealWithText(ctx, ratio, canvas, markWidth, markHeight)
    }
  } else {
    throw new Error('当前环境不支持Canvas')
  }
}
const dealWithImage = (
  ctx: any,
  img: HTMLImageElement,
  ratio: number,
  canvas: HTMLCanvasElement,
  markWidth: number,
  markHeight: number
) => {
  ctx.translate(markWidth / 2, markHeight / 2)
  ctx.rotate((Math.PI / 180) * Number(props.rotate))
  img.crossOrigin = 'anonymous'
  img.referrerPolicy = 'no-referrer'
  img.src = props.image || '' // 要加载的图片 url, 可以是base64
  img.onload = () => {
    ctx.drawImage(
      img,
      (-props.imageWidth * ratio) / 2,
      (-props.imageHeight * ratio) / 2,
      props.imageWidth * ratio,
      props.imageHeight * ratio
    )
    ctx.restore()
    base64Url.value = canvas.toDataURL()
  }
}
const dealWithText = (
  ctx: any,
  ratio: number,
  canvas: HTMLCanvasElement,
  markWidth: number,
  markHeight: number
) => {
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'center'
  // 文字绕中间旋转
  ctx.translate(markWidth / 2, markHeight / 2)
  ctx.rotate((Math.PI / 180) * Number(props.rotate))
  const markSize = Number(props.fontSize) * ratio
  ctx.font = `${props.fontStyle} normal ${props.fontWeight} ${markSize}px/${markHeight}px ${props.fontFamily}`
  ctx.fillStyle = props.fontColor
  if (Array.isArray(props.content)) {
    props.content.map((item, index) => {
      ctx.fillText(item, 0, (index - 1) * markSize)
    })
  } else {
    ctx.fillText(props.content, 0, 0)
  }
  ctx.restore()
  base64Url.value = canvas.toDataURL()
}

watchEffect(() => {
  if (Taro.getEnv() === 'WEB') {
    initH5()
  } else {
    init()
  }
})
</script>
