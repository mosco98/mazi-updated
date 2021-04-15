import React from 'react'
import { Route } from 'react-router'

import { Home, Product, Signin, Signup, Story } from './pages'

const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/inspiration" component={Story} />
    </>
  )
}

export default App
