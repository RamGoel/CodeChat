"use client";
import Chatbox from '@/components/chatbox/chatbox.component';
import Header from '@/components/header/header.component';
import { GlobalState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

const Playground = () => {
  const { inviteLink, userName, roomName, code, output } = useSelector((state: GlobalState) => state.auth)
    
    return (
      <div className='h-screen'>
            <Header />
      <div className='flex flex-row'>
          <div className='w-1/2 bg-slate-500'>
              
          <Chatbox />
          </div>
          <div className='w-1/2 bg-red-100'>
              
          <Chatbox />
          </div>
      </div>
      </div>
  )
}

export default Playground