import React from 'react'
import { ThemeContext, Theme } from './context/Context'
import useStoreCart from './hooks/useStoreCartLocalStorage'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Routes from './Routes'
import './App.css'
import { useSelector } from 'react-redux'

require('dotenv').config()
export default function App() {

  const [theme , setTheme] = React.useState(Theme.Blue)
  //hook to set local storage variable for cart 
  useStoreCart()
  const state = useSelector(state => state)
  console.log(state, 'check state from App')
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <>
        <Header />
       
        <main>
          <Routes />
        </main>
        <Footer />
      </>
    </ThemeContext.Provider>
  )
}
