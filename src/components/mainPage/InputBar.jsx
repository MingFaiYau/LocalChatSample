import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { sendMessage } from '../../redux/slices/chatRoomSlice'
import { selectCurrentUser } from '../../redux/slices/userSlice'
import { v4 as uuidv4 } from 'uuid'

const InputBar = () => {
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector(selectCurrentUser)
  const [text, setText] = React.useState('')

  const doSendMessage = () => {
    if (!text) return
    const newMessage = {
      id: uuidv4(),
      text: text,
      user: currentUser,
      date: new Date().toISOString()
    }
    dispatch(sendMessage(newMessage))
    setText('')
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="input-bar-container">
      <input type="text" value={text} onChange={onChange} />
      <input type="button" value={'>'} onClick={doSendMessage} />
    </div>
  )
}

export default InputBar
