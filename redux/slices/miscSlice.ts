import { createSlice } from '@reduxjs/toolkit';

export interface miscSliceProps {
  isLoading: boolean;
  isPopupShown: boolean;
  activeTab: string;
}

const initialState: miscSliceProps = {
	isLoading: false,
	isPopupShown: false,
	activeTab: 'Code',
};
const miscSlice = createSlice({
	name: 'misc',
	initialState,
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
		},
		switchTab: (state, action) => {
			state.activeTab = action.payload;
		},
	},
});

export const {
	enableLoader,
	switchTab,
	disableLoader,
	enablePopup,
	disablePopup,
} = miscSlice.actions;

export default miscSlice.reducer;
