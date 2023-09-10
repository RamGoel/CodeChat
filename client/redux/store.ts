import { configureStore } from "@reduxjs/toolkit";
import authSlice, { authSliceProps } from "./slices/authSlice";
import loaderSlice, { loaderSliceProps } from "./slices/loaderSlice";
import chatSlice, { chatSliceProps } from "./slices/chat.slice";

export interface GlobalState {
    auth: authSliceProps,
    loader: loaderSliceProps,
    chat: chatSliceProps
}
export const store = configureStore({
    reducer: {
        auth: authSlice,
        loader: loaderSlice,
        chat: chatSlice
    }
})