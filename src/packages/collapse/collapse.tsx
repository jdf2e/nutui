import React, { FunctionComponent, useEffect, useState, memo } from 'react'
import './collapse.scss'
import bem from '@/utils/bem'

export interface CollapseProps {
  activeName: Array<number | string> | number | string
  accordion: boolean
  icon: string
  iconSize: string
  iconColor: string
  rotate: number
  change: (isOpen: boolean, name: string) => void
}
const defaultProps = {
  activeName: ['0'],
  accordion: false,
  icon: '',
  iconSize: '16px',
  iconColor: '',
  rotate: 180,
} as CollapseProps

function areEqual(prevProps: Partial<CollapseProps>, nextProps: Partial<CollapseProps>) {
  return JSON.stringify(prevProps.activeName) == JSON.stringify(nextProps.activeName)
}

export const Collapse: FunctionComponent<Partial<CollapseProps>> = memo((props) => {
  const { children, activeName, accordion, icon, rotate, iconSize, iconColor, change } = {
    ...defaultProps,
    ...props,
  }
  const childrenDom = React.Children.toArray(children)
  const [defaultOpenIndex, setDefaultOpenIndex] = useState<Array<string>>([])
  const handleActiveName = () => {
    let activeArr = []
    if (!Array.isArray(activeName)) {
      activeArr.push(activeName.toString())
    } else {
      //数组
      if (accordion && activeName.length > 1) {
        console.warn('手风琴模式不支持传递多个打开页签')
      }
      const activeNameStr = activeName.map((item) => {
        return item.toString()
      })
      activeArr = [...activeNameStr]
    }
    return activeArr
  }

  const colBem = bem('collapse')
  useEffect(() => {
    const activeArr = handleActiveName()
    setDefaultOpenIndex(activeArr)
  }, [activeName])

  const onToggle = (isOpen: boolean, name: string) => {
    let newOpenIndex = [...defaultOpenIndex]
    if (isOpen) {
      //当前状态为true，则变为false,闭合
      const removeIndex = newOpenIndex.findIndex((value) => {
        return value === name
      })
      newOpenIndex.splice(removeIndex, 1)
    } else {
      //当前状态为false，变为true，展开
      if (accordion) {
        newOpenIndex = [name]
      } else {
        newOpenIndex.push(name)
      }
    }
    setDefaultOpenIndex(newOpenIndex)
    change && change(!isOpen, name)
  }
  return (
    <div className={colBem()}>
      {childrenDom.map((item: any, index: number) => {
        return React.cloneElement(item, {
          isOpen: defaultOpenIndex.includes(item.props.name),
          onToggle: (isOpen: boolean, name: string) => onToggle(isOpen, name),
          icon,
          rotate,
          iconSize,
          iconColor,
        })
      })}
    </div>
  )
}, areEqual)

Collapse.defaultProps = defaultProps
Collapse.displayName = 'NutCollapse'
