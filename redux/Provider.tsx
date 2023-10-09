'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { io, Socket } from 'socket.io-client';

const SocketContext = createContext(null);
interface ServerToClientEvents {
	"user_joined": any,
	"welcome_user": any,
	'chat message': any,
	'user joined': any,
	'user left': any,
	'code executed':any
}

interface ClientToServerEvents {
	"chat message": any,
	'join_room': any,
	'code exec': any,
	'create_room':any
}



export const useSocket = () => {
	//@ts-ignore
	const socket :Socket<ServerToClientEvents, ClientToServerEvents> = useContext(SocketContext);
	return socket;
};

export default function Providers({ children }: { children: React.ReactNode }) {
	// @ts-ignore
	const socket1 = useMemo(() => io(process.env.NEXT_PUBLIC_SERVER_URL), []);
	return (
		// @ts-ignore
		<SocketContext.Provider value={socket1}>
			<Provider store={store}>{children}</Provider>
		</SocketContext.Provider>
	);
}
