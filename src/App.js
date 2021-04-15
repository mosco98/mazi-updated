import React from 'react'
import { Route } from 'react-router'

import { Home, Login, Product, Register, Story } from './pages'

const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/inspiration" component={Story} />
    </>
  )
}

export default App
