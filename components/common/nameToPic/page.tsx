import { Colors } from '@/utils/colors';
import React from 'react';

const NameToPic = ({
	name,
	onClick,
	extraTWClass,
}: {

  name: string;
  onClick?: any;
  extraTWClass: string;
}) => {
	const splittedName = name?.split(' ');
	return (
		<div
			onClick={() => onClick()}
			className="rounded-full shadow-md flex flex-row items-center justify-center ml-2 cursor-pointer"
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: Colors.primary,
			}}
		>
			<p className={`font-bold text-white ${extraTWClass}`}>
				{splittedName[0][0]}
				{splittedName.length > 1 ? splittedName[1][0] : null}
			</p>
		</div>
	);
};

export default NameToPic;
