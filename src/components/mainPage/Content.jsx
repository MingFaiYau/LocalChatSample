import React from 'react'
import InputBar from './InputBar'
import MessageList from './MessageList'

const Content = ({ messages, addMessage, userName }) => {
  return (
    <div className="content-container">
      <MessageList messages={messages} />
      <InputBar addMessage={addMessage} userName={userName} />
    </div>
  )
}

export default Content
