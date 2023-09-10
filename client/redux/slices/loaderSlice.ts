import { createSlice } from '@reduxjs/toolkit';

export interface loaderSliceProps {
    isLoading: boolean
}

const initialState: loaderSliceProps = {
    isLoading: false
}
const loaderSlice = createSlice({
    name: "loader",
    initialState: initialState,
    reducers: {
        enableLoader: (state) => {
            state.isLoading = true;
        },
        disableLoader: (state) => {
            state.isLoading = false;
        }
    }
})

export const { enableLoader, disableLoader } = loaderSlice.actions

export default loaderSlice.reducer