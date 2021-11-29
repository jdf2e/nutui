import React, {
  CSSProperties,
  FunctionComponent,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react'
import './tag.scss'
import classNames from 'classnames'
import Icon from '@/packages/icon'
export interface TagProps {
  type: TagType
  color: string
  textColor: string
  plain: boolean
  round: boolean
  mark: boolean
  closeable: boolean
  isShow: boolean
  prefixCls: string
  onClick: (e: MouseEvent) => void
}

export type TagType = 'default' | 'primary' | 'success' | 'warning' | 'danger'
const defaultProps = {
  type: 'default',
  color: '',
  textColor: '',
  plain: false,
  round: false,
  mark: false,
  closeable: false,
  isShow: true,
  prefixCls: 'nut-tag',
  onClick: (e: MouseEvent) => {},
} as TagProps
export const Tag: FunctionComponent<Partial<TagProps>> = (props) => {
  const {
    color,
    plain,
    type,
    round,
    prefixCls,
    children,
    mark,
    closeable,
    textColor,
    isShow,
    onClick,
  } = {
    ...defaultProps,
    ...props,
  }
  const [btnName, setBtnName] = useState('')
  useEffect(() => {
    setBtnName(classes())
  }, [type, color, textColor, plain, round, mark, closeable, prefixCls, isShow, onClick])
  const classes = () => {
    const prefixCls = 'nut-tag'
    return `${prefixCls}
    ${type ? `${prefixCls}--${type}` : ''}
    ${plain ? `${prefixCls}--plain` : ''}
    ${round ? `${prefixCls}--round` : ''}
    ${mark ? `${prefixCls}--mark` : ''}
    ${closeable ? `${prefixCls}--close` : ''}`
  }
  const handleClick = (e: any) => {
    if (props.onClick) {
      props.onClick(e)
    }
  }
  const getStyle = () => {
    const style: CSSProperties = {}
    if (textColor) {
      style.color = textColor
      if (plain) {
        style.background = '#fff'
      } else {
        if (color) {
          style.background = color
        }
      }
    } else {
      if (color) {
        style.color = '#fff'
        style.background = color
      }
    }
    return style
  }
  return (
    <div>
      {closeable ? (
        isShow ? (
          <div className={`${btnName}`} style={getStyle()} onClick={(e) => handleClick(e)}>
            {children && <span className="text">{children}</span>}
            {closeable && (
              <Icon className="_icon" name="close" size="12" onClick={(e) => handleClick(e)}></Icon>
            )}
          </div>
        ) : (
          ''
        )
      ) : (
        <div className={`${btnName}`} style={getStyle()} onClick={(e) => handleClick(e)}>
          {children && <span className="text">{children}</span>}
        </div>
      )}
    </div>
  )
}

Tag.defaultProps = defaultProps
Tag.displayName = 'NutTag'
