"use client";
import AdsBox from '@/components/dashboard/ads/ads.page'
import SiteHeader from '@/components/common/header/site.header'
import JoinRoom from '@/components/dashboard/joinroom/joinRoom.component'
import Recents from '@/components/dashboard/recents/recents.component'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()
  // useEffect(() => {
  //   if (!session || !session.data?.user) {
  //     router.push('/');
  //     return;
  //   }
  // }, [router, session])
  return (
    session.data?.user ? <div className='w-11/12 mx-auto'>
      <SiteHeader />
      {/* <AdsBox /> */}
      <Recents />
      <JoinRoom />
    </div> : <></>
  )
}

export default Dashboard