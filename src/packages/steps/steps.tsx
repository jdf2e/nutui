import React, { useState, FunctionComponent } from 'react'
import { DataContext } from './UserContext'
import bem from '@/utils/bem'
import classNames from 'classnames'
import './steps.scss'

export interface StepsProps {
  current: number
  direction: string
  progressDot: boolean
}
const defaultProps = {
  current: 0,
  direction: 'horizontal',
  progressDot: false,
} as StepsProps

export const Steps: FunctionComponent<Partial<StepsProps> & React.HTMLAttributes<HTMLDivElement>> =
  (props) => {
    const propSteps = { ...defaultProps, ...props }
    const { children, direction } = propSteps

    const parentSteps = {
      propSteps,
    }

    const b = bem('steps')
    const classes = classNames(
      {
        [`${b('')}-${direction}`]: true,
        [`${b('')}-dot`]: !!props.progressDot,
      },
      b('')
    )
    return (
      <DataContext.Provider value={parentSteps}>
        {React.createElement(
          'div',
          {
            className: classes,
          },
          children
        )}
      </DataContext.Provider>
    )
  }

Steps.defaultProps = defaultProps
Steps.displayName = 'NutSteps'
