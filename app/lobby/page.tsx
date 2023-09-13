"use client"
import React, { useCallback, useState } from 'react'
import { joinRoom } from './lobby.actions'
import { useRouter } from 'next/navigation'
import { setDetails } from '@/redux/slices/authSlice'
import { useAppDispatch } from '@/services/hooks'

export interface lobbyDetailsProps{
  userName: string,
  roomName:string
}
const Lobby = () => {
  const router=useRouter()
  const [data, setData] = useState<lobbyDetailsProps>({
    userName: "",
    roomName: ""
  })
  const dispatch=useAppDispatch()

  const handleChange = (key: string, value: string) => {
    setData({ ...data, [key]: value })
  }

  const handleSubmit = useCallback((e:any) => {
    e.preventDefault()
    console.log(data)
    dispatch(setDetails(data))
    dispatch(joinRoom(data, () => {
      router.push('/playground')
    }))
  }, [data, dispatch, router])
  return (
    <div className='h-screen w-screen bg-black text-white flex items-center justify-center'>
      <div className='bg-gray-900 p-10 rounded-lg'>

        <h1 className='font-sans text-3xl font-medium'>Welcome to Lobby</h1>
        <br />
        <form onSubmit={(e)=>handleSubmit(e)}>
          <label
            htmlFor='name'
            className='font-sans text-md block my-2 w-full'>Username : </label>
          <input
            onChange={(e) => handleChange("userName", e.target.value)}
            value={data.userName}
            id='name'
            type='text'
            className="p-2 rounded-md mb-3 w-full text-black"
            required={true} />
          <br />

          <label
            htmlFor='room'
            className='font-sans text-md block my-2 w-full'>
            Room Name
          </label>
          <input
            onChange={(e) => handleChange("roomName", e.target.value)}
            value={data.roomName}
            id='room'
            type='text'
            className="p-2 rounded-md mb-3 w-full text-black"
            required={true} />
          <br />
          <button
            type='submit'
            className='bg-orange-800 px-5 py-2 w-full rounded-lg hover:bg-orange-600 duration-75'>
            Join
          </button>
        </form>
      </div>
    </div>
  )
}

export default Lobby