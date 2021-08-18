import React from 'react'
import LoginPage from './containers/LoginPage'
import MainPage from './containers/MainPage'
import RegistrationPage from './containers/RegistrationPage'
import { useAppSelector } from './redux/hooks'
import { selectCurrentRouter } from './redux/slices/routerSlice'
import { selectCurrentUser } from './redux/slices/userSlice'
import './styles.css'

export default function App() {
  const currentRoute = useAppSelector(selectCurrentRouter)
  const currentUser = useAppSelector(selectCurrentUser)

  const showLogin = !currentUser && (!currentRoute || currentRoute === 'login')
  const showRegistration = !currentUser && currentRoute === 'registration'
  const showMain = currentUser || currentRoute === 'main'

  return (
    <div className="app-container">
      {showLogin && <LoginPage />}
      {showRegistration && <RegistrationPage />}
      {showMain && <MainPage />}
    </div>
  )
}
