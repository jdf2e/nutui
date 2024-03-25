import type { HTMLAttributes, InputHTMLAttributes } from 'vue'
import type { InputType } from './type'

function trimExtraChar(value: string, char: string, regExp: RegExp) {
  const index = value.indexOf(char)

  if (index === -1) {
    return value
  }

  if (char === '-' && index !== 0) {
    return value.slice(0, index)
  }

  return value.slice(0, index + 1) + value.slice(index).replace(regExp, '')
}

export function formatNumber(value: string, allowDot = true, allowMinus = true) {
  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g)
  } else {
    value = value.split('.')[0]
  }

  if (allowMinus) {
    value = trimExtraChar(value, '-', /-/g)
  } else {
    value = value.replace(/-/, '')
  }
  const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g

  return value.replace(regExp, '')
}

export function mapInputType(type: InputType): {
  type: InputHTMLAttributes['type']
  inputmode?: HTMLAttributes['inputmode']
} {
  // type="number" is weird in iOS, and can't prevent dot in Android
  // so use inputmode to set keyboard in modern browsers
  if (type === 'number') {
    return {
      type: 'text',
      inputmode: 'decimal'
    }
  }

  if (type === 'digit') {
    return {
      type: 'tel',
      inputmode: 'numeric'
    }
  }

  return { type }
}
