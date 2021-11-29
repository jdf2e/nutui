import React, { FunctionComponent, useState, useEffect, MouseEvent, HTMLProps } from 'react'
import { Icon } from '../icon/icon'
import { Overlay } from '../overlay/overlay'
import classNames from 'classnames'

import './fixednav.scss'

export interface FixedNavProps {
  prefixCls: string
  visible: boolean
  overlay: boolean
  navList: Array<object>
  activeText: string
  unActiveText: string
  position: object
  type: string
  change: Function
  selected: Function
  slotList: HTMLProps<HTMLElement>
  slotBtn: HTMLProps<HTMLElement>
}

const defaultProps = {
  prefixCls: 'nut-fixednav',
  activeText: '收起导航',
  unActiveText: '快速导航',
  position: {
    top: 'auto',
    bottom: 'auto',
  },
  type: 'right',
} as FixedNavProps

export const FixedNav: FunctionComponent<
  Partial<FixedNavProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    prefixCls,
    children,
    overlay,
    visible,
    navList,
    activeText,
    unActiveText,
    position,
    change,
    selected,
    type,
    slotList,
    slotBtn,
  } = { ...defaultProps, ...props }

  const selectCb = (event: MouseEvent, item: any) => {
    selected(item, event)
  }

  const updateValue = (value: boolean = !visible) => {
    change(value)
  }

  const [classNames, setClassNames] = useState('')

  const classes = () => {
    return `${prefixCls} ${type} ${visible ? 'active' : ''}`
  }

  useEffect(() => {
    setClassNames(classes())
  }, [visible])

  return (
    <div className={`${classNames}`} style={position}>
      {overlay && (
        <Overlay visible={visible} zIndex={200} onClick={() => updateValue(false)}></Overlay>
      )}
      <div className="list">
        {slotList ? (
          slotList
        ) : (
          <div className="nut-fixednav__list">
            {navList.map((item: any, index) => {
              return (
                <div
                  className="nut-fixednav__list-item"
                  onClick={(event) => selectCb(event, item)}
                  key={item.id || index}
                >
                  <img src={item.icon} />
                  <div className="span">{item.text}</div>
                  {item.num && <div className="b">{item.num}</div>}
                </div>
              )
            })}
          </div>
        )}
      </div>

      <div className="nut-fixednav__btn" onClick={() => updateValue()}>
        {slotBtn ? (
          slotBtn
        ) : (
          <>
            <Icon name="left" color="#fff" />
            <div className="text">{visible ? activeText : unActiveText}</div>
          </>
        )}
      </div>
    </div>
  )
}

FixedNav.defaultProps = defaultProps
FixedNav.displayName = 'NutFixedNav'
