import { GlobalState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'
import {Add, Logout, LogoutCurve} from 'iconsax-react'
const Header = () => {
    const {userName, roomName}=useSelector((state:GlobalState)=>state.auth)
  return (
      <div className='bg-black py-3 text-white px-3 border-b-violet-600 flex flex-row items-center justify-between'>
          <div className='w-1/4'>
              <h1>{userName}@{roomName}</h1>
          </div>
          <div className='w-1/3 flex flex-row items-center justify-end'>
              <button className='
              text-white
              px-4
              py-2
              rounded-xl 
              hover:bg-violet-800
              hover:scale-110
              hover:transition
              border-2
              mr-3
              border-violet-800
              flex
              flex-row
              items-center
              justify-between
              '>Log out <LogoutCurve className='ml-2' size={20}/></button>
              <button className='
              bg-violet-700
              px-4
              py-2
              rounded-xl 
              hover:bg-violet-800
              hover:scale-110
              hover:transition
              flex
              flex-row
              items-center
              justify-between
              '>Invite Friends <Add className='ml-2' size={20}/></button>
          </div>
    </div>
  )
}

export default Header