import React from 'react'
import { BsShuffle } from 'react-icons/bs'
import { useGlobalContext } from '../context/globalContext';
import { IoMusicalNotes } from 'react-icons/io5'

const Options = () => {
  const { currentPlaying, playFocus, playProductive, playRelax, playRandom } = useGlobalContext();
  return (
    <div className='mb-5 text-white w-full'>
      <div className='flex justify-between'>
        <div className='flex gap-4 flex-wrap mr-10'>
          <button
            className='px-4 py-2 bg-slate-900 border-[1px] border-slate-700 rounded-md'
            onClick={playProductive}
          >
            Productivity
          </button>
          <button
            className='px-4 py-2 bg-slate-900 border-[1px] border-slate-700 rounded-md'
            onClick={() => playFocus()}
          >
            Focus
          </button>
          <button
            className='px-4 py-2 bg-slate-900 border-[1px] border-slate-700 rounded-md'
            onClick={playRelax}
          >
            Relax
          </button>
        </div>
        <div>
          <button
            className='px-4 py-3 bg-slate-900 border-[1px] border-slate-700 rounded-md self-stretch text-xl'
            onClick={playRandom}
          >
            <BsShuffle />
          </button>
        </div>
      </div>
      {
        (currentPlaying.length === 0) ? (
          <p className='mt-3 text-lg flex gap-2 items-center'>
            Click on tile to play that sound
            <IoMusicalNotes />
          </p>
        ) : (
          <p className='mt-3'>
            <span className='text-[#FFC837] font-medium mr-2 text-lg'>Now Playing &gt; </span>
            {
              currentPlaying.map((sound, index) => {
                const { id, title } = sound;
                return <span key={id} >{sound.title}{(index !== currentPlaying.length - 1) && ', '}</span>
              })
            }
          </p >
        )
      }
    </div >
  )
}

export default Options