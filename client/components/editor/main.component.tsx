import React from 'react'
import Header from './header.editor'
import Editor from './editor.component'
import Output from './output.component'

const Main = () => {
  return (
      <div className='rounded-lg bg-white'>
      <Header />
      <Editor />
      <br />
      <Output />
    </div>
  )
}

export default Main