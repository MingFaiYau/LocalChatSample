import React from 'react'
import Content from '../components/mainPage/Content'
import Header from '../components/mainPage/Header'

const MainPage = ({ userName }) => {
  const [messages, setMessages] = React.useState([])
  const resetMessages = React.useCallback(() => {
    setMessages([])
  }, [])

  const addMessage = React.useCallback((newMessage) => {
    setMessages((prev) => prev.concat(newMessage))
  }, [])

  return (
    <>
      <Header resetMessages={resetMessages} />
      <Content
        messages={messages}
        addMessage={addMessage}
        userName={userName}
      />
    </>
  )
}

export default MainPage
