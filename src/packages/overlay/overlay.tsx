import React, { FunctionComponent, MouseEventHandler, useEffect, useRef, useState } from 'react'
import bem from '@/utils/bem'
import classNames from 'classnames'
import './overlay.scss'

export interface OverlayProps {
  zIndex: number
  duration: number
  className: string
  style: React.CSSProperties
  closeOnClickOverlay: boolean
  visible: boolean
  lockScroll: boolean
}
const defaultProps = {
  zIndex: 2000,
  duration: 0.3,
  className: '',
  closeOnClickOverlay: true,
  visible: false,
  lockScroll: true,
  style: {},
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
    className,
    closeOnClickOverlay,
    visible,
    lockScroll,
    style,
    ...rest
  } = {
    ...defaultProps,
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
    className,
    b('')
  )

  const styles = {
    zIndex: zIndex,
    animationDuration: `${props.duration}s`,
    ...style,
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

Overlay.defaultProps = defaultProps
Overlay.displayName = 'NutOverlay'
