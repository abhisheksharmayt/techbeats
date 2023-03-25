import React from 'react'
import { BsShuffle } from 'react-icons/bs'

const Options = () => {
  return (
    <div className='px-10 mt-5 text-white flex justify-between items-center'>
        <div className='flex gap-4'>
            <button className='px-4 py-3 bg-slate-900 border-[1px] border-slate-700 rounded-md'>Productivity</button>
            <button className='px-4 py-3 bg-slate-900 border-[1px] border-slate-700 rounded-md'>Focus</button>
            <button className='px-4 py-3 bg-slate-900 border-[1px] border-slate-700 rounded-md'>Relax</button>
        </div>
        <div>
              <button className='px-4 py-3 bg-slate-900 border-[1px] border-slate-700 rounded-md self-stretch text-xl'>
                <BsShuffle/>
            </button>
        </div>
    </div>
  )
}

export default Options