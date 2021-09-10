import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./Chat/chatSlice";
import profileReducer from './Profile/profileSlice';
import thunkMiddleware from 'redux-thunk';

export default configureStore({
  reducer: {
    chat: chatReducer,
    profile: profileReducer,
  },
  middleware: [thunkMiddleware]
});
