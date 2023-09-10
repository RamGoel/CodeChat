import { createSlice } from '@reduxjs/toolkit';

export interface chatSliceProps {
    messages: Array<Object>,
    activeChat: Object
}

const initialState: chatSliceProps = {
    messages: null,
    activeChat: null
}
const chatSlice = createSlice({
    name: "chat",
    initialState: initialState,
    reducers: {
        changeActiveChat: (state, action) => {
            state.activeChat = action.payload;
        },
        setMessages: (state, action) => {
            state.messages = action.payload;
        }
    }
})

export const { changeActiveChat, setMessages } = chatSlice.actions

export default chatSlice.reducer