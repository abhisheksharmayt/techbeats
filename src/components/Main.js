import React, { useEffect, useState } from 'react'
import AudioCard from './AudioCard';
import { getUrl } from '../firebase';

const audioData = [
    { id: 1, title: 'Walking', fileName: 'ambient/walking.mp3' },
    { id: 2, title: 'Birds', fileName: 'ambient/birds.mp3' },
    { id: 3, title: 'Campfire', fileName: 'ambient/campfire.mp3' },
    { id: 4, title: 'Fireworks', fileName: 'ambient/fireworks2.mp3' },
    { id: 5, title: 'Marching Band', fileName: 'ambient/marchingBand.mp3' },
    { id: 6, title: 'Carnival', fileName: 'ambient/carnival.mp3' },
    { id: 7, title: 'Chime Bells', fileName: 'ambient/chimeBells.mp3' },
    { id: 8, title: 'City Traffic', fileName: 'ambient/cityTraffic.mp3' },
    { id: 9, title: 'Forest', fileName: 'ambient/forest.mp3' },
    { id: 10, title: 'Highway', fileName: 'ambient/highway3.mp3' },
    { id: 11, title: 'Night Woods', fileName: 'ambient/nightWoods.mp3' },
    { id: 12, title: 'NYC Metro', fileName: 'ambient/nycMetro.mp3' },
    { id: 13, title: 'Office', fileName: 'ambient/office.mp3' },
    { id: 14, title: 'Playground', fileName: 'ambient/playground.mp3' },
    { id: 15, title: 'Rain Thunder', fileName: 'ambient/rainThunder.mp3' },
    { id: 16, title: 'Typing', fileName: 'ambient/typing.mp3' },
    { id: 17, title: 'Train', fileName: 'ambient/train.mp3' },
    { id: 18, title: 'River', fileName: 'ambient/river.mp3' },
]

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
        <main className='min-h-screen bg-[#212529] p-5 flex flex-col items-center'>
            <img className='w-[400px]' src={imgUrl} alt="Tech Beats Logo" />
            <div className='w-full p-5 flex gap-5 flex-wrap justify-evenly'>
                {
                    data.map((curr, index) => {
                        const { id, title, fileName } = curr;
                        return (
                            <AudioCard key={index} title={title} fileName={fileName} />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Main