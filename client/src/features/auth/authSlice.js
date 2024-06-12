import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from './authThunks'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
    token: localStorage.getItem('token')
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
     
      console.log('Token set:', action.payload)
    },
    logout: (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true
    })

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.token = action.payload
      localStorage.setItem('token', state.token)
    })

    builder.addCase(loginUser.rejected, (state, action) => {
      console.log('error', action.payload)
      state, (isLoading = true)
    })
  }
})

export const { setUser, setToken, logout } = authSlice.actions

export default authSlice.reducer
