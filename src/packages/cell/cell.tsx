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
  classPrefix: string
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
  classPrefix: 'nutui-cell',
  extra: '',
  click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
} as CellProps
export const Cell: FunctionComponent<Partial<CellProps>> = (props) => {
  const {
    children,
    click,
    isLink,
    to,
    url,
    replace,
    classPrefix,
    descTextAlign,
    desc,
    icon,
    title,
    subTitle,
    extra,
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

  const styles = {
    textAlign: descTextAlign,
  }
  return (
    <div
      className={`${b({ clickable: isLink || to ? true : false }, [classPrefix])} `}
      onClick={(event) => handleClick(event)}
    >
      {children ? (
        children
      ) : (
        <>
          {title || subTitle || icon ? (
            <>
              {icon ? (
                <div className={`${b('icon')}`}>
                  <Icon name={icon} />
                </div>
              ) : null}
              <div className={`${b('title', { icon: icon ? true : false })}`}>
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
            <div className={b('desc')} style={styles as CSSProperties}>
              {desc}
            </div>
          ) : null}
        </>
      )}
      {extra ? extra : null}
      {!extra && (isLink || to) ? (
        <div className={b('link')}>
          <Icon name="right"></Icon>
        </div>
      ) : null}
    </div>
  )
}

Cell.defaultProps = defaultProps
Cell.displayName = 'NutCell'
