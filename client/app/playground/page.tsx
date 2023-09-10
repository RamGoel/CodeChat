"use client";
import Chatbox from '@/components/chatbox/chatbox.component';
import Header from '@/components/header/header.component';
import Sidebar from '@/components/sidebar/page';
import { GlobalState } from '@/redux/store'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Playground = () => {
    const { inviteLink, userName, roomName, code, output } = useSelector((state: GlobalState) => state.auth)
    const [sidebar, setSidebar]=useState(false)
    return (
      <div className='h-screen bg-black'>
            <Header switchSidebar={()=>setSidebar(old=>!old)} />
      <div className='flex flex-row bg-black'>
          <div style={{
            position: 'absolute',
            top: 60,
            left: sidebar ? 0 : -300,
            backgroundColor: 'black',
            transition: '0.5s',
          }} className={`w-1/5`}>
            <Sidebar />
          </div>
          <div className='w-1/3 bg-slate-500'>
          <Chatbox />
          </div>
      </div>
      </div>
  )
}

export default Playground
