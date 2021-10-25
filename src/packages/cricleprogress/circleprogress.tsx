import React, { FunctionComponent } from 'react'
import bem from '@/utils/bem'
import './circleprogress.scss'

export interface CircleProgressProps {
  strokeInnerWidth: string | number
  progress: string | number
  isAuto: boolean
  progressOption: object
}
const defaultProps = {
  strokeInnerWidth: 10,
  progress: 10,
  isAuto: false,
  progressOption: {},
} as CircleProgressProps
export const CircleProgress: FunctionComponent<
  Partial<CircleProgressProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, strokeInnerWidth, progress, isAuto, progressOption } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('circleprogress')
  const option = () => {
    // 所有进度条的可配置项
    let baseOption = {
      radius: 50,
      strokeOutWidth: 10,
      backColor: '#d9d9d9',
      progressColor: 'red',
      cy: 1,
      cx: 1,
      size: 1,
      startPosition: '',
    }
    Object.assign(baseOption, progressOption)
    // 圆心位置自动生成
    baseOption.cy = baseOption.cx = baseOption.radius + baseOption.strokeOutWidth
    baseOption.size = (baseOption.radius + baseOption.strokeOutWidth) * 2
    baseOption.startPosition = 'rotate(-90,' + baseOption.cx + ',' + baseOption.cy + ')'
    return baseOption
  }
  const arcLength = () => {
    let circleLength = Math.floor(2 * Math.PI * option().radius)
    let progressLength = ((progress as number) / 100) * circleLength
    return `${progressLength},${circleLength}`
  }
  return (
    <div className={`${b()}`} style={{ height: `${option().size}px`, width: `${option().size}px` }}>
      <svg height={option().size} width={option().size} x-mlns="http://www.w3.org/200/svg">
        <circle
          r={option().radius}
          cx={option().cx}
          cy={option().cy}
          stroke={option().backColor}
          strokeWidth={option().strokeOutWidth}
          fill="none"
        />
        <circle
          r={option().radius}
          cx={option().cx}
          cy={option().cy}
          stroke={option().progressColor}
          strokeWidth={strokeInnerWidth}
          strokeDasharray={arcLength()}
          transform={option().startPosition}
          fill="none"
          strokeLinecap="round"
          style={{ transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s' }}
        />
      </svg>
      <div className="nut-circleprogress-content">{!isAuto ? `${progress}%` : <>{children}</>}</div>
    </div>
  )
}

CircleProgress.defaultProps = defaultProps
CircleProgress.displayName = 'NutCircleProgress'
