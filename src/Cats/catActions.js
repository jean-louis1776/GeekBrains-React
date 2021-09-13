import { CAT_API_URL, setLoading, setError, setData } from "./catSlice";

export const getCatPhoto = () => async (dispatch, getState) => {
    const { loading } = getState().cats;
    if (!loading) {
        try {
            dispatch(setError(false));
            dispatch(setLoading(true));
            const response = await fetch(CAT_API_URL);
            if (!response.ok) {
                throw new Error('Something was wrong!');
            }
            const result = await response.json();

            console.log(result);

            dispatch(setData(result));
        } catch (e) {
            dispatch(setError(true));
        } finally {
            dispatch(setLoading(false));
        }
    }
};