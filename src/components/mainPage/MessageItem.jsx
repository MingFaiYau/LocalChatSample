import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { selectCurrentUser } from '../../redux/slices/userSlice'
import MessageAuthor from './MessageAuthor'
import MessageContent from './MessageContent'
import MessageDate from './MessageDate'

const MessageItem = ({ message }) => {
  const currentUser = useAppSelector(selectCurrentUser)

  const isMine = currentUser.id === message.user.id
  return (
    <div
      className={`message-item-container ${
        isMine ? 'right-message' : 'left-message'
      }`}
    >
      <MessageAuthor author={message.user.name} />
      <MessageContent text={message.text} />
      <MessageDate date={message.date} />
    </div>
  )
}
export default MessageItem
