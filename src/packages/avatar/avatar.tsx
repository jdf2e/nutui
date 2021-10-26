import React, { FunctionComponent, MouseEventHandler } from 'react'
import Icon from '@/packages/icon'
import classNames from 'classnames'
import './avatar.scss'

export interface AvatarProps {
  size: AvatarSize
  icon: string
  shape: AvatarShape
  bgColor: string
  prefixCls: string
  src: string
}

export type AvatarSize = 'large' | 'normal' | 'small'
export type AvatarShape = 'round' | 'square'
const defaultProps: AvatarProps = {
  size: 'normal',
  icon: '',
  shape: 'round',
  bgColor: '#eee',
  prefixCls: 'nut-avatar',
  src: '',
}
export const Avatar: FunctionComponent<
  Partial<AvatarProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, prefixCls, size, shape, bgColor, src, icon, className, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const sizeValue = ['large', 'normal', 'small']
  const classes = classNames({
    [`${prefixCls}`]: true,
    ['avatar-' + size]: true,
    ['avatar-' + shape]: true,
  })
  const cls = classNames(classes, className)
  const styles: React.CSSProperties = {
    width: sizeValue.indexOf(size) > -1 ? '' : `${size}px`,
    height: sizeValue.indexOf(size) > -1 ? '' : `${size}px`,
    backgroundImage: src ? `url(${src})` : '',
    backgroundColor: `${bgColor}`,
  }
  const iconStyles = !!icon && !src ? icon : ''
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (props.onClick) {
      props.onClick(e)
    }
  }
  return (
    <div className={cls} {...rest} style={styles} onClick={handleClick}>
      <Icon className="icon" name={iconStyles} />
      {children && <span className="text">{children}</span>}
    </div>
  )
}

Avatar.defaultProps = defaultProps
Avatar.displayName = 'NutAvatar'
