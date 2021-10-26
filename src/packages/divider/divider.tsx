import React, { FunctionComponent } from 'react'
import './divider.scss'
import bem from '@/utils/bem'
import classNames from 'classnames'

export interface DividerProps {
  contentPosition: string
  dashed: boolean
  hairline: boolean
  styles?: React.CSSProperties
}
const defaultProps = {
  contentPosition: 'center',
  dashed: false,
  hairline: true,
} as DividerProps
export const Divider: FunctionComponent<
  Partial<DividerProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, contentPosition, dashed, hairline, styles } = { ...defaultProps, ...props }
  const dividerBem = bem('divider')
  const classes = classNames({
    [dividerBem()]: true,
    [dividerBem('center')]: children,
    [dividerBem('left')]: contentPosition === 'left',
    [dividerBem('right')]: contentPosition === 'right',
    [dividerBem('dashed')]: dashed,
    [dividerBem('hairline')]: hairline,
  })
  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  )
}

Divider.defaultProps = defaultProps
Divider.displayName = 'NutDivider'
