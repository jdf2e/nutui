import * as React from 'react'
import Icon from '../icon/index'
import Notification, { NotificationProps } from './Notification'
// const { JiaZai } = Icon
let messageInstance: any = null
interface IToastOptions {
  duration: number
}
const SHORT = 3
const options: IToastOptions = {
  duration: SHORT,
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
  message: string | React.ReactNode,
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
      message,
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
  SHORT,
  LONG: 8,
  text(message: string | React.ReactNode, duration?: number, onClose?: () => void) {
    return notice(message, null, duration, onClose)
  },
  success(
    message: string | React.ReactNode,
    duration?: number,
    icon?: string,
    onClose?: () => void
  ) {
    return notice(message, icon ? icon : 'success', duration, onClose)
  },
  fail(message: string | React.ReactNode, duration?: number, icon?: string, onClose?: () => void) {
    return notice(message, icon ? icon : 'failure', duration, onClose)
  },
  loading(
    message: string | React.ReactNode,
    duration?: number,
    icon?: string,
    onClose?: () => void
  ) {
    return notice(message, icon ? icon : 'loading', duration, onClose)
  },
  warn(message: string | React.ReactNode, duration?: number, icon?: string, onClose?: () => void) {
    return notice(message, icon ? icon : 'tips', duration, onClose)
  },
  customIcon(
    message: string | React.ReactNode,
    duration?: number,
    icon?: string,
    onClose?: () => void
  ) {
    return notice(message, icon ? icon : null, duration, onClose)
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  },
  config(option: Partial<IToastOptions> = {}) {
    const { duration = SHORT } = option
    options.duration = duration
  },
}
