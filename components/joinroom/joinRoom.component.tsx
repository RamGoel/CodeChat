import { Colors } from '@/utils/colors'
import { ArrowRight2 } from 'iconsax-react'
import React from 'react'

const JoinRoom = () => {
  return (
      <div className='px-4 mt-6'>
          <h3 className='text-white text-xl'>Join a code room</h3>
          <div className='mt-3 flex items-center justify-between w-1/4'>
              <input className='bg-zinc-800 p-3 text-white rounded-lg ' placeholder='12-digit room id' />
              <div className='p-2 rounded-full hover:scale-110 transition-all' style={{backgroundColor:Colors.primary, width:40, height:40}}>
                  <ArrowRight2 className='text-white' />
              </div>
          </div>
      </div>
      
  )
}

export default JoinRoom