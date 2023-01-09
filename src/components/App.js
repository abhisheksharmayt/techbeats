import React, { useState, useEffect } from 'react'
import Main from './Main';
import Navbar from './Navbar';
import Chat from './Chat';
import { github } from '../utils/icons';
import { getUrl } from '../firebase';

const App = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    const fetchUrl = async () => {
      const url = await getUrl('images/techBeatsLogo.png');
      setImgUrl(url);
    }
    fetchUrl();
  }, [])

  const openChat = ()=> setShowChat(true);
  const closeChat = ()=> setShowChat(false);

  return (
    <div className={`relative h-screen ${showChat && 'overflow-hidden' }`}>
      <Navbar imgUrl={imgUrl} openChat={openChat} />
      <Main imgUrl={imgUrl} ></Main>
      { showChat && <Chat closeChat={closeChat} /> }
      <a href="https://github.com/abhisheksharmayt" target="_blank">
        <div className='github bg-slate-900 w-72 h-60 fixed bottom-0 left-0 rotate-[48deg] -translate-x-36 translate-y-36'>
          {github}
        </div>
      </a>
      <div className='text-center font-open font-medium text-white pb-10'>
        Built with ❤️ by <a className='hover:underline transition-all' href="https://abhisheksharma.tech" target="_blank">Abhishek Sharma</a>
      </div>
    </div>
  )
}

export default App