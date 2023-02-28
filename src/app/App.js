import React from 'react'
import { GlobalStyle } from './styles'
import WelcomePage from '../pages/WelcomePage'
import MainPage from '../pages/MainPage'

export default function App() {
  const [login, setLogin] = React.useState(false)

  return (
    <>
      <GlobalStyle />
      {!login ? <WelcomePage setLogin={setLogin}/> : <MainPage />}
    </>
  )
}
