export type InputAlign = 'left' | 'center' | 'right' // text-align

export type InputFormatTrigger = 'onChange' | 'onBlur' // onChange: 在输入时执行格式化 ; onBlur: 在失焦时执行格式化

export type InputType =
  | 'tel'
  | 'url'
  | 'date'
  | 'file'
  | 'text'
  | 'time'
  | 'week'
  | 'color'
  | 'digit'
  | 'email'
  | 'image'
  | 'month'
  | 'radio'
  | 'range'
  | 'reset'
  | 'button'
  | 'hidden'
  | 'number'
  | 'search'
  | 'submit'
  | 'checkbox'
  | 'password'
  | 'textarea'
  | 'datetime-local'
  // weapp
  | 'idcard'
  | 'nickname'
  | 'safe-password'

export type InputRule = {
  pattern?: RegExp
  message?: string
  required?: boolean
}

export type InputConfirmType = 'send' | 'search' | 'next' | 'go' | 'done'

export interface InputTarget extends HTMLInputElement {
  composing?: boolean
}

export interface InputEvent extends Event {
  detail: {
    value: any
  }
}
