'use client'
import { GlobalState } from '@/redux/store'
import { useAppSelector } from '@/services/hooks'
import React from 'react'

const Loader = () => {
    const loaderStatus = useAppSelector(
        (state: GlobalState) => state.misc.isLoading
    )
    return (
        <div
            className={`h-screen w-screen bg-white flex items-center justify-center absolute ${
                !loaderStatus ? 'hidden' : ''
            } `}
        >
            <p className="text-black">Loading....</p>
        </div>
    )
}

export default Loader
