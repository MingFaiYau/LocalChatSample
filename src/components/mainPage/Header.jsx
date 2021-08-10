import React from 'react'

const Header = ({ resetMessages }) => {
  return (
    <div className="header-container ">
      <div>Header</div>
      <input type="button" value={'R'} onClick={resetMessages} />
    </div>
  )
}

export default Header
