import { configureStore } from '@reduxjs/toolkit'
import authSlice, { authSliceProps } from './slices/authSlice'
import miscSlice, { miscSliceProps } from './slices/miscSlice'
import chatSlice, { chatSliceProps } from './slices/chat.slice'
import codeSlice, { codeSliceProps } from './slices/code.slice'

export interface GlobalState {
    auth: authSliceProps
    misc: miscSliceProps
    chat: chatSliceProps
    code: codeSliceProps
}
export const store = configureStore({
    reducer: {
        auth: authSlice,
        misc: miscSlice,
        chat: chatSlice,
        code: codeSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
