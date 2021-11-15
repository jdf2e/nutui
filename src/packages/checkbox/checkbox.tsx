import React, { FunctionComponent, useEffect, useState } from 'react'
import Icon from '../icon'
import { CheckboxGroup } from '@/packages/checkboxgroup/checkboxgroup'
import './checkbox.scss'
import bem from '@/utils/bem'

export interface CheckBoxProps {
  checked: boolean
  disabled: boolean
  textPosition: 'left' | 'right'
  iconSize: string | number
  iconName: string
  iconActiveName: string
  label: string
  onChange: (state: boolean, label: string) => void
}

const defaultProps = {
  checked: false,
  disabled: false,
  textPosition: 'right',
  iconSize: 18,
  iconName: 'check-normal',
  iconActiveName: 'checked',
  onChange: (state, label) => {},
} as CheckBoxProps
export const Checkbox: FunctionComponent<
  Partial<CheckBoxProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> & { Group: typeof CheckboxGroup } = (props) => {
  const { children } = { ...defaultProps, ...props }
  const b = bem('checkbox')
  const {
    iconName,
    iconSize,
    label,
    className,
    textPosition,
    iconActiveName,
    checked,
    disabled,
    onChange,
    ...rest
  } = props

  const [innerChecked, setInnerChecked] = useState(checked)
  const [innerDisabled, setDisabled] = useState(disabled)

  useEffect(() => {
    setInnerChecked(checked)
    setDisabled(disabled)
  }, [disabled, checked])

  const renderIcon = () => {
    return (
      <Icon name={innerChecked ? iconActiveName : iconName} size={iconSize} color={color()}></Icon>
    )
  }
  const color = () => {
    return !innerDisabled ? (!innerChecked ? '#d6d6d6' : '#fa2c19') : '#f5f5f5'
  }
  const renderLabel = () => {
    return (
      <span className={`${b('label', { disabled: innerDisabled })} `}>{label || children}</span>
    )
  }

  const handleClick = () => {
    if (disabled) return
    onChange && onChange(!innerChecked, label || (children as string))
    return setInnerChecked(!innerChecked)
  }

  return (
    <div
      className={`${b({ reverse: textPosition === 'left' })} ${className || ''}`}
      {...rest}
      onClick={handleClick}
    >
      {renderIcon()}
      {renderLabel()}
    </div>
  )
}

Checkbox.defaultProps = defaultProps
Checkbox.displayName = 'NutCheckBox'
Checkbox.Group = CheckboxGroup
