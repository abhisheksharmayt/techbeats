import React, { useEffect, useRef, useState } from 'react'
import { getUrl } from '../firebase';

const AudioCard = ({ title, fileName }) => {
    const [url, setUrl] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.1);
    const audio = useRef();
    useEffect(() => {
        audio.current.volume = volume;
    }, [volume])
    const playAudio = async () => {
        if (url === null) {
            setUrl(await getUrl(fileName));
        }
        setTimeout(() => {
            console.log("hello")
            setIsPlaying(!isPlaying);
            isPlaying ? audio.current.pause() : audio.current.play();
        }, 0)

    }
    return (
        <div className={`p-1 rounded-lg m-4 ${isPlaying ? 'bg-gradient-to-r from-[#FF8008] to-[#FFC837]' : 'bg-[#495057]'}`}>
            <div className='bg-[#343a40] text-[#e9ecef] rounded-lg p-3' onClick={playAudio}>
                <h1>{title}</h1>
                <audio src={url} loop ref={audio}></audio>
                <p className={`${isPlaying ? 'text-green-400' : 'text-red-400'}`}>{isPlaying ? 'true' : 'false'}</p>
                <input type="range" min="0" max="10" value={volume*10} onChange={(e) => {
                    setVolume(e.target.value/10);
                }}
                onClick={(e)=>{e.stopPropagation()}}
                 />
            </div>
        </div>
    )
}

export default AudioCard