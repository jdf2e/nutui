import React, { FunctionComponent, useEffect, useState } from 'react'
import './input.scss'
import bem from '@/utils/bem'
import { formatNumber } from './util'
import Icon from '../icon'

export interface InputProps {
  type: string
  defaultValue: any
  placeholder: string
  label: string
  requireShow: boolean
  disabled: boolean
  readonly: boolean
  textAlign: string
  maxLength: any
  clearable: boolean
  change?: (value: string | number, event: Event) => void
  blur?: (value: string | number, event: Event) => void
  focus?: (value: string | number, event: Event) => void
  clear?: (value: string | number, event: Event) => void
}
const defaultProps = {
  type: 'text',
  defaultValue: '',
  placeholder: '请输入信息',
  label: '',
  requireShow: false,
  disabled: false,
  readonly: false,
  textAlign: 'left',
  maxLength: '',
  clearable: true,
} as InputProps

export const Input: FunctionComponent<Partial<InputProps> & React.HTMLAttributes<HTMLDivElement>> =
  (props) => {
    const {
      type,
      defaultValue,
      placeholder,
      label,
      requireShow,
      disabled,
      readonly,
      textAlign,
      maxLength,
      clearable,
      change,
      blur,
      focus,
      clear,
    } = { ...defaultProps, ...props }

    const inputBem = bem('input')
    const [inputValue, SetInputValue] = useState('')
    const [active, SetActive] = useState(false)

    useEffect(() => {
      if (defaultValue) {
        SetInputValue(defaultValue)
      }
    }, [defaultValue])

    const valueChange = (event: Event) => {
      let val: any = (event.target as any).value
      if (maxLength && val.length > Number(maxLength)) {
        val = val.slice(0, Number(maxLength))
      }
      if (type === 'digit') {
        val = formatNumber(val, true)
      }
      if (type === 'number') {
        val = formatNumber(val, false)
      }
      if (change) {
        change(val, event)
      }
      SetInputValue(val)
    }

    const valueFocus = (event: Event) => {
      let val: any = (event.target as any).value
      SetActive(true)
      if (focus) {
        focus(val, event)
      }
    }

    const valueBlur = (event: Event) => {
      setTimeout(() => {
        SetActive(false)
      }, 0)
      let val: any = (event.target as any).value
      if (blur) {
        blur(val, event)
      }
    }
    const handleClear = (event: Event) => {
      if (clear) {
        clear('', event)
      }
      SetInputValue('')
    }

    return (
      <div className={`${inputBem()} ${disabled ? inputBem('disabled') : ''}`}>
        <div className={inputBem('label')}>
          {requireShow ? <div className={inputBem('require')}>*</div> : null}
          {label ? <div className="label-string">{label}</div> : null}
        </div>
        <input
          className="input-text"
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          value={inputValue}
          maxLength={maxLength}
          onBlur={valueBlur}
          onFocus={valueFocus}
          onChange={valueChange}
        />
        {clearable && !readonly ? (
          <div onClick={handleClear} className={inputBem('clear')}>
            {active && inputValue.length > 0 ? <Icon name="close-little" size="12px"></Icon> : null}
          </div>
        ) : null}
      </div>
    )
  }

Input.defaultProps = defaultProps
Input.displayName = 'NutInput'
