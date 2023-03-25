import React, { useEffect, useState } from 'react'
import AudioCard from './AudioCard'
import Options from './Options';
import { audioData } from '../utils/audioData'

const Main = ({ imgUrl }) => {
    // const [data, setData] = useState(audioData);
    return (
        <main className='min-h-screen p-10 md:px-14'>
            {/* <img className='w-[350px] mt-10' src={imgUrl} alt="Tech Beats Logo" /> */}
            <div className='apply-grid w-full p-5 gap-4'>
                <Options />
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