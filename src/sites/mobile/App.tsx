import './App.scss'
import React, { FunctionComponent, PropsWithChildren } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import loadable, { LoadableComponent } from '@loadable/component'
import routes from './router'

import Links from './Links'

const WithNavRouter = (C: LoadableComponent<any>) => {
  const WithNav: FunctionComponent = (props: PropsWithChildren<any>) => {
    return (
      <>
        <div id="nav">
          <div className="back"></div>
          {props.location.pathname.replace('/', '')}
        </div>
        <C />
      </>
    )
  }
  return WithNav
}

const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <div className="index-components">
              <Links />
            </div>
          </Route>
          {routes.map((item: any, index: number) => {
            const C = loadable(item.component)
            return <Route key={index} path={item.path} component={WithNavRouter(C)} />
          })}
        </Switch>
      </HashRouter>
    </>
  )
}
export default App
