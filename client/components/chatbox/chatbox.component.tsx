import { GlobalState } from '@/redux/store'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const Chatbox = () => {
    const {userName}=useSelector((state:GlobalState)=>state.auth)
  return (
      <div className='p-2 h-screen bg-red-700'>
          <div>
              <div className='h-40 w-full bg-white rounded-xl'>
                  <div className='py-2 px-4 flex flex-row items-center justify-start'>
                      <div>
                          
                      <Image
                          src={'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000' }
                          height={60}
                          width={40}
                          className='rounded-full mr-2'
                      />
                      <h2>{userName || "Anonymous User"}</h2>
                      </div>
                      <div>
                          
                      </div>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Chatbox