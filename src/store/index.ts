import { configureStore } from '@reduxjs/toolkit'
import counter from './reducer/counter'
import user from './reducer/user'

const store = configureStore({
  reducer: {
    counter: counter,
    user: user,
  },
})

export type RooState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
