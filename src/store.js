import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./Chat/chatSlice";
import profileReducer from './Profile/profileSlice';
import newsReducer from './News/newsSlice';
import thunkMiddleware from 'redux-thunk';

export default configureStore({
  reducer: {
    chat: chatReducer,
    profile: profileReducer,
    news: newsReducer
  },
  middleware: [thunkMiddleware]
});
