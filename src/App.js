import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { ApolloProvider } from "@apollo/react-hooks"
import client from "./utils/client"

import departments from "./pages/departments"
import users from "./pages/users"

import login from "./pages/login"
import reset from "./pages/reset"
import verify from "./pages/verify"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('authorization')
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <PrivateRoute path="/departments" component={departments} />
          <PrivateRoute path="/users" component={users} />
          <Route path="/login" component={login} />
          <Route path="/reset" component={reset} />
          <Route path="/verify" component={verify} />
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App;
