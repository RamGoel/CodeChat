import { createSlice } from '@reduxjs/toolkit';

export interface miscSliceProps {
    isLoading: boolean,
    isPopupShown: boolean
}

const initialState: miscSliceProps = {
    isLoading: false,
    isPopupShown: false
}
const miscSlice = createSlice({
    name: "misc",
    initialState: initialState,
    reducers: {
        enableLoader: (state) => {
            state.isLoading = true;
        },
        disableLoader: (state) => {
            state.isLoading = false;
        },
        enablePopup: (state) => {
            state.isPopupShown = true;
        },
        disablePopup: (state) => {
            state.isPopupShown = false;
        }
    }
})

export const { enableLoader, disableLoader, enablePopup, disablePopup } = miscSlice.actions

export default miscSlice.reducer