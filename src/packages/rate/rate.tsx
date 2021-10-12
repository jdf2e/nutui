import React, { FunctionComponent, useEffect, useState } from 'react'
import './rate.scss'
import bem from '@/utils/bem'
import Icon from '../icon'

export interface RateProps {
  count: string | number
  modelValue: string | number
  iconSize: string | number
  activeColor: string
  voidColor: string
  checkedIcon: string
  uncheckedIcon: string
  disabled: boolean
  readonly: boolean
  allowHalf: boolean
  spacing: string | number
  change: (val: number) => void
}
const defaultProps = {
  count: 5,
  modelValue: 0,
  iconSize: 18,
  activeColor: '',
  voidColor: '',
  checkedIcon: 'star-fill-n',
  uncheckedIcon: 'star-n',
  disabled: false,
  readonly: false,
  allowHalf: false,
  spacing: 14,
} as RateProps
export const Rate: FunctionComponent<Partial<RateProps>> = (props) => {
  const {
    count,
    modelValue,
    iconSize,
    activeColor,
    voidColor,
    checkedIcon,
    uncheckedIcon,
    disabled,
    readonly,
    allowHalf,
    spacing,
    change,
  } = { ...defaultProps, ...props }
  const b = bem('rate')
  const bi = bem('rate-item')

  const [countArray, setCountArray] = useState([1, 2, 3, 4, 5])
  const [score, setScore] = useState(0)

  useEffect(() => {
    const tmp = []
    for (let i = 1; i <= Number(count); i++) {
      tmp.push(i)
    }
    setCountArray(tmp)
  }, [count])

  useEffect(() => {
    setScore(Number(modelValue))
  }, [modelValue])

  const pxCheck = (value: string | number): string => {
    return isNaN(Number(value)) ? String(value) : `${value}px`
  }

  const onClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    if (disabled || readonly) return
    let value = 0
    if (index === 1 && score === index) {
    } else {
      value = index
      if (allowHalf) {
        if ((e?.target as Element).className.includes('__icon--half')) {
          value -= 0.5
        }
      }
    }
    setScore(value)

    change && change(value)
  }
  return (
    <div className={b()}>
      {countArray.map((n) => {
        return (
          <div
            className={bi()}
            key={n}
            onClick={(event) => onClick(event, n)}
            style={{ marginRight: pxCheck(spacing) }}
          >
            <Icon
              size={iconSize}
              className={`${bi('icon')} ${disabled || n > score ? bi('icon--disabled') : ''}`}
              name={n <= score ? checkedIcon : uncheckedIcon}
              color={n <= score ? activeColor : voidColor}
            />
            {allowHalf && score > n - 1 && (
              <Icon
                className={`${bi('icon')} ${bi('icon--half')}`}
                color={n <= score ? activeColor : voidColor}
                size={iconSize}
                name={checkedIcon}
              />
            )}
            {allowHalf && score < n - 1 && (
              <Icon
                className={`${bi('icon')} ${bi('icon--disabled')} ${bi('icon--half')}`}
                color={voidColor}
                size={iconSize}
                name={uncheckedIcon}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

Rate.defaultProps = defaultProps
Rate.displayName = 'NutRate'
