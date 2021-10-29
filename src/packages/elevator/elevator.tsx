import React, { FunctionComponent, useRef, useEffect, useState } from 'react'
import './elevator.scss'
import bem from '@/utils/bem'

export interface ElevatorProps {
  height: number | string
  acceptKey: string
  indexList: any
  className: string
  style: React.CSSProperties
  clickItem: (key: string, item: ElevatorData) => void
  clickIndex: (key: string) => void
}
const defaultProps = {
  height: '200px',
  acceptKey: 'title',
  indexList: [],
  className: '',
} as ElevatorProps
interface ElevatorData {
  name: string
  id: number | string
  [key: string]: string | number
}
export const Elevator: FunctionComponent<
  Partial<ElevatorProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { height, acceptKey, indexList, className, clickItem, clickIndex, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('elevator')
  const spaceHeight = 23
  const listview = useRef<HTMLDivElement>(null)
  const initData = {
    anchorIndex: 0,
    listHeight: [] as number[],
    listGroup: [] as Element[],
  }
  const touchState = useRef({
    y1: 0,
    y2: 0,
  })
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [scrollStart, setScrollStart] = useState<boolean>(false)
  const state = useRef(initData)
  //重置滚动参数
  const resetScrollState = () => {
    state.current.anchorIndex = 0
    setCurrentIndex(0)
    setScrollStart(false)
    touchState.current = {
      y1: 0,
      y2: 0,
    }
  }

  const getData = (el: HTMLElement, name: string): string | void => {
    const prefix = 'data-'
    return el.getAttribute(prefix + name) as string
  }

  const calculateHeight = () => {
    let height = 0

    state.current.listHeight.push(height)
    for (let i = 0; i < state.current.listGroup.length; i++) {
      let item = state.current.listGroup[i]
      height += item.clientHeight
      state.current.listHeight.push(height)
    }
  }

  const scrollTo = (index: number) => {
    if (!index && index !== 0) {
      return
    }

    if (!state.current.listHeight.length) {
      calculateHeight()
    }
    if (index < 0) index = 0

    if (index > state.current.listHeight.length - 2) index = state.current.listHeight.length - 2

    setCurrentIndex(index)
    if (listview.current) {
      listview.current.scrollTo(0, state.current.listHeight[index])
    }
  }

  const touchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    let firstTouch = e.touches[0]
    touchState.current.y2 = firstTouch.pageY
    let delta = ((touchState.current.y2 - touchState.current.y1) / spaceHeight) | 0
    const cacheIndex = state.current.anchorIndex + delta

    setCurrentIndex(cacheIndex)
    scrollTo(cacheIndex)
  }

  const touchEnd = () => {
    resetScrollState()
  }

  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setScrollStart(true)
    let index = Number(getData(e.target as HTMLElement, 'index'))
    let firstTouch = e.touches[0]
    touchState.current.y1 = firstTouch.pageY
    state.current.anchorIndex = +index
    setCurrentIndex((currentIndex) => currentIndex + index)
    scrollTo(index)

    const target = e.currentTarget as HTMLElement

    target.removeEventListener('touchmove', () => touchMove(e), false)
    target.removeEventListener('touchend', touchEnd, false)
    target.addEventListener('touchmove', () => touchMove(e), false)
    target.addEventListener('touchend', touchEnd, false)
  }

  const handleClickItem = (key: string, item: ElevatorData) => {
    clickItem && clickItem(key, item)
  }

  const handleClickIndex = (key: string) => {
    clickIndex && clickIndex(key)
  }

  const setListGroup = () => {
    if (listview.current) {
      const els = listview.current.querySelectorAll('.nut-elevator__list__item')

      els.forEach((el: Element) => {
        if (el != null && !state.current.listGroup.includes(el)) {
          state.current.listGroup.push(el)
        }
      })
    }
  }
  useEffect(() => {
    if (listview.current) {
      setListGroup()
    }
  }, [listview.current])

  return (
    <div className={`${b()} ${className}`} {...rest}>
      <div
        className={b('list')}
        ref={listview}
        style={{ height: isNaN(+height) ? height : `${height}px` }}
      >
        {indexList.map((item: any) => {
          return (
            <div className={b('list__item')} key={item[acceptKey]}>
              <div className={b('list__item__code')}>{item[acceptKey]}</div>
              <>
                {item.list.map((subitem: any) => {
                  return (
                    <div
                      className={b('list__item__name')}
                      key={subitem['id']}
                      onClick={() => handleClickItem(item[acceptKey], subitem)}
                    >
                      {subitem.name}
                    </div>
                  )
                })}
              </>
            </div>
          )
        })}
      </div>
      {indexList.length && scrollStart ? (
        <div className={b('code', { current: true })}> {indexList[currentIndex][acceptKey]}</div>
      ) : null}
      <div className={b('bars')} onTouchStart={(event) => touchStart(event)}>
        <div className={b('bars__inner')}>
          {indexList.map((item: any, index: number) => {
            return (
              <div
                className={b('bars__inner__item')}
                data-index={index}
                key={item[acceptKey]}
                onClick={() => handleClickIndex(item[acceptKey])}
              >
                {item[acceptKey]}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Elevator.defaultProps = defaultProps
Elevator.displayName = 'NutElevator'
