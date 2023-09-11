import { GlobalState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

const Output = () => {
    const output=useSelector((state:GlobalState)=>state.code.output)
  return (
    <div className='flex w-full items-center justify-center'>
          <textarea value={output} contentEditable={false}  className='
          w-11/12
          mx-auto
          bg-slate-900
          h-40
          text-white
          focus-visible:border-none outline-none
          rounded-lg
          resize-none
          p-2
          font-mono
          '></textarea>
    </div>
  )
}

export default Output