import React, { FunctionComponent, useContext } from 'react'
import { DataContext } from '@/packages/steps/UserContext'
import bem from '@/utils/bem'
import classNames from 'classnames'
import Icon from '@/packages/icon'
import './step.scss'

export interface StepProps {
  title: string
  content: string
  activeIndex: number
  icon: string
  size: string
  renderContent: () => React.ReactNode
}
const defaultProps = {
  title: '',
  content: '',
  activeIndex: 0,
  icon: '',
  size: '12px',
} as StepProps
export const Step: FunctionComponent<Partial<StepProps> & React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { children, title, content, activeIndex, icon, size, renderContent } = {
    ...defaultProps,
    ...props,
  }
  const parent: any = useContext(DataContext)

  const dot = parent.propSteps.progressDot
  const getCurrentStatus = () => {
    const index = activeIndex
    if (index < +parent.propSteps.current) return 'finish'
    return index === +parent.propSteps.current ? 'process' : 'wait'
  }

  const b = bem('step')
  const classes = classNames(
    {
      [`${b('')}-${getCurrentStatus()}`]: true,
    },
    b('')
  )
  return (
    <div className={classes}>
      <div className="nut-step-head">
        <div className="nut-step-line"></div>
        <div className={`nut-step-icon ${!dot ? (icon ? 'is-icon' : 'is-text') : ''}`}>
          {icon ? (
            <Icon className="nut-step-icon-inner" name={icon} size={size} />
          ) : dot ? (
            <span></span>
          ) : (
            <span className="nut-step-inner">{activeIndex}</span>
          )}
        </div>
      </div>
      <div className="nut-step-main">
        <span className="nut-step-title">{title}</span>
        {content && <span className="nut-step-content">{content}</span>}
        {renderContent && <span className="nut-step-content">{renderContent()}</span>}
      </div>
    </div>
  )
}

Step.defaultProps = defaultProps
Step.displayName = 'NutStep'
