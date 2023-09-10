import { configureStore } from "@reduxjs/toolkit";
import authSlice, { authSliceProps } from "./slices/authSlice";
import loaderSlice, { loaderSliceProps } from "./slices/loaderSlice";

export interface GlobalState {
    auth: authSliceProps,
    loader: loaderSliceProps
}
export const store = configureStore({
    reducer: {
        auth: authSlice,
        loader: loaderSlice
    }
})