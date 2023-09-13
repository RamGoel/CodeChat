"use client";
import AdsBox from '@/components/ads/ads.page'
import SiteHeader from '@/components/header/site.header'
import JoinRoom from '@/components/joinroom/joinRoom.component'
import Recents from '@/components/recents/recents.component'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Dashboard = () => {
    const session = useSession()
    const router=useRouter()
    if (!session || !session.data?.user) {
        router.push('/');
        return;
    }
  return (
      <div className='w-11/12 mx-auto'>
          <SiteHeader />
          <AdsBox />
          <Recents />
          <JoinRoom />
    </div>
  )
}

export default Dashboard