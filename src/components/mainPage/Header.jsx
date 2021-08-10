import React from 'react'

const Header = ({ userName, doLogout }) => {
  return (
    <div className="header-container ">
      <div>{`Hi, ${userName}`}</div>
      <input type="button" value={'E'} onClick={doLogout} />
    </div>
  )
}

export default Header
