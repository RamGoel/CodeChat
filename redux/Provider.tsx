'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { io, Socket } from 'socket.io-client';

const SocketContext = createContext(null);
interface ServerToClientEvents {
	noArg: () => void;
	basicEmit: (a: number, b: string, c: Buffer) => void;
	withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
	hello: () => void;
}



export const useSocket = () => {
	const socket :Socket<ServerToClientEvents, ClientToServerEvents> = useContext(SocketContext);
	return socket;
};

export default function Providers({ children }: { children: React.ReactNode }) {
	const socket = useMemo(() => io('localhost:8000'), []);
	return (
		<SocketContext.Provider value={socket}>
			<Provider store={store}>{children}</Provider>
		</SocketContext.Provider>
	);
}
