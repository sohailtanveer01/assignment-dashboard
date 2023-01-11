import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import Dashboard from './pages/Dashboard'

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))

function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/create-account" component={CreateAccount} /> */}
          {/* <Route path="/forgot-password" component={ForgotPassword} /> */}

          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />
          {/* <Route path="/" component={Dashboard} /> */}
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/app/dashboard" />
        </Switch>
      </Router>
    </>
  )
}

export default App
