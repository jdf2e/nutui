import React, { CSSProperties, FunctionComponent, useEffect, useState } from 'react'
import './button.scss'
import Icon from '@/packages/icon'
export interface ButtonProps {
  className: string
  color: string
  shape: ButtonShape
  plain: boolean
  loading: boolean
  disabled: boolean
  style: object
  type: ButtonType
  size: ButtonSize
  block: boolean
  icon: string
  children: any
  onClick: (e: MouseEvent) => void
}

export type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
export type ButtonSize = 'large' | 'normal' | 'small'
export type ButtonShape = 'square' | 'round'
const defaultProps = {
  className: '',
  color: '',
  shape: 'round',
  plain: false,
  loading: false,
  disabled: false,
  type: 'default',
  size: 'normal',
  block: false,
  icon: '',
  style: {},
  children: undefined,
  onClick: (e: MouseEvent) => {},
} as ButtonProps
export const Button: FunctionComponent<Partial<ButtonProps>> = (props) => {
  const {
    color,
    shape,
    plain,
    loading,
    disabled,
    type,
    size,
    block,
    icon,
    children,
    onClick,
    className,
    style,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [btnName, setBtnName] = useState('')
  const [btnStyle, setBtnStyle] = useState({})
  useEffect(() => {
    setBtnName(classes())
    setBtnStyle(getStyle())
  }, [
    className,
    color,
    shape,
    plain,
    loading,
    disabled,
    style,
    type,
    size,
    block,
    icon,
    children,
    onClick,
  ])
  const classes = () => {
    const prefixCls = 'nut-button'
    return `${prefixCls} ${type ? `${prefixCls}--${type}` : ''}
    ${size ? `${prefixCls}--${size}` : ''}
    ${shape ? `${prefixCls}--${shape}` : ''}
    ${plain ? `${prefixCls}--plain` : ''}
    ${block ? `${prefixCls}--block` : ''}
    ${disabled ? `${prefixCls}--disabled` : ''}
    ${loading ? `${prefixCls}--loading` : ''}`
  }
  const handleClick = (e: any) => {
    if (!loading && !disabled && onClick) {
      onClick(e)
    }
  }
  const getStyle = () => {
    const style: CSSProperties = {}
    if (color) {
      if (plain) {
        style.color = color
        style.background = '#fff'
        if (!color?.includes('gradient')) {
          style.borderColor = color
        }
      } else {
        style.color = '#fff'
        style.background = color
      }
    }
    return style
  }
  return (
    <div
      className={`${btnName} ${className}`}
      style={{ ...btnStyle, ...style }}
      {...rest}
      onClick={(e) => handleClick(e)}
    >
      <div className="nut-button__warp" style={getStyle()}>
        {loading && <Icon name="loading"></Icon>}
        {!loading && icon ? <Icon name={icon}></Icon> : ''}
        {children}
      </div>
    </div>
  )
}

Button.defaultProps = defaultProps
Button.displayName = 'NutButton'
