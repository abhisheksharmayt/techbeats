import React from 'react'


const Navbar = ({imgUrl, openChat}) => {
    return (
        <nav className='flex justify-center w-screen  py-6 font-open'>
            <div className=' w-full px-8 max-w-6xl flex py-3'>
                <img className='w-[80px] block mr-auto' src={imgUrl} alt="Logo" />
                <div className='bg-gradient-to-r from-[#FF8008] to-[#FFC837] p-[2px] rounded-lg cursor-pointer' onClick={openChat}>
                    <button className='py-2 px-10 rounded-lg bg-slate-900 h-full text-white'>Chat</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar