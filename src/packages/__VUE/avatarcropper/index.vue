<template>
  <div class="nut-avatar-cropper" :data-edit-text="editText" :class="{ round: shape === 'round' }">
    <slot></slot>
    <input
      ref="inputImageRef"
      type="file"
      accept="image/*"
      class="nut-avatar-cropper__input"
      @change="inputImageChange"
    />
  </div>
  <div v-show="visible" ref="cropperPopupRef" class="nut-cropper-popup">
    <canvas ref="canvasRef" class="nut-cropper-popup__canvas"></canvas>
    <div
      class="nut-cropper-popup__highlight"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    >
      <div class="highlight" :class="{ highlight__round: shape === 'round' }" :style="highlightStyle"></div>
    </div>
    <div class="nut-cropper-popup__toolbar" :class="[toolbarPosition]">
      <slot v-if="$slots.toolbar" name="toolbar"></slot>
      <div v-else class="flex-sb">
        <div class="nut-cropper-popup__toolbar-item" @click="cancel()">
          <nut-button type="danger">{{ cancelText }}</nut-button>
        </div>
        <div class="nut-cropper-popup__toolbar-item" @click="reset">
          <Refresh2 color="#fff" />
        </div>
        <div class="nut-cropper-popup__toolbar-item" @click="rotate">
          <Retweet color="#fff" />
        </div>
        <div class="nut-cropper-popup__toolbar-item" @click="confirm">
          <nut-button type="success">{{ confirmText }}</nut-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { watch, ref, reactive, toRefs, computed, Ref, PropType } from 'vue'
