import React, { FunctionComponent } from 'react'
import './cellgroup.scss'
import bem from '@/utils/bem'

export interface CellGroupProps {
  title: string
  classPrefix: string
}
const defaultProps = { title: '', classPrefix: 'nutui-cell-group' } as CellGroupProps
export const CellGroup: FunctionComponent<Partial<CellGroupProps>> = (props) => {
  const { children, classPrefix, title } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('cell-group')
  return (
    <div className={b(null, [classPrefix])}>
      {title ? <div className={b('title')}>{title}</div> : null}
      <div className={b('wrap')}>{children}</div>
    </div>
  )
}

CellGroup.defaultProps = defaultProps
CellGroup.displayName = 'NutCellGroup'
