import { ElementPlus, Profile, Setting2 } from 'iconsax-react'
import React from 'react'

const Menu = () => {
  return (
      <div className='bg-zinc-900 rounded-lg p-2 absolute top-20' style={{width:150, transition:'.5s'}} >
          <div className='flex items-center justify-start rounded-lg hover:bg-zinc-800 cursor-pointer p-2'>
              <ElementPlus />
              <p className='ml-2'>New Room</p>
         </div>
          <div className='flex items-center justify-start rounded-lg hover:bg-zinc-800 cursor-pointer p-2'>
              <Profile />
              <p className='ml-2'>Profile</p>
         </div>
          <div className='flex items-center justify-start rounded-lg hover:bg-zinc-800 cursor-pointer p-2'>
              <Setting2 />
              <p className='ml-2'>Settings</p>
         </div>
    </div>
  )
}

export default Menu