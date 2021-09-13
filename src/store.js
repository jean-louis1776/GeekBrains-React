import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./Chat/chatSlice";
import profileReducer from './Profile/profileSlice';
import catReducer from './Cats/catSlice';
import newsReducer from './News/newsSlice';
import thunkMiddleware from 'redux-thunk';

export default configureStore({
  reducer: {
    chat: chatReducer,
    profile: profileReducer,
    cats: catReducer,
    news: newsReducer
  },
  middleware: [thunkMiddleware]
});
