import React, { useState, useEffect, useRef, FunctionComponent } from 'react'
import bem from '@/utils/bem'
import classNames from 'classnames'
import Icon from '@/packages/icon'
import './infiniteloading.scss'

export interface InfiniteloadingProps {
  hasMore: boolean
  threshold: number
  containerId: string
  useWindow: boolean
  useCapture: boolean
  isOpenRefresh: boolean
  pullIcon: string
  pullTxt: string
  loadIcon: string
  loadTxt: string
  loadMoreTxt: string
  className: string
  style: React.CSSProperties
  refresh: (param: () => void) => void
  loadMore: (param: () => void) => void
  scrollChange: (param: number) => void
}

declare var window: Window & { webkitRequestAnimationFrame: any }
const defaultProps = {
  hasMore: true,
  threshold: 200,
  containerId: '',
  useWindow: true,
  useCapture: false,
  isOpenRefresh: false,
  pullIcon:
    'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png',
  pullTxt: '松开刷新',
  loadIcon:
    'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png',
  loadTxt: '加载中···',
  loadMoreTxt: '哎呀，这里是底部了啦',
} as InfiniteloadingProps

export const Infiniteloading: FunctionComponent<
  Partial<InfiniteloadingProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    hasMore,
    threshold,
    containerId,
    useWindow,
    useCapture,
    isOpenRefresh,
    pullIcon,
    pullTxt,
    loadIcon,
    loadTxt,
    loadMoreTxt,
    className,
    refresh,
    loadMore,
    scrollChange,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const [isInfiniting, setIsInfiniting] = useState(false)
  const scroller = useRef<HTMLDivElement>(null)
  const refreshTop = useRef<HTMLDivElement>(null)
  const scrollEl = useRef<Window | HTMLElement | (Node & ParentNode)>(window)
  const isTouching = useRef(false)
  const beforeScrollTop = useRef(0)
  const refreshMaxH = useRef(0)
  const y = useRef(0)
  const distance = useRef(0)

  const b = bem('infiniteloading')
  const classes = classNames(className, b())

  useEffect(() => {
    const parentElement = getParentElement(scroller.current as HTMLDivElement) as Node & ParentNode
    scrollEl.current = useWindow ? window : parentElement
    scrollEl.current.addEventListener('scroll', handleScroll, useCapture)

    return () => {
      scrollEl.current.removeEventListener('scroll', handleScroll, useCapture)
    }
  }, [hasMore, isInfiniting])

  useEffect(() => {
    const element = scroller.current as HTMLDivElement
    element.addEventListener('touchmove', preventDefault, { passive: false })

    return () => {
      element.removeEventListener('touchmove', preventDefault, {
        passive: false,
      } as EventListenerOptions)
    }
  }, [])

  const preventDefault = (event: TouchEvent) => {
    event.preventDefault()
  }

  const getStyle = () => {
    return {
      height: distance.current < 0 ? `0px` : `${distance.current}px`,
      transition: isTouching.current
        ? `height 0s cubic-bezier(0.25,0.1,0.25,1)`
        : `height 0.2s cubic-bezier(0.25,0.1,0.25,1)`,
    }
  }

  const getParentElement = (el: HTMLElement) => {
    return !!containerId ? document.querySelector(`#${containerId}`) : el && el.parentNode
  }

  const handleScroll = () => {
    requestAniFrame()(() => {
      if (!isScrollAtBottom() || !hasMore || isInfiniting) {
        return false
      } else {
        setIsInfiniting(true)
        loadMore && loadMore(infiniteDone)
      }
    })
  }

  const infiniteDone = () => {
    setIsInfiniting(false)
  }

  const refreshDone = () => {
    distance.current = 0
    ;(refreshTop.current as HTMLDivElement).style.height = `${distance.current}px`
    isTouching.current = false
  }

  const touchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (beforeScrollTop.current === 0 && !isTouching.current && isOpenRefresh) {
      y.current = event.touches[0].pageY
      isTouching.current = true
      const childHeight = ((refreshTop.current as HTMLDivElement).firstElementChild as HTMLElement)
        .offsetHeight
      refreshMaxH.current = Math.floor(childHeight * 1 + 10)
    }
  }

  const touchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    distance.current = event.touches[0].pageY - y.current
    if (distance.current > 0 && isTouching.current) {
      if (distance.current >= refreshMaxH.current) {
        distance.current = refreshMaxH.current
        ;(refreshTop.current as HTMLDivElement).style.height = `${distance.current}px`
      } else {
        ;(refreshTop.current as HTMLDivElement).style.height = `${distance.current}px`
      }
    } else {
      distance.current = 0
      isTouching.current = false
    }
  }

  const touchEnd = () => {
    if (distance.current < refreshMaxH.current) {
      distance.current = 0
    } else {
      refresh && refresh(refreshDone)
    }
  }

  const requestAniFrame = () => {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60)
      }
    )
  }

  const getWindowScrollTop = () => {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body).scrollTop
  }

  const calculateTopPosition = (el: HTMLElement): number => {
    return !el ? 0 : el.offsetTop + calculateTopPosition(el.offsetParent as HTMLElement)
  }

  const isScrollAtBottom = () => {
    let offsetDistance = 0
    let resScrollTop = 0
    let direction = 'down'
    const windowScrollTop = getWindowScrollTop()
    if (useWindow) {
      if (scroller.current) {
        offsetDistance =
          calculateTopPosition(scroller.current) +
          scroller.current.offsetHeight -
          windowScrollTop -
          window.innerHeight
      }
      resScrollTop = windowScrollTop
    } else {
      const { scrollHeight, clientHeight, scrollTop } = scrollEl.current as HTMLElement
      offsetDistance = scrollHeight - clientHeight - scrollTop
      resScrollTop = scrollTop
    }
    if (beforeScrollTop.current > resScrollTop) {
      direction = 'up'
    } else {
      direction = 'down'
    }
    beforeScrollTop.current = resScrollTop
    scrollChange && scrollChange(resScrollTop)
    return offsetDistance <= threshold && direction == 'down'
  }

  return (
    <div
      className={classes}
      ref={scroller}
      onTouchStart={(event) => touchStart(event)}
      onTouchMove={(event) => touchMove(event)}
      onTouchEnd={() => touchEnd()}
      {...restProps}
    >
      <div className="nut-infinite-top" ref={refreshTop} style={getStyle()}>
        <div className="top-box">
          <Icon className="top-img" name={pullIcon} />
          <span className="top-text">{pullTxt}</span>
        </div>
      </div>
      <div className="nut-infinite-container">{children}</div>
      <div className="nut-infinite-bottom">
        {isInfiniting ? (
          <div className="bottom-box">
            <Icon className="bottom-img" name={loadIcon} />
            <div className="bottom-text">{loadTxt}</div>
          </div>
        ) : (
          !hasMore && <div className="tips">{loadMoreTxt}</div>
        )}
      </div>
    </div>
  )
}

Infiniteloading.defaultProps = defaultProps
Infiniteloading.displayName = 'NutInfiniteloading'
