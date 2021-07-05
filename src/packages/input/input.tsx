import React, { FunctionComponent } from 'react'
import './input.scss'

export interface InputProps {}
const defaultProps = {} as InputProps
export const Input: FunctionComponent<Partial<InputProps> & React.HTMLAttributes<HTMLDivElement>> =
  (props) => {
    const { children } = { ...defaultProps, ...props }
    return <div className="nut-input">Input</div>
  }

Input.defaultProps = defaultProps
Input.displayName = 'NutInput'
