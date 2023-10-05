import { createSlice } from '@reduxjs/toolkit'

export interface codeSliceProps {
    language: string | null
    code: string
    output: string
}

const initialState: codeSliceProps = {
    language: 'Python',
    code: 'print("hello")',
    output: 'hello',
}
const codeSlice = createSlice({
    name: 'code',
    initialState: initialState,
    reducers: {
        setCode: (state, action) => {
            state.code = action.payload
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        },
        setOutput: (state, action) => {
            state.output = action.payload
        },
    },
})

export const { setCode, setLanguage, setOutput } = codeSlice.actions

export default codeSlice.reducer
