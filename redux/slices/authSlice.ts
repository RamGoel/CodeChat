import { createSlice } from '@reduxjs/toolkit'

export interface authSliceProps {
    userName: string | null
    roomName: string | null
    code: string | null
    output: string | null
    inviteLink: string | null
}

const initialState: authSliceProps = {
    userName: null,
    roomName: null,
    code: 'print("Hello")',
    output: 'Output comes here',
    inviteLink: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setDetails: (state, action) => {
            const { roomName, userName } = action.payload
            state.roomName = roomName
            state.userName = userName
        },
        setInviteLink: (state, action) => {
            state.inviteLink = action.payload
        },
    },
})

export const { setDetails, setInviteLink } = authSlice.actions

export default authSlice.reducer
