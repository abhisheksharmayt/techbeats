import React, { useState, useEffect, useContext } from 'react'
import { getUrl } from '../firebase';
import { audioData } from '../utils/audioData';

const globalContext = React.createContext();

const GlobalProvider = ({ children }) => {
    const [soundsData, setSoundsData] = useState(audioData);
    const [imgUrl, setImgUrl] = useState(null);
    const [showChat, setShowChat] = useState(false);
    const [currentPlaying, setCurrentPlaying] = useState([]);
    const [addedList, setAddedList] = useState([]);
    useEffect(() => {
        const fetchUrl = async () => {
            const url = await getUrl('images/techBeatsLogo.png');
            setImgUrl(url);
        }
        fetchUrl();
    }, [])

    const openChat = () => setShowChat(true);
    const closeChat = () => setShowChat(false);

    const addToCurrentPlaying = (sound) => {
        setCurrentPlaying((current) => {
            return [...current, sound]
        })
    }
    const removeFromCurrentPlaying = (sound) => {
        setCurrentPlaying((curr) => {
            let tempList = curr.filter((item) => item.id != sound.id);
            return tempList;
        });
    }

    const justAdded = (sound) => {
        setAddedList((currList) => {
            let newList = [...currList];
            newList.push(sound);
            return newList;
        })
        setTimeout(() => {
            setAddedList((currList) => {
                let newList = [...currList];
                newList.shift();
                return newList;
            });
        }, 3000);
    }

    const toggleSound = (id) => {
        let tempData = [...soundsData]
        tempData.forEach(sound => {
            if (sound.id === id) {
                sound.isPlaying = !sound.isPlaying;
            }
        });
        setSoundsData(tempData);
    }

    const playFocus = () => {
        let tempData = [...soundsData];
        tempData.forEach(sound => {
            const { title } = sound
            if (title === 'Farm' || title === 'Birds' || title === 'Wind') {
                sound.isPlaying = true;
                if (!currentPlaying.includes(sound)) {
                    addToCurrentPlaying(sound);
                    justAdded(sound);
                }
            }
            else {
                removeFromCurrentPlaying(sound);
                sound.isPlaying = false;
            }
        })
        setSoundsData(tempData);
    }

    const playRelax = () => {
        let tempData = [...soundsData];
        tempData.forEach(sound => {
            const { title } = sound
            if (title === 'Campfire' || title === 'Rain Thunder') {
                sound.isPlaying = true;
                if (!currentPlaying.includes(sound)) {
                    addToCurrentPlaying(sound);
                    justAdded(sound);
                }
            }
            else {
                removeFromCurrentPlaying(sound);
                sound.isPlaying = false;
            }
        })
        setSoundsData(tempData);
    }

    const playProductive = () => {
        let tempData = [...soundsData];
        tempData.forEach(sound => {
            const { title } = sound
            if (title === 'Library' || title === 'Forest' || title === 'River') {
                sound.isPlaying = true;
                if (!currentPlaying.includes(sound)) {
                    addToCurrentPlaying(sound);
                    justAdded(sound);
                }
            }
            else {
                removeFromCurrentPlaying(sound);
                sound.isPlaying = false;
            }
        })
        setSoundsData(tempData);
    }

    const playRandom = () => {
        let randomNumbers = [];
        const size = soundsData.length;
        randomNumbers.push(Math.floor(Math.random()*size));
        randomNumbers.push(Math.floor(Math.random()*size));
        randomNumbers.push(Math.floor(Math.random()*size));


        let tempData = [...soundsData];
        tempData.forEach((sound, index) => {
            const { title } = sound
            if (index === randomNumbers[0] || index === randomNumbers[1] || index === randomNumbers[2]) {
                sound.isPlaying = true;
                if (!currentPlaying.includes(sound)) {
                    addToCurrentPlaying(sound);
                    justAdded(sound);
                }
            }
            else {
                removeFromCurrentPlaying(sound);
                sound.isPlaying = false;
            }
        })
        setSoundsData(tempData);
    }

    return (
        <globalContext.Provider
            value={{
                soundsData,
                imgUrl,
                showChat,
                openChat,
                closeChat,
                currentPlaying,
                addedList,
                justAdded,
                addToCurrentPlaying,
                removeFromCurrentPlaying,
                toggleSound,
                playFocus,
                playRelax,
                playProductive,
                playRandom
            }}
        >
            {children}
        </globalContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(globalContext);
}

export { GlobalProvider, useGlobalContext };