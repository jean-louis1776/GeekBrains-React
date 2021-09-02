import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messagesArray: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messagesArray.push(action.payload)
        }
    },
});

export const { addMessage } =
    chatSlice.actions;

export default chatSlice.reducer;
