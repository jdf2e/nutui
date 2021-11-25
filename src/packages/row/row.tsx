import React, { FunctionComponent } from 'react'
import { DataContext } from './UserContext'
import './row.scss'

export interface RowProps {
  type: string
  justify: string
  align: string
  wrap: string
  gutter: string | number
}
const defaultProps = {
  type: '',
  justify: 'start',
  align: 'flex-start',
  wrap: 'nowrap',
  gutter: '0',
} as RowProps
export const Row: FunctionComponent<Partial<RowProps> & React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { children, type, justify, align, wrap, gutter } = { ...defaultProps, ...props }
  const prefixCls = 'nut-row'
  const getClass = (prefix: string, type: string) => {
    return prefix ? (type ? `nut-row-${prefix}-${type}` : '') : `nut-row-${type}`
  }
  const getClasses = () => {
    return `
    ${getClass('', type)}
    ${getClass('justify', justify)}
    ${getClass('align', align)}
    ${getClass('flex', wrap)}
    ${prefixCls}
   `
  }
  const parentRow = {
    gutter: gutter,
  }

  return (
    <DataContext.Provider value={parentRow}>
      {/* <div className={`${getClasses()}`}>
          {children}
        </div> */}
      {React.createElement(
        'div',
        {
          className: getClasses(),
        },
        children
      )}
    </DataContext.Provider>
  )
}

Row.defaultProps = defaultProps
Row.displayName = 'NutRow'
