import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  createChatRoom,
  selectMyMessages
} from '../../redux/slices/chatRoomSlice'
import { selectCurrentUser } from '../../redux/slices/userSlice'
import InputBar from './InputBar'
import MessageList from './MessageList'

const Content = ({ userName }) => {
  const [init, setInit] = React.useState(false)
  const dispatch = useAppDispatch()
  const myMessages = useAppSelector(selectMyMessages)
  const currentUser = useAppSelector(selectCurrentUser)

  React.useEffect(() => {
    if (init) return
    setTimeout(() => {
      if (myMessages?.length > 0) {
        setInit(true)
      } else {
        dispatch(createChatRoom(currentUser.id))
      }
    }, 1000 * 2)
  }, [myMessages, currentUser, dispatch, init])

  return (
    <div className="content-container">
      {!init && <h1 className="loading">Loading....</h1>}
      {init && (
        <>
          <MessageList messages={myMessages} />
          <InputBar />
        </>
      )}
    </div>
  )
}

export default Content
