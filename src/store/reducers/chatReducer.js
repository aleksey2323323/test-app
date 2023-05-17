import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chats: [],
  selectedChat: null
}

export const chatReducer = createSlice({
  name: 'chatReducer',
  initialState,
  reducers: {
    addNewChat: (state, action) => {
      if (
        state.chats.filter(chat => chat === action.payload.phone).length === 0
      ) {
        state.chats.push(action.payload.phone)
      }
    },
    onSelectChat: (state, action) => {
      state.selectedChat = action.payload
    }
  }
})

export const { addNewChat, onSelectChat } = chatReducer.actions

export default chatReducer.reducer
