import { DocumentUpload } from 'iconsax-react'
import React, { useState } from 'react'
import { LoaderIcon } from 'react-hot-toast'

const Header = ({execFn, isCompiling}:{execFn:Function, isCompiling:boolean}) => {
  const [lang, setLang]=useState('python3')
  return (
      <div className='flex items-center justify-between px-3 py-2'>
          <div>
              <p>index.html</p>
          </div>
          <div style={{ all: 'inherit' }}>
              <button onClick={()=>execFn(lang)} className='bg-zinc-700 rounded-lg p-2 text-white hover:scale-105 transition'>
                  {!isCompiling ? "Execute" : <LoaderIcon />}
              </button>
              <DocumentUpload size={35} className='
                        hover:bg-gray-300
                        cursor-pointer
                        rounded-full
                        p-2
                        mr-3
                    ' />
              <select onChange={e=>setLang(e.target.value)}>
                  <option value={'python3'} selected>Python</option>
                  <option value={'nodejs'}>Nodejs</option>
                  <option value={'c'}>C</option>
                  <option value={'cpp'}>C++</option>
                  <option value={'java'}>Java</option>
              </select>
          </div>
    </div>
  )
}

export default Header