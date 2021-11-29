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
  lockScroll: boolean
}
export const defaultOverlayProps = {
  zIndex: 2000,
  duration: 0.3,
  overlayClass: '',
  closeOnClickOverlay: true,
  visible: false,
  lockScroll: true,
  overlayStyle: {},
} as OverlayProps
export const Overlay: FunctionComponent<
  Partial<OverlayProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const [show, setShow] = useState(false)
  const renderRef = useRef(true)
  const intervalRef = useRef(0)
  const {
    children,
    zIndex,
    duration,
    overlayClass,
    closeOnClickOverlay,
    visible,
    lockScroll,
    overlayStyle,
    ...rest
  } = {
    ...defaultOverlayProps,
    ...props,
  }

  useEffect(() => {
    setShow(false)
    lock()
  }, [visible])

  useEffect(() => {
    return () => {
      clearTimeout(intervalRef.current)
      document.body.classList.remove('nut-overflow-hidden')
    }
  }, [])

  const b = bem('overlay')

  const classes = classNames(
    {
      'overlay-fade-leave-active': !renderRef.current && !visible,
      'overlay-fade-enter-active': visible,
      'first-render': renderRef.current && !visible,
      'hidden-render': show,
    },
    overlayClass,
    b('')
  )

  const styles = {
    zIndex: zIndex,
    animationDuration: `${props.duration}s`,
    ...overlayStyle,
  }

  const lock = () => {
    if (lockScroll && visible) {
      document.body.classList.add('nut-overflow-hidden')
    } else {
      document.body.classList.remove('nut-overflow-hidden')
    }
  }

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (closeOnClickOverlay) {
      props.onClick && props.onClick(e)
      renderRef.current = false
      let id = setTimeout(() => {
        setShow(true)
      }, duration * 1000 * 0.8)
      intervalRef.current = id
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

Overlay.defaultProps = defaultOverlayProps
Overlay.displayName = 'NutOverlay'
