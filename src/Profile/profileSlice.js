import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        userName: [],
        userAge: [],
    },
    reducers: {
        yourName: (state, action) => {
            state.userName.push(action.payload);
        },
        yourAge: (state, action) => {
            state.userAge.push(action.payload);
        }
    }
});

export const { yourName, yourAge } = profileSlice.actions;

export default profileSlice.reducer;