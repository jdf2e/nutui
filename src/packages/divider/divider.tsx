import React, { FunctionComponent } from 'react'
import './divider.scss'
import bem from '@/utils/bem'

export interface DividerProps {
  contentPosition: string
  dashed: boolean
  hairline: boolean
}
const defaultProps = {
  contentPosition: 'center',
  dashed: false,
  hairline: true,
} as DividerProps
export const Divider: FunctionComponent<
  Partial<DividerProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, contentPosition, dashed, hairline } = { ...defaultProps, ...props }
  const dividerBem = bem('divider')

  return (
    <div
      className={`${dividerBem()} ${children ? dividerBem('center') : ''} ${
        contentPosition === 'left' ? dividerBem('left') : ''
      } ${contentPosition === 'right' ? dividerBem('right') : ''} ${
        dashed ? dividerBem('dashed') : ''
      } ${hairline ? dividerBem('hairline') : ''}`}
    >
      {children}
    </div>
  )
}

Divider.defaultProps = defaultProps
Divider.displayName = 'NutDivider'
