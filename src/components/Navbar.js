import React from 'react'
import { techBeatsLogo } from '../utils/icons'


const Navbar = ({ imgUrl, openChat }) => {
    return (
        <nav className='flex justify-center w-screen  pt-6 font-open'>
            <div className='w-full px-16 flex items-center py-3'>
                <div className='mr-auto md:px-4'>
                    {techBeatsLogo}
                </div>
                <div className='bg-gradient-to-r from-[#FF8008] to-[#FFC837] p-[2px] rounded-lg cursor-pointer' onClick={openChat}>
                    <button className='py-2 px-5 rounded-lg bg-slate-900 h-full text-white md:py-3 md:px-8'>Chat</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar