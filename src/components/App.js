import React, { useState, useEffect } from 'react'
import Main from './Main';
import { github } from '../utils/icons';

const App = () => {

  return (
    <div className='relative'>
      <a href="https://github.com/abhisheksharmayt">
        <div className='github bg-white w-72 h-60 fixed bottom-0 right-0 rotate-[-48deg] translate-x-44 translate-y-28'>
          {github}
        </div>
      </a>
      <Main></Main>
    </div>
  )
}

export default App