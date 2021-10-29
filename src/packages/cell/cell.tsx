import React, { FunctionComponent, CSSProperties, ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import './cell.scss'
import bem from '@/utils/bem'
import { Icon } from '../icon/icon'

export interface CellProps {
  title: string
  subTitle: string
  desc: string
  descTextAlign: string
  isLink: boolean
  to: string
  replace: boolean
  url: string
  icon: string
  className: string
  extra: ReactNode
  click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
const defaultProps = {
  title: '',
  subTitle: '',
  desc: '',
  descTextAlign: 'right',
  isLink: false,
  to: '',
  replace: false,
  url: '',
  icon: '',
  className: '',
  extra: '',
  click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
} as CellProps
export const Cell: FunctionComponent<Partial<CellProps> & React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const {
    children,
    click,
    isLink,
    to,
    url,
    replace,
    className,
    descTextAlign,
    desc,
    icon,
    title,
    subTitle,
    extra,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('cell')
  let history = useHistory()
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    click(event)
    if (to && history) {
      history[replace ? 'replace' : 'push'](to)
    } else if (url) {
      replace ? location.replace(url) : (location.href = url)
    }
  }

  const styles =
    title || subTitle || icon
      ? {}
      : {
          textAlign: descTextAlign,
          flex: 1,
        }
  return (
    <div
      className={`${b({ clickable: isLink || to ? true : false }, [className])} `}
      onClick={(event) => handleClick(event)}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <>
          {title || subTitle || icon ? (
            <>
              <div className={`${b('title', { icon: icon ? true : false })}`}>
                {icon ? <Icon name={icon} className={`${b('icon')}`} /> : null}
                {subTitle ? (
                  <>
                    <div className={b('maintitle')}>{title}</div>
                    <div className={b('subtitle')}>{subTitle}</div>
                  </>
                ) : (
                  <>{title}</>
                )}
              </div>
            </>
          ) : null}
          {desc ? (
            <div className={b('desc')} style={styles as React.CSSProperties}>
              {desc}
            </div>
          ) : null}
        </>
      )}
      {extra ? extra : null}
      {!extra && (isLink || to) ? <Icon name="right" className={b('link')}></Icon> : null}
    </div>
  )
}

Cell.defaultProps = defaultProps
Cell.displayName = 'NutCell'
