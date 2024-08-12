<template>
  <view class="nut-avatar-cropper taro" :class="{ round: shape === 'round' }">
    <slot></slot>
    <view class="nut-avatar-cropper__edit-text" @click.stop="chooseImage">{{ editText }}</view>
  </view>
  <view v-show="visible" class="nut-cropper-popup">
    <canvas
      :id="canvasId"
      :canvas-id="canvasId"
      :type="showCanvas2D ? '2d' : undefined"
      :style="canvasStyle"
      class="nut-cropper-popup__canvas"
    ></canvas>
    <view
      class="nut-cropper-popup__highlight"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    >
      <view class="highlight" :class="{ highlight__round: shape === 'round' }" :style="highlightStyle"></view>
    </view>
    <view class="nut-cropper-popup__toolbar" :class="[toolbarPosition]">
      <slot v-if="$slots.toolbar" name="toolbar"></slot>
      <view v-else class="flex-sb">
        <view class="nut-cropper-popup__toolbar-item" @click="cancel()">
          <nut-button type="danger">{{ cancelText }}</nut-button>
        </view>
        <view class="nut-cropper-popup__toolbar-item" @click="reset">
          <IconFont name="refresh2" color="#fff" />
        </view>
        <view class="nut-cropper-popup__toolbar-item" @click="rotate">
          <IconFont name="retweet" color="#fff" />
        </view>
        <view class="nut-cropper-popup__toolbar-item" @click="confirm">
          <nut-button type="success">{{ confirmText }}</nut-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { watch, ref, reactive, toRefs, computed, PropType, onMounted } from 'vue'
import NutButton from '../button/index.taro'
import { createComponent } from '@/packages/utils/create'
import type {
  AvatarCropperToolbarPosition,
  AvatarCropperSizeType,
  AvatarCropperSourceType,
  AvatarCropperShape
} from './types'
const { create } = createComponent('avatar-cropper')
import { IconFont } from '@nutui/icons-vue-taro'
import { useTouch } from '@/packages/utils/useTouch'
import { preventDefault, clamp } from '@/packages/utils/util'
import Taro, { useReady } from '@tarojs/taro'
import { easySetFillStyle } from '@/packages/utils/canvas'

