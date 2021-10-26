import React, { useState, useEffect, FunctionComponent, ChangeEvent, FocusEvent } from 'react'
import Icon from '@/packages/icon'
import classNames from 'classnames'
import bem from '@/utils/bem'
import './inputnumber.scss'

export interface InputNumberProps {
  disabled: boolean
  buttonSize: string | number
  min: string | number
  max: string | number
  inputWidth: string | number
  readonly: boolean
  modelValue: string | number
  step: string | number
  decimalPlaces: string | number
  isAsync: boolean
  className: string
  style: React.CSSProperties
  add: (e: MouseEvent) => void
  reduce: (e: MouseEvent) => void
  overlimit: (e: MouseEvent) => void
  blur: (e: ChangeEvent<HTMLInputElement>) => void
  focus: (e: FocusEvent<HTMLInputElement>) => void
  change: (param: string | number, e: MouseEvent | ChangeEvent<HTMLInputElement>) => void
}
const defaultProps = {
  disabled: false,
  buttonSize: '',
  min: 1,
  max: 9999,
  inputWidth: '',
  readonly: false,
  modelValue: 0,
  step: 1,
  decimalPlaces: 0,
  isAsync: false,
} as InputNumberProps
function pxCheck(value: string | number): string {
  return Number.isNaN(Number(value)) ? String(value) : `${value}px`
}
export const InputNumber: FunctionComponent<
  Partial<InputNumberProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    disabled,
    buttonSize,
    min,
    max,
    inputWidth,
    readonly,
    modelValue,
    decimalPlaces,
    step,
    isAsync,
    className,
    style,
    add,
    reduce,
    change,
    overlimit,
    blur,
    focus,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const [inputValue, setInputValue] = useState(modelValue)
  useEffect(() => {
    setInputValue(modelValue)
  }, [modelValue])

  const b = bem('inputnumber')
  const classes = classNames(
    {
      [`${b('')}--disabled`]: disabled,
    },
    className,
    b('')
  )
  const styles = {
    height: pxCheck(buttonSize),
    ...style,
  }
  const addAllow = (value = Number(inputValue)) => {
    return value < Number(max) && !disabled
  }

  const reduceAllow = (value = Number(inputValue)) => {
    return value > Number(min) && !disabled
  }

  const iconMinusClasses = classNames('nut-inputnumber__icon', {
    'nut-inputnumber__icon--disabled': !reduceAllow(),
  })

  const iconAddClasses = classNames('nut-inputnumber__icon', {
    'nut-inputnumber__icon--disabled': !addAllow(),
  })

  const fixedDecimalPlaces = (v: string | number): string => {
    return Number(v).toFixed(Number(decimalPlaces))
  }

  const emitChange = (value: string | number, e: MouseEvent | ChangeEvent<HTMLInputElement>) => {
    const output_value: number | string = fixedDecimalPlaces(value)
    change && change(output_value, e)
    if (!isAsync) {
      setInputValue(output_value)
    }
  }

  const reduceNumber = (e: MouseEvent) => {
    reduce && reduce(e)
    if (reduceAllow()) {
      let output_value = Number(inputValue) - Number(step)
      emitChange(output_value, e)
    } else {
      overlimit && overlimit(e)
    }
  }

  const addNumber = (e: MouseEvent) => {
    add && add(e)
    if (addAllow()) {
      const output_value = Number(inputValue) + Number(step)
      emitChange(output_value, e)
    } else {
      overlimit && overlimit(e)
    }
  }

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    change && change(input.valueAsNumber, e)
    if (!isAsync) {
      if (Number.isNaN(input.valueAsNumber)) {
        setInputValue(inputValue)
      } else {
        setInputValue(input.valueAsNumber)
      }
    }
  }

  const focusValue = (e: FocusEvent<HTMLInputElement>) => {
    if (disabled) return
    if (readonly) return
    focus && focus(e)
  }

  const burValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    if (readonly) return
    const input = e.target as HTMLInputElement
    let value = input.valueAsNumber
    if (value < Number(min)) {
      value = Number(min)
    } else if (value > Number(max)) {
      value = Number(max)
    }
    emitChange(value, e)
    blur && blur(e)
  }
  return (
    <div className={classes} style={styles} {...restProps}>
      <Icon className={iconMinusClasses} size={buttonSize} name="minus" click={reduceNumber} />
      <input
        type="number"
        min={min}
        max={max}
        style={{ width: pxCheck(inputWidth) }}
        disabled={disabled}
        readOnly={readonly}
        value={inputValue}
        onInput={changeValue}
        onBlur={burValue}
        onFocus={focusValue}
      />
      <Icon className={iconAddClasses} size={buttonSize} name="plus" click={addNumber} />
    </div>
  )
}

InputNumber.defaultProps = defaultProps
InputNumber.displayName = 'NutInputNumber'
