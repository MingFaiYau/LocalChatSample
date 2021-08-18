import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { logout, selectCurrentUser } from '../../redux/slices/userSlice'

const Header = () => {
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector(selectCurrentUser)
  const doLogout = () => {
    dispatch(logout())
  }
  return (
    <div className="header-container ">
      <div>{`Hi, ${currentUser.name}`}</div>
      <input type="button" value={'E'} onClick={doLogout} />
    </div>
  )
}

export default Header
