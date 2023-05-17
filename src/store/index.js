import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { chatReducer } from './reducers/chatReducer.js'

const rootReducer = combineReducers({
  chats: chatReducer.reducer
})

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true
  })
