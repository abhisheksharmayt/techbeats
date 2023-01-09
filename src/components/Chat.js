import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
const Chat = ({closeChat}) => {
    return (
        <div className='fixed h-screen w-full  top-0 left-0 flex justify-center items-center p-5 backdrop-blur-sm'>
            <div className='relative p-5 w-full max-w-3xl h-full max-h-[70vh] bg-slate-900 border-4 border-slate-800 rounded-xl flex justify-center items-center'>
                <button className='closeButton bg-slate-800 absolute right-0 top-0 m-5 p-3 rounded-lg font-bold' onClick={closeChat}><AiOutlineClose color='white' className='text-xl' /></button>
                <p className='text-white font-open tracking-wider text-3xl'>Coming Soon!!!</p>
            </div>
        </div>
    )
}

export default Chat