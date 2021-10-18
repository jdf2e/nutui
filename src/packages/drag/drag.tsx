import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import './drag.scss'

export interface DragProps {
  attract: boolean
  direction: string
  boundary: {
    top: number
    left: number
    right: number
    bottom: number
  }
  style: any
}
const defaultProps = {
  attract: false,
  direction: 'all',
  boundary: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  style: {},
} as DragProps
export const Drag: FunctionComponent<Partial<DragProps> & React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { attract, direction, boundary, style, children } = { ...defaultProps, ...props }
  const elWidth = useRef(0)
  const elHeight = useRef(0)
  const screenWidth = useRef(0)
  const screenHeight = useRef(0)
  const startTop = useRef(0)
  const startLeft = useRef(0)
  const nx = useRef(0)
  const ny = useRef(0)
  const xPum = useRef(0)
  const yPum = useRef(0)
  const position = useRef({
    x: 0,
    y: 0,
  })
  const boundaryState = useRef({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  })
  const myDrag = useRef<HTMLDivElement>(null)
  const getInfo = () => {
    const el = myDrag.current
    if (el) {
      const domElem = document.documentElement
      elWidth.current = el.offsetWidth
      elHeight.current = el.offsetHeight
      screenWidth.current = domElem.clientWidth
      screenHeight.current = domElem.clientHeight
    }
  }

  const goLeft = (target: HTMLElement) => {
    if (boundary.left) {
      if (+target.style.left.split('px')[0] > boundary.left) {
        target.style.left = +target.style.left.split('px')[0] - 10 + 'px'
        window.requestAnimationFrame(() => {
          goLeft(target)
        })
      } else {
        target.style.left = `${boundary.left}px`
      }
    } else {
      if (+target.style.left.split('px')[0] > 10) {
        target.style.left = +target.style.left.split('px')[0] - 10 + 'px'
        window.requestAnimationFrame(() => {
          goLeft(target)
        })
      } else {
        target.style.left = '0px'
      }
    }
  }
  const goRight = (target: HTMLElement, rightLocation: number) => {
    if (rightLocation - parseInt(target.style.left.split('px')[0]) > 10) {
      target.style.left = parseInt(target.style.left.split('px')[0]) + 10 + 'px'
      window.requestAnimationFrame(() => {
        goRight(target, rightLocation)
      })
    } else {
      target.style.left = rightLocation + 'px'
    }
  }
  const touchMove = (e: TouchEvent) => {
    e.preventDefault()
    const target = e.currentTarget as HTMLElement
    if (e.targetTouches.length === 1) {
      const touch = e.targetTouches[0]
      const x = touch.clientX - position.current.x
      const y = touch.clientY - position.current.y
      xPum.current = startLeft.current + x
      yPum.current = startTop.current + y
      const rightLocation = screenWidth.current - elWidth.current - boundary.right
      if (Math.abs(xPum.current) > rightLocation) {
        xPum.current = rightLocation
      } else if (xPum.current <= boundary.left) {
        xPum.current = boundary.left
      }
      if (yPum.current < boundary.top) {
        yPum.current = boundary.top
      } else if (yPum.current > screenHeight.current - elHeight.current - boundary.bottom) {
        yPum.current = screenHeight.current - elHeight.current - boundary.bottom
      }
      if (props.direction != 'y') {
        target.style.left = `${xPum.current}px`
      }
      if (props.direction != 'x') {
        target.style.top = `${yPum.current}px`
      }
    }
  }
  const touchEnd = (e: TouchEvent) => {
    const target = e.currentTarget as HTMLElement
    const touch = e.changedTouches[0]
    let currX = touch.clientX
    const rightLocation = screenWidth.current - elWidth.current - boundary.right
    if (currX > rightLocation) {
      currX = rightLocation
    } else if (currX < boundary.left) {
      currX = boundary.left
    } else {
      currX = currX < screenWidth.current / 2 ? boundary.left : rightLocation
    }
    if (props.direction != 'y' && props.attract) {
      if (currX < screenWidth.current / 2) {
        window.requestAnimationFrame(() => {
          goLeft(target)
        })
      } else {
        window.requestAnimationFrame(() => {
          goRight(target, rightLocation)
        })
      }
    }
    if (props.direction !== 'x') {
      target.style.top = `${yPum.current}px`
    }
  }
  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLElement
    const touches = e.touches[0]
    startTop.current = target.offsetTop
    startLeft.current = target.offsetLeft
    position.current = { x: touches.clientX, y: touches.clientY }

    target.removeEventListener('touchmove', touchMove, false)
    target.removeEventListener('touchend', touchEnd, false)
    target.addEventListener('touchmove', touchMove, false)
    target.addEventListener('touchend', touchEnd, false)
  }

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <div
      className="nut-drag"
      style={style}
      ref={myDrag}
      onTouchStart={(event) => touchStart(event)}
    >
      {children}
    </div>
  )
}

Drag.defaultProps = defaultProps
Drag.displayName = 'NutDrag'
