import * as React from 'react'
// import CheckCircleOutlined from '@jdcfe/icons-react/CheckCircleOutlined'
// import TipOutlined from '@jdcfe/icons-react/TipOutlined'
// import Icon from '../icon'
import Icon from '../icon/index'
import Notification, { NotificationProps } from './Notification'
// const { JiaZai } = Icon
let messageInstance: any = null
interface IToastOptions {
  duration: number
  mask: boolean
}
const SHORT = 3
const options: IToastOptions = {
  duration: SHORT,
  mask: false,
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
  onClose: (() => void) | undefined | null,
  mask = options.mask
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
      mask,
    },
    (notification: any) => {
      messageInstance = notification
    }
  )
}

export default {
  SHORT,
  LONG: 8,
  text(message: string | React.ReactNode, duration?: number, onClose?: () => void, mask?: boolean) {
    return notice(message, null, duration, onClose, mask)
  },
  success(
    message: string | React.ReactNode,
    duration?: number,
    icon?: string,
    onClose?: () => void,
    mask?: boolean
  ) {
    return notice(message, 'JD', duration, onClose, mask)
  },
  fail(
    message: string | React.ReactNode,
    icon?: string,
    duration?: number,
    onClose?: () => void,
    mask?: boolean
  ) {
    return notice(message, icon, duration, onClose, mask)
  },
  loading(
    message: string | React.ReactNode,
    duration?: number,
    icon?: string,
    onClose?: () => void,
    mask?: boolean
  ) {
    return notice(message, icon, duration, onClose, mask)
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  },
  config(option: Partial<IToastOptions> = {}) {
    const { duration = SHORT, mask } = option
    options.duration = duration
    if (mask === true) {
      options.mask = true
    }
  },
}
