import { GlobalState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../loader/loader.component'

const ChatSection = () => {
    const { activeChat, messages } = useSelector((state: GlobalState) => state.chat)
    if ( messages === null) {
        return <p className='text-center'>No Chats available</p>
    }
    return (
        <div>
            <div style={{ maxHeight: '300px', overflowY:'scroll' }} className=' px-3 py-2'>
                {
                    messages.map((e) => {
                        return <div style={{width:'fit-content'}} className='
                            bg-violet-500
                            rounded-full
                            py-2
                            text-white
                            my-2
                            text-sm
                            px-4
                        '>{e.message}</div>
                    })
                }
            </div>
        </div>
    )
}

export default ChatSection