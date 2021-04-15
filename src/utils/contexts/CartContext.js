import React, { useContext } from 'react'

const CartContext = React.createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartContextProvider({ children }) {
  const value = {}
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
