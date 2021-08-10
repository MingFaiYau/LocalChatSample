import React from 'react'
import InputBar from './InputBar'
import MessageList from './MessageList'

const Content = ({ userName }) => {
  const [messages, setMessages] = React.useState([])

  const addMessage = React.useCallback((newMessage) => {
    setMessages((prev) => prev.concat(newMessage))
  }, [])

  return (
    <div className="content-container">
      <MessageList messages={messages} />
      <InputBar addMessage={addMessage} userName={userName} />
    </div>
  )
}

export default Content
