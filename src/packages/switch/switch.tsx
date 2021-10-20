import React, { FunctionComponent, useState, useEffect } from 'react'
import './switch.scss'
import bem from '@/utils/bem'

export interface SwitchProps {
  isAsync: boolean
  checked: boolean
  disable: boolean
  activeColor: string
  inactiveColor: string
  activeText: string
  inactiveText: string
  change: (val: boolean, event: React.MouseEvent) => void
}
const defaultProps = {
  isAsync: false,
  checked: false,
  disable: false,
  activeColor: '',
  inactiveColor: '',
  activeText: '',
  inactiveText: '',
} as SwitchProps
export const Switch: FunctionComponent<Partial<SwitchProps>> = (props) => {
  const {
    isAsync,
    checked,
    disable,
    activeColor,
    inactiveColor,
    activeText,
    inactiveText,
    change,
  } = {
    ...defaultProps,
    ...props,
  }

  const [value, setValue] = useState(false)
  const b = bem('switch')

  useEffect(() => {
    setValue(checked)
  }, [checked])

  const classes = () => {
    return `${b()} ${value ? 'switch-open' : 'switch-close'} ${
      disable ? `${b()}-disable` : ''
    } ${`${b()}-base`}`
  }

  const style = () => {
    return {
      backgroundColor: value ? activeColor : inactiveColor,
    }
  }

  const onClick = (event: React.MouseEvent) => {
    if (disable) return
    if (!isAsync) {
      setValue(!value)
    }
    change && change(!value, event)
  }
  return (
    <div className={classes()} onClick={(e) => onClick(e)} style={style()}>
      <div className="switch-button">
        {!value && <div className="close-line"></div>}
        {activeText && (
          <>
            {value ? (
              <div className={`${b('label')} open`}>{activeText}</div>
            ) : (
              <div className={`${b('label')} close`}>{inactiveText}</div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

Switch.defaultProps = defaultProps
Switch.displayName = 'NutSwitch'
