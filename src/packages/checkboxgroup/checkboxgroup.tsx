import React, { FunctionComponent, useEffect, useImperativeHandle, useState } from 'react'
import '../checkbox/checkbox.scss'
import bem from '@/utils/bem'

export interface CheckBoxGroupProps {
  disabled: boolean
  checkedValue: string[]
  onChange: (value: string[]) => void
}

const defaultProps = {
  disabled: false,
  checkedValue: [],
  onChange: (value: string[]) => {},
} as CheckBoxGroupProps
export const CheckboxGroup = React.forwardRef(
  (
    props: Partial<CheckBoxGroupProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    ref
  ) => {
    const { children } = { ...defaultProps, ...props }
    const b = bem('checkboxgroup')
    const { className, disabled, onChange, checkedValue, ...rest } = props

    const [innerDisabled, setInnerDisabled] = useState(disabled)
    const [innerValue, setInnerValue] = useState(checkedValue)

    useImperativeHandle(ref, () => ({
      toggleAll(state: boolean) {
        console.log(state)
        if (state === false) {
          setInnerValue([])
        } else {
          const childrenLabel: string[] = []
          React.Children.map(children, (child) => {
            const childProps = (child as any).props
            childrenLabel.push(childProps.label || (child as any).children)
          })
          setInnerValue(childrenLabel)
        }
      },
    }))

    useEffect(() => {
      setInnerDisabled(disabled)
      setInnerValue(checkedValue)
    }, [disabled, checkedValue])

    function handleChildChange(state: boolean, label: string) {
      if (innerValue) {
        let clippedValue = []
        if (state) {
          clippedValue = [...innerValue, label]
        } else {
          innerValue?.splice(innerValue?.indexOf(label), 1)
          clippedValue = [...innerValue]
        }
        setInnerValue(clippedValue)
        onChange && onChange(clippedValue)
      }
    }

    function validateChildChecked(child: any) {
      if (!innerValue) return false
      return innerValue?.indexOf(child.props.label || child.children) > -1
    }

    function cloneChildren() {
      return React.Children.map(children, (child: any, index) => {
        const childChecked = validateChildChecked(child)
        if ((child as any).type.displayName !== 'NutCheckBox') {
          return React.cloneElement(child)
        }
        return React.cloneElement(child, {
          disabled: innerDisabled,
          checked: childChecked,
          onChange: handleChildChange,
        })
      })
    }

    return (
      <div className={`${b()} ${className || ''}`} {...rest}>
        {cloneChildren()}
      </div>
    )
  }
)

CheckboxGroup.defaultProps = defaultProps
CheckboxGroup.displayName = 'NutCheckboxGroup'
