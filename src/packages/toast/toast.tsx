import React, { FunctionComponent, useState, useLayoutEffect } from 'react'
import bem from '@/utils/bem'
import './toast.scss'
import Icon from '../icon/index'
export interface ToastProps {
  msg: string
  id?: string
  duration?: number
  center?: boolean
  type?: string
  customClass?: string
  bottom?: number
  size?: string
  icon?: string
  textAlignCenter?: boolean
  loadingRotate?: boolean
  bgColor?: string
  onClose?: (params?: string | number) => void
  unmount?: () => void
  cover?: boolean
  coverColor?: string
  closeOnClickOverlay?: boolean
  noticeKey: number | string
}
const defaultProps = {
  msg: '',
  id: '',
  duration: 2000, //显示时间(毫秒)
  center: true,
  type: 'text',
  customClass: '',
  bottom: 30,
  size: 'base',
  icon: '',
  textAlignCenter: true,
  loadingRotate: true,
  bgColor: 'rgba(0, 0, 0, .8)',
  onClose: (params?: string | number) => {},
  unmount: () => {},
  cover: false, //透明遮罩层
  coverColor: 'rgba(0, 0, 0, 0)',
  closeOnClickOverlay: false,
} as ToastProps

export const Toast: FunctionComponent<Partial<ToastProps>> = (props) => {
  const {
    msg,
    id,
    duration,
    center,
    type,
    customClass,
    bottom,
    size,
    icon,
    textAlignCenter,
    loadingRotate,
    bgColor,
    onClose,
    cover,
    coverColor,
    closeOnClickOverlay,
    noticeKey,
  } = { ...defaultProps, ...props }
  const [mounted, SetMAounted] = useState(false)
  const [isRef, SetRef] = useState(false)
  const [value, SetValue] = useState(false)
  let timer: any

  useLayoutEffect(() => {
    if (duration) {
      show()
    }
  }, [])
  const hasIcon = () => {
    if (type !== 'text') {
      return true
    } else {
      return !!icon
    }
  }
  const toastBodyClass = () => {
    return `
      nut-toast
      ${center ? 'nut-toast-center' : ''}
      ${hasIcon() ? 'nut-toast-has-icon' : ''}
      ${cover ? 'nut-toast-cover' : ''}
      ${type === 'loading' ? 'nut-toast-loading' : ''}
      ${customClass ? customClass : ''}
      ${size ? 'nut-toast-' + size : ''}
    `
  }
  const clickCover = () => {
    if (closeOnClickOverlay) {
      hide()
    }
  }
  const hide = () => {
    SetMAounted(false)
  }
  const show = () => {
    SetMAounted(true)
    clearTimer()
    if (duration) {
      timer = setTimeout(() => {
        hide()
      }, duration)
    }
  }
  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  const alignStyle = () => {
    return center ? 'auto' : bottom + 'px'
  }

  return mounted ? (
    <div className={toastBodyClass()} style={{ bottom: alignStyle(), backgroundColor: coverColor }}>
      <div
        className="nut-toast-inner"
        style={{
          textAlign: textAlignCenter ? 'center' : 'left',
          backgroundColor: bgColor,
        }}
      >
        {hasIcon() ? (
          <span className="nut-toast-icon-wrapper">
            <Icon name={icon} />
          </span>
        ) : null}
        <span className="nut-toast-text">{msg}</span>
      </div>
    </div>
  ) : null
}

Toast.defaultProps = defaultProps
Toast.displayName = 'NutToast'
