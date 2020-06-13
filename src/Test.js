/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-11 20:47:33
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-12 20:56:30
 */
import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Dashboard = () => <h2>Dashboard</h2>
const News = (props) => {
  console.log(props)
  return <div>
    <div>
      <ul>
        <li> <Link to="/news/international">国际新闻</Link> </li>
        <li>  <Link to="/news/military-news">军事新闻</Link>  </li>
      </ul>
    </div>
    <div>
      {
        props.routers.map((item, index) => {
          const {
            path,
            component: Component,
            ...rest
          } = item
          return <Route path={path} render={(props) => {
            return <Component {...rest} />
          }} {...rest} />
        })
      }
    </div>
  </div>
}
const Games = () => <h2>Games</h2>


const InternationalNews = () => <h2>News -> 国际新闻</h2>
const MilitaryNews = () => <h2>News -> 军事新闻</h2>

const routerConfig = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/news',
    component: News,
    routers: [
      {
        path: '/news/international',
        component: InternationalNews
      },
      {
        path: '/news/military-news',
        component: MilitaryNews
      }
    ]
  },
  {
    path: '/games',
    component: Games
  },
]

const TestApp = (props) => {
  console.log('渲染')
  console.log(props)
  var isLogin = false
  return (
    <BrowserRouter>
      <>
        <div>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li>  <Link to="/about">About</Link>  </li>
            <li>  <Link to="/dashboard">Dashboard</Link> </li>
            <li>  <Link to="/news">News</Link> </li>
            <li>  <Link to="/games">Games</Link> </li>
          </ul>
          <hr />
          <Switch>
            {
              routerConfig.map((item, index) => {
                const {
                  path,
                  component: Component,
                  ...rest
                } = item
                return <Route
                  path={path}
                  render={(props) => {
                    return <Component {...props} {...rest} />
                  }}
                  {...rest}
                />
              })
            }
            {/* <Route exact path="/"> <Home /></Route>
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/news" component={News} />
          <Route path="/games" component={Games} /> */}
            {/* <Route path="/dashboard" children={<Dashboard />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/games" component={() => <Games />} /> */}
          </Switch>
        </div>
      </>
    </BrowserRouter>
  )
}

export default TestApp