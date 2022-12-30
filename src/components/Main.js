import React, { useEffect, useState } from 'react'
import AudioCard from './AudioCard';

const audioData = [
    { id: 1, title: 'Walking', fileName: 'walking' },
    { id: 2, title: 'Birds', fileName: 'birds' },
    { id: 3, title: 'Campfire', fileName: 'campfire' },
    { id: 4, title: 'Fireworks', fileName: 'fireworks2' },
    { id: 5, title: 'Marching Band', fileName: 'marchingBand' },
    { id: 6, title: 'Carnival', fileName: 'carnival' },
    { id: 7, title: 'Marching Band', fileName: 'marchingBand' },
    { id: 8, title: 'Marching Band', fileName: 'marchingBand' },
    { id: 9, title: 'Marching Band', fileName: 'marchingBand' },
    { id: 10, title: 'Marching Band', fileName: 'marchingBand' },
    { id: 11, title: 'Marching Band', fileName: 'marchingBand' },
    { id: 12, title: 'Marching Band', fileName: 'marchingBand' },
]

const Main = () => {
    const [data, setData] = useState(audioData);
    return (
        <main className='min-h-screen bg-[#212529] p-5'>
            {
                data.map((curr, index) => {
                    const { id, title, fileName } = curr;
                    return (
                        <AudioCard key={index} title={title} fileName={fileName} />
                    )
                })
            }
        </main>
    )
}

export default Main