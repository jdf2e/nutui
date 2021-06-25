import React, { ReactHTML } from 'react'
import ReactDOM from 'react-dom'
import { Toast } from './toast'
// import ToastContainer from './toastContainer'
let instance: any
type type = 'text' | 'success' | 'fail' | 'hide' | 'warn' | 'loading'
const noticeType: type[] = ['text', 'success', 'fail', 'hide', 'warn', 'loading']
export interface IToastProps {
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
  onClose?: () => void
  unmount?: () => void
  cover?: boolean
  coverColor?: string
  closeOnClickOverlay?: boolean
}
const defaultOptions = {
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
  onClose: () => {},
  unmount: () => {},
  cover: false, //透明遮罩层
  coverColor: 'rgba(0, 0, 0, 0)',
  closeOnClickOverlay: false,
}

export type toastProps = Partial<IToastProps>
interface ConfigOptions {
  duration?: number
}
type onClose = () => void
type open = (content: string | IToastProps, duration?: number, onClose?: onClose) => void

interface toast {
  id: number
  config: (ConfigOptions: ConfigOptions) => void
  open: (toastProps: IToastProps, duration?: number, onClose?: onClose) => void
  success: open
  fail: open
  text: open
  warn: open
  loading: open
  hide: open
}

const toast: toast = {
  id: 0,
  config: (options: ConfigOptions) => {
    if (typeof options.duration === 'number') {
      Object.assign(defaultOptions, { duration: options.duration })
    }
  },
  open(config: IToastProps) {
    let messageProps: IToastProps = { ...defaultOptions, ...config },
      key: number | string = toast.id++
    if (!config.msg) {
      throw new Error('content defined error')
    } else {
      key = config.id || key
    }
    let noticeInstance: any = null

    const noticePromise = new Promise((resolve, reject) => {
      const { onClose, ...rest } = messageProps
      console.log(messageProps)

      const message = <Toast {...rest}></Toast>
      const div = React.createElement('div', null, message)

      let mesagecontent = { key, content: message }
      console.log(mesagecontent)
    })

    const result = () => {
      console.log(config)
      if (noticeInstance) {
        noticeInstance.close()
      }
    }
    result.then = (filled: any, rejected: any) => noticePromise.then(filled, rejected)

    return result
  },
  success: setType('success'),
  text: setType('text'),
  fail: setType('fail'),
  warn: setType('warn'),
  loading: setType('loading'),
  hide: setType('hide'),
}
function setType(type: string): open {
  return (
    config: IToastProps | string,
    duration?: number,
    onClose?: (key: string | number) => void
  ) => {
    if (typeof config === 'string') {
      const option = { msg: config, type }
      if (typeof duration === 'function') {
        Object.assign(option, { onClose: duration })
        return toast.open(option)
      } else if (typeof duration === 'number') {
        Object.assign(option, { duration })
      }
      if (onClose !== undefined) {
        Object.assign(option, { onClose })
      }
      return toast.open(option)
    } else {
      Object.assign(config, { type })
      return toast.open(config)
    }
  }
}

export { toast }
