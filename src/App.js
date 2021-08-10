import React from 'react'
import AskNamePage from './containers/AskNamePage'
import MainPage from './containers/MainPage'
import './styles.css'

export default function App() {
  const [userName, setUserName] = React.useState('')

  return (
    <div className="app-container">
      {!userName && <AskNamePage setUserName={setUserName} />}
      {userName && <MainPage userName={userName} />}
    </div>
  )
}
