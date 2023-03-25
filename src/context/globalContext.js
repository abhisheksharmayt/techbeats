import React,{useState, useEffect, useContext} from 'react'
import { getUrl } from '../firebase';

const globalContext = React.createContext();

const GlobalProvider = ({ children }) => {
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
    
    const addToCurrentPlaying = (sound) => setAddedList([...currentPlaying, sound]);
    const removeFromCurrentPlaying = (sound) => {
        let tempList = [...currentPlaying];
        tempList.filter((item)=> item != sound);
        setCurrentPlaying(tempList);
    }

    const justAdded = (sound)=>{
        let newList = [...addedList];
        newList.push(sound);
        setAddedList(newList)
        setTimeout(()=>{
            setAddedList((currList)=>{
                let newList = [...currList];
                newList.shift();
                return newList;
            });
        },3000);
    }

    return (
        <globalContext.Provider
            value={{
                imgUrl,
                showChat,
                openChat,
                closeChat,
                currentPlaying,
                addedList,
                justAdded,
                addToCurrentPlaying,
                removeFromCurrentPlaying,
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