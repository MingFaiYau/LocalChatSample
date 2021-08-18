import { combineReducers } from '@reduxjs/toolkit'
import chatRoomSlice from './chatRoomSlice'
import routerSlice from './routerSlice'
import userSlice from './userSlice'

const rootReducer = combineReducers({
  chatRoom: chatRoomSlice,
  user: userSlice,
  router: routerSlice
})

export { rootReducer }
