import React from 'react'
import LoginPage from './containers/LoginPage'
import MainPage from './containers/MainPage'
import useCacheState from './hooks/useCacheState'
import './styles.css'

export default function App() {
  const [userName, setUserName] = useCacheState('userName')

  const doLogout = () => {
    setUserName(null)
  }

  return (
    <div className="app-container">
      {!userName && <LoginPage setUserName={setUserName} />}
      {userName && <MainPage userName={userName} doLogout={doLogout} />}
    </div>
  )
}
