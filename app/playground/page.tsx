"use client";
import Chatbox from '@/components/chatbox/chatbox.component';
import Editor from '@/components/editor/main.component';
import Header from '@/components/common/header/header.component';
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
      <div className='flex sm:flex-col md:flex-row w-11/12 mx-auto bg-black'>
          <div style={{
            position: 'absolute',
            top: 60,
            left: sidebar ? 0 : -300,
            backgroundColor: 'black',
            transition: '0.5s',
          }} className={`w-1/5`}>
            <Sidebar />
          </div>
          <div className='md:w-1/3 sm:w-full '>
          <Chatbox />
          </div>
          <div className='md:w-3/4 sm:w-full'>
          <Editor />
          </div>
      </div>
      </div>
  )
}

export default Playground
