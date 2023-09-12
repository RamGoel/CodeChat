"use client";
import { Colors } from '@/utils/colors'
import { Google } from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { signIn, useSession, signOut } from 'next-auth/react'
import NameToPic from '../nameToPic/page';
import Menu from './menu.component';

const SiteHeader = () => {
    const [isPopupShow, setPopupShow]=useState(false)
    const { data: session } = useSession()
    return (
        <div className='p-4 bg-black text-white flex flex-row items-center justify-between'>
            <div className='md:flex md:items-baseline w-full md:w-2/5 md:justify-start'>
                <h3 style={{
                    fontWeight: 700,
                    fontSize: 30
                }} className='sm:text-small'>cochat<span style={{ color: Colors.primary }}>.</span></h3>
                <p className='ml-2'>/built by @RamGoel</p>
            </div>
            <div className='flex flex-row items-baseline  w-full md:w-1/5 justify-end'>
                {(session && session.user) ? <div className='flex flex-row items-center justify-between'>
                    <button onClick={()=>signOut()} className='bg-white rounded-lg px-4 font-medium text-black py-2'>Log out</button>
                    {!!session.user.image
                        ? <Image onClick={() => {
                            setPopupShow(old=>!old)
                        }} src={session?.user?.image} className='rounded-full ml-2 cursor-pointer' width={40} height={40} alt='profile-image' />
                        : <NameToPic onClick={() => {
                            setPopupShow(old=>!old)
                        }} name={session.user.name || 'A'} />
                    }
                    {isPopupShow ? <Menu /> : false}
                </div> : <button onClick={() => signIn()} className='flex flex-row items-center justify-between bg-zinc-900 p-2 px-3 rounded-lg'>
                    <Image src={require('@/public/google.png')} width={20} height={20} alt='google-icon' />
                    <p className='ml-2'>Sign in with Google</p>
                </button>}
            </div>
        </div>
    )
}

export default SiteHeader