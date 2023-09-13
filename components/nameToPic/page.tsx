import { Colors } from '@/utils/colors'
import React from 'react'

const NameToPic = ({ name, onClick}: { name: string, onClick:Function }) => {
    const splittedName=name.split(' ')
  return (
      <div
          onClick={()=>onClick()}
          className='rounded-full shadow-md flex flex-row items-center justify-center ml-2 cursor-pointer'
          style={{
              width: '40px',
              height: '40px',
              backgroundColor: Colors.primary
          }}>
          <p className='font-bold'>{splittedName[0][0]}{splittedName.length > 1 ? splittedName[1][0]:null}</p>
    </div>
  )
}

export default NameToPic