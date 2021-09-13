import { NEWS_API_URL, setLoading, setError, setData } from "./newsSlice";

export const getNews = () => async (dispatch, getState) => {
    const { loading } = getState().news;
    if (!loading) {
        try {
            dispatch(setError(false));
            dispatch(setLoading(true));
            const response = await fetch(NEWS_API_URL);
            if (!response.ok) {
                throw new Error('Something was wrong!');
            }
            const result = await response.json();

            dispatch(setData(result));
        } catch (e) {
            dispatch(setError(true));
        } finally {
            dispatch(setLoading(false));
        }
    }
};