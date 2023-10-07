import { GlobalState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';

const Output = () => {
	const output = useSelector((state: GlobalState) => state.code.output);

	return (
		<div className="flex w-full items-center justify-center">
			<textarea
				style={{ height: 500, overflowY: 'scroll' }}
				value={output}
				contentEditable={false}
				className="
          w-11/12
          mx-auto
          bg-neutral-950
          h-40
          text-white
          focus-visible:border-none outline-none
          rounded-lg
          resize-none
          p-5
          font-mono
          "
			></textarea>
		</div>
	);
};

export default Output;
