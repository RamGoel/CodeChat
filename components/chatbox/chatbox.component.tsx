import React, { useEffect } from 'react';
import Header from './header';
import ChatSection from './chatSection.component';
import Form from './form.component';
import { useSocket } from '@/redux/Provider';
import { useSelector } from 'react-redux';
import { type GlobalState } from '@/redux/store';
import { useAppDispatch } from '@/services/hooks';
import { setMessages } from '@/redux/slices/chat.slice';

const Chatbox = ({ isEnabled }: { isEnabled: boolean }): React.JSX.Element => {
	const socket = useSocket();
	const messages = useSelector((state: GlobalState) => state.chat.messages);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (socket !== null) {
			socket.on("user_joined", (email: string) => {
				console.log(email, 'user joined');

				const oldMessages = [...messages];
				oldMessages.push({
					timestamp: new Date().toDateString(),
					text: `${email} joined the chat`,
					user: 'ADMIN',
				});
				dispatch(setMessages(oldMessages));
			});
			socket?.on('welcome_user', (email: string) => {
				const oldMessages = [...messages];
				oldMessages.push({
					timestamp: new Date().toDateString(),
					text: `Welcome ${email} to the chat`,
					user: 'ADMIN',
				});

				dispatch(setMessages(oldMessages));
			});
		}
	}, [dispatch, messages, socket]);
	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				right: 0,
				translate: isEnabled ? 0 : 500,
				transition: '.5s',
			}}
			className="p-2 bg-white transition-all h-screen w-1/3"
		>
			<div>
				<div className=" w-full ">
					<Header />
					<ChatSection />
					<Form />
				</div>
			</div>
		</div>
	);
};

export default Chatbox;
