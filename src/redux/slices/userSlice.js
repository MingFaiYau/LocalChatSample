import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userList: [],
  currentUser: null
}

export const counterSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    register: (state, action) => {
      state.userList.push(action.payload)
    },
    login: (state, action) => {
      state.currentUser = action.payload
    },
    logout: (state, action) => {
      state.currentUser = null
    }
  }
})

// Action creators are generated for each case reducer function
export const { register, login, logout } = counterSlice.actions

export const selectUserList = (state) => state.user?.userList
export const selectCurrentUser = (state) => state.user.currentUser

export default counterSlice.reducer
