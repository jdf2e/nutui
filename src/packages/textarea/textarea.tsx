import React, { FunctionComponent, useEffect, useState, CSSProperties } from 'react'
import './textarea.scss'
import bem from '@/utils/bem'

export interface TextAreaProps {
  className?: string
  defaultValue: string | number | any
  textAlign?: string | any
  limitshow?: boolean
  maxlength?: any
  rows?: any
  placeholder?: string
  readonly?: boolean
  disabled?: boolean
  autosize?: boolean
  style?: CSSProperties
  change?: (value: any, event: Event) => void
  blur?: (event: Event) => void
  focus?: (event: Event) => void
}
const defaultProps = {
  defaultValue: '',
  textAlign: 'left',
  limitshow: false,
  maxlength: '',
  rows: '',
  placeholder: '请输入内容',
  readonly: false,
  disabled: false,
  autosize: false,
} as TextAreaProps
export const TextArea: FunctionComponent<
  Partial<TextAreaProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    defaultValue,
    textAlign,
    limitshow,
    maxlength,
    rows,
    placeholder,
    readonly,
    disabled,
    autosize,
    style,
    change,
    blur,
    focus,
  } = { ...defaultProps, ...props }

  const textareaBem = bem('textarea')
  const [inputValue, SetInputValue] = useState('')

  useEffect(() => {
    if (defaultValue) {
      let initValue = defaultValue
      if (maxlength && initValue.length > Number(maxlength)) {
        initValue = initValue.substring(0, Number(maxlength))
      }
      SetInputValue(initValue)
    }
  }, [defaultValue])

  const textChange = (event: Event) => {
    const text = event.target as any
    if (maxlength && text.value.length > Number(maxlength)) {
      text.value = text.value.substring(0, Number(maxlength))
    }
    SetInputValue(text.value)
    if (change) {
      change(text.value, event)
    }
  }

  const textFocus = (event: Event) => {
    if (disabled) return
    if (readonly) return
    if (focus) {
      focus(event)
    }
  }

  const textBlur = (event: Event) => {
    if (disabled) return
    if (readonly) return
    const text = event.target as any
    if (change) {
      change(text.value, event)
    }
    if (blur) {
      blur(event)
    }
  }

  return (
    <div
      className={`${textareaBem()} ${disabled ? textareaBem('disabled') : ''} ${
        className ? className : ''
      }`}
    >
      <textarea
        className={textareaBem('textarea')}
        style={{
          textAlign: textAlign,
          resize: `${autosize ? 'vertical' : 'none'}` as any,
          ...style,
        }}
        disabled={disabled}
        readOnly={readonly}
        value={inputValue}
        onChange={(e: any) => {
          textChange(e)
        }}
        onBlur={(e: any) => {
          textBlur(e)
        }}
        onFocus={(e: any) => {
          textFocus(e)
        }}
        rows={rows}
        maxLength={maxlength < 0 ? 0 : maxlength}
        placeholder={placeholder}
      />
      {limitshow ? (
        <div className={textareaBem('limit')}>
          {inputValue.length}/{maxlength < 0 ? 0 : maxlength}
        </div>
      ) : null}
    </div>
  )
}

TextArea.defaultProps = defaultProps
TextArea.displayName = 'NutTextArea'
