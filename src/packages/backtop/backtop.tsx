import React, {
  FunctionComponent,
  useLayoutEffect,
  useEffect,
  useState,
  useRef,
  CSSProperties,
} from 'react'
import './backtop.scss'
import Icon from '../icon'
import classNames from 'classnames'
declare const window: any
export interface BackTopProps {
  className?: string
  bottom: number
  right: number
  elId: string
  distance: number
  zIndex: number
  isAnimation: boolean
  duration: number
  children?: HTMLElement | any
  style?: CSSProperties
  backTopClick: (event: MouseEvent) => void
}
const defaultProps = {
  bottom: 20,
  right: 10,
  elId: '',
  distance: 200,
  zIndex: 10,
  isAnimation: true,
  duration: 1000,
} as BackTopProps

export const BackTop: FunctionComponent<Partial<BackTopProps>> = (props) => {
  const {
    children,
    bottom,
    right,
    elId,
    distance,
    zIndex,
    isAnimation,
    className,
    duration,
    style,
    backTopClick,
  } = {
    ...defaultProps,
    ...props,
  }
  const [backTop, SetBackTop] = useState(false)
  const [scrollTop, SetScrollTop] = useState(0)
  const [startTime, SetStartTime] = useState(0)
  let scrollEl: any = elId ? useRef<HTMLElement>(document.getElementById(elId)) : (window as Window)
  //初始化
  useEffect(() => {
    init()
    return () => removeEventListener()
  }, [])

  const init = () => {
    if (elId && document.getElementById(elId)) {
      scrollEl = document.getElementById(elId) as HTMLElement | Window
    }
    addEventListener()
    initCancelAniFrame()
  }
  const scrollListener = () => {
    let top: any = null
    if (scrollEl instanceof Window) {
      top = scrollEl.pageYOffset
      SetScrollTop(top)
    } else {
      top = scrollEl.scrollTop
      SetScrollTop(top)
    }
    let showBtn = top >= distance

    SetBackTop(showBtn)
  }

  const scroll = (y = 0) => {
    if (scrollEl instanceof Window) {
      window.scrollTo(0, y)
    } else {
      let dom = document.getElementById(elId)
      dom?.scrollTo(0, y)
      //   scrollEl.scrollTop = y
    }
  }

  const scrollAnimation = () => {
    let cid = requestAniFrame()(function fn() {
      var t = duration - Math.max(0, startTime - +new Date() + duration)
      var y = (t * -scrollTop) / duration + scrollTop
      //   console.log('animi', t, y, startTime, duration, scrollTop)
      scroll(y)
      cid = requestAniFrame()(fn)
      if (t == duration || y == 0) {
        window.cancelAnimationFrame(cid)
      }
    })
  }

  const initCancelAniFrame = () => {
    window.cancelAnimationFrame = window.webkitCancelAnimationFrame
  }
  //防频
  const requestAniFrame = () => {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback: any) {
        window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  //监听事件
  function addEventListener() {
    scrollEl.addEventListener('scroll', scrollListener, false)
    scrollEl.addEventListener('resize', scrollListener, false)
  }
  //移除监听事件
  function removeEventListener() {
    scrollEl.removeEventListener('scroll', scrollListener, false)
    scrollEl.removeEventListener('resize', scrollListener, false)
  }
  //返回顶部点击事件
  const goTop = (e: any) => {
    backTopClick(e)
    let otime = +new Date()
    SetStartTime(otime)
    isAnimation && duration > 0 ? scrollAnimation() : scroll()
  }

  const backTopClass = {
    right: `${right}px`,
    bottom: `${bottom}px`,
    zIndex: zIndex,
  }

  return (
    <div
      className={`nut-backtop ${backTop ? 'show' : ''} ${className ? className : ''}`}
      style={{ ...backTopClass, ...style }}
      onClick={goTop}
    >
      {children ? children : <Icon size="19px" className="nut-backtop-main" name="top"></Icon>}
    </div>
  )
}

BackTop.defaultProps = defaultProps
BackTop.displayName = 'NutBackTop'
