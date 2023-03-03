import React from 'react'
import { GlobalStyle } from './styles'
import WelcomePage from '../pages/WelcomePage'
import MainPage from '../pages/MainPage'

export default function App() {
  const [login, setLogin] = React.useState(false);
  const [select, setSelect] = React.useState("default");
  return (
    <>
      <GlobalStyle />
      <WelcomePage login={login} setLogin={setLogin} select={select} setSelect={setSelect}/>
      <MainPage login={login} select={select}/>
    </>
  )
}
