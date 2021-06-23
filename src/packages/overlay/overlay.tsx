import React, { FunctionComponent, MouseEventHandler, useEffect, useRef, useState } from 'react'
import bem from '@/utils/bem'
import classNames from 'classnames'
import './overlay.scss'

export interface OverlayProps {
  zIndex: number
  duration: number
  overlayClass: string
  overlayStyle: React.CSSProperties
  closeOnClickOverlay: boolean
  visible: boolean
}
const defaultProps = {
  zIndex: 2000,
  duration: 0.3,
  overlayClass: '',
  closeOnClickOverlay: true,
  visible: false,
} as OverlayProps
export const Overlay: FunctionComponent<
  Partial<OverlayProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const [show, setShow] = useState(false)
  const renderRef = useRef(true)
  const intervalRef = useRef(0)
  const { children, zIndex, duration, overlayClass, closeOnClickOverlay, visible, ...rest } = {
    ...defaultProps,
    ...props,
  }
  useEffect(() => {
    setShow(false)
  }, [visible])
  useEffect(() => {
    return () => {
      clearTimeout(intervalRef.current)
    }
  }, [])
  const b = bem('overlay')
  const classes = classNames(
    {
      [overlayClass]: true,
      'overlay-fade-leave-active': !renderRef.current && !visible,
      'overlay-fade-enter-active': visible,
      'first-render': renderRef.current && !visible,
      'hidden-render': show,
    },
    b('')
  )
  const styles = {
    zIndex: zIndex,
    animationDuration: `${props.duration}s`,
    ...props.overlayStyle,
  }
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    renderRef.current = false
    let id = setTimeout(() => {
      setShow(true)
    }, duration * 1000 * 0.8)
    intervalRef.current = id
    if (props.onClick) {
      props.onClick(e)
    }
  }
  return (
    <React.Fragment>
      <div className={classes} style={styles} {...rest} onClick={handleClick}>
        {children}
      </div>
    </React.Fragment>
  )
}

Overlay.defaultProps = defaultProps
Overlay.displayName = 'NutOverlay'