export default create({
  components: {
    NutButton,
    IconFont
  },
  props: {
    maxZoom: {
      type: Number,
      default: 3
    },
    space: {
      type: Number,
      default: 10
    },
    toolbarPosition: {
      type: String as PropType<AvatarCropperToolbarPosition>,
      default: 'bottom'
    },
    editText: {
      type: String,
      default: '编辑'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    shape: {
      type: String as PropType<AvatarCropperShape>,
      default: 'square'
    },
    sizeType: {
      type: Array as PropType<AvatarCropperSizeType[]>,
      default: () => ['original', 'compressed']
    },
    sourceType: {
      type: Array as PropType<AvatarCropperSourceType[]>,
      default: () => ['album', 'camera']
    }
  },
  emits: ['confirm', 'cancel'],
  setup(props, { emit, expose }) {
    const state = reactive({
      visible: false,
      defScale: 1,
      scale: 1,
      angle: 0,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      displayWidth: 0,
      displayHeight: 0,
      cropperWidth: 0,
      cropperHeight: 0
    })
    interface DrawImage {
      x: number
      y: number
      width: number
      height: number
    }
    interface CanvasAll {
      canvasId: string
      cropperCanvas: any | null
      cropperCanvasContext: Taro.CanvasContext | null
    }
    const canvasAll: CanvasAll = {
      canvasId: `canvas-${Date.now()}`,
      cropperCanvas: null,
      cropperCanvasContext: null
    }
    // 绘制图片
    const drawImage = ref<DrawImage>({
      x: 0, // 在画布上x的坐标位置
      y: 0, // 在画布上y的坐标位置
      width: 0, // 要使用的图像的宽度
      height: 0 // 要使用的图像的高度
    })
    // 规定要使用的图像
    let canvasImage: HTMLImageElement | string | null = null
    // 触摸
    const touch = useTouch()
    // 获取系统信息
    const systemInfo: Taro.getSystemInfoSync.Result = Taro.getSystemInfoSync()
    // 判断是否可以开启canvas2d，支付宝基础库2.7.0以上支持，微信基础库2.9.0以上支持
    const showCanvas2D = computed(() => {
      return (
        (Taro.getEnv() === 'ALIPAY' && parseInt((Taro as any).SDKVersion.replace(/\./g, '')) >= 270)
        || (systemInfo.SDKVersion
        && parseInt(systemInfo.SDKVersion.replace(/\./g, '')) >= 290
        && Taro.getEnv() === 'WEAPP')
      )
    })
    const showPixelRatio = Taro.getEnv() === 'WEB' || showCanvas2D.value
    const pixelRatio = showPixelRatio ? systemInfo.pixelRatio : 1
    state.displayWidth = systemInfo.windowWidth * pixelRatio
    state.displayHeight = systemInfo.windowHeight * pixelRatio
    state.cropperWidth = state.cropperHeight = state.displayWidth - props.space * pixelRatio * 2

    useReady(() => {
      if (showCanvas2D.value) {
        const { canvasId } = canvasAll
        Taro.createSelectorQuery()
          .select(`#${canvasId}`)
          .node(({ node: canvas }) => {
            canvas.width = state.displayWidth
            canvas.height = state.displayHeight
            canvasAll.cropperCanvas = canvas
          })
          .exec()
      }
    })

    // 初始化canvas
    onMounted(() => {
      const { canvasId } = canvasAll
      canvasAll.cropperCanvasContext = Taro.createCanvasContext(canvasId)
    })

    // 是否是横向
    const isAngle = computed(() => {
      return state.angle === 90 || state.angle === 270
    })

    // 高亮框样式
    const highlightStyle = computed(() => {
      const { cropperWidth } = state
      const width = cropperWidth / pixelRatio + 'px'
      const height = width
      return {
        width,
        height
      }
    })

    const canvasStyle = computed(() => {
      const { displayWidth, displayHeight } = state
      return {
        width: `${displayWidth / pixelRatio}px`,
        height: `${displayHeight / pixelRatio}px`
      }
    })

    const cutCanvasStyle = computed(() => {
      const { displayWidth, displayHeight, cropperWidth } = state
      return {
        top: `${(displayHeight / pixelRatio - cropperWidth / pixelRatio) / 2}px`,
        left: `${(displayWidth / pixelRatio - cropperWidth / pixelRatio) / 2}px`,
        width: `${cropperWidth / pixelRatio}px`,
        height: `${cropperWidth / pixelRatio}px`
      }
    })

    // 最大横向移动距离
    const maxMoveX = computed(() => {
      const { displayWidth, scale, cropperWidth } = state
      const { height } = drawImage.value
      if (isAngle.value) {
        return Math.max(0, (height * scale - cropperWidth) / 2)
      }
      return Math.max(0, (displayWidth * scale - cropperWidth) / 2)
    })

    // 最大纵向移动距离
    const maxMoveY = computed(() => {
      const { displayWidth, scale, cropperWidth } = state
      const { height } = drawImage.value
      if (isAngle.value) {
        return Math.max(0, (displayWidth * scale - cropperWidth) / 2)
      }
      return Math.max(0, (height * scale - cropperWidth) / 2)
    })

    // base64转图片
    const dataURLToImage = (dataURL: string): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.src = dataURL
      })
    }

    // base64转图片(canvasImage)
    const dataURLToCanvasImage = (canvas: any, dataURL: string): Promise<HTMLImageElement> => {
      if (!canvas) {
        return Promise.reject(new Error('Invalid canvas element'))
      }
      return new Promise((resolve) => {
        const img = canvas.createImage()
        img.onload = () => resolve(img)
        img.src = dataURL
      })
    }

    const canvas2dDraw = (ctx: CanvasRenderingContext2D) => {
      if (!ctx) return
      const { width, height, x, y } = drawImage.value
      const { moveX, moveY, scale, angle, displayWidth, displayHeight } = state
      ctx.clearRect(0, 0, displayWidth, displayHeight)
      // 绘制偏移量
      ctx.translate(displayWidth / 2 + moveX, displayHeight / 2 + moveY)
      // 绘制旋转角度
      ctx.rotate((Math.PI / 180) * angle)
      // 绘制缩放
      ctx.scale(scale, scale)
      // 绘制图片
      ctx.drawImage(canvasImage as HTMLImageElement, x, y, width, height)
    }

    // web绘制
    const webDraw = () => {
      const { displayWidth, displayHeight } = state
      const canvasDom: HTMLElement | null = document.getElementById(canvasAll.canvasId)
      let canvas: HTMLCanvasElement = canvasDom as HTMLCanvasElement
      if (canvasDom?.tagName !== 'CANVAS') {
        canvas = canvasDom?.getElementsByTagName('canvas')[0] as HTMLCanvasElement
        canvas.width = displayWidth
        canvas.height = displayHeight
      }
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      canvas2dDraw(ctx)
    }

    const canvas2dContextDraw = () => {
      const { cropperCanvas } = canvasAll
      let ctx = cropperCanvas.getContext('2d') as CanvasRenderingContext2D
      ctx && ctx.resetTransform()
      canvas2dDraw(ctx)
    }

    // 绘制显示的canvas内容
    const draw = () => {
      if (Taro.getEnv() === 'WEB') {
        webDraw()
        return
      }
      if (showCanvas2D.value) {
        canvas2dContextDraw()
        return
      }
      const { width, height, x, y } = drawImage.value
      const { moveX, moveY, scale, angle, displayWidth, displayHeight, cropperWidth } = state
      const { cropperCanvasContext } = canvasAll
      let ctx = cropperCanvasContext
      if (!ctx) return
      // 绘制背景
      ctx.clearRect(0, 0, displayWidth, displayHeight)
      easySetFillStyle(systemInfo, ctx, '#666')
      ctx.fillRect(0, 0, displayWidth, displayHeight)
      ctx.stroke()
      ctx.fill()
      easySetFillStyle(systemInfo, ctx, '#000')
      ctx.fillRect(props.space, (displayHeight - cropperWidth) / 2, cropperWidth, cropperWidth)
      ctx.stroke()
      ctx.fill()

      // 绘制偏移量
      ctx.translate(displayWidth / 2 + moveX, displayHeight / 2 + moveY)
      // 绘制旋转角度
      ctx.rotate((Math.PI / 180) * angle)
      // 绘制缩放
      ctx.scale(scale, scale)
      // 绘制图片
      ctx.drawImage(canvasImage as string, x, y, width, height)
      ctx.draw()
    }

    // 设置绘制图片
    const setDrawImg = async (image: Taro.getImageInfo.SuccessCallbackResult) => {
      const { displayWidth, cropperWidth } = state

      let drawImg = { ...drawImage.value }
      const { width: imgWidth, height: imgHeight } = image
      canvasImage = image.path
      if (Taro.getEnv() === 'WEB') {
        canvasImage = await dataURLToImage(image.path)
      }
      if (showCanvas2D.value) {
        canvasImage = await dataURLToCanvasImage(canvasAll.cropperCanvas, image.path)
      }

      const isPortrait = imgHeight > imgWidth
      const rate = isPortrait ? imgWidth / imgHeight : imgHeight / imgWidth

      drawImg.width = displayWidth
      drawImg.height = isPortrait ? displayWidth / rate : displayWidth * rate
      drawImg.x = -drawImg.width / 2
      drawImg.y = -drawImg.height / 2

      drawImage.value = drawImg

      state.defScale = cropperWidth / (isPortrait ? drawImg.width : drawImg.height)
      resetScale()
      draw()
    }

    // 选择图片
    const chooseImage = () => {
      Taro.chooseImage({
        count: 1,
        // 可以指定是原图还是压缩图，默认二者都有
        sizeType: props.sizeType,
        sourceType: props.sourceType,
        success: (res: Taro.chooseImage.SuccessCallbackResult) => {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          const { tempFiles } = res
          !!tempFiles.length && imageChange(tempFiles[0])
        }
      })
    }

    interface TFileType {
      size: number
      type?: string
      tempFilePath?: string
      path: string
    }

    // 选择图片后回调
    const imageChange = async (file: TFileType) => {
      Taro.getImageInfo({
        src: file.path
      }).then((res: Taro.getImageInfo.SuccessCallbackResult) => {
        state.visible = true
        setDrawImg(res)
      })
    }

    // 重设缩放
    const resetScale = () => {
      setScale(state.defScale)
      state.moveX = 0
      state.moveY = 0
      state.angle = 0
    }

    // 设置缩放
    const setScale = (scale: number) => {
      scale = clamp(scale, +0.3, +props.maxZoom + 1)
      if (scale !== state.scale) {
        state.scale = scale
      }
    }

    // 计算两个点的距离
    const getDistance = (touches: TouchList) =>
      Math.sqrt((touches[0].clientX - touches[1].clientX) ** 2 + (touches[0].clientY - touches[1].clientY) ** 2)

    let startMoveX: number
    let startMoveY: number
    let startScale: number
    let startDistance: number
    let fingerNum: number

    // 触摸开始
    const onTouchStart = (event: TouchEvent) => {
      const { touches } = event
      const { offsetX } = touch

      touch.start(event)

      fingerNum = touches.length
      startMoveX = state.moveX
      startMoveY = state.moveY

      state.moving = fingerNum === 1

      state.zooming = fingerNum === 2 && !offsetX.value
      if (state.zooming) {
        startScale = state.scale
        startDistance = getDistance(event.touches)
      }
    }

    // 触摸移动
    const onTouchMove = (event: TouchEvent) => {
      const { touches } = event

      touch.move(event)

      if (state.moving || state.zooming) {
        preventDefault(event, true)
      }

      if (state.moving) {
        const { deltaX, deltaY } = touch
        const moveX = deltaX.value * state.scale + startMoveX
        const moveY = deltaY.value * state.scale + startMoveY

        state.moveX = clamp(moveX, -maxMoveX.value, maxMoveX.value)
        state.moveY = clamp(moveY, -maxMoveY.value, maxMoveY.value)
      }

      if (state.zooming && touches.length === 2) {
        const distance = getDistance(touches)
        const scale = (startScale * distance) / startDistance

        setScale(scale)
      }
    }

    // 触摸结束
    const onTouchEnd = (event: TouchEvent) => {
      let stopPropagation = false

      if (state.moving || state.zooming) {
        stopPropagation = !(state.moving && startMoveX === state.moveX && startMoveY === state.moveY)

        if (!event.touches.length) {
          if (state.zooming) {
            state.moveX = clamp(state.moveX, -maxMoveX.value, maxMoveX.value)
            state.moveY = clamp(state.moveY, -maxMoveY.value, maxMoveY.value)
            state.zooming = false
          }

          state.moving = false
          startMoveX = 0
          startMoveY = 0
          startScale = state.defScale

          if (state.scale < state.defScale) {
            resetScale()
          }

          if (state.scale > props.maxZoom) {
            state.scale = +props.maxZoom
          }
        }
      }

      preventDefault(event, stopPropagation)

      touch.reset()
    }

    // 重置角度
    const reset = () => {
      state.angle = 0
    }

    // 设置角度
    const rotate = () => {
      if (state.angle === 270) {
        state.angle = 0
        return
      }
      state.angle += 90
    }

    // 关闭
    const cancel = (isEmit: Boolean = true) => {
      state.visible = false
      resetScale()
      isEmit && emit('cancel')
    }

    // web裁剪图片
    const confirmWEB = () => {
      const { cropperWidth, displayHeight } = state
      const canvasDom: HTMLElement | null = document.getElementById(canvasAll.canvasId)
      let canvas: HTMLCanvasElement = canvasDom as HTMLCanvasElement
      if (canvasDom?.tagName !== 'CANVAS') {
        canvas = canvasDom?.getElementsByTagName('canvas')[0] as HTMLCanvasElement
      }
      const width = cropperWidth
      const height = cropperWidth
      // 创建一个新的canvas元素，用于裁剪后的内容
      const croppedCanvas = document.createElement('canvas')
      const croppedCtx = croppedCanvas.getContext('2d') as CanvasRenderingContext2D

      // 设置新canvas的大小与裁剪区域相同
      croppedCanvas.width = width
      croppedCanvas.height = height
      // 使用drawImage方法将原canvas中指定区域的内容绘制到新canvas上
      canvas
      && croppedCtx.drawImage(
        canvas,
        props.space * pixelRatio,
        (displayHeight - cropperWidth) / 2,
        width,
        height,
        0,
        0,
        width,
        height
      )

      // 将裁剪后的内容转换为图片格式
      const imageDataURL = croppedCanvas.toDataURL('image/png')
      emit('confirm', imageDataURL)
      cancel(false)
    }

    // Canvas2D裁剪为图片
    const confirmCanvas2D = () => {
      const { cropperWidth, displayHeight } = state
      const { cropperCanvas } = canvasAll
      const pixelRatio = Taro.getEnv() === 'ALIPAY' ? 1 : systemInfo.pixelRatio
      Taro.canvasToTempFilePath({
        canvas: cropperCanvas,
        x: props.space,
        y: (displayHeight - cropperWidth) / pixelRatio / 2,
        width: cropperWidth / pixelRatio,
        height: cropperWidth / pixelRatio,
        destWidth: cropperWidth,
        destHeight: cropperWidth,
        success: async (res: Taro.canvasToTempFilePath.SuccessCallbackResult) => {
          let filePath = res.tempFilePath
          emit('confirm', filePath)
          cancel(false)
          return
        }
      })
    }

    // 裁剪图片
    const confirm = () => {
      if (Taro.getEnv() === 'WEB') {
        confirmWEB()
        return
      }
      if (showCanvas2D.value) {
        confirmCanvas2D()
        return
      }
      const { cropperWidth, displayHeight } = state
      const { canvasId } = canvasAll
      // 将编辑后的canvas内容转成图片
      Taro.canvasToTempFilePath({
        canvasId,
        x: props.space,
        y: (displayHeight - cropperWidth) / 2,
        width: cropperWidth,
        height: cropperWidth,
        destWidth: cropperWidth * systemInfo.pixelRatio,
        destHeight: cropperWidth * systemInfo.pixelRatio,
        success: async (res: Taro.canvasToTempFilePath.SuccessCallbackResult) => {
          let filePath = res.tempFilePath
          emit('confirm', filePath)
          cancel(false)
          return
        }
      })
    }

    watch(
      () => state.scale,
      () => {
        draw()
      }
    )

    watch(
      () => state.angle,
      () => {
        if (Math.abs(state.moveX) > maxMoveX.value) {
          state.moveX = maxMoveX.value
        }
        if (Math.abs(state.moveY) > maxMoveY.value) {
          state.moveY = maxMoveY.value
        }
        draw()
      }
    )

    watch(
      () => state.moveX,
      () => {
        draw()
      }
    )

    watch(
      () => state.moveY,
      () => {
        draw()
      }
    )

    expose({
      cancel,
      reset,
      rotate,
      confirm
    })

    return {
      ...toRefs(state),
      ...toRefs(canvasAll),
      showCanvas2D,
      highlightStyle,
      canvasStyle,
      cutCanvasStyle,
      chooseImage,
      reset,
      rotate,
      cancel,
      confirm,
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  }
})
</script>
