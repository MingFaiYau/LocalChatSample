import React from 'react'
import Content from '../components/mainPage/Content'
import Header from '../components/mainPage/Header'

const MainPage = ({ userName, doLogout }) => {
  return (
    <>
      <Header userName={userName} doLogout={doLogout} />
      <Content userName={userName} />
    </>
  )
}

export default MainPage
