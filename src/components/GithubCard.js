import React from 'react'
import { github } from '../utils/icons';

const GithubCard = () => {
  return (
      <a href="https://github.com/abhisheksharmayt" target="_blank">
          <div className='github bg-slate-900 p-3 w-72 h-72 fixed bottom-0 left-0 rotate-[45deg] translate-y-48 -translate-x-48 md:translate-y-[172px] md:-translate-x-[172px] transition-all'>
              {github}
          </div>
      </a>
  )
}

export default GithubCard;