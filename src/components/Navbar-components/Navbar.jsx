import React from 'react'
import Youtubeimage from "./Youtubeimage"
import { RxHamburgerMenu } from "react-icons/rx";
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <div className='flex gap-16'>
      <div className='flex items-center gap-6 ml-7'>
      <RxHamburgerMenu/>
      <Youtubeimage/>
    </div>

    <div>
      <Searchbar/>
    </div>
    </div>
  )
}

export default Navbar
