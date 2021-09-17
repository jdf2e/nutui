import React, { FunctionComponent, ReactHTML } from 'react'
import bem from '@/utils/bem'
import './icon.scss'

interface IconProps {
  name: string
  size: string | number
  classPrefix: string
  color: string
  tag: keyof ReactHTML
  click: (e: MouseEvent) => void
  className: string
}

const defaultProps: IconProps = {
  name: '',
  size: '',
  classPrefix: 'nutui-iconfont',
  color: '',
  tag: 'i',
  click: (e: MouseEvent) => {},
  className: '',
}

function pxCheck(value: string | number): string {
  return Number.isNaN(Number(value)) ? String(value) : `${value}px`
}

export const Icon: FunctionComponent<Partial<IconProps> & React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { name, size, classPrefix, color, tag, children, className, style, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const isImage = name ? name.indexOf('/') !== -1 : false
  const type = isImage ? 'img' : tag
  const b = bem('icon')

  const handleClick = (e: MouseEvent) => {
    if (props.click) {
      props.click(e)
    }
  }
  const hasSrc = () => {
    if (isImage) return { src: name }
    return {}
  }
  return React.createElement(
    type,
    {
      className: isImage
        ? `${className} ${b('img')}`
        : `${className} nut-icon-${name} ${b(null, [classPrefix])}`,
      style: {
        color,
        fontSize: pxCheck(size),
        width: pxCheck(size),
        height: pxCheck(size),
        ...style,
      },
      ...rest,
      onClick: handleClick,
      ...hasSrc(),
    },
    children
  )
}

Icon.defaultProps = defaultProps
Icon.displayName = 'NutIcon'
