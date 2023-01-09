import React, { useState, useEffect } from 'react'
import Main from './Main';
import Navbar from './Navbar';
import { github } from '../utils/icons';
import { getUrl } from '../firebase';

const App = () => {
  const [imgUrl, setImgUrl] = useState(null);
  useEffect(() => {
    const fetchUrl = async () => {
      const url = await getUrl('images/techBeatsLogo.png');
      setImgUrl(url);
    }
    fetchUrl();
  }, [])
  return (
    <div className='relative'>
      <Navbar imgUrl={imgUrl} />
      <Main imgUrl={imgUrl} ></Main>
      <a href="https://github.com/abhisheksharmayt">
        <div className='github bg-slate-900 w-72 h-60 fixed bottom-0 left-0 rotate-[48deg] -translate-x-36 translate-y-36'>
          {github}
        </div>
      </a>
      <div className='text-center font-open font-medium text-white'>
        Built with ❤️ by <a className='hover:underline transition-all' href="https://twitter.com/abhishheksharma">Abhishek Sharma</a>
      </div>
    </div>
  )
}

export default App