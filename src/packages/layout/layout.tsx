import React, { FunctionComponent } from 'react'
import './layout.scss'

export interface LayoutProps {}
const defaultProps = {} as LayoutProps
export const Layout: FunctionComponent<
  Partial<LayoutProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children } = { ...defaultProps, ...props }
  return <div className="nut-layout">Layout</div>
}

Layout.defaultProps = defaultProps
Layout.displayName = 'NutLayout'
