import React from 'react'
import { Link } from 'react-router-dom'
import { MdBarChart } from 'react-icons/md'
import { BsFillHouseFill, BsPersonCircle } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

import { links } from '../assets/constants'
import SearchBar from './SearchBar'

const NavBar = ({openSidebar, setOpenSidebar}) => {
  return (
    <div className='w-screen py-4 border-b border-white/75 flex flex-row gap-4 items-center justify-between px-[calc(0.5em_+_3vw)]'>
            <div className='flex flex-row gap-4 items-center justify-center'>
                <Link to="/"><BsFillHouseFill size={24} color='white'/></Link>
                <Link to="/"><BsPersonCircle size={24}/></Link>
            </div>
    
            <SearchBar />
            <button onClick={()=> setOpenSidebar(true)} className='sm:hidden h-[2em] w-[2em] rounded-full cursor-pointer flex items-center justify-center text-white '>
                <MdBarChart  size={24}/>
            </button>
            <div className={` ${openSidebar ? "scale-100":"scale-0"} bg-linear-to-br from-orange-500 to-blue-700/75  origin-top transform transition w-screen h-screen pt-10 flex flex-col fixed top-0 right-0 items-center justify-center gap-4 z-50 `}>
                <button onClick={()=> setOpenSidebar(false)} className='absolute top-3 right-3 text-white border-2 border-white rounded-full opacity-50  font-bold text-3xl cursor-pointer hover:opacity-100'>
                  <FaTimes/></button>
                <div className='w-full h-max py-10 flex text-2xl font-bold flex-col items-center justify-start gap-6'>
                    {links.map((link)=> {
                        return (
                          <Link to={`${link.to}`} key={link.name}>
                            {link.name}
                          </Link>
                        )
                    })}
                </div>
            </div>
        </div>
  )
}

export default NavBar