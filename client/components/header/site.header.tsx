import { Colors } from '@/utils/colors'
import { Google } from 'iconsax-react'
import React from 'react'
import Image from 'next/image'

const SiteHeader = () => {
  return (
      <div className='p-4 bg-black text-white flex flex-row items-center justify-between'>
          <div className='flex flex-row items-baseline w-2/5 justify-start'>
              <h3 style={{
                  fontWeight: 700,
                  fontSize:30
              }}>cochat<span  style={{ color: Colors.primary }}>.</span></h3>
              <p className='ml-2'>/built by @RamGoel</p>
          </div>
          <div className='flex flex-row items-baseline w-1/5 justify-start'>
              <button className='flex flex-row items-center justify-between bg-zinc-900 p-2 px-3 rounded-lg'>
                  <Image src={require('@/public/google.png')} width={20} height={20} alt='google-icon' />
                  <p className='ml-2'>Sign in with Google</p>
              </button>
          </div>
    </div>
  )
}

export default SiteHeader