import React, { CSSProperties, FunctionComponent, useEffect, useState } from 'react'
import './input.scss'
import bem from '@/utils/bem'
import { formatNumber } from './util'
import Icon from '../icon'
import classNames from 'classnames'

export interface InputProps {
  type: string
  defaultValue: any
  placeholder: string
  label: string
  requireShow: boolean
  disabled: boolean
  readonly: boolean
  textAlign: any
  maxLength: any
  clearable: boolean
  style?: CSSProperties
  className?: string
  change?: (value: any, event: Event) => void
  blur?: (value: any, event: Event) => void
  focus?: (value: any, event: Event) => void
  clear?: (value: any, event: Event) => void
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
      style,
      className,
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

      if (type === 'digit') {
        val = formatNumber(val, true)
      }
      if (type === 'number') {
        val = formatNumber(val, false)
      }
      if (maxLength && val.length > Number(maxLength)) {
        val = val.slice(0, Number(maxLength))
      }
      change && change(val, event)
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
    const textAlignStyle = {
      textAlign: textAlign,
    }

    return (
      <div
        className={`${inputBem()} ${disabled ? inputBem('disabled') : ''}  ${
          className ? className : ''
        }`}
      >
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
          style={{ ...style, ...textAlignStyle }}
          maxLength={maxLength}
          onBlur={(e: any) => {
            valueBlur(e)
          }}
          onFocus={(e: any) => {
            valueFocus(e)
          }}
          onChange={(e: any) => {
            valueChange(e)
          }}
        />
        {clearable && !readonly && active ? (
          <div
            onClick={(e: any) => {
              handleClear(e)
            }}
            className={inputBem('clear')}
          >
            {active && inputValue.length > 0 ? <Icon name="close-little" size="12px"></Icon> : null}
          </div>
        ) : null}
      </div>
    )
  }

Input.defaultProps = defaultProps
Input.displayName = 'NutInput'
