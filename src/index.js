import './assets/scss/main.css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch } from 'react-router-dom'

import App from './App'
import { AppContextProvider } from './utils/contexts/AppContext'
import { CartContextProvider } from './utils/contexts/CartContext'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <AppContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AppContextProvider>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
