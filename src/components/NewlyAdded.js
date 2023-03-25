import React from 'react'
import { useGlobalContext } from '../context/globalContext'
import { IoMusicalNotes } from 'react-icons/io5'

const NewlyAdded = () => {
    const { addedList } = useGlobalContext();
    return (
        <div className='fixed right-0 bottom-0 w-full p-5 flex flex-col items-end transition-all'>
            {
                addedList.map((sound)=>{
                    return (
                        <div key={sound.id} className='slide-in fade-out mt-2 pl-[4px] bg-[#FF8008] overflow-hidden rounded-md'>
                            <div className='bg-slate-900 h-full w-full text-white px-10 py-2 flex gap-2 items-center rounded-r text-lg font-light'>
                                <p>Playing {sound.title}...</p>
                                <IoMusicalNotes color='#FFC837' />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NewlyAdded