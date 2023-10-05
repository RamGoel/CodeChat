import React, { useState } from 'react'

const Editor = () => {
    const [code, setCode] = useState('print("Hello")')

    return (
        <div className="flex w-full items-center justify-center">
            <textarea
                contentEditable={true}
                onChange={(e) => setCode(e.target.value)}
                value={code}
                style={{ height: 300, overflowY: 'scroll' }}
                className="
          w-11/12
          mx-auto
          bg-slate-900
          h-40
          text-white
          focus-visible:border-none outline-none
          rounded-lg
          resize-none
          p-2
          font-mono
          "
            ></textarea>
        </div>
    )
}

export default Editor
