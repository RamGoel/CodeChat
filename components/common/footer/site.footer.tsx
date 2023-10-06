import React from 'react';
import Image from 'next/image';
import { Colors } from '@/utils/colors';
const SiteFooter = () => {
	const totalUser = 120;
	return (
		<div>
			<Image
				src={require('@/public/doodle.png')}
				alt="doodle image"
				className="w-full"
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					height: 150,
					zIndex: -1,
					width: '100vw',
					objectFit: 'cover',
					maskRepeat: 'repeat-x',
				}}
			/>
			<div className="mt-4 w-11/12 flex flex-row items-center justify-between">
				<p className="text-white text-lg">
          Trused and used by{' '}
					<span style={{ color: Colors.primary }}>{totalUser}+</span> users.
				</p>


				<p className="text-white text-lg">Built with ♡ in India</p>
			</div>
		</div>
	);
};

export default SiteFooter;
