import { useSocket } from '@/redux/Provider';
import { disablePopup } from '@/redux/slices/miscSlice';
import { GlobalState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/services/hooks';
import { Colors } from '@/utils/colors';
import { Add } from 'iconsax-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import toast, { LoaderIcon } from 'react-hot-toast';

const NewRoomPopup = () => {
	const dispatch = useAppDispatch();
	const { data: session } = useSession();
	const [roomName, setRoomName] = useState('');
	const isPopupShown = useAppSelector(
		(state: GlobalState) => state.misc.isPopupShown,
	);
	const socket = useSocket();
	const [isLoading, setLoading] = useState(false);
	const createAndJoinRoom = () => {

		if (!roomName) return;
		setLoading(true);
		socket.emit('create_room', roomName, session?.user?.name);
	};
	return (
		<div
			style={{ backgroundColor: '#ffffff26' }}
			className={`h-screen animate-in w-screen flex items-center justify-center absolute ${
				!isPopupShown ? 'hidden' : ''
			} `}
		>
			<div style={{ width: 500 }} className="bg-black p-5 rounded-xl shadow-lg">
				<button
					onClick={() => {
						dispatch(disablePopup());
						setRoomName('');
					}}
					className="flex flex-row ml-auto rotate-45 mb-3 items-center justify-end"
				>
					<Add color="white" size={30} />
				</button>
				<div>
					<div className="flex flex-row items-center justify-between">
						<div className="my-2 align-bottom">
							<h1 className="text-3xl font-bold text-white">create now</h1>
							<p className="text-white">Enter your details to get started...</p>
						</div>
						<Image
							src={require('@/public/dd1.png')}
							className="opacity-20"
							alt="doodle"
							width={150}
							height={150}
						/>
					</div>
					<input
						className="p-2 border-2 tracking-widest bg-black text-white focus-visible:outline-none rounded-lg mt-3 border-zinc-400 w-full"
						placeholder="Enter a room name"
						value={roomName}
						maxLength={12}
						onChange={(e) => setRoomName(e.target.value)}
					/>

					<div className="flex flex-row items-center mt-3 justify-between my-auto">
						<button
							onClick={() => {
								if (!roomName) {
									return;
								}
								navigator.clipboard
									.writeText(roomName)
									.then(() => [toast.success('Copied to Clipboard')]);
							}}
							style={{ backgroundColor: Colors.primary }}
							className="text-white p-3 hover:scale-105 transition rounded-lg w-2/5"
						>
              Copy Invite
						</button>
						<button
							onClick={createAndJoinRoom}
							style={{
								borderColor: Colors.primary,
								color: Colors.primary,
							}}
							className=" p-3 border-2 text-center hover:scale-105 transition rounded-lg w-2/5"
						>
							{isLoading ? <LoaderIcon className="mx-auto" /> : 'Create & Join'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewRoomPopup;
