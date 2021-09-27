import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    isAuthenticated: false,
    myUid: '',
    messages: {},
    chats: {},
  },
  reducers: {
    addMessage: (state, action) => {
      const { chatId, messageText, authorId } = action.payload;

      state.messages = {
        ...state.messages,
        [chatId]: [
          ...state.messages[chatId],
          {
            timeStamp: moment().valueOf(),
            authorId,
            text: messageText,
          },
        ],
      };
    },

    setMessages: (state, action) => {
      const { chatId, messages } = action.payload;

      state.messages = {
        ...state.messages,
        [chatId]: messages,
      };
    },

    setChats: (state, action) => {
      state.chats = {
        ...state.chats,
        ...action.payload
      };
    },

    changeIsAuth: (state, action) => {
      state.isAuthenticated = action.payload;
    },

    setMyUid: (state, action) => {
      state.myUid = action.payload;
    }
  },
});

export const { addMessage, changeIsAuth, setMessages, setMyUid, setChats } = chatSlice.actions;

export default chatSlice.reducer;