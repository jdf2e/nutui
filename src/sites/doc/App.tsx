import React, { FunctionComponent } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import './App.scss'

import routes from './router'

const Dynamic: FunctionComponent<any> = ({ code, ...rest }: any) => {
  return <div dangerouslySetInnerHTML={{ __html: code }}></div>
}
const App = () => {
  return (
    <div id="nav">
      <div className="back"></div>
      <HashRouter>
        <Switch>
          {routes.map((item: any, index: number) => {
            return (
              <Route
                key={index}
                path={item.path}
                component={(props: any) => <Dynamic code={item.component.html} {...props} />}
              />
            )
          })}
        </Switch>
      </HashRouter>
    </div>
  )
}
export default App
