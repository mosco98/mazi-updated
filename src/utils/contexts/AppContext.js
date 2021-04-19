import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

export function useApp() {
  return useContext(AppContext)
}

export function AppContextProvider({ children }) {
  const [showSideDrawer, updateShowSideDrawer] = useState(false)

  function sideDrawerHandler() {
    updateShowSideDrawer(!showSideDrawer)
  }

  const value = { showSideDrawer, sideDrawerHandler }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
