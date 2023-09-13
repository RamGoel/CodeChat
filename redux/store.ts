import { configureStore } from "@reduxjs/toolkit";
import authSlice, { authSliceProps } from "./slices/authSlice";
import loaderSlice, { loaderSliceProps } from "./slices/loaderSlice";
import chatSlice, { chatSliceProps } from "./slices/chat.slice";
import codeSlice, { codeSliceProps } from "./slices/code.slice";

export interface GlobalState {
    auth: authSliceProps,
    loader: loaderSliceProps,
    chat: chatSliceProps,
    code: codeSliceProps
}
export const store = configureStore({
    reducer: {
        auth: authSlice,
        loader: loaderSlice,
        chat: chatSlice,
        code: codeSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch