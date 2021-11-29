import React, { FunctionComponent, useEffect, useState } from 'react'
import './notify.scss'

export interface NotifyProps {
  id: string
  color: string
  msg: string
  duration: number
  className: string
  background: string
  type: string
  visible: boolean
  onClick: () => void
  onClose: () => void
  unmount: () => void
}
const defaultProps = {
  color: '',
  msg: '',
  duration: 3000,
  className: '',
  background: '',
  type: 'danger',
  visible: false,
} as NotifyProps
export const Notify: FunctionComponent<
  Partial<NotifyProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, id, color, msg, duration, className, background, type, visible } = {
    ...defaultProps,
    ...props,
  }

  let timer: null | number = null
  useEffect(() => {}, [])
  return <div className="nut-notify">{children ? children : msg}</div>
}

Notify.defaultProps = defaultProps
Notify.displayName = 'NutNotify'
