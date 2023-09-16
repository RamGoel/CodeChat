import { disablePopup } from '@/redux/slices/miscSlice'
import { GlobalState } from '@/redux/store'
import { useAppDispatch, useAppSelector } from '@/services/hooks'
import { Colors } from '@/utils/colors'
import { CloseCircle } from 'iconsax-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const NewRoomPopup = () => {
    const dispatch = useAppDispatch()
    const [roomName, setRoomName] = useState('')
    const isPopupShown = useAppSelector((state: GlobalState) => state.misc.isPopupShown)
    return (
        <div style={{ backgroundColor: '#00000066' }} className={`h-screen animate-in w-screen flex items-center justify-center absolute ${!isPopupShown ? 'hidden' : ''} `}>
            <div style={{ width: 500 }} className='bg-black border-2 p-5 rounded-xl shadow-lg'>
                <button onClick={() => {
                    dispatch(disablePopup())
                    setRoomName('')
                }} className='flex flex-row ml-auto mb-3 items-center justify-end'>
                    <CloseCircle color='white' />
                </button>
                <div>
                    <h1 className='text-3xl font-bold text-white'>Lessss Joinnn</h1>
                    <p className='text-white'>Enter your details to get started...</p>
                    <input
                        className='p-2 border-2 bg-black text-white focus-visible:outline-none rounded-lg mt-3 border-zinc-400 w-full'
                        placeholder='Enter a Room Name'
                        value={roomName}
                        onChange={e => setRoomName(e.target.value)}
                    />


                    <div className='flex flex-row items-center mt-3 justify-between my-auto'>
                        <button
                            onClick={() => {
                                if (!roomName) {
                                    return;
                                }
                                navigator.clipboard.writeText(roomName).then(() => [
                                    toast.success('Copied to Clipboard')
                                ])
                            }}
                            style={{ backgroundColor: Colors.primary }}
                            className='text-white p-3 hover:scale-105 transition rounded-lg w-2/5' >
                            Copy Invite
                        </button>
                        <button
                            style={{ borderColor: Colors.primary, color: Colors.primary }}
                            className=' p-3 border-2 hover:scale-105 transition rounded-lg w-2/5' >
                            Create & Join
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewRoomPopup;