import React from 'react'
import Header from './header.editor'
import Editor from './editor.component'
import Output from './output.component'

const Main = () => {
  return (
      <div className='rounded-lg bg-white'>
      <Header />
      <div className='flex flex-row'>

      <Editor />
      <Output />
      </div>
    </div>
  )
}

export default Main