/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-11 20:47:33
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-17 13:45:05
 */
import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom"

const A = () => <h1>A Component</h1>
const B = () => <h1>B Component</h1>
const C = () => <h1>C Component</h1>
const D = () => <h1>D Component</h1>
const E = () => <h1>E Component</h1>
const F = () => <h1>F Component</h1>
const About = () => {
  const { path, url } = useRouteMatch()
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/d`}>D</Link>
        </li>
        <li>
          <Link to={`${url}/e`}>E</Link>
        </li>
        <li>
          <Link to={`${url}/f`}>F</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/d`} render={() => (<D />)} />
        <Route path={`${path}/e`} render={() => (<E />)} />
        <Route path={`${path}/f`} render={() => (<F />)} />
      </Switch>
    </div>
  )
}
const Dashboard = () => {
  const { path, url } = useRouteMatch()
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/a`}>A</Link>
        </li>
        <li>
          <Link to={`${url}/b`}>B</Link>
        </li>
        <li>
          <Link to={`${url}/c`}>C</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/a`} render={() => (<A />)} />
        <Route path={`${path}/b`} render={() => (<B />)} />
        <Route path={`${path}/c`} render={() => (<C />)} />
      </Switch>
    </div>
  )
}

const TestApp = () => {
  return (
    <BrowserRouter>
      <Route path="/about" render={() => (<About />)} />
      <Route path="/dashboard" render={() => (<Dashboard />)} />
    </BrowserRouter>
  )
}

export default TestApp