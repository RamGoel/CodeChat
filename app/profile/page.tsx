'use client';
import SiteHeader from '@/components/common/header/site.header';
import NameToPic from '@/components/common/nameToPic/page';
import {useSession} from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const Profile = () => {
  const {data: session} = useSession();

  return (
    <div className="md:w-11/12 sm:w-full mx-auto">
      <SiteHeader />
      <div className="mt-4">
        <div>
          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt="profile"
              width={100}
              height={100}
            />
          ) : (
            <div style={{width: 100, height: 100}}>
              <NameToPic
                extraTWClass="text-4xl"
                name={session?.user?.name || 'User'}
              />
            </div>
          )}
        </div>
        <div className="mt-4">
          <h2 className="text-white text-2xl font-bold">
            {session?.user?.name ?? 'Anonymous User'}
          </h2>
          <h2 className="text-white text-lg">{session?.user?.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
