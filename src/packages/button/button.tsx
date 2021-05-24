import React, { FunctionComponent } from 'react'
import './button.scss'

export interface ButtonProps {

}
const defaultProps = {} as ButtonProps
export const Button: FunctionComponent<Partial<ButtonProps>> = (props) => {
  const { children } = { ...defaultProps, ...props }
  return <div className="nut-button">Button</div>
}

Button.defaultProps = defaultProps
Button.displayName = 'NutButton'
