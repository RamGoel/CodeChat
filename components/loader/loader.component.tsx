"use client";
import { GlobalState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';

const Loader = () => {
    const loaderStatus=useSelector((state:GlobalState)=>state.loader.isLoading)
    return (
        <div className={`h-screen w-screen bg-white flex items-center justify-center absolute ${!loaderStatus?'hidden':''} `}>
            <p className='text-black'>Loading....</p>
      </div>
  )
}

export default Loader;