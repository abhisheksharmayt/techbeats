import React, { useEffect, useState } from 'react'
import AudioCard from './AudioCard';
import { audioData } from '../utils/audioData';

const Main = ({ imgUrl }) => {
    // const [data, setData] = useState(audioData);
    return (
        <main className='min-h-screen p-10 flex flex-col items-center md:px-14'>
            {/* <img className='w-[350px] mt-10' src={imgUrl} alt="Tech Beats Logo" /> */}
            <div className='w-full p-5 flex gap-8 flex-wrap justify-center'>
                {
                    audioData.map((currSound, index) => {
                        const { id } = currSound;
                        return (
                            <AudioCard key={id} sound={currSound} />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Main