"use client";
import { setMessages } from '@/redux/slices/chat.slice';
import { GlobalState } from '@/redux/store';
import { EmojiHappy, Send } from 'iconsax-react'
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
const Form = () => {
    const [message, setmessage] = useState('')
    const messages = useSelector((state: GlobalState) => state.chat.messages)
    const dispatch = useDispatch()
    const handleSubmit = () => {
        if (!message) {
            return;
        }
        const dt = new Date()
        dispatch(setMessages([...messages || [], {
            user: {
                name: "Shivam Gupta",
                id: 201
            },
            message: message,
            timestamp: dt.toTimeString()
        }]))
        console.log("hello")
        console.log(messages)
        setmessage('')
    }
    return (
        <div className=' p-3'>

            <div className='flex flex-row items-center px-3 justify-between border-violet-500 border-2 rounded-xl w-11/12 mx-auto'>
                <div className='w-1/8'>
                    <EmojiHappy size={25} />
                </div>
                <div className='p-2 w-11/12'>
                    <input
                        value={message}
                        onChange={e => {
                            setmessage(e.target.value)
                        }} className='focus-visible:border-0 outline-none' placeholder='Start typing a message...' />
                </div>
                <button className='w-1/8 bg-sky-300' disabled={message.length === 0} onClick={() => handleSubmit()}>
                    <Send size={25} />
                </button>
            </div>
        </div>
    )
}

export default Form