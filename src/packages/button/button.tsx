import React, { CSSProperties, FunctionComponent } from 'react'
import './button.scss'
import Icon from '@/packages/icon'
export interface ButtonProps {
  color: string
  shape: string
  plain: boolean
  loading: boolean
  disabled: boolean
  type: string
  size: string
  block: boolean
  icon: string
}
export type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
export type ButtonSize = 'large' | 'normal' | 'small'
export type ButtonShape = 'square' | 'round'
const defaultProps = {} as ButtonProps
export const Button: FunctionComponent<Partial<ButtonProps>> = (props) => {
  const defaultProps: ButtonProps = {
    color: '',
    shape: 'round',
    plain: false,
    loading: false,
    disabled: false,
    type: 'default',
    size: 'normal',
    block: false,
    icon: '',
  }
  const { color, shape, plain, loading, disabled, type, size, block, icon, children } = {
    ...defaultProps,
    ...props,
  }
  const classes = () => {
    const prefixCls = console.log(prefixCls)
    return {
      [`${prefixCls}`]: true,
      [`${prefixCls}--${type}`]: type,
      [`${prefixCls}--${size}`]: size,
      [`${prefixCls}--${shape}`]: shape,
      [`${prefixCls}--plain`]: plain,
      [`${prefixCls}--block`]: block,
      [`${prefixCls}--disabled`]: disabled,
      [`${prefixCls}--loading`]: loading,
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
    <div style={classes()}>
      <div className="nut-button">
        <div className="nut-button__warp" style={getStyle()}>
          {icon && !loading && <Icon name="loading"></Icon>}
          <Icon name={'icon'}></Icon>
          {children}
          {/* <div className={ text icon || loading } v-if="$slots.default">
          <slot></slot>
        </div> */}
        </div>
      </div>
    </div>
  )
}

Button.defaultProps = defaultProps
Button.displayName = 'nut-button'
