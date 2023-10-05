import { messageProps } from '@/components/chatbox/form.component'
import { createSlice } from '@reduxjs/toolkit'

export interface chatSliceProps {
    messages: Array<messageProps>
    activeChat: Object
}

const initialState: chatSliceProps = {
    messages: [],
    activeChat: {},
}
const chatSlice = createSlice({
    name: 'chat',
    initialState: initialState,
    reducers: {
        changeActiveChat: (state, action) => {
            state.activeChat = action.payload
        },
        setMessages: (state, action) => {
            state.messages = action.payload
        },
    },
})

export const { changeActiveChat, setMessages } = chatSlice.actions

export default chatSlice.reducer
