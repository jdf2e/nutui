import React, { FunctionComponent } from 'react'
import './range.scss'

export interface RangeProps {}
const defaultProps = {} as RangeProps
export const Range: FunctionComponent<Partial<RangeProps> & React.HTMLAttributes<HTMLDivElement>> =
  (props) => {
    const { children } = { ...defaultProps, ...props }
    return <div className="nut-range">Range</div>
  }

Range.defaultProps = defaultProps
Range.displayName = 'NutRange'
