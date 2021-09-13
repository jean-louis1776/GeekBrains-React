import { createSlice } from "@reduxjs/toolkit";

export const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines?' +
    'q=Apple&' +
    'from=2021-09-12&' +
    'sortBy=popularity&' +
    'apiKey=5219c341c2c44bb09489732efcd312e0';

export const newsSlice = createSlice({
    name: "news",
    initialState: {
        loading: false,
        error: false,
        data: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;


        },
    },
});

export const { setLoading, setError, setData } = newsSlice.actions;

export default newsSlice.reducer;