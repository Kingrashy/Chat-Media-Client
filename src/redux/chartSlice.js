import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chat: [],
  chatPage: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChat: (state, action) => {
      state.chat = action.payload;
    },
    setChatPage: (state, action) => {
      state.chatPage = action.payload;
    },
  },
});

export default chatSlice.reducer;

export const { setChat, setChatPage } = chatSlice.actions;
