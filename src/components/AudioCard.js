import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context/globalContext';
import { getUrl } from '../firebase';

const AudioCard = ({ sound }) => {
    const { title, fileName, icon, id, isPlaying } = sound;
    const { justAdded, addToCurrentPlaying, removeFromCurrentPlaying, toggleSound } = useGlobalContext();
    const [url, setUrl] = useState(null);
    const [volume, setVolume] = useState(0.5);
    const audio = useRef();
    useEffect(() => {
        audio.current.volume = volume;
    }, [volume])

    useEffect(() => {
        const handlePlay = async () => {
            if (isPlaying && url === null) {
                setUrl(await getUrl(fileName));
            }
            setTimeout(() => {
                isPlaying ? audio.current.play() : audio.current.pause();
            }, 0)
        }
        handlePlay();
    }, [isPlaying])


    const playAudio = async () => {
        toggleSound(id);
    }

    const handleClick = () => {
        playAudio();
        if (!isPlaying) {
            addToCurrentPlaying(sound);
            justAdded(sound);
        }
        else {
            removeFromCurrentPlaying(sound);
        }
    }

    return (
        <div
            className={`grid-item justify-self-stretch p-[2px] rounded-2xl min-w-[280px] ${isPlaying ? 'bg-gradient-to-r from-[#FF8008] to-[#FFC837]' : 'bg-[#1e293b]'}`}
            onClick={handleClick}
        >
            <div className='bg-[#0f1729] text-[#e9ecef] rounded-2xl p-5 py-8'>
                <div className={`flex flex-col items-center icons transition-all ${(isPlaying) ? 'opacity-100' : 'opacity-40'}`}>
                    {icon}
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-open font-medium my-4 text-xl text-center'>{title}</h1>
                    <audio src={url} loop ref={audio}></audio>
                    {/* <p className={`${isPlaying ? 'text-green-400' : 'text-red-400'}`}>{isPlaying ? 'true' : 'false'}</p> */}
                    <input type="range" min="0" max="100" value={volume * 100} onChange={(e) => {
                        setVolume(e.target.value / 100);
                    }}
                        onClick={(e) => { e.stopPropagation() }}
                    />
                </div>
            </div>
        </div>
    )
}

export default AudioCard