import React from 'react';
import Editor from '@monaco-editor/react';
const InputEditor = ({
	code,
	setCode,
	language,
}: {
  code: string;
  setCode: any;
  language: string;
}) => {
	return (
		<div
			style={{ height: 500, backgroundColor: '#1e1e1e' }}
			className="py-4 flex w-full items-center rounded-2xl overflow-hidden justify-center"
		>

			<Editor
				width={'100%'}
				language={language || 'javascript'}
				value={code}
				theme="vs-dark"
				defaultValue="// some comment"
				onChange={(code) => setCode(code)}
			/>
		</div>
	);
};

export default InputEditor;
