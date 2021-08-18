import { createSlice } from '@reduxjs/toolkit'
import { login, logout, register } from './userSlice'

const initialState = {
  currentRoute: 'login'
}

export const routerSlice = createSlice({
  name: 'router',
  initialState: initialState,
  reducers: {
    switchRoute: (state, action) => {
      state.currentRoute = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register, (state) => {
        state.currentRoute = 'login'
      })
      .addCase(login, (state) => {
        state.currentRoute = 'main'
      })
      .addCase(logout, (state) => {
        state.currentRoute = 'login'
      })
  }
})

export const { switchRoute } = routerSlice.actions

export const selectCurrentRouter = (state) => state.router.currentRoute

export default routerSlice.reducer
