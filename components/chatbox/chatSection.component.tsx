import { GlobalState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../common/loader/loader.component'
import { messageProps } from './form.component'
import { useSocket } from '@/redux/Provider'

const ChatSection = () => {
    const { activeChat, messages } = useSelector((state: GlobalState) => state.chat)
    if ( messages === null) {
        return <p className='text-center'>No Chats available</p>
    }
    const socket=useSocket()
    return (
        <div>
            <div style={{ maxHeight: '300px', overflowY:'scroll' }} className=' px-3 py-2'>
                {
                    messages.map((value:messageProps) => {
                        return <div style={{ width: 'fit-content' }} className={`
                            bg-violet-500
                            rounded-full
                            py-2
                            text-white
                            my-2
                            text-sm
                            px-4
                            ${value.user===socket.id?'ml-auto':'mr-auto'}
                        `}>{value.text}</div>
                    })
                }
            </div>
        </div>
    )
}

export default ChatSection