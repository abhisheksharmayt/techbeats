import React, { useState, useEffect } from 'react'
import Main from './Main';
import Navbar from './Navbar';
import Chat from './Chat';
import Footer from './Footer';
import GithubCard from './GithubCard';
import { useGlobalContext } from '../context/globalContext';
import Options from './Options';
import NewlyAdded from './NewlyAdded';

const App = () => {
  const { showChat, openChat, closeChat, imgUrl } = useGlobalContext();

  return (
    <div className={`relative h-screen ${showChat && 'overflow-hidden'}`}>
      <Navbar imgUrl={imgUrl} openChat={openChat} />
      <Options />
      <Main imgUrl={imgUrl} ></Main>
      {showChat && <Chat closeChat={closeChat} />}
      <GithubCard />
      <NewlyAdded />
      <Footer />
    </div>
  )
}

export default App