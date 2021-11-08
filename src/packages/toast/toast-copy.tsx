import * as React from 'react'
import Icon from '../icon/index'
import Notification, { NotificationProps } from './Notification'
import classNames from 'classnames'
// const { JiaZai } = Icon
let messageInstance: any = null
interface IToastOptions {
  id: string
  msg: string
  duration: number
  center: boolean
  type: string
  customClass: string
  bottom: number
  size: string | number
  icon: string
  textAlignCenter: boolean
  loadingRotate: boolean
  bgColor: string
  onClose: Function
  cover: boolean
  coverColor: string
  closeOnClickOverlay: boolean
}
// const SHORT = 3//展示秒数
const options: IToastOptions = {
  msg: '',
  id: '',
  duration: 1.5,
  center: true, // 未实现
  type: 'text',
  customClass: '', // 未实现
  bottom: 30, // 未实现
  size: 'base', // 未实现
  icon: '', // 未实现
  textAlignCenter: true, // 未实现
  loadingRotate: true, // 未实现
  bgColor: 'rgba(0, 0, 0, .8)',
  onClose: () => {}, // 未实现
  cover: false, //透明遮罩层 // 未实现
  coverColor: 'rgba(0, 0, 0, 0)', // 未实现
  closeOnClickOverlay: false, // 未实现
}

function getInstance(props: NotificationProps, callback: (notification: any) => void) {
  if (messageInstance) {
    messageInstance.destroy()
    messageInstance = null
  }

  Notification.newInstance(props, (notification: any) => {
    return callback && callback(notification)
  })
}

function notice(
  msg: string | React.ReactNode,
  icon: any,
  duration = options.duration,
  onClose: (() => void) | undefined | null
) {
  function close() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
    if (onClose) {
      onClose()
    }
  }

  getInstance(
    {
      msg,
      icon,
      duration,
      onClose: close,
    },
    (notification: any) => {
      messageInstance = notification
    }
  )
}

export default {
  text(msg: string | React.ReactNode, duration?: number, onClose?: () => void) {
    return notice(msg, null, duration, onClose)
  },
  success(msg: string | React.ReactNode, duration?: number, icon?: string, onClose?: () => void) {
    return notice(msg, icon ? icon : 'success', duration, onClose)
  },
  fail(msg: string | React.ReactNode, duration?: number, icon?: string, onClose?: () => void) {
    return notice(msg, icon ? icon : 'failure', duration, onClose)
  },
  loading(msg: string | React.ReactNode, duration?: number, icon?: string, onClose?: () => void) {
    return notice(msg, icon ? icon : 'loading', duration, onClose)
  },
  warn(msg: string | React.ReactNode, duration?: number, icon?: string, onClose?: () => void) {
    return notice(msg, icon ? icon : 'tips', duration, onClose)
  },
  customIcon(
    msg: string | React.ReactNode,
    duration?: number,
    icon?: string,
    onClose?: () => void
  ) {
    return notice(msg, icon ? icon : null, duration, onClose)
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  },
  config(option: Partial<IToastOptions> = {}) {
    const { duration = 2 } = option
    options.duration = duration
  },
}
