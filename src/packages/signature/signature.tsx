import React, { FunctionComponent, useRef, useState, useEffect } from 'react'
import './signature.scss'
import { Button } from '../button/button'
import bem from '@/utils/bem'

export interface SignatureProps {
  type: String
  lineWidth: Number
  strokeStyle: String
  unSupportTpl: String
  className: string
  confirm?: (canvas: HTMLCanvasElement, dataurl: string) => void
  clear?: () => void
}
const defaultProps = {
  type: 'png',
  lineWidth: 2,
  strokeStyle: '#000',
  unSupportTpl: '对不起，当前浏览器不支持Canvas，无法使用本控件！',
  className: '',
} as SignatureProps
export const Signature: FunctionComponent<
  Partial<SignatureProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { type, lineWidth, strokeStyle, unSupportTpl, className, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('signature')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [canvasHeight, setCanvasHeight] = useState(0)
  const [canvasWidth, setCanvasWidth] = useState(0)
  const ctx = useRef<CanvasRenderingContext2D | null>(null)
  const isCanvasSupported = () => {
    let elem = document.createElement('canvas')
    return !!(elem.getContext && elem.getContext('2d'))
  }
  const isSupportTouch = 'ontouchstart' in window
  const events = isSupportTouch
    ? ['touchstart', 'touchmove', 'touchend', 'touchleave']
    : ['mousedown', 'mousemove', 'mouseup', 'mouseleave']

  useEffect(() => {
    if (isCanvasSupported() && canvasRef.current && wrapRef.current) {
      ctx.current = canvasRef.current.getContext('2d')
      setCanvasWidth(wrapRef.current.offsetWidth)
      setCanvasHeight(wrapRef.current.offsetHeight)
      addEvent()
    }
  }, [])

  const startEventHandler = (event: any) => {
    event.preventDefault()
    if (ctx.current && canvasRef.current) {
      ctx.current.beginPath()
      ctx.current.lineWidth = lineWidth as number
      ctx.current.strokeStyle = strokeStyle as string
      canvasRef.current.addEventListener(events[1], moveEventHandler, false)
      canvasRef.current.addEventListener(events[2], endEventHandler, false)
      canvasRef.current.addEventListener(events[3], leaveEventHandler, false)
    }
  }

  const addEvent = () => {
    if (canvasRef.current) {
      canvasRef.current.addEventListener(events[0], startEventHandler, false)
    }
  }

  const moveEventHandler = (event: any) => {
    event.preventDefault()

    let evt = isSupportTouch ? event.touches[0] : event
    if (canvasRef.current && ctx.current) {
      let coverPos = canvasRef.current.getBoundingClientRect()
      let mouseX = evt.clientX - coverPos.left
      let mouseY = evt.clientY - coverPos.top

      ctx.current.lineTo(mouseX, mouseY)
      ctx.current.stroke()
    }
  }

  const endEventHandler = (event: any) => {
    event.preventDefault()
    if (canvasRef.current) {
      canvasRef.current.removeEventListener(events[1], moveEventHandler, false)
      canvasRef.current.removeEventListener(events[2], endEventHandler, false)
    }
  }
  const leaveEventHandler = (event: any) => {
    event.preventDefault()
    if (canvasRef.current) {
      canvasRef.current.removeEventListener(events[1], moveEventHandler, false)
      canvasRef.current.removeEventListener(events[2], endEventHandler, false)
    }
  }
  const clear = () => {
    if (canvasRef.current && ctx.current) {
      canvasRef.current.addEventListener(events[2], endEventHandler, false)
      ctx.current.clearRect(0, 0, canvasWidth, canvasHeight)
      ctx.current.closePath()
    }
    props.clear && props.clear()
  }

  const confirm = () => {
    onSave(canvasRef.current as HTMLCanvasElement)
  }

  const onSave = (canvas: HTMLCanvasElement) => {
    let dataurl
    switch (type) {
      case 'png':
        dataurl = canvas.toDataURL('image/png')
        break
      case 'jpg':
        dataurl = canvas.toDataURL('image/jpeg', 0.8)
        break
    }
    clear()
    props.confirm && props.confirm(canvas, dataurl as string)
  }
  return (
    <div className={`${b()} ${className}`} {...rest}>
      <div className={`${b('inner')}`} ref={wrapRef}>
        {isCanvasSupported() ? (
          <canvas ref={canvasRef} height={canvasHeight} width={canvasWidth}></canvas>
        ) : (
          <p className={`${b('unsopport')}`}>{unSupportTpl}</p>
        )}
      </div>

      <Button className={`${b('btn')}`} type="default" onClick={() => clear()}>
        重签
      </Button>
      <Button className={`${b('btn')}`} type="primary" onClick={() => confirm()}>
        确认
      </Button>
    </div>
  )
}

Signature.defaultProps = defaultProps
Signature.displayName = 'NutSignature'
