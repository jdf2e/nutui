import React, { FunctionComponent } from 'react'
import Icon from '../icon'
import bem from '@/utils/bem'
import './navbar.scss'

export interface NavBarProps {
  title: string
  desc: string
  leftShow: boolean
  icon: string
  titIcon: string
  onClickTitle: (e: MouseEvent) => void
  onClickIcon: (e: MouseEvent) => void
  onClickBack: (e: MouseEvent) => void
  onClickClear: (e: MouseEvent) => void
}
const defaultProps = {
  title: '',
  desc: '',
  leftShow: false,
  icon: '',
  titIcon: '',
} as NavBarProps
export const NavBar: FunctionComponent<Partial<NavBarProps>> = (props) => {
  const {
    desc,
    icon,
    title,
    titIcon,
    leftShow,
    onClickTitle,
    onClickIcon,
    onClickBack,
    onClickClear,
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('navbar')
  return (
    <div className="nut-navbar">
      {leftShow && (
        <i
          className={['nut-icon', 'nutui-iconfont', `${b('back')}`].join(' ')}
          onClick={(e) => onClickBack(e)}
        ></i>
      )}
      <div className={`${b('title')}`} onClick={(e) => onClickTitle(e)}>
        {title}
        {titIcon && <Icon name={titIcon} />}
      </div>
      <div className={`${b('desc')}`} onClick={(e) => onClickClear(e)}>
        {desc}
      </div>
      {icon && (
        <div className={`${b('icon')}`} onClick={(e) => onClickIcon(e)}>
          <Icon name={icon} />
        </div>
      )}
    </div>
  )
}

NavBar.defaultProps = defaultProps
NavBar.displayName = 'NutNavBar'
