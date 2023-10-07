'use client';
import React from 'react';
import Main from '@/components/editor/main.component';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';

const Playground = () => {
	const router=useRouter();
	const { data: session } = useSession();

	if(!session?.user){
		router?.push('/');
	}

	return (
		<div className="w-11/12 mx-auto">
			<Main />
		</div>
	);
};

export default Playground;
