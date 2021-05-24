import './App.scss'
import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import routes from './router'

const App = () => {
  return (
    <>
      <div id="nav">
        <div className="back"></div>
      </div>
      <HashRouter>
        <Switch>
          {routes.map((item: any, index: number) => {
            const C = loadable(item.component)
            return <Route key={index} path={item.path} component={C} />
          })}
        </Switch>
      </HashRouter>
    </>
  )
}
export default App
