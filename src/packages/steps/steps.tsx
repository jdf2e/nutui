import React, { useState, FunctionComponent } from 'react'
import { DataContext } from './UserContext'
import bem from '@/utils/bem'
import classNames from 'classnames'
import './steps.scss'

export interface StepsProps {
  current: number
  direction: string
  progressDot: boolean
  className: string
  style: React.CSSProperties
}
const defaultProps = {
  current: 0,
  direction: 'horizontal',
  progressDot: false,
} as StepsProps

export const Steps: FunctionComponent<Partial<StepsProps> & React.HTMLAttributes<HTMLDivElement>> =
  (props) => {
    const propSteps = { ...defaultProps, ...props }
    const { children, direction, className, ...restProps } = propSteps

    const parentSteps = {
      propSteps,
    }

    const b = bem('steps')
    const classes = classNames(
      {
        [`${b('')}-${direction}`]: true,
        [`${b('')}-dot`]: !!props.progressDot,
      },
      className,
      b('')
    )
    return (
      <DataContext.Provider value={parentSteps}>
        {React.createElement(
          'div',
          {
            className: classes,
            ...restProps,
          },
          children
        )}
      </DataContext.Provider>
    )
  }

Steps.defaultProps = defaultProps
Steps.displayName = 'NutSteps'
