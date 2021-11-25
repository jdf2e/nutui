import React, { FunctionComponent, useEffect, useState, CSSProperties, useContext } from 'react'
import { DataContext } from '@/packages/row/UserContext'
import './col.scss'

export interface ColProps {
  span: string | number
  offset: string | number
  gutter: string | number
}
const defaultProps = {
  span: '24',
  offset: '0',
  gutter: '0',
} as ColProps

export const Col: FunctionComponent<Partial<ColProps> & React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { span, offset, children } = { ...defaultProps, ...props }
  const [colName, setColName] = useState('')
  const [colStyle, setColStyle] = useState({})
  const gutter = (useContext(DataContext) as any).gutter

  const classs = () => {
    //定义col的class类
    const prefixCls = 'nut-col'
    return `${prefixCls} ${prefixCls}-${span} ${
      gutter ? `${prefixCls}-gutter` : ''
    } ${prefixCls}-${offset}`
  }
  const getStyle = () => {
    //定义col的style类
    const style: CSSProperties = {}
    style.paddingLeft = `${(gutter as number) / 2}px`
    style.paddingRight = `${(gutter as number) / 2}px`
    return style
  }
  useEffect(() => {
    setColName(classs)
    setColStyle(getStyle)
  }, [span, offset, gutter])

  return (
    <div className={`${colName}`} style={{ ...colStyle }}>
      {children}
    </div>
  )
}

Col.defaultProps = defaultProps
Col.displayName = 'NutCol'
