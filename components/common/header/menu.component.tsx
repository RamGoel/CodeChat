import { ElementPlus, Logout,  Profile, Setting2, Menu } from 'iconsax-react'
import React from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useAppDispatch } from '@/services/hooks'
import { enablePopup } from '@/redux/slices/miscSlice'
const MenuComponent = () => {
     const dispatch=useAppDispatch()
  return (
      <div className='bg-zinc-900 rounded-lg p-2 absolute top-20 right-20' style={{width:150, transition:'.5s'}} >
          <button onClick={()=>dispatch(enablePopup())} className='flex items-center justify-start rounded-lg hover:bg-zinc-800 cursor-pointer p-2'>
              <ElementPlus />
              <p className='ml-2'>New Room</p>
         </button>
      <Link href={'/dashboard'} className='flex items-center justify-start rounded-lg hover:bg-zinc-800 cursor-pointer p-2'>
              <Menu/>
              <p className='ml-2'>Dashboard</p>
         </Link>
      <Link href={'/profile'} className='flex items-center justify-start rounded-lg hover:bg-zinc-800 cursor-pointer p-2'>
              <Profile />
              <p className='ml-2'>Profile</p>
         </Link>
          <div className='flex items-center justify-start rounded-lg hover:bg-zinc-800 cursor-pointer p-2'>
              <Setting2 />
              <p className='ml-2'>Settings</p>
         </div>
          <div onClick={()=>signOut()} className='flex items-center justify-start rounded-lg hover:bg-zinc-800 cursor-pointer p-2'>
              <Logout />
              <p className='ml-2'>Log Out</p>
         </div>
    </div>
  )
}

export default MenuComponent