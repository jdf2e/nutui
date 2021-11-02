import React, { FunctionComponent, ReactComponentElement, useState } from 'react'
import './tabbar.scss'
import bem from '@/utils/bem'
import { TabbarItem } from '../tabbaritem/tabbarItem'

export interface TabbarProps {
  visible: number | string
  bottom: boolean
  type: string
  size: string
  unactiveColor: string
  activeColor: string
  className: string
  style: React.CSSProperties
  tabSwitch: (child: React.ReactElement<any>, active: number) => void
}
const defaultProps = {
  visible: 0,
  bottom: false,
  type: '',
  size: '',
  unactiveColor: '',
  activeColor: '',
  className: '',
  style: {},
  tabSwitch: () => {},
} as TabbarProps

export const Tabbar: FunctionComponent<Partial<TabbarProps>> = (props) => {
  const { children, visible, bottom, activeColor, unactiveColor, className, style, tabSwitch } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('tabbar')

  const [selectIndex, setSelectIndex] = useState(visible)

  const handleClick = (idx: number) => {
    setSelectIndex(idx)
  }

  return (
    <div className={[`${b()}`, bottom ? `${b('bottom')}` : '', className].join(' ')} style={style}>
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) {
          return null
        }
        const childProps = {
          ...child.props,
          active: idx === selectIndex,
          index: idx,
          unactiveColor: unactiveColor,
          activeColor: activeColor,
          handleClick: () => {
            handleClick(idx)
            tabSwitch(child, idx)
          },
        }
        return React.cloneElement(child, childProps)
      })}
    </div>
  )
}
//@ts-ignore  todo...
Tabbar.TabbarItem = TabbarItem
Tabbar.defaultProps = defaultProps
Tabbar.displayName = 'NutTabbar'
