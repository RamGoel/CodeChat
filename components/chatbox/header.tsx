import {type GlobalState} from '@/redux/store';
import React from 'react';
import {useSelector} from 'react-redux';
import Image from 'next/image';
const Header = () => {
  const {roomName} = useSelector((state: GlobalState) => state.auth);

  return (
    <div>
      <div className="py-1 flex flex-row items-center justify-start">
        <div style={{all: 'inherit'}}>
          <Image
            alt="Profile Image"
            src={
              'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000'
            }
            height={40}
            width={40}
            style={{objectFit: 'cover', height: 40, width: 40}}
            className="rounded-full mx-2"
          />
          <h2 className="text-black">{roomName || 'Anonymous Room'}</h2>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
