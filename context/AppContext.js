import { createContext, useState } from 'react'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  // @SIDE-NAV-BAR VISIBILITY

  const [sideNavVisible, setSideNavVisible] = useState(false)

  function handleSideNavVisibility(e) {
    if (
      sideNavVisible &&
      e.target === document.getElementById('side-nav-wrapper')
    ) {
      setSideNavVisible(false)
    } else {
      setSideNavVisible(true)
    }
  }

  // @THEMING
  const [darkTheme, setDarkTheme] = useState(false)

  const toogleDarkTheme = () => {
    setDarkTheme((p) => !p)
  }

  return (
    <AppContext.Provider
      value={{
        handleSideNavVisibility,
        sideNavVisible,
        darkTheme,
        toogleDarkTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
