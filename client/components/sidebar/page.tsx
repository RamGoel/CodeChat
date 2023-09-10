import { Home, MessageQuestion, People, Setting } from 'iconsax-react'
import React from 'react'

const Sidebar = () => {
    
    const sidebarData = [
        {
            title: "Home",
            icon:<Home color='#fff' />
        },
        {
            title: "Members",
            icon:<People color='#fff' />
        },
        {
            title: "Settings",
            icon:<Setting color='#fff' />
        },
        {
            title: "Help",
            icon:<MessageQuestion color='#fff' />
        },
    ]
  return (
      <div className='px-2 py-3'>
          {
              sidebarData.map(elem => {
                  return <div className='flex my-2 items-center cursor-pointer hover:bg-gray-900 p-3 rounded-lg'>
                      {elem.icon}
                      <p className='text-white ml-2'>{elem.title}</p>
                      </div>
              })
          }
    </div>
  )
}

export default Sidebar