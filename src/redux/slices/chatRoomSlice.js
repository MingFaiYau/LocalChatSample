import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const BOT_USER = {
  id: uuidv4(),
  name: 'I AM BOT'
}

const botWelcomeMessage = {
  id: uuidv4(),
  text: 'Welcome, i am bot',
  user: BOT_USER
}

const initialState = {
  chatRooms: {}
}

export const chatRoomSlice = createSlice({
  name: 'chatRoom',
  initialState: initialState,
  reducers: {
    createChatRoom: (state, action) => {
      state.chatRooms[action.payload] = [
        { ...botWelcomeMessage, date: new Date().toISOString() }
      ]
    },
    sendMessage: {
      reducer: (state, action) => {
        console.log(
          'state.chatRooms[action.payload.userId]',
          state.chatRooms[action.payload.userId]
        )
        console.log('action.payload.messages', action.payload.messages)

        state.chatRooms[action.payload.userId].push(...action.payload.messages)
      },
      prepare: (newMessage) => {
        return {
          payload: {
            userId: newMessage.user.id,
            messages: [
              newMessage,
              { ...newMessage, id: uuidv4(), user: BOT_USER }
            ]
          }
        }
      }
    }
  }
})

export const { createChatRoom, sendMessage } = chatRoomSlice.actions

export const selectChatRooms = (state) => state.chatRoom.chatRooms
export const selectMyMessages = (state) =>
  state.chatRoom.chatRooms[state.user.currentUser.id] || []

export default chatRoomSlice.reducer
