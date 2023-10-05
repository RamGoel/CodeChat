'use client'

import React, { createContext, useContext, useMemo } from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import { io } from 'socket.io-client'

const SocketContext = createContext(null)

export const useSocket = () => {
    const socket = useContext(SocketContext)
    return socket
}

export default function Providers({ children }: { children: React.ReactNode }) {
    const socket = useMemo(() => io('localhost:8000'), [])
    return (
        <SocketContext.Provider value={socket}>
            <Provider store={store}>{children}</Provider>
        </SocketContext.Provider>
    )
}
