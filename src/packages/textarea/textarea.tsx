import React, { FunctionComponent, useEffect, useState } from 'react'
import './textarea.scss'
import bem from '@/utils/bem'

export interface TextAreaProps {
  defaultValue: string | number | any
  textAlign?: string | any
  limitshow?: boolean
  maxlength?: any
  rows?: any
  placeholder?: string
  readonly?: boolean
  disabled?: boolean
  autosize?: boolean
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
    children,
    defaultValue,
    textAlign,
    limitshow,
    maxlength,
    rows,
    placeholder,
    readonly,
    disabled,
    autosize,
    change,
    blur,
    focus,
  } = { ...defaultProps, ...props }

  const textareaBem = bem('textarea')
  const [inputValue, SetInputValue] = useState('')

  useEffect(() => {
    if (defaultValue) {
      SetInputValue(defaultValue)
    }
  }, [defaultValue])

  const textChange = (event: Event) => {
    const text = event.target as any
    SetInputValue(text.value)
    if (change) {
      change(text, event)
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
      change(text, event)
    }
    if (blur) {
      blur(event)
    }
  }

  return (
    <div className={`${textareaBem()} ${disabled ? textareaBem('disabled') : ''}`}>
      <textarea
        className={textareaBem('textarea')}
        style={{ textAlign: textAlign, resize: `${autosize ? 'vertical' : 'none'}` as any }}
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
        maxLength={maxlength}
        placeholder={placeholder}
      />
      {limitshow ? (
        <div className={textareaBem('limit')}>
          {inputValue.length}/{maxlength}
        </div>
      ) : null}
    </div>
  )
}

TextArea.defaultProps = defaultProps
TextArea.displayName = 'NutTextArea'
