import React, { useEffect, useState } from 'react'
import AudioCard from './AudioCard';
import { getUrl } from '../firebase';
import { audioData } from '../images/audioData';

const Main = () => {
    const [data, setData] = useState(audioData);
    const [imgUrl, setImgUrl] = useState(null);
    useEffect(() => {
        const fetchUrl = async () => {
            const url = await getUrl('images/techBeatsLogo.png');
            setImgUrl(url);
        }
        fetchUrl();
    }, [])
    return (
        <main className='min-h-screen p-5 flex flex-col items-center'>
            <img className='w-[400px]' src={imgUrl} alt="Tech Beats Logo" />
            <div className='w-full p-5 flex gap-5 flex-wrap justify-evenly'>
                {
                    data.map((curr, index) => {
                        const { id, title, fileName, icon } = curr;
                        return (
                            <AudioCard key={index} title={title} fileName={fileName} icon={icon} />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Main