import NutButton from '../button'
import { createComponent } from '@/packages/utils/create'
import type { AvatarCropperToolbarPosition, AvatarCropperShape } from './types'
const { create } = createComponent('avatar-cropper')
import { Refresh2, Retweet } from '@nutui/icons-vue'
import { useTouch } from '@/packages/utils/useTouch'
import { preventDefault, clamp } from '@/packages/utils/util'
import { useRect } from '@/packages/utils/useRect'
export default create({
  components: {
    NutButton,
    Refresh2,
    Retweet
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
      displayHeight: 0
    })
    const defDrawImage = {
      img: new Image(), // 规定要使用的图像
      sx: 0, // 开始剪切的 x 坐标位置
      sy: 0, // 开始剪切的 y 坐标位置
      swidth: 0, // 被剪切区域的宽度
      sheight: 0, // 被剪切区域的高度
      x: 0, // 在画布上x的坐标位置
      y: 0, // 在画布上y的坐标位置
      width: 0, // 要使用的图像的宽度
      height: 0 // 要使用的图像的高度
    }
    // 绘制图片
    const drawImage = ref({ ...defDrawImage })
    const cropperPopupRef = ref() as Ref<HTMLElement>
    // canvas
    const canvasRef = ref() as Ref<HTMLCanvasElement>
    // input
    const inputImageRef = ref() as Ref<HTMLInputElement>
    // 设备像素比
    const devicePixelRatio = window.devicePixelRatio || 1
    // 触摸
    const touch = useTouch()

    // 是否是横向
    const isAngle = computed(() => {
      return state.angle === 90 || state.angle === 270
    })

    // 高亮框样式
    const highlightStyle = computed(() => {
      const { swidth } = drawImage.value
      const width = swidth / devicePixelRatio + 'px'
      const height = width
      return {
        width,
        height
      }
    })

    // 最大横向移动距离
    const maxMoveX = computed(() => {
      const { displayWidth, scale } = state
      const { swidth, height } = drawImage.value
      if (isAngle.value) {
        return Math.max(0, (height * scale - swidth) / 2)
      }
      return Math.max(0, (displayWidth * scale - swidth) / 2)
    })

    // 最大纵向移动距离
    const maxMoveY = computed(() => {
      const { displayWidth, scale } = state
      const { swidth, height } = drawImage.value
      if (isAngle.value) {
        return Math.max(0, (displayWidth * scale - swidth) / 2)
      }
      return Math.max(0, (height * scale - swidth) / 2)
    })

    // 文件转base64
    const fileToDataURL = (file: Blob): Promise<any> => {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onloadend = (e) => resolve((e.target as FileReader).result)
        reader.readAsDataURL(file)
      })
    }

    // base64转图片
    const dataURLToImage = (dataURL: string): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.src = dataURL
      })
    }

    // 绘制
    const draw = () => {
      const { img, width, height, x, y, swidth } = drawImage.value
      const { moveX, moveY, scale } = state
      const canvas = canvasRef.value
      if (!canvas) return
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      canvas.width = state.displayWidth
      canvas.height = state.displayHeight

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#666'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#000'
      ctx.fillRect(props.space * devicePixelRatio, (canvas.height - swidth) / 2, swidth, swidth)

      ctx.translate(canvas.width / 2 + moveX, canvas.height / 2 + moveY)
      ctx.rotate((Math.PI / 180) * state.angle)
      ctx.scale(scale, scale)
      ctx.drawImage(img, x, y, width, height)
    }

    // 设置绘制图片
    const setDrawImg = (image: HTMLImageElement) => {
      const rect = useRect(cropperPopupRef.value)
      const { width: clientWidth, height: clientHeight } = rect
      const canvasWidth = (state.displayWidth = clientWidth * devicePixelRatio)
      const canvasHeight = (state.displayHeight = clientHeight * devicePixelRatio)

      let drawImg = { ...defDrawImage }
      const { width: imgWidth, height: imgHeight } = image
      drawImg.img = image

      const isPortrait = imgHeight > imgWidth
      const rate = isPortrait ? imgWidth / imgHeight : imgHeight / imgWidth

      drawImg.width = canvasWidth
      drawImg.height = isPortrait ? canvasWidth / rate : canvasWidth * rate
      drawImg.x = -drawImg.width / 2
      drawImg.y = -drawImg.height / 2

      drawImg.swidth = canvasWidth - props.space * 2 * devicePixelRatio
      drawImg.sheight = isPortrait ? drawImg.swidth / rate : drawImg.swidth * rate
      drawImg.sx = props.space * devicePixelRatio
      drawImg.sy = (canvasHeight - drawImg.swidth) / 2

      drawImage.value = drawImg

      state.defScale = drawImg.swidth / (isPortrait ? drawImg.width : drawImg.height)
      resetScale()
    }

    // 选择图片
    const inputImageChange = async (event: Event) => {
      state.visible = true
      const $el = event.target as HTMLInputElement
      let { files } = $el
      if (!files?.length) return
      const base64 = await fileToDataURL(files[0])
      const image = await dataURLToImage(base64)

      setDrawImg(image)
      draw()
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
      inputImageRef.value.value = ''
      isEmit && emit('cancel')
    }

    // 裁剪图片
    const confirm = () => {
      const canvas = canvasRef.value
      const { sx, sy, swidth } = drawImage.value
      const width = swidth
      const height = swidth
      // 创建一个新的canvas元素，用于裁剪后的内容
      const croppedCanvas = document.createElement('canvas')
      const croppedCtx = croppedCanvas.getContext('2d') as CanvasRenderingContext2D

      // 设置新canvas的大小与裁剪区域相同
      croppedCanvas.width = width
      croppedCanvas.height = height

      // 使用drawImage方法将原canvas中指定区域的内容绘制到新canvas上
      canvas && croppedCtx.drawImage(canvas, sx, sy, width, height, 0, 0, width, height)

      // 将裁剪后的内容转换为图片格式
      const imageDataURL = croppedCanvas.toDataURL('image/png')
      emit('confirm', imageDataURL)
      cancel(false)
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
      cropperPopupRef,
      canvasRef,
      inputImageRef,
      highlightStyle,
      inputImageChange,
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

<style lang="scss"></style>
