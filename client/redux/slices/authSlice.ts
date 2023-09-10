import { createSlice } from '@reduxjs/toolkit';

export interface authSliceProps {
    userName: string | null,
    roomName: string | null
}

const initialState: authSliceProps = {
    userName: null,
    roomName: null
}
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setDetails: (state, action) => {
            const { roomName, userName } = action.payload;
            state.roomName = roomName;
            state.userName = userName
        }
    }
})

export const { setDetails } = authSlice.actions

export default authSlice.reducer