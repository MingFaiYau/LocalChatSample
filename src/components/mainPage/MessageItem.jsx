import React from 'react'
import MessageAuthor from './MessageAuthor'
import MessageContent from './MessageContent'
import MessageDate from './MessageDate'

const MessageItem = ({ message }) => {
  return (
    <div className="message-item-container">
      <MessageAuthor author={message.author} />
      <MessageContent text={message.text} />
      <MessageDate date={message.date} />
    </div>
  )
}
export default MessageItem
