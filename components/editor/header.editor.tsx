import { DocumentUpload } from 'iconsax-react'
import React from 'react'

const Header = () => {
  return (
      <div className='flex items-center justify-between px-3 py-2'>
          <div>
              <p>index.html</p>
          </div>
          <div style={{all:'inherit'}}>
              <DocumentUpload size={35} className='
                        hover:bg-gray-300
                        cursor-pointer
                        rounded-full
                        p-2
                        mr-3
                    ' />
              <select>
                  <option>Python</option>
                  <option>Nodejs</option>
                  <option>C</option>
                  <option>C++</option>
                  <option>PHP</option>
              </select>
          </div>
    </div>
  )
}

export default Header