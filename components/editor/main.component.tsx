import React, { useEffect, useMemo, useState } from 'react'
import Header from './header.editor'
import Editor from './editor.component'
import Output from './output.component'
import { useSocket } from '@/redux/Provider'
import { useAppDispatch } from '@/services/hooks'
import { setOutput } from '@/redux/slices/code.slice'

const Main = () => {
    const [code, setCode] = useState('print("Hello")')
    const [isCompiling, setCompiling] = useState(false)
    const socket = useSocket()
    const dispatch = useAppDispatch()
    const executeCode = (language: string) => {
        socket.emit('code exec', { code, language })
        setCompiling(true)
    }

    useEffect(() => {
        socket.on('code executed', (data) => {
            dispatch(setOutput(data))
            setCompiling(false)
        })
    }, [socket])
    return (
        <div
            className="rounded-lg bg-white py-2"
            style={{ height: 'fit-content', overflowY: 'scroll' }}
        >
            <Header isCompiling={isCompiling} execFn={executeCode} />
            <div className="flex flex-row">
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
                <Output />
            </div>
        </div>
    )
}

export default Main
