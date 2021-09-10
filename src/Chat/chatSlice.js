import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: {
      2: [
        {
          timeStamp: moment("1995-12-17T20:21:00").valueOf(),
          authorId: 2,
          text: "Привет, я Витя!",
        }
      ],
      3: [
        {
          timeStamp: moment("1995-12-17T18:24:00").valueOf(),
          authorId: 3,
          text: "Привет, я Ваня!",
        }
      ],
    },
    profiles: [
      {
        id: 2,
        name: "Виктор Дибров",
        avatar: "https://material-ui.com/static/images/avatar/1.jpg",
      },
      {
        id: 3,
        name: "Иван Кузнецов",
        avatar: "https://material-ui.com/static/images/avatar/2.jpg",
      },
    ],

    myId: 1,
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
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;