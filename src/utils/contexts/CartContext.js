import React, { useContext, useEffect, useState } from 'react'

const CartContext = React.createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    GetFromLocalStorage()
  }, [])

  function GetFromLocalStorage() {
    const localCartItems = JSON.parse(localStorage.getItem('cartItems'))
    if (localCartItems) {
      setCartItems(localCartItems)
    } else {
      setCartItems([])
    }
  }

  function SaveToLocalStorage(array) {
    localStorage.setItem('cartItems', JSON.stringify(array))
  }

  function AddItemToCartHandler(product, collectionId, size) {
    const newArray = [...cartItems, { collectionId, ...product, qty: 1, size }]
    SaveToLocalStorage(newArray)
    setCartItems(newArray)
  }

  function IncrementCartItemHandler(product) {
    const exists = cartItems.find((cartItem) => cartItem.id === product.id)
    const newArray = cartItems.map((cartItem) =>
      cartItem.id === product.id ? { ...exists, qty: exists.qty + 1 } : cartItem
    )
    SaveToLocalStorage(newArray)
    return setCartItems(newArray)
  }

  function RemoveFromCartHandler(product) {
    const newArray = cartItems.filter((cartItem) => cartItem.id !== product.id)
    setCartItems(newArray)
    SaveToLocalStorage(newArray)
  }

  function ReduceCartItemHandler(product) {
    const exists = cartItems.find((cartItem) => cartItem.id === product.id)
    if (exists.qty === 1) return
    const newArray = cartItems.map((cartItem) =>
      cartItem.id === product.id ? { ...exists, qty: exists.qty - 1 } : cartItem
    )
    setCartItems(newArray)
    SaveToLocalStorage(newArray)
  }

  const value = {
    cartItems,
    AddItemToCartHandler,
    IncrementCartItemHandler,
    RemoveFromCartHandler,
    ReduceCartItemHandler
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